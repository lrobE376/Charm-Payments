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
  X,
  Check,
} from 'lucide-react'
import PrimaryCTA from '@/components/conversion/PrimaryCTA'
import ProofSection from '@/components/conversion/ProofSection'
import SavingsCalculator from '@/components/conversion/SavingsCalculator'
import SocialProofStrip from '@/components/conversion/SocialProofStrip'

const revealDelays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'] as const

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
  {
    label: 'Pricing model',
    other: 'Flat-rate (bundled & opaque)',
    charm: 'Interchange-plus (transparent)',
  },
  {
    label: 'Statement clarity',
    other: 'Hard to audit — fees buried',
    charm: 'Line-item audit — we show every cost',
  },
  {
    label: 'Support',
    other: 'Phone trees / chatbots',
    charm: 'Direct human line — local St. Louis team',
  },
  {
    label: 'Onboarding',
    other: 'Weeks of back-and-forth',
    charm: '24-hour approval target on complete apps',
  },
  {
    label: 'Contracts',
    other: 'Long-term lock-ins common',
    charm: 'No long-term contracts — earn it monthly',
  },
] as const

function MarqueeStrip() {
  return (
    <>
      {marqueeItems.map((item) => (
        <span
          key={item}
          className="flex items-center gap-2 whitespace-nowrap px-6 text-sm font-semibold text-sales-navy"
        >
          <span className="h-2 w-2 shrink-0 animate-pulse-ring rounded-full bg-sales-green" aria-hidden />
          {item}
        </span>
      ))}
    </>
  )
}

const localHeroPhotos = [
  {
    src: '/images/local/pexelsketutsubiyanto4353613.jpg',
    alt: 'Barber at work serving a client',
    tall: true,
  },
  {
    src: '/images/local/pexelsmartproduction7667447.jpg',
    alt: 'Retail shop owner with smartphone at checkout',
    tall: false,
  },
  {
    src: '/images/local/pexelspaveldanilyuk6612717.jpg',
    alt: 'Salon professional with client',
    tall: false,
  },
  {
    src: '/images/local/pexelsrdne7697434.jpg',
    alt: 'Boutique small business interior',
    tall: false,
  },
] as const

function LocalHeroSection() {
  const [tall, ...rest] = localHeroPhotos

  return (
    <section className="bg-brand-light section-ptb" aria-labelledby="local-hero-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="section-label">ST. LOUIS BUILT</span>
            <h2 id="local-hero-heading" className="font-display mt-3 text-3xl font-bold md:text-4xl gradient-text">
              Your Processor Has a Chatbot. We Answer the Phone.
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Your current processor routes you through phone trees and automated systems. Charm is a St. Louis company — real people, same time zone. When your terminal goes down on a Saturday night, we pick up.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {(['500+ Merchants Served', '48hr Approval', 'STL-Based Support'] as const).map((label) => (
                <span key={label} className="rounded-full bg-brand-dark px-4 py-2 text-sm font-bold text-white">
                  {label}
                </span>
              ))}
            </div>
            <Link href="/apply" className="btn-primary mt-8 inline-flex">
              See What You&apos;re Paying — Free
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 grid-rows-3 gap-3">
              <div className="relative col-start-1 row-span-3 row-start-1 min-h-0">
                <Image
                  src={tall.src}
                  alt={tall.alt}
                  width={560}
                  height={700}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full rounded-2xl object-cover aspect-[4/5]"
                />
              </div>
              {rest.map((photo) => (
                <div key={photo.src} className="relative col-start-2 min-h-0">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={400}
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="h-full w-full rounded-2xl object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="relative">
      {/* SECTION 1 — HERO (B2B / sales-led) */}
      <section
        className="relative overflow-hidden pt-10 pb-20 lg:pt-14 lg:pb-28"
        style={{ background: 'linear-gradient(145deg, #0E1A12 0%, #182A1C 52%, #0E1A12 100%)' }}
      >
        <div className="shape-blob -right-24 -top-20 h-[420px] w-[420px] bg-sales-green/20 lg:right-0" aria-hidden />
        <div className="shape-blob -bottom-32 -left-20 h-[380px] w-[380px] bg-white/5" aria-hidden />

        <div className="absolute right-[42%] top-24 hidden h-16 w-16 animate-rotation rounded-full border-2 border-white/10 lg:block" aria-hidden />
        <div className="absolute right-[48%] top-40 hidden h-3 w-3 animate-float rounded-full bg-sales-green lg:block" aria-hidden />
        <div className="absolute bottom-32 left-[40%] hidden h-4 w-4 animate-float-slow rounded-full bg-white/20 lg:block" aria-hidden />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <div
              className="inline-flex animate-fadeinup items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 opacity-0 backdrop-blur-sm"
              style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}
            >
              <span className="h-2 w-2 shrink-0 animate-pulse-ring rounded-full bg-sales-green" aria-hidden />
              St. Louis merchant accounts · No contracts · Local support
            </div>
            <h1
              className="font-display animate-fadeinup mt-6 whitespace-pre-line text-4xl font-bold leading-tight text-white opacity-0 md:text-5xl lg:text-[3.15rem]"
              style={{ animationDelay: '0.12s', animationFillMode: 'forwards' }}
            >
              {`Your Processor Is Charging More Than You Know.`}
            </h1>
            <p
              className="mt-6 max-w-xl animate-fadeinup text-lg leading-relaxed text-white/80 opacity-0"
              style={{ animationDelay: '0.22s', animationFillMode: 'forwards' }}
            >
              Your current processor bundles fees you can&apos;t audit, holds funds you&apos;ve already earned, and routes you to a chatbot when something breaks. We&apos;ll show you exactly what you&apos;re paying — and what changes with Charm.
            </p>
            <div
              className="mt-8 animate-fadeinup opacity-0"
              style={{ animationDelay: '0.32s', animationFillMode: 'forwards' }}
            >
              <PrimaryCTA variant="sales-dark-audit" primary="Apply Now" secondary="Free Rate Audit" />
            </div>
            <ul
              className="mt-10 flex animate-fadeinup flex-wrap gap-3 p-0 opacity-0 [list-style:none]"
              style={{ animationDelay: '0.42s', animationFillMode: 'forwards' }}
            >
              {[
                'Free statement audit',
                'See every fee, every card, every time',
                '24-hour approval',
                'PCI DSS compliant',
              ].map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/95"
                >
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-sales-green" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 hidden justify-center lg:mt-0 lg:flex lg:w-1/2">
            <div className="relative w-full max-w-[500px]">
              <div className="animate-float relative overflow-hidden rounded-[24px] border border-white/10 shadow-2xl shadow-black/40">
                <Image
                  src="/images/sumup-uALOu8Rdv9M-unsplash.jpg"
                  alt="Business owner accepting payment at her boutique"
                  width={600}
                  height={680}
                  className="h-[540px] w-full object-cover object-center"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-sales-navy/20" aria-hidden />
              </div>
              <div className="animate-float-slow absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-xl">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sales-green">
                  <CheckCircle className="h-5 w-5 text-sales-navy" />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Payment Received</p>
                  <p className="text-sm font-bold text-sales-navy">$142.00 ✓</p>
                </div>
              </div>
              <div className="animate-float absolute -right-4 -top-4 rounded-2xl border border-sales-green/40 bg-sales-navy px-4 py-3 shadow-xl">
                <p className="text-[11px] font-bold uppercase tracking-wide text-sales-green">Charm Payments</p>
                <p className="text-sm font-semibold text-white">Processing Active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialProofStrip />

      {/* SECTION 2 — MARQUEE */}
      <section className="overflow-hidden border-y border-gray-100/80 bg-slate-50/80" aria-hidden>
        <div className="marquee-wrapper py-4">
          <MarqueeStrip />
          <MarqueeStrip />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="h-[200px] overflow-hidden rounded-[20px] border border-gray-200/80 shadow-md">
            <Image
              src="/images/pexels-rdne-7697434.jpg"
              alt="Barber shop owner using Charm Payments"
              width={400}
              height={300}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="h-[200px] overflow-hidden rounded-[20px] border border-gray-200/80 shadow-md">
            <Image
              src="/images/pexels-amina-filkins-5414041.jpg"
              alt="Florist small business owner"
              width={400}
              height={300}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="h-[200px] overflow-hidden rounded-[20px] border border-gray-200/80 shadow-md">
            <Image
              src="/images/pexels-ketut-subiyanto-4353613.jpg"
              alt="Café owner managing her business"
              width={400}
              height={300}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="h-[200px] overflow-hidden rounded-[20px] border border-gray-200/80 shadow-md">
            <Image
              src="/images/pexels-mart-production-7667447.jpg"
              alt="Small business owner with smartphone"
              width={400}
              height={300}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <SavingsCalculator />

      {/* WHY WE WIN — COMPARISON */}
      <section className="scroll-mt-24 bg-white section-ptb" id="compare">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label !border-sales-green/40 !bg-sales-green/10 !text-sales-navy">WHY WE WIN</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-sales-navy md:text-4xl">What Your Processor Doesn&apos;t Want You to Audit</h2>
            <p className="mt-3 text-lg text-[var(--paragraph)]/85">
              You see every fee, every card type, every time — not a blended rate your processor designed to keep you from asking questions.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 shadow-brand-sm">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="hidden bg-gray-100/90 p-4 text-xs font-bold uppercase tracking-wider text-gray-500 md:block md:border-r md:border-gray-200" />
              <div className="border-b border-gray-200 bg-red-50/80 p-4 text-center md:border-b-0 md:border-r">
                <p className="text-sm font-bold text-gray-800">The Other Guys</p>
                <p className="mt-1 text-xs text-gray-600">Typical flat-rate & bundled stacks</p>
              </div>
              <div className="border-b border-gray-200 bg-sales-green/10 p-4 text-center md:border-b-0">
                <p className="text-sm font-bold text-sales-navy">Charm Payments</p>
                <p className="mt-1 text-xs text-sales-navy/80">See every fee · local St. Louis team</p>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {comparisonRows.map((row) => (
                <div key={row.label} className="grid grid-cols-1 items-stretch md:grid-cols-3">
                  <div className="border-b border-gray-100 bg-gray-50/80 p-4 text-sm font-semibold text-sales-navy md:border-b-0 md:border-r md:border-gray-200">
                    {row.label}
                  </div>
                  <div className="flex gap-2 border-b border-gray-100 p-4 text-sm text-gray-600 md:border-b-0 md:border-r">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden />
                    <span>{row.other}</span>
                  </div>
                  <div className="flex gap-2 bg-sales-green/5 p-4 text-sm font-medium text-sales-navy">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sales-green" aria-hidden />
                    <span>{row.charm}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Competitors named illustratively — compare your actual statement side-by-side in a{' '}
            <Link href="/quote" className="font-semibold text-sales-navy underline-offset-2 hover:underline">
              free rate audit
            </Link>
            .
          </p>
        </div>
      </section>

      <LocalHeroSection />

      {/* SECTION — SOLUTIONS */}
      <section id="solutions" className="scroll-mt-24 bg-slate-50 section-ptb">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label !border-sales-green/40 !bg-sales-green/10 !text-sales-navy">WHAT CHANGES</span>
            <h2 className="font-display mt-2 text-3xl font-bold text-sales-navy md:text-4xl">
              Run Every Payment Channel Without <span className="text-sales-green">Juggling Processors</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--paragraph)]/85">
              One merchant account covers every channel — register, website, phone orders, and recurring billing — with unified reporting and no extra processors to manage.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={title}
                className={`group relative rounded-[20px] border border-gray-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sales-green/45 hover:shadow-sales-glow-lg reveal ${revealDelays[i % 4]}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sales-navy transition-all duration-300 group-hover:bg-sales-green group-hover:shadow-md">
                  <Icon className="h-6 w-6 text-white transition-colors duration-300 group-hover:text-sales-navy" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-bold text-sales-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--paragraph)]/80">{desc}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-sales-navy opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                >
                  See All Payment Solutions
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <PrimaryCTA className="justify-center" variant="sales" primary="Get My Free Audit" secondary="Free Rate Audit" />
          </div>
        </div>
      </section>

      <ProofSection />

      {/* SECTION — HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 bg-white section-ptb">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label !border-sales-green/40 !bg-sales-green/10 !text-sales-navy">HOW IT WORKS</span>
            <h2 className="font-display mt-2 text-3xl font-bold text-sales-navy md:text-4xl">
              Three Steps to a Processor That <span className="text-sales-green">Works for You</span>
            </h2>
            <p className="mt-4 text-[var(--paragraph)]/85">No setup project. We handle underwriting, configuration, and go-live — you fill out one application.</p>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-[10%] right-[10%] top-12 hidden h-0.5 bg-sales-navy/10 lg:block" aria-hidden />
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
                  d: 'Gateway keys, fraud rules, and cart connections go live — you\'re ready to run real transactions.',
                },
              ].map(({ n, t, d }, idx) => (
                <li key={n} className={`text-center reveal ${revealDelays[idx % 4]}`}>
                  <div
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-black shadow-brand-md ${
                      idx === 2 ? 'bg-sales-green text-sales-navy' : 'bg-sales-navy text-white'
                    }`}
                  >
                    {n}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-sales-navy">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--paragraph)]/75">{d}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-[24px] border border-gray-200 shadow-xl">
                <Image
                  src="/images/pexels-rdne-7697211.jpg"
                  alt="Barber checking his Charm Payments dashboard between clients"
                  width={700}
                  height={500}
                  className="h-[400px] w-full object-cover object-top"
                />
              </div>
              <div>
                <span className="section-label !border-sales-green/40 !bg-sales-green/10 !text-sales-navy">ST. LOUIS BUILT</span>
                <h3 className="font-display mb-3 mt-4 text-2xl font-bold text-sales-navy">
                  Built for the business owners who keep St. Louis running.
                </h3>
                <p className="leading-relaxed text-paragraph">
                  From barbershops to boutiques, St. Louis merchants use Charm to finally see what they&apos;re paying — and stop their processor from quietly keeping the difference.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center reveal">
            <PrimaryCTA variant="sales" primary="Get My Free Audit" secondary="Free Rate Audit" />
          </div>
        </div>
      </section>

      {/* SECTION — TESTIMONIALS */}
      <section className="bg-slate-50 section-ptb">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label !border-sales-green/40 !bg-sales-green/10 !text-sales-navy">MERCHANT REVIEWS</span>
            <h2 className="font-display mt-2 text-3xl font-bold text-sales-navy md:text-4xl">What Merchants Say After Switching</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: '"Charm Payments got us live before our launch weekend. Transparent pricing finally matched what we were promised."',
                name: 'Marcus T.',
                role: 'Metro Auto Repair',
                initial: 'M',
              },
              {
                quote: '"Recurring billing just works. Support picked up on the first ring when we had a gateway question."',
                name: 'Diane R.',
                role: 'Sunflower Wellness Spa',
                initial: 'D',
              },
              {
                quote: '"We process six figures monthly without downtime. The reporting exports clean into our accounting stack."',
                name: 'James K.',
                role: 'StreamFlow Software',
                initial: 'J',
              },
            ].map((t, i) => (
              <div key={t.name} className={`charm-card reveal border border-gray-100 p-8 ${revealDelays[i % revealDelays.length]}`}>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sales-green text-sales-green" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 italic leading-relaxed text-gray-600">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sales-navy font-bold text-white">{t.initial}</div>
                  <div>
                    <p className="font-bold text-[var(--heading)]">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-gray-400">Testimonials are illustrative. Individual merchant results may vary.</p>
        </div>
      </section>

      {/* SECTION — FINAL CTA */}
      <section
        className="relative overflow-hidden section-ptb px-6 text-center"
        style={{ background: 'linear-gradient(145deg, #0E1A12 0%, #182A1C 50%, #0E1A12 100%)' }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute bottom-0 left-[20%] top-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <div className="absolute bottom-0 right-[30%] top-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
        <div className="absolute right-[15%] top-16 hidden h-20 w-20 animate-rotation rounded-full border border-white/15 lg:block" aria-hidden />
        <div className="absolute bottom-24 left-[20%] hidden h-3 w-3 animate-float rounded-full bg-sales-green lg:block" aria-hidden />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-sales-green/50 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sales-green">
            STOP OVERPAYING TODAY
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">Ready to see what your statement is hiding?</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Your last statement has fees your processor buried on purpose. We&apos;ll find every one, line them up, and show you exactly what you&apos;d save — no cost, no commitment.
          </p>
          <div className="mt-10 flex flex-wrap justify-center">
            <PrimaryCTA variant="sales-dark" primary="Get My Free Rate Audit" secondary="Free Rate Audit" />
          </div>
          <p className="mx-auto mt-10 max-w-xl text-xs leading-relaxed text-white/35">
            Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds
            are subject to the terms of the Merchant Agreement.
          </p>
        </div>
      </section>
    </div>
  )
}
