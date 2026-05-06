// src/components/atelier/magazine/MagHero.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

export type HeadlineLine = {
  text: string
  italic?: boolean
  italicTarget?: string
  size?: 'normal' | 'lg'
}

export type MagHeroVariant = 'home' | 'solutions-restaurants' | 'defense' | 'feature'

export type MagHeroProps = {
  eyebrow: string
  headlineLines: HeadlineLine[]
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  visualVariant: MagHeroVariant
  visualSlot: React.ReactNode
}

const BLOB: Record<MagHeroVariant, { color: string; pos: { top: string; left: string }; size: number }> = {
  home: {
    color: 'radial-gradient(closest-side, rgba(30,92,53,0.12) 0%, rgba(189,153,82,0.06) 45%, transparent 75%)',
    pos: { top: '-180px', left: 'calc(100% - 360px)' },
    size: 720,
  },
  'solutions-restaurants': {
    color: 'radial-gradient(closest-side, rgba(189,153,82,0.16) 0%, rgba(30,92,53,0.04) 50%, transparent 75%)',
    pos: { top: '-200px', left: '-280px' },
    size: 760,
  },
  defense: {
    color: 'radial-gradient(closest-side, rgba(42,191,160,0.10) 0%, rgba(30,92,53,0.10) 50%, transparent 75%)',
    pos: { top: 'calc(100% - 320px)', left: 'calc(100% - 480px)' },
    size: 800,
  },
  feature: {
    color: 'radial-gradient(closest-side, rgba(245,242,234,0.65) 0%, rgba(189,153,82,0.06) 50%, transparent 75%)',
    pos: { top: '-240px', left: 'calc(100% - 460px)' },
    size: 760,
  },
}

function renderHeadlineLine(line: HeadlineLine, italRef: React.RefObject<HTMLSpanElement | null> | null) {
  const baseClass = line.italic ? 'italic' : ''

  if (line.italicTarget) {
    const idx = line.text.indexOf(line.italicTarget)
    if (idx === -1) {
      return <span className={baseClass}>{line.text}</span>
    }
    const before = line.text.slice(0, idx)
    const target = line.text.slice(idx, idx + line.italicTarget.length)
    const after = line.text.slice(idx + line.italicTarget.length)
    return (
      <span className={baseClass}>
        {before}
        <em
          ref={italRef ?? undefined}
          className="italic"
          // initial color: inherit (matches surrounding ink); GSAP shifts to forest after the line lands
          style={{ color: 'inherit', display: 'inline-block' }}
        >
          {target}
        </em>
        {after}
      </span>
    )
  }

  return <span className={baseClass}>{line.text}</span>
}

export function MagHero({
  eyebrow,
  headlineLines,
  subtitle,
  primaryCta,
  secondaryCta,
  visualVariant,
  visualSlot,
}: MagHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<(HTMLDivElement | null)[]>([])
  const italRefs = useRef<(HTMLSpanElement | null)[]>([])
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (prefersReducedMotion()) {
      ;[eyebrowRef.current, ...lineRefs.current, subtitleRef.current, ctasRef.current, visualRef.current].forEach(
        (el) => {
          if (el) {
            el.style.opacity = '1'
            el.style.transform = 'none'
          }
        },
      )
      italRefs.current.forEach((el) => {
        if (el) el.style.color = 'var(--atelier-forest)'
      })
      return
    }

    // Initial state
    const animatable = [
      eyebrowRef.current,
      ...lineRefs.current.filter(Boolean),
      subtitleRef.current,
      ctasRef.current,
      visualRef.current,
    ].filter(Boolean) as HTMLElement[]

    animatable.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(12px)'
    })

    const tl = gsap.timeline({ delay: 0.05 })

    // Eyebrow — 200ms in
    if (eyebrowRef.current) {
      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.2)
    }

    // Each headline line, line-by-line cascade (400, 700, 1000ms...)
    lineRefs.current.forEach((lineEl, i) => {
      if (!lineEl) return
      tl.to(
        lineEl,
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        0.4 + i * 0.3,
      )
    })

    // Italic-target color shift: after the line containing the italic target lands, transition color to forest
    italRefs.current.forEach((italEl, i) => {
      if (!italEl) return
      tl.to(
        italEl,
        { color: 'var(--atelier-forest)', duration: 0.7, ease: 'power2.out' },
        0.4 + i * 0.3 + 0.4,
      )
    })

    const subtitleStart = 0.4 + lineRefs.current.length * 0.3 + 0.3

    if (subtitleRef.current) {
      tl.to(
        subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' },
        subtitleStart,
      )
    }

    if (ctasRef.current) {
      tl.to(
        ctasRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        subtitleStart + 0.3,
      )
    }

    if (visualRef.current) {
      tl.to(
        visualRef.current,
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        0.6,
      )
    }

    return () => {
      tl.kill()
    }
  }, [headlineLines.length])

  const blob = BLOB[visualVariant]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-apple-canvas"
      style={{ padding: '100px 32px' }}
    >
      {/* Page-specific gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: blob.size,
          height: blob.size,
          top: blob.pos.top,
          left: blob.pos.left,
          background: blob.color,
          filter: 'blur(2px)',
        }}
      />

      <div className="relative mx-auto" style={{ maxWidth: 1280 }}>
        <div
          className="grid gap-x-16 gap-y-12 items-start"
          style={{
            gridTemplateColumns: 'minmax(0, 1fr) 360px',
          }}
        >
          {/* Copy column */}
          <div>
            {(() => {
              const isSection = eyebrow.trim().startsWith('§')
              const eyebrowClass = isSection
                ? 'font-atelierMono text-xs uppercase tracking-label text-atelier-gold'
                : 'font-stripeSans'
              const eyebrowStyle: React.CSSProperties = isSection
                ? { marginBottom: 24 }
                : {
                    marginBottom: 24,
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    color: 'rgba(0,0,0,0.5)',
                  }
              return (
                <div ref={eyebrowRef} className={eyebrowClass} style={eyebrowStyle}>
                  {eyebrow}
                </div>
              )
            })()}

            <h1
              className="font-atelierSerif text-apple-ink"
              style={{
                fontSize: 'clamp(34px, 4vw, 48px)',
                lineHeight: 1,
                fontWeight: 500,
                letterSpacing: '-0.025em',
              }}
            >
              {headlineLines.map((line, i) => {
                const lineStyle: React.CSSProperties = { display: 'block' }
                if (line.size === 'lg') {
                  lineStyle.fontSize = 'clamp(40px, 5.4vw, 64px)'
                  lineStyle.lineHeight = 0.96
                  lineStyle.letterSpacing = '-0.03em'
                }
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      lineRefs.current[i] = el
                    }}
                    style={lineStyle}
                  >
                    {renderHeadlineLine(line, line.italicTarget ? { current: italRefs.current[i] ?? null } as React.RefObject<HTMLSpanElement | null> : null)}
                  </div>
                )
              })}
            </h1>

            <p
              ref={subtitleRef}
              className="font-stripeSans"
              style={{
                marginTop: 24,
                fontSize: 17,
                lineHeight: 1.6,
                maxWidth: 480,
                color: 'rgba(0,0,0,0.72)',
              }}
            >
              {subtitle}
            </p>

            <div
              ref={ctasRef}
              className="flex flex-wrap gap-3"
              style={{ marginTop: 36 }}
            >
              <Link
                href={primaryCta.href}
                className={cn(
                  'inline-flex items-center gap-1.5',
                  'bg-atelier-forest text-white',
                  'font-stripeSans text-sm font-medium',
                  'px-6 py-3 rounded-pill',
                  'hover:opacity-90 transition-opacity',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                )}
              >
                {primaryCta.label}
                <span aria-hidden>→</span>
              </Link>
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className={cn(
                    'inline-flex items-center px-[22px] py-[11px] text-sm font-medium font-stripeSans',
                    'border border-black/[0.18] text-apple-ink rounded-pill',
                    'hover:border-black/40 transition-colors',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                  )}
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          {/* Visual column */}
          <div ref={visualRef}>{visualSlot}</div>
        </div>
      </div>
    </section>
  )
}
