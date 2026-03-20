'use client'

import Link from 'next/link'
import {
  ArrowUpRight,
  Shield,
  Zap,
  BarChart3,
  Phone,
  CreditCard,
  RefreshCw,
  Globe,
  CheckCircle,
  Star,
  Clock,
  Link2,
  Wallet,
} from 'lucide-react'

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
    desc: 'Subscriptions, payment plans, and smart retries without bolt-on billing software.',
    icon: RefreshCw,
  },
  {
    title: 'E-Commerce Gateway',
    desc: 'Hosted checkout, APIs, and 200+ cart integrations powered by NMI.',
    icon: Globe,
  },
  {
    title: 'ACH Processing',
    desc: 'Bank debits with transparent settlement timelines and full reporting.',
    icon: CreditCard,
  },
  {
    title: 'Fraud Protection',
    desc: 'iSpyFraud rules, tokenization, and 3D Secure aligned to your risk profile.',
    icon: Shield,
  },
  {
    title: 'Real-Time Reporting',
    desc: 'Search, export, and reconcile batches the moment they hit your MID.',
    icon: BarChart3,
  },
]

function MarqueeStrip() {
  return (
    <>
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center gap-2 whitespace-nowrap px-6 text-sm font-semibold text-[var(--heading)]">
          <span className="w-2 h-2 rounded-full bg-brand-accent shrink-0" aria-hidden="true" />
          {item}
        </span>
      ))}
    </>
  )
}

export default function HomePage() {
  return (
    <div className="relative">
      {/* SECTION 1 — HERO */}
      <section
        className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28"
        style={{ background: 'linear-gradient(135deg, #edf1ee 0%, #f5f9f0 100%)' }}
      >
        <div className="shape-blob w-[420px] h-[420px] bg-brand-accent -top-20 -right-24 lg:right-0" aria-hidden="true" />
        <div className="shape-blob w-[380px] h-[380px] bg-brand-dark -bottom-32 -left-20" aria-hidden="true" />

        <div className="hidden lg:block absolute top-24 right-[42%] w-16 h-16 rounded-full border-2 border-brand-dark/15 animate-rotation" aria-hidden="true" />
        <div className="hidden lg:block absolute top-40 right-[48%] w-3 h-3 rounded-full bg-brand-accent animate-float" aria-hidden="true" />
        <div className="hidden lg:block absolute bottom-32 left-[40%] w-4 h-4 rounded-full bg-brand-dark/30 animate-float-slow" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div>
            <div
              className="stats-badge animate-fadeinup opacity-0"
              style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse-ring shrink-0" aria-hidden="true" />
              Enterprise Payment Processing — NMI Gateway
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold mt-4 leading-tight animate-fadeinup opacity-0"
              style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
            >
              Accept Payments{' '}
              <span className="accent-underline">
                Anywhere
              </span>{' '}
              Your Customers Want to Pay
            </h1>
            <p
              className="text-lg text-[var(--paragraph)]/90 mt-6 max-w-xl leading-relaxed animate-fadeinup opacity-0"
              style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
            >
              Transparent rates, enterprise infrastructure, and a team that answers the phone — built for merchants who outgrew generic processors.
            </p>
            <div
              className="flex flex-wrap gap-4 mt-8 animate-fadeinup opacity-0"
              style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
            >
              <Link href="/apply" className="btn-primary">
                Apply for Your Merchant Account
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link href="/pricing" className="btn-outline">
                View Pricing
              </Link>
            </div>
            <ul
              className="mt-10 flex flex-wrap gap-3 list-none m-0 p-0 animate-fadeinup opacity-0"
              style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
            >
              {['No setup fees', 'No long-term contracts', '48-hr approval', 'PCI DSS compliant'].map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-dark)]/10 bg-white/80 px-3 py-1.5 text-xs font-semibold text-[var(--heading)] shadow-sm"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-brand-accent shrink-0" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block relative min-h-[480px] z-10">
            <div
              className="absolute top-0 right-0 w-72 charm-card p-6 animate-float animate-fadeinup opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Monthly volume</p>
              <p className="text-3xl font-bold text-brand-dark mt-1">$84,320</p>
              <div className="flex items-end gap-1 h-24 mt-4">
                {[40, 55, 35, 60, 45, 70, 50, 65, 55, 75, 60, 90].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t ${i === 11 ? 'bg-brand-accent' : 'bg-brand-dark/20'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div
              className="absolute top-36 left-0 w-64 charm-card p-5 animate-float-slow animate-fadeinup opacity-0"
              style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
            >
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Recent</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600">Visa •••• 4242</span>
                  <span className="font-semibold text-brand-dark">$128.00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">MC •••• 8891</span>
                  <span className="font-semibold text-brand-dark">$2,450.00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">ACH ****9981</span>
                  <span className="font-semibold text-brand-dark">$890.50</span>
                </li>
              </ul>
            </div>

            <div
              className="absolute bottom-8 right-12 w-max charm-card px-4 py-3 flex items-center gap-2 animate-fadeinup opacity-0 shadow-brand-md"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-[var(--heading)]">Payment Approved — 1.2s</span>
            </div>

            <div className="absolute top-12 left-16 w-28 h-28 rounded-full border border-brand-dark/10" aria-hidden="true" />
            <div className="absolute bottom-20 left-24 w-20 h-20 rounded-full border-2 border-brand-accent/25 animate-rotation" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — MARQUEE */}
      <section className="bg-white border-y border-gray-100/80 overflow-hidden" aria-hidden="true">
        <div className="marquee-wrapper py-4">
          <MarqueeStrip />
          <MarqueeStrip />
        </div>
      </section>

      {/* SECTION 3 — SOLUTIONS */}
      <section id="solutions" className="bg-white section-ptb scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="section-label">OUR SOLUTIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Everything You Need to <span className="gradient-text">Start Processing</span>
            </h2>
            <p className="text-[var(--paragraph)]/85 mt-4 text-lg">
              One NMI gateway login covers every channel — from retail POS integrations to complex MOTO and e-commerce stacks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {solutions.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={title}
                className={`group relative rounded-[20px] border border-[rgba(8,39,32,0.08)] p-8 transition-all duration-500 hover:shadow-brand-md hover:-translate-y-1 reveal ${revealDelays[i % 4]}`}
                style={{ background: '#fffaeb' }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-accent">
                  <Icon className="w-6 h-6 text-white group-hover:text-brand-dark transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mt-5">{title}</h3>
                <p className="text-sm text-[var(--paragraph)]/80 mt-3 leading-relaxed">{desc}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-bold text-brand-dark mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CHARM */}
      <section
        className="relative overflow-hidden section-ptb text-white"
        style={{ background: 'linear-gradient(135deg, #0c3a30 0%, #0f4a3d 100%)' }}
      >
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border border-white/10 animate-float-slow hidden lg:block" aria-hidden="true" />
        <div className="absolute top-40 left-1/4 w-2 h-2 rounded-full bg-brand-accent animate-float hidden lg:block" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-accent bg-white/10 border border-brand-accent/40 px-4 py-1 rounded-full mb-4">
              WHY CHARM PAYMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white !text-white">Stop Overpaying on Processing Fees</h2>
            <p className="text-white/70 mt-4 text-lg leading-relaxed">
              Interchange-plus statements, dedicated underwriting, and gateway engineers who understand high-growth merchants — not call-center scripts.
            </p>
            <ul className="mt-8 space-y-4 list-none m-0 p-0">
              {['Transparent Pricing', 'Fast Approvals', 'Real Support', 'No Long-Term Contracts'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-brand-dark" aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/apply" className="btn-accent mt-10">
              Get Started
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal delay-200">
            {[
              { label: 'Avg. approval', value: '48hrs', icon: Clock },
              { label: 'Gateway uptime', value: '99.99%', icon: Zap },
              { label: 'Cart integrations', value: '200+', icon: Link2 },
              { label: 'Settlement', value: '1–2 days', icon: Wallet },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl p-6 border border-white/10 bg-[rgba(255,255,255,0.06)] backdrop-blur-sm"
              >
                <Icon className="w-5 h-5 text-brand-accent mb-3" aria-hidden="true" />
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-xs uppercase tracking-wider text-white/50 mt-2 font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section id="how-it-works" className="bg-brand-light section-ptb scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="section-label">HOW IT WORKS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Live in <span className="gradient-text">Days, Not Months</span>
            </h2>
            <p className="text-[var(--paragraph)]/85 mt-4">Our deployment team handles MID setup, risk profiles, and integration testing for you.</p>
          </div>

          <div className="relative mt-16">
            <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-0.5 bg-brand-dark/10 z-0" aria-hidden="true" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
              {[
                { n: '01', t: 'Apply Online', d: 'Secure application with volume estimates and business docs.' },
                { n: '02', t: 'Get Approved', d: 'Underwriting clears most merchants within 24–48 hours.' },
                { n: '03', t: 'We Configure Everything', d: 'Gateway keys, fraud rules, and cart connections go live.' },
                { n: '04', t: 'Start Processing', d: 'Accept omnichannel payments with real-time reporting.' },
              ].map(({ n, t, d }, idx) => (
                <div key={n} className={`text-center reveal ${revealDelays[idx % 4]}`}>
                  <div
                    className={`mx-auto w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-brand-md ${
                      idx === 3 ? 'bg-brand-accent text-brand-dark' : 'bg-brand-dark'
                    }`}
                  >
                    {n}
                  </div>
                  <h3 className="font-bold text-lg mt-6">{t}</h3>
                  <p className="text-sm text-[var(--paragraph)]/75 mt-2 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14 reveal">
            <Link href="/apply" className="btn-primary inline-flex">
              Start Your Application
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTIMONIALS */}
      <section className="bg-white section-ptb">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-label">MERCHANT REVIEWS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Trusted by Growing Businesses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              {
                quote: '“Charm Payments got us live before our launch weekend. Transparent pricing finally matched what we were promised.”',
                name: 'Marcus T.',
                role: 'Metro Auto Repair',
                initial: 'M',
              },
              {
                quote: '“Recurring billing just works. Support picked up on the first ring when we had a gateway question.”',
                name: 'Diane R.',
                role: 'Sunflower Wellness Spa',
                initial: 'D',
              },
              {
                quote: '“We process six figures monthly without downtime. The reporting exports clean into our accounting stack.”',
                name: 'James K.',
                role: 'StreamFlow Software',
                initial: 'J',
              },
            ].map((t) => (
              <div key={t.name} className="charm-card p-8 reveal">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-600 italic mt-4 leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-11 h-11 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold">{t.initial}</div>
                  <div>
                    <p className="font-bold text-[var(--heading)]">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-10">Testimonials are illustrative. Individual merchant results may vary.</p>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section
        className="relative overflow-hidden section-ptb text-center px-6"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <div className="absolute right-[30%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
        <div className="hidden lg:block absolute top-16 right-[15%] w-20 h-20 rounded-full border border-white/15 animate-rotation" aria-hidden="true" />
        <div className="hidden lg:block absolute bottom-24 left-[20%] w-3 h-3 rounded-full bg-brand-accent animate-float" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="section-label !text-brand-accent !bg-white/10 !border-brand-accent/40">GET STARTED</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white !text-white mt-4">
            Ready to Stop Overpaying on Processing?
          </h2>
          <p className="text-white/70 mt-4 text-lg leading-relaxed">
            Talk to a human, compare statements, or apply online — whichever fits your timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/apply" className="btn-accent">
              Apply Now
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline !text-white !border-white/40 !shadow-none hover:!bg-white hover:!text-brand-dark hover:!border-white"
            >
              Request Free Analysis
            </Link>
          </div>
          <p className="text-white/30 text-xs mt-10 leading-relaxed max-w-xl mx-auto">
            Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant
            funds are subject to the terms of the Merchant Agreement.
          </p>
        </div>
      </section>
    </div>
  )
}
