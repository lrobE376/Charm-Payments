// src/app/(marketing)/solutions/beauty/page.tsx
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
  title: 'Beauty & Salons Payment Processing – Charm Payments',
  description:
    "Your salon processor bundles fees you can't see and holds funds after your busiest days. Charm shows you every fee, every card type, every time — with local St. Louis support and 24-hour approval.",
}

const VERTICALS = [
  'Hair Salons',
  'Barbershops',
  'Nail Studios',
  'Day Spas',
  'Esthetics & Waxing',
  'Lash & Brow Studios',
  'Med Spas',
  'Mobile Beauty Pros',
]

const HERO_PILLS = [
  'See every fee, every card, every time',
  'Tip prompting included',
  'Card-on-file tokenization',
  'No long-term contracts',
]

const FEATURES = [
  {
    figLabel: 'Tip Prompting',
    title: 'Tips that settle clean — every time',
    description:
      'Tip adjustments after the fact are the number one chargeback trigger in beauty. Ours prompt at the terminal and settle with the original batch — no disputes, no manual math, no surprises on your statement.',
  },
  {
    figLabel: 'Membership Billing',
    title: 'Automate your monthly memberships',
    description:
      'Blowout clubs, waxing memberships, skincare plans — the revenue is supposed to be passive. Set the schedule once and smart retry logic handles failed cards. Stop chasing clients for money they already agreed to pay.',
  },
  {
    figLabel: 'Card on File',
    title: 'Charge cards on file with one click',
    description:
      'A card on file at booking means a no-show is a billable event, not a lost hour. Stored securely, charged with one click, fully PCI compliant. Your time has a price — now you can enforce it.',
  },
  {
    figLabel: 'Multi-Location',
    title: 'Every Stylist Tracked. One Login to See It All.',
    description:
      'Booth renters and multi-location owners stop sharing one murky merchant account. Each chair or location has its own reporting. One dashboard, clear numbers — no more confusion about who processed what.',
  },
]

const WHY_CARDS = [
  {
    fig: 'Reason 01',
    title: 'See every fee, every card, every time',
    description:
      'You see the exact interchange cost on every card type plus our fixed markup. No blended rate hiding margin.',
  },
  {
    fig: 'Reason 02',
    title: '24-hour approval target',
    description:
      'Submit a complete application and we target same-day to next-business-day approval.',
  },
  {
    fig: 'Reason 03',
    title: 'Local St. Louis support',
    description:
      'When your terminal goes down on a Saturday, we pick up. Real people, same time zone.',
  },
  {
    fig: 'Reason 04',
    title: 'No long-term contracts',
    description:
      'We earn your business every month. No lock-in, no early termination penalties.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Charm Payments got us live before our grand opening weekend. Finally seeing exactly what every card type costs us.',
    name: 'Alicia M.',
    role: 'Salon Owner, St. Louis',
  },
  {
    quote:
      'Membership billing just runs. I set it up once and stopped thinking about it. Support picked up on the first ring when I had a question.',
    name: 'Deja R.',
    role: 'Med Spa Director',
  },
  {
    quote:
      'Chair rental tracking is finally clean. Every booth renter has their own MID and I see everything from one login.',
    name: 'Marcus T.',
    role: 'Barbershop Owner',
  },
]

const FAQS = [
  {
    q: 'Does Charm Payments handle tip adjustments?',
    a: 'Yes. Tip prompts are built into the gateway and settle with the same batch as the original transaction — eliminating the most common chargeback trigger in beauty.',
  },
  {
    q: 'Can I store client cards for recurring charges?',
    a: 'Yes. payment infrastructure tokenization stores cards securely and PCI compliantly. Charge on demand, on a schedule, or at any point in the client relationship.',
  },
  {
    q: 'How long does approval take?',
    a: 'We target 24 hours on complete applications. Most beauty businesses are straightforward — if you have your business docs ready, you can be processing fast.',
  },
  {
    q: 'Do you support multiple locations?',
    a: 'Yes. Each location or booth renter can have a separate MID with unified reporting in a single dashboard.',
  },
]

export default function BeautySolutionsPage() {
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
        folio="Beauty & Salons"
        filed="Filed 2026"
      />

      <MagHero
        eyebrow="Beauty & Salons · Payment Processing"
        headlineLines={[
          { text: 'Your Processor Is Taking More From Every Service Than You Know.' },
        ]}
        subtitle="Every Saturday your processor closes the batch and quietly keeps the spread between what it costs them and what they charge you. Charm shows you every fee, every card type, every time — and gives you a real person to call when something goes wrong."
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
        eyebrow="Built for beauty"
        headline="Every Problem Your Current Processor Creates — Solved"
        items={FEATURES}
        columns={2}
      />

      <MagStickyCardScroll
        eyebrow="Why Charm Payments"
        headline="Stop guessing what you actually earned"
        body="Most beauty businesses are on flat-rate processors that bundle fees, hold funds after busy weekends, and make it impossible to audit what you paid. With Charm, you see every fee, every card type, every time — and when your card mix improves, so does your cost."
        cards={WHY_CARDS}
      />

      <MagPullQuoteRow
        eyebrow="Merchant reviews"
        title="What Beauty Businesses Found When They Switched"
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
              See what your statement is hiding
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
        title="Common questions from beauty businesses"
        items={FAQS}
      />

      <MagGradientBreak variant="light-to-forest" />
      <MagForestBand
        eyebrow="Built for beauty"
        headline="Tips settle automatically. Memberships charge themselves. No-shows lose their leverage. {All without three separate apps or a single manual reconciliation.}"
        subtitle="You see the exact interchange cost on every card type plus our fixed markup. When your terminal goes down on a Saturday, we pick up — real people, same time zone. No lock-in, no early termination penalties."
        stats={[
          { num: 'Audit', label: 'Statement-first intake' },
          { num: '24 hours', label: 'Approval target' },
          { num: 'St. Louis', label: 'Local support' },
        ]}
      />
      <MagGradientBreak variant="forest-to-light" />

      <MagGradientBreak variant="light-to-warm" />
      <MagFinalCta
        eyebrow="Ready to switch?"
        headlineLines={[
          { text: 'Find Out What Your Processor', size: 'normal' },
          { text: 'Has Been Keeping From You.', italicTarget: 'Has Been Keeping From You.', size: 'normal' },
        ]}
        subtitle="Your last merchant statement is full of fees your processor designed to be invisible. We'll translate every line and show you exactly what changes with Charm — no commitment, no pressure."
        primaryCta={{ label: 'Get Free Rate Audit', href: '/quote' }}
        secondaryCta={{ label: 'Talk to Charm', href: '/contact' }}
        gradientVariant="solutions-restaurants"
      />
    </>
  )
}



