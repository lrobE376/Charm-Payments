// src/app/(marketing)/solutions/retail/page.tsx
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
  title: 'Retail & Boutique Payment Processing â€“ Charm Payments',
  description:
    'Your retail processor charges the same blended rate on a basic debit card and a premium Amex â€” and keeps the spread. Charm shows you every fee, every card type, every time, with no hidden markup.',
}

const VERTICALS = [
  'Clothing Boutiques',
  'Shoe Stores',
  'Gift & Specialty Shops',
  'Home Goods & DÃ©cor',
  'Bookstores',
  'Toy & Hobby Shops',
  'Jewelry Retailers',
  'Pet Supplies',
]

const HERO_PILLS = [
  'See every fee, every card, every time',
  'POS + e-commerce unified',
  'many cart integrations',
  'No long-term contracts',
]

const FEATURES = [
  {
    figLabel: 'In-Store POS',
    title: 'Works with many POS systems',
    description:
      'payment infrastructure connects to the POS you already use. Tap, chip, swipe â€” every card type, every customer. No rip-and-replace required.',
  },
  {
    figLabel: 'Online + In-Store',
    title: 'One gateway for your whole business',
    description:
      'Brick-and-mortar and e-commerce run through the same payment infrastructure account. Unified reporting across channels. No reconciling two separate systems at month-end.',
  },
  {
    figLabel: 'Installment Plans',
    title: 'Layaway and installments built in',
    description:
      'Accept partial payments at purchase and automatically charge remaining balances on your schedule â€” without a third-party app eating into margin.',
  },
  {
    figLabel: 'Fraud Defense',
    title: 'Chargeback protection tuned for retail',
    description:
      'iSpyFraud rule sets, AVS matching, CVV verification, and 3D Secure â€” all configurable to your transaction mix. Dispute tools ready when you need them.',
  },
]

const WHY_CARDS = [
  {
    fig: 'Reason 01',
    title: 'See every fee, every card, every time',
    description:
      'Debit costs less than credit â€” as it should. Every card type listed separately on your statement.',
  },
  {
    fig: 'Reason 02',
    title: 'Unified channel reporting',
    description:
      'In-store, online, and mobile in one dashboard. One reconciliation at month-end.',
  },
  {
    fig: 'Reason 03',
    title: '24-hour approval target',
    description:
      'Complete application in the morning, processing by the next day.',
  },
  {
    fig: 'Reason 04',
    title: 'No long-term contracts',
    description:
      'Month-to-month terms. No penalty if your needs change.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Switching from Square saved us real money once we saw the actual interchange breakdown. The difference on premium cards is significant.',
    name: 'Tara L.',
    role: 'Boutique Owner, St. Louis',
  },
  {
    quote:
      'Finally one system for the store and the website. The reporting actually makes sense now.',
    name: 'Chris B.',
    role: 'Retail Store Manager',
  },
  {
    quote:
      'Approval was fast and support was real. When I had a terminal question they picked up immediately.',
    name: 'Sandra K.',
    role: 'Gift Shop Owner',
  },
]

const FAQS = [
  {
    q: 'Can I use my existing POS hardware?',
    a: 'In most cases, yes. payment infrastructure integrates with many POS systems. We will confirm compatibility during onboarding before you commit to anything.',
  },
  {
    q: 'How does unified reporting work across in-store and online?',
    a: 'Both channels run through the same payment infrastructure merchant account. Every transaction appears in one dashboard regardless of where it originated.',
  },
  {
    q: 'What happens when a customer disputes a charge?',
    a: 'You get a clear notification with the evidence window timeline. payment infrastructure provides documentation tools and our team walks you through the response process.',
  },
  {
    q: 'Do you support Apple Pay and Google Pay?',
    a: 'Yes. Digital wallets are supported on compatible terminals and online checkout. They reduce friction at the register and tend to have lower chargeback rates.',
  },
]

export default function RetailSolutionsPage() {
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
        folio="Retail & Boutiques"
        filed="Filed 2026"
      />

      <MagHero
        eyebrow="Retail & Boutiques Â· Payment Processing"
        headlineLines={[
          { text: "Your Processor Charges You the Same Rate on Debit and Amex. It Shouldn't." },
        ]}
        subtitle="Every time a customer pays with a basic debit card, your flat-rate processor still charges you the premium rate â€” and pockets the difference. Charm shows you every fee, every card type, every time, across every channel you sell through."
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
        eyebrow="Built for retail"
        headline="Every Way You Sell â€” Without Paying More Than You Should"
        items={FEATURES}
        columns={2}
      />

      <MagStickyCardScroll
        eyebrow="Why Charm Payments"
        headline="Square works fine â€” until your {volume grows}"
        body="Flat-rate processors are easy to start on. But every time a customer swipes an Amex Platinum or a premium Visa Rewards card, you pay the same blended rate â€” while the processor pockets the spread. At real retail volume, that margin gap is significant."
        cards={WHY_CARDS}
      />

      <MagPullQuoteRow
        eyebrow="Merchant reviews"
        title="What Retailers Found When They Saw Their Real Costs"
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
              See how much you are overpaying
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
        title="Common questions from retail businesses"
        items={FAQS}
      />

      <MagGradientBreak variant="light-to-forest" />
      <MagForestBand
        eyebrow="Built for retail"
        headline="Register, website, pop-up â€” one merchant account covers every channel with {unified reporting and no separate processors eating into margin.}"
        subtitle="Debit costs less than credit â€” as it should. In-store, online, and mobile in one dashboard with one reconciliation at month-end. Complete application in the morning, processing by the next day. Month-to-month â€” no penalty if your needs change."
        stats={[
          { num: 'Audit', label: 'Statement-first intake' },
          { num: 'Tools', label: 'Workflow-ready' },
          { num: '24 hours', label: 'Approval target' },
        ]}
      />
      <MagGradientBreak variant="forest-to-light" />

      <MagGradientBreak variant="light-to-warm" />
      <MagFinalCta
        eyebrow="Ready to switch?"
        headlineLines={[
          { text: 'Find Out What Square Has Been', size: 'normal' },
          { text: 'Keeping From Every Sale.', italicTarget: 'Keeping From Every Sale.', size: 'normal' },
        ]}
        subtitle="Your last statement is a blended number designed to be hard to question. We'll break it into every card type, every fee, and show you exactly what changes with Charm â€” no commitment, no pressure."
        primaryCta={{ label: 'Get Free Rate Audit', href: '/quote' }}
        secondaryCta={{ label: 'Talk to Charm', href: '/contact' }}
        gradientVariant="solutions-restaurants"
      />
    </>
  )
}



