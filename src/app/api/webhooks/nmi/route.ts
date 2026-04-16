// src/app/api/webhooks/nmi/route.ts
import { createHmac, timingSafeEqual } from 'crypto'
import { NextResponse } from 'next/server'

/**
 * Verifies an NMI webhook signature using HMAC-SHA256.
 * NMI sends the signature in the X-Nmi-Signature header as a hex digest.
 * If NMI_WEBHOOK_SECRET is not set the check is skipped (dev / pre-credential mode).
 */
function verifyNmiSignature(rawBody: string, signature: string, secret: string): boolean {
  const expected = createHmac('sha256', secret).update(rawBody, 'utf8').digest('hex')
  try {
    return timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expected, 'hex'))
  } catch {
    return false
  }
}

export async function POST(req: Request) {
  const rawBody = await req.text()

  const secret = process.env.NMI_WEBHOOK_SECRET
  if (secret) {
    const signature = req.headers.get('x-nmi-signature') ?? ''
    if (!verifyNmiSignature(rawBody, signature, secret)) {
      return NextResponse.json({ error: 'Invalid signature', code: 'SIGNATURE_INVALID' }, { status: 401 })
    }
  }

  let body: {
    event_type?: string
    transaction_id?: string
    amount?: string | number
    merchant_id?: string
    description?: string
  }

  try {
    body = JSON.parse(rawBody) as typeof body
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body', code: 'PARSE_ERROR' }, { status: 400 })
  }

  const { event_type, transaction_id, merchant_id } = body

  // Acknowledge all non-settlement events immediately
  if (event_type !== 'transaction.settled') {
    return NextResponse.json({ received: true })
  }

  // TODO Phase 6: on transaction.settled, update Supabase payout records
  // and trigger Zapier → Salesforce notification
  void transaction_id
  void merchant_id

  return NextResponse.json({ received: true, processed: true })
}
