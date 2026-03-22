import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/forms/quote-form'

export const metadata: Metadata = {
  title: 'Instant Quote — Charm Payments',
  description:
    'Request a custom processing quote for your business. Tell us your volume, ticket size, and current processor — no obligation.',
}

export default function QuotePage() {
  return (
    <div>
      <section className="bg-brand-dark px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-accent">Rate review</p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">Get a merchant processing quote</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Share a few numbers — we&apos;ll line-item how Charm compares on transparent interchange-plus or flat pricing.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-brand-dark">What happens next</h2>
            <ul className="mt-4 list-none space-y-3 p-0 text-gray-700">
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">1.</span>
                We create a lead in our pipeline (CRM hooks later).
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">2.</span>
                A specialist reviews your volume and current stack.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">3.</span>
                You receive next steps — often including a statement review.
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-gray-500">
              Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant
              funds are subject to the terms of the Merchant Agreement.
            </p>
            <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-brand-dark underline-offset-2 hover:underline">
              Prefer to talk first? Contact sales
            </Link>
          </div>
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  )
}
