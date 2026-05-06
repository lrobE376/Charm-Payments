import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Globe, Music, QrCode, Smartphone, Store, Utensils } from 'lucide-react'

export const metadata: Metadata = {
  title: 'QR Code Payments — Charm Payments',
  description:
    'Generate payment QR codes and accept contactless payments anywhere. Print on menus, receipts, or storefronts. Included in all Charm Payments accounts.',
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

export default function QrCodesPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">QR CODE PAYMENTS</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Print It. Display It.\nGet Paid From It.`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Generate a payment QR code and put it anywhere your customers are — menus, receipts, storefronts, flyers, or business cards. They scan, pay, done. No card reader.
            No terminal. No contact required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Included Free</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Any Device</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">No App Required</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Instant Generation</span>
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
            {`Scan. Pay. Done.\nNo Hardware Required.`}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: QrCode,
                title: 'Generate Your QR Code',
                desc: 'Log in to your dashboard and generate a payment QR code in seconds. Download it as a PNG file ready to print or display.',
              },
              {
                Icon: Smartphone,
                title: 'Customer Scans the Code',
                desc: 'Customer points their phone camera at the QR code. No app needed. Opens a payment page directly in their browser.',
              },
              {
                Icon: CheckCircle,
                title: 'Payment Complete',
                desc: 'Customer pays with card, Apple Pay, or Google Pay. You get an instant notification. Funds deposit next business day.',
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
                'Generate unlimited QR codes',
                'Download as PNG for print',
                'No app required for customer',
                'Works with any smartphone camera',
                'Apple Pay and Google Pay supported',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                'Link to specific payment amounts',
                'Or let customer enter the amount',
                'Works on printed and digital materials',
                'Included in all plans — no extra fee',
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
          <p className="section-label">WHERE TO USE IT</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Put Your QR Code\nEverywhere Customers Are`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Utensils,
                title: 'Restaurants & Cafes',
                desc: 'Print your QR code on table tents or menus. Customers pay at the table without waiting for a server to bring the check.',
              },
              {
                Icon: Store,
                title: 'Retail Storefronts',
                desc: 'Display your QR code at the checkout counter, window, or entrance. Customers tap and pay without touching a terminal.',
              },
              {
                Icon: Music,
                title: 'Events & Pop-Ups',
                desc: 'Tape your QR code to a table at markets, festivals, and events. Accept payments without any hardware setup.',
              },
              {
                Icon: Globe,
                title: 'Online & Social Media',
                desc: 'Add your QR code to your website, email signature, or print it on business cards so contacts can pay you instantly.',
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
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">QR Code Payments FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="Is there an extra fee for QR codes?"
              a="No. QR code payment generation is included in all Charm Payments merchant accounts at no extra charge. Your standard processing rate applies to each payment."
            />
            <FaqItem
              q="Does the customer need a special app?"
              a="No. Any modern smartphone camera can scan a QR code and open the payment link directly in the browser. No app download required."
            />
            <FaqItem
              q="Can I set a fixed amount on the QR code?"
              a="Yes. You can generate a QR code for a specific amount or create an open-amount code where the customer enters the total themselves."
            />
            <FaqItem
              q="How do I use the QR code for print materials?"
              a="Download the QR code as a PNG image from your dashboard and insert it into any design — menus, flyers, business cards, receipts, or signage."
            />
            <FaqItem
              q="What happens if a QR code scan fails?"
              a={"Generate a fresh QR code from your dashboard at any time. QR codes link to your payment page and don't expire unless you regenerate them."}
            />
            <FaqItem
              q="Can I track how many people scanned my QR code?"
              a="Yes. Your dashboard shows transaction volume from QR code payments alongside your other payment channels."
            />
          </div>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">GET YOUR QR CODE</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">
            {`Contactless Payments\nEverywhere You Do Business.`}
          </h2>
          <p className="mt-4 text-lg text-white/80">QR code payments are included free in every Charm Payments account. Apply today.</p>
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
