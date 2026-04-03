import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile & On-the-Go Payment Processing – Charm Payments',
  description:
    'Square charges you the same flat rate on a debit card as a premium rewards card — even in the field. Charm shows you every fee, every card type, every time, with offline mode and text-to-pay built in.',
}

const features = [
  {
    label: 'Mobile Reader',
    heading: 'EMV and tap-to-pay on any device',
    body: 'Chip, tap, and swipe from any iOS or Android device. Works on 4G or WiFi. Connects to your NMI merchant account — same settlement, same reporting as your other channels.',
  },
  {
    label: 'Text to Pay',
    heading: 'Send a link. Get paid on the road.',
    body: 'Generate a payment link from your phone and send it by text. Customer pays before you leave the job site. Funds hit your next batch automatically.',
  },
  {
    label: 'Offline Mode',
    heading: 'Process when signal drops',
    body: 'Low-connectivity zones are not a problem. Transactions queue locally and sync when you reconnect. No lost sales because a job site has spotty service.',
  },
  {
    label: 'Real-Time Dashboard',
    heading: 'See your volume from anywhere',
    body: 'Check sales, batch status, and settlement from your phone. Know your numbers before you drive to the next job.',
  },
]

const whyItems = [
  { title: 'See every fee, every card, every time', desc: 'Debit costs less than credit — even on mobile. No flat 2.6% regardless of card type.' },
  { title: 'Offline mode', desc: 'Queue transactions in low-connectivity zones and sync automatically.' },
  { title: 'Text-to-pay links', desc: 'Send a payment link by text. No reader required for every transaction.' },
  { title: 'No long-term contracts', desc: 'Month-to-month. Built for businesses that move.' },
]

const testimonials = [
  {
    quote: 'Taking payments at the farmers market used to be a hassle. Now it just works — tap, done, next customer.',
    name: 'Angela T.',
    role: 'Farmers Market Vendor',
    initial: 'A',
  },
  {
    quote: 'I send a text link when I finish a job and get paid before I load my truck. No more chasing checks.',
    name: 'Brian R.',
    role: 'HVAC Contractor',
    initial: 'B',
  },
  {
    quote: 'The offline mode saved me at an outdoor event with bad service. Processed everything and it synced when I got home.',
    name: 'Carmen S.',
    role: 'Mobile Pet Groomer',
    initial: 'C',
  },
]

const verticals = ['Food Trucks', 'Farmers Markets', 'Contractors & Trades', 'Mobile Pet Groomers', 'Event Vendors', 'Home Service Pros', 'Pop-Up Retailers', 'Mobile Massage & Wellness', 'Photographers', 'Delivery Businesses']

const faqs = [
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
              Mobile &amp; On-the-Go · Payment Processing
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Square Charges You a Flat Rate in the Field. You Shouldn&apos;t Have to Accept That.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Being mobile shouldn&apos;t mean paying more. Square and PayPal charge the same flat rate regardless of card type — and pocket the spread on every debit swipe. Charm shows you every fee, every card type, every time, with a reader, text-to-pay, and offline mode built for how you actually work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/apply" className="btn-accent">Get My Free Rate Audit</Link>
              <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Free Rate Audit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3 list-none p-0">
              {['Mobile card reader', 'Text-to-pay links', 'Offline mode', 'No long-term contracts'].map((label) => (
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
            <span className="section-label">BUILT FOR MOBILE</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Every Problem With Mobile Processing — Solved</h2>
            <p className="mt-4 text-lg text-paragraph">Bad signal, no reader, client wants a link — one merchant account handles every scenario without juggling multiple apps or paying multiple processors.</p>
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
                Mobile processors charge flat rates built for their convenience
              </h2>
              <p className="mt-4 leading-relaxed text-paragraph">
                Square, PayPal, and Stripe are easy to start on — but they charge the same flat rate on a debit card as they do on a premium rewards card. At volume, that margin gap adds up to real money. With Charm, you see every fee, every card type, every time — debit costs what debit should cost, and your statement proves it.
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
              <h3 className="font-display text-2xl font-bold text-brand-dark">Compare your rate to Charm</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph">Send us your last processor statement. We will line-item the comparison and show exactly what you save at your transaction mix — before you commit to anything.</p>
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
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">What Mobile Businesses Found When They Switched</h2>
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
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Common questions from mobile businesses</h2>
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
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">Find Out How Much Your Mobile Processor Has Been Keeping.</h2>
          <p className="mt-4 text-lg text-white/75">Your last statement is a flat number that hides what every card type actually costs. We&apos;ll break it down and show you exactly what changes with Charm — no commitment, no pressure.</p>
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
