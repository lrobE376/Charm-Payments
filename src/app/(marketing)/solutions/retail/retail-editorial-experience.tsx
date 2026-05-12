'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BarChart3, ShieldCheck, Store } from 'lucide-react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

function useRevealOnce<T extends HTMLElement>(rootMargin = '0px 0px -12% 0px') {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reduceMotion, rootMargin])

  return { ref, visible, reduceMotion }
}

function RevealBlock({ children, className, delay = 0, y = 24 }: RevealProps) {
  const { ref, visible, reduceMotion } = useRevealOnce<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : y }}
      transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

const howItWorks = [
  {
    step: '01',
    title: 'Accept payments anywhere',
    copy: 'Take payments in-store, online, and on the go without changing your workflow.',
  },
  {
    step: '02',
    title: 'Manage the store',
    copy: 'See sales, payouts, fees, and support in one simple dashboard.',
  },
  {
    step: '03',
    title: 'Keep risk moving down',
    copy: 'Reduce chargebacks and fraud with clear support when issues show up.',
  },
]

const changes = [
  {
    step: '04.A',
    title: 'For every kind of retail',
    copy: 'Built for local shops, boutiques, beauty supply, sneaker shops, pop-ups, and specialty retail.',
  },
  {
    step: '04.B',
    title: 'Clear pricing',
    copy: 'No setup fees, transparent pricing, and support that keeps the business moving.',
  },
  {
    step: '04.C',
    title: 'Retail operations',
    copy: 'Payments, chargebacks, fraud review, and day-to-day support in one place.',
  },
]

const acceptedEverywhere = [
  'Virtual Terminal',
  'Recurring Billing',
  'PCI DSS',
  'Visa',
  'Mastercard',
  'Amex',
  'Discover',
  'ACH/eCheck',
  'Apple Pay',
  'Google Pay',
]

const retailSupportItems = [
  { Icon: Store, label: 'In-store, online, and mobile payments' },
  { Icon: ShieldCheck, label: 'Chargeback and fraud support' },
  { Icon: BarChart3, label: 'Reporting built for daily sales' },
]

const storeSetupPlatforms = ['Shopify', 'WooCommerce', 'WordPress']

export function RetailEditorialExperience() {
  const heroRef = useRef<HTMLElement | null>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroImageShift = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 24])

  return (
    <div className="overflow-x-clip bg-white text-[#11251b]">
      <section ref={heroRef} className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_56px_minmax(0,0.94fr)] lg:items-start">
            <div className="min-w-0">
              <RevealBlock>
                <p className="font-atelierMono text-[10px] uppercase tracking-[0.24em] text-[#0f3520]">
                  Retail payment solutions
                </p>
              </RevealBlock>

              <div className="mt-4 space-y-3 sm:space-y-4">
                {['Take Payments.', 'Manage Your Store.', 'All In One Place.'].map((line, index) => (
                  <RevealBlock key={line} delay={0.08 + index * 0.08} y={28}>
                    <h1 className="max-w-3xl font-display text-3xl font-bold leading-[0.92] tracking-[-0.02em] text-[#10251b] sm:text-4xl lg:text-[3.8rem]">
                      {line}
                    </h1>
                  </RevealBlock>
                ))}
              </div>

              <RevealBlock delay={0.28}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
                  Charm Payments helps retail businesses accept payments, manage sales, reduce chargebacks, and keep
                  operations moving from one simple platform.
                </p>
              </RevealBlock>

              <RevealBlock delay={0.38}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/quote"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-[#0f3520] bg-[#0f3520] px-5 py-3 font-stripeSans text-sm font-medium uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
                  >
                    REQUEST AUDIT
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[44px] items-center justify-center border border-black/15 bg-white px-5 py-3 font-stripeSans text-sm font-medium uppercase tracking-[0.12em] text-[#11251b] transition-colors hover:border-black/30 hover:bg-[#faf8f4]"
                  >
                    TALK TO SALES
                  </Link>
                </div>
              </RevealBlock>

              <RevealBlock delay={0.46}>
                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-[#0f3520]/82">
                  <span>No Setup Fees</span>
                  <span className="text-[#0f3520]/25">/</span>
                  <span>Transparent Pricing</span>
                  <span className="text-[#0f3520]/25">/</span>
                  <span>No Long-Term Contracts</span>
                </div>
              </RevealBlock>

              <RevealBlock delay={0.54}>
                <div className="mt-5 max-w-2xl rounded-[6px] border border-black/10 bg-[#fbfaf7] p-4 sm:p-4.5">
                  <p className="font-atelierMono text-[10px] uppercase tracking-[0.26em] text-[#0f3520]">
                    Built for retail stores
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {retailSupportItems.map(({ Icon, label }) => (
                      <div key={label} className="flex items-start gap-3">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[#0f3520]">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <p className="text-sm leading-relaxed text-black/72">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealBlock>
            </div>

            <div className="hidden self-stretch justify-center lg:flex">
              <div
                className="flex h-full items-center justify-center font-atelierMono text-[10px] uppercase tracking-[0.28em] text-[#0f3520]/65"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                FIG. 01 - RETAIL FLOOR
              </div>
            </div>

            <div className="min-w-0">
              <RevealBlock delay={0.14} y={22}>
                <motion.div
                  style={{ y: reduceMotion ? 0 : heroImageShift }}
                  className="relative overflow-hidden border border-black/10 bg-[#f7f5ef] shadow-[0_20px_60px_rgba(17,37,27,0.12)]"
                >
                  <div className="relative aspect-[4/4.35] w-full">
                    <Image
                      src="/images/sumup-K8c091KtYXs-unsplash.jpg"
                      alt="Retail merchant checkout environment"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(16,37,27,0.12)_48%,rgba(16,37,27,0.36)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.28)_100%)] p-4 text-white backdrop-blur-[1px]">
                    <p className="font-atelierMono text-[10px] uppercase tracking-[0.24em] text-white/70">
                      Retail merchant / checkout crop
                    </p>
                  </div>
                </motion.div>
              </RevealBlock>

              <RevealBlock delay={0.3}>
                <motion.div
                  style={{ y: reduceMotion ? 0 : 10 }}
                  className="mt-3 overflow-hidden border border-black/10 bg-white shadow-[0_16px_40px_rgba(17,37,27,0.08)]"
                >
                  <div className="p-4 sm:p-5">
                    <p className="font-atelierMono text-[10px] uppercase tracking-[0.24em] text-[#0f3520]">
                      Works with your store setup
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {storeSetupPlatforms.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-full border border-black/10 bg-[#fbfaf7] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#11251b]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-black/66">
                      Connect online checkout, product pages, and store workflows without rebuilding your business.
                    </p>
                  </div>
                </motion.div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fbfaf7]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-10">
            <div className="space-y-2">
              <RevealBlock>
                <p className="font-atelierMono text-[11px] uppercase tracking-[0.3em] text-[#0f3520]">01</p>
              </RevealBlock>
              <RevealBlock delay={0.06} y={18}>
                <p className="max-w-[10rem] font-atelierMono text-[11px] uppercase leading-[1.2] tracking-[0.28em] text-[#0f3520]">
                  How it works
                </p>
              </RevealBlock>
            </div>

            <div>
              <RevealBlock delay={0.08} y={22}>
                <h2 className="max-w-3xl font-display text-3xl font-bold leading-[0.96] tracking-[-0.02em] text-[#10251b] sm:text-4xl lg:text-5xl">
                  Simple enough for the floor. Strong enough for the back office.
                </h2>
              </RevealBlock>

              <div className="mt-7 grid border-y border-black/10 md:grid-cols-3 md:divide-x md:divide-black/10">
                {howItWorks.map((item, index) => (
                  <RevealBlock key={item.step} delay={0.12 + index * 0.08} y={18}>
                    <div className={`h-full px-0 py-5 md:px-6 ${index === 0 ? 'md:pl-0' : ''} ${index === 2 ? 'md:pr-0' : ''}`}>
                      <p className="font-atelierMono text-[10px] uppercase tracking-[0.26em] text-[#0f3520]">
                        {item.step}
                      </p>
                      <h3 className="mt-4 max-w-xs font-display text-2xl font-bold leading-[0.98] text-[#10251b]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/66">{item.copy}</p>
                    </div>
                  </RevealBlock>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-10">
            <div className="space-y-2">
              <RevealBlock>
                <p className="font-atelierMono text-[11px] uppercase tracking-[0.3em] text-[#0f3520]">02</p>
              </RevealBlock>
              <RevealBlock delay={0.06} y={18}>
                <p className="max-w-[10rem] font-atelierMono text-[11px] uppercase leading-[1.2] tracking-[0.28em] text-[#0f3520]">
                  What changes
                </p>
              </RevealBlock>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-start">
              <div className="grid gap-3">
                {changes.map((item, index) => (
                  <RevealBlock key={item.step} delay={0.1 + index * 0.08} y={18}>
                    <article
                      className={`border border-black/10 bg-[#fbfaf7] p-4 shadow-[0_10px_30px_rgba(17,37,27,0.04)] ${index === 1 ? 'ml-0 sm:ml-4' : ''} ${index === 2 ? 'ml-0 sm:ml-8' : ''}`}
                    >
                      <p className="font-atelierMono text-[10px] uppercase tracking-[0.26em] text-[#0f3520]">
                        {item.step}
                      </p>
                      <h3 className="mt-4 max-w-md font-display text-2xl font-bold leading-[0.98] text-[#10251b]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-black/66">{item.copy}</p>
                    </article>
                  </RevealBlock>
                ))}
              </div>

              <RevealBlock delay={0.16} y={22}>
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="relative overflow-hidden border border-black/10 bg-[#f7f5ef] shadow-[0_18px_50px_rgba(17,37,27,0.12)]"
                  style={{ minHeight: 420, willChange: 'transform' }}
                >
                  <div className="relative h-full min-h-[420px] w-full">
                    <Image
                      src="/images/sumup-aM4vzfIsAo0-unsplash.jpg"
                      alt="Retail payment terminal on a counter"
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(16,37,27,0.1)_44%,rgba(16,37,27,0.34)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.22)_100%)] p-3 text-white">
                    <p className="font-atelierMono text-[10px] uppercase tracking-[0.24em] text-white/72">
                      Retail terminal
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/82">
                      Operational clarity without the extra noise.
                    </p>
                  </div>
                </motion.div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#0f3520] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-10">
            <div className="space-y-2">
              <RevealBlock>
                <p className="font-atelierMono text-[11px] uppercase tracking-[0.3em] text-white/68">03</p>
              </RevealBlock>
              <RevealBlock delay={0.06} y={18}>
                <p className="max-w-[10rem] font-atelierMono text-[11px] uppercase leading-[1.2] tracking-[0.28em] text-white/68">
                  Start with the audit
                </p>
              </RevealBlock>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-end">
              <div>
                <RevealBlock delay={0.08} y={22}>
                  <h2 className="max-w-3xl font-display text-3xl font-bold leading-[0.96] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                    Send the statement. See the operating picture.
                  </h2>
                </RevealBlock>
                <RevealBlock delay={0.16}>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76">
                    Charm reviews the statement, payment workflow, and chargeback exposure before asking you to onboard.
                    No fake urgency, no processor cosplay, no obligation.
                  </p>
                </RevealBlock>
              </div>

              <RevealBlock delay={0.18}>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link
                    href="/quote"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-white bg-white px-5 py-3 font-stripeSans text-sm font-medium uppercase tracking-[0.12em] text-[#0f3520] transition-opacity hover:opacity-90"
                  >
                    REQUEST AUDIT
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[44px] items-center justify-center border border-white/20 bg-transparent px-5 py-3 font-stripeSans text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:border-white/40 hover:bg-white/[0.08]"
                  >
                    TALK TO CHARM
                  </Link>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-atelierMono text-[10px] uppercase tracking-[0.32em] text-[#0f3520]">
              Accepted everywhere
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-black/68 sm:text-xs">
              {acceptedEverywhere.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
