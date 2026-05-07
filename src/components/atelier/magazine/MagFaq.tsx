// src/components/atelier/magazine/MagFaq.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/lib/motion'

export type MagFaqItem = {
  q: string
  a: string
}

export type MagFaqProps = {
  eyebrow?: string
  title?: string
  items: MagFaqItem[]
}

export function MagFaq({ eyebrow, title, items }: MagFaqProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    const itemEls = itemRefs.current.filter(Boolean) as HTMLDivElement[]
    const allEls = [headerRef.current, ...itemEls].filter(Boolean) as HTMLElement[]
    if (allEls.length === 0) return

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
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })

    if (headerRef.current) {
      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
    }
    if (itemEls.length > 0) {
      tl.to(
        itemEls,
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.1 },
        '+=0.05',
      )
    }

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-apple-canvas"
      style={{ padding: '100px 32px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 800 }}>
        {(eyebrow || title) ? (
          <div ref={headerRef} className="text-center" style={{ marginBottom: 56 }}>
            {eyebrow ? (
              <div
                className="font-stripeSans"
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: 'rgba(0,0,0,0.5)',
                  marginBottom: 14,
                }}
              >
                {eyebrow}
              </div>
            ) : null}
            {title ? (
              <h2
                className="font-atelierSerif text-apple-ink"
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 38px)',
                  lineHeight: 1.05,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                {title}
              </h2>
            ) : null}
          </div>
        ) : null}

        <div role="list">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.q}
                ref={(el) => {
                  itemRefs.current[i] = el
                }}
                role="listitem"
                style={{
                  borderBottom: '0.5px solid rgba(0,0,0,0.08)',
                  borderTop: i === 0 ? '0.5px solid rgba(0,0,0,0.08)' : undefined,
                  padding: '24px 0',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="font-atelierSerif text-apple-ink w-full flex items-center justify-between gap-6 text-left transition-colors hover:text-atelier-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold"
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: 1.3,
                    background: 'transparent',
                    border: 0,
                    padding: 0,
                    cursor: 'pointer',
                  }}
                >
                  <span>{item.q}</span>
                  <svg
                    aria-hidden
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{
                      flexShrink: 0,
                      color: '#BD9952',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 300ms ease',
                    }}
                  >
                    <path
                      d="M4 7l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 500 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition:
                      'max-height 400ms ease, opacity 300ms ease, padding-top 300ms ease',
                    paddingTop: isOpen ? 16 : 0,
                  }}
                >
                  <p
                    className="font-stripeSans"
                    style={{
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: 'rgba(0,0,0,0.7)',
                      maxWidth: 680,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
