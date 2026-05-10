import Image from 'next/image'
import Link from 'next/link'
import {
  BarChart3,
  CheckCircle2,
  Gauge,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Star,
  WalletCards,
} from 'lucide-react'

const capabilities = [
  {
    icon: WalletCards,
    title: 'Accept Every Payment',
    description: 'Credit, debit, wallets, ACH, and more - online or in person.',
  },
  {
    icon: ShieldCheck,
    title: 'Reduce Chargebacks',
    description: 'Smart fraud prevention and dispute support that protects your revenue.',
  },
  {
    icon: Gauge,
    title: 'Manage Your Business',
    description: 'Unified dashboard to track payments, customers, settlements, and performance.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure & Compliant',
    description: 'Built with bank-grade security and compliance-first workflows.',
  },
]

const proofItems = [
  'Secure Payments / PCI Compliant',
  'Chargeback Support / Reduce & Defend',
  'Built for Business / Retail, Mobile, High-Risk',
]

const howItWorks = [
  {
    step: 'STEP 01',
    title: 'Start with a rate audit',
    description: 'Tell us about your business, current setup, and statement pain before you commit to onboarding.',
    image: '/images/pexels-rdne-7697434.jpg',
    imageAlt: 'Business owner reviewing a merchant payment application on a tablet.',
  },
  {
    step: 'STEP 02',
    title: 'Map your payment workflow',
    description:
      'Charm reviews how you take payments, where disputes happen, and what tools belong in your dashboard.',
    image: '/images/pexels-pavel-danilyuk-6612717.jpg',
    imageAlt: 'Payment terminal and countertop setup ready for merchant approval.',
  },
  {
    step: 'STEP 03',
    title: 'Onboard when ready',
    description:
      'When you are ready, Charm gives you one dashboard for payments, support, and chargeback activity.',
    image: '/images/sumup-uALOu8Rdv9M-unsplash.jpg',
    imageAlt: 'Customer completing a card payment at checkout.',
  },
]

const platformBullets = [
  'Real-time sales and performance insights',
  'Customer, refund, and dispute tracking',
  'Flexible payouts and settlement options',
  'Chargeback and fraud support',
]

const testimonials = [
  {
    quote:
      'Charm gave us a clearer view of card payments, refunds, and dispute activity without adding another complicated system.',
    attribution: 'Boutique Owner',
  },
  {
    quote:
      'We could finally see sales, payouts, and chargeback issues in one place instead of chasing reports across different tools.',
    attribution: 'Restaurant Owner',
  },
  {
    quote: 'The support workflow made it easier to track payment questions and keep our team focused on customer orders.',
    attribution: 'E-Commerce Merchant',
  },
]

function SectionEyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`font-atelierMono text-[11px] uppercase tracking-label ${dark ? 'text-[#bd9952]' : 'text-[#0f3520]/60'}`}>
      {children}
    </p>
  )
}

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`mt-4 max-w-3xl font-atelierSerif text-[clamp(1.85rem,3.4vw,2.7rem)] font-medium leading-[1.05] tracking-normal text-[#11251b] ${className}`}>
      {children}
    </h2>
  )
}

function ArrowLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'light'
}) {
  const classes = {
    primary: 'border-[#0f3520] bg-[#0f3520] text-white hover:bg-[#11251b]',
    secondary: 'border-[#0f3520]/18 bg-white text-[#11251b] hover:border-[#0f3520]/36 hover:bg-[#fbfaf7]',
    light: 'border-white bg-white text-[#0f3520] hover:bg-[#f8f5f0]',
  }

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-full border px-5 text-sm font-medium uppercase tracking-[0.12em] transition-colors ${classes[variant]}`}
    >
      {children}
      <span aria-hidden>-&gt;</span>
    </Link>
  )
}

function BarcodeAccent() {
  return (
    <div className="flex items-end gap-3 text-[#0f3520]/58" aria-hidden>
      <div className="h-16 w-16 bg-[repeating-linear-gradient(90deg,#0f3520_0_2px,transparent_2px_5px,#0f3520_5px_6px,transparent_6px_10px)] opacity-70" />
      <div className="pb-1 font-atelierMono text-[9px] uppercase leading-4 tracking-[0.24em]">
        MERCHANT ID
        <br />
        CHARM-2026
      </div>
    </div>
  )
}

export function HomePage() {
  return (
    <div className="max-w-full overflow-hidden bg-apple-canvas text-[#11251b]">
      <section className="px-5 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="mx-auto grid max-w-[1240px] min-w-0 gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <p className="font-stripeSans text-[11px] font-medium uppercase tracking-[0.12em] text-[#0f3520]/72">
              PREMIUM MERCHANT INFRASTRUCTURE
            </p>
            <h1 className="mt-5 max-w-[620px] break-words font-atelierSerif text-[clamp(2.35rem,5vw,4.15rem)] font-medium leading-[0.98] tracking-normal text-[#11251b]">
              Take Payments.
              <br />
              Manage Your Business.
              <br />
              All In One Place.
            </h1>
            <p className="mt-6 max-w-[590px] text-base leading-8 text-[#11251b]/72 sm:text-[1.05rem]">
              Charm Payments gives you the infrastructure, intelligence, and support to grow with confidence - online,
              in-store, and everywhere in between.
            </p>

            <ul className="mt-5 flex max-w-[620px] flex-wrap gap-2">
              {['No Setup Fees', 'Transparent Pricing', 'No Long-Term Contracts'].map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-[#0f3520]/15 bg-white px-3 py-1 text-[11px] font-medium tracking-[0.04em] text-[#11251b]/68"
                >
                  {pill}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ArrowLink href="/quote">REQUEST AUDIT</ArrowLink>
              <ArrowLink href="/contact" variant="secondary">
                TALK TO SALES
              </ArrowLink>
            </div>
          </div>

          <div className="min-w-0">
            <figure className="ml-auto w-full max-w-[560px]">
              <div className="relative aspect-[1.08/1] w-full overflow-hidden rounded-[10px] border border-[#0f3520]/10 bg-white shadow-[0_24px_70px_rgba(15,53,32,0.12)]">
                <Image
                  src="/images/sumup-uALOu8Rdv9M-unsplash.jpg"
                  alt="Customer completing a card payment at a merchant checkout counter."
                  fill
                  priority
                  sizes="(max-width: 1024px) calc(100vw - 40px), 560px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                <span className="font-atelierMono text-[10px] uppercase tracking-label text-[#bd9952]">
                  FIG. 01 - MERCHANT CHECKOUT
                </span>
                <BarcodeAccent />
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section aria-label="Payment proof points" className="relative max-w-full overflow-hidden border-y border-[#0f3520]/8 bg-white/60 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fbfbfd] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fbfbfd] to-transparent" />
        <div className="home-proof-track flex w-max items-center">
          {[...proofItems, ...proofItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mx-6 whitespace-nowrap font-atelierMono text-xs font-semibold uppercase tracking-[0.08em] text-[#11251b]/55"
              aria-hidden={index >= proofItems.length}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <SectionEyebrow>BUILT FOR MODERN MERCHANTS</SectionEyebrow>
            <SectionHeading className="mx-auto font-semibold">Everything You Need. One Powerful Platform.</SectionHeading>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group min-h-[232px] w-full min-w-0 rounded-[8px] border border-[#0f3520]/16 bg-white p-6 shadow-[0_14px_42px_rgba(15,53,32,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#0f3520]/28 hover:shadow-[0_18px_50px_rgba(15,53,32,0.1)]"
              >
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#e7f0e8] text-[#0f3520] ring-1 ring-[#0f3520]/10 transition group-hover:bg-[#0f3520] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-atelierSerif text-xl font-medium leading-tight text-[#11251b]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#11251b]/68">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10 max-w-3xl lg:mb-16">
            <SectionEyebrow>HOW IT WORKS</SectionEyebrow>
            <h2 className="mt-4 max-w-[760px] break-words font-atelierSerif text-[clamp(2rem,3.7vw,3rem)] font-medium leading-[1.05] tracking-normal text-[#11251b]">
              Three steps to a platform that <em className="italic text-[#0f3520]">works for the merchant.</em>
            </h2>
          </div>

          <div className="grid min-w-0 gap-6 md:grid-cols-3 lg:gap-8">
            {howItWorks.map((card) => (
              <article key={card.step} className="min-w-0">
                <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-[12px] border border-[#0f3520]/10 bg-white">
                  <Image src={card.image} alt={card.imageAlt} fill sizes="(max-width: 1024px) calc(100vw - 32px), 33vw" className="object-cover" />
                </div>
                <p className="font-atelierMono text-[11px] font-medium uppercase tracking-[0.14em] text-[#11251b]/45">
                  {card.step}
                </p>
                <h3 className="mt-4 font-atelierSerif text-[1.4rem] font-medium leading-tight text-[#11251b]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-[#11251b]/70">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] min-w-0 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <SectionEyebrow>OUR PLATFORM. TOTAL CONTROL.</SectionEyebrow>
            <SectionHeading>Everything You Need To Run Your Business.</SectionHeading>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#11251b]/70">
              See payments, payouts, refunds, customers, and disputes in one place - so your team knows what happened,
              what needs attention, and what gets paid next.
            </p>
            <ul className="mt-8 space-y-4">
              {platformBullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#11251b]/76">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0f3520]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ArrowLink href="/dashboard">EXPLORE PLATFORM</ArrowLink>
            </div>
          </div>

          <div className="w-full min-w-0 max-w-full rounded-[8px] border border-[#0f3520]/10 bg-white p-4 shadow-[0_22px_70px_rgba(15,53,32,0.08)] sm:p-6">
            <div className="min-w-0 rounded-[6px] border border-[#0f3520]/10 bg-[#fbfbfd] p-4 sm:p-6">
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-atelierMono text-[10px] uppercase tracking-label text-[#0f3520]/50">Live Overview</p>
                  <h3 className="mt-3 break-words font-atelierSerif text-2xl font-medium text-[#11251b]">Today&apos;s payment activity</h3>
                </div>
                <div className="shrink-0 rounded-full bg-[#e5f1e8] px-3 py-1 text-xs font-medium text-[#0f3520]">Online</div>
              </div>
              <div className="grid min-w-0 gap-3 sm:grid-cols-3">
                {[
                  ['Sales', '$18.4K'],
                  ['Settled', '$12.9K'],
                  ['Disputes', '2 open'],
                ].map(([label, value]) => (
                  <div key={label} className="min-w-0 rounded-[6px] border border-[#0f3520]/10 bg-white p-4">
                    <p className="text-xs text-[#11251b]/50">{label}</p>
                    <p className="mt-2 font-atelierSerif text-2xl font-medium text-[#0f3520]">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[6px] border border-[#0f3520]/10 bg-white p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-[#11251b]">Transaction flow</p>
                  <BarChart3 className="h-5 w-5 text-[#0f3520]" aria-hidden />
                </div>
                <div className="space-y-3">
                  {[72, 54, 86, 42].map((width, index) => (
                    <div key={width} className="h-3 overflow-hidden rounded-full bg-[#edf1ee]">
                      <div className="h-full rounded-full bg-[#0f3520]" style={{ width: `${width - index * 4}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-[6px] border border-[#0f3520]/10 bg-white p-4">
                <p className="mb-3 text-sm font-medium text-[#11251b]">Recent activity</p>
                <div className="space-y-2">
                  {['Card payment approved', 'Refund processed', 'Payout scheduled'].map((item) => (
                    <div key={item} className="flex min-w-0 items-center gap-3 text-sm text-[#11251b]/68">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f3520]/70" aria-hidden />
                      <span className="min-w-0 break-words">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {['Refunds synced', 'Settlement ready'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[6px] border border-[#0f3520]/10 bg-white p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0f3520]" aria-hidden />
                    <span className="text-sm text-[#11251b]/72">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f3520] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] min-w-0 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <SectionEyebrow dark>CHARM DEFENSE</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl break-words font-atelierSerif text-[clamp(2.25rem,4.5vw,3.6rem)] font-medium leading-[1.02] tracking-normal text-white">
              Protect Revenue.
              <br />
              Reduce Chargebacks.
              <br />
              Defend Your Business.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
              Charm Defense combines fraud monitoring, dispute workflows, and merchant support to help reduce costly
              chargebacks before they impact your business.
            </p>
            <div className="mt-9">
              <ArrowLink href="/charm-defense" variant="light">
                EXPLORE CHARM DEFENSE
              </ArrowLink>
            </div>
          </div>
          <div className="w-full min-w-0 max-w-full rounded-[8px] border border-white/12 bg-white/[0.06] p-3 backdrop-blur sm:p-6">
            <div className="min-w-0 rounded-[6px] border border-white/10 bg-[#123c27] p-4 sm:p-6">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-atelierMono text-[10px] uppercase tracking-label text-[#bd9952]">Risk Monitor</p>
                  <h3 className="mt-3 font-atelierSerif text-2xl font-medium text-white">Dispute command view</h3>
                </div>
                <ShieldCheck className="h-9 w-9 shrink-0 text-[#bd9952]" aria-hidden />
              </div>
              <div className="space-y-3">
                {[
                  ['Fraud signals reviewed', '184'],
                  ['Chargebacks prevented', '12'],
                  ['Evidence packets ready', '4'],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-wrap items-center justify-between gap-2 rounded-[6px] border border-white/10 bg-white/[0.06] p-4">
                    <span className="min-w-0 break-words text-sm text-white/70">{label}</span>
                    <span className="font-atelierSerif text-2xl font-medium text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[6px] border border-white/10 bg-white/[0.04] p-4">
                <p className="font-atelierMono text-[10px] uppercase tracking-label text-[#bd9952]">Active case</p>
                <p className="mt-2 text-sm text-white/74">Evidence deadline: 2 days</p>
              </div>
              <div className="mt-5 rounded-[6px] border border-[#bd9952]/25 bg-[#bd9952]/10 p-4">
                <div className="flex items-start gap-3">
                  <RotateCcw className="mt-1 h-5 w-5 shrink-0 text-[#bd9952]" aria-hidden />
                  <p className="text-sm leading-6 text-white/76">
                    Workflow status, fraud notes, and dispute activity stay organized for the merchant support team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10 max-w-3xl sm:mb-12">
            <SectionEyebrow>TRUSTED BY MERCHANTS</SectionEyebrow>
            <SectionHeading>
              Built for businesses.
              <br />
              Backed by results.
            </SectionHeading>
          </div>
          <div className="grid min-w-0 gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.attribution} className="w-full min-w-0 rounded-[8px] border border-[#0f3520]/10 bg-white p-6 shadow-[0_14px_40px_rgba(15,53,32,0.05)] sm:p-7">
                <div className="mb-6 flex gap-1 text-[#bd9952]" aria-label="Five star testimonial">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-base leading-8 text-[#11251b]/78">&quot;{testimonial.quote}&quot;</blockquote>
                <p className="mt-7 font-atelierMono text-[11px] uppercase tracking-label text-[#0f3520]/55">
                  - {testimonial.attribution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-[1240px] rounded-[12px] border border-[#0f3520]/10 bg-[#f8f5f0] px-5 py-12 shadow-[0_18px_50px_rgba(15,53,32,0.06)] sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="min-w-0">
              <h2 className="max-w-3xl break-words font-atelierSerif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] text-[#11251b]">
                Let&apos;s Build A Better Way To Do Payments.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#11251b]/70">
                Get a personalized audit and see where your current payment setup can improve.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ArrowLink href="/quote">REQUEST AUDIT</ArrowLink>
              <ArrowLink href="/contact" variant="secondary">
                TALK TO SALES
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-proof-track {
          animation: home-proof-marquee 60s linear infinite;
        }
        @keyframes home-proof-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .home-proof-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </div>
  )
}
