// src/app/(marketing)/page.tsx
import type { Metadata } from 'next'
import { MagPage } from '@/components/atelier/magazine/MagPage'
import { HeroVisual } from '@/components/atelier/magazine/HeroVisual'

export const metadata: Metadata = {
  title: 'Payment Processing Built for Business',
  description:
    'Charm Payments gives St. Louis small businesses enterprise-grade payment processing — credit cards, ACH, Apple Pay, and more. No long-term contracts.',
}

export default function HomePage() {
  return (
    <MagPage
      meta={{
        issue: 'Charm Payments · St. Louis, MO',
        folio: 'A merchant account that respects the floor',
        filed: 'Filed 05.06.2026',
      }}
      hero={{
        eyebrow: 'A new specification.',
        headlineLines: [
          { text: 'Your Processor Is' },
          { text: 'Charging More' },
          { text: 'Than You Know.', size: 'lg' },
        ],
        subtitle:
          "Your current processor bundles fees you can't audit, holds funds you've already earned, and routes you to a chatbot when something breaks. We'll show you exactly what you're paying — and what changes with Charm.",
        primaryCta: { label: 'Apply Now', href: '/apply' },
        secondaryCta: { label: 'Free Rate Audit', href: '/quote' },
        visualVariant: 'home',
        visualSlot: <HeroVisual variant="home" caption="FIG. 01 — A NEW STANDARD" />,
      }}
      marquee={{
        eyebrow: 'Accepted everywhere',
        items: [
          { name: 'VISA' },
          { name: 'MASTERCARD' },
          { name: 'AMEX' },
          { name: 'DISCOVER' },
          { name: 'ACH/eCHECK' },
          { name: 'APPLE PAY' },
          { name: 'GOOGLE PAY' },
          { name: 'VIRTUAL TERMINAL' },
          { name: 'RECURRING BILLING' },
          { name: 'PCI DSS' },
        ],
        speed: 'normal',
      }}
      statsRow={{
        eyebrow: 'By the numbers.',
        stats: [
          { num: '0+', label: 'Merchants Served', sublabel: 'St. Louis & beyond' },
          { num: '0hr', label: 'Approval Target', sublabel: 'On complete applications' },
          { num: '$0', label: 'Setup Fees', sublabel: 'No cost to get started' },
          { num: '0+', label: 'Cart Integrations', sublabel: 'E-commerce platforms' },
        ],
      }}
      featureList={{
        eyebrow: 'What changes.',
        headline: 'Run every payment channel {without juggling} processors.',
        columns: 6,
        items: [
          {
            figLabel: 'Fig. 04.A',
            title: 'Virtual Terminal',
            description:
              'Key in card and ACH payments from any browser — perfect for phone and mail orders.',
          },
          {
            figLabel: 'Fig. 04.B',
            title: 'E-Commerce Gateway',
            description: '200+ integrations · drop-in.',
          },
          {
            figLabel: 'Fig. 04.C',
            title: 'ACH Processing',
            description:
              'Accept large invoices by bank transfer — costs less than cards, settles predictably, fully reported.',
          },
          {
            figLabel: 'Fig. 04.D',
            title: 'Fraud Protection',
            description:
              'iSpyFraud rules, tokenization, and 3D Secure aligned to your risk profile.',
          },
          {
            figLabel: 'Fig. 04.E',
            title: 'Recurring Billing',
            description: 'Smart retries · built-in.',
          },
          {
            figLabel: 'Fig. 04.F',
            title: 'Real-Time Reporting',
            description:
              'See every transaction, batch, and settlement in real time — no more guessing where your money is between statements.',
          },
        ],
      }}
      threeCards={{
        eyebrow: 'How it works.',
        headline: 'Three steps to a processor that {works for you.}',
        cards: [
          {
            figLabel: 'EST. 5 MIN',
            title: 'Apply in minutes',
            description:
              'Tell us about your business, volume, and how you take payments — online, in-store, or both.',
            image: undefined,
          },
          {
            figLabel: 'EST. T+1',
            title: 'Approved in 24 hours',
            description:
              'Submit a complete application — we target same-day to 24-hour approval when everything checks out.',
            image: undefined,
          },
          {
            figLabel: 'LIVE',
            title: 'Start accepting payments',
            description:
              "Gateway keys, fraud rules, and cart connections go live — you're ready to run real transactions.",
            image: undefined,
          },
        ],
      }}
      specTable={{
        eyebrow: 'St. Louis built.',
        title: 'Built for the business owners who keep St. Louis running.',
        rows: [
          { label: 'City', value: 'St. Louis, Missouri' },
          { label: 'Founded', value: '2024' },
          { label: 'Support', value: 'Local · same time zone' },
          { label: 'Scope', value: 'St. Louis & nationwide' },
          { label: 'Documentary', value: 'No. 001 — 35mm · Kodak' },
          { label: 'Frame 001', value: 'Barber checking his Charm dashboard between clients.' },
          { label: 'Geo', value: 'St. Louis, MO · 38.6270° N · 90.1994° W' },
        ],
        footnote:
          "From barbershops to boutiques, St. Louis merchants use Charm to finally see what they're paying — and stop their processor from quietly keeping the difference.",
      }}
      pullQuoteRow={{
        eyebrow: 'Merchant reviews.',
        title: 'What merchants say {after switching.}',
        items: [
          {
            quote:
              'Charm Payments got us live before our launch weekend. Transparent pricing finally matched what we were promised.',
            name: 'Marcus T.',
            role: 'Metro Auto Repair',
            verified: true,
            verifiedDate: '03.2026',
          },
          {
            quote:
              'Recurring billing just works. Support picked up on the first ring when we had a gateway question.',
            name: 'Diane R.',
            role: 'Sunflower Wellness Spa',
            verified: true,
            verifiedDate: '02.2026',
          },
          {
            quote:
              'We process six figures monthly without downtime. The reporting exports clean into our accounting stack.',
            name: 'James K.',
            role: 'StreamFlow Software',
            verified: true,
            verifiedDate: '01.2026',
          },
        ],
      }}
      forestBand={{
        eyebrow: 'The promise',
        headline: 'We answer the phone. We honor the rate. We {show our math.}',
        subtitle:
          'Built in St. Louis for independent merchants. No call centers. No hidden tiers. No surprise statement fees.',
        stats: [
          { num: '48hr', label: 'From application to processing' },
          { num: '$0', label: 'Monthly fees, ever' },
          { num: '1', label: 'Phone number, real human' },
        ],
        backgroundImage: undefined,
      }}
      comparison={{
        eyebrow: 'Why we win.',
        headline: "What your processor doesn't {want you} to audit.",
        theirs: {
          label: 'Specimen A — The Other Guys',
          title: 'Extracted: $359.85/mo',
          items: [
            'Discount rate · Bundled % · $269.00',
            'Per-transaction · 120 × $0.20 · $24.00',
            'Statement fee · Monthly · $12.50',
            'PCI compliance · Quarterly · $19.95',
            'Non-qual surcharge · Card-mix · $28.40',
            'Batch fee · Per close · $6.00',
          ],
        },
        ours: {
          label: 'Specimen B — Charm Payments',
          title: 'Billed: $190.00/mo · You keep $169/mo · $2,028/yr',
          items: [
            'Interchange · Passthrough · $165.00',
            'Charm markup · Flat · $25.00',
            'Statement fee · Not billed',
            'PCI compliance · Not billed',
            'Non-qual surcharge · Not billed',
            'Batch fee · Not billed',
          ],
        },
      }}
      finalCta={{
        eyebrow: 'Stop overpaying today.',
        headlineLines: [
          { text: 'Ready to see what your statement' },
          { text: 'is hiding?', italicTarget: 'is hiding?', size: 'lg' },
        ],
        subtitle:
          "Your last statement has fees your processor buried on purpose. We'll find every one, line them up, and show you exactly what you'd save — no cost, no commitment.",
        primaryCta: { label: 'Get My Free Rate Audit', href: '/apply' },
        secondaryCta: { label: 'Free Rate Audit', href: '/quote' },
        gradientVariant: 'home',
        disclaimer:
          'Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds are subject to the terms of the Merchant Agreement. Rate audit is free and non-binding. We compare line-item against your last statement.',
      }}
    />
  )
}
