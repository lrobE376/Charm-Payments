// src/app/auth/confirm/route.ts
// Handles Supabase magic-link and email-confirmation token exchanges.
// The approve endpoint generates a magic link that redirects here.
// After exchanging the token, the user is redirected to /dashboard (or ?next=).
//
// Supabase docs: https://supabase.com/docs/guides/auth/server-side/nextjs

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { EmailOtpType } from '@supabase/supabase-js'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)

  const token_hash = searchParams.get('token_hash')
  const type = (searchParams.get('type') ?? 'magiclink') as EmailOtpType
  const next = searchParams.get('next') ?? '/dashboard'

  if (!token_hash) {
    return NextResponse.redirect(`${origin}/login?error=missing_token`)
  }

  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(toSet) {
          toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        },
      },
    },
  )

  const { error } = await supabase.auth.verifyOtp({ type, token_hash })

  if (error) {
    return NextResponse.redirect(`${origin}/login?error=invalid_link`)
  }

  // Successful exchange — redirect into the app
  return NextResponse.redirect(`${origin}${next}`)
}
