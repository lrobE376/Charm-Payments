import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createOutboundTransfer } from '@/lib/services/stripe-service'

export async function POST(req: Request) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized', code: 'UNAUTHORIZED' }, { status: 401 })
    }

    const body = (await req.json()) as {
      amount?: number
      routingNumber?: string
      accountNumber?: string
      accountHolderName?: string
      transferType?: 'ach' | 'wire'
    }

    const { amount, routingNumber, accountNumber, accountHolderName, transferType } = body

    if (
      amount === undefined ||
      amount === null ||
      !routingNumber ||
      !accountNumber ||
      !accountHolderName
    ) {
      return NextResponse.json({ error: 'All bank details are required.', code: 'MISSING_FIELDS' }, { status: 400 })
    }

    const amountNum = typeof amount === 'number' ? amount : Number(amount)
    if (Number.isNaN(amountNum) || amountNum < 1) {
      return NextResponse.json({ error: 'Minimum transfer amount is $1.00.', code: 'AMOUNT_TOO_LOW' }, { status: 400 })
    }

    const transfer = await createOutboundTransfer(
      'acct_demo',
      'fa_demo',
      Math.round(amountNum * 100),
      routingNumber,
      accountNumber,
      accountHolderName,
      transferType ?? 'ach'
    )

    return NextResponse.json({
      success: true,
      data: transfer,
    })
  } catch {
    return NextResponse.json({ error: 'Transfer failed. Please try again.', code: 'SERVER_ERROR' }, { status: 500 })
  }
}
