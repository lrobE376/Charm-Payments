// src/components/atelier/magazine/MagThreeCardRow.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'
import { renderTitle } from './_renderTitle'

export type MagThreeCard = {
  figLabel: string
  title: string
  description: string
}

export type MagThreeCardRowProps = {
  eyebrow: string
  headline: string
  cards: MagThreeCard[]
}

export function MagThreeCardRow({ eyebrow, headline, cards }: MagThreeCardRowProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    const allEls = [headerRef.current, ...cardRefs.current.filter(Boolean)].filter(Boolean) as HTMLElement[]

    if (prefersReducedMotion()) {
      allEls.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    allEls.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(14px)'
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    if (headerRef.current) {
      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
    }

    tl.to(
      cardRefs.current.filter(Boolean),
      { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.18 },
      '+=0.05',
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [cards.length])

  return (
    <section
      ref={sectionRef}
      style={{ padding: '96px 32px', background: '#FAFAFA' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div ref={headerRef} style={{ marginBottom: 56 }}>
          <div className="font-atelierMono text-xs uppercase tracking-label text-atelier-gold">
            {eyebrow}
          </div>
          <h2
            className="font-atelierSerif text-atelier-ink"
            style={{
              marginTop: 16,
              fontSize: 'clamp(32px, 3.6vw, 44px)',
              lineHeight: 1.05,
              fontWeight: 400,
              letterSpacing: '-0.02em',
              maxWidth: 720,
            }}
          >
            {renderTitle(headline)}
          </h2>
        </div>

        <div
          className="grid"
          style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 18 }}
        >
          {cards.map((card, i) => (
            <article
              key={card.title}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className={cn(
                'bg-white',
                '[border-width:0.5px] border-black/10',
              )}
              style={{ padding: '28px 24px' }}
            >
              <div
                className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-gold"
                style={{ marginBottom: 18 }}
              >
                {card.figLabel}
              </div>
              <h3
                className="font-atelierSerif text-atelier-ink"
                style={{ fontSize: 19, lineHeight: 1.25, fontWeight: 400, marginBottom: 10 }}
              >
                {card.title}
              </h3>
              <p
                className="font-stripeSans"
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: 'rgba(26,26,26,0.6)',
                }}
              >
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
