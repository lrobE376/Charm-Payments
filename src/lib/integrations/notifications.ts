// src/lib/integrations/notifications.ts
import {
  sendEmail,
  leadInternalAlertHtml,
  ticketInternalAlertHtml,
  merchantApprovalHtml,
  INTERNAL_TO,
} from '@/lib/email'
// Note: direct approval/decline emails are sent from the approve/decline API
// routes (they need the magic link). sendApprovalNotification is kept here only
// for legacy call sites that don't have a magic link available.
import type { IntegrationResult } from '@/types/integration'
import type { Lead } from '@/types/lead'
import type { Ticket } from '@/types/ticket'

export async function sendLeadReceivedNotification(lead: Lead): Promise<IntegrationResult> {
  try {
    await sendEmail(
      INTERNAL_TO,
      `New lead: ${lead.businessName} (${lead.source})`,
      leadInternalAlertHtml(
        lead.name,
        lead.businessName,
        lead.email,
        lead.phone,
        lead.monthlyVolume,
        lead.source,
      ),
    )
    return { success: true, provider: 'email', message: 'Lead notification sent' }
  } catch {
    return { success: false, provider: 'email', message: 'Lead notification failed' }
  }
}

export async function sendTicketReceivedNotification(ticket: Ticket): Promise<IntegrationResult> {
  try {
    await sendEmail(
      INTERNAL_TO,
      `[${ticket.priority.toUpperCase()}] New ticket: ${ticket.subject}`,
      ticketInternalAlertHtml(
        ticket.id,
        ticket.name,
        ticket.email,
        ticket.subject,
        ticket.priority,
        ticket.message,
      ),
    )
    return { success: true, provider: 'email', message: 'Ticket notification sent' }
  } catch {
    return { success: false, provider: 'email', message: 'Ticket notification failed' }
  }
}

export async function sendApprovalNotification(
  merchantId: string,
  firstName: string,
  businessName: string,
  email: string,
  mid: string,
): Promise<IntegrationResult> {
  try {
    await sendEmail(
      email,
      `Your merchant account is approved — ${businessName}`,
      merchantApprovalHtml(firstName, businessName, mid),
    )
    return { success: true, provider: 'email', externalId: merchantId, message: 'Approval email sent' }
  } catch {
    return { success: false, provider: 'email', message: 'Approval email failed' }
  }
}
