// src/components/atelier/magazine/MagComparison.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'
import { renderTitle } from './_renderTitle'

export type MagComparisonProps = {
  eyebrow: string
  headline: string
  theirs: { label: string; title: string; items: string[] }
  ours: { label: string; title: string; items: string[] }
}

export function MagComparison({ eyebrow, headline, theirs, ours }: MagComparisonProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const theirsRef = useRef<HTMLDivElement>(null)
  const oursRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    const els = [headerRef.current, theirsRef.current, oursRef.current].filter(Boolean) as HTMLElement[]

    if (prefersReducedMotion()) {
      els.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        headerRef.current.style.opacity = '0'
        headerRef.current.style.transform = 'translateY(14px)'
      }
      if (theirsRef.current) {
        theirsRef.current.style.opacity = '0'
        theirsRef.current.style.transform = 'translateX(-18px)'
      }
      if (oursRef.current) {
        oursRef.current.style.opacity = '0'
        oursRef.current.style.transform = 'translateX(18px)'
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })

      if (headerRef.current) {
        tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
      }
      if (theirsRef.current) {
        tl.to(theirsRef.current, { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out' }, '+=0.05')
      }
      if (oursRef.current) {
        tl.to(oursRef.current, { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out' }, '-=0.35')
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-apple-canvas"
      style={{ padding: '100px 32px' }}
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
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}
        >
          {/* Theirs — neutral border, transparent canvas bg */}
          <div
            ref={theirsRef}
            className="bg-apple-canvas"
            style={{ padding: '36px 32px', border: '0.5px solid rgba(0,0,0,0.10)', borderRadius: 16 }}
          >
            <div
              className="font-stripeSans"
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: 'rgba(0,0,0,0.5)',
              }}
            >
              {theirs.label}
            </div>
            <h3
              className="font-atelierSerif text-apple-ink"
              style={{
                marginTop: 8,
                fontSize: 24,
                lineHeight: 1.2,
                fontWeight: 500,
                letterSpacing: '-0.015em',
              }}
            >
              {theirs.title}
            </h3>
            <ul className="space-y-2.5" style={{ marginTop: 24 }}>
              {theirs.items.map((item) => (
                <li
                  key={item}
                  className={cn('flex items-start gap-2.5 font-stripeSans')}
                  style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(0,0,0,0.7)' }}
                >
                  <span
                    aria-hidden
                    style={{
                      display: 'inline-flex',
                      width: 16,
                      height: 16,
                      flexShrink: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 2,
                      color: 'rgba(0,0,0,0.35)',
                      fontSize: 14,
                    }}
                  >
                    ×
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ours — forest border, transparent canvas bg */}
          <div
            ref={oursRef}
            className="bg-apple-canvas"
            style={{ padding: '36px 32px', border: '1.5px solid #1E5C35', borderRadius: 16 }}
          >
            <div
              className="font-stripeSans"
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#1E5C35',
              }}
            >
              {ours.label}
            </div>
            <h3
              className="font-atelierSerif text-apple-ink"
              style={{
                marginTop: 8,
                fontSize: 24,
                lineHeight: 1.2,
                fontWeight: 500,
                letterSpacing: '-0.015em',
              }}
            >
              {ours.title}
            </h3>
            <ul className="space-y-2.5" style={{ marginTop: 24 }}>
              {ours.items.map((item) => (
                <li
                  key={item}
                  className={cn('flex items-start gap-2.5 font-stripeSans')}
                  style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(0,0,0,0.85)' }}
                >
                  <span
                    aria-hidden
                    style={{
                      display: 'inline-flex',
                      width: 16,
                      height: 16,
                      flexShrink: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 2,
                      color: 'var(--atelier-forest)',
                      fontSize: 14,
                    }}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
