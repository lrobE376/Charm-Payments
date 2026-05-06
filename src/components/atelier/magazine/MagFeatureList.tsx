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
  columns?: 2 | 3
}

export function MagFeatureList({ eyebrow, headline, items, columns = 3 }: MagFeatureListProps) {
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

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [items.length])

  return (
    <section
      ref={sectionRef}
      className="bg-white border-t border-[rgba(0,0,0,0.06)]"
      style={{ padding: '96px 32px' }}
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
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap: 18,
          }}
        >
          {items.map((item, i) => {
            // First row uses pure white; subsequent rows use near-white for visual hierarchy
            const isFirstRow = i < columns
            return (
            <article
              key={item.title}
              ref={(el) => {
                itemRefs.current[i] = el
              }}
              style={{
                background: isFirstRow ? '#FFFFFF' : '#FAFAFA',
                border: '0.5px solid rgba(0,0,0,0.08)',
                padding: '24px 20px',
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
