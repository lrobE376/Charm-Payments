'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, Clock, MapPin, CheckCircle } from 'lucide-react'

export function ContactPageClient() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(form: HTMLFormElement) {
    const next: Record<string, string> = {}
    const fd = new FormData(form)
    const first = String(fd.get('firstName') ?? '').trim()
    const last = String(fd.get('lastName') ?? '').trim()
    const business = String(fd.get('businessName') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const volume = String(fd.get('volume') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    if (!first) next.firstName = 'First name is required'
    if (!last) next.lastName = 'Last name is required'
    if (!business) next.businessName = 'Business name is required'
    if (!email) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email'
    if (!volume) next.volume = 'Please select a volume range'
    if (!message) next.message = 'Please tell us how we can help'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate(e.currentTarget)) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSuccess(true)
  }

  const inputClass =
    'w-full rounded-lg border border-[rgba(8,39,32,0.12)] bg-white px-4 py-3 text-[var(--paragraph)] min-h-[44px] outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/15'
  const labelClass = 'mb-2 block text-sm font-semibold text-[var(--heading)]'

  return (
    <>
      {/* SECTION 1 — DARK HERO */}
      <section
        className="relative px-6 py-20 md:py-28 text-center"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">GET IN TOUCH</span>
          <h1 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Talk to Our Merchant Support Team
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Questions about processing rates, getting approved, or integrating your gateway — our team picks up the phone.
          </p>
        </div>
      </section>

      {/* SECTION 2 — TWO COLUMN */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — contact info */}
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              <span className="gradient-text">Contact Information</span>
            </h2>

            <div className="mt-8 space-y-4">
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
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white"
                    aria-hidden
                  >
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

            <div className="charm-card mt-8 bg-brand-dark p-6 text-white shadow-brand-md">
              <p className="font-display text-lg font-bold">Need Immediate Help?</p>
              <p className="mt-2 text-sm text-white/75">Speak with a specialist now during business hours.</p>
              <a href="tel:+13145550198" className="btn-accent mt-5 w-full justify-center sm:w-auto">
                Call +1 (314) 555-0198
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="charm-card bg-brand-card p-6 md:p-8">
              <h3 className="font-display text-xl font-bold text-[var(--heading)] md:text-2xl">Send Us a Message</h3>

              {success ? (
                <div className="mt-8 flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle className="h-14 w-14 text-brand-accent" strokeWidth={1.75} aria-hidden />
                  <p className="mt-4 text-lg font-semibold text-brand-dark">Message Sent!</p>
                  <p className="mt-2 text-brand-dark/80">We&apos;ll be in touch within 2 business hours.</p>
                </div>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="firstName">
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <input id="firstName" name="firstName" type="text" className={inputClass} autoComplete="given-name" />
                      {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="lastName">
                        Last Name <span className="text-red-600">*</span>
                      </label>
                      <input id="lastName" name="lastName" type="text" className={inputClass} autoComplete="family-name" />
                      {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="businessName">
                      Business Name <span className="text-red-600">*</span>
                    </label>
                    <input id="businessName" name="businessName" type="text" className={inputClass} autoComplete="organization" />
                    {errors.businessName && <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input id="email" name="email" type="email" className={inputClass} autoComplete="email" />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone Number
                    </label>
                    <input id="phone" name="phone" type="tel" className={inputClass} autoComplete="tel" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="volume">
                      Monthly Processing Volume <span className="text-red-600">*</span>
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
                    <label className={labelClass} htmlFor="message">
                      Message / How can we help? <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`${inputClass} min-h-[120px] resize-y py-3`}
                      placeholder="Tell us about your business and what you need."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
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

      {/* SECTION 3 — BOTTOM CTA */}
      <section className="bg-brand-light px-6 py-16 text-center">
        <p className="font-display text-xl font-bold text-[var(--heading)]">Ready to apply now?</p>
        <Link href="/apply" className="btn-primary mt-6 inline-flex justify-center">
          Apply for a Merchant Account
        </Link>
      </section>
    </>
  )
}
