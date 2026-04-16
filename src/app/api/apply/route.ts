// src/app/api/apply/route.ts
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'
import { triggerZap } from '@/lib/integrations/zapier'

async function sendResendEmail(to: string, subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: 'Charm Payments <noreply@charmpayments.com>',
      to: [to],
      subject,
      html,
    }),
  }).catch(() => {
    // Email failure does not block the response
  })
}

function applicationReceivedHtml(firstName: string, businessName: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:#0c3a30;padding:28px 32px;border-radius:12px 12px 0 0;">
            <span style="color:#C9A96E;font-size:20px;font-weight:700;letter-spacing:-0.3px;">Charm Payments</span>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:32px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
            <p style="margin:0 0 16px;color:#111827;font-size:15px;font-weight:600;">Hi ${firstName},</p>
            <p style="margin:0 0 16px;color:#374151;font-size:14px;line-height:1.6;">
              We received your merchant account application for <strong>${businessName}</strong>.
              Our underwriting team typically reviews new applications within 24–48 business hours
              and will contact you by email or phone.
            </p>
            <p style="margin:0 0 16px;color:#374151;font-size:14px;line-height:1.6;">
              While you wait, feel free to explore our
              <a href="${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://charmpayments.com'}/pricing" style="color:#0c3a30;">pricing plans</a>
              or review our
              <a href="${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://charmpayments.com'}/faq" style="color:#0c3a30;">FAQ</a>.
            </p>
            <p style="margin:0 0 4px;color:#374151;font-size:14px;">Questions? Reach us at:</p>
            <p style="margin:0;color:#374151;font-size:14px;">
              <a href="mailto:merchants@charmpayments.com" style="color:#0c3a30;">merchants@charmpayments.com</a>
              &nbsp;&middot;&nbsp;
              <a href="tel:+13145550198" style="color:#0c3a30;">+1 (314) 555-0198</a>
            </p>
            <p style="margin:24px 0 0;color:#374151;font-size:14px;">— The Charm Payments Team</p>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:20px 32px;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 12px 12px;">
            <p style="margin:0;color:#9ca3af;font-size:11px;line-height:1.6;">
              Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds are subject to the terms of the Merchant Agreement.
            </p>
            <p style="margin:8px 0 0;color:#9ca3af;font-size:11px;">&copy; Charm Holdings LLC &middot; St. Louis, MO</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

// Raw bank account and routing numbers are NOT accepted.
// The client derives last-4 values before sending; raw values never leave the browser.
interface ApplicationBody {
  // Required business fields
  business_name: string
  ein: string
  owner_email: string
  owner_first_name: string
  owner_last_name: string
  // Optional personal / KYC fields
  owner_phone?: string
  owner_dob?: string
  address?: string
  zip?: string
  // Safe bank metadata — NO raw account or routing numbers
  bank_name?: string
  account_last4?: string   // exactly 4 digits, derived client-side
  routing_last4?: string   // exactly 4 digits, derived client-side
  account_type?: 'checking' | 'savings'
  // Underwriting metadata
  business_type?: string
  industry?: string
  monthly_volume?: string
  average_ticket?: string
  current_terminal?: string
  website?: string
  dba_name?: string
  location_count?: string | number
  existing_processor?: string
  device_preference?: string
  existing_pos_software?: string
  has_customer_database?: boolean | string
  customer_count?: string | number
  needs_recurring_billing?: boolean | string
  needs_online_payments?: boolean | string
  needs_invoicing?: boolean | string
  city?: string
  state?: string
  notes?: string
}

const LAST4_RE = /^\d{4}$/

/** Coerce form boolean|string values to a real boolean for PostgreSQL. */
function coerceBool(val: boolean | string | undefined | null): boolean | null {
  if (val === undefined || val === null) return null
  if (typeof val === 'boolean') return val
  const s = String(val).toLowerCase().trim()
  if (s === 'true' || s === 'yes' || s === '1') return true
  if (s === 'false' || s === 'no' || s === '0') return false
  return null
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ApplicationBody

    // ── Required field validation ────────────────────────────────────────────
    const {
      business_name,
      ein,
      owner_email,
      owner_first_name,
      owner_last_name,
      owner_phone,
      owner_dob,
      address,
      zip,
      bank_name,
      account_last4,
      routing_last4,
      account_type,
      business_type,
      industry,
      monthly_volume,
      average_ticket,
      current_terminal,
      website,
      dba_name,
      location_count,
      existing_processor,
      device_preference,
      existing_pos_software,
      has_customer_database,
      customer_count,
      needs_recurring_billing,
      needs_online_payments,
      needs_invoicing,
      city,
      state,
      notes,
    } = body

    if (!business_name || !ein || !owner_email || !owner_first_name || !owner_last_name) {
      return jsonError('Missing required fields', 400, 'VALIDATION_ERROR')
    }

    // ── Reject raw sensitive fields ──────────────────────────────────────────
    // If a client sends account_number or routing_number the request is malformed —
    // raw values must never reach this server.
    const raw = body as unknown as Record<string, unknown>
    if (raw['account_number'] !== undefined || raw['routing_number'] !== undefined) {
      return jsonError(
        'Raw bank account data is not accepted. Submit account_last4 only.',
        400,
        'RAW_BANK_DATA_REJECTED',
      )
    }

    // ── Validate last-4 format ───────────────────────────────────────────────
    if (account_last4 !== undefined && !LAST4_RE.test(account_last4)) {
      return jsonError('account_last4 must be exactly 4 digits', 400, 'VALIDATION_ERROR')
    }
    if (routing_last4 !== undefined && !LAST4_RE.test(routing_last4)) {
      return jsonError('routing_last4 must be exactly 4 digits', 400, 'VALIDATION_ERROR')
    }
    if (account_type !== undefined && account_type !== 'checking' && account_type !== 'savings') {
      return jsonError('account_type must be checking or savings', 400, 'VALIDATION_ERROR')
    }

    const supabase = createAdminClient()

    // TODO PCI: routing_number is currently stored raw because the schema has it as NOT NULL.
    // Migration to drop routing_number and make routing_last4 NOT NULL is pending.
    // Until that migration runs, we insert 'NOT_STORED' as a sentinel so the constraint
    // is satisfied without persisting the real value. The actual last-4 is in routing_last4.
    const { error } = await supabase.from('merchant_applications').insert({
      // ── NOT NULL ────────────────────────────────────────────────────────────
      business_name,
      business_type:           business_type ?? '',
      ein,
      monthly_volume:          monthly_volume ?? '',
      average_ticket:          average_ticket ?? '',
      owner_first_name,
      owner_last_name,
      owner_email,
      owner_phone:             owner_phone ?? '',
      owner_dob:               owner_dob ?? '',
      address:                 address ?? '',
      city:                    city ?? '',
      state:                   state ?? '',
      zip:                     zip ?? '',
      bank_name:               bank_name ?? '',
      routing_number:          'NOT_STORED',
      account_last4:           account_last4 ?? '',
      status:                  'submitted',
      // ── NULLABLE ────────────────────────────────────────────────────────────
      dba_name:                dba_name ?? null,
      website:                 website ?? null,
      industry:                industry ?? null,
      has_existing_pos:        null,
      existing_pos_software:   existing_pos_software ?? null,
      has_existing_processor:  null,
      existing_processor:      existing_processor ?? null,
      has_customer_database:   coerceBool(has_customer_database),
      customer_count:          customer_count ?? null,
      needs_recurring_billing: coerceBool(needs_recurring_billing),
      needs_online_payments:   coerceBool(needs_online_payments),
      needs_invoicing:         coerceBool(needs_invoicing),
      device_preference:       device_preference ?? null,
      location_count:          location_count ?? null,
      notes:                   notes ?? null,
      current_terminal:        current_terminal ?? null,
      account_type:            account_type ?? null,
      routing_last4:           routing_last4 ?? null,
    })

    if (error) {
      console.error('[apply] Supabase insert failed:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      })
      return jsonError('Failed to submit application', 500, 'DB_ERROR')
    }

    // Fire-and-forget — do not await, must not block response.
    // Full underwriting detail is routed here so Salesforce has everything
    // even though Supabase only stores the minimal record above.
    triggerZap('application', {
      // Identity
      firstName:              owner_first_name,
      lastName:               owner_last_name,
      email:                  owner_email,
      phone:                  owner_phone,
      dob:                    owner_dob,
      // Business
      businessName:           business_name,
      dbaName:                dba_name,
      businessType:           business_type,
      ein:                    ein,
      website:                website,
      industry:               industry,
      // Address
      address:                address,
      city:                   city,
      state:                  state,
      zip:                    zip,
      // Processing profile
      monthlyVolume:          monthly_volume,
      averageTicket:          average_ticket,
      currentTerminal:        current_terminal,
      existingProcessor:      existing_processor,
      devicePreference:       device_preference,
      existingPosSoftware:    existing_pos_software,
      locationCount:          location_count,
      // Customer profile
      hasCustomerDatabase:    has_customer_database,
      customerCount:          customer_count,
      needsRecurringBilling:  needs_recurring_billing,
      needsOnlinePayments:    needs_online_payments,
      needsInvoicing:         needs_invoicing,
      // Bank metadata (last4 only — never raw numbers)
      bankName:               bank_name,
      accountType:            account_type,
      accountLast4:           account_last4,
      routingLast4:           routing_last4,
      // Notes
      notes:                  notes,
    }).catch(() => {
      // Already logged inside triggerZap
    })

    await sendResendEmail(
      owner_email,
      'We received your application — Charm Payments',
      applicationReceivedHtml(owner_first_name, business_name),
    )

    return jsonSuccess({ submitted: true })
  } catch {
    return jsonError('Internal server error', 500, 'SERVER_ERROR')
  }
}
