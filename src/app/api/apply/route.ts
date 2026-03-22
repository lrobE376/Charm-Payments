import { createClient } from '@/lib/supabase/server'
import { jsonError, jsonSuccess } from '@/lib/api-response'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { business_name, ein, owner_email, owner_first_name, owner_last_name, account_number, ...rest } = body as Record<string, unknown>
    if (!business_name || !ein || !owner_email || !owner_first_name || !owner_last_name) {
      return jsonError('Missing required fields', 400, 'VALIDATION_ERROR')
    }
    const supabase = await createClient()
    const account_last4 =
      typeof account_number === 'string' && account_number.length >= 4 ? account_number.slice(-4) : '0000'
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
    if (error) return jsonError('Failed to submit application', 500, 'DB_ERROR')
    return jsonSuccess({ submitted: true })
  } catch {
    return jsonError('Internal server error', 500, 'SERVER_ERROR')
  }
}
