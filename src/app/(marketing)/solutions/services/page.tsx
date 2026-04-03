import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Business Payment Processing – Charm Payments',
  description:
    'Your current processor was built for retail, not service businesses. You\'re paying card-present flat rates on invoices, you have no ACH option, and no one picks up when billing breaks. Charm fixes all three.',
}

const features = [
  {
    label: 'Virtual Terminal',
    heading: 'Take card payments from any browser',
    body: 'Phone orders, email invoices, in-person — key in card details from any browser without hardware. No flat rate penalty for not having a register. Same next-day settlement.',
  },
  {
    label: 'Invoice & Pay Links',
    heading: 'Send a link. Get paid.',
    body: 'Generate a payment link and send it by text or email. Client pays on their phone. Funds hit your next batch. No chasing, no checks, no awkward collection calls.',
  },
  {
    label: 'Recurring Billing',
    heading: 'Automate retainers and contracts',
    body: 'Monthly retainer charges, service contracts, subscription billing — set the schedule and let smart retry logic handle failed cards without interrupting client relationships.',
  },
  {
    label: 'ACH Processing',
    heading: 'Bank transfers for big invoices',
    body: 'Accept bank-to-bank payments at lower interchange cost — ideal for large invoices, B2B contracts, and high-ticket services where card fees eat significant margin.',
  },
]

const whyItems = [
  { title: 'Virtual terminal included', desc: 'No separate hardware required. Take payments from any browser on any device.' },
  { title: 'ACH processing', desc: 'Bank transfers at lower cost — right for large invoices and B2B clients.' },
  { title: 'Recurring billing', desc: 'Retainer automation with smart retry. Set it and stop chasing clients.' },
  { title: 'No long-term contracts', desc: 'Month-to-month. No early termination penalties.' },
]

const testimonials = [
  {
    quote: 'The virtual terminal alone was worth switching. I take payments over the phone and by email without any hardware. Straightforward and fast.',
    name: 'Kevin M.',
    role: 'IT Consultant, St. Louis',
    initial: 'K',
  },
  {
    quote: 'Retainer billing is finally automated. Clients get charged on schedule and I stopped thinking about collections.',
    name: 'Lisa R.',
    role: 'Marketing Agency Owner',
    initial: 'L',
  },
  {
    quote: 'ACH processing on big invoices saves us real money. The difference from card processing on a $10K invoice adds up fast.',
    name: 'David C.',
    role: 'CPA Firm Partner',
    initial: 'D',
  },
]

const verticals = ['Law Firms', 'Accounting & CPA Firms', 'Cleaning Services', 'HVAC & Plumbing', 'Landscaping', 'IT & Managed Services', 'Marketing Agencies', 'Consulting Firms', 'Healthcare & Therapy', 'Tutoring & Coaching']

const faqs = [
  {
    q: 'Do I need a physical terminal to use Charm Payments?',
    a: 'No. The virtual terminal lets you take card payments from any browser. If you also need in-person hardware, we can set that up — but it is not required.',
  },
  {
    q: 'How does recurring billing handle failed cards?',
    a: 'NMI has built-in smart retry logic that automatically reattempts failed transactions on a configurable schedule before flagging for manual follow-up.',
  },
  {
    q: 'What is ACH processing and when should I use it?',
    a: 'ACH is bank-to-bank payment transfer. It typically costs less than card processing and is best for large invoices or B2B clients who pay from a business bank account.',
  },
  {
    q: 'Can clients pay through a link without calling me?',
    a: 'Yes. You can generate a hosted payment link from NMI and send it via text, email, or include it in an invoice. The client pays at their convenience.',
  },
]

export default function ServicesIndustryPage() {
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
              Service Businesses · Payment Processing
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              You&apos;re Using a Retail Processor to Run a Service Business. That&apos;s Costing You.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Flat-rate fees on every invoice. No ACH option for large clients. Support that&apos;s never heard of retainer billing. Your current processor wasn&apos;t built for how you work — Charm is. Virtual terminal, recurring billing, ACH, and pay links. One account, one human support line.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/apply" className="btn-accent">Get My Free Rate Audit</Link>
              <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Free Rate Audit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3 list-none p-0">
              {['Virtual terminal included', 'ACH processing', 'Recurring billing', 'No long-term contracts'].map((label) => (
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
            <span className="section-label">BUILT FOR SERVICE BUSINESSES</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Every Way Your Clients Pay — Without the Processor Tax</h2>
            <p className="mt-4 text-lg text-paragraph">Phone orders, invoices, retainers, ACH — one merchant account covers every collection method your service business uses, without flat-rate fees on every transaction.</p>
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
                Chasing invoices while overpaying to process them
              </h2>
              <p className="mt-4 leading-relaxed text-paragraph">
                Most service businesses are using processors built for retail — which means flat-rate fees on every invoice, no ACH option, and support that has never heard of a retainer billing setup. Seeing every fee, every card type, every time — and having ACH for big invoices — changes the economics completely.
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
              <h3 className="font-display text-2xl font-bold text-brand-dark">See how much you can save</h3>
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
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">What Service Businesses Found When They Switched</h2>
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
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Common questions from service businesses</h2>
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
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">Stop Paying Retail Processor Rates on Service Business Invoices.</h2>
          <p className="mt-4 text-lg text-white/75">Your last statement reflects a processor that wasn&apos;t built for you. We&apos;ll audit every line and show you exactly what changes with Charm — no commitment, no pressure.</p>
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
