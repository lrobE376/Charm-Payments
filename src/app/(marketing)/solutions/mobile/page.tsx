// src/app/(marketing)/solutions/mobile/page.tsx
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
  title: 'Mobile & On-the-Go Payment Processing – Charm Payments',
  description:
    'Square charges you the same flat rate on a debit card as a premium rewards card — even in the field. Charm shows you every fee, every card type, every time, with offline mode and text-to-pay built in.',
}

const VERTICALS = [
  'Food Trucks',
  'Farmers Markets',
  'Contractors & Trades',
  'Mobile Pet Groomers',
  'Event Vendors',
  'Home Service Pros',
  'Pop-Up Retailers',
  'Mobile Massage & Wellness',
  'Photographers',
  'Delivery Businesses',
]

const HERO_PILLS = [
  'Mobile card reader',
  'Text-to-pay links',
  'Offline mode',
  'No long-term contracts',
]

const FEATURES = [
  {
    figLabel: 'Mobile Reader',
    title: 'EMV and tap-to-pay on any device',
    description:
      'Chip, tap, and swipe from any iOS or Android device. Works on 4G or WiFi. Connects to your payment infrastructure merchant account — same settlement, same reporting as your other channels.',
  },
  {
    figLabel: 'Text to Pay',
    title: 'Send a link. Get paid on the road.',
    description:
      'Generate a payment link from your phone and send it by text. Customer pays before you leave the job site. Funds hit your next batch automatically.',
  },
  {
    figLabel: 'Offline Mode',
    title: 'Process when signal drops',
    description:
      'Low-connectivity zones are not a problem. Transactions queue locally and sync when you reconnect. No lost sales because a job site has spotty service.',
  },
  {
    figLabel: 'Real-Time Dashboard',
    title: 'See your volume from anywhere',
    description:
      'Check sales, batch status, and settlement from your phone. Know your numbers before you drive to the next job.',
  },
]

const WHY_CARDS = [
  {
    fig: 'Reason 01',
    title: 'See every fee, every card, every time',
    description:
      'Debit costs less than credit — even on mobile. No flat 2.6% regardless of card type.',
  },
  {
    fig: 'Reason 02',
    title: 'Offline mode',
    description:
      'Queue transactions in low-connectivity zones and sync automatically.',
  },
  {
    fig: 'Reason 03',
    title: 'Text-to-pay links',
    description:
      'Send a payment link by text. No reader required for every transaction.',
  },
  {
    fig: 'Reason 04',
    title: 'No long-term contracts',
    description: 'Month-to-month. Built for businesses that move.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Taking payments at the farmers market used to be a hassle. Now it just works — tap, done, next customer.',
    name: 'Angela T.',
    role: 'Farmers Market Vendor',
  },
  {
    quote:
      'I send a text link when I finish a job and get paid before I load my truck. No more chasing checks.',
    name: 'Brian R.',
    role: 'HVAC Contractor',
  },
  {
    quote:
      'The offline mode saved me at an outdoor event with bad service. Processed everything and it synced when I got home.',
    name: 'Carmen S.',
    role: 'Mobile Pet Groomer',
  },
]

const FAQS = [
  {
    q: 'What hardware do I need to take mobile payments?',
    a: 'A smartphone or tablet and a Bluetooth card reader. We will help you source the right reader for your setup during onboarding.',
  },
  {
    q: 'Does offline mode work for all transaction types?',
    a: 'Offline mode queues card-present transactions. They are processed and settled when your device reconnects. There is a small risk tolerance window — we set it to match your typical transaction size.',
  },
  {
    q: 'Can I use text-to-pay without a card reader?',
    a: 'Yes. Payment links work entirely without hardware. You send a link, the customer pays on their phone, and funds settle into your account.',
  },
  {
    q: 'Is the rate the same for mobile transactions as in-store?',
    a: 'Yes. Interchange-plus applies to all card-present transactions regardless of the hardware used. Mobile swiped and tapped transactions get card-present interchange rates.',
  },
]

export default function MobileSolutionsPage() {
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
        issue="Charm Payments · Solutions"
        folio="Mobile & On-the-Go"
        filed="Filed 2026"
      />

      <MagHero
        eyebrow="Mobile & On-the-Go · Payment Processing"
        headlineLines={[
          { text: "Square Charges You a Flat Rate in the Field. You Shouldn't Have to Accept That." },
        ]}
        subtitle="Being mobile shouldn't mean paying more. Square and PayPal charge the same flat rate regardless of card type — and pocket the spread on every debit swipe. Charm shows you every fee, every card type, every time, with a reader, text-to-pay, and offline mode built for how you actually work."
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
        eyebrow="Built for mobile"
        headline="Every Problem With Mobile Processing — Solved"
        items={FEATURES}
        columns={2}
      />

      <MagStickyCardScroll
        eyebrow="Why Charm Payments"
        headline="Mobile processors charge flat rates built for {their convenience}"
        body="Square, PayPal, and Stripe are easy to start on — but they charge the same flat rate on a debit card as they do on a premium rewards card. At volume, that margin gap adds up to real money. With Charm, you see every fee, every card type, every time — debit costs what debit should cost, and your statement proves it."
        cards={WHY_CARDS}
      />

      <MagPullQuoteRow
        eyebrow="Merchant reviews"
        title="What Mobile Businesses Found When They Switched"
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
              Compare your rate to Charm
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
              Send us your last processor statement. We will line-item the comparison and show exactly what you save at your transaction mix — before you commit to anything.
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
        title="Common questions from mobile businesses"
        items={FAQS}
      />

      <MagGradientBreak variant="light-to-forest" />
      <MagForestBand
        eyebrow="Built for mobile"
        headline="Bad signal, no reader, client wants a link — one merchant account handles every scenario {without juggling multiple apps or paying multiple processors.}"
        subtitle="Debit costs less than credit — even on mobile. Queue transactions in low-connectivity zones and sync automatically. Send a payment link by text — no reader required for every transaction. Month-to-month, built for businesses that move."
        stats={[
          { num: 'Audit', label: 'Statement-first intake' },
          { num: 'Offline', label: 'Mode included' },
          { num: 'Month-to-month', label: 'Built for businesses that move' },
        ]}
      />
      <MagGradientBreak variant="forest-to-light" />

      <MagGradientBreak variant="light-to-warm" />
      <MagFinalCta
        eyebrow="Ready to switch?"
        headlineLines={[
          { text: 'Find Out How Much Your Mobile', size: 'normal' },
          { text: 'Processor Has Been Keeping.', italicTarget: 'Has Been Keeping.', size: 'normal' },
        ]}
        subtitle="Your last statement is a flat number that hides what every card type actually costs. We'll break it down and show you exactly what changes with Charm — no commitment, no pressure."
        primaryCta={{ label: 'Get Free Rate Audit', href: '/quote' }}
        secondaryCta={{ label: 'Talk to Charm', href: '/contact' }}
        gradientVariant="solutions-restaurants"
      />
    </>
  )
}



