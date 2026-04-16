// src/app/api/admin/applications/[id]/decline/route.ts
//
// POST /api/admin/applications/[id]/decline
//
// Body: { reason?: string, send_email?: boolean }
//
// Steps:
//  1. Verify admin session
//  2. Load application — 404 if not found, 409 if already declined
//  3. Update merchant_applications.status → 'declined'
//  4. Append row to application_status_history
//  5. Optionally send decline email

import { requireAdmin } from '@/lib/auth/require-admin'
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'
import { sendEmail, merchantDeclineHtml } from '@/lib/email'

interface DeclineBody {
  reason?: string
  send_email?: boolean
}

interface ApplicationRow {
  id: string
  status: string
  owner_first_name: string
  owner_email: string
  business_name: string
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  // ── 1. Admin guard ──────────────────────────────────────────────────────────
  const guard = await requireAdmin()
  if (!guard.ok) return guard.response

  const { id } = await params

  let body: DeclineBody = {}
  try {
    body = (await request.json()) as DeclineBody
  } catch {
    // body is optional — empty body is fine
  }

  const db = createAdminClient()

  // ── 2. Load application ────────────────────────────────────────────────────
  const { data: appRow } = await db
    .from('merchant_applications')
    .select('id, status, owner_first_name, owner_email, business_name')
    .eq('id', id)
    .single()

  const app = appRow as ApplicationRow | null

  if (!app) return jsonError('Application not found', 404, 'NOT_FOUND')
  if (app.status === 'declined') {
    return jsonError('Application is already declined', 409, 'ALREADY_DECLINED')
  }

  // ── 3. Update application ──────────────────────────────────────────────────
  const { error: updateError } = await db
    .from('merchant_applications')
    .update({
      status: 'declined',
      reviewed_by: guard.user.id,
      reviewed_at: new Date().toISOString(),
      decision_notes: body.reason ?? null,
    })
    .eq('id', id)

  if (updateError) return jsonError('Failed to update application status', 500, 'DB_ERROR')

  // ── 4. Status history ──────────────────────────────────────────────────────
  await db.from('application_status_history').insert({
    application_id: id,
    status: 'declined',
    changed_by: guard.user.id,
    notes: body.reason ?? null,
  })

  // ── 5. Decline email (only when explicitly requested) ─────────────────────
  if (body.send_email !== false && app.owner_email) {
    sendEmail(
      app.owner_email as string,
      `Update on your Charm Payments application — ${app.business_name}`,
      merchantDeclineHtml(
        app.owner_first_name as string,
        app.business_name as string,
        body.reason,
      ),
    ).catch(() => {})
  }

  return jsonSuccess({ declined: true })
}
