// src/components/atelier/charm-defense/DefenseNumbers.tsx
'use client'

import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

type Stat = {
  value: number
  suffix: string
  prefix?: string
  label: string
  formatter?: (n: number) => string
}

const STATS: Stat[] = [
  {
    value: 300,
    suffix: '%',
    label: 'Average increase in win rate',
  },
  {
    value: 4,
    suffix: 'X',
    label: 'ROI on every recovered dispute',
  },
  {
    value: 90,
    suffix: '%',
    label: 'Reduction in chargebacks',
  },
]

export function DefenseNumbers() {
  const sectionRef = useRef<HTMLElement>(null)
  const stat0 = useRef<HTMLSpanElement>(null)
  const stat1 = useRef<HTMLSpanElement>(null)
  const stat2 = useRef<HTMLSpanElement>(null)
  const refs = useMemo(() => [stat0, stat1, stat2], [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    if (prefersReducedMotion()) {
      refs.forEach((r, i) => {
        if (r.current) r.current.textContent = String(STATS[i].value)
      })
      return
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    refs.forEach((r, i) => {
      const counter = { val: 0 }
      tl.to(
        counter,
        {
          val: STATS[i].value,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            if (r.current) r.current.textContent = String(Math.round(counter.val))
          },
        },
        i * 0.12,
      )
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [refs])

  return (
    <section
      ref={sectionRef}
      className="bg-atelier-ink text-atelier-cream py-12 px-lg"
    >
      <Container>
        <EyebrowTag section="§" label="THE NUMBERS" variant="gold" />

        <div className="mt-2xl grid grid-cols-1 md:grid-cols-3">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                'px-md py-base text-center md:text-left',
                i > 0 && 'md:[border-left-width:0.5px] md:border-atelier-cream/15',
              )}
            >
              <div
                className={cn(
                  'font-atelierSerif text-3xl md:text-4xl font-medium',
                  'text-atelier-gold leading-none tracking-[-0.02em]',
                )}
              >
                <span ref={refs[i]}>0</span>
                {s.suffix}
              </div>
              <div className="mt-3 text-sm text-atelier-cream/75">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-2xl max-w-3xl">
          <h2
            className={cn(
              'font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em]',
            )}
          >
            Stop losing revenue to{' '}
            <em className="italic text-atelier-gold">
              disputes you should be winning.
            </em>
          </h2>
          <p className="text-base text-atelier-cream/75 mt-md leading-relaxed max-w-2xl">
            Charm Defense is included in every merchant account. The
            application is the same one. The pricing is the same one. The
            protection is automatic.
          </p>

          <div className="mt-lg flex flex-wrap gap-sm">
            <a
              href="/apply"
              className={cn(
                'inline-flex items-center gap-xs',
                'bg-atelier-gold text-atelier-ink',
                'px-md py-sm text-sm font-medium rounded-atelierXs',
                'hover:opacity-90 transition-opacity',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
              )}
            >
              Apply for a Charm account
              <span aria-hidden>↗</span>
            </a>
            <a
              href="/quote"
              className={cn(
                'inline-flex items-center px-md py-sm text-sm',
                'border border-atelier-cream/40 text-atelier-cream rounded-atelierXs',
                'hover:border-atelier-cream/70 transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
              )}
            >
              Free Rate Audit
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
