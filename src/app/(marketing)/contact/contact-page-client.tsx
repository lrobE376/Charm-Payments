// src/app/(marketing)/contact/contact-page-client.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MagForestBand } from '@/components/atelier/magazine/MagForestBand'
import { MagGradientBreak } from '@/components/atelier/magazine/MagGradientBreak'
import { MagFinalCta } from '@/components/atelier/magazine/MagFinalCta'

const trustBullets = [
  'Dedicated underwriting â€” not a black-box instant decline',
  'Interchange-plus options for growing volume',
  'Gateway setup and cart help included',
  'Month-to-month on Starter & Growth plans',
]

const contactMethods = [
  {
    Icon: Phone,
    title: 'Call Us',
    line1: 'merchants@charmpayments.com',
    line2: 'Monâ€“Fri 8amâ€“6pm CST',
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
    line1: 'Monday â€“ Friday',
    line2: '8:00 AM â€“ 6:00 PM CST',
  },
  {
    Icon: MapPin,
    title: 'Headquarters',
    line1: 'St. Louis, Missouri',
    line2: 'Serving merchants nationwide',
  },
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
    const message = [
      `Estimated monthly volume: ${volume}`,
      notes && `Notes: ${notes}`,
    ]
      .filter(Boolean)
      .join('\n')

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
      setSubmitError(j.error || 'Something went wrong. Please call us at merchants@charmpayments.com.')
      return
    }
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-[10px] border border-black/[0.15] bg-white px-4 py-3 text-[15px] text-apple-ink min-h-[44px] outline-none transition focus:border-atelier-forest focus:ring-2 focus:ring-atelier-forest/15'
  const labelClass = 'mb-1.5 block font-stripeSans text-[13px] font-medium tracking-[0.02em] text-black/60'

  return (
    <>
      {/* HERO â€” Apple canvas, text-only, pill CTAs */}
      <section
        className="relative overflow-hidden bg-apple-canvas"
        style={{ padding: '100px 32px' }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 720,
            height: 720,
            top: -180,
            left: 'calc(100% - 360px)',
            background:
              'radial-gradient(closest-side, rgba(30,92,53,0.10) 0%, rgba(189,153,82,0.06) 45%, transparent 75%)',
            filter: 'blur(2px)',
          }}
        />
        <div className="relative mx-auto text-center" style={{ maxWidth: 760 }}>
          <div
            className="font-stripeSans"
            style={{
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: 'rgba(0,0,0,0.5)',
              marginBottom: 18,
            }}
          >
            Sales &amp; support
          </div>
          <h1
            className="font-atelierSerif text-apple-ink"
            style={{
              fontSize: 'clamp(40px, 5.4vw, 64px)',
              lineHeight: 0.96,
              fontWeight: 500,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            Get Approved in 24â€“48 Hours
          </h1>
          <p
            className="font-stripeSans mx-auto"
            style={{
              marginTop: 24,
              fontSize: 17,
              lineHeight: 1.6,
              maxWidth: 520,
              color: 'rgba(0,0,0,0.72)',
            }}
          >
            No setup fees. No long-term contracts.
          </p>
          <div className="flex flex-wrap justify-center gap-3" style={{ marginTop: 36 }}>
            <Link
              href="/apply"
              className={cn(
                'inline-flex items-center gap-1.5',
                'bg-atelier-forest text-white',
                'font-stripeSans text-sm font-medium',
                'px-6 py-3 rounded-pill',
                'hover:opacity-90 transition-opacity',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
              )}
            >
              Get Free Rate Audit
              <span aria-hidden>â†’</span>
            </Link>
            <Link
              href="/quote"
              className={cn(
                'inline-flex items-center px-[22px] py-[11px] text-sm font-medium font-stripeSans',
                'border border-black/[0.18] text-apple-ink rounded-pill',
                'hover:border-black/40 transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
              )}
            >
              Talk to Charm
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN â€” image card + trust + contact methods (LEFT) Â· form (RIGHT) */}
      <section className="bg-apple-canvas" style={{ padding: '40px 32px 100px' }}>
        <div className="mx-auto" style={{ maxWidth: 1280 }}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* LEFT column */}
            <div className="space-y-8">
              <div className="relative hidden min-h-[420px] overflow-hidden rounded-[24px] shadow-2xl lg:block">
                <Image
                  src="/images/pexels-mockup-photos-270767-821222.jpg"
                  alt="Merchant ready to take payments with Charm Payments"
                  width={700}
                  height={800}
                  className="h-full min-h-[420px] w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex items-end rounded-[24px] bg-atelier-forest-deep/55 p-8">
                  <div>
                    <div
                      className="font-stripeSans"
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#BD9952',
                        marginBottom: 8,
                      }}
                    >
                      Charm Payments
                    </div>
                    <p
                      className="font-atelierSerif text-white"
                      style={{
                        fontSize: 'clamp(20px, 2.4vw, 26px)',
                        lineHeight: 1.2,
                        fontWeight: 500,
                        letterSpacing: '-0.015em',
                        margin: 0,
                      }}
                    >
                      Dedicated underwriting â€” not a black-box instant decline
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2
                  className="font-atelierSerif text-apple-ink"
                  style={{
                    fontSize: 'clamp(24px, 2.8vw, 30px)',
                    lineHeight: 1.15,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    margin: 0,
                  }}
                >
                  Why merchants choose Charm
                </h2>
                <ul className="mt-6 space-y-3 list-none p-0">
                  {trustBullets.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 font-stripeSans"
                      style={{
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: 'rgba(0,0,0,0.72)',
                      }}
                    >
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-atelier-forest"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contactMethods.map(({ Icon, title, line1, line2 }) => (
                  <div
                    key={title}
                    className="flex gap-4"
                    style={{
                      background: '#FFFFFF',
                      border: '0.5px solid rgba(0,0,0,0.08)',
                      borderRadius: 16,
                      padding: '20px',
                    }}
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-atelier-forest text-white"
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="font-atelierSerif text-apple-ink"
                        style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.2 }}
                      >
                        {title}
                      </p>
                      <p
                        className="font-stripeSans"
                        style={{
                          marginTop: 4,
                          fontSize: 14,
                          lineHeight: 1.4,
                          color: 'rgba(0,0,0,0.78)',
                          fontWeight: 500,
                        }}
                      >
                        {line1}
                      </p>
                      <p
                        className="font-stripeSans"
                        style={{
                          marginTop: 2,
                          fontSize: 13,
                          lineHeight: 1.45,
                          color: 'rgba(0,0,0,0.55)',
                        }}
                      >
                        {line2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: '#FFFFFF',
                  border: '0.5px solid rgba(0,0,0,0.08)',
                  borderRadius: 16,
                  padding: '24px',
                }}
              >
                <p
                  className="font-atelierSerif text-apple-ink"
                  style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.2, margin: 0 }}
                >
                  Need an answer now?
                </p>
                <p
                  className="font-stripeSans"
                  style={{
                    marginTop: 8,
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: 'rgba(0,0,0,0.65)',
                    margin: '8px 0 18px 0',
                  }}
                >
                  Speak with a specialist during business hours.
                </p>
                <a
                  href="mailto:merchants@charmpayments.com"
                  className={cn(
                    'inline-flex items-center gap-1.5',
                    'bg-atelier-forest text-white',
                    'font-stripeSans text-sm font-medium',
                    'px-6 py-3 rounded-pill',
                    'hover:opacity-90 transition-opacity',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                  )}
                >
                  Call merchants@charmpayments.com
                </a>
              </div>
            </div>

            {/* RIGHT column â€” form */}
            <div>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '0.5px solid rgba(0,0,0,0.08)',
                  borderRadius: 16,
                  padding: '32px',
                }}
              >
                <h3
                  className="font-atelierSerif text-apple-ink"
                  style={{
                    fontSize: 'clamp(22px, 2.6vw, 28px)',
                    lineHeight: 1.15,
                    fontWeight: 500,
                    letterSpacing: '-0.015em',
                    margin: 0,
                  }}
                >
                  Tell us about your business
                </h3>
                <p
                  className="font-stripeSans"
                  style={{
                    marginTop: 8,
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: 'rgba(0,0,0,0.65)',
                  }}
                >
                  We&apos;ll follow up with next steps â€” or start your application if you&apos;re ready.
                </p>

                {submitted ? (
                  <div className="mt-8 flex flex-col items-center justify-center py-10 text-center">
                    <CheckCircle
                      className="h-14 w-14 text-atelier-forest"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <p
                      className="mt-4 font-atelierSerif text-apple-ink"
                      style={{ fontSize: 18, fontWeight: 500 }}
                    >
                      You&apos;re on the list
                    </p>
                    <p
                      className="mt-2 font-stripeSans"
                      style={{ fontSize: 14, color: 'rgba(0,0,0,0.65)' }}
                    >
                      We&apos;ll reach out within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
                    {submitError && (
                      <div
                        role="alert"
                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                      >
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
                      {errors.businessName && (
                        <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
                      )}
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
                        <option value="10k-50k">$10Kâ€“$50K</option>
                        <option value="50k-100k">$50Kâ€“$100K</option>
                        <option value="100k-500k">$100Kâ€“$500K</option>
                        <option value="over-500k">Over $500K</option>
                      </select>
                      {errors.volume && <p className="mt-1 text-sm text-red-600">{errors.volume}</p>}
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={inputClass}
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={inputClass}
                        autoComplete="email"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="name">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={inputClass}
                        autoComplete="name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="notes">
                        Anything else we should know?{' '}
                        <span className="font-normal text-gray-500">(optional)</span>
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        className={`${inputClass} min-h-[120px] resize-y py-3`}
                        placeholder="Industry, current processor, or timeline."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={cn(
                        'w-full inline-flex items-center justify-center gap-1.5',
                        'bg-atelier-forest text-white',
                        'font-stripeSans text-[15px] font-medium',
                        'px-7 py-3 rounded-pill',
                        'transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                      )}
                    >
                      {loading ? 'Sending...' : 'Start My Application'}
                    </button>
                  </form>
                )}

                <p
                  className="mt-6 text-center font-stripeSans"
                  style={{
                    fontSize: 12,
                    lineHeight: 1.55,
                    color: 'rgba(0,0,0,0.5)',
                  }}
                >
                  Charm Payments is a payment facilitator, not a bank. By submitting this form you
                  agree to our{' '}
                  <Link
                    href="/privacy"
                    className="font-medium text-apple-ink underline-offset-2 hover:underline"
                  >
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/terms"
                    className="font-medium text-apple-ink underline-offset-2 hover:underline"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MagGradientBreak variant="light-to-forest" />
      <MagForestBand
        eyebrow="Sales & support"
        headline="Same-day answers. Clear next steps. {No runaround.}"
        subtitle="Dedicated underwriting â€” not a black-box instant decline. Interchange-plus options for growing volume. Gateway setup and cart help included. Month-to-month on Starter & Growth plans."
        stats={[
          { num: '24â€“48', label: 'Hours to approval' },
          { num: 'Within 2', label: 'Business hours to reply' },
          { num: 'St. Louis', label: 'Headquarters' },
        ]}
      />
      <MagGradientBreak variant="forest-to-light" />

      <MagGradientBreak variant="light-to-warm" />
      <MagFinalCta
        eyebrow="Ready when you are"
        headlineLines={[
          { text: 'Prefer to apply', size: 'normal' },
          { text: 'online right now?', italicTarget: 'online right now?', size: 'normal' },
        ]}
        subtitle="No setup fees. No long-term contracts."
        primaryCta={{ label: 'Get Free Rate Audit', href: '/quote' }}
        secondaryCta={{ label: 'Talk to Charm', href: '/quote' }}
        gradientVariant="home"
      />
    </>
  )
}



