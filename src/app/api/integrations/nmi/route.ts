import {
  createApplicationPlaceholder,
  createCustomerProfile,
  createTransactionPlaceholder,
} from '@/lib/integrations/nmi'
import { jsonError, jsonSuccess } from '@/lib/api-response'

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { action?: string; merchantRef?: string; amountCents?: number; payload?: Record<string, unknown> }
    if (body.action === 'profile' && body.merchantRef) {
      const r = await createCustomerProfile(body.merchantRef)
      return jsonSuccess({ result: r })
    }
    if (body.action === 'application') {
      const r = await createApplicationPlaceholder(body.payload ?? {})
      return jsonSuccess({ result: r })
    }
    if (body.action === 'transaction' && typeof body.amountCents === 'number') {
      const r = await createTransactionPlaceholder(body.amountCents)
      return jsonSuccess({ result: r })
    }
    return jsonError('Provide action=profile|application|transaction and required fields', 400, 'VALIDATION_ERROR')
  } catch {
    return jsonError('Unable to process request', 500, 'SERVER_ERROR')
  }
}
