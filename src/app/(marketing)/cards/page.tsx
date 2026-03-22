import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryCTA from '@/components/conversion/PrimaryCTA'
import CardsFaqSection from '@/components/marketing/cards-faq-section'
import CardsStickyCta from '@/components/marketing/CardsStickyCta'
import CardsTestimonialsSection from '@/components/marketing/cards-testimonials-section'
import CardsWhatsIncludedSection from '@/components/marketing/cards-whats-included-section'
import {
  CheckCircle,
  Wallet,
  CreditCard,
  QrCode,
  Users,
  BarChart3,
  Globe,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Charm Cards — Digital Business Cards with Built-In Payments',
  description:
    'Premium digital business cards with Apple & Google Wallet saving, a built-in Pay Me button, NFC tap sharing, and lead capture — powered by Charm Payments.',
}

const includedCards = [
  {
    icon: Wallet,
    name: 'Apple & Google Wallet',
    desc: 'Customers save your card directly to their phone wallet with one tap. Your info is always current — no app download ever required.',
    features: [
      'Works on every iPhone & Android',
      'Updates automatically when you change info',
      'Branded with your logo and colors',
    ],
  },
  {
    icon: CreditCard,
    name: 'Pay Me Button',
    desc: 'Every card has a built-in Charm Payments payment link. Tap the card, see your info, pay you — all in one place.',
    features: [
      'Links directly to your Charm Payments account',
      'Accept card, ACH, Apple Pay & Google Pay',
      'No separate invoice app needed',
    ],
  },
  {
    icon: QrCode,
    name: 'QR Code + NFC Tap',
    desc: 'Share your card with a tap of a physical NFC card or a QR code scan — no app needed on the other person\'s phone.',
    features: [
      'Metal, bamboo, or PVC physical NFC cards available',
      'QR code downloadable for print materials',
      'Works on any smartphone instantly',
    ],
  },
  {
    icon: Users,
    name: 'Lead Capture Form',
    desc: 'Visitors can submit their contact info directly from your card. Every lead saved automatically to your dashboard.',
    features: ['Custom form fields', 'Tagged and organized by date', 'Export leads anytime'],
  },
  {
    icon: BarChart3,
    name: 'Analytics Dashboard',
    desc: 'See who viewed your card, how they found it, and whether they tapped your Pay Me button.',
    features: ['Views, taps, QR scans tracked', 'Pay button click tracking', 'Location and device data'],
  },
  {
    icon: Globe,
    name: 'Custom Domain & Branding',
    desc: 'Your card lives on your domain. Your logo, your colors, your brand — zero Charm branding visible to your customers if you want it gone.',
    features: ['Custom subdomain included', 'Full color and logo control', 'Email signature embed included'],
  },
] as const

export default function CharmCardsPage() {
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
          <div
            className="absolute right-[12%] top-32 h-2.5 w-2.5 rounded-full bg-brand-accent/30 animate-float"
            style={{ animationDelay: '0.5s' }}
          />
          <div className="absolute bottom-28 left-[25%] h-1.5 w-1.5 rounded-full bg-white/20 animate-float-slow" />
          <div
            className="absolute bottom-36 right-[18%] h-2 w-2 rounded-full bg-brand-accent/35 animate-float"
            style={{ animationDelay: '1s' }}
          />
          <div className="absolute right-[30%] top-16 h-1 w-1 rounded-full bg-white/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">CHARM CARDS</span>
            <h1 className="font-display mt-4 whitespace-pre-line text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {`Your Business Card That\nAlso Collects Payments`}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              A premium digital business card with a built-in Pay Me button, Apple & Google Wallet saving, lead capture, and NFC tap sharing — all under the Charm
              Payments brand.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Apple & Google Wallet Built In</span>
              <span className="stats-badge !border-white/15 !bg-white/10 !text-white">NFC Tap Sharing</span>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <PrimaryCTA
                variant="on-dark"
                primary="Get Your Charm Card"
                secondary="Get Instant Quote"
                primaryHref="/apply"
                secondaryHref="/quote"
              />
              <Link
                href="#how-it-works"
                className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-[480px]">
              <div className="rounded-[24px] overflow-hidden shadow-2xl animate-float">
                <Image
                  src="/images/pexels-rdne-7697434.jpg"
                  alt="Barber and client at a St. Louis barbershop"
                  width={600}
                  height={700}
                  className="w-full h-[520px] object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-float-slow">
                <div className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand-dark" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Apple Wallet</p>
                  <p className="text-sm font-bold text-brand-dark">Card Saved ✓</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-brand-dark rounded-2xl shadow-xl px-4 py-3 animate-float">
                <p className="text-[11px] text-brand-accent font-bold uppercase tracking-wide">NFC Tap</p>
                <p className="text-sm font-semibold text-white">Share in 1 tap</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CardsWhatsIncludedSection />

      {/* SECTION 2 — WHAT'S INCLUDED */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">EVERYTHING INCLUDED</span>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
              <span className="gradient-text">One Tap. Your Brand. Get Paid.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">Every Charm Card comes loaded with features paper cards and generic digital cards don&apos;t have.</p>
          </div>

          <div className="mt-12 mb-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="/images/pexels-pavel-danilyuk-6612717.jpg"
                alt="Customer tapping iPhone to pay at checkout counter"
                width={700}
                height={480}
                className="w-full h-[280px] object-cover object-center"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="/images/pexels-mart-production-7667447.jpg"
                alt="Small business owner using phone to manage her shop"
                width={700}
                height={480}
                className="w-full h-[280px] object-cover object-top"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {includedCards.map(({ icon: Icon, name, desc, features }) => (
              <article key={name} className="charm-card bg-brand-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-dark text-white md:h-16 md:w-16">
                  <Icon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-[var(--heading)] md:text-2xl">{name}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-[var(--paragraph)] md:text-base">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" strokeWidth={2} aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section id="how-it-works" className="section-ptb scroll-mt-24 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">HOW IT WORKS</span>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
              Live in <span className="gradient-text">Minutes</span>
            </h2>
          </div>

          <div className="mt-16 space-y-24 max-w-6xl mx-auto">
            {/* STEP 1 — mockup left, copy right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-[24px] shadow-xl p-6 border border-gray-100">
                <div className="bg-brand-dark rounded-[16px] p-6 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark font-bold text-xl">
                      JW
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        James Wilson
                      </p>
                      <p className="text-white/60 text-sm">Wilson&apos;s Barber Studio</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {['Call', 'Email', 'Pay Me'].map((label) => (
                      <div
                        key={label}
                        className={`rounded-xl py-2 text-center text-xs font-bold ${
                          label === 'Pay Me' ? 'bg-brand-accent text-brand-dark' : 'bg-white/10 text-white'
                        }`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {['📍 St. Louis, MO', '✂️ Cuts · Fades · Lineups', '🌐 wilsonbarberstudio.com'].map((item) => (
                      <p key={item} className="text-white/70 text-xs">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between px-2">
                  <p className="text-xs text-gray-400">charm.cards/jameswilson</p>
                  <div className="flex gap-2">
                    <div className="bg-brand-light rounded-lg px-3 py-1 text-[10px] font-bold text-brand-dark">Save to Wallet</div>
                    <div className="bg-brand-accent rounded-lg px-3 py-1 text-[10px] font-bold text-brand-dark">Share</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-dark flex items-center justify-center mb-6">
                  <span className="text-brand-accent font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    01
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Sign up and build your card in minutes
                </h3>
                <p className="text-paragraph leading-relaxed mb-4">
                  Apply through Charm Payments. Your card account is created automatically alongside your merchant account. Add your photo, logo, contact info,
                  social links, and your Pay Me button.
                </p>
                <ul className="space-y-2">
                  {['Takes less than 5 minutes', 'Your brand, your colors', 'Pay Me button auto-connected to your Charm account'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-paragraph">
                      <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" strokeWidth={2} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* STEP 2 — copy left, mockup right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-dark flex items-center justify-center mb-6">
                  <span className="text-brand-accent font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    02
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Share your card — tap, scan, or send a link
                </h3>
                <p className="text-paragraph leading-relaxed mb-4">
                  Send your link, display your QR code, or tap your NFC card. Customers save it straight to their Apple or Google Wallet with one tap — no app
                  download ever required.
                </p>
                <ul className="space-y-2">
                  {['NFC tap sharing', 'QR code for print materials', 'Apple & Google Wallet saving'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-paragraph">
                      <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" strokeWidth={2} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-[24px] shadow-xl p-6 border border-gray-100">
                <p className="text-sm font-bold text-brand-dark mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Share your card
                </p>
                <div className="bg-brand-light rounded-[16px] p-6 flex flex-col items-center mb-4">
                  <div className="grid grid-cols-5 gap-1 mb-3">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 rounded-sm ${[0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24, 6, 12, 18].includes(i) ? 'bg-brand-dark' : 'bg-transparent'}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">charm.cards/jameswilson</p>
                </div>
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Save everywhere</p>
                <div className="space-y-2">
                  {[
                    { label: 'Save to Google Wallet', color: 'bg-blue-50 text-blue-700' },
                    { label: 'Save to Apple Wallet', color: 'bg-gray-900 text-white' },
                    { label: 'Add to email signature', color: 'bg-brand-light text-brand-dark' },
                    { label: 'Get an NFC business card', color: 'bg-brand-accent text-brand-dark' },
                  ].map((item) => (
                    <div key={item.label} className={`rounded-xl px-4 py-2.5 text-xs font-semibold flex items-center justify-between ${item.color}`}>
                      {item.label}
                      <span>›</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* STEP 3 — mockup left, copy right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-[24px] shadow-xl p-6 border border-gray-100">
                <p className="text-sm font-bold text-brand-dark mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Lead capture dashboard
                </p>
                <div className="space-y-1 mb-4">
                  <div className="grid grid-cols-4 gap-2 text-[10px] font-bold text-gray-400 uppercase px-2">
                    <span>Name</span>
                    <span>Source</span>
                    <span>Date</span>
                    <span>Action</span>
                  </div>
                  {[
                    { name: 'Marcus T.', source: 'NFC Tap', date: 'Today', color: 'bg-brand-accent/20 text-brand-dark' },
                    { name: 'Keisha R.', source: 'QR Scan', date: 'Yesterday', color: 'bg-blue-50 text-blue-700' },
                    { name: 'David M.', source: 'Link', date: 'Mon', color: 'bg-brand-light text-brand-dark' },
                    { name: 'Aisha J.', source: 'Wallet', date: 'Sun', color: 'bg-purple-50 text-purple-700' },
                  ].map((lead) => (
                    <div key={lead.name} className="grid grid-cols-4 gap-2 items-center bg-gray-50 rounded-xl px-2 py-2.5 text-xs">
                      <span className="font-semibold text-brand-dark">{lead.name}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold text-center ${lead.color}`}>{lead.source}</span>
                      <span className="text-gray-400">{lead.date}</span>
                      <span className="text-brand-accent font-bold">Follow up →</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { label: 'Card Views', value: '248' },
                    { label: 'Pay Taps', value: '31' },
                    { label: 'Leads', value: '19' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-brand-light rounded-xl p-3 text-center">
                      <p className="text-xl font-bold text-brand-dark" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-dark flex items-center justify-center mb-6">
                  <span className="text-brand-accent font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    03
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Capture leads and track every interaction
                </h3>
                <p className="text-paragraph leading-relaxed mb-4">
                  Every card view, Pay Me tap, QR scan, and wallet save is tracked automatically. See who engaged and follow up with context — no missed leads, no
                  lost connections.
                </p>
                <ul className="space-y-2">
                  {['Automatic lead capture', 'Views, taps, and scans tracked', 'Export leads anytime'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-paragraph">
                      <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" strokeWidth={2} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* STEP 4 — copy left, mockup right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-accent flex items-center justify-center mb-6">
                  <span className="text-brand-dark font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    04
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Get paid — directly from your card
                </h3>
                <p className="text-paragraph leading-relaxed mb-4">
                  Every card view is a payment opportunity. Your Pay Me button is one tap away from any device, anywhere. Accept cards, ACH, Apple Pay, and Google
                  Pay — all through Charm Payments.
                </p>
                <ul className="space-y-2">
                  {['No separate invoice app needed', 'Accept all major cards + digital wallets', 'Funds deposited next business day'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-paragraph">
                      <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" strokeWidth={2} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-[24px] shadow-xl p-6 border border-gray-100">
                <div className="bg-brand-dark rounded-[16px] p-6 mb-4 text-center">
                  <p className="text-white/60 text-sm mb-1">Pay James Wilson</p>
                  <p className="text-white text-4xl font-bold mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    $65.00
                  </p>
                  <p className="text-white/40 text-xs mb-6">Haircut + Lineup</p>
                  <div className="bg-brand-accent rounded-2xl py-3 text-brand-dark font-bold text-sm mb-3">Pay with Apple Pay</div>
                  <div className="bg-white/10 rounded-2xl py-3 text-white font-bold text-sm">Pay with Card</div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-brand-accent" strokeWidth={2} aria-hidden />
                  </div>
                  <p className="text-xs text-gray-400">Secured by Charm Payments · First Data/Fiserv</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="/images/pexels-rdne-7697211.jpg"
                alt="Barber checking his phone between clients"
                width={700}
                height={500}
                className="w-full h-[380px] object-cover object-top"
              />
            </div>
            <div>
              <span className="section-label">BUILT FOR YOUR MARKET</span>
              <h3 className="mt-4 mb-3 text-2xl font-bold text-brand-dark" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Barbers. Florists. Boutiques. Anyone who hustles.
              </h3>
              <p className="text-paragraph leading-relaxed">
                Charm Cards are built for real St. Louis business owners — not corporate offices. One tap shares your info. One more tap gets you paid. No app
                download, no paper cards, no chasing invoices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CardsTestimonialsSection />

      {/* SECTION 4 — PRICING */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <span className="section-label">SIMPLE PRICING</span>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
              Transparent Pricing, <span className="gradient-text">No Surprises</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="charm-card bg-brand-card p-8">
              <span className="section-label">SOLO</span>
              <div className="mt-6 flex flex-wrap items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-[var(--heading)]">$15</span>
                <span className="text-lg text-gray-600">/mo</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">per card</p>
              <ul className="mt-8 space-y-3">
                {[
                  '1 digital business card',
                  'Apple & Google Wallet',
                  'Pay Me button (Charm Payments)',
                  'Lead capture form',
                  'QR code + NFC link',
                  'Basic analytics (30 days)',
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-[var(--paragraph)]">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" strokeWidth={2} aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
              <Link href="/apply" className="btn-outline mt-8 inline-flex w-full justify-center">
                Get Your Charm Card
              </Link>
            </div>

            <div className="rounded-[20px] border-2 border-brand-accent bg-brand-dark p-8 text-white">
              <span className="inline-block rounded-full bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-dark">
                PRO — MOST POPULAR
              </span>
              <div className="mt-6 flex flex-wrap items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-white">$25</span>
                <span className="text-lg text-white/70">/mo</span>
              </div>
              <p className="mt-1 text-sm text-white/60">per card</p>
              <ul className="mt-8 space-y-3">
                {[
                  'Everything in Solo',
                  'Branded wallet passes (your logo on the pass)',
                  'Unlimited analytics history',
                  'Custom domain for card link',
                  'Customizable CTA buttons',
                  'NFC physical card (one-time hardware upsell)',
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-white/90">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" strokeWidth={2} aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
              <Link href="/apply" className="btn-accent mt-8 inline-flex w-full justify-center">
                Get Pro Card
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="mt-14 mb-6 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="/images/pexels-amina-filkins-5414041.jpg"
                alt="Florist small business owner on her phone"
                width={500}
                height={400}
                className="w-full h-[240px] object-cover object-top"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="/images/pexels-ketut-subiyanto-4353613.jpg"
                alt="Small business owner in apron taking a call"
                width={500}
                height={400}
                className="w-full h-[240px] object-cover object-top"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="/images/pexels-mikhail-nilov-7681664.jpg"
                alt="Business professional on a call"
                width={500}
                height={400}
                className="w-full h-[240px] object-cover object-top"
              />
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Add physical NFC cards starting at $49 one-time. Metal, bamboo, or PVC. Ships worldwide.
          </p>
        </div>
      </section>

      <CardsFaqSection />

      {/* SECTION 5 — DARK CTA (homepage SECTION 7 pattern) */}
      <section
        className="section-ptb relative overflow-hidden px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute bottom-0 left-[20%] top-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <div className="absolute bottom-0 right-[30%] top-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
        <div className="absolute right-[15%] top-16 hidden h-20 w-20 rounded-full border border-white/15 animate-rotation lg:block" aria-hidden />
        <div className="absolute bottom-24 left-[20%] hidden h-3 w-3 animate-float rounded-full bg-brand-accent lg:block" aria-hidden />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="section-label !border-brand-accent/40 !bg-white/10 !text-brand-accent">GET YOUR CARD</span>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold text-white md:text-4xl">
            {`Stop Handing Out Cards\nPeople Throw Away`}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            One tap, they have your info. One more tap, they pay you. That&apos;s the Charm Card difference.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <PrimaryCTA
              variant="on-dark"
              primary="Get Your Charm Card"
              secondary="Get Instant Quote"
              primaryHref="/apply"
              secondaryHref="/quote"
            />
            <Link
              href="/services"
              className="text-sm font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline"
            >
              Learn about Charm Payments
            </Link>
          </div>
        </div>
      </section>

      <CardsStickyCta />
    </>
  )
}
