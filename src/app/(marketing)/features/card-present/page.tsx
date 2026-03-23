import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle, CreditCard, Dumbbell, Scissors, Smartphone, Store, Utensils } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Card Present Terminals — Charm Payments',
  description:
    'Professional payment terminals with built-in WiFi and 4G cellular backup. Never lose a sale when your WiFi goes down. PAX A920 Pro and more. $8/mo per device.',
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

export default function CardPresentPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">CARD PRESENT TERMINALS</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Never Lose a Sale\nWhen WiFi Goes Down`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Charm Payments terminals run on WiFi with automatic 4G cellular backup built in. When your internet drops, your terminal keeps processing — your customers never
            know the difference.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">WiFi + 4G Cellular Backup</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">$8/mo per device</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">NMI Certified</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Next-Day Funding</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              Ask About Free Terminal
            </Link>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">HARDWARE</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`The Right Terminal\nFor Every Business`}
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="charm-card relative bg-brand-card p-8">
              <span className="section-label mb-4 inline-block">MOST POPULAR</span>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <CreditCard className="h-8 w-8 text-brand-dark" aria-hidden />
              </div>
              <h3 className="font-display mt-4 text-xl font-bold text-brand-dark">PAX A920 Pro</h3>
              <p className="mt-1 text-sm font-semibold text-brand-accent">$8/mo per device</p>
              <p className="text-paragraph mt-3 text-sm leading-relaxed">
                Android touchscreen terminal. WiFi primary with automatic 4G LTE cellular failover. Built-in receipt printer. Accepts tap, chip, swipe, and contactless.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  '4G LTE cellular backup — automatic failover',
                  'WiFi + Ethernet + Bluetooth',
                  'Built-in thermal receipt printer',
                  'Android touchscreen interface',
                  'NFC contactless payments',
                  'Apple Pay and Google Pay ready',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-semibold text-gray-500">Best for: Retail, restaurants, salons, high-volume</p>
              <Link href="/apply" className="btn-outline mt-6 inline-flex min-h-[44px] w-full items-center justify-center">
                Apply Now
              </Link>
            </div>

            <div className="charm-card bg-white p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                <Smartphone className="h-8 w-8 text-brand-dark" aria-hidden />
              </div>
              <h3 className="font-display mt-4 text-xl font-bold text-brand-dark">iProcess Mobile Reader</h3>
              <p className="mt-1 text-sm font-semibold text-brand-dark">$2.50/mo per device</p>
              <p className="text-paragraph mt-3 text-sm leading-relaxed">
                Compact Bluetooth card reader that pairs with your phone or tablet. Chip, swipe, and contactless. Perfect for mobile merchants.
              </p>
              <ul className="mt-4 space-y-2">
                {['Pairs with iOS and Android', 'Chip + swipe + tap', 'Compact — fits in your pocket', 'Long battery life', 'Works with Charm Payments app'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-semibold text-gray-500">Best for: Food trucks, markets, mobile services</p>
              <Link href="/apply" className="btn-outline mt-6 inline-flex min-h-[44px] w-full items-center justify-center">
                Apply Now
              </Link>
            </div>

            <div className="charm-card bg-brand-dark p-8 text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Building2 className="h-8 w-8 text-brand-accent" aria-hidden />
              </div>
              <h3 className="font-display mt-4 text-xl font-bold text-white">Free Terminal Program</h3>
              <p className="mt-1 text-sm font-semibold text-brand-accent">$0 upfront</p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Get a PAX A920 Pro at no upfront cost. Hardware cost is recovered through your processing volume over the first 6 months. Ask our team for details.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  'No upfront hardware cost',
                  'PAX A920 Pro included',
                  'Same $8/mo device fee applies',
                  'Month-to-month agreement',
                  'Available to qualified merchants',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-semibold text-white/60">Best for: New merchants, budget-conscious businesses</p>
              <Link href="/contact" className="btn-accent mt-6 inline-flex min-h-[44px] w-full items-center justify-center">
                Ask About Free Terminal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">BUILT FOR YOUR INDUSTRY</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Works in Every\nSt. Louis Business Type`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Store,
                title: 'Retail Stores',
                desc: 'Countertop setup with receipt printer. Customers tap, chip, or swipe at checkout. Full inventory integration available.',
              },
              {
                Icon: Utensils,
                title: 'Restaurants & Cafes',
                desc: 'Table-side or counter service. Split checks, add tips, email receipts. Works through kitchen WiFi or cellular backup.',
              },
              {
                Icon: Scissors,
                title: 'Salons & Barbershops',
                desc: 'Station-based or roaming terminals. Accept payment chair-side. No awkward trip to the front desk required.',
              },
              {
                Icon: Dumbbell,
                title: 'Gyms & Studios',
                desc: 'Front desk check-in payments, retail sales, and membership renewals. One terminal handles all transaction types.',
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
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Card Present Terminal FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="How does the cellular backup work?"
              a="The PAX A920 Pro connects to WiFi as its primary network. If WiFi drops, it automatically switches to 4G LTE — no action required from you or your staff. Your customers see no interruption."
            />
            <FaqItem
              q="Do I own the terminal or lease it?"
              a={"Standard option is a month-to-month device fee of $8/mo — you don't own the hardware outright but have no long-term commitment. Ask about our free terminal program for qualified merchants."}
            />
            <FaqItem
              q="What happens if a terminal breaks?"
              a="Contact our support team. Replacement terminals are shipped within 1-2 business days. Your merchant account stays active during replacement."
            />
            <FaqItem
              q="Can I use multiple terminals under one account?"
              a="Yes. You can add multiple terminals to your Charm Payments account. Each terminal has its own $8/mo device fee and reports to the same dashboard."
            />
            <FaqItem
              q="What cards do the terminals accept?"
              a="Visa, Mastercard, American Express, Discover, JCB, and Diners Club. Apple Pay and Google Pay via NFC. EMV chip and magnetic stripe as fallback."
            />
            <FaqItem
              q="Is there a contract?"
              a="No long-term contract on device fees. Your processing agreement is month-to-month. Cancel anytime."
            />
          </div>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">GET YOUR TERMINAL</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">
            {`Professional Terminals\nWith Cellular Backup.`}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Never lose a sale to a WiFi outage again. Apply today and have your terminal configured within 48 hours of approval.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              Ask About Free Terminal
            </Link>
          </div>
          {disclaimer}
        </div>
      </section>
    </>
  )
}
