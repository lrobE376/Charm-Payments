import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle, Home, KeyRound, LogIn, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Virtual Terminal — Charm Payments',
  description:
    'Accept credit card payments from any browser with Charm Payments virtual terminal. No hardware needed. Perfect for phone orders, mail orders, and MOTO transactions.',
}

const disclaimer = (
  <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/70">
    Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds are subject to
    the terms of the Merchant Agreement.
  </p>
)

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-gray-200 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-brand-dark [&::-webkit-details-marker]:hidden">
        <span>{q}</span>
        <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-gray-400 transition-transform group-open:-rotate-90" aria-hidden />
      </summary>
      <p className="text-paragraph mt-3 text-sm leading-relaxed">{a}</p>
    </details>
  )
}

export default function VirtualTerminalPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">VIRTUAL TERMINAL</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Accept Payments From\nAny Browser, Anywhere`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            No hardware. No software to install. Log in to your Charm Payments dashboard, key in card details, and collect payment in seconds — from any device, any
            location.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">No Hardware Required</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Works on Any Device</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Visa MC Amex Discover</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/quote"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">HOW IT WORKS</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Three Steps to\nCollect Any Payment`}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: LogIn,
                title: 'Log In to Your Dashboard',
                desc: 'Access your Charm Payments merchant portal from any browser — Chrome, Safari, Firefox. Works on laptop, tablet, or phone.',
              },
              {
                Icon: KeyRound,
                title: 'Enter Card Details',
                desc: 'Key in the card number, expiration, CVV, and billing zip. Add an order description so you and the customer both know what the charge is for.',
              },
              {
                Icon: CheckCircle,
                title: 'Payment Collected',
                desc: 'Transaction approved in seconds. Customer gets a receipt by email. Funds deposit to your bank account on the next business day.',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="text-center md:text-left">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light md:mx-0">
                  <Icon className="h-7 w-7 text-brand-dark" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-xl font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ul className="space-y-3">
              {[
                'Accept Visa, Mastercard, Amex, Discover',
                'Manual card entry — no swipe required',
                'Send email receipts automatically',
                'Full transaction history and reporting',
                'Refund and void from the same dashboard',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                'Works on any browser, any device',
                'No software download or installation',
                'PCI compliant card entry',
                'Multiple users per account',
                'Export transactions to CSV',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">WHO USES IT</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Built for Businesses\nThat Take Payments Remotely`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Phone,
                title: 'Phone Orders',
                desc: "Customer calls in, reads their card number, you key it in and charge. Clean, simple, done. No card reader needed.",
              },
              {
                Icon: Mail,
                title: 'Mail Orders',
                desc: 'Customers mail in order forms with card info. Process them in batches from your desktop. Perfect for catalog and direct mail businesses.',
              },
              {
                Icon: Home,
                title: 'Home Service Pros',
                desc: 'Plumbers, electricians, cleaners, and contractors who invoice after the job. Key in the card on your phone before you leave the driveway.',
              },
              {
                Icon: Building2,
                title: 'B2B Invoicing',
                desc: 'Bill corporate clients after services are rendered. Store their card on file for repeat charges with Customer Vault add-on.',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="charm-card bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light">
                  <Icon className="h-6 w-6 text-brand-dark" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-label">COMMON QUESTIONS</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Virtual Terminal FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="Do I need to download any software?"
              a="No. The virtual terminal runs entirely in your browser. Log in to your Charm Payments dashboard from any device and start processing immediately."
            />
            <FaqItem
              q="Is it safe to key in card numbers manually?"
              a="Yes. Your Charm Payments dashboard is PCI DSS compliant. Card data is encrypted at the point of entry and never stored on your device or our servers in readable form."
            />
            <FaqItem
              q="What cards can I accept?"
              a="Visa, Mastercard, American Express, and Discover. ACH and eCheck processing is available as an add-on."
            />
            <FaqItem
              q="Can multiple employees use the virtual terminal?"
              a="Yes. You can create multiple user accounts under your merchant account, each with their own login credentials and permission levels."
            />
            <FaqItem
              q="How quickly do funds deposit?"
              a="Standard next-business-day funding for most merchants. Your exact funding schedule is confirmed at approval."
            />
            <FaqItem
              q="What does it cost?"
              a="Flat rate plan — 2.90% + $0.30 per transaction. No monthly fee on the Starter plan. No setup fee. See our full pricing page for all options."
            />
          </div>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">GET STARTED</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">{`Ready to Accept Payments\nFrom Anywhere?`}</h2>
          <p className="mt-4 text-lg text-white/80">Apply in minutes. Approved in 48 hours. Your virtual terminal is ready the same day you&apos;re approved.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              Talk to Our Team
            </Link>
          </div>
          {disclaimer}
        </div>
      </section>
    </>
  )
}
