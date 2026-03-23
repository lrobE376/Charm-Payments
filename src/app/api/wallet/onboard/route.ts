import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createMerchantConnectAccount, createMerchantFinancialAccount } from '@/lib/services/stripe-service'

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
      email?: string
      businessName?: string
      merchantId?: string
    }

    const { email, businessName, merchantId } = body

    if (!email?.trim() || !businessName?.trim() || !merchantId?.trim()) {
      return NextResponse.json({ error: 'email, businessName, and merchantId are required.', code: 'MISSING_FIELDS' }, { status: 400 })
    }

    const connectAccount = await createMerchantConnectAccount(email.trim(), businessName.trim(), merchantId.trim())

    const financialAccount = await createMerchantFinancialAccount(connectAccount.stripeAccountId, merchantId.trim())

    return NextResponse.json({
      success: true,
      data: { connectAccount, financialAccount },
    })
  } catch {
    return NextResponse.json({ error: 'Onboarding failed. Please try again.', code: 'SERVER_ERROR' }, { status: 500 })
  }
}
