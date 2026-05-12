'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Handshake, Headphones, Landmark, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const contactOptions = [
  {
    title: 'Sales / merchant applications',
    body: 'Pricing, statements, new merchant accounts, and application next steps.',
    Icon: Landmark,
  },
  {
    title: 'Existing merchant support',
    body: 'Gateway access, hardware questions, settlement timing, and account help.',
    Icon: Headphones,
  },
  {
    title: 'Partnership inquiries',
    body: 'Referral relationships, platform integrations, and embedded payment programs.',
    Icon: Handshake,
  },
  {
    title: 'Risk, disputes, and chargeback help',
    body: 'Fraud reduction, chargeback defense, retrievals, and dispute workflows.',
    Icon: ShieldCheck,
  },
]

const inquiryTypes = [
  'Sales / merchant applications',
  'Existing merchant support',
  'Partnership inquiries',
  'Risk, disputes, and chargeback help',
]

const trustItems = [
  'Payment acceptance across in-person, online, mobile, invoice, and recurring workflows.',
  'Gateway setup for terminals, virtual terminal access, checkout, vaulting, and reporting.',
  'Payment infrastructure for merchants that need a cleaner processing stack.',
  'Fraud reduction and chargeback defense support for higher-risk payment flows.',
]

type FormErrors = Partial<Record<'firstName' | 'lastName' | 'business' | 'email' | 'inquiryType' | 'message', string>>

const inputClass =
  'w-full rounded-[10px] border border-black/[0.14] bg-white px-4 py-3 font-stripeSans text-[15px] text-apple-ink outline-none transition focus:border-atelier-forest focus:ring-2 focus:ring-atelier-forest/15'
const labelClass = 'mb-2 block font-stripeSans text-[13px] font-medium text-black/62'

export function ContactPageClient() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})

  function validate(form: HTMLFormElement) {
    const fd = new FormData(form)
    const next: FormErrors = {}
    const firstName = String(fd.get('firstName') ?? '').trim()
    const lastName = String(fd.get('lastName') ?? '').trim()
    const business = String(fd.get('business') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const inquiryType = String(fd.get('inquiryType') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    if (!firstName) next.firstName = 'First name is required.'
    if (!lastName) next.lastName = 'Last name is required.'
    if (!business) next.business = 'Business name is required.'
    if (!email) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email.'
    if (!inquiryType) next.inquiryType = 'Select an inquiry type.'
    if (!message) next.message = 'Message is required.'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!validate(form)) return

    setLoading(true)
    setSubmitError(null)

    const fd = new FormData(form)
    const firstName = String(fd.get('firstName') ?? '').trim()
    const lastName = String(fd.get('lastName') ?? '').trim()
    const business = String(fd.get('business') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const phone = String(fd.get('phone') ?? '').trim()
    const inquiryType = String(fd.get('inquiryType') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email,
        phone: phone || undefined,
        business,
        inquiryType,
        message,
      }),
    })

    setLoading(false)

    if (!response.ok) {
      const payload = (await response.json().catch(() => ({}))) as { error?: string }
      setSubmitError(payload.error || 'Unable to send your message. Please email merchants@charmpayments.com.')
      return
    }

    setSubmitted(true)
    form.reset()
  }

  return (
    <div className="bg-apple-canvas text-apple-ink">
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-18rem] top-[-20rem] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(15,53,32,0.12),rgba(189,153,82,0.08)_42%,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-atelierMono text-[11px] uppercase tracking-[0.28em] text-[#0f3520]/60">
              Sales and support
            </p>
            <h1 className="mt-5 font-atelierSerif text-[clamp(42px,7vw,84px)] font-medium leading-[0.95] tracking-0 text-[#11251b]">
              Contact Charm Payments
            </h1>
            <p className="mt-7 max-w-2xl font-stripeSans text-lg leading-8 text-black/68 sm:text-xl sm:leading-9">
              Talk with our team about payment processing, merchant accounts, gateways, chargeback
              protection, and custom payment infrastructure.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex min-h-[46px] items-center justify-center rounded-pill bg-atelier-forest px-6 py-3 font-stripeSans text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold"
              >
                Send a message
              </a>
              <Link
                href="/quote"
                className="inline-flex min-h-[46px] items-center justify-center rounded-pill border border-black/[0.18] px-6 py-3 font-stripeSans text-sm font-medium text-[#11251b] transition-colors hover:border-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold"
              >
                Request rate audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-6 lg:px-8" aria-labelledby="contact-options-title">
        <div className="mx-auto max-w-6xl">
          <h2 id="contact-options-title" className="sr-only">
            Contact options
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {contactOptions.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="rounded-[8px] border border-black/[0.08] bg-white p-5 shadow-[0_18px_50px_rgba(17,37,27,0.05)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#0f3520] text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-atelierSerif text-xl font-medium leading-tight text-[#11251b]">
                  {title}
                </h3>
                <p className="mt-3 font-stripeSans text-sm leading-6 text-black/62">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <p className="font-atelierMono text-[11px] uppercase tracking-[0.28em] text-[#0f3520]/60">
              Direct access
            </p>
            <h2 className="mt-4 font-atelierSerif text-[clamp(30px,4vw,46px)] font-medium leading-tight text-[#11251b]">
              A focused route to the right payments team.
            </h2>
            <p className="mt-5 font-stripeSans text-base leading-7 text-black/64">
              Use the form for sales, support, partnership, risk, and disputes. Charm routes each
              inquiry to the team that can move it forward.
            </p>
            <div className="mt-8 rounded-[8px] border border-[#0f3520]/12 bg-[#0f3520] p-6 text-white">
              <p className="font-atelierMono text-[10px] uppercase tracking-[0.24em] text-[#bd9952]">
                Merchant inbox
              </p>
              <a
                href="mailto:merchants@charmpayments.com"
                className="mt-3 block break-words font-stripeSans text-lg font-medium"
              >
                merchants@charmpayments.com
              </a>
              <p className="mt-3 font-stripeSans text-sm leading-6 text-white/72">
                Based in St. Louis. Supporting merchants nationwide.
              </p>
            </div>
          </aside>

          <div id="contact-form" className="rounded-[8px] border border-black/[0.08] bg-white p-5 shadow-[0_26px_80px_rgba(17,37,27,0.07)] sm:p-8">
            <h2 className="font-atelierSerif text-3xl font-medium leading-tight text-[#11251b]">
              Tell us what you need
            </h2>
            <p className="mt-3 font-stripeSans text-sm leading-6 text-black/60">
              Share a few details and the Charm team will follow up with clear next steps.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-[8px] border border-[#0f3520]/12 bg-[#f8f6f1] p-6">
                <CheckCircle2 className="h-10 w-10 text-[#0f3520]" aria-hidden />
                <h3 className="mt-4 font-atelierSerif text-2xl font-medium text-[#11251b]">
                  Message received
                </h3>
                <p className="mt-2 font-stripeSans text-sm leading-6 text-black/64">
                  We will review your inquiry and follow up within one business day.
                </p>
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
                {submitError ? (
                  <div role="alert" className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 font-stripeSans text-sm text-red-700">
                    {submitError}
                  </div>
                ) : null}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="firstName">
                      First name
                    </label>
                    <input id="firstName" name="firstName" autoComplete="given-name" className={inputClass} />
                    {errors.firstName ? <p className="mt-1 font-stripeSans text-sm text-red-600">{errors.firstName}</p> : null}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="lastName">
                      Last name
                    </label>
                    <input id="lastName" name="lastName" autoComplete="family-name" className={inputClass} />
                    {errors.lastName ? <p className="mt-1 font-stripeSans text-sm text-red-600">{errors.lastName}</p> : null}
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="business">
                    Business name
                  </label>
                  <input id="business" name="business" autoComplete="organization" className={inputClass} />
                  {errors.business ? <p className="mt-1 font-stripeSans text-sm text-red-600">{errors.business}</p> : null}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email
                    </label>
                    <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
                    {errors.email ? <p className="mt-1 font-stripeSans text-sm text-red-600">{errors.email}</p> : null}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="inquiryType">
                    Inquiry type
                  </label>
                  <select id="inquiryType" name="inquiryType" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select one
                    </option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.inquiryType ? <p className="mt-1 font-stripeSans text-sm text-red-600">{errors.inquiryType}</p> : null}
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={cn(inputClass, 'min-h-[150px] resize-y')}
                    placeholder="Tell us about your payment setup, timeline, current processor, risk issue, or support need."
                  />
                  {errors.message ? <p className="mt-1 font-stripeSans text-sm text-red-600">{errors.message}</p> : null}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-pill bg-atelier-forest px-7 py-3 font-stripeSans text-[15px] font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold sm:w-auto"
                >
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#0f3520] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20" aria-labelledby="trust-title">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-atelierMono text-[11px] uppercase tracking-[0.28em] text-[#bd9952]">
              Built for serious merchants
            </p>
            <h2 id="trust-title" className="mt-4 font-atelierSerif text-[clamp(30px,4vw,48px)] font-medium leading-tight">
              Payments help that goes beyond a rate quote.
            </h2>
            <p className="mt-5 font-stripeSans text-base leading-7 text-white/72">
              Charm Payments helps merchants with payment acceptance, gateway setup, payment
              infrastructure, fraud reduction, and chargeback defense.
            </p>
          </div>
          <ul className="grid gap-3">
            {trustItems.map((item) => (
              <li key={item} className="flex gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4 font-stripeSans text-sm leading-6 text-white/78">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#bd9952]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
