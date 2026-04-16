// src/app/api/quote/route.ts
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'
import { sendEmail, quoteConfirmationHtml, quoteInternalAlertHtml, INTERNAL_TO } from '@/lib/email'

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
      return jsonError('Failed to save quote request', 500, 'DB_ERROR')
    }

    // Emails are non-blocking — failures do not affect the response
    await Promise.allSettled([
      sendEmail(
        email,
        `We received your rate audit request — ${business_name}`,
        quoteConfirmationHtml(first_name, business_name),
      ),
      sendEmail(
        INTERNAL_TO,
        `New rate audit: ${business_name} (${body.monthly_volume ?? 'volume unknown'})`,
        quoteInternalAlertHtml(
          `${first_name} ${last_name}`,
          business_name,
          email,
          phone,
          body.monthly_volume,
          body.current_processor,
          body.has_statement ?? false,
          body.statement_urls ?? [],
        ),
      ),
    ])

    return jsonSuccess({ submitted: true })
  } catch {
    return jsonError('Internal server error', 500, 'SERVER_ERROR')
  }
}
