import Link from 'next/link'
import Button from '@/components/ui/Button'
import {
  MonitorSmartphone,
  RefreshCw,
  ShoppingCart,
  Landmark,
  ShieldCheck,
  LineChart,
  CheckCircle2,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Processing Built for Business',
}

const solutions = [
  { title: 'Virtual Terminal', desc: 'Key in card and ACH payments from any browser — ideal for phone and mail orders.', icon: MonitorSmartphone },
  { title: 'Recurring Billing', desc: 'Subscriptions, installments, and retries without a separate billing system.', icon: RefreshCw },
  { title: 'E-Commerce Gateway', desc: 'Hosted pages and 200+ cart integrations including WooCommerce and Shopify.', icon: ShoppingCart },
  { title: 'ACH Processing', desc: 'Lower-cost bank debits with Nacha-compliant settlement timelines.', icon: Landmark },
  { title: 'Fraud Protection', desc: 'iSpyFraud screening, tokenization, and 3D Secure on the NMI stack.', icon: ShieldCheck },
  { title: 'Real-Time Reporting', desc: 'Search, export, and reconcile transactions as they authorize.', icon: LineChart },
]

const steps = [
  { title: 'Apply Online', body: 'Tell us about your business and volume. Most applications take under ten minutes.' },
  { title: 'Get Approved', body: 'Our underwriting team responds within 24–48 business hours for standard merchants.' },
  { title: 'We Configure Everything', body: 'Gateway, MIDs, and integrations are set up for you — no developer required to go live.' },
  { title: 'Start Processing', body: 'Accept cards and ACH with transparent interchange-plus or flat-rate pricing.' },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-brand-dark uppercase tracking-wide">Welcome to Charm Payments</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 text-balance leading-tight">
              Accept Payments Anywhere Your Customers Want to Pay
            </h1>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              Enterprise-grade processing for small and mid-size businesses — virtual terminal, recurring billing, e-commerce, and ACH on one NMI-powered
              gateway with First Data/Fiserv acquiring.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="/apply">Apply for Your Merchant Account</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <ul className="mt-10 space-y-2 text-sm text-gray-700">
              {['No setup fees on standard plans', 'No long-term contracts on Starter and Growth', 'Most accounts approved within 48 business hours'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-brand-card border border-amber-100/80 p-8 shadow-sm">
            <p className="text-sm font-medium text-brand-dark">Why merchants switch</p>
            <ul className="mt-4 space-y-4 text-gray-700 text-sm leading-relaxed">
              <li>Transparent interchange-plus statements you can reconcile line by line.</li>
              <li>One support team for gateway, risk, and funding questions.</li>
              <li>Scale from your first transaction to multi-MID enterprise setups.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900">Solutions built for how you sell</h2>
            <p className="text-gray-600 mt-3">Everything runs through a single NMI gateway login — no juggling multiple vendors.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {solutions.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-gray-100 bg-brand-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-dark" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4">{title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-brand-dark text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold">How it works</h2>
          <p className="text-white/70 mt-3 max-w-2xl">Four steps from application to your first settled batch.</p>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 list-none m-0 p-0">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl bg-white/10 p-6 border border-white/10">
                <span className="text-brand-accent font-bold text-sm">0{i + 1}</span>
                <h3 className="text-lg font-semibold mt-2">{s.title}</h3>
                <p className="text-sm text-white/75 mt-2 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Security and compliance by design</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Charm Payments never stores full card numbers in your application database. Tokenization keeps PAN data off your servers, while PCI DSS Level 1
              infrastructure and iSpyFraud scoring reduce fraud losses before they hit your bottom line.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-dark shrink-0" aria-hidden="true" />
                PCI DSS aligned processing paths and attested data centers
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-dark shrink-0" aria-hidden="true" />
                iSpyFraud rules tuned for card-not-present and high-ticket merchants
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-dark shrink-0" aria-hidden="true" />
                Chargeback notifications and evidence workflows with human support
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm">
            <h3 className="font-semibold text-gray-900">Operational resilience</h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              NMI’s gateway tier handles billions in annual volume with redundant routing. When a network blips, retries and failover keep checkout flows online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to modernize your processing stack?</h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Send a recent statement for a no-obligation rate comparison, or apply online and we will call you within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button size="lg" variant="ghost" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center text-xs text-gray-500 leading-relaxed">
          Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant
          funds are subject to the terms of the Merchant Agreement.
        </div>
      </section>
    </div>
  )
}
