// src/app/api/auth/forgot-password/route.ts
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonSuccess } from '@/lib/api-response'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown }
    const email = typeof body.email === 'string' ? body.email.trim() : ''

    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const supabase = createAdminClient()
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/update-password`,
      })
    }

    // Always return 200 — never reveal whether the email exists in our system
    return jsonSuccess({ sent: true })
  } catch {
    return jsonSuccess({ sent: true })
  }
}
