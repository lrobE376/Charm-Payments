'use client'

import { useState } from 'react'
import Link from 'next/link'

const volumeOptions = [
  { value: '', label: 'Select range' },
  { value: 'under-10k', label: 'Under $10K / month' },
  { value: '10k-50k', label: '$10K – $50K' },
  { value: '50k-100k', label: '$50K – $100K' },
  { value: '100k-500k', label: '$100K – $500K' },
  { value: 'over-500k', label: 'Over $500K' },
]

export default function QuoteForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const savingsHint = 'Illustrative only — actual savings depend on your statement.'

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') ?? '').trim()
    const businessName = String(fd.get('businessName') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const phone = String(fd.get('phone') ?? '').trim()
    const monthlyVolume = String(fd.get('monthlyVolume') ?? '').trim()
    const ticketSize = String(fd.get('ticketSize') ?? '').trim()
    const industry = String(fd.get('industry') ?? '').trim()
    const processor = String(fd.get('processor') ?? '').trim()

    const notes = [
      `Industry: ${industry || 'n/a'}`,
      `Avg ticket: ${ticketSize || 'n/a'}`,
      `Current processor: ${processor || 'n/a'}`,
    ].join(' · ')

    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        businessName,
        email,
        phone,
        monthlyVolume: monthlyVolume || 'not-specified',
        source: 'quote',
        notes,
      }),
    })
    setLoading(false)
    const j = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string }
    if (!res.ok || j.success === false) {
      setError(j.error || 'Something went wrong. Try again or call +1 (314) 555-0198.')
      return
    }
    setDone(true)
  }

  const input =
    'w-full rounded-lg border border-[rgba(8,39,32,0.12)] bg-white px-4 py-3 text-[var(--paragraph)] min-h-[44px] outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/15'
  const label = 'mb-2 block text-sm font-semibold text-[var(--heading)]'

  if (done) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-brand-dark">We received your details</h2>
        <p className="mt-2 text-gray-600">
          A specialist will follow up with a statement review or custom quote. Typical response within 2 business hours.
        </p>
        <Link href="/apply" className="btn-accent mt-6 inline-flex">
          Continue to full application
        </Link>
      </div>
    )
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      {error && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="qf-name">
            Your name <span className="text-red-600">*</span>
          </label>
          <input id="qf-name" name="name" type="text" required className={input} autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="qf-business">
            Business name <span className="text-red-600">*</span>
          </label>
          <input id="qf-business" name="businessName" type="text" required className={input} autoComplete="organization" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="qf-email">
            Email <span className="text-red-600">*</span>
          </label>
          <input id="qf-email" name="email" type="email" required className={input} autoComplete="email" />
        </div>
        <div>
          <label className={label} htmlFor="qf-phone">
            Phone
          </label>
          <input id="qf-phone" name="phone" type="tel" className={input} autoComplete="tel" />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="qf-volume">
          Estimated monthly volume <span className="text-red-600">*</span>
        </label>
        <select id="qf-volume" name="monthlyVolume" required className={input} defaultValue="">
          {volumeOptions.map((o) => (
            <option key={o.value || 'empty'} value={o.value} disabled={o.value === ''}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="qf-ticket">
          Average ticket size <span className="text-red-600">*</span>
        </label>
        <input id="qf-ticket" name="ticketSize" type="text" required placeholder="e.g. $45" className={input} />
      </div>
      <div>
        <label className={label} htmlFor="qf-industry">
          Industry <span className="text-red-600">*</span>
        </label>
        <input id="qf-industry" name="industry" type="text" required placeholder="Retail, restaurant, SaaS…" className={input} />
      </div>
      <div>
        <label className={label} htmlFor="qf-processor">
          Current processor <span className="text-red-600">*</span>
        </label>
        <input id="qf-processor" name="processor" type="text" required placeholder="e.g. Square, legacy ISO, unknown" className={input} />
      </div>
      <button type="submit" className="btn-accent w-full justify-center sm:w-auto" disabled={loading}>
        {loading ? 'Sending…' : 'Get my quote'}
      </button>
      <div className="rounded-xl border border-dashed border-brand-dark/20 bg-neutral-50 p-4 text-sm text-gray-600">
        <p className="font-semibold text-brand-dark">Potential savings snapshot (placeholder)</p>
        <p className="mt-1">{savingsHint}</p>
        <p className="mt-2 text-xs text-gray-500">
          {/* TODO: Replace with modeled savings from uploaded statement */}
          After integration, this block can show effective-rate comparison vs interchange-plus.
        </p>
      </div>
    </form>
  )
}
