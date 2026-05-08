// src/app/(marketing)/solutions/restaurants/page.tsx
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
  title: 'Restaurants & Food Service Payment Processing – Charm Payments',
  description:
    "Your processor is pocketing the spread between what rewards cards cost at interchange and what they charge you. At restaurant volumes, that's thousands a year. Charm shows you every fee — and picks up the phone.",
}

const VERTICALS = [
  'Full-Service Restaurants',
  'QSR & Fast Casual',
  'Bars & Nightclubs',
  'Food Trucks',
  'Cafes & Coffee Shops',
  'Bakeries & Delis',
  'Ghost Kitchens',
  'Catering Companies',
]

const HERO_PILLS = [
  'See every fee, every card, every time',
  'Tableside tip prompting',
  'Next-day settlement',
  'Multi-location support',
]

const FEATURES = [
  {
    figLabel: 'Tableside Payments',
    title: 'Every channel. One gateway.',
    description:
      'EMV chip, tap-to-pay, and swipe at the table, counter, or bar. Online ordering connects to the same payment infrastructure and settles into the same batch as in-house transactions.',
  },
  {
    figLabel: 'Tip & Split',
    title: 'Tips and splits without the math',
    description:
      'Configurable tip presets on every terminal. Split bills across multiple cards without manual calculations or awkward moments. Tips settle automatically with the batch.',
  },
  {
    figLabel: 'Fast Settlement',
    title: 'Know when your money hits',
    description:
      'Next-business-day settlement as standard. No mystery holds after a big Saturday. Your funds move on a predictable schedule you can count on.',
  },
  {
    figLabel: 'Reporting',
    title: 'End-of-day reporting that actually helps',
    description:
      'Batch reports by location, terminal, or server. See exactly what you processed, what you netted, and where chargebacks are concentrating — exportable in seconds.',
  },
]

const WHY_CARDS = [
  {
    fig: 'Reason 01',
    title: 'See every fee, every card, every time',
    description:
      'Rewards cards cost you more at interchange — with us, you see that actual cost instead of a blended rate hiding the difference.',
  },
  {
    fig: 'Reason 02',
    title: 'Next-day settlement',
    description:
      'Funds on a predictable schedule. No holds after high-volume weekends.',
  },
  {
    fig: 'Reason 03',
    title: 'Multi-location support',
    description:
      'Separate MIDs per location with unified reporting across your entire operation.',
  },
  {
    fig: 'Reason 04',
    title: 'No long-term contracts',
    description:
      'Month-to-month. We earn your business every statement cycle.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Charm Payments got us processing before our launch weekend. Finally seeing real interchange costs instead of a blended mystery rate.',
    name: 'Marcus T.',
    role: 'Restaurant Owner, St. Louis',
  },
  {
    quote:
      'Tip settlement is clean and automatic. Chargebacks dropped once we had proper documentation tools in place.',
    name: 'Diane R.',
    role: 'Bar & Grill Manager',
  },
  {
    quote:
      'We process six figures monthly across three locations. The unified reporting dashboard saves us hours every week.',
    name: 'James K.',
    role: 'Multi-Location QSR Operator',
  },
]

const FAQS = [
  {
    q: 'Can I connect online ordering to the same merchant account?',
    a: 'Yes. payment infrastructure connects your online ordering flow directly to your merchant account. Orders settle into the same batch as in-house transactions with unified reporting.',
  },
  {
    q: 'How does tip adjustment work to avoid chargebacks?',
    a: 'Tips are captured at the terminal at time of payment and settle with the original transaction. This eliminates the most common restaurant chargeback trigger — post-authorization tip adjustments.',
  },
  {
    q: 'Do you support multi-location operations?',
    a: 'Yes. Each location gets a separate MID with its own reporting. A parent dashboard gives you visibility across the full operation.',
  },
  {
    q: 'How fast is approval?',
    a: 'We target 24 hours on complete applications. Restaurants are a standard MCC — if your documents are in order, you can be processing quickly.',
  },
]

export default function RestaurantsSolutionsPage() {
  return (
    <>
      {/* Trust strip — above MagHero, meta-strip-style */}
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
        issue="Charm Payments · Solutions"
        folio="Restaurants & Food Service"
        filed="Filed 2026"
      />

      <MagHero
        eyebrow="Restaurants & Food Service · Payment Processing"
        headlineLines={[
          {
            text: 'Your Processor Profits Every Time a Rewards Card Hits Your Terminal.',
          },
        ]}
        subtitle="Every Amex Platinum and Visa Rewards card your guest swipes has a higher interchange cost — and your flat-rate processor keeps the difference. Charm shows you every fee, every card type, every time, and settles your funds the next business day."
        primaryCta={{ label: 'Get Free Rate Audit', href: '/quote' }}
        secondaryCta={{ label: 'Talk to Charm', href: '/contact' }}
        visualVariant="solutions-restaurants"
        visualSlot={
          <HeroVisual
            variant="solutions-restaurants"
            caption="FIG. 01 — A SAMPLE STATEMENT"
          />
        }
        pills={HERO_PILLS}
      />

      {/* Verticals strip — inline static chips */}
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
        eyebrow="Built for restaurants"
        headline="Every Problem Your Processor Creates at the Table — Solved"
        items={FEATURES}
        columns={2}
      />

      <MagStickyCardScroll
        eyebrow="Why Charm Payments"
        headline="Rewards cards are costing you more than you think"
        body="With flat-rate pricing, every premium rewards card your guest swipes costs you the same blended rate — but the processor pockets the difference between interchange and what they charge you. At restaurant volumes, that adds up to thousands a year. With Charm, you see every fee, every card type, every time — not a blended rate designed to obscure it."
        cards={WHY_CARDS}
      />

      <MagPullQuoteRow
        eyebrow="Merchant reviews"
        title="What Restaurant Operators Found When They Switched"
        items={TESTIMONIALS}
      />

      {/* Free Rate Audit callout — inline section between testimonials and FAQ */}
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
              See what your statement is hiding
            </h3>
            <p
              className="font-stripeSans"
              style={{
                marginTop: 14,
                fontSize: 16,
                lineHeight: 1.6,
                color: 'rgba(0,0,0,0.7)',
                margin: '14px 0 24px 0',
              }}
            >
              Send us your last merchant statement. We&apos;ll line-item every cost and show exactly what changes with Charm — before you commit to anything.
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
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <MagFaq
        eyebrow="FAQ"
        title="Common questions from restaurant operators"
        items={FAQS}
      />

      <MagGradientBreak variant="light-to-forest" />
      <MagForestBand
        eyebrow="Built for restaurants"
        headline="Tips that don't trigger chargebacks. Settlements you can predict. {Reporting that tells you where the money actually went.}"
        subtitle="Funds on a predictable schedule. No holds after high-volume weekends. Separate MIDs per location with unified reporting across your entire operation. Month-to-month — we earn your business every statement cycle."
        stats={[
          { num: 'Audit', label: 'Statement-first intake' },
          { num: 'Next day', label: 'Settlement standard' },
          { num: '24 hours', label: 'Approval target' },
        ]}
      />
      <MagGradientBreak variant="forest-to-light" />

      <MagGradientBreak variant="light-to-warm" />
      <MagFinalCta
        eyebrow="Ready to switch?"
        headlineLines={[
          { text: 'Find Out How Much Your Processor', size: 'normal' },
          { text: 'Kept Last Month.', italicTarget: 'Kept Last Month.', size: 'normal' },
        ]}
        subtitle="Your last statement has a blended rate your processor designed to be unauditable. We'll break it down line by line and show you exactly what changes — no commitment, no pressure."
        primaryCta={{ label: 'Get Free Rate Audit', href: '/quote' }}
        secondaryCta={{ label: 'Talk to Charm', href: '/contact' }}
        gradientVariant="solutions-restaurants"
      />
    </>
  )
}



