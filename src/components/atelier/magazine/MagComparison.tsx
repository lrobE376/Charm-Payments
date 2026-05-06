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

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="border-t border-[rgba(0,0,0,0.06)]"
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
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}
        >
          {/* Theirs — neutral border */}
          <div
            ref={theirsRef}
            className="bg-white"
            style={{ padding: '32px 28px', border: '0.5px solid rgba(0,0,0,0.12)' }}
          >
            <div className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-ink-soft">
              {theirs.label}
            </div>
            <h3
              className="font-atelierSerif text-atelier-ink"
              style={{
                marginTop: 6,
                fontSize: 22,
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              {theirs.title}
            </h3>
            <ul className="space-y-2.5" style={{ marginTop: 22 }}>
              {theirs.items.map((item) => (
                <li
                  key={item}
                  className={cn('flex items-start gap-2.5 font-stripeSans')}
                  style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(26,26,26,0.7)' }}
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

          {/* Ours — forest border */}
          <div
            ref={oursRef}
            className="bg-white"
            style={{ padding: '32px 28px', border: '1px solid var(--atelier-forest)' }}
          >
            <div className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-forest">
              {ours.label}
            </div>
            <h3
              className="font-atelierSerif text-atelier-ink"
              style={{
                marginTop: 6,
                fontSize: 22,
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              {ours.title}
            </h3>
            <ul className="space-y-2.5" style={{ marginTop: 22 }}>
              {ours.items.map((item) => (
                <li
                  key={item}
                  className={cn('flex items-start gap-2.5 font-stripeSans')}
                  style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(26,26,26,0.85)' }}
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
