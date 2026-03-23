import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getMerchantBalance } from '@/lib/services/stripe-service'

export async function GET() {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized', code: 'UNAUTHORIZED' }, { status: 401 })
    }

    // TODO: fetch merchant's stripeAccountId and financialAccountId from Supabase
    const balance = await getMerchantBalance('acct_demo', 'fa_demo')

    return NextResponse.json({
      success: true,
      data: {
        balance,
        currency: 'usd',
        updatedAt: new Date().toISOString(),
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch balance', code: 'SERVER_ERROR' }, { status: 500 })
  }
}
