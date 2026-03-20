import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { business_name, ein, owner_email, owner_first_name, owner_last_name, account_number, ...rest } = body
    if (!business_name || !ein || !owner_email || !owner_first_name || !owner_last_name) {
      return NextResponse.json({ error: 'Missing required fields', code: 'VALIDATION_ERROR' }, { status: 400 })
    }
    const supabase = await createClient()
    const account_last4 = typeof account_number === 'string' && account_number.length >= 4 ? account_number.slice(-4) : '0000'
    const { error } = await supabase.from('merchant_applications').insert({
      business_name,
      ein,
      owner_email,
      owner_first_name,
      owner_last_name,
      account_last4,
      ...rest,
      status: 'submitted',
    })
    if (error) return NextResponse.json({ error: 'Failed to submit application', code: 'DB_ERROR' }, { status: 500 })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error', code: 'SERVER_ERROR' }, { status: 500 })
  }
}
