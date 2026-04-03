import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Restaurants & Food Service Payment Processing – Charm Payments',
  description:
    'Your processor is pocketing the spread between what rewards cards cost at interchange and what they charge you. At restaurant volumes, that\'s thousands a year. Charm shows you every fee — and picks up the phone.',
}

const features = [
  {
    label: 'Tableside Payments',
    heading: 'Every channel. One gateway.',
    body: 'EMV chip, tap-to-pay, and swipe at the table, counter, or bar. Online ordering connects to the same NMI gateway and settles into the same batch as in-house transactions.',
  },
  {
    label: 'Tip & Split',
    heading: 'Tips and splits without the math',
    body: 'Configurable tip presets on every terminal. Split bills across multiple cards without manual calculations or awkward moments. Tips settle automatically with the batch.',
  },
  {
    label: 'Fast Settlement',
    heading: 'Know when your money hits',
    body: 'Next-business-day settlement as standard. No mystery holds after a big Saturday. Your funds move on a predictable schedule you can count on.',
  },
  {
    label: 'Reporting',
    heading: 'End-of-day reporting that actually helps',
    body: 'Batch reports by location, terminal, or server. See exactly what you processed, what you netted, and where chargebacks are concentrating — exportable in seconds.',
  },
]

const whyItems = [
  { title: 'See every fee, every card, every time', desc: 'Rewards cards cost you more at interchange — with us, you see that actual cost instead of a blended rate hiding the difference.' },
  { title: 'Next-day settlement', desc: 'Funds on a predictable schedule. No holds after high-volume weekends.' },
  { title: 'Multi-location support', desc: 'Separate MIDs per location with unified reporting across your entire operation.' },
  { title: 'No long-term contracts', desc: 'Month-to-month. We earn your business every statement cycle.' },
]

const testimonials = [
  {
    quote: 'Charm Payments got us processing before our launch weekend. Finally seeing real interchange costs instead of a blended mystery rate.',
    name: 'Marcus T.',
    role: 'Restaurant Owner, St. Louis',
    initial: 'M',
  },
  {
    quote: 'Tip settlement is clean and automatic. Chargebacks dropped once we had proper documentation tools in place.',
    name: 'Diane R.',
    role: 'Bar & Grill Manager',
    initial: 'D',
  },
  {
    quote: 'We process six figures monthly across three locations. The unified reporting dashboard saves us hours every week.',
    name: 'James K.',
    role: 'Multi-Location QSR Operator',
    initial: 'J',
  },
]

const verticals = ['Full-Service Restaurants', 'QSR & Fast Casual', 'Bars & Nightclubs', 'Food Trucks', 'Cafés & Coffee Shops', 'Bakeries & Delis', 'Ghost Kitchens', 'Catering Companies']

const faqs = [
  {
    q: 'Can I connect online ordering to the same merchant account?',
    a: 'Yes. NMI connects your online ordering flow directly to your merchant account. Orders settle into the same batch as in-house transactions with unified reporting.',
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
    <div className="relative">

      {/* HERO */}
      <section
        className="relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-28"
        style={{ background: 'linear-gradient(145deg, #0E1A12 0%, #182A1C 52%, #0E1A12 100%)' }}
      >
        <div className="pointer-events-none absolute -right-24 -top-20 h-[380px] w-[380px] rounded-full bg-sales-green/15 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" aria-hidden />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold text-sales-green/80 uppercase tracking-widest mb-4">Trusted by 500+ St. Louis merchants</p>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm mb-6">
              <span className="h-2 w-2 shrink-0 rounded-full bg-sales-green animate-pulse" aria-hidden />
              Restaurants &amp; Food Service · Payment Processing
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Your Processor Profits Every Time a Rewards Card Hits Your Terminal.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Every Amex Platinum and Visa Rewards card your guest swipes has a higher interchange cost — and your flat-rate processor keeps the difference. Charm shows you every fee, every card type, every time, and settles your funds the next business day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/apply" className="btn-accent">Get My Free Rate Audit</Link>
              <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Free Rate Audit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3 list-none p-0">
              {['See every fee, every card, every time', 'Tableside tip prompting', 'Next-day settlement', 'Multi-location support'].map((label) => (
                <li key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-sales-green" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE STRIP */}
      <section className="border-y border-gray-100 bg-slate-50/80 py-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">We serve</span>
            {verticals.map((v) => (
              <span key={v} className="rounded-full border border-brand-dark/10 bg-white px-4 py-1.5 text-xs font-semibold text-brand-dark shadow-brand-sm">{v}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white section-ptb">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="section-label">BUILT FOR RESTAURANTS</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Every Problem Your Processor Creates at the Table — Solved</h2>
            <p className="mt-4 text-lg text-paragraph">Tips that don&apos;t trigger chargebacks. Settlements you can predict. Reporting that tells you where the money actually went.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {features.map(({ label, heading, body }) => (
              <div key={heading} className="group rounded-[20px] border border-gray-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sales-green/40 hover:shadow-sales-glow">
                <span className="inline-block rounded-full bg-sales-green/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sales-navy mb-4">{label}</span>
                <h3 className="text-xl font-bold text-brand-dark">{heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paragraph">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHARM */}
      <section className="bg-brand-light section-ptb">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">WHY CHARM PAYMENTS</span>
              <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">
                Rewards cards are costing you more than you think
              </h2>
              <p className="mt-4 leading-relaxed text-paragraph">
                With flat-rate pricing, every premium rewards card your guest swipes costs you the same blended rate — but the processor pockets the difference between interchange and what they charge you. At restaurant volumes, that adds up to thousands a year. With Charm, you see every fee, every card type, every time — not a blended rate designed to obscure it.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {whyItems.map(({ title, desc }) => (
                  <div key={title} className="rounded-xl border border-brand-dark/10 bg-white p-5 shadow-brand-sm">
                    <CheckCircle className="h-5 w-5 text-sales-green mb-2" />
                    <h4 className="font-bold text-brand-dark text-sm">{title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-paragraph">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-brand-dark/10 bg-white p-10 shadow-brand-md">
              <p className="text-sm font-bold uppercase tracking-widest text-sales-green mb-2">Free Rate Audit</p>
              <h3 className="font-display text-2xl font-bold text-brand-dark">See what your statement is hiding</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph">Send us your last merchant statement. We&apos;ll line-item every cost and show exactly what changes with Charm — before you commit to anything.</p>
              <Link href="/quote" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-dark underline-offset-2 hover:underline">
                Get your free audit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 section-ptb">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="section-label">MERCHANT REVIEWS</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">What Restaurant Operators Found When They Switched</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-[20px] border border-gray-100 bg-white p-8 shadow-brand-sm">
                <p className="italic leading-relaxed text-gray-600 text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sales-navy font-bold text-white text-sm">{t.initial}</div>
                  <div>
                    <p className="font-bold text-brand-dark text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-gray-400">Testimonials are illustrative. Individual merchant results may vary.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-ptb">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="section-label">FAQ</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Common questions from restaurant operators</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-6">
                <h3 className="font-bold text-brand-dark">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-ptb px-6 text-center" style={{ background: 'linear-gradient(145deg, #0E1A12 0%, #182A1C 50%, #0E1A12 100%)' }}>
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="inline-block rounded-full border border-sales-green/50 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sales-green">READY TO SWITCH?</span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">Find Out How Much Your Processor Kept Last Month.</h2>
          <p className="mt-4 text-lg text-white/75">Your last statement has a blended rate your processor designed to be unauditable. We&apos;ll break it down line by line and show you exactly what changes — no commitment, no pressure.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="btn-accent">Get My Free Audit</Link>
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              Free Rate Audit <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
