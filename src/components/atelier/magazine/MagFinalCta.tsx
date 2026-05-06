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
}

const FINAL_BLOB: Record<MagHeroVariant, { color: string }> = {
  home: {
    color: 'radial-gradient(closest-side, rgba(30,92,53,0.075) 0%, rgba(189,153,82,0.04) 50%, transparent 75%)',
  },
  'solutions-restaurants': {
    color: 'radial-gradient(closest-side, rgba(189,153,82,0.09) 0%, rgba(30,92,53,0.03) 50%, transparent 75%)',
  },
  defense: {
    color: 'radial-gradient(closest-side, rgba(42,191,160,0.075) 0%, rgba(30,92,53,0.045) 50%, transparent 75%)',
  },
  feature: {
    color: 'radial-gradient(closest-side, rgba(245,242,234,0.42) 0%, rgba(189,153,82,0.03) 50%, transparent 75%)',
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

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [headlineLines.length])

  const blob = FINAL_BLOB[gradientVariant]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      style={{ padding: '120px 32px' }}
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
        <div
          ref={eyebrowRef}
          className="font-atelierMono text-xs uppercase tracking-label text-atelier-gold"
          style={{ marginBottom: 24 }}
        >
          {eyebrow}
        </div>

        <h2
          className="font-atelierSerif text-atelier-ink"
          style={{
            fontSize: 'clamp(36px, 4.4vw, 52px)',
            lineHeight: 1.05,
            fontWeight: 400,
            letterSpacing: '-0.02em',
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
          className="font-stripeSans text-atelier-ink-soft mx-auto"
          style={{
            marginTop: 24,
            fontSize: 17,
            lineHeight: 1.6,
            maxWidth: 600,
          }}
        >
          {subtitle}
        </p>

        <div
          ref={ctasRef}
          className="flex flex-wrap gap-3 justify-center"
          style={{ marginTop: 36 }}
        >
          <Link
            href={primaryCta.href}
            className={cn(
              'inline-flex items-center gap-1.5',
              'bg-atelier-forest text-atelier-cream',
              'font-stripeSans text-sm font-medium',
              'px-4 py-2.5 rounded-atelierXs',
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
                'inline-flex items-center px-4 py-2.5 text-sm font-medium font-stripeSans',
                'border border-atelier-ink/25 text-atelier-ink rounded-atelierXs',
                'hover:border-atelier-ink/50 transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
              )}
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
