import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import PrimaryCTA from '@/components/conversion/PrimaryCTA'
import { Check, Minus } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Pricing — Charm Payments' },
  description:
    'Simple, transparent payment processing pricing for St. Louis merchants. No hidden fees. Flat-rate and interchange-plus plans available.',
}

const rows: { feature: string; starter: boolean | string; growth: boolean | string; enterprise: boolean | string }[] = [
  { feature: 'Virtual Terminal', starter: true, growth: true, enterprise: true },
  { feature: 'Hosted Payment Page', starter: true, growth: true, enterprise: true },
  { feature: 'ACH / eCheck', starter: true, growth: true, enterprise: true },
  { feature: '200+ Cart Integrations', starter: true, growth: true, enterprise: true },
  { feature: 'Basic Fraud Screening', starter: true, growth: true, enterprise: true },
  { feature: 'Interchange-Plus Pricing', starter: false, growth: true, enterprise: true },
  { feature: 'Recurring Billing', starter: false, growth: true, enterprise: true },
  { feature: 'Customer Vault', starter: false, growth: true, enterprise: true },
  { feature: 'Multi-MID Management', starter: false, growth: true, enterprise: true },
  { feature: 'iSpyFraud Advanced', starter: false, growth: true, enterprise: true },
  { feature: 'Dedicated Account Manager', starter: false, growth: false, enterprise: true },
  { feature: 'Load Balancing', starter: false, growth: false, enterprise: true },
  { feature: 'White-Label Options', starter: false, growth: false, enterprise: true },
  { feature: 'Support', starter: 'Email', growth: 'Priority Phone', enterprise: '24/7 Dedicated' },
]

const revealDelays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'] as const

function Cell({ v }: { v: boolean | string }) {
  if (typeof v === 'string') return <span className="text-sm text-gray-700">{v}</span>
  return v ? <Check className="w-5 h-5 text-brand-dark mx-auto" aria-label="Included" /> : <Minus className="w-5 h-5 text-gray-300 mx-auto" aria-label="Not included" />
}

export default function PricingPage() {
  return (
    <div>
      <section className="bg-brand-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <p className="text-sm font-semibold text-brand-accent uppercase tracking-wide">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">Simple Transparent Pricing</h1>
            <p className="text-white/75 mt-4 max-w-2xl text-lg">
              Flat-rate and interchange-plus plans with no hidden platform fees on Starter and Growth. Your Schedule of Fees lists every pass-through network cost.
            </p>
            <div className="mt-8">
              <PrimaryCTA variant="on-dark" />
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/2 justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-[480px]">
              <div className="rounded-[24px] overflow-hidden shadow-2xl animate-float">
                <Image
                  src="/images/pexels-shkrabaanthony-7342621.jpg"
                  alt="Small business owner reviewing her pricing plan"
                  width={600}
                  height={700}
                  className="w-full h-[500px] object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-brand-dark rounded-2xl shadow-xl px-4 py-3">
                <p className="text-[11px] text-brand-accent font-bold uppercase tracking-wide">No Hidden Fees</p>
                <p className="text-sm font-semibold text-white">Transparent Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mx-auto mb-8">TRUSTED BY ST. LOUIS MERCHANTS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { label: 'NMI Gateway', sub: 'Powered by' },
              { label: 'First Data', sub: 'Acquiring bank' },
              { label: 'Fiserv', sub: 'Processing network' },
              { label: 'PCI DSS', sub: 'Compliant' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{item.sub}</p>
                <p className="font-bold text-brand-dark text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds
            are subject to the terms of the Merchant Agreement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 reveal">What you pay now vs Charm</h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            Most merchants discover hidden margin in bundled rates and vague line items. Here&apos;s how we compare on the things that affect your take-home.
          </p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Topic</th>
                  <th className="px-4 py-3 font-semibold text-gray-600">Typical processor</th>
                  <th className="px-4 py-3 font-semibold text-brand-dark">Charm Payments</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Pricing clarity', 'Bundled flat rates & “qualified” tiers', 'Interchange-plus or transparent flat — you see pass-through costs'],
                  ['Hidden fees', 'PCI, batch, support, or “software” line items', 'No surprise platform fees on Starter & Growth'],
                  ['Contracts', 'Multiyear lock-ins common', 'No long-term contracts on Starter & Growth'],
                  ['Deposits', 'Opaque reserve or slow funding', 'Predictable settlement timelines — outlined in your agreement'],
                  ['Support', 'Queues & scripts', 'Real humans for gateway and underwriting questions'],
                ].map(([a, b, c]) => (
                  <tr key={a as string}>
                    <td className="px-4 py-3 font-medium text-gray-900">{a}</td>
                    <td className="px-4 py-3 text-gray-600">{b}</td>
                    <td className="px-4 py-3 text-gray-800 font-medium">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500 max-w-2xl mx-auto">
            Illustrative comparison — your current agreement controls pricing elsewhere. Email a statement for a line-by-line review.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col reveal delay-100">
            <h2 className="text-xl font-bold text-gray-900">Starter</h2>
            <p className="text-3xl font-bold text-brand-dark mt-4">
              2.9% + $0.30<span className="text-base font-normal text-gray-500 block mt-1">per card transaction</span>
            </p>
            <p className="text-sm text-gray-600 mt-2">No monthly fee (transaction fees apply)</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 flex-1">
              {['Virtual terminal & hosted page', 'ACH / eCheck', 'Basic fraud screening', 'Email support'].map((x) => (
                <li key={x} className="flex gap-2">
                  <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            <Button className="w-full mt-8" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
            <p className="text-xs text-gray-500 mt-3">Interchange and assessment fees from the card brands may still apply.</p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-brand-accent p-8 shadow-lg flex flex-col relative reveal delay-200">
            <span className="absolute top-4 right-4 text-xs font-bold bg-brand-accent text-brand-dark px-2 py-1 rounded-full">Most Popular</span>
            <h2 className="text-xl font-bold text-gray-900">Growth</h2>
            <p className="text-3xl font-bold text-brand-dark mt-4">
              IC+ 0.30%<span className="text-base font-normal text-gray-500 block mt-1">interchange-plus</span>
            </p>
            <p className="text-sm text-gray-600 mt-2">$0 setup · month-to-month</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 flex-1">
              {['Everything in Starter', 'Recurring billing engine', 'Customer vault & multi-MID', 'iSpyFraud advanced', 'Priority phone support'].map((x) => (
                <li key={x} className="flex gap-2">
                  <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            <Button className="w-full mt-8" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col reveal delay-300">
            <h2 className="text-xl font-bold text-gray-900">Enterprise</h2>
            <p className="text-3xl font-bold text-brand-dark mt-4">
              Custom<span className="text-base font-normal text-gray-500 block mt-1">volume-based pricing</span>
            </p>
            <p className="text-sm text-gray-600 mt-2">For high-volume or multi-entity merchants</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700 flex-1">
              {['Everything in Growth', 'Dedicated account manager', 'Custom API & white-label', 'Load balancing across MIDs', '24/7 dedicated support'].map((x) => (
                <li key={x} className="flex gap-2">
                  <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            <Button className="w-full mt-8" variant="ghost" asChild>
              <Link href="/contact">Request Pricing</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="/images/sumup-qCYj9p4Xp2w-unsplash.jpg"
                alt="Business owner processing a contactless payment"
                width={600}
                height={400}
                className="w-full h-[260px] object-cover object-top"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="/images/pexels-mikhail-nilov-7681664.jpg"
                alt="Professional business owner on a call"
                width={600}
                height={400}
                className="w-full h-[260px] object-cover object-top"
              />
            </div>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-center text-sm text-gray-600 mt-10 px-6">
          Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant
          funds are subject to the terms of the Merchant Agreement.
        </p>
        <div className="mt-10 flex justify-center">
          <PrimaryCTA />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center reveal">Compare plans</h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Feature</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 text-center">Starter</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 text-center">Growth</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((r, i) => (
                  <tr key={r.feature} className={`reveal ${revealDelays[i % revealDelays.length]}`}>
                    <td className="px-4 py-3 text-gray-800">{r.feature}</td>
                    <td className="px-4 py-3 text-center">
                      <Cell v={r.starter} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Cell v={r.growth} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Cell v={r.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 flex justify-center">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold reveal">No Monthly Fee Statement Analysis</h2>
          <p className="text-white/75 mt-4 leading-relaxed">
            Email a recent processing statement to{' '}
            <a href="mailto:merchants@charmpayments.com" className="text-brand-accent font-medium hover:underline">
              merchants@charmpayments.com
            </a>
            . We will line-item your effective rate and estimate savings on Charm Payments — no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <PrimaryCTA variant="on-dark" />
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-light border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center text-xs text-gray-600 leading-relaxed">
          Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant
          funds are subject to the terms of the Merchant Agreement.
        </div>
      </section>
    </div>
  )
}
