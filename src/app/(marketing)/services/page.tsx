import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryCTA from '@/components/conversion/PrimaryCTA'
import {
  Monitor,
  RefreshCw,
  Globe,
  Building2,
  Smartphone,
  Shield,
  CreditCard,
  CheckCircle,
  ArrowRight,
  FileText,
  MessageSquare,
  QrCode,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payment Processing Solutions — Charm Payments',
  description:
    'Charm Payments merchant solutions — virtual terminal, invoicing, text to pay, recurring billing, ACH, e-commerce gateway, and fraud protection. All in one account.',
}

const solutions = [
  {
    icon: Monitor,
    name: 'Virtual Terminal',
    description:
      'Accept payments from any browser — no hardware required. Perfect for phone orders, mail orders, and manual card entry.',
    features: [
      'Process Visa, Mastercard, Amex, Discover',
      'Manual card entry from any device',
      'Built-in customer vault',
      'Real-time transaction reporting',
    ],
  },
  {
    icon: RefreshCw,
    name: 'Recurring Billing',
    description:
      'Automate subscription payments, installment plans, and scheduled billing with intelligent retry logic.',
    features: [
      'Flexible billing schedules',
      'Automatic retry on failed payments',
      'Customer self-service portal',
      'Dunning management built in',
    ],
  },
  {
    icon: Globe,
    name: 'E-Commerce Gateway',
    description:
      'Drop-in hosted payment pages and 200+ shopping cart integrations — go live with zero development required.',
    features: [
      '200+ cart integrations including Shopify & WooCommerce',
      'Hosted payment page — no coding needed',
      '3D Secure authentication',
      'iSpyFraud real-time screening',
    ],
  },
  {
    icon: Building2,
    name: 'ACH Processing',
    description:
      'Accept bank transfers and eChecks at a fraction of card processing costs — ideal for high-ticket transactions.',
    features: [
      'Same-day and next-day ACH options',
      'Lower processing costs than cards',
      'Recurring ACH for subscriptions',
      'Nacha-compliant processing',
    ],
  },
  {
    icon: Smartphone,
    name: 'Mobile Payments',
    description:
      'Accept payments anywhere with mobile card readers and tap-to-pay solutions that connect to your NMI gateway.',
    features: [
      'EMV chip and tap-to-pay support',
      'iOS and Android compatible',
      'Real-time sync with your dashboard',
      'Offline mode with automatic sync',
    ],
  },
  {
    icon: Shield,
    name: 'High-Risk Merchants',
    description:
      'Specialized underwriting for industries that traditional processors decline — we work with complex business models.',
    features: [
      'Subscription and continuity businesses',
      'High-ticket retail and services',
      'Industries with elevated chargeback rates',
      'Dedicated high-risk support team',
    ],
  },
  {
    icon: CreditCard,
    name: 'Charm Cards',
    description:
      'Digital business cards with a built-in Pay Me button, Apple & Google Wallet saving, NFC tap sharing, and lead capture — every merchant gets one.',
    features: [
      'Apple & Google Wallet saving built in',
      'Pay Me button links to your Charm Payments account',
      'NFC tap + QR code sharing',
      'Lead capture and analytics dashboard',
    ],
  },
] as const

const integrations = [
  'WooCommerce',
  'Shopify',
  'Magento',
  'BigCommerce',
  'Wix',
  'Squarespace',
  'QuickBooks',
  'Salesforce',
  'Zapier',
  'API / Custom',
  'NMI Collect.js',
  'Hosted Payment Page',
]

export default function ServicesPage() {
  return (
    <>
      {/* SECTION 1 — DARK HERO */}
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute left-[8%] top-24 h-2 w-2 rounded-full bg-brand-accent/40 animate-float" />
          <div className="absolute left-[20%] top-40 h-1.5 w-1.5 rounded-full bg-white/25 animate-float-slow" />
          <div className="absolute right-[12%] top-32 h-2.5 w-2.5 rounded-full bg-brand-accent/30 animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-28 left-[25%] h-1.5 w-1.5 rounded-full bg-white/20 animate-float-slow" />
          <div className="absolute bottom-36 right-[18%] h-2 w-2 rounded-full bg-brand-accent/35 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute right-[30%] top-16 h-1 w-1 rounded-full bg-white/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">SOLUTIONS</span>
            <h1 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Payment Processing Solutions for Every Business
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              One NMI-powered platform for card-present and card-not-present payments, recurring revenue, and specialized underwriting — built for how you actually run your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="stats-badge !bg-white/10 !text-white !border-white/15">200+ Cart Integrations</span>
              <span className="stats-badge !bg-white/10 !text-white !border-white/15">99.99% Uptime</span>
            </div>
            <div className="mt-10 flex justify-center">
              <PrimaryCTA variant="on-dark" />
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-[480px]">
              <div className="rounded-[24px] overflow-hidden shadow-2xl animate-float">
                <Image
                  src="/images/christiann-koepke-WiE01mC9AtY-unsplash.jpg"
                  alt="Customer using Apple Pay at checkout"
                  width={600}
                  height={700}
                  className="w-full h-[520px] object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-float-slow">
                <div className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand-dark" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Tap to Pay</p>
                  <p className="text-sm font-bold text-brand-dark">Apple Pay ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SOLUTIONS GRID */}
      <section id="solutions" className="section-ptb bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="section-label">OUR SOLUTIONS</span>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
              <span className="gradient-text">Every Payment Channel</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From virtual terminal to high-risk programs — choose the mix that fits your operations.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {solutions.map(({ icon: Icon, name, description, features }) => (
              <article key={name} className="group charm-card bg-brand-card p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-white transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-brand-dark md:h-16 md:w-16">
                    <Icon className="h-7 w-7 text-white transition-colors group-hover:text-brand-dark md:h-8 md:w-8" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-bold text-[var(--heading)] md:text-2xl">{name}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{description}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-[var(--paragraph)] md:text-base">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" strokeWidth={2} aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={name === 'Charm Cards' ? '/cards' : '/contact'}
                  className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand-dark transition hover:text-brand-accent"
                >
                  {name === 'Charm Cards' ? 'See Charm Cards Features' : 'Talk to Our Team'}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-[20px] overflow-hidden shadow-lg">
                <Image
                  src="/images/sumup-K8c091KtYXs-unsplash.jpg"
                  alt="Merchant accepting tap-to-pay in retail store"
                  width={500}
                  height={400}
                  className="w-full h-[260px] object-cover object-center"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-lg">
                <Image
                  src="/images/pexels-pavel-danilyuk-6612717.jpg"
                  alt="iPhone tap-to-pay at restaurant counter"
                  width={500}
                  height={400}
                  className="w-full h-[260px] object-cover object-center"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-lg">
                <Image
                  src="/images/sumup-aM4vzfIsAo0-unsplash.jpg"
                  alt="Boutique owner processing a card payment"
                  width={500}
                  height={400}
                  className="w-full h-[260px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="section-label">EVERY FEATURE INCLUDED</span>
            <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark">One Account. Every Tool.</h2>
            <p className="text-paragraph mx-auto mt-4 max-w-2xl">
              Your Charm Payments merchant account includes virtual terminal, invoicing, text to pay, recurring billing, QR codes, and fraud protection — all in one
              gateway.
            </p>
          </div>
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {(
              [
                { icon: Monitor, label: 'Virtual Terminal' },
                { icon: FileText, label: 'Electronic Invoicing' },
                { icon: MessageSquare, label: 'Text to Pay' },
                { icon: RefreshCw, label: 'Recurring Billing' },
                { icon: QrCode, label: 'QR Code Payments' },
                { icon: Shield, label: 'Fraud Protection' },
                { icon: Smartphone, label: 'Tap to Pay' },
                { icon: Globe, label: 'E-Commerce Gateway' },
              ] as const
            ).map(({ icon: Icon, label }) => (
              <div key={label} className="charm-card flex items-center gap-3 bg-white p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-light">
                  <Icon className="h-5 w-5 text-brand-dark" aria-hidden />
                </div>
                <span className="text-sm font-semibold text-brand-dark">{label}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/features" className="btn-accent inline-flex min-h-[44px] items-center gap-2">
              See All Features
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY NMI */}
      <section
        className="px-6 py-20 md:py-24"
        style={{ background: 'linear-gradient(135deg, #0c3a30 0%, #082720 100%)' }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">NMI GATEWAY</span>
            <h2 className="font-display mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Powered by NMI — the Gateway Behind $100B+ in Annual Processing
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Enterprise-grade infrastructure, deep cart coverage, and the compliance rigor your customers expect — without stitching together multiple vendors.
            </p>
            <ul className="mt-8 space-y-3">
              {['Enterprise-grade infrastructure', 'First Data/Fiserv acquiring', '99.99% uptime SLA', 'PCI DSS Level 1 compliant'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <CheckCircle className="h-5 w-5 shrink-0 text-brand-accent" strokeWidth={2} aria-hidden />
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link href="/apply" className="btn-accent mt-10 inline-flex">
              Apply for Your Merchant Account
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              { stat: '$100B+', label: 'Annual processing volume on NMI infrastructure' },
              { stat: '99.99%', label: 'Gateway uptime SLA' },
              { stat: '200+', label: 'Shopping cart and platform integrations' },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="rounded-2xl border border-white/10 p-6"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <p className="font-display text-3xl font-bold text-white md:text-4xl">{stat}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — INTEGRATIONS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="section-label">INTEGRATIONS</span>
          <h2 className="font-display mt-3 text-2xl font-bold text-[var(--heading)] md:text-3xl">Works With the Tools You Already Use</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {integrations.map((name) => (
              <div
                key={name}
                className="rounded-full border border-[rgba(8,39,32,0.1)] bg-brand-light py-2 px-4 text-sm font-medium text-[var(--heading)]"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FINAL CTA */}
      <section className="bg-brand-light px-6 py-20 text-center">
        <h2 className="font-display text-2xl font-bold text-[var(--heading)] md:text-3xl">Not Sure Which Solution Is Right for You?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Our team will map your volume, industry, and checkout flow to the right products — no jargon, no pressure.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryCTA />
        </div>
      </section>
    </>
  )
}
