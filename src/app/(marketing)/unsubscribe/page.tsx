// src/app/(marketing)/unsubscribe/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Unsubscribe — Charm Payments',
  description: 'Unsubscribe from Charm Payments marketing email communications.',
  robots: { index: false, follow: false },
}

export default function UnsubscribePage({
  searchParams,
}: {
  searchParams: { submitted?: string }
}) {
  if (searchParams.submitted === 'true') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <CheckCircle2 className="w-14 h-14 text-brand-accent mx-auto" aria-hidden="true" />
          <h1 className="text-2xl font-bold text-gray-900 mt-5">You&apos;re unsubscribed</h1>
          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            We&apos;ve received your request and will remove your address from our marketing list.
            Please allow 24–48 hours for all campaigns to stop.
          </p>
          <p className="text-gray-400 mt-3 text-xs leading-relaxed">
            Transactional emails related to your merchant account — payment confirmations, dispute
            notices, and account alerts — will continue regardless of this preference.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 text-sm font-semibold text-brand-dark hover:underline"
          >
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  async function handleUnsubscribe(formData: FormData) {
    'use server'
    // In production: mark email as unsubscribed in your ESP / Supabase
    void formData.get('email')
    redirect('/unsubscribe?submitted=true')
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900">Unsubscribe</h1>
        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          Enter your email address to unsubscribe from Charm Payments marketing communications.
        </p>
        <form action={handleUnsubscribe} className="mt-8 space-y-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="unsub-email" className="text-sm font-medium text-gray-700">
              Email address <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
            </label>
            <input
              id="unsub-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm min-h-[44px] transition-colors hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:border-transparent placeholder:text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full px-5 py-2.5 text-sm font-semibold min-h-[44px] rounded-lg"
          >
            Unsubscribe
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-4 leading-relaxed">
          Transactional emails related to your merchant account will continue regardless of this
          preference. To close your merchant account, contact{' '}
          <a href="mailto:merchants@charmpayments.com" className="underline hover:text-gray-600">
            merchants@charmpayments.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}
