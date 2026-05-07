// src/components/atelier/magazine/MagPullQuote.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/lib/motion'

export type MagPullQuoteProps = {
  eyebrow: string
  text: string
  citeName: string
  citeRole: string
  citeLocation: string
  verifiedDate: string
  variant?: 'standard' | 'cinematic-tier2'
}

function renderQuoteWithItalicTarget(text: string, italRef: React.RefObject<HTMLSpanElement | null>) {
  // {curly-brace} portion gets the timed italic-color treatment via ref
  if (!text.includes('{')) {
    return text
  }
  const regex = /\{([^}]+)\}/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    parts.push(
      <em
        key={key++}
        ref={italRef ?? undefined}
        className="italic"
        style={{ color: 'inherit' }}
      >
        {match[1]}
      </em>,
    )
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts
}

export function MagPullQuote({
  eyebrow,
  text,
  citeName,
  citeRole,
  citeLocation,
  verifiedDate,
  variant = 'standard',
}: MagPullQuoteProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLQuoteElement>(null)
  const italRef = useRef<HTMLSpanElement>(null)
  const citeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    const els = [eyebrowRef.current, quoteRef.current, citeRef.current].filter(Boolean) as HTMLElement[]
    const isCinematic = variant === 'cinematic-tier2'
    const reduced = prefersReducedMotion()

    if (reduced) {
      els.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      if (quoteRef.current && isCinematic) {
        quoteRef.current.style.fontSize = '38px'
      }
      if (italRef.current) italRef.current.style.color = 'var(--atelier-forest)'
      return
    }

    if (isCinematic) {
      if (eyebrowRef.current) {
        eyebrowRef.current.style.opacity = '0'
        eyebrowRef.current.style.transform = 'translateY(14px)'
      }
      if (quoteRef.current) {
        quoteRef.current.style.opacity = '0'
        quoteRef.current.style.transform = 'scale(0.95)'
        quoteRef.current.style.fontSize = '30px'
      }
      if (citeRef.current) {
        citeRef.current.style.opacity = '0'
        citeRef.current.style.transform = 'translateY(14px)'
      }

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
      if (quoteRef.current) {
        tl.to(
          quoteRef.current,
          {
            opacity: 1,
            scale: 1,
            fontSize: '38px',
            duration: 1.0,
            ease: 'cubic-bezier(0.2, 0.85, 0.25, 1)',
          },
          '+=0.05',
        )
      }
      if (italRef.current) {
        tl.to(italRef.current, { color: 'var(--atelier-forest)', duration: 0.7, ease: 'power2.out' }, '+=0.1')
      }
      if (citeRef.current) {
        tl.to(citeRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.3')
      }

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }
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
      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
    }
    if (quoteRef.current) {
      tl.to(quoteRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '+=0.05')
    }
    if (italRef.current) {
      tl.to(italRef.current, { color: 'var(--atelier-forest)', duration: 0.7, ease: 'power2.out' }, '+=0.1')
    }
    if (citeRef.current) {
      tl.to(citeRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '+=0.05')
    }

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [variant])

  return (
    <section
      ref={sectionRef}
      className="bg-apple-canvas"
      style={{ padding: '100px 32px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        {/* eyebrow column removed in Apple version — quote is the focal element */}
        <div ref={eyebrowRef} className="sr-only">
          {eyebrow}
        </div>

        <div
          className="grid gap-12"
          style={{ gridTemplateColumns: 'minmax(0, 1fr) 220px' }}
        >
          <blockquote
            ref={quoteRef}
            className="font-atelierSerif text-apple-ink"
            style={{
              fontSize: 'clamp(24px, 2.8vw, 30px)',
              lineHeight: 1.25,
              fontWeight: 500,
              letterSpacing: '-0.015em',
              margin: 0,
            }}
          >
            {renderQuoteWithItalicTarget(text, italRef)}
          </blockquote>

          <div
            ref={citeRef}
            className="font-stripeSans"
            style={{ paddingTop: 6, fontSize: 13, lineHeight: 1.5 }}
          >
            <div className="font-medium text-apple-ink">{citeName}</div>
            <div style={{ color: 'rgba(0,0,0,0.6)' }}>{citeRole}</div>
            <div style={{ color: 'rgba(0,0,0,0.6)' }}>{citeLocation}</div>
            <div
              className="font-stripeSans"
              style={{
                marginTop: 12,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: 'rgba(0,0,0,0.45)',
              }}
            >
              {verifiedDate}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
