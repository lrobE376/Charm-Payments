// src/components/atelier/charm-defense/DefenseIncluded.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { SpecCard } from '@/components/atelier/SpecCard'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

const FEATURES = [
  {
    id: 'alerts',
    title: 'Real-time chargeback alerts',
    description:
      'Visa and Mastercard alerts intercept disputes before they post. Stay below the 1% threshold and protect your processing eligibility — automatically.',
  },
  {
    id: 'evidence',
    title: 'Automated evidence packets',
    description:
      'Charm pulls every relevant data point — transaction logs, customer history, shipping confirmation, IP, device fingerprint — and assembles a complete, optimized dispute response.',
  },
  {
    id: 'friendly-fraud',
    title: 'Friendly-fraud prevention',
    description:
      'Block known digital shoplifters before they ship. Every Charm merchant benefits from the network — repeat offenders flagged across thousands of accounts.',
  },
  {
    id: 'managed',
    title: 'Fully managed end-to-end',
    description:
      "From the first alert to the final recovery. You get a notification when we win — that's the only thing on your plate.",
  },
]

export function DefenseIncluded() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardWrapRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return
    const els = cardWrapRefs.current.filter(Boolean) as HTMLDivElement[]
    if (els.length === 0) return

    if (prefersReducedMotion()) {
      els.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
      return
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    })

    tl.fromTo(
      els,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08 },
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-atelier-creamWarm py-9 px-lg">
      <Container>
        <div className="mb-2xl">
          <EyebrowTag section="§" label="WHAT'S INCLUDED" />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-atelier-ink',
              'max-w-3xl',
            )}
          >
            Four things, all{' '}
            <em className="italic text-atelier-forest">in your account.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
          {FEATURES.map((f, i) => (
            <div
              key={f.id}
              ref={(el) => {
                cardWrapRefs.current[i] = el
              }}
              style={{ opacity: 0 }}
            >
              <SpecCard
                title={f.title}
                description={f.description}
                badge="INCLUDED"
                badgeColor="gold"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
