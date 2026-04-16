// src/app/(marketing)/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  Shield,
  BarChart3,
  Phone,
  CreditCard,
  RefreshCw,
  Globe,
  CheckCircle,
  Star,
  Check,
  X,
} from 'lucide-react'
import PrimaryCTA from '@/components/conversion/PrimaryCTA'
import SocialProofStrip from '@/components/conversion/SocialProofStrip'
import StatsBar from '@/components/conversion/StatsBar'
import HeroVisual from '@/components/ui/HeroVisual'
import FadeIn from '@/components/ui/FadeIn'

// ─── Data ────────────────────────────────────────────────────────────────────

const marqueeItems = [
  'Visa',
  'Mastercard',
  'American Express',
  'Discover',
  'ACH/eCheck',
  'Apple Pay',
  'Google Pay',
  'Virtual Terminal',
  'Recurring Billing',
  'PCI DSS Compliant',
  'NMI Gateway',
]

const solutions = [
  {
    title: 'Virtual Terminal',
    desc: 'Key in card and ACH payments from any browser — perfect for phone and mail orders.',
    icon: Phone,
  },
  {
    title: 'Recurring Billing',
    desc: 'Set billing up once. Clients charge automatically — no chasing failed cards, no third-party software eating your margin.',
    icon: RefreshCw,
  },
  {
    title: 'E-Commerce Gateway',
    desc: 'Hosted checkout, direct API, and 200+ cart integrations — your store collects revenue while you run the business.',
    icon: Globe,
  },
  {
    title: 'ACH Processing',
    desc: 'Accept large invoices by bank transfer — costs less than cards, settles predictably, fully reported.',
    icon: CreditCard,
  },
  {
    title: 'Fraud Protection',
    desc: 'iSpyFraud rules, tokenization, and 3D Secure aligned to your risk profile.',
    icon: Shield,
  },
  {
    title: 'Real-Time Reporting',
    desc: 'See every transaction, batch, and settlement in real time — no more guessing where your money is between statements.',
    icon: BarChart3,
  },
] as const

const comparisonRows = [
  { label: 'Pricing model',     other: 'Flat-rate (bundled & opaque)',       charm: 'Interchange-plus (transparent)'           },
  { label: 'Statement clarity', other: 'Hard to audit — fees buried',         charm: 'Line-item audit — we show every cost'     },
  { label: 'Support',           other: 'Phone trees / chatbots',              charm: 'Direct human line — local St. Louis team' },
  { label: 'Onboarding',        other: 'Weeks of back-and-forth',             charm: '24-hour approval target on complete apps' },
  { label: 'Contracts',         other: 'Long-term lock-ins common',           charm: 'No long-term contracts — earn it monthly' },
] as const

// ─── Grain texture (adds tactile depth without images) ───────────────────────
const grainSvg =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"

// ─── Sub-components ───────────────────────────────────────────────────────────

function MarqueeStrip() {
  return (
    <>
      {marqueeItems.map((item) => (
        <span
          key={item}
          className="flex items-center gap-2 whitespace-nowrap px-6"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--on-surface-variant)' }}
        >
          <span
            className="h-2 w-2 shrink-0 animate-pulse-ring rounded-full"
            style={{ background: 'var(--gold)' }}
            aria-hidden
          />
          {item}
        </span>
      ))}
    </>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="relative">

      {/* ── SECTION 1 — HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-10 pb-20 lg:pt-14 lg:pb-28"
        style={{ background: 'linear-gradient(145deg, #0E1A12 0%, #182A1C 52%, #0E1A12 100%)' }}
      >
        {/* Atmospheric orbs */}
        <div
          className="shape-blob -right-24 -top-20 h-[420px] w-[420px] lg:right-0"
          style={{ background: 'var(--primary-container)' }}
          aria-hidden
        />
        <div className="shape-blob -bottom-32 -left-20 h-[380px] w-[380px] bg-white/5" aria-hidden />

        {/* Grain texture — adds soul without images */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: grainSvg, opacity: 0.035 }}
          aria-hidden
        />

        {/* Orbital decorators */}
        <div className="absolute right-[42%] top-24 hidden h-16 w-16 animate-rotation rounded-full border-2 border-white/10 lg:block" aria-hidden />
        <div
          className="absolute right-[48%] top-40 hidden h-3 w-3 animate-float rounded-full lg:block"
          style={{ background: 'var(--gold)' }}
          aria-hidden
        />
        <div className="absolute bottom-32 left-[40%] hidden h-4 w-4 animate-float-slow rounded-full bg-white/20 lg:block" aria-hidden />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:flex lg:items-center lg:gap-16">

          {/* Left — copy */}
          <div className="lg:w-1/2">
            {/* Eyebrow badge */}
            <FadeIn delay={0.05}>
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <span
                  className="h-2 w-2 shrink-0 animate-pulse-ring rounded-full"
                  style={{ background: 'var(--gold)' }}
                  aria-hidden
                />
                <span className="label-sm text-white/90">
                  St. Louis merchant accounts · No contracts · Local support
                </span>
              </div>
            </FadeIn>

            {/* Display headline */}
            <FadeIn delay={0.12}>
              <h1 className="display-lg mt-6 text-white">
                Your Processor Is Charging More Than You Know.
              </h1>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p className="title-md mt-6 max-w-xl text-white/80">
                Your current processor bundles fees you can&apos;t audit, holds funds you&apos;ve already earned,
                and routes you to a chatbot when something breaks. We&apos;ll show you exactly what you&apos;re
                paying — and what changes with Charm.
              </p>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-8">
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/apply"
                    className="inline-flex min-h-[52px] items-center gap-2 rounded-[10px] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                    style={{ background: 'linear-gradient(135deg, #004421, #1E5C35)' }}
                  >
                    Apply Now
                    <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
                  </Link>
                  <Link
                    href="/quote"
                    className="text-sm font-semibold text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    Free Rate Audit →
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.42}>
              <ul className="mt-10 flex flex-wrap gap-3 p-0 [list-style:none]">
                {[
                  'Free statement audit',
                  'See every fee, every card, every time',
                  '24-hour approval',
                  'PCI DSS compliant',
                ].map((label) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5"
                  >
                    <CheckCircle
                      className="h-3.5 w-3.5 shrink-0"
                      style={{ color: 'var(--gold)' }}
                      aria-hidden
                    />
                    <span className="label-sm text-white/95">{label}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right — HeroVisual: mouse-tilt 3D panel + bleeding cards (client) */}
          <div className="mt-12 hidden justify-center lg:mt-0 lg:flex lg:w-1/2">
            <HeroVisual />
          </div>

        </div>
      </section>

      {/* ── CREDIBILITY BAND — SocialProof + Stats merged ───────────────── */}
      <div style={{ background: 'var(--surface-container-low)' }}>
        <SocialProofStrip />
        <StatsBar />
      </div>

      {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
      <section
        className="overflow-hidden py-4"
        style={{ background: 'var(--surface-container-low)' }}
        aria-hidden
      >
        <div className="marquee-wrapper">
          <MarqueeStrip />
          <MarqueeStrip />
        </div>
      </section>

      {/* ── SECTION 4 — COMPARISON ───────────────────────────────────────── */}
      <section
        id="compare"
        className="scroll-mt-24 section-ptb"
        style={{ background: 'var(--surface-container-low)' }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn><span className="section-label">WHY WE WIN</span></FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="headline-md mt-3" style={{ color: 'var(--on-surface)' }}>
                What Your Processor Doesn&apos;t Want You to Audit
              </h2>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-3 body-md" style={{ color: 'var(--on-surface-variant)' }}>
                You see every fee, every card type, every time — not a blended rate your processor
                designed to keep you from asking questions.
              </p>
            </FadeIn>
          </div>

          {/* Comparison table */}
          <FadeIn delay={0.24}>
            <div
              className="mt-12 overflow-hidden"
              style={{
                borderRadius: '0.875rem',
                outline: '1px solid rgba(28,28,21,0.15)',
                boxShadow: '0px 4px 24px rgba(28,28,21,0.06), 0px 16px 48px rgba(28,28,21,0.08)',
              }}
            >
              {/* Column headers */}
              <div className="grid grid-cols-[2fr_1.5fr_1.5fr]">
                <div className="px-6 py-5" style={{ background: 'var(--surface-variant)' }}>
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface-variant)' }}
                  >
                    Feature
                  </p>
                </div>
                <div
                  className="px-6 py-5 text-center"
                  style={{ background: 'rgba(220,38,38,0.07)' }}
                >
                  <X className="mx-auto mb-1.5 h-5 w-5 text-red-400" aria-hidden />
                  <p
                    className="text-sm font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}
                  >
                    The Other Guys
                  </p>
                  <p className="mt-0.5 label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                    Flat-rate &amp; bundled
                  </p>
                </div>
                <div
                  className="px-6 py-5 text-center"
                  style={{ background: 'var(--secondary-container)' }}
                >
                  <Check
                    className="mx-auto mb-1.5 h-5 w-5"
                    style={{ color: 'var(--secondary)' }}
                    aria-hidden
                  />
                  <p
                    className="text-sm font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }}
                  >
                    Charm Payments
                  </p>
                  <p className="mt-0.5 label-sm" style={{ color: 'var(--primary)', opacity: 0.7 }}>
                    Transparent · local team
                  </p>
                </div>
              </div>

              {/* Data rows */}
              {comparisonRows.map((row, idx) => (
                <div
                  key={row.label}
                  className="group grid grid-cols-[2fr_1.5fr_1.5fr] items-stretch"
                  style={{ borderTop: '1px solid rgba(28,28,21,0.08)' }}
                >
                  <div
                    className="flex items-center px-6 py-4 transition-colors duration-150 group-hover:brightness-95"
                    style={{
                      background: idx % 2 === 0 ? 'var(--surface-variant)' : 'var(--surface-container-low)',
                    }}
                  >
                    <p className="text-sm font-semibold" style={{ color: 'var(--on-surface)' }}>
                      {row.label}
                    </p>
                  </div>
                  <div
                    className="flex items-start gap-3 px-6 py-4"
                    style={{
                      background: idx % 2 === 0 ? 'rgba(220,38,38,0.04)' : 'rgba(220,38,38,0.07)',
                    }}
                  >
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" aria-hidden />
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--on-surface-variant)' }}>
                      {row.other}
                    </p>
                  </div>
                  <div
                    className="flex items-start gap-3 px-6 py-4"
                    style={{ background: 'var(--secondary-container)' }}
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: 'var(--secondary)' }}
                      aria-hidden
                    />
                    <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--primary)' }}>
                      {row.charm}
                    </p>
                  </div>
                </div>
              ))}

              {/* Footer CTA row */}
              <div
                className="grid grid-cols-[2fr_1.5fr_1.5fr]"
                style={{ borderTop: '1px solid rgba(28,28,21,0.08)' }}
              >
                <div style={{ background: 'var(--surface-variant)' }} className="px-6 py-4" />
                <div
                  className="flex items-center justify-center px-6 py-4"
                  style={{ background: 'rgba(220,38,38,0.04)' }}
                >
                  <p className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                    Status quo
                  </p>
                </div>
                <div
                  className="flex items-center justify-center px-6 py-4"
                  style={{ background: 'var(--secondary-container)' }}
                >
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-1.5 rounded-md px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                    style={{ background: 'linear-gradient(135deg, #004421, #1E5C35)' }}
                  >
                    Switch to Charm
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          <p className="mt-8 text-center body-md" style={{ color: 'var(--on-surface-variant)' }}>
            Competitors named illustratively — compare your actual statement side-by-side in a{' '}
            <Link
              href="/quote"
              className="font-semibold underline-offset-2 hover:underline"
              style={{ color: 'var(--primary)' }}
            >
              free rate audit
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── SECTION 5 — SOLUTIONS ────────────────────────────────────────── */}
      <section
        id="solutions"
        className="scroll-mt-24 section-ptb"
        style={{ background: 'var(--surface)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn><span className="section-label">WHAT CHANGES</span></FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="headline-md mt-2" style={{ color: 'var(--on-surface)' }}>
                Run Every Payment Channel Without{' '}
                <span className="gradient-text">Juggling Processors</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-4 body-md" style={{ color: 'var(--on-surface-variant)' }}>
                One merchant account covers every channel — register, website, phone orders, and recurring
                billing — with unified reporting and no extra processors to manage.
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ title, desc, icon: Icon }, idx) => (
              <FadeIn key={title} delay={idx * 0.08}>
                <div
                  className="group charm-card h-full p-8 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:shadow-md"
                    style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)' }}
                  >
                    <Icon className="h-6 w-6 text-white" aria-hidden />
                  </div>
                  <h3
                    className="mt-5 text-xl font-semibold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}
                  >
                    {title}
                  </h3>
                  <p className="mt-3 body-md" style={{ color: 'var(--on-surface-variant)' }}>
                    {desc}
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ color: 'var(--primary)' }}
                  >
                    See All Payment Solutions
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <PrimaryCTA className="justify-center" variant="sales" primary="Get My Free Audit" secondary="Free Rate Audit" />
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — HOW IT WORKS ─────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="scroll-mt-24 section-ptb"
        style={{ background: 'var(--surface-container-lowest)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn><span className="section-label">HOW IT WORKS</span></FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="headline-md mt-2" style={{ color: 'var(--on-surface)' }}>
                Three Steps to a Processor That{' '}
                <span className="gradient-text">Works for You</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-4 body-md" style={{ color: 'var(--on-surface-variant)' }}>
                No setup project. We handle underwriting, configuration, and go-live — you fill out one
                application.
              </p>
            </FadeIn>
          </div>

          <div className="relative mt-14">
            {/* Connector line */}
            <div
              className="absolute left-[10%] right-[10%] top-12 hidden h-px lg:block"
              style={{ background: 'var(--outline-variant)' }}
              aria-hidden
            />
            <ol className="relative z-10 grid list-none gap-10 p-0 md:grid-cols-3 md:gap-8">
              {[
                {
                  n: '01',
                  t: 'Apply in minutes',
                  d: 'Tell us about your business, volume, and how you take payments — online, in-store, or both.',
                },
                {
                  n: '02',
                  t: 'Approved in as little as 24 hours',
                  d: 'Submit a complete application — we target same-day to 24-hour approval when everything checks out.',
                },
                {
                  n: '03',
                  t: 'Start accepting payments',
                  d: "Gateway keys, fraud rules, and cart connections go live — you're ready to run real transactions.",
                },
              ].map(({ n, t, d }, idx) => (
                <FadeIn key={n} delay={idx * 0.16}>
                  <li className="text-center">
                    <div
                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-[0.75rem] text-2xl font-black"
                      style={
                        idx === 2
                          ? {
                              background: 'var(--gold)',
                              color: 'var(--primary)',
                              boxShadow: '0px 4px 20px rgba(28,28,21,0.04), 0px 12px 40px rgba(28,28,21,0.06)',
                            }
                          : {
                              background: 'var(--primary)',
                              color: 'var(--on-primary)',
                              boxShadow: '0px 4px 20px rgba(28,28,21,0.04), 0px 12px 40px rgba(28,28,21,0.06)',
                            }
                      }
                    >
                      {n}
                    </div>
                    <h3
                      className="mt-6 text-lg font-semibold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}
                    >
                      {t}
                    </h3>
                    <p className="mt-2 body-md" style={{ color: 'var(--on-surface-variant)' }}>
                      {d}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>

          <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <FadeIn>
                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: '0.75rem',
                    boxShadow: '0px 8px 32px rgba(28,28,21,0.05), 0px 24px 64px rgba(28,28,21,0.08)',
                  }}
                >
                  <Image
                    src="/images/pexels-rdne-7697211.jpg"
                    alt="Barber checking his Charm Payments dashboard between clients"
                    width={700}
                    height={500}
                    className="h-[400px] w-full object-cover object-top"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.12}>
                <div>
                  <span className="section-label">ST. LOUIS BUILT</span>
                  <h3 className="headline-md mb-3 mt-4" style={{ color: 'var(--on-surface)' }}>
                    Built for the business owners who keep St. Louis running.
                  </h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                    From barbershops to boutiques, St. Louis merchants use Charm to finally see what
                    they&apos;re paying — and stop their processor from quietly keeping the difference.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <PrimaryCTA variant="sales" primary="Get My Free Audit" secondary="Free Rate Audit" />
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — TESTIMONIALS ─────────────────────────────────────── */}
      <section
        className="section-ptb"
        style={{ background: 'var(--surface-container-low)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn><span className="section-label">MERCHANT REVIEWS</span></FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="headline-md mt-2" style={{ color: 'var(--on-surface)' }}>
                What Merchants Say After Switching
              </h2>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: '"Charm Payments got us live before our launch weekend. Transparent pricing finally matched what we were promised."',
                name:  'Marcus T.',
                role:  'Metro Auto Repair',
                initial: 'M',
                delay: 0,
              },
              {
                quote: '"Recurring billing just works. Support picked up on the first ring when we had a gateway question."',
                name:  'Diane R.',
                role:  'Sunflower Wellness Spa',
                initial: 'D',
                delay: 0.16,
              },
              {
                quote: '"We process six figures monthly without downtime. The reporting exports clean into our accounting stack."',
                name:  'James K.',
                role:  'StreamFlow Software',
                initial: 'J',
                delay: 0.32,
              },
            ].map((t) => (
              <FadeIn key={t.name} delay={t.delay}>
                <div className="charm-card relative h-full overflow-hidden p-8 pb-10">
                  {/* Decorative large quote mark */}
                  <span
                    className="pointer-events-none absolute -top-3 -left-1 select-none text-[7rem] leading-none"
                    style={{ color: 'var(--gold)', opacity: 0.12, fontFamily: 'Georgia, serif' }}
                    aria-hidden
                  >
                    &ldquo;
                  </span>

                  {/* Gold stars */}
                  <div className="relative flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        style={{ fill: 'var(--gold)', color: 'var(--gold)' }}
                        aria-hidden
                      />
                    ))}
                  </div>

                  <p className="relative mt-4 leading-relaxed body-md" style={{ color: 'var(--on-surface-variant)' }}>
                    {t.quote}
                  </p>

                  <div className="relative mt-6 flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)' }}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <p
                        className="font-semibold"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}
                      >
                        {t.name}
                      </p>
                      <p className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom gold accent */}
                  <div
                    className="absolute bottom-0 left-8 right-8 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
                    aria-hidden
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          <p
            className="mt-10 text-center label-sm"
            style={{ color: 'var(--on-surface-variant)', opacity: 0.55 }}
          >
            Testimonials are illustrative. Individual merchant results may vary.
          </p>
        </div>
      </section>

      {/* ── SECTION 8 — FINAL CTA ────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden section-ptb px-6 text-center"
        style={{ background: 'linear-gradient(145deg, #0E1A12 0%, #182A1C 50%, #0E1A12 100%)' }}
      >
        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: grainSvg, opacity: 0.035 }}
          aria-hidden
        />

        {/* Vertical light streaks */}
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute bottom-0 left-[20%] top-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <div className="absolute bottom-0 right-[30%] top-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>

        {/* Orbital decorators */}
        <div
          className="absolute right-[15%] top-16 hidden h-20 w-20 animate-rotation rounded-full border border-white/15 lg:block"
          aria-hidden
        />
        <div
          className="absolute bottom-24 left-[20%] hidden h-3 w-3 animate-float rounded-full lg:block"
          style={{ background: 'var(--gold)' }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <FadeIn>
            <span
              className="label-sm inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5"
              style={{ color: 'var(--gold)' }}
            >
              STOP OVERPAYING TODAY
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="headline-md mt-4 text-white">
              Ready to see what your statement is hiding?
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="title-md mt-4 text-white/75">
              Your last statement has fees your processor buried on purpose. We&apos;ll find every one,
              line them up, and show you exactly what you&apos;d save — no cost, no commitment.
            </p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-10 flex flex-wrap justify-center">
              <PrimaryCTA variant="sales-dark" primary="Get My Free Rate Audit" secondary="Free Rate Audit" />
            </div>
          </FadeIn>

          <p className="mx-auto mt-10 max-w-xl label-sm text-white/35">
            Charm Payments is a payment facilitator, not a bank. Payment processing services are
            provided through our licensed acquiring bank partner. Merchant funds are subject to the
            terms of the Merchant Agreement.
          </p>
        </div>
      </section>

    </div>
  )
}
