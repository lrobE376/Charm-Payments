// src/app/api/admin/applications/[id]/approve/route.ts
//
// POST /api/admin/applications/[id]/approve
//
// Body: { mid: string, notes?: string }
//
// Steps executed in order:
//  1. Verify admin session
//  2. Load application — 404 if not found, 409 if already approved
//  3. Create (or retrieve) Supabase auth user for the merchant's email
//  4. Generate a one-time magic-link so the merchant can log in without setting a password
//  5. Upsert merchant record in public.merchants (links user_id)
//  6. Update merchant_applications.status → 'approved'
//  7. Append row to application_status_history
//  8. Send approval email (non-blocking — failure does not roll back approval)

import { requireAdmin } from '@/lib/auth/require-admin'
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'
import { sendEmail, merchantApprovalHtml } from '@/lib/email'

interface ApproveBody {
  mid: string
  notes?: string
}

interface ApplicationRow {
  id: string
  status: string
  owner_first_name: string
  owner_last_name: string
  owner_email: string
  business_name: string
  owner_phone: string | null
  city: string | null
  state: string | null
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  // ── 1. Admin guard ──────────────────────────────────────────────────────────
  const guard = await requireAdmin()
  if (!guard.ok) return guard.response

  const { id } = await params

  // ── Parse + validate body ──────────────────────────────────────────────────
  let body: ApproveBody
  try {
    body = (await request.json()) as ApproveBody
  } catch {
    return jsonError('Invalid JSON', 400, 'INVALID_BODY')
  }

  if (!body.mid?.trim()) {
    return jsonError('mid is required', 400, 'VALIDATION_ERROR')
  }

  const db = createAdminClient()

  // ── 2. Load application ────────────────────────────────────────────────────
  const { data: appRow } = await db
    .from('merchant_applications')
    .select(
      'id, status, owner_first_name, owner_last_name, owner_email, business_name, ' +
      'owner_phone, city, state',
    )
    .eq('id', id)
    .single()

  const app = appRow as ApplicationRow | null

  if (!app) return jsonError('Application not found', 404, 'NOT_FOUND')
  if (app.status === 'approved') {
    return jsonError('Application is already approved', 409, 'ALREADY_APPROVED')
  }

  // ── 3. Create or retrieve Supabase auth user ────────────────────────────────
  // createUser() is idempotent-ish: if the email already exists it returns an
  // error with code "email_exists". We handle that by looking up the existing
  // user instead, so we can still link the merchant record.
  const email = app.owner_email as string

  let authUserId: string

  const { data: newUser, error: createError } = await db.auth.admin.createUser({
    email,
    email_confirm: true,   // mark email as confirmed — magic link handles login
    user_metadata: {
      full_name: `${app.owner_first_name} ${app.owner_last_name}`,
      business_name: app.business_name,
    },
  })

  if (createError) {
    if (createError.message?.toLowerCase().includes('already been registered')) {
      // User exists — fetch their id
      const { data: existingUsers } = await db.auth.admin.listUsers()
      const found = existingUsers?.users.find((u) => u.email === email)
      if (!found) {
        return jsonError(
          'Email already registered but user could not be located',
          500,
          'AUTH_USER_LOOKUP_FAILED',
        )
      }
      authUserId = found.id
    } else {
      return jsonError(
        `Failed to create auth user: ${createError.message}`,
        500,
        'AUTH_CREATE_FAILED',
      )
    }
  } else {
    authUserId = newUser.user.id
  }

  // ── 4. Generate magic link ─────────────────────────────────────────────────
  // generateLink returns a hashed_token URL that logs the user in immediately.
  // We embed it in the approval email so the merchant clicks once and lands in
  // their dashboard without needing to set a password first.
  let loginLink: string | undefined
  const { data: linkData, error: linkError } = await db.auth.admin.generateLink({
    type: 'magiclink',
    email,
  })
  if (!linkError && linkData?.properties?.hashed_token) {
    // Build the full redirect URL pointing to our site, not the Supabase project URL
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://charmpayments.com'
    loginLink = `${siteUrl}/auth/confirm?token_hash=${linkData.properties.hashed_token}&type=magiclink&next=/dashboard`
  }
  // Magic link failure is not fatal — the email falls back to /login

  // ── 5. Upsert merchant record ──────────────────────────────────────────────
  // Check whether a merchant row already exists for this user or MID.
  const { data: existingMerchant } = await db
    .from('merchants')
    .select('id')
    .or(`user_id.eq.${authUserId},mid.eq.${body.mid}`)
    .maybeSingle()

  if (existingMerchant) {
    // Update the existing record to ensure user_id + mid are set correctly
    await db
      .from('merchants')
      .update({
        user_id: authUserId,
        mid: body.mid,
        status: 'approved',
        business_name: app.business_name,
        email,
      })
      .eq('id', existingMerchant.id)
  } else {
    const { error: merchantError } = await db.from('merchants').insert({
      user_id: authUserId,
      business_name: app.business_name,
      email,
      mid: body.mid,
      status: 'approved',
      plan: 'starter',
    })

    if (merchantError) {
      return jsonError(
        `Failed to create merchant record: ${merchantError.message}`,
        500,
        'MERCHANT_CREATE_FAILED',
      )
    }
  }

  // ── 6. Update application ──────────────────────────────────────────────────
  const { error: updateError } = await db
    .from('merchant_applications')
    .update({
      status: 'approved',
      reviewed_by: guard.user.id,
      reviewed_at: new Date().toISOString(),
      decision_notes: body.notes ?? null,
    })
    .eq('id', id)

  if (updateError) {
    // Merchant record was created but application update failed.
    // Return an error — the admin can retry; the upsert above is idempotent.
    return jsonError('Failed to update application status', 500, 'DB_ERROR')
  }

  // ── 7. Status history ──────────────────────────────────────────────────────
  await db.from('application_status_history').insert({
    application_id: id,
    status: 'approved',
    changed_by: guard.user.id,
    notes: body.notes ?? null,
  })

  // ── 8. Approval email (non-blocking) ──────────────────────────────────────
  sendEmail(
    email,
    `Your merchant account is approved — ${app.business_name}`,
    merchantApprovalHtml(
      app.owner_first_name as string,
      app.business_name as string,
      body.mid,
      loginLink,
    ),
  ).catch(() => {
    // Email failure is logged implicitly; it must not roll back the approval
  })

  return jsonSuccess({
    approved: true,
    authUserId,
    merchantCreated: !existingMerchant,
    loginLinkGenerated: Boolean(loginLink),
  })
}
