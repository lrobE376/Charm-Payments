// src/components/atelier/sections/StatsRow.tsx
'use client'

import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/atelier/Container'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

type Stat = {
  id: string
  value: number
  prefix?: string
  suffix?: string
  label: string
  sub: string
}

const STATS: Stat[] = [
  {
    id: 'merchants',
    value: 0,
    suffix: '+',
    label: 'Merchants Served',
    sub: 'St. Louis & beyond',
  },
  {
    id: 'approval',
    value: 0,
    suffix: 'hr',
    label: 'Approval Target',
    sub: 'On complete applications',
  },
  {
    id: 'setup',
    value: 0,
    prefix: '$',
    label: 'Setup Fees',
    sub: 'No cost to get started',
  },
  {
    id: 'carts',
    value: 0,
    suffix: '+',
    label: 'Cart Integrations',
    sub: 'E-commerce platforms',
  },
]

export function StatsRow() {
  const sectionRef = useRef<HTMLElement>(null)
  const stat0 = useRef<HTMLSpanElement>(null)
  const stat1 = useRef<HTMLSpanElement>(null)
  const stat2 = useRef<HTMLSpanElement>(null)
  const stat3 = useRef<HTMLSpanElement>(null)
  const refs = useMemo(() => [stat0, stat1, stat2, stat3], [])

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
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    })

    refs.forEach((r, i) => {
      const counter = { val: 0 }
      tl.to(
        counter,
        {
          val: STATS[i].value,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => {
            if (r.current)
              r.current.textContent = String(Math.round(counter.val))
          },
        },
        i * 0.15,
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
      id="stats"
      className={cn(
        'bg-white',
        '[border-bottom-width:0.5px] border-black/[0.08]',
        'py-7 px-lg',
      )}
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.id}
              className={cn(
                'px-md py-1',
                i < STATS.length - 1 &&
                  'md:[border-right-width:0.5px] md:border-black/10',
              )}
            >
              <div
                className={cn(
                  'font-atelierSerif text-3xl md:text-4xl font-medium',
                  'text-atelier-gold leading-none tracking-[-0.02em]',
                )}
              >
                {s.prefix ?? ''}
                <span ref={refs[i]}>0</span>
                {s.suffix ?? ''}
              </div>
              <div className="mt-2 font-atelierSans text-sm text-atelier-ink">
                {s.label}
              </div>
              <div className="text-xs text-black/55 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
