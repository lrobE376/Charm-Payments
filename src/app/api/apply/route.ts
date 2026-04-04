// src/app/api/apply/route.ts
import { createClient } from '@/lib/supabase/server'
import { jsonError, jsonSuccess } from '@/lib/api-response'

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

interface ApplicationBody {
  business_name: string
  ein: string
  owner_email: string
  owner_first_name: string
  owner_last_name: string
  owner_phone?: string
  account_number?: string
  industry?: string
  business_type?: string
  location_count?: string | number
  monthly_volume?: string
  average_ticket?: string
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
  [key: string]: unknown
}

async function pushToPipedrive(body: ApplicationBody): Promise<void> {
  const token = process.env.PIPEDRIVE_API_TOKEN
  const base = 'https://api.pipedrive.com/v1'

  const personRes = await fetch(`${base}/persons?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: `${body.owner_first_name} ${body.owner_last_name}`,
      email: [{ value: body.owner_email, primary: true }],
      ...(body.owner_phone ? { phone: [{ value: body.owner_phone, primary: true }] } : {}),
    }),
  })
  const personData = (await personRes.json()) as { data?: { id: number } }
  const personId = personData.data?.id

  const orgRes = await fetch(`${base}/organizations?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: body.business_name }),
  })
  const orgData = (await orgRes.json()) as { data?: { id: number } }
  const orgId = orgData.data?.id

  const dealRes = await fetch(`${base}/deals?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: `${body.business_name} — Merchant Application`,
      stage_id: 7,
      ...(personId ? { person_id: personId } : {}),
      ...(orgId ? { org_id: orgId } : {}),
    }),
  })
  const dealData = (await dealRes.json()) as { data?: { id: number } }
  const dealId = dealData.data?.id

  if (!dealId) return

  const note = [
    '== MERCHANT APPLICATION ==',
    `Industry: ${body.industry ?? 'N/A'}`,
    `Business type: ${body.business_type ?? 'N/A'}`,
    `Locations: ${body.location_count ?? 'N/A'}`,
    `Monthly volume: ${body.monthly_volume ?? 'N/A'}`,
    `Avg ticket: $${body.average_ticket ?? 'N/A'}`,
    `Current processor: ${body.existing_processor ?? 'None'}`,
    `Device needed: ${body.device_preference ?? 'N/A'}`,
    `Has existing POS: ${body.existing_pos_software ?? 'No'}`,
    `Has customer database: ${body.has_customer_database ?? 'No'} (${body.customer_count ?? '0'} customers)`,
    `Needs recurring billing: ${body.needs_recurring_billing ?? 'No'}`,
    `Needs online payments: ${body.needs_online_payments ?? 'No'}`,
    `Needs invoicing: ${body.needs_invoicing ?? 'No'}`,
    `Address: ${body.city ?? 'N/A'}, ${body.state ?? 'N/A'}`,
    `Notes: ${body.notes ?? ''}`,
  ].join('\n')

  await fetch(`${base}/notes?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: note, deal_id: dealId }),
  })
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ApplicationBody
    const { business_name, ein, owner_email, owner_first_name, owner_last_name, account_number } = body

    if (!business_name || !ein || !owner_email || !owner_first_name || !owner_last_name) {
      return jsonError('Missing required fields', 400, 'VALIDATION_ERROR')
    }

    const supabase = await createClient()
    const account_last4 =
      typeof account_number === 'string' && account_number.length >= 4
        ? account_number.slice(-4)
        : '0000'

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { account_number: _acct, ...rest } = body
    const { error } = await supabase.from('merchant_applications').insert({
      ...rest,
      account_last4,
      status: 'submitted',
    })

    if (error) return jsonError('Failed to submit application', 500, 'DB_ERROR')

    await sendResendEmail(
      owner_email,
      'We received your application — Charm Payments',
      applicationReceivedHtml(owner_first_name, business_name),
    )

    try {
      await pushToPipedrive(body)
    } catch {
      // Pipedrive failure does not block the response
    }

    return jsonSuccess({ submitted: true })
  } catch {
    return jsonError('Internal server error', 500, 'SERVER_ERROR')
  }
}
