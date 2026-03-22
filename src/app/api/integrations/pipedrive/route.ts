import { randomUUID } from 'crypto'
import { syncLeadToPipedrive } from '@/lib/integrations/pipedrive'
import { jsonError, jsonSuccess } from '@/lib/api-response'
import type { Lead } from '@/types/lead'

/** Manual / test sync — send a full Lead-shaped JSON body. */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Lead>
    if (!body.name || !body.businessName || !body.email || body.monthlyVolume === undefined || !body.source) {
      return jsonError('Lead must include name, businessName, email, monthlyVolume, source', 400, 'VALIDATION_ERROR')
    }
    const lead: Lead = {
      id: typeof body.id === 'string' ? body.id : randomUUID(),
      name: body.name,
      businessName: body.businessName,
      email: body.email,
      phone: typeof body.phone === 'string' ? body.phone : '',
      monthlyVolume: String(body.monthlyVolume),
      source: body.source,
      status: body.status ?? 'new',
      notes: typeof body.notes === 'string' ? body.notes : '',
      createdAt: typeof body.createdAt === 'string' ? body.createdAt : new Date().toISOString(),
      pipedrivePersonId: body.pipedrivePersonId,
      pipedriveOrgId: body.pipedriveOrgId,
      pipedriveDealId: body.pipedriveDealId,
      pipedriveSyncedAt: body.pipedriveSyncedAt,
    }
    const result = await syncLeadToPipedrive(lead)
    if (!result.success) {
      return jsonError('Pipedrive sync could not be completed', 502, 'PIPEDRIVE_SYNC')
    }
    return jsonSuccess({ result })
  } catch {
    return jsonError('Sync failed', 500, 'SERVER_ERROR')
  }
}
