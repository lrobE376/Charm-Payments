// src/app/api/apply/route.ts
import { createClient } from '@/lib/supabase/server'
import { jsonError, jsonSuccess } from '@/lib/api-response'

interface ApplicationBody {
  business_name: string
  ein: string
  owner_email: string
  owner_first_name: string
  owner_last_name: string
  owner_phone?: string
  account_number?: string
  industry?: string
  business_type?: string
  location_count?: string | number
  monthly_volume?: string
  average_ticket?: string
  existing_processor?: string
  device_preference?: string
  existing_pos_software?: string
  has_customer_database?: boolean | string
  customer_count?: string | number
  needs_recurring_billing?: boolean | string
  needs_online_payments?: boolean | string
  needs_invoicing?: boolean | string
  city?: string
  state?: string
  notes?: string
  [key: string]: unknown
}

async function pushToPipedrive(body: ApplicationBody): Promise<void> {
  const token = process.env.PIPEDRIVE_API_TOKEN
  const base = 'https://api.pipedrive.com/v1'

  const personRes = await fetch(`${base}/persons?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: `${body.owner_first_name} ${body.owner_last_name}`,
      email: [{ value: body.owner_email, primary: true }],
      ...(body.owner_phone ? { phone: [{ value: body.owner_phone, primary: true }] } : {}),
    }),
  })
  const personData = (await personRes.json()) as { data?: { id: number } }
  const personId = personData.data?.id

  const orgRes = await fetch(`${base}/organizations?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: body.business_name }),
  })
  const orgData = (await orgRes.json()) as { data?: { id: number } }
  const orgId = orgData.data?.id

  const dealRes = await fetch(`${base}/deals?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: `${body.business_name} — Merchant Application`,
      stage_id: 7,
      ...(personId ? { person_id: personId } : {}),
      ...(orgId ? { org_id: orgId } : {}),
    }),
  })
  const dealData = (await dealRes.json()) as { data?: { id: number } }
  const dealId = dealData.data?.id

  if (!dealId) return

  const note = [
    '== MERCHANT APPLICATION ==',
    `Industry: ${body.industry ?? 'N/A'}`,
    `Business type: ${body.business_type ?? 'N/A'}`,
    `Locations: ${body.location_count ?? 'N/A'}`,
    `Monthly volume: ${body.monthly_volume ?? 'N/A'}`,
    `Avg ticket: $${body.average_ticket ?? 'N/A'}`,
    `Current processor: ${body.existing_processor ?? 'None'}`,
    `Device needed: ${body.device_preference ?? 'N/A'}`,
    `Has existing POS: ${body.existing_pos_software ?? 'No'}`,
    `Has customer database: ${body.has_customer_database ?? 'No'} (${body.customer_count ?? '0'} customers)`,
    `Needs recurring billing: ${body.needs_recurring_billing ?? 'No'}`,
    `Needs online payments: ${body.needs_online_payments ?? 'No'}`,
    `Needs invoicing: ${body.needs_invoicing ?? 'No'}`,
    `Address: ${body.city ?? 'N/A'}, ${body.state ?? 'N/A'}`,
    `Notes: ${body.notes ?? ''}`,
  ].join('\n')

  await fetch(`${base}/notes?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: note, deal_id: dealId }),
  })
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ApplicationBody
    const { business_name, ein, owner_email, owner_first_name, owner_last_name, account_number } = body

    if (!business_name || !ein || !owner_email || !owner_first_name || !owner_last_name) {
      return jsonError('Missing required fields', 400, 'VALIDATION_ERROR')
    }

    const supabase = await createClient()
    const account_last4 =
      typeof account_number === 'string' && account_number.length >= 4
        ? account_number.slice(-4)
        : '0000'

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { account_number: _acct, ...rest } = body
    const { error } = await supabase.from('merchant_applications').insert({
      ...rest,
      account_last4,
      status: 'submitted',
    })

    if (error) return jsonError('Failed to submit application', 500, 'DB_ERROR')

    try {
      await pushToPipedrive(body)
    } catch {
      // Pipedrive failure does not block the response
    }

    return jsonSuccess({ submitted: true })
  } catch {
    return jsonError('Internal server error', 500, 'SERVER_ERROR')
  }
}
