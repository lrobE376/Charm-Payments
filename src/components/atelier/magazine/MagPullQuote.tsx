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

    if (prefersReducedMotion()) {
      els.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      if (italRef.current) italRef.current.style.color = 'var(--atelier-forest)'
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
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white border-t border-[rgba(0,0,0,0.06)]"
      style={{ padding: '96px 32px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div
          className="grid gap-9"
          style={{ gridTemplateColumns: '80px minmax(0, 1fr) 220px' }}
        >
          <div
            ref={eyebrowRef}
            className="font-atelierMono text-xs uppercase tracking-label text-atelier-gold"
            style={{ paddingTop: 6 }}
          >
            {eyebrow}
          </div>

          <blockquote
            ref={quoteRef}
            className="font-atelierSerif text-atelier-ink"
            style={{
              fontSize: 'clamp(24px, 2.6vw, 32px)',
              lineHeight: 1.25,
              fontWeight: 400,
              letterSpacing: '-0.01em',
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
            <div className="font-medium text-atelier-ink">{citeName}</div>
            <div className="text-atelier-ink-soft">{citeRole}</div>
            <div className="text-atelier-ink-soft">{citeLocation}</div>
            <div
              className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-gold"
              style={{ marginTop: 8 }}
            >
              {verifiedDate}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
