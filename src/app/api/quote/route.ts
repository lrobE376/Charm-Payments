// src/app/api/quote/route.ts
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'

interface QuoteRequestBody {
  first_name: string
  last_name: string
  email: string
  phone: string
  business_name: string
  current_processor?: string
  monthly_volume?: string
  average_ticket?: string
  order_location?: string
  payment_method?: string
  payment_timing?: string
  takes_moto_orders?: boolean
  needs_mobile_payment?: boolean
  statement_urls?: string[]
  has_statement?: boolean
  notes?: string
}

async function pushToPipedrive(body: QuoteRequestBody): Promise<void> {
  const token = process.env.PIPEDRIVE_API_TOKEN
  const stageId = process.env.PIPEDRIVE_QUOTE_STAGE_ID ?? '2'
  const base = 'https://api.pipedrive.com/v1'

  const personRes = await fetch(`${base}/persons?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: `${body.first_name} ${body.last_name}`,
      email: [{ value: body.email, primary: true }],
      phone: [{ value: body.phone, primary: true }],
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
      title: `${body.business_name} — Savings Quote Request`,
      stage_id: Number(stageId),
      ...(personId ? { person_id: personId } : {}),
      ...(orgId ? { org_id: orgId } : {}),
    }),
  })
  const dealData = (await dealRes.json()) as { data?: { id: number } }
  const dealId = dealData.data?.id

  if (!dealId) return

  const noteLines: string[] = [
    `Order Location: ${body.order_location ?? 'N/A'}`,
    `Payment Method: ${body.payment_method ?? 'N/A'}`,
    `Payment Timing: ${body.payment_timing ?? 'N/A'}`,
    `Takes MOTO Orders: ${body.takes_moto_orders ? 'Yes' : 'No'}`,
    `Needs Mobile Payment: ${body.needs_mobile_payment ? 'Yes' : 'No'}`,
    `Monthly Volume: ${body.monthly_volume ?? 'N/A'}`,
    `Average Ticket: ${body.average_ticket ?? 'N/A'}`,
    `Current Processor: ${body.current_processor ?? 'N/A'}`,
  ]

  if (body.statement_urls && body.statement_urls.length > 0) {
    noteLines.push('', 'Statement Files:')
    body.statement_urls.forEach((url) => noteLines.push(`  • ${url}`))
  }

  if (body.notes) {
    noteLines.push('', `Notes: ${body.notes}`)
  }

  await fetch(`${base}/notes?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: noteLines.join('\n'),
      deal_id: dealId,
    }),
  })
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequestBody

    const { first_name, last_name, email, phone, business_name } = body
    if (!first_name || !last_name || !email || !phone || !business_name) {
      return jsonError('Missing required fields', 400, 'VALIDATION_ERROR')
    }

    const supabase = createAdminClient()
    const { error } = await supabase.from('quote_requests').insert({
      first_name,
      last_name,
      email,
      phone,
      business_name,
      current_processor: body.current_processor ?? null,
      monthly_volume: body.monthly_volume ?? null,
      average_ticket: body.average_ticket ?? null,
      order_location: body.order_location ?? null,
      payment_method: body.payment_method ?? null,
      payment_timing: body.payment_timing ?? null,
      takes_moto_orders: body.takes_moto_orders ?? false,
      needs_mobile_payment: body.needs_mobile_payment ?? false,
      statement_urls: body.statement_urls ?? [],
      has_statement: body.has_statement ?? false,
      notes: body.notes ?? null,
      status: 'new',
    })

    if (error) {
      console.error(error)
      return jsonError(error.message, 500, 'DB_ERROR')
    }

    try {
      await pushToPipedrive(body)
    } catch (err) {
      console.error(err)
    }

    return jsonSuccess({ submitted: true })
  } catch {
    return jsonError('Internal server error', 500, 'SERVER_ERROR')
  }
}
