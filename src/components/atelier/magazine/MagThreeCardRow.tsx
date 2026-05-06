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
      className="bg-apple-canvas"
      style={{ padding: '90px 32px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div ref={headerRef} style={{ marginBottom: 64 }}>
          {(() => {
            const isSection = eyebrow.trim().startsWith('§')
            const eyebrowClass = isSection
              ? 'font-atelierMono text-xs uppercase tracking-label text-atelier-gold'
              : 'font-stripeSans'
            const eyebrowStyle: React.CSSProperties = isSection
              ? {}
              : { fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(0,0,0,0.5)' }
            return (
              <div className={eyebrowClass} style={eyebrowStyle}>
                {eyebrow}
              </div>
            )
          })()}
          <h2
            className="font-atelierSerif text-apple-ink"
            style={{
              marginTop: 16,
              fontSize: 'clamp(32px, 3.6vw, 44px)',
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              maxWidth: 720,
            }}
          >
            {renderTitle(headline)}
          </h2>
        </div>

        <div
          className="grid"
          style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 32 }}
        >
          {cards.map((card, i) => (
            <article
              key={card.title}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className={cn('bg-transparent')}
            >
              <div
                className="font-stripeSans"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: 'rgba(0,0,0,0.45)',
                  marginBottom: 18,
                }}
              >
                {card.figLabel}
              </div>
              <h3
                className="font-atelierSerif text-apple-ink leading-[1.15]"
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  marginBottom: 12,
                }}
              >
                {card.title}
              </h3>
              <p
                className="font-stripeSans max-w-[280px]"
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: 'rgba(0,0,0,0.7)',
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
