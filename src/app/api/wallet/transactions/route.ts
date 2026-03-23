import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getMerchantTransactions } from '@/lib/services/stripe-service'

export async function GET() {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized', code: 'UNAUTHORIZED' }, { status: 401 })
    }

    const transactions = await getMerchantTransactions('acct_demo', 'fa_demo', 20)

    return NextResponse.json({
      success: true,
      data: transactions,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch transactions', code: 'SERVER_ERROR' }, { status: 500 })
  }
}
