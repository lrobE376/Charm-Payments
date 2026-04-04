// src/app/api/contact/route.ts
import { createLead } from '@/lib/services/lead-service'
import { sendLeadReceivedNotification } from '@/lib/integrations/notifications'
import { jsonError, jsonSuccess } from '@/lib/api-response'

type ContactBody = {
  name?: string
  email?: string
  phone?: string
  business?: string
  volume?: string
  message?: string
}

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

function emailLayout(content: string): string {
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
            ${content}
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

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const business = typeof body.business === 'string' ? body.business.trim() : ''
    const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
    const volume = typeof body.volume === 'string' ? body.volume.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''

    if (!name || !email || !business || !volume) {
      return jsonError('Name, email, business name, and estimated volume are required.', 400, 'MISSING_FIELDS')
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonError('Invalid email address', 400, 'INVALID_EMAIL')
    }

    const notes = message || 'Sales inquiry via contact form.'

    const lead = await createLead({
      name,
      businessName: business,
      email,
      phone,
      monthlyVolume: volume,
      source: 'contact',
      notes,
    })

    await sendLeadReceivedNotification(lead.id)

    // Confirmation to the submitter
    await sendResendEmail(
      email,
      "We received your message — Charm Payments",
      emailLayout(`
        <p style="margin:0 0 16px;color:#111827;font-size:15px;font-weight:600;">Hi ${name},</p>
        <p style="margin:0 0 16px;color:#374151;font-size:14px;line-height:1.6;">
          Thanks for reaching out to Charm Payments. We received your inquiry for
          <strong>${business}</strong> and a member of our team will be in touch within 1 business day.
        </p>
        <p style="margin:0 0 16px;color:#374151;font-size:14px;line-height:1.6;">
          In the meantime, you can email us at
          <a href="mailto:merchants@charmpayments.com" style="color:#0c3a30;">merchants@charmpayments.com</a>
          or call <a href="tel:+13145550198" style="color:#0c3a30;">+1 (314) 555-0198</a>.
        </p>
        <p style="margin:0;color:#374151;font-size:14px;">— The Charm Payments Team</p>
      `),
    )

    // Internal notification to the sales inbox
    await sendResendEmail(
      'merchants@charmpayments.com',
      `New contact form lead — ${business}`,
      emailLayout(`
        <p style="margin:0 0 16px;color:#111827;font-size:15px;font-weight:600;">New lead from contact form</p>
        <table cellpadding="0" cellspacing="0" style="width:100%;font-size:14px;color:#374151;">
          <tr><td style="padding:6px 0;width:130px;color:#6b7280;">Name</td><td style="padding:6px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Business</td><td style="padding:6px 0;font-weight:600;">${business}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#0c3a30;">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:6px 0;color:#6b7280;">Phone</td><td style="padding:6px 0;">${phone}</td></tr>` : ''}
          <tr><td style="padding:6px 0;color:#6b7280;">Monthly Volume</td><td style="padding:6px 0;">${volume}</td></tr>
          ${message ? `<tr><td style="padding:6px 0;color:#6b7280;vertical-align:top;">Message</td><td style="padding:6px 0;">${message}</td></tr>` : ''}
        </table>
        <p style="margin:16px 0 0;color:#6b7280;font-size:12px;">Lead ID: ${lead.id}</p>
      `),
    )

    return jsonSuccess({ leadId: lead.id })
  } catch {
    return jsonError('Unable to process your request. Please try again.', 500, 'SERVER_ERROR')
  }
}
