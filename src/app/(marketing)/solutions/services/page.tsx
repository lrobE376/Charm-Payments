// src/app/(marketing)/solutions/services/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { MagMetaStrip } from '@/components/atelier/magazine/MagMetaStrip'
import { MagHero } from '@/components/atelier/magazine/MagHero'
import { MagFeatureList } from '@/components/atelier/magazine/MagFeatureList'
import { MagStickyCardScroll } from '@/components/atelier/magazine/MagStickyCardScroll'
import { MagPullQuoteRow } from '@/components/atelier/magazine/MagPullQuoteRow'
import { MagFaq } from '@/components/atelier/magazine/MagFaq'
import { MagForestBand } from '@/components/atelier/magazine/MagForestBand'
import { MagGradientBreak } from '@/components/atelier/magazine/MagGradientBreak'
import { MagFinalCta } from '@/components/atelier/magazine/MagFinalCta'
import { HeroVisual } from '@/components/atelier/magazine/HeroVisual'

export const metadata: Metadata = {
  title: 'Service Business Payment Processing â€“ Charm Payments',
  description:
    "Your current processor was built for retail, not service businesses. You're paying card-present flat rates on invoices, you have no ACH option, and no one picks up when billing breaks. Charm fixes all three.",
}

const VERTICALS = [
  'Law Firms',
  'Accounting & CPA Firms',
  'Cleaning Services',
  'HVAC & Plumbing',
  'Landscaping',
  'IT & Managed Services',
  'Marketing Agencies',
  'Consulting Firms',
  'Healthcare & Therapy',
  'Tutoring & Coaching',
]

const HERO_PILLS = [
  'Virtual terminal included',
  'ACH processing',
  'Recurring billing',
  'No long-term contracts',
]

const FEATURES = [
  {
    figLabel: 'Virtual Terminal',
    title: 'Take card payments from any browser',
    description:
      'Phone orders, email invoices, in-person â€” key in card details from any browser without hardware. No flat rate penalty for not having a register. Same next-day settlement.',
  },
  {
    figLabel: 'Invoice & Pay Links',
    title: 'Send a link. Get paid.',
    description:
      'Generate a payment link and send it by text or email. Client pays on their phone. Funds hit your next batch. No chasing, no checks, no awkward collection calls.',
  },
  {
    figLabel: 'Recurring Billing',
    title: 'Automate retainers and contracts',
    description:
      'Monthly retainer charges, service contracts, subscription billing â€” set the schedule and let smart retry logic handle failed cards without interrupting client relationships.',
  },
  {
    figLabel: 'ACH Processing',
    title: 'Bank transfers for big invoices',
    description:
      'Accept bank-to-bank payments at lower interchange cost â€” ideal for large invoices, B2B contracts, and high-ticket services where card fees eat significant margin.',
  },
]

const WHY_CARDS = [
  {
    fig: 'Reason 01',
    title: 'Virtual terminal included',
    description:
      'No separate hardware required. Take payments from any browser on any device.',
  },
  {
    fig: 'Reason 02',
    title: 'ACH processing',
    description:
      'Bank transfers at lower cost â€” right for large invoices and B2B clients.',
  },
  {
    fig: 'Reason 03',
    title: 'Recurring billing',
    description:
      'Retainer automation with smart retry. Set it and stop chasing clients.',
  },
  {
    fig: 'Reason 04',
    title: 'No long-term contracts',
    description: 'Month-to-month. No early termination penalties.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'The virtual terminal alone was worth switching. I take payments over the phone and by email without any hardware. Straightforward and fast.',
    name: 'Kevin M.',
    role: 'IT Consultant, St. Louis',
  },
  {
    quote:
      'Retainer billing is finally automated. Clients get charged on schedule and I stopped thinking about collections.',
    name: 'Lisa R.',
    role: 'Marketing Agency Owner',
  },
  {
    quote:
      'ACH processing on big invoices saves us real money. The difference from card processing on a $10K invoice adds up fast.',
    name: 'David C.',
    role: 'CPA Firm Partner',
  },
]

const FAQS = [
  {
    q: 'Do I need a physical terminal to use Charm Payments?',
    a: 'No. The virtual terminal lets you take card payments from any browser. If you also need in-person hardware, we can set that up â€” but it is not required.',
  },
  {
    q: 'How does recurring billing handle failed cards?',
    a: 'payment infrastructure has built-in smart retry logic that automatically reattempts failed transactions on a configurable schedule before flagging for manual follow-up.',
  },
  {
    q: 'What is ACH processing and when should I use it?',
    a: 'ACH is bank-to-bank payment transfer. It typically costs less than card processing and is best for large invoices or B2B clients who pay from a business bank account.',
  },
  {
    q: 'Can clients pay through a link without calling me?',
    a: 'Yes. You can generate a hosted payment link from payment infrastructure and send it via text, email, or include it in an invoice. The client pays at their convenience.',
  },
]

export default function ServicesIndustryPage() {
  return (
    <>
      <div
        className="bg-apple-canvas font-stripeSans text-center"
        style={{
          padding: '14px 32px 0',
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: '0.06em',
          color: 'rgba(0,0,0,0.5)',
        }}
      >
        Built for serious independent merchants
      </div>

      <MagMetaStrip
        issue="Charm Payments Â· Solutions"
        folio="Service Businesses"
        filed="Filed 2026"
      />

      <MagHero
        eyebrow="Service Businesses Â· Payment Processing"
        headlineLines={[
          { text: "You're Using a Retail Processor to Run a Service Business. That's Costing You." },
        ]}
        subtitle="Flat-rate fees on every invoice. No ACH option for large clients. Support that's never heard of retainer billing. Your current processor wasn't built for how you work â€” Charm is. Virtual terminal, recurring billing, ACH, and pay links. One account, one human support line."
        primaryCta={{ label: 'Get Free Rate Audit', href: '/quote' }}
        secondaryCta={{ label: 'Talk to Charm', href: '/contact' }}
        visualVariant="solutions-restaurants"
        visualSlot={
          <HeroVisual
            variant="solutions-restaurants"
            caption="FIG. 01 â€” A SAMPLE STATEMENT"
          />
        }
        pills={HERO_PILLS}
      />

      <section className="bg-apple-canvas" style={{ padding: '32px 32px 12px' }}>
        <div className="mx-auto" style={{ maxWidth: 1280 }}>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="font-stripeSans"
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.45)',
                marginRight: 4,
              }}
            >
              We serve
            </span>
            {VERTICALS.map((v) => (
              <span
                key={v}
                className="font-stripeSans"
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'rgba(0,0,0,0.7)',
                  background: '#FFFFFF',
                  border: '0.5px solid rgba(0,0,0,0.1)',
                  borderRadius: 980,
                  padding: '6px 14px',
                }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <MagFeatureList
        eyebrow="Built for service businesses"
        headline="Every Way Your Clients Pay â€” Without the Processor Tax"
        items={FEATURES}
        columns={2}
      />

      <MagStickyCardScroll
        eyebrow="Why Charm Payments"
        headline="Chasing invoices while {overpaying to process them}"
        body="Most service businesses are using processors built for retail â€” which means flat-rate fees on every invoice, no ACH option, and support that has never heard of a retainer billing setup. Seeing every fee, every card type, every time â€” and having ACH for big invoices â€” changes the economics completely."
        cards={WHY_CARDS}
      />

      <MagPullQuoteRow
        eyebrow="Merchant reviews"
        title="What Service Businesses Found When They Switched"
        items={TESTIMONIALS}
      />

      <section className="bg-apple-canvas" style={{ padding: '60px 32px' }}>
        <div className="mx-auto" style={{ maxWidth: 800 }}>
          <div
            style={{
              background: '#FFFFFF',
              border: '0.5px solid rgba(0,0,0,0.1)',
              borderRadius: 16,
              padding: '40px',
            }}
          >
            <div
              className="font-stripeSans"
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.06em',
                color: 'rgba(0,0,0,0.5)',
                marginBottom: 12,
              }}
            >
              Free Rate Audit
            </div>
            <h3
              className="font-atelierSerif text-apple-ink"
              style={{
                fontSize: 'clamp(22px, 2.6vw, 28px)',
                lineHeight: 1.15,
                fontWeight: 500,
                letterSpacing: '-0.015em',
                margin: 0,
              }}
            >
              See how much you can save
            </h3>
            <p
              className="font-stripeSans"
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: 'rgba(0,0,0,0.7)',
                margin: '14px 0 24px 0',
              }}
            >
              Send us your last merchant statement. We will line-item every cost and show exactly what changes with Charm â€” before you commit to anything.
            </p>
            <Link
              href="/quote"
              className="font-stripeSans inline-flex items-center gap-1.5 text-apple-ink hover:text-atelier-forest transition-colors"
              style={{
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'underline',
                textUnderlineOffset: 4,
              }}
            >
              Get your free audit
              <span aria-hidden>â†’</span>
            </Link>
          </div>
        </div>
      </section>

      <MagFaq
        eyebrow="FAQ"
        title="Common questions from service businesses"
        items={FAQS}
      />

      <MagGradientBreak variant="light-to-forest" />
      <MagForestBand
        eyebrow="Built for service businesses"
        headline="Phone orders, invoices, retainers, ACH â€” one merchant account covers every collection method your service business uses, {without flat-rate fees on every transaction.}"
        subtitle="No separate hardware required â€” take payments from any browser on any device. Bank transfers at lower cost, right for large invoices and B2B clients. Retainer automation with smart retry â€” set it and stop chasing clients. Month-to-month, no early termination penalties."
        stats={[
          { num: 'Audit', label: 'Statement-first intake' },
          { num: 'Virtual', label: 'Terminal included' },
          { num: 'Month-to-month', label: 'No early termination' },
        ]}
      />
      <MagGradientBreak variant="forest-to-light" />

      <MagGradientBreak variant="light-to-warm" />
      <MagFinalCta
        eyebrow="Ready to switch?"
        headlineLines={[
          { text: 'Stop Paying Retail Processor Rates', size: 'normal' },
          { text: 'on Service Business Invoices.', italicTarget: 'on Service Business Invoices.', size: 'normal' },
        ]}
        subtitle="Your last statement reflects a processor that wasn't built for you. We'll audit every line and show you exactly what changes with Charm â€” no commitment, no pressure."
        primaryCta={{ label: 'Get Free Rate Audit', href: '/quote' }}
        secondaryCta={{ label: 'Talk to Charm', href: '/contact' }}
        gradientVariant="solutions-restaurants"
      />
    </>
  )
}



