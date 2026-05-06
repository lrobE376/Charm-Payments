// src/components/atelier/sections/WhyWeWin.tsx
'use client'

import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

type Fee = { code: string; label: string; sub?: string; value: number }

const OTHER_FEES: Fee[] = [
  { code: 'FEE-001', label: 'Discount rate', sub: 'Bundled %', value: 269.0 },
  { code: 'FEE-002', label: 'Per-transaction', sub: '120 × $0.20', value: 24.0 },
  { code: 'FEE-003', label: 'Statement fee', sub: 'Monthly', value: 12.5 },
  { code: 'FEE-004', label: 'PCI compliance', sub: 'Quarterly', value: 19.95 },
  { code: 'FEE-005', label: 'Non-qual surcharge', sub: 'Card-mix', value: 28.4 },
  { code: 'FEE-006', label: 'Batch fee', sub: 'Per close', value: 6.0 },
]

const CHARM_FEES: Fee[] = [
  { code: 'CHRG-A', label: 'Interchange', sub: 'Passthrough', value: 165.0 },
  { code: 'CHRG-B', label: 'Charm markup', sub: 'Flat', value: 25.0 },
]

const NOT_BILLED = ['— NOT BILLED —', '— NOT BILLED —', '— NOT BILLED —', '— NOT BILLED —']

const MONTHLY_DELTA = 169
const ANNUAL_DELTA = MONTHLY_DELTA * 12

const formatUSD = (n: number) =>
  `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

export function WhyWeWin() {
  const sectionRef = useRef<HTMLElement>(null)

  const otherRowRefs = useRef<(HTMLDivElement | null)[]>([])
  const otherValRefs = useRef<(HTMLSpanElement | null)[]>([])
  const charmRowRefs = useRef<(HTMLDivElement | null)[]>([])
  const charmValRefs = useRef<(HTMLSpanElement | null)[]>([])
  const otherTotalRef = useRef<HTMLSpanElement>(null)
  const charmTotalRef = useRef<HTMLSpanElement>(null)
  const deltaBandRef = useRef<HTMLDivElement>(null)
  const deltaMonthlyRef = useRef<HTMLSpanElement>(null)
  const deltaAnnualRef = useRef<HTMLSpanElement>(null)

  const otherTotal = useMemo(
    () => OTHER_FEES.reduce((s, f) => s + f.value, 0),
    [],
  )
  const charmTotal = useMemo(
    () => CHARM_FEES.reduce((s, f) => s + f.value, 0),
    [],
  )

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    const otherRows = otherRowRefs.current.filter(Boolean) as HTMLDivElement[]
    const charmRows = charmRowRefs.current.filter(Boolean) as HTMLDivElement[]
    if (otherRows.length === 0 || charmRows.length === 0) return

    if (prefersReducedMotion()) {
      ;[...otherRows, ...charmRows].forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
      OTHER_FEES.forEach((f, i) => {
        const r = otherValRefs.current[i]
        if (r) r.textContent = formatUSD(f.value)
      })
      CHARM_FEES.forEach((f, i) => {
        const r = charmValRefs.current[i]
        if (r) r.textContent = formatUSD(f.value)
      })
      if (otherTotalRef.current)
        otherTotalRef.current.textContent = formatUSD(otherTotal)
      if (charmTotalRef.current)
        charmTotalRef.current.textContent = formatUSD(charmTotal)
      if (deltaBandRef.current) deltaBandRef.current.style.opacity = '1'
      if (deltaMonthlyRef.current)
        deltaMonthlyRef.current.textContent = `$${MONTHLY_DELTA}`
      if (deltaAnnualRef.current)
        deltaAnnualRef.current.textContent = `$${ANNUAL_DELTA.toLocaleString('en-US')}/YR`
      return
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })

    tl.fromTo(
      otherRows,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.13 },
      0,
    )

    OTHER_FEES.forEach((f, i) => {
      const counter = { val: 0 }
      tl.to(
        counter,
        {
          val: f.value,
          duration: 0.5,
          ease: 'power2.out',
          onUpdate: () => {
            const r = otherValRefs.current[i]
            if (r) r.textContent = formatUSD(counter.val)
          },
        },
        i * 0.13,
      )
    })

    tl.fromTo(
      charmRows,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.13 },
      '+=0.1',
    )

    CHARM_FEES.forEach((f, i) => {
      const counter = { val: 0 }
      tl.to(
        counter,
        {
          val: f.value,
          duration: 0.5,
          ease: 'power2.out',
          onUpdate: () => {
            const r = charmValRefs.current[i]
            if (r) r.textContent = formatUSD(counter.val)
          },
        },
        `>-${0.4 + i * 0.13}`,
      )
    })

    const otherTotalCounter = { val: 0 }
    const charmTotalCounter = { val: 0 }
    tl.to(
      otherTotalCounter,
      {
        val: otherTotal,
        duration: 0.7,
        ease: 'power2.out',
        onUpdate: () => {
          if (otherTotalRef.current)
            otherTotalRef.current.textContent = formatUSD(otherTotalCounter.val)
        },
      },
      '+=0.1',
    )
    tl.to(
      charmTotalCounter,
      {
        val: charmTotal,
        duration: 0.7,
        ease: 'power2.out',
        onUpdate: () => {
          if (charmTotalRef.current)
            charmTotalRef.current.textContent = formatUSD(charmTotalCounter.val)
        },
      },
      '<',
    )

    if (deltaBandRef.current) {
      tl.fromTo(
        deltaBandRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '+=0.1',
      )
    }

    const monthly = { val: 0 }
    const annual = { val: 0 }
    tl.to(
      monthly,
      {
        val: MONTHLY_DELTA,
        duration: 1.0,
        ease: 'power2.out',
        onUpdate: () => {
          if (deltaMonthlyRef.current)
            deltaMonthlyRef.current.textContent = `$${Math.round(monthly.val)}`
        },
      },
      '<',
    )
    tl.to(
      annual,
      {
        val: ANNUAL_DELTA,
        duration: 1.0,
        ease: 'power2.out',
        onUpdate: () => {
          if (deltaAnnualRef.current)
            deltaAnnualRef.current.textContent = `$${Math.round(annual.val).toLocaleString('en-US')}/YR`
        },
      },
      '<',
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [otherTotal, charmTotal])

  return (
    <section
      ref={sectionRef}
      id="why-we-win"
      className="bg-atelier-creamWarm py-9 px-lg"
    >
      <Container>
        <div className="mb-2xl">
          <EyebrowTag section="§03" label="WHY WE WIN" />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-atelier-ink',
              'max-w-3xl',
            )}
          >
            What your processor doesn&apos;t{' '}
            <em className="italic text-atelier-forest">want you</em> to audit.
          </h2>
          <p className="text-base text-black/70 max-w-2xl mt-md leading-relaxed">
            You see every fee, every card type, every time — not a blended rate
            your processor designed to keep you from asking questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
          <article
            className={cn(
              'relative bg-white p-3.5',
              '[border-width:0.5px] border-black/20',
            )}
          >
            <header className="flex items-center justify-between gap-xs mb-base">
              <div className="flex items-baseline gap-xs">
                <span className="font-atelierMono text-[10px] uppercase tracking-label text-black/55">
                  SPECIMEN A
                </span>
                <span className="font-atelierSerif text-base text-atelier-ink">
                  The Other Guys
                </span>
              </div>
              <span
                className={cn(
                  'inline-block bg-atelier-ink text-atelier-cream',
                  'font-atelierMono text-[10px] uppercase tracking-label',
                  'px-1.5 py-0.5 rotate-2',
                )}
              >
                SAMPLE
              </span>
            </header>

            <div className="[border-top-width:0.5px] border-black/15">
              {OTHER_FEES.map((f, i) => (
                <div
                  key={f.code}
                  ref={(el) => {
                    otherRowRefs.current[i] = el
                  }}
                  className={cn(
                    'grid grid-cols-[60px_1fr_auto] items-baseline gap-xs',
                    'py-2 [border-bottom-width:0.5px] border-black/10',
                  )}
                  style={{ opacity: 0 }}
                >
                  <span className="font-atelierMono text-[10px] uppercase tracking-spec text-black/60">
                    {f.code}
                  </span>
                  <div>
                    <div className="text-sm text-atelier-ink">{f.label}</div>
                    {f.sub ? (
                      <div className="font-atelierMono text-[10px] uppercase tracking-spec text-black/60">
                        {f.sub}
                      </div>
                    ) : null}
                  </div>
                  <span
                    ref={(el) => {
                      otherValRefs.current[i] = el
                    }}
                    className="font-atelierMono text-sm text-[#A32D2D] tabular-nums"
                  >
                    $0.00
                  </span>
                </div>
              ))}
            </div>

            <footer
              className={cn(
                'mt-base pt-2 flex items-baseline justify-between',
                'border-t border-dashed border-black/30',
              )}
            >
              <span className="font-atelierMono text-[10px] uppercase tracking-label text-black/55">
                EXTRACTED
              </span>
              <span
                ref={otherTotalRef}
                className="font-atelierMono text-base font-medium text-[#A32D2D] tabular-nums"
              >
                $0.00
              </span>
            </footer>
          </article>

          <article
            className={cn(
              'relative bg-white p-3.5',
              '[border-width:0.5px] border-atelier-forest',
            )}
          >
            <span
              aria-hidden
              className="absolute left-0 top-0 bottom-0 w-[3px] bg-atelier-forest"
            />
            <header className="flex items-center justify-between gap-xs mb-base">
              <div className="flex items-baseline gap-xs">
                <span className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-forest">
                  SPECIMEN B
                </span>
                <span className="font-atelierSerif text-base text-atelier-ink">
                  Charm Payments
                </span>
              </div>
              <span
                className={cn(
                  'inline-block bg-atelier-gold text-atelier-ink',
                  'font-atelierMono text-[10px] uppercase tracking-label font-medium',
                  'px-1.5 py-0.5 -rotate-3',
                )}
              >
                VERIFIED
              </span>
            </header>

            <div className="[border-top-width:0.5px] border-atelier-forest/30">
              {CHARM_FEES.map((f, i) => (
                <div
                  key={f.code}
                  ref={(el) => {
                    charmRowRefs.current[i] = el
                  }}
                  className={cn(
                    'grid grid-cols-[60px_1fr_auto] items-baseline gap-xs',
                    'py-2 [border-bottom-width:0.5px] border-atelier-forest/15',
                  )}
                  style={{ opacity: 0 }}
                >
                  <span className="font-atelierMono text-[10px] uppercase tracking-spec text-atelier-forest/80">
                    {f.code}
                  </span>
                  <div>
                    <div className="text-sm text-atelier-forest">{f.label}</div>
                    {f.sub ? (
                      <div className="font-atelierMono text-[10px] uppercase tracking-spec text-atelier-forest/80">
                        {f.sub}
                      </div>
                    ) : null}
                  </div>
                  <span
                    ref={(el) => {
                      charmValRefs.current[i] = el
                    }}
                    className="font-atelierMono text-sm text-atelier-forest tabular-nums"
                  >
                    $0.00
                  </span>
                </div>
              ))}
              {NOT_BILLED.map((label, i) => (
                <div
                  key={`not-billed-${i}`}
                  className={cn(
                    'grid grid-cols-[60px_1fr_auto] items-baseline gap-xs',
                    'py-2 [border-bottom-width:0.5px] border-dashed border-black/10',
                  )}
                >
                  <span className="font-atelierMono text-[10px] uppercase tracking-spec text-black/30">
                    —
                  </span>
                  <span className="font-atelierMono text-[11px] uppercase tracking-spec text-black/55">
                    {label}
                  </span>
                  <span className="font-atelierMono text-sm text-black/30 tabular-nums">
                    —
                  </span>
                </div>
              ))}
            </div>

            <footer
              className={cn(
                'mt-base pt-2 flex items-baseline justify-between',
                '[border-top-width:0.5px] border-atelier-forest',
              )}
            >
              <span className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-forest">
                BILLED
              </span>
              <span
                ref={charmTotalRef}
                className="font-atelierMono text-base font-medium text-atelier-forest tabular-nums"
              >
                $0.00
              </span>
            </footer>
          </article>
        </div>

        <div
          ref={deltaBandRef}
          className={cn(
            'mt-base bg-atelier-ink text-atelier-cream',
            'py-3 px-lg',
            'flex flex-col md:flex-row md:items-center md:justify-between gap-xs',
          )}
          style={{ opacity: 0 }}
        >
          <div>
            <div className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-gold">
              DELTA · MONTHLY
            </div>
            <div className="font-atelierSerif text-xl md:text-2xl mt-0.5">
              You keep{' '}
              <em className="italic text-atelier-gold">
                <span ref={deltaMonthlyRef}>$0</span>
              </em>{' '}
              back per month.
            </div>
          </div>
          <span
            ref={deltaAnnualRef}
            className="font-atelierMono text-sm md:text-base text-atelier-gold tracking-spec"
          >
            $0/YR
          </span>
        </div>

        <div className="text-center mt-2xl">
          <a
            href="/apply"
            className={cn(
              'inline-flex items-center gap-xs',
              'bg-atelier-ink text-atelier-cream',
              'px-md py-sm text-sm font-medium rounded-atelierXs',
              'hover:opacity-90 transition-opacity',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
            )}
          >
            Switch to Charm
          </a>
          <p className="text-xs text-black/55 font-atelierMono mt-base max-w-xl mx-auto">
            Competitors named illustratively — compare your actual statement
            side-by-side in a free rate audit.
          </p>
        </div>
      </Container>
    </section>
  )
}
