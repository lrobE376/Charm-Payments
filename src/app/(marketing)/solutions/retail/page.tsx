import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Retail & Boutique Payment Processing – Charm Payments',
  description:
    'Your retail processor charges the same blended rate on a basic debit card and a premium Amex — and keeps the spread. Charm shows you every fee, every card type, every time, with no hidden markup.',
}

const features = [
  {
    label: 'In-Store POS',
    heading: 'Works with 200+ POS systems',
    body: 'NMI connects to the POS you already use. Tap, chip, swipe — every card type, every customer. No rip-and-replace required.',
  },
  {
    label: 'Online + In-Store',
    heading: 'One gateway for your whole business',
    body: 'Brick-and-mortar and e-commerce run through the same NMI account. Unified reporting across channels. No reconciling two separate systems at month-end.',
  },
  {
    label: 'Installment Plans',
    heading: 'Layaway and installments built in',
    body: 'Accept partial payments at purchase and automatically charge remaining balances on your schedule — without a third-party app eating into margin.',
  },
  {
    label: 'Fraud Defense',
    heading: 'Chargeback protection tuned for retail',
    body: 'iSpyFraud rule sets, AVS matching, CVV verification, and 3D Secure — all configurable to your transaction mix. Dispute tools ready when you need them.',
  },
]

const whyItems = [
  { title: 'See every fee, every card, every time', desc: 'Debit costs less than credit — as it should. Every card type listed separately on your statement.' },
  { title: 'Unified channel reporting', desc: 'In-store, online, and mobile in one dashboard. One reconciliation at month-end.' },
  { title: '24-hour approval target', desc: 'Complete application in the morning, processing by the next day.' },
  { title: 'No long-term contracts', desc: 'Month-to-month terms. No penalty if your needs change.' },
]

const testimonials = [
  {
    quote: 'Switching from Square saved us real money once we saw the actual interchange breakdown. The difference on premium cards is significant.',
    name: 'Tara L.',
    role: 'Boutique Owner, St. Louis',
    initial: 'T',
  },
  {
    quote: 'Finally one system for the store and the website. The reporting actually makes sense now.',
    name: 'Chris B.',
    role: 'Retail Store Manager',
    initial: 'C',
  },
  {
    quote: 'Approval was fast and support was real. When I had a terminal question they picked up immediately.',
    name: 'Sandra K.',
    role: 'Gift Shop Owner',
    initial: 'S',
  },
]

const verticals = ['Clothing Boutiques', 'Shoe Stores', 'Gift & Specialty Shops', 'Home Goods & Décor', 'Bookstores', 'Toy & Hobby Shops', 'Jewelry Retailers', 'Pet Supplies']

const faqs = [
  {
    q: 'Can I use my existing POS hardware?',
    a: 'In most cases, yes. NMI integrates with 200+ POS systems. We will confirm compatibility during onboarding before you commit to anything.',
  },
  {
    q: 'How does unified reporting work across in-store and online?',
    a: 'Both channels run through the same NMI merchant account. Every transaction appears in one dashboard regardless of where it originated.',
  },
  {
    q: 'What happens when a customer disputes a charge?',
    a: 'You get a clear notification with the evidence window timeline. NMI provides documentation tools and our team walks you through the response process.',
  },
  {
    q: 'Do you support Apple Pay and Google Pay?',
    a: 'Yes. Digital wallets are supported on compatible terminals and online checkout. They reduce friction at the register and tend to have lower chargeback rates.',
  },
]

export default function RetailSolutionsPage() {
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
              Retail &amp; Boutiques · Payment Processing
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Your Processor Charges You the Same Rate on Debit and Amex. It Shouldn&apos;t.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Every time a customer pays with a basic debit card, your flat-rate processor still charges you the premium rate — and pockets the difference. Charm shows you every fee, every card type, every time, across every channel you sell through.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/apply" className="btn-accent">Get My Free Rate Audit</Link>
              <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Free Rate Audit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3 list-none p-0">
              {['See every fee, every card, every time', 'POS + e-commerce unified', '200+ cart integrations', 'No long-term contracts'].map((label) => (
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
            <span className="section-label">BUILT FOR RETAIL</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Every Way You Sell — Without Paying More Than You Should</h2>
            <p className="mt-4 text-lg text-paragraph">Register, website, pop-up — one merchant account covers every channel with unified reporting and no separate processors eating into margin.</p>
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
                Square works fine — until your volume grows
              </h2>
              <p className="mt-4 leading-relaxed text-paragraph">
                Flat-rate processors are easy to start on. But every time a customer swipes an Amex Platinum or a premium Visa Rewards card, you pay the same blended rate — while the processor pockets the spread. At real retail volume, that margin gap is significant.
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
              <h3 className="font-display text-2xl font-bold text-brand-dark">See how much you are overpaying</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph">Send us your last merchant statement. We will line-item every cost and show exactly what changes with Charm — before you commit to anything.</p>
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
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">What Retailers Found When They Saw Their Real Costs</h2>
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
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Common questions from retail businesses</h2>
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
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">Find Out What Square Has Been Keeping From Every Sale.</h2>
          <p className="mt-4 text-lg text-white/75">Your last statement is a blended number designed to be hard to question. We&apos;ll break it into every card type, every fee, and show you exactly what changes with Charm — no commitment, no pressure.</p>
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
