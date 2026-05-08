import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ShieldCheck, WalletCards } from 'lucide-react'
import { SectionHero, FeatureImageCard } from '@/components/marketing/visual-system'

export const metadata: Metadata = {
  title: 'Pricing - Charm Payments',
  description:
    'Simple payment processing pricing with transparent rate-audit options, chargeback support, and no long-term contracts.',
}

const plans = [
  {
    name: 'Starter',
    price: '2.90% + 30¢',
    note: 'Flat-rate processing for newer or lower-volume merchants.',
    features: ['No setup fee', 'Month-to-month', 'Gateway setup included', 'Charm Defense included'],
  },
  {
    name: 'Growth',
    price: 'Interchange plus',
    note: 'Transparent pricing for growing merchants with enough volume to optimize.',
    features: ['Statement review', 'Pass-through cost visibility', 'Cart and terminal support', 'Chargeback workflow support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    note: 'Volume-based pricing for multi-location and complex merchant operations.',
    features: ['Custom review cadence', 'Platform-fee planning', 'Priority support', 'Implementation support'],
  },
]

export default function PricingPage() {
  return (
    <div className="bg-apple-canvas">
      <SectionHero
        className="bg-brand-dark text-white"
        eyebrow="Pricing"
        title="Start with the real statement. Then pick the right rate structure."
        description="Charm uses a statement-first review so pricing is based on your card mix, volume, disputes, and operating workflow instead of a generic teaser rate."
        primaryCta={{ label: 'Get Free Rate Audit', href: '/quote' }}
        secondaryCta={{ label: 'Talk to Charm', href: '/contact' }}
        trustItems={[
          <span key="clear" className="inline-flex items-center gap-2">
            <WalletCards className="h-4 w-4" aria-hidden />
            Clear pricing options
          </span>,
          <span key="defense" className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Charm Defense included
          </span>,
        ]}
        visual={
          <FeatureImageCard
            src="/images/sumup-aM4vzfIsAo0-unsplash.jpg"
            alt="Merchant payment terminal at checkout."
            className="border border-white/10 bg-white/5"
            priority
            caption={
              <p className="text-white/75">
                The rate audit compares your current statement against flat-rate and interchange-plus options.
              </p>
            }
          />
        }
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="section-label">Plans</p>
          <h2 className="font-display text-3xl font-bold text-brand-dark md:text-4xl">
            Simple starting points, finalized after review.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-black/65">
            Exact pricing depends on your processing history, card mix, business type, and gateway needs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="charm-card flex flex-col p-6">
              <p className="font-atelierMono text-xs uppercase tracking-label text-atelier-gold">{plan.name}</p>
              <h3 className="mt-4 font-display text-3xl font-bold text-brand-dark">{plan.price}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-black/65">{plan.note}</p>
              <ul className="mt-6 space-y-3 text-sm text-black/75">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-atelier-forest" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[8px] border border-black/10 bg-white p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark">Have a current statement?</h2>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              Send it through the audit flow and Charm will compare your real costs before you change anything.
            </p>
          </div>
          <Link href="/quote" className="btn-accent mt-5 inline-flex min-h-[44px] items-center justify-center md:mt-0">
            Start Rate Audit
          </Link>
        </div>
      </section>
    </div>
  )
}
