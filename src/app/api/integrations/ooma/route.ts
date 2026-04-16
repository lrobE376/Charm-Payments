// src/app/api/integrations/ooma/route.ts
import { createCallActivityPlaceholder } from '@/lib/integrations/ooma'
import { jsonError, jsonSuccess } from '@/lib/api-response'

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { leadName?: string; phone?: string; note?: string }
    const leadName = body.leadName
    const phone = body.phone

    if (!leadName || !phone) {
      return jsonError('leadName and phone are required', 400, 'MISSING_FIELDS')
    }

    const activity = createCallActivityPlaceholder(phone, leadName)

    return jsonSuccess({ activity })
  } catch {
    return jsonError('Failed to log call activity', 500, 'SERVER_ERROR')
  }
}
