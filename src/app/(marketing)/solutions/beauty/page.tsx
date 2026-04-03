import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beauty & Salons Payment Processing – Charm Payments',
  description:
    'Your salon processor bundles fees you can\'t see and holds funds after your busiest days. Charm shows you every fee, every card type, every time — with local St. Louis support and 24-hour approval.',
}

const features = [
  {
    label: 'Tip Prompting',
    heading: 'Tips that settle clean — every time',
    body: 'Tip adjustments after the fact are the number one chargeback trigger in beauty. Ours prompt at the terminal and settle with the original batch — no disputes, no manual math, no surprises on your statement.',
  },
  {
    label: 'Membership Billing',
    heading: 'Automate your monthly memberships',
    body: 'Blowout clubs, waxing memberships, skincare plans — the revenue is supposed to be passive. Set the schedule once and smart retry logic handles failed cards. Stop chasing clients for money they already agreed to pay.',
  },
  {
    label: 'Card on File',
    heading: 'Charge cards on file with one click',
    body: 'A card on file at booking means a no-show is a billable event, not a lost hour. Stored securely, charged with one click, fully PCI compliant. Your time has a price — now you can enforce it.',
  },
  {
    label: 'Multi-Location',
    heading: 'Every Stylist Tracked. One Login to See It All.',
    body: 'Booth renters and multi-location owners stop sharing one murky merchant account. Each chair or location has its own reporting. One dashboard, clear numbers — no more confusion about who processed what.',
  },
]

const whyItems = [
  { title: 'See every fee, every card, every time', desc: 'You see the exact interchange cost on every card type plus our fixed markup. No blended rate hiding margin.' },
  { title: '24-hour approval target', desc: 'Submit a complete application and we target same-day to next-business-day approval.' },
  { title: 'Local St. Louis support', desc: 'When your terminal goes down on a Saturday, we pick up. Real people, same time zone.' },
  { title: 'No long-term contracts', desc: "We earn your business every month. No lock-in, no early termination penalties." },
]

const testimonials = [
  {
    quote: 'Charm Payments got us live before our grand opening weekend. Finally seeing exactly what every card type costs us.',
    name: 'Alicia M.',
    role: 'Salon Owner, St. Louis',
    initial: 'A',
  },
  {
    quote: 'Membership billing just runs. I set it up once and stopped thinking about it. Support picked up on the first ring when I had a question.',
    name: 'Deja R.',
    role: 'Med Spa Director',
    initial: 'D',
  },
  {
    quote: 'Chair rental tracking is finally clean. Every booth renter has their own MID and I see everything from one login.',
    name: 'Marcus T.',
    role: 'Barbershop Owner',
    initial: 'M',
  },
]

const verticals = ['Hair Salons', 'Barbershops', 'Nail Studios', 'Day Spas', 'Esthetics & Waxing', 'Lash & Brow Studios', 'Med Spas', 'Mobile Beauty Pros']

const faqs = [
  {
    q: 'Does Charm Payments handle tip adjustments?',
    a: 'Yes. Tip prompts are built into the gateway and settle with the same batch as the original transaction — eliminating the most common chargeback trigger in beauty.',
  },
  {
    q: 'Can I store client cards for recurring charges?',
    a: 'Yes. NMI tokenization stores cards securely and PCI compliantly. Charge on demand, on a schedule, or at any point in the client relationship.',
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
              Beauty &amp; Salons · Payment Processing
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Your Processor Is Taking More From Every Service Than You Know.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Every Saturday your processor closes the batch and quietly keeps the spread between what it costs them and what they charge you. Charm shows you every fee, every card type, every time — and gives you a real person to call when something goes wrong.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/apply" className="btn-accent">Get My Free Rate Audit</Link>
              <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Free Rate Audit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3 list-none p-0">
              {['See every fee, every card, every time', 'Tip prompting included', 'Card-on-file tokenization', 'No long-term contracts'].map((label) => (
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
            <span className="section-label">BUILT FOR BEAUTY</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Every Problem Your Current Processor Creates — Solved</h2>
            <p className="mt-4 text-lg text-paragraph">Tips settle automatically. Memberships charge themselves. No-shows lose their leverage. All without three separate apps or a single manual reconciliation.</p>
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
                Stop guessing what you actually earned
              </h2>
              <p className="mt-4 leading-relaxed text-paragraph">
                Most beauty businesses are on flat-rate processors that bundle fees, hold funds after busy weekends, and make it impossible to audit what you paid. With Charm, you see every fee, every card type, every time — and when your card mix improves, so does your cost.
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
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">What Beauty Businesses Found When They Switched</h2>
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
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Common questions from beauty businesses</h2>
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
      <section
        className="relative overflow-hidden section-ptb px-6 text-center"
        style={{ background: 'linear-gradient(145deg, #0E1A12 0%, #182A1C 50%, #0E1A12 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="inline-block rounded-full border border-sales-green/50 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sales-green">READY TO SWITCH?</span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">Find Out What Your Processor Has Been Keeping From You.</h2>
          <p className="mt-4 text-lg text-white/75">Your last merchant statement is full of fees your processor designed to be invisible. We&apos;ll translate every line and show you exactly what changes with Charm — no commitment, no pressure.</p>
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
