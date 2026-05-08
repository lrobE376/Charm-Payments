// src/components/atelier/magazine/MagFinalCta.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'
import type { HeadlineLine, MagHeroVariant } from './MagHero'

export type MagFinalCtaProps = {
  eyebrow: string
  headlineLines: HeadlineLine[]
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  gradientVariant: MagHeroVariant
  disclaimer?: string
}

const FINAL_BLOB: Record<MagHeroVariant, { color: string }> = {
  home: {
    color: 'radial-gradient(closest-side, rgba(30,92,53,0.12) 0%, rgba(189,153,82,0.06) 50%, transparent 75%)',
  },
  'solutions-restaurants': {
    color: 'radial-gradient(closest-side, rgba(189,153,82,0.12) 0%, rgba(30,92,53,0.04) 50%, transparent 75%)',
  },
  defense: {
    color: 'radial-gradient(closest-side, rgba(42,191,160,0.12) 0%, rgba(30,92,53,0.06) 50%, transparent 75%)',
  },
  feature: {
    color: 'radial-gradient(closest-side, rgba(245,242,234,0.55) 0%, rgba(189,153,82,0.04) 50%, transparent 75%)',
  },
}

function renderHeadlineLine(line: HeadlineLine, italRef: React.RefObject<HTMLSpanElement | null> | null) {
  const baseClass = line.italic ? 'italic' : ''
  if (line.italicTarget) {
    const idx = line.text.indexOf(line.italicTarget)
    if (idx === -1) return <span className={baseClass}>{line.text}</span>
    const before = line.text.slice(0, idx)
    const target = line.text.slice(idx, idx + line.italicTarget.length)
    const after = line.text.slice(idx + line.italicTarget.length)
    return (
      <span className={baseClass}>
        {before}
        <em
          ref={italRef ?? undefined}
          className="italic"
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

export function MagFinalCta({
  eyebrow,
  headlineLines,
  subtitle,
  primaryCta,
  secondaryCta,
  gradientVariant,
  disclaimer,
}: MagFinalCtaProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<(HTMLDivElement | null)[]>([])
  const italRefs = useRef<(HTMLSpanElement | null)[]>([])
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    const els = [
      eyebrowRef.current,
      ...lineRefs.current.filter(Boolean),
      subtitleRef.current,
      ctasRef.current,
    ].filter(Boolean) as HTMLElement[]

    if (prefersReducedMotion()) {
      els.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      italRefs.current.forEach((el) => {
        if (el) el.style.color = 'var(--atelier-forest)'
      })
      return
    }

    const ctx = gsap.context(() => {
      els.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(14px)'
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      if (eyebrowRef.current) {
        tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
      }

      lineRefs.current.forEach((lineEl) => {
        if (!lineEl) return
        tl.to(lineEl, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '+=0.05')
      })

      italRefs.current.forEach((italEl) => {
        if (!italEl) return
        tl.to(italEl, { color: 'var(--atelier-forest)', duration: 0.7, ease: 'power2.out' }, '+=0.1')
      })

      if (subtitleRef.current) {
        tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '+=0.05')
      }
      if (ctasRef.current) {
        tl.to(ctasRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.05')
      }

      // Refinement 7: after the headline finishes, sweep italic-target color forest â†’ gold
      italRefs.current.forEach((italEl) => {
        if (!italEl) return
        tl.to(
          italEl,
          { color: 'var(--atelier-gold)', duration: 0.5, ease: 'power2.inOut' },
          '+=0.2',
        )
      })
    }, section)

    return () => ctx.revert()
  }, [headlineLines.length])

  const blob = FINAL_BLOB[gradientVariant]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-apple-canvas-warm"
      style={{ padding: '100px 32px 140px' }}
    >
      {/* Bottom gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: 900,
          height: 900,
          bottom: -380,
          left: '50%',
          transform: 'translateX(-50%)',
          background: blob.color,
          filter: 'blur(2px)',
        }}
      />

      <div className="relative mx-auto text-center" style={{ maxWidth: 760 }}>
        {(() => {
          const isSection = eyebrow.trim().startsWith('Â§')
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

        <h2
          className="font-atelierSerif text-apple-ink"
          style={{
            fontSize: 'clamp(36px, 4.6vw, 50px)',
            lineHeight: 1,
            fontWeight: 500,
            letterSpacing: '-0.03em',
          }}
        >
          {headlineLines.map((line, i) => (
            <div
              key={i}
              ref={(el) => {
                lineRefs.current[i] = el
              }}
              style={{ display: 'block' }}
            >
              {renderHeadlineLine(
                line,
                line.italicTarget
                  ? ({ current: italRefs.current[i] ?? null } as React.RefObject<HTMLSpanElement | null>)
                  : null,
              )}
            </div>
          ))}
        </h2>

        <p
          ref={subtitleRef}
          className="font-stripeSans mx-auto"
          style={{
            marginTop: 28,
            fontSize: 17,
            lineHeight: 1.6,
            maxWidth: 600,
            color: 'rgba(0,0,0,0.72)',
          }}
        >
          {subtitle}
        </p>

        <div
          ref={ctasRef}
          className="flex flex-wrap gap-3 justify-center"
          style={{ marginTop: 40 }}
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
            <span aria-hidden>â†’</span>
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

        {disclaimer ? (
          <p
            className="font-stripeSans mx-auto"
            style={{
              marginTop: 40,
              fontSize: 12,
              lineHeight: 1.6,
              maxWidth: 640,
              color: 'rgba(0,0,0,0.5)',
            }}
          >
            {disclaimer}
          </p>
        ) : null}
      </div>
    </section>
  )
}



