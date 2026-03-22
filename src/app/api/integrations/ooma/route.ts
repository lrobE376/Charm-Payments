import { createCallActivityPlaceholder } from '@/lib/integrations/ooma'
import { logCallActivity } from '@/lib/integrations/pipedrive'
import { jsonError, jsonSuccess } from '@/lib/api-response'
import type { IntegrationResult } from '@/types/integration'

function sanitizePipedriveForClient(result: IntegrationResult): IntegrationResult {
  const msg = result.message
  if (/token|not configured|api_token|PIPEDRIVE_API_TOKEN/i.test(msg)) {
    return { ...result, message: 'CRM sync temporarily unavailable.', raw: undefined }
  }
  return { ...result, raw: undefined }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { dealId?: string; leadName?: string; phone?: string; note?: string }
    const dealId = body.dealId
    const leadName = body.leadName
    const phone = body.phone

    if (!dealId || !leadName || !phone) {
      return jsonError('dealId, leadName, and phone are required', 400, 'MISSING_FIELDS')
    }

    const activity = createCallActivityPlaceholder(phone, leadName)

    const pipedriveRaw = await logCallActivity(dealId, leadName, phone, body.note)
    const pipedrive = sanitizePipedriveForClient(pipedriveRaw)

    return jsonSuccess({ activity, pipedrive })
  } catch {
    return jsonError('Failed to log call activity', 500, 'SERVER_ERROR')
  }
}
