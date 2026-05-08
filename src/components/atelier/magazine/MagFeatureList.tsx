// src/components/atelier/magazine/MagFeatureList.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/lib/motion'
import { renderTitle } from './_renderTitle'

export type MagFeatureListItem = {
  figLabel: string
  title: string
  description: string
}

export type MagFeatureListProps = {
  eyebrow: string
  headline: string
  items: MagFeatureListItem[]
  columns?: 2 | 3 | 6
}

export function MagFeatureList({ eyebrow, headline, items, columns = 3 }: MagFeatureListProps) {
  // 6-up mode: items.length === 6 OR columns === 6 â€” visually 3-col grid with 2 rows + compact treatment
  const isSixUp = columns === 6 || items.length === 6
  const visualCols = isSixUp ? 3 : columns
  const cardPadding = isSixUp ? '20px 18px' : '24px 20px'
  const firstRowCount = isSixUp ? 3 : visualCols
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    const allEls = [headerRef.current, ...itemRefs.current.filter(Boolean)].filter(Boolean) as HTMLElement[]

    if (prefersReducedMotion()) {
      allEls.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const ctx = gsap.context(() => {
      allEls.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(12px)'
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
        itemRefs.current.filter(Boolean),
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.1 },
        '+=0.05',
      )
    }, section)

    return () => ctx.revert()
  }, [items.length])

  return (
    <section
      ref={sectionRef}
      className="bg-apple-canvas"
      style={{ padding: '96px 32px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div ref={headerRef} style={{ marginBottom: 64 }}>
          {(() => {
            const isSection = eyebrow.trim().startsWith('Â§')
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
          style={{
            gridTemplateColumns: `repeat(${visualCols}, minmax(0, 1fr))`,
            gap: 18,
          }}
        >
          {items.map((item, i) => {
            // First row uses pure white; subsequent rows use near-white for visual hierarchy
            const isFirstRow = i < firstRowCount
            return (
            <article
              key={item.title}
              ref={(el) => {
                itemRefs.current[i] = el
              }}
              style={{
                background: isFirstRow ? '#FFFFFF' : '#F5F4F1',
                border: '0.5px solid rgba(0,0,0,0.08)',
                padding: cardPadding,
                borderRadius: 6,
              }}
            >
              <div
                className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-gold"
                style={{ marginBottom: 12 }}
              >
                {item.figLabel}
              </div>
              <h3
                className="font-atelierSerif text-atelier-ink leading-[1.15]"
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  marginBottom: 8,
                }}
              >
                {item.title}
              </h3>
              <p
                className="font-stripeSans max-w-[260px]"
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: 'rgba(0,0,0,0.6)',
                }}
              >
                {item.description}
              </p>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}



