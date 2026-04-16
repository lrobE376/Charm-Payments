import { createLead, getLeads } from '@/lib/services/lead-service'
import { sendLeadReceivedNotification } from '@/lib/integrations/notifications'
import { parseLeadCreateBody } from '@/lib/validators/lead-payload'
import { jsonError, jsonSuccess } from '@/lib/api-response'
import { triggerZap } from '@/lib/integrations/zapier'

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
    // Fire-and-forget — do not await, must not block response
    triggerZap('lead', {
      name: lead.name,
      businessName: lead.businessName,
      email: lead.email,
      phone: lead.phone,
      monthlyVolume: lead.monthlyVolume,
      source: lead.source,
      notes: lead.notes || undefined,
    }).catch(() => {
      // Already logged inside triggerZap
    })
    await sendLeadReceivedNotification(lead)
    return jsonSuccess({ lead })
  } catch {
    return jsonError('Unable to process request', 500, 'SERVER_ERROR')
  }
}
