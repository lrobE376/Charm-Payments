import { createLead } from '@/lib/services/lead-service'
import { sendLeadReceivedNotification } from '@/lib/integrations/notifications'
import { jsonError, jsonSuccess } from '@/lib/api-response'

type ContactBody = {
  name?: string
  email?: string
  phone?: string
  business?: string
  volume?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const business = typeof body.business === 'string' ? body.business.trim() : ''
    const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
    const volume = typeof body.volume === 'string' ? body.volume.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''

    if (!name || !email || !business || !volume) {
      return jsonError('Name, email, business name, and estimated volume are required.', 400, 'MISSING_FIELDS')
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonError('Invalid email address', 400, 'INVALID_EMAIL')
    }

    const notes = message || 'Sales inquiry via contact form.'

    const lead = await createLead({
      name,
      businessName: business,
      email,
      phone,
      monthlyVolume: volume,
      source: 'contact',
      notes,
    })

    await sendLeadReceivedNotification(lead.id)

    // TODO: wire to email service (Resend, SendGrid, etc.) for merchant confirmation
    return jsonSuccess({ leadId: lead.id })
  } catch {
    return jsonError('Unable to process your request. Please try again.', 500, 'SERVER_ERROR')
  }
}
