'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react'
import PrimaryCTA from '@/components/conversion/PrimaryCTA'

const trustBullets = [
  'Dedicated underwriting — not a black-box instant decline',
  'Interchange-plus options for growing volume',
  'Gateway setup and cart help included',
  'Month-to-month on Starter & Growth plans',
]

export function ContactPageClient() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(form: HTMLFormElement) {
    const next: Record<string, string> = {}
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const business = String(fd.get('businessName') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const volume = String(fd.get('volume') ?? '').trim()

    if (!name) next.name = 'Your name is required'
    if (!business) next.businessName = 'Business name is required'
    if (!email) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email'
    if (!volume) next.volume = 'Select estimated monthly volume'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate(e.currentTarget)) return
    setSubmitError(null)
    setLoading(true)
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const business = String(fd.get('businessName') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const phone = String(fd.get('phone') ?? '').trim()
    const volume = String(fd.get('volume') ?? '').trim()
    const notes = String(fd.get('notes') ?? '').trim()
    const message = [`Estimated monthly volume: ${volume}`, notes && `Notes: ${notes}`].filter(Boolean).join('\n')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone: phone || undefined,
        business,
        volume,
        message,
      }),
    })
    setLoading(false)
    if (!res.ok) {
      const j = (await res.json().catch(() => ({}))) as { error?: string }
      setSubmitError(j.error || 'Something went wrong. Please call us at +1 (314) 555-0198.')
      return
    }
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-lg border border-[rgba(8,39,32,0.12)] bg-white px-4 py-3 text-[var(--paragraph)] min-h-[44px] outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/15'
  const labelClass = 'mb-2 block text-sm font-semibold text-[var(--heading)]'

  return (
    <>
      <section
        className="relative px-6 py-16 text-center md:py-24"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">SALES &amp; SUPPORT</span>
          <h1 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">Get Approved in 24–48 Hours</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75">No setup fees. No long-term contracts.</p>
          <div className="mt-8 flex justify-center">
            <PrimaryCTA variant="on-dark" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <div className="relative hidden min-h-[420px] overflow-hidden rounded-[24px] shadow-2xl lg:block">
              <Image
                src="/images/pexels-mockup-photos-270767-821222.jpg"
                alt="Merchant ready to take payments with Charm Payments"
                width={700}
                height={800}
                className="h-full min-h-[420px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 flex items-end rounded-[24px] bg-brand-dark/45 p-8">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-accent">CHARM PAYMENTS</p>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Same-day answers. Clear next steps. No runaround.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                <span className="gradient-text">Why merchants choose Charm</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {trustBullets.map((line) => (
                  <li key={line} className="flex gap-3 text-[var(--paragraph)]">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" strokeWidth={2} aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              {[
                {
                  Icon: Phone,
                  title: 'Call Us',
                  line1: '+1 (314) 555-0198',
                  line2: 'Mon–Fri 8am–6pm CST',
                },
                {
                  Icon: Mail,
                  title: 'Email Us',
                  line1: 'merchants@charmpayments.com',
                  line2: 'We respond within 2 business hours',
                },
                {
                  Icon: Clock,
                  title: 'Business Hours',
                  line1: 'Monday – Friday',
                  line2: '8:00 AM – 6:00 PM CST',
                },
                {
                  Icon: MapPin,
                  title: 'Headquarters',
                  line1: 'St. Louis, Missouri',
                  line2: 'Serving merchants nationwide',
                },
              ].map(({ Icon, title, line1, line2 }) => (
                <div key={title} className="charm-card flex gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white" aria-hidden>
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-[var(--heading)]">{title}</p>
                    <p className="mt-1 font-medium text-[var(--paragraph)]">{line1}</p>
                    <p className="mt-0.5 text-sm text-gray-600">{line2}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="charm-card bg-brand-dark p-6 text-white shadow-brand-md">
              <p className="font-display text-lg font-bold">Need an answer now?</p>
              <p className="mt-2 text-sm text-white/75">Speak with a specialist during business hours.</p>
              <a href="tel:+13145550198" className="btn-accent mt-5 inline-flex w-full justify-center sm:w-auto">
                Call +1 (314) 555-0198
              </a>
            </div>
          </div>

          <div>
            <div className="charm-card bg-neutral-50 p-6 md:p-8">
              <h3 className="font-display text-xl font-bold text-[var(--heading)] md:text-2xl">Tell us about your business</h3>
              <p className="mt-2 text-sm text-gray-600">
                We&apos;ll follow up with next steps — or start your application if you&apos;re ready.
              </p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle className="h-14 w-14 text-brand-accent" strokeWidth={1.75} aria-hidden />
                  <p className="mt-4 text-lg font-semibold text-brand-dark">You&apos;re on the list</p>
                  <p className="mt-2 text-brand-dark/80">We&apos;ll reach out within 2 business hours.</p>
                </div>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
                  {submitError && (
                    <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </div>
                  )}
                  <div>
                    <label className={labelClass} htmlFor="businessName">
                      Business Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      className={inputClass}
                      autoComplete="organization"
                    />
                    {errors.businessName && <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="volume">
                      Estimated Monthly Volume <span className="text-red-600">*</span>
                    </label>
                    <select id="volume" name="volume" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option value="under-10k">Under $10K</option>
                      <option value="10k-50k">$10K–$50K</option>
                      <option value="50k-100k">$50K–$100K</option>
                      <option value="100k-500k">$100K–$500K</option>
                      <option value="over-500k">Over $500K</option>
                    </select>
                    {errors.volume && <p className="mt-1 text-sm text-red-600">{errors.volume}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone Number
                    </label>
                    <input id="phone" name="phone" type="tel" className={inputClass} autoComplete="tel" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input id="email" name="email" type="email" className={inputClass} autoComplete="email" />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input id="name" name="name" type="text" className={inputClass} autoComplete="name" />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="notes">
                      Anything else we should know? <span className="font-normal text-gray-500">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      className={`${inputClass} min-h-[96px] resize-y py-3`}
                      placeholder="Industry, current processor, or timeline."
                    />
                  </div>
                  <button type="submit" className="btn-accent w-full justify-center" disabled={loading}>
                    {loading ? 'Sending...' : 'Start My Application'}
                  </button>
                </form>
              )}

              <p className="mt-6 text-center text-xs leading-relaxed text-gray-500">
                Charm Payments is a payment facilitator, not a bank. By submitting this form you agree to our{' '}
                <Link href="/privacy" className="font-medium text-brand-dark underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms" className="font-medium text-brand-dark underline-offset-2 hover:underline">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-16 text-center">
        <p className="font-display text-xl font-bold text-[var(--heading)]">Prefer to apply online right now?</p>
        <div className="mt-6 flex justify-center">
          <PrimaryCTA />
        </div>
      </section>
    </>
  )
}
