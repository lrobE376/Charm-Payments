// src/lib/email.ts
// Shared Resend email sender and HTML templates.
// All templates use inline styles — safe for all email clients.
// Never log email body contents — keep PII out of server logs.
// All user-controlled values are HTML-escaped via escapeHtml() before
// interpolation to prevent HTML/script injection in inboxes.

import { escapeHtml } from '@/lib/email/escape'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://charmpayments.com'
const FROM = 'Charm Payments <noreply@charmpayments.com>'
const INTERNAL_TO = 'merchants@charmpayments.com'

// -- sender --------------------------------------------------------------------

export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return // silent no-op in local dev without key
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ from: FROM, to: [to], subject, html }),
  }).catch(() => {
    // Email failure must never block the primary response path
  })
}

// -- shared layout -------------------------------------------------------------

function layout(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
      <tr>
        <td style="background:#0c3a30;padding:24px 32px;border-radius:12px 12px 0 0;">
          <span style="color:#C9A96E;font-size:18px;font-weight:700;letter-spacing:-0.3px;">Charm Payments</span>
        </td>
      </tr>
      <tr>
        <td style="background:#ffffff;padding:32px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
          ${body}
          <p style="margin:24px 0 0;color:#374151;font-size:14px;">— The Charm Payments Team</p>
        </td>
      </tr>
      <tr>
        <td style="background:#f9fafb;padding:16px 32px;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 12px 12px;">
          <p style="margin:0;color:#9ca3af;font-size:11px;line-height:1.6;">
            Charm Payments is a registered Independent Sales Organization / Member Service Provider (ISO/MSP). Payment processing services are provided through our sponsor bank and acquiring partners. Merchant funds are subject to the terms of the Merchant Processing Agreement.
          </p>
          <p style="margin:6px 0 0;color:#9ca3af;font-size:11px;">&copy; Charm Holdings LLC &middot; St. Louis, MO</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}

function p(text: string): string {
  return `<p style="margin:0 0 14px;color:#374151;font-size:14px;line-height:1.6;">${text}</p>`
}

function link(href: string, label: string): string {
  return `<a href="${escapeHtml(href)}" style="color:#0c3a30;font-weight:600;">${escapeHtml(label)}</a>`
}

// -- templates -----------------------------------------------------------------

/** Sent to the merchant after they submit a quote/rate-audit request. */
export function quoteConfirmationHtml(firstName: string, businessName: string): string {
  const safeFirst = escapeHtml(firstName)
  const safeBusiness = escapeHtml(businessName)
  return layout(`
    <p style="margin:0 0 16px;color:#111827;font-size:15px;font-weight:600;">Hi ${safeFirst},</p>
    ${p(`We received your rate audit request for <strong>${safeBusiness}</strong>.`)}
    ${p('One of our analysts will review your processing history and send you a personalized savings report within <strong>1–2 business days</strong>. If you uploaded a statement, we\'ll use it to build an exact comparison against your current rates.')}
    ${p(`In the meantime, ${link(`${SITE_URL}/faq`, 'browse our FAQ')} or ${link(`${SITE_URL}/contact`, 'reach out directly')} if you have questions.`)}
  `)
}

/** Sent internally to the Charm team when a new quote request arrives. */
export function quoteInternalAlertHtml(
  name: string,
  businessName: string,
  email: string,
  phone: string,
  volume: string | undefined,
  processor: string | undefined,
  hasStatement: boolean,
  statementUrls: string[],
): string {
  const safeName = escapeHtml(name)
  const safeBusiness = escapeHtml(businessName)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone)
  const safeVolume = escapeHtml(volume ?? 'Not provided')
  const safeProcessor = escapeHtml(processor ?? 'Not provided')

  const stmtSection = hasStatement && statementUrls.length > 0
    ? `<p style="margin:12px 0 4px;font-size:13px;font-weight:700;color:#111827;">Statement files:</p>
       <ul style="margin:0;padding-left:20px;">${statementUrls
        .map((u) => {
          const safeU = escapeHtml(u)
          return `<li style="font-size:13px;color:#374151;margin-bottom:4px;"><a href="${safeU}" style="color:#0c3a30;">${safeU}</a></li>`
        })
        .join('')}</ul>`
    : `<p style="font-size:13px;color:#6b7280;margin:8px 0;">No statement uploaded.</p>`

  return layout(`
    <p style="margin:0 0 16px;color:#111827;font-size:15px;font-weight:700;">New rate audit request</p>
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:16px;">
      ${[
        ['Name', safeName],
        ['Business', safeBusiness],
        ['Email', `<a href="mailto:${safeEmail}" style="color:#0c3a30;">${safeEmail}</a>`],
        ['Phone', `<a href="tel:${safePhone}" style="color:#0c3a30;">${safePhone}</a>`],
        ['Monthly Volume', safeVolume],
        ['Current Processor', safeProcessor],
        ['Statement', hasStatement ? 'Yes' : 'No'],
      ].map(([label, value]) => `
        <tr>
          <td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#6b7280;white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:6px 0;font-size:13px;color:#111827;">${value}</td>
        </tr>`).join('')}
    </table>
    ${stmtSection}
    ${p('Review this lead in Salesforce.')}
  `)
}

/** Sent internally when a new lead is captured (contact form, website, etc.). */
export function leadInternalAlertHtml(
  name: string,
  businessName: string,
  email: string,
  phone: string,
  volume: string,
  source: string,
): string {
  const safeName = escapeHtml(name)
  const safeBusiness = escapeHtml(businessName)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone)
  const safeVolume = escapeHtml(volume)
  const safeSource = escapeHtml(source)
  return layout(`
    <p style="margin:0 0 16px;color:#111827;font-size:15px;font-weight:700;">New lead — ${safeSource}</p>
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:16px;">
      ${[
        ['Name', safeName],
        ['Business', safeBusiness],
        ['Email', `<a href="mailto:${safeEmail}" style="color:#0c3a30;">${safeEmail}</a>`],
        ['Phone', `<a href="tel:${safePhone}" style="color:#0c3a30;">${safePhone}</a>`],
        ['Monthly Volume', safeVolume],
        ['Source', safeSource],
      ].map(([label, value]) => `
        <tr>
          <td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#6b7280;white-space:nowrap;">${label}</td>
          <td style="padding:6px 0;font-size:13px;color:#111827;">${value}</td>
        </tr>`).join('')}
    </table>
    ${p('Review this lead in Salesforce.')}
  `)
}

/** Sent internally when a new support ticket is created. */
export function ticketInternalAlertHtml(
  ticketId: string,
  name: string,
  email: string,
  subject: string,
  priority: string,
  message: string,
): string {
  const safeTicketId = escapeHtml(ticketId.slice(0, 8))
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safePriority = escapeHtml(priority)
  const safePriorityUpper = escapeHtml(priority.toUpperCase())
  // Escape FIRST, then convert newlines to <br /> on the already-safe text.
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')
  return layout(`
    <p style="margin:0 0 16px;color:#111827;font-size:15px;font-weight:700;">New support ticket — ${safePriorityUpper}</p>
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:16px;">
      ${[
        ['Ticket ID', safeTicketId],
        ['Name', safeName],
        ['Email', `<a href="mailto:${safeEmail}" style="color:#0c3a30;">${safeEmail}</a>`],
        ['Subject', safeSubject],
        ['Priority', safePriority],
      ].map(([label, value]) => `
        <tr>
          <td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#6b7280;white-space:nowrap;">${label}</td>
          <td style="padding:6px 0;font-size:13px;color:#111827;">${value}</td>
        </tr>`).join('')}
    </table>
    <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#111827;">Message:</p>
    <p style="margin:0 0 16px;font-size:13px;color:#374151;background:#f9fafb;padding:12px;border-radius:8px;border:1px solid #e5e7eb;">${safeMessage}</p>
    ${p('Review this ticket in Salesforce.')}
  `)
}

/**
 * Sent to a merchant when their application is approved via NMI boarding.
 * Triggered by the NMI approval webhook (Phase 6).
 */
export function merchantApprovalHtml(
  firstName: string,
  businessName: string,
  mid: string,
): string {
  const safeFirst = escapeHtml(firstName)
  const safeBusiness = escapeHtml(businessName)
  const safeMid = escapeHtml(mid)
  return layout(`
    <p style="margin:0 0 16px;color:#111827;font-size:15px;font-weight:600;">Hi ${safeFirst},</p>
    ${p(`Great news — your merchant account for <strong>${safeBusiness}</strong> has been approved and is ready to process payments.`)}
    <table cellpadding="0" cellspacing="0" style="width:100%;margin:16px 0;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;">
      <tr>
        <td style="padding:8px 12px 8px 0;font-size:13px;font-weight:600;color:#166534;">Merchant ID (MID)</td>
        <td style="padding:8px 0;font-size:13px;font-weight:700;color:#166534;font-family:monospace;">${safeMid}</td>
      </tr>
    </table>
    ${p(`Our team will be in touch shortly with your gateway credentials and onboarding instructions.`)}
    ${p(`Questions? Email ${link('mailto:merchants@charmpayments.com', 'merchants@charmpayments.com')} or call <a href="mailto:merchants@charmpayments.com" style="color:#0c3a30;font-weight:600;">merchants@charmpayments.com</a>.`)}
  `)
}

/** Sent to a merchant when their application is declined. */
export function merchantDeclineHtml(firstName: string, businessName: string, reason?: string): string {
  const safeFirst = escapeHtml(firstName)
  const safeBusiness = escapeHtml(businessName)
  const reasonBlock = reason
    ? p(`After reviewing your application, our underwriting team noted: <em>${escapeHtml(reason)}</em>`)
    : p(`After careful review, our underwriting team was unable to approve your application at this time.`)

  return layout(`
    <p style="margin:0 0 16px;color:#111827;font-size:15px;font-weight:600;">Hi ${safeFirst},</p>
    ${p(`Thank you for applying to accept payments with <strong>${safeBusiness}</strong>.`)}
    ${reasonBlock}
    ${p(`You are welcome to reapply in 30 days if your business circumstances change, or ${link('mailto:merchants@charmpayments.com', 'contact our team')} if you believe this decision was made in error.`)}
  `)
}

export { INTERNAL_TO, SITE_URL }

