// src/app/api/dashboard/equipment/order/route.ts
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'
import { sendEmail, INTERNAL_TO } from '@/lib/email'

interface ShippingAddress {
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
}

interface OrderBody {
  equipment_id: string
  order_type: 'purchase' | 'lease'
  quantity: number
  shipping_address: ShippingAddress
  notes?: string
}

function orderNotificationHtml(
  businessName: string,
  productName: string,
  orderType: 'purchase' | 'lease',
  price: string,
  quantity: number,
  address: ShippingAddress,
): string {
  const rows = [
    ['Product', productName],
    ['Type', orderType === 'purchase' ? 'Purchase (one-time)' : 'Lease (monthly)'],
    ['Price', price],
    ['Quantity', String(quantity)],
    ['Ship to', `${address.name}, ${address.address}, ${address.city} ${address.state} ${address.zip}`],
    ['Phone', address.phone],
  ]
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
      <tr>
        <td style="background:#0c3a30;padding:24px 32px;border-radius:12px 12px 0 0;">
          <span style="color:#C9A96E;font-size:18px;font-weight:700;">Charm Payments — Equipment Order</span>
        </td>
      </tr>
      <tr>
        <td style="background:#ffffff;padding:32px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
          <p style="margin:0 0 16px;color:#111827;font-size:15px;font-weight:700;">New equipment order from ${businessName}</p>
          <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:16px;">
            ${rows.map(([label, value]) => `
            <tr>
              <td style="padding:6px 12px 6px 0;font-size:13px;font-weight:600;color:#6b7280;white-space:nowrap;vertical-align:top;">${label}</td>
              <td style="padding:6px 0;font-size:13px;color:#111827;">${value}</td>
            </tr>`).join('')}
          </table>
          <p style="margin:24px 0 0;color:#374151;font-size:14px;">— Charm Payments System</p>
        </td>
      </tr>
      <tr>
        <td style="background:#f9fafb;padding:16px 32px;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 12px 12px;">
          <p style="margin:0;color:#9ca3af;font-size:11px;">&copy; Charm Holdings LLC &middot; St. Louis, MO</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}

export async function POST(request: Request) {
  try {
    // ── Auth ────────────────────────────────────────────────────────────────
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return jsonError('Unauthorized', 401, 'UNAUTHORIZED')

    // ── Merchant record ─────────────────────────────────────────────────────
    const { data: merchant } = await supabase
      .from('merchants')
      .select('id, business_name')
      .eq('user_id', user.id)
      .single()
    if (!merchant) return jsonError('Merchant account not found', 403, 'NO_MERCHANT')

    // ── Parse + validate body ────────────────────────────────────────────────
    let body: OrderBody
    try {
      body = (await request.json()) as OrderBody
    } catch {
      return jsonError('Invalid request body', 400, 'INVALID_BODY')
    }

    const { equipment_id, order_type, quantity, shipping_address } = body

    if (!equipment_id) return jsonError('equipment_id is required', 400, 'VALIDATION_ERROR')
    if (!['purchase', 'lease'].includes(order_type)) {
      return jsonError('order_type must be purchase or lease', 400, 'VALIDATION_ERROR')
    }
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      return jsonError('quantity must be between 1 and 20', 400, 'VALIDATION_ERROR')
    }
    if (!shipping_address?.address || !shipping_address?.city || !shipping_address?.state || !shipping_address?.zip) {
      return jsonError('Complete shipping address is required', 400, 'VALIDATION_ERROR')
    }

    // ── Fetch catalog item for pricing ───────────────────────────────────────
    const db = createAdminClient()
    const { data: item } = await db
      .from('equipment_catalog')
      .select('id, name, purchase_price, lease_price_monthly, in_stock')
      .eq('id', equipment_id)
      .single()

    if (!item) return jsonError('Equipment item not found', 404, 'NOT_FOUND')

    const catalogItem = item as {
      id: string
      name: string
      purchase_price: number | null
      lease_price_monthly: number | null
      in_stock: boolean
    }

    if (!catalogItem.in_stock) return jsonError('Item is out of stock', 409, 'OUT_OF_STOCK')

    const monthly_rate = order_type === 'lease' ? (catalogItem.lease_price_monthly ?? null) : null
    const purchase_price = order_type === 'purchase' ? (catalogItem.purchase_price ?? null) : null

    // ── Insert order ─────────────────────────────────────────────────────────
    const { data: order, error: insertError } = await supabase
      .from('equipment_orders')
      .insert({
        merchant_id: (merchant as { id: string }).id,
        equipment_id,
        order_type,
        quantity,
        monthly_rate,
        purchase_price,
        shipping_address,
        notes: body.notes ?? null,
        status: 'pending',
      })
      .select('id')
      .single()

    if (insertError) return jsonError('Failed to place order', 500, 'DB_ERROR')

    // ── Internal notification email (non-blocking) ───────────────────────────
    const priceDisplay =
      order_type === 'purchase'
        ? `$${Number(catalogItem.purchase_price ?? 0).toFixed(2)} × ${quantity}`
        : `$${Number(catalogItem.lease_price_monthly ?? 0).toFixed(2)}/mo × ${quantity}`

    sendEmail(
      INTERNAL_TO,
      `Equipment order: ${catalogItem.name} — ${(merchant as { business_name: string }).business_name}`,
      orderNotificationHtml(
        (merchant as { business_name: string }).business_name,
        catalogItem.name,
        order_type,
        priceDisplay,
        quantity,
        shipping_address,
      ),
    ).catch(() => {})

    return jsonSuccess({ orderId: (order as { id: string }).id, placed: true })
  } catch {
    return jsonError('Internal server error', 500, 'SERVER_ERROR')
  }
}
