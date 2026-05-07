import { createTicket, getTickets } from '@/lib/services/ticket-service'
import { sendTicketReceivedNotification } from '@/lib/integrations/notifications'
import { parseTicketCreateBody } from '@/lib/validators/ticket-payload'
import { jsonError, jsonSuccess } from '@/lib/api-response'
import { triggerZap } from '@/lib/integrations/zapier'
import { requireAdmin } from '@/lib/auth/admin'
import { rateLimitGate } from '@/lib/rate-limit/simple'

export async function GET(req: Request) {
  const denied = requireAdmin(req)
  if (denied) return denied
  const tickets = await getTickets()
  return jsonSuccess({ tickets })
}

export async function POST(req: Request) {
  const limited = rateLimitGate(req)
  if (limited) return limited
  try {
    const body: unknown = await req.json()
    const parsed = parseTicketCreateBody(body)
    if (!parsed.ok) return jsonError(parsed.error, 400, parsed.code)
    const ticket = await createTicket(parsed.value)
    // Fire-and-forget — do not await, must not block response
    triggerZap('ticket', {
      leadId: ticket.leadId,
      accountId: ticket.accountId,
      name: ticket.name,
      email: ticket.email,
      subject: ticket.subject,
      message: ticket.message,
      priority: ticket.priority,
    }).catch(() => {
      // Already logged inside triggerZap
    })
    await sendTicketReceivedNotification(ticket)
    return jsonSuccess({ ticket })
  } catch {
    return jsonError('Unable to process request', 500, 'SERVER_ERROR')
  }
}
