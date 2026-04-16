import { createTicket, getTickets } from '@/lib/services/ticket-service'
import { sendTicketReceivedNotification } from '@/lib/integrations/notifications'
import { parseTicketCreateBody } from '@/lib/validators/ticket-payload'
import { jsonError, jsonSuccess } from '@/lib/api-response'

export async function GET() {
  const tickets = await getTickets()
  return jsonSuccess({ tickets })
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json()
    const parsed = parseTicketCreateBody(body)
    if (!parsed.ok) return jsonError(parsed.error, 400, parsed.code)
    const ticket = await createTicket(parsed.value)
    await sendTicketReceivedNotification(ticket)
    return jsonSuccess({ ticket })
  } catch {
    return jsonError('Unable to process request', 500, 'SERVER_ERROR')
  }
}
