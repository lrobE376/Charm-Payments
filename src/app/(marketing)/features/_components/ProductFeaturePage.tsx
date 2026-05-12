import Image from 'next/image'
import Link from 'next/link'
import {
  BarChart3,
  CheckCircle2,
  Headphones,
  LockKeyhole,
  NotebookPen,
  QrCode,
  ReceiptText,
  RefreshCw,
  Search,
  ShoppingCart,
  Smartphone,
  Star,
  UserCheck,
  WalletCards,
  type LucideIcon,
} from 'lucide-react'
import type { ProductFeatureIconKey, ProductFeaturePageContent } from '../_data/productFeaturePages'

const iconMap: Record<ProductFeatureIconKey, LucideIcon> = {
  barChart: BarChart3,
  check: CheckCircle2,
  headphones: Headphones,
  lock: LockKeyhole,
  notebook: NotebookPen,
  qr: QrCode,
  receipt: ReceiptText,
  refresh: RefreshCw,
  search: Search,
  shoppingCart: ShoppingCart,
  smartphone: Smartphone,
  userCheck: UserCheck,
  wallet: WalletCards,
}

type ProductFeaturePageProps = {
  content: ProductFeaturePageContent
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-atelierMono text-[11px] uppercase tracking-label text-[#0f3520]/60">
      {children}
    </p>
  )
}

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`mt-4 max-w-3xl font-atelierSerif text-[clamp(1.85rem,3.4vw,2.7rem)] font-medium leading-[1.05] tracking-normal text-[#11251b] ${className}`}
    >
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
  variant?: 'primary' | 'secondary'
}) {
  const classes =
    variant === 'primary'
      ? 'border-[#0f3520] bg-[#0f3520] text-white hover:bg-[#11251b]'
      : 'border-[#0f3520]/18 bg-white text-[#11251b] hover:border-[#0f3520]/36 hover:bg-[#fbfaf7]'

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-full border px-5 text-sm font-medium uppercase tracking-[0.12em] transition-colors ${classes}`}
    >
      {children}
      <span aria-hidden>-&gt;</span>
    </Link>
  )
}

function BarcodeAccent({ label }: { label: string }) {
  return (
    <div className="flex items-end gap-3 text-[#0f3520]/58" aria-hidden>
      <div className="h-16 w-16 bg-[repeating-linear-gradient(90deg,#0f3520_0_2px,transparent_2px_5px,#0f3520_5px_6px,transparent_6px_10px)] opacity-70" />
      <div className="pb-1 font-atelierMono text-[9px] uppercase leading-4 tracking-[0.24em]">
        MERCHANT ID
        <br />
        {label}
      </div>
    </div>
  )
}

function renderHeadlineWithEmphasis(headline: string, emphasizedText: string) {
  const index = headline.indexOf(emphasizedText)

  if (index === -1) return headline

  return (
    <>
      {headline.slice(0, index)}
      <em className="italic text-[#0f3520]">{emphasizedText}</em>
      {headline.slice(index + emphasizedText.length)}
    </>
  )
}

export function ProductFeaturePage({ content }: ProductFeaturePageProps) {
  return (
    <div className="max-w-full overflow-hidden bg-apple-canvas text-[#11251b]">
      <section className="px-5 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="mx-auto grid max-w-[1240px] min-w-0 gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <p className="font-stripeSans text-[11px] font-medium uppercase tracking-[0.12em] text-[#0f3520]/72">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-[660px] break-words font-atelierSerif text-[clamp(2.35rem,5vw,4.15rem)] font-medium leading-[0.98] tracking-normal text-[#11251b]">
              {content.hero.headline}
            </h1>
            <p className="mt-6 max-w-[590px] text-base leading-8 text-[#11251b]/72 sm:text-[1.05rem]">
              {content.hero.body}
            </p>

            <ul className="mt-5 flex max-w-[620px] flex-wrap gap-2">
              {content.hero.proofPills.map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-[#0f3520]/15 bg-white px-3 py-1 text-[11px] font-medium tracking-[0.04em] text-[#11251b]/68"
                >
                  {pill}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ArrowLink href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}</ArrowLink>
              <ArrowLink href={content.hero.secondaryCta.href} variant="secondary">
                {content.hero.secondaryCta.label}
              </ArrowLink>
            </div>
          </div>

          <div className="min-w-0">
            <figure className="ml-auto w-full max-w-[560px]">
              <div className="relative aspect-[1.08/1] w-full overflow-hidden rounded-[10px] border border-[#0f3520]/10 bg-white shadow-[0_24px_70px_rgba(15,53,32,0.12)]">
                <Image
                  src={content.hero.visual.src}
                  alt={content.hero.visual.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) calc(100vw - 40px), 560px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                <span className="font-atelierMono text-[10px] uppercase tracking-label text-[#bd9952]">
                  {content.hero.visual.figureLabel}
                </span>
                <BarcodeAccent label={content.hero.visual.barcodeLabel} />
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        aria-label={`${content.hero.eyebrow.toLowerCase()} proof points`}
        className="relative max-w-full overflow-hidden border-y border-[#0f3520]/8 bg-white/60 py-5"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fbfbfd] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fbfbfd] to-transparent" />
        <div className="product-feature-proof-track flex w-max items-center">
          {[...content.proofStripItems, ...content.proofStripItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mx-6 whitespace-nowrap font-atelierMono text-xs font-semibold uppercase tracking-[0.08em] text-[#11251b]/55"
              aria-hidden={index >= content.proofStripItems.length}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <SectionEyebrow>{content.capabilitySection.eyebrow}</SectionEyebrow>
            <SectionHeading className="mx-auto font-semibold">{content.capabilitySection.headline}</SectionHeading>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {content.capabilitySection.cards.map(({ icon, title, body }) => {
              const Icon = iconMap[icon]

              return (
                <article
                  key={title}
                  className="group min-h-[232px] w-full min-w-0 rounded-[8px] border border-[#0f3520]/16 bg-white p-6 shadow-[0_14px_42px_rgba(15,53,32,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#0f3520]/28 hover:shadow-[0_18px_50px_rgba(15,53,32,0.1)]"
                >
                  <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#e7f0e8] text-[#0f3520] ring-1 ring-[#0f3520]/10 transition group-hover:bg-[#0f3520] group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-atelierSerif text-xl font-medium leading-tight text-[#11251b]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#11251b]/68">{body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10 max-w-3xl lg:mb-16">
            <SectionEyebrow>{content.howItWorks.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 max-w-[760px] break-words font-atelierSerif text-[clamp(2rem,3.7vw,3rem)] font-medium leading-[1.05] tracking-normal text-[#11251b]">
              {renderHeadlineWithEmphasis(content.howItWorks.headline, content.howItWorks.emphasizedText)}
            </h2>
          </div>

          <div className="grid min-w-0 gap-6 md:grid-cols-3 lg:gap-8">
            {content.howItWorks.steps.map((card) => (
              <article key={card.step} className="min-w-0">
                <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-[12px] border border-[#0f3520]/10 bg-white">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 1024px) calc(100vw - 32px), 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-atelierMono text-[11px] font-medium uppercase tracking-[0.14em] text-[#11251b]/45">
                  {card.step}
                </p>
                <h3 className="mt-4 font-atelierSerif text-[1.4rem] font-medium leading-tight text-[#11251b]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-[#11251b]/70">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] min-w-0 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <SectionEyebrow>{content.platform.eyebrow}</SectionEyebrow>
            <SectionHeading>{content.platform.headline}</SectionHeading>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#11251b]/70">{content.platform.body}</p>
            <ul className="mt-8 space-y-4">
              {content.platform.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#11251b]/76">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0f3520]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ArrowLink href={content.platform.cta.href}>{content.platform.cta.label}</ArrowLink>
            </div>
          </div>

          <div className="w-full min-w-0 max-w-full rounded-[8px] border border-[#0f3520]/10 bg-white p-4 shadow-[0_22px_70px_rgba(15,53,32,0.08)] sm:p-6">
            <div className="min-w-0 rounded-[6px] border border-[#0f3520]/10 bg-[#fbfbfd] p-4 sm:p-6">
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-atelierMono text-[10px] uppercase tracking-label text-[#0f3520]/50">
                    {content.platform.mockup.eyebrow}
                  </p>
                  <h3 className="mt-3 break-words font-atelierSerif text-2xl font-medium text-[#11251b]">
                    {content.platform.mockup.title}
                  </h3>
                </div>
                <div className="shrink-0 rounded-full bg-[#e5f1e8] px-3 py-1 text-xs font-medium text-[#0f3520]">
                  {content.platform.mockup.status}
                </div>
              </div>
              <div className="grid min-w-0 gap-3 sm:grid-cols-3">
                {content.platform.mockup.metrics.map(({ label, value }) => (
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
                  {content.platform.mockup.flowWidths.map((width, index) => (
                    <div key={`${width}-${index}`} className="h-3 overflow-hidden rounded-full bg-[#edf1ee]">
                      <div className="h-full rounded-full bg-[#0f3520]" style={{ width: `${width - index * 4}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-[6px] border border-[#0f3520]/10 bg-white p-4">
                <p className="mb-3 text-sm font-medium text-[#11251b]">Recent activity</p>
                <div className="space-y-2">
                  {content.platform.mockup.recentActivity.map((item) => (
                    <div key={item} className="flex min-w-0 items-center gap-3 text-sm text-[#11251b]/68">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f3520]/70" aria-hidden />
                      <span className="min-w-0 break-words">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {content.platform.mockup.checks.map((item) => (
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

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1240px] rounded-[12px] border border-[#0f3520]/10 bg-white px-5 py-12 shadow-[0_18px_50px_rgba(15,53,32,0.05)] sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="min-w-0">
              <p className="font-atelierMono text-[11px] uppercase tracking-label text-[#bd9952]">
                {content.readiness.eyebrow}
              </p>
              <h2 className="mt-4 max-w-xl font-atelierSerif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] text-[#0f3520]">
                {content.readiness.headline}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#11251b]/72">{content.readiness.body}</p>
            </div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              {content.readiness.practices.map(({ icon, title, body }) => {
                const Icon = iconMap[icon]

                return (
                  <article
                    key={title}
                    className="min-w-0 rounded-[8px] border border-[#0f3520]/10 bg-[#f8f5f0] p-5"
                  >
                    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0f3520]/10 bg-white text-[#0f3520]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-atelierSerif text-xl font-medium leading-tight text-[#11251b]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#11251b]/68">{body}</p>
                  </article>
                )
              })}
              <p className="border-t border-[#0f3520]/10 pt-4 text-xs leading-6 text-[#11251b]/58 sm:col-span-2">
                {content.readiness.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10 max-w-3xl sm:mb-12">
            <SectionEyebrow>{content.testimonials.eyebrow}</SectionEyebrow>
            <SectionHeading>
              {content.testimonials.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </SectionHeading>
          </div>
          <div className="grid min-w-0 gap-5 md:grid-cols-3">
            {content.testimonials.items.map((testimonial) => (
              <article
                key={testimonial.attribution}
                className="w-full min-w-0 rounded-[8px] border border-[#0f3520]/10 bg-white p-6 shadow-[0_14px_40px_rgba(15,53,32,0.05)] sm:p-7"
              >
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
                {content.finalCta.headline}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#11251b]/70">{content.finalCta.body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ArrowLink href={content.finalCta.primaryCta.href}>{content.finalCta.primaryCta.label}</ArrowLink>
              <ArrowLink href={content.finalCta.secondaryCta.href} variant="secondary">
                {content.finalCta.secondaryCta.label}
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .product-feature-proof-track {
          animation: product-feature-proof-marquee 60s linear infinite;
        }
        @keyframes product-feature-proof-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .product-feature-proof-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </div>
  )
}
