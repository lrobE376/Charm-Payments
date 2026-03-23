import { NextResponse } from 'next/server'
import { creditMerchantFromSettlement } from '@/lib/services/stripe-service'

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      event_type?: string
      transaction_id?: string
      amount?: string | number
      merchant_id?: string
      description?: string
    }

    // TODO: verify NMI webhook signature when NMI credentials are active
    const { event_type, transaction_id, amount, merchant_id, description } = body

    if (event_type !== 'transaction.settled') {
      return NextResponse.json({ received: true })
    }

    const merchantId = merchant_id ?? 'unknown'
    const amountStr = amount !== undefined && amount !== null ? String(amount) : '0'
    const amountCents = Math.round(parseFloat(amountStr) * 100)

    await creditMerchantFromSettlement(
      `acct_${merchantId}`,
      `fa_${merchantId}`,
      amountCents,
      description ?? `Settlement — txn ${transaction_id ?? 'unknown'}`
    )

    return NextResponse.json({
      success: true,
      received: true,
    })
  } catch {
    return NextResponse.json({ error: 'Webhook processing failed', code: 'SERVER_ERROR' }, { status: 500 })
  }
}
