import { createLead, getLeads } from '@/lib/services/lead-service'
import { sendLeadReceivedNotification } from '@/lib/integrations/notifications'
import { parseLeadCreateBody } from '@/lib/validators/lead-payload'
import { jsonError, jsonSuccess } from '@/lib/api-response'

export async function GET() {
  const leads = await getLeads()
  return jsonSuccess({ leads })
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json()
    const parsed = parseLeadCreateBody(body)
    if (!parsed.ok) return jsonError(parsed.error, 400, parsed.code)
    const lead = await createLead(parsed.value)
    await sendLeadReceivedNotification(lead.id)
    return jsonSuccess({ lead })
  } catch {
    return jsonError('Unable to process request', 500, 'SERVER_ERROR')
  }
}
