// src/app/(marketing)/solutions/ecommerce/page.tsx
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
  title: 'E-Commerce Payment Processing – Charm Payments',
  description:
    "Stripe's 2.9% is easy to start on and expensive to scale. Charm gives you a dedicated merchant account, shows you every fee every card type every time, and won't pause your account without warning.",
}

const PLATFORMS = [
  'WooCommerce',
  'Shopify',
  'Magento',
  'BigCommerce',
  'Squarespace',
  'Wix',
  'Custom API',
  'Headless Commerce',
]

const HERO_PILLS = [
  '200+ cart integrations',
  'Apple Pay & Google Pay',
  'Subscription billing',
  'PCI DSS compliant',
]

const FEATURES = [
  {
    figLabel: 'Hosted Checkout',
    title: 'PCI-compliant checkout in minutes',
    description:
      'Launch a hosted payment page without custom dev. Style it to match your brand using NMI hosted fields. PCI scope handled. No card data touches your servers.',
  },
  {
    figLabel: '200+ Integrations',
    title: 'Connects to your existing stack',
    description:
      'WooCommerce, Shopify, Magento, BigCommerce, and 200+ more. Or integrate directly via REST API if you are building headless. One gateway, any platform.',
  },
  {
    figLabel: 'Subscriptions',
    title: 'Recurring billing without the add-on',
    description:
      'Build subscription products, billing cycles, and smart retry logic inside NMI — no Stripe Billing or third-party tool required. Reduces cost and complexity.',
  },
  {
    figLabel: 'Fraud & 3D Secure',
    title: 'Layered fraud controls for online risk',
    description:
      '3D Secure 2.0, AVS matching, CVV rules, and iSpyFraud — all configurable to your transaction risk profile. Dispute documentation built in when chargebacks hit.',
  },
]

const WHY_CARDS = [
  {
    fig: 'Reason 01',
    title: 'See every fee, every card, every time',
    description:
      'Debit is cheaper than credit — and you see that on every line of your statement.',
  },
  {
    fig: 'Reason 02',
    title: '200+ cart integrations',
    description:
      'Connects to the platform you already use without ripping anything out.',
  },
  {
    fig: 'Reason 03',
    title: 'Dedicated merchant account',
    description:
      'Not an aggregated account that can be paused. A real MID with stable fund flow.',
  },
  {
    fig: 'Reason 04',
    title: 'No long-term contracts',
    description: 'Month-to-month. Earn it every statement cycle.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'The WooCommerce integration was straightforward. We were processing the same day and the reporting is cleaner than anything we had before.',
    name: 'Ryan M.',
    role: 'E-Commerce Store Owner',
  },
  {
    quote:
      'Subscription billing works without Stripe Billing. That alone saves us hundreds a month on platform fees.',
    name: 'Jess T.',
    role: 'SaaS Founder',
  },
  {
    quote:
      'We process six figures monthly online. The interchange-plus pricing at our volume is meaningfully better than the flat rates we were on.',
    name: 'David K.',
    role: 'Online Retailer',
  },
]

const FAQS = [
  {
    q: 'How do I connect my existing store to Charm Payments?',
    a: 'NMI has pre-built integrations for 200+ shopping carts. For most platforms it is a plugin install and configuration. For custom builds, we provide full REST API documentation.',
  },
  {
    q: 'Is this a dedicated merchant account or an aggregated one like Stripe?',
    a: 'Dedicated. You get your own MID with First Data/Fiserv as the acquiring bank. This means more stable fund flow and no risk of sudden account holds from aggregator risk models.',
  },
  {
    q: 'Can I run subscriptions without a third-party billing tool?',
    a: 'Yes. NMI includes recurring billing with configurable cycles, smart retry logic, and dunning management. No Stripe Billing or separate subscription platform required.',
  },
  {
    q: 'How does fraud protection work for online transactions?',
    a: 'NMI layers AVS, CVV, iSpyFraud velocity rules, and optional 3D Secure 2.0. All rules are configurable to match your product mix and chargeback risk profile.',
  },
]

export default function EcommerceSolutionsPage() {
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
        Trusted by 500+ St. Louis merchants
      </div>

      <MagMetaStrip
        issue="Charm Payments · Solutions"
        folio="E-Commerce"
        filed="Filed 2026"
      />

      <MagHero
        eyebrow="E-Commerce · Payment Processing"
        headlineLines={[
          { text: 'Stripe Is Taking More From Every Sale Than Your Blended Rate Shows.' },
        ]}
        subtitle="Stripe and PayPal charge the same flat rate whether a customer pays with a basic debit card or a premium Amex — and keep the difference. Charm gives you a dedicated merchant account, shows you every fee every card type every time, and won't pause your business without warning."
        primaryCta={{ label: 'Get My Free Rate Audit', href: '/apply' }}
        secondaryCta={{ label: 'Free Rate Audit', href: '/quote' }}
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
              Integrates with
            </span>
            {PLATFORMS.map((v) => (
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
        eyebrow="Built for e-commerce"
        headline="Every Problem With Your Current Payment Stack — Gone"
        items={FEATURES}
        columns={2}
      />

      <MagStickyCardScroll
        eyebrow="Why Charm Payments"
        headline="Stripe's 2.9% is simple — and {expensive at scale}"
        body="Stripe and PayPal are easy to integrate but built around a flat rate that does not care whether a customer pays with a basic debit card or a premium Amex rewards card. At e-commerce volume, that blended margin gap is a significant monthly cost — and you are on an aggregated account that can be paused without warning."
        cards={WHY_CARDS}
      />

      <MagPullQuoteRow
        eyebrow="Merchant reviews"
        title="What Online Merchants Found When They Saw Their Real Costs"
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
              See how much you will save at your volume
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
              Send us your last processor statement. We will line-item the comparison and show exactly what changes with Charm — before you commit to anything.
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
        title="Common questions from online merchants"
        items={FAQS}
      />

      <MagGradientBreak variant="light-to-forest" />
      <MagForestBand
        eyebrow="Built for e-commerce"
        headline="Checkout, subscriptions, fraud, and digital wallets — one merchant account handles everything so you stop paying for {three separate tools to run one store.}"
        subtitle="Connects to the platform you already use without ripping anything out. A real MID with stable fund flow, not an aggregated account that can be paused. Month-to-month — earn it every statement cycle."
        stats={[
          { num: '500+', label: 'St. Louis merchants' },
          { num: '200+', label: 'Cart integrations' },
          { num: 'Dedicated', label: 'Merchant account' },
        ]}
      />
      <MagGradientBreak variant="forest-to-light" />

      <MagGradientBreak variant="light-to-warm" />
      <MagFinalCta
        eyebrow="Ready to switch?"
        headlineLines={[
          { text: 'Find Out What Stripe Has Been', size: 'normal' },
          { text: 'Keeping From Every Sale.', italicTarget: 'Keeping From Every Sale.', size: 'normal' },
        ]}
        subtitle="Your last Stripe statement is a blended number that hides what you actually pay per card type. We'll break it down, line by line, and show you exactly what changes with Charm — no commitment, no pressure."
        primaryCta={{ label: 'Get My Free Audit', href: '/apply' }}
        secondaryCta={{ label: 'Free Rate Audit', href: '/quote' }}
        gradientVariant="solutions-restaurants"
      />
    </>
  )
}
