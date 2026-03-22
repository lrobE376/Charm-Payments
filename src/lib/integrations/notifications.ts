import type { IntegrationResult } from '@/types/integration'

/** TODO: Resend, SendGrid, SES, or internal queue — keep PII out of logs in production. */

export async function sendLeadReceivedNotification(leadId: string): Promise<IntegrationResult> {
  return {
    success: true,
    provider: 'email',
    message: `Stub: notify sales team of new lead ${leadId}`,
  }
}

export async function sendTicketReceivedNotification(ticketId: string): Promise<IntegrationResult> {
  return {
    success: true,
    provider: 'email',
    message: `Stub: notify support queue of new ticket ${ticketId}`,
  }
}

export async function sendApprovalNotification(merchantId: string): Promise<IntegrationResult> {
  return {
    success: true,
    provider: 'email',
    message: `Stub: approval notice for merchant ${merchantId}`,
  }
}
