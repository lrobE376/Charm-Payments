import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Car, CheckCircle, DollarSign, MessageSquare, Package, Scissors, Smartphone, Stethoscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Text to Pay — Charm Payments',
  description:
    'Send payment requests by text message with Charm Payments Text to Pay. Customer gets an SMS, taps the link, and pays in seconds. $5/mo. Powered by Authvia.',
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

export default function TextToPayPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">TEXT TO PAY</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Send a Text.\nGet Paid in 30 Seconds.`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Text your customer a payment request. They tap the link, enter their card, and you&apos;re paid — before you even put your phone away. No app download. No invoice
            portal. Just a text and a payment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">$5/mo</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Any Phone</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">$0.18 per txn</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Powered by Authvia TXT2Pay</span>
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
            {`Three Taps to\nCollect Any Payment`}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: MessageSquare,
                title: 'Send the Request',
                desc: "From your dashboard, enter the amount and your customer's phone number. Tap send. They get an SMS in seconds.",
              },
              {
                Icon: Smartphone,
                title: 'Customer Gets a Text',
                desc: 'The SMS contains a secure payment link. Customer taps it — opens a mobile-optimized payment page. No app to download.',
              },
              {
                Icon: DollarSign,
                title: 'Payment Confirmed',
                desc: 'Customer enters their card details or uses Apple Pay. Transaction approved. You get a notification. Funds deposit next business day.',
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
                'Works on any phone — iPhone or Android',
                'No app download for customer',
                'Accept all major cards',
                'Apple Pay and Google Pay supported',
                'Instant payment notification',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                'Send from dashboard or mobile app',
                'Secure encrypted payment page',
                'Transaction recorded automatically',
                'Customer gets payment confirmation',
                'Full reporting in dashboard',
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
          <p className="section-label">PERFECT FOR</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Get Paid on the Spot\nNo Matter Where You Are`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Car,
                title: 'Auto Services',
                desc: "Car's ready? Text the customer before they arrive. They pay on the way — no waiting at the counter when they pick up.",
              },
              {
                Icon: Scissors,
                title: 'Barbers & Stylists',
                desc: 'Send a payment link while the customer is still in the chair. They pay from their phone. You never have to ask for money awkwardly.',
              },
              {
                Icon: Package,
                title: 'Delivery Businesses',
                desc: 'Driver delivers the order and texts a payment request on the spot. Customer pays before the driver leaves the driveway.',
              },
              {
                Icon: Stethoscope,
                title: 'Health & Wellness',
                desc: 'Send payment after a session — massage, therapy, personal training. Clean and professional. No card reader needed.',
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
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Text to Pay FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="What does Text to Pay cost?"
              a="$5/mo to enable Text to Pay plus $0.18 per transaction. Your standard processing rate also applies to each payment collected."
            />
            <FaqItem
              q="Does the customer need to download an app?"
              a={"No. The customer receives a standard SMS text message with a link. The payment page opens in their phone's browser — no app download required."}
            />
            <FaqItem
              q="What phones does it work on?"
              a="Any phone that can receive text messages and open a web link — iPhone, Android, or any smartphone. Even basic smartphones work."
            />
            <FaqItem
              q="Is the payment page secure?"
              a={"Yes. The payment link opens a PCI DSS compliant payment page. Card data is encrypted and never stored on the customer's device."}
            />
            <FaqItem
              q="Can I send Text to Pay from my phone?"
              a="Yes. Log in to your Charm Payments dashboard on your mobile browser or app to send payment requests from anywhere."
            />
            <FaqItem
              q="How is this different from invoicing?"
              a="Text to Pay is designed for instant collection — send it, they pay immediately. Electronic invoicing is better for formal billing with line items, due dates, and payment tracking over time."
            />
          </div>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">GET TEXT TO PAY</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">
            {`The Fastest Way to\nCollect Any Payment.`}
          </h2>
          <p className="mt-4 text-lg text-white/80">Add Text to Pay to your Charm Payments account. $5/mo. Customers pay in under 30 seconds.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/features"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              See All Features
            </Link>
          </div>
          {disclaimer}
        </div>
      </section>
    </>
  )
}
