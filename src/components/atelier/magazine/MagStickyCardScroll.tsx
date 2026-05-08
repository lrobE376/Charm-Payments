// src/components/atelier/magazine/MagStickyCardScroll.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/lib/motion'
import { renderTitle } from './_renderTitle'

export type MagStickyCardScrollCard = {
  fig: string
  title: string
  description: string
  image?: string
  imageAlt?: string
}

export type MagStickyCardScrollProps = {
  eyebrow?: string
  headline: string
  body?: string
  counter?: { value: string; label: string }
  cards: MagStickyCardScrollCard[]
}

function parseCounterTarget(value: string): { numeric: number | null; suffix: string; prefix: string } {
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/)
  if (!match) return { numeric: null, suffix: '', prefix: '' }
  const [, prefix, num, suffix] = match
  const cleanNum = num.replace(/,/g, '')
  const parsed = parseFloat(cleanNum)
  if (isNaN(parsed)) return { numeric: null, suffix: '', prefix: '' }
  return { numeric: parsed, suffix, prefix }
}

export function MagStickyCardScroll({
  eyebrow,
  headline,
  body,
  counter,
  cards,
}: MagStickyCardScrollProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    const cardEls = cardRefs.current.filter(Boolean) as HTMLDivElement[]
    const reduced = prefersReducedMotion()

    if (reduced) {
      cardEls.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      if (counterRef.current && counter) {
        counterRef.current.textContent = counter.value
      }
      return
    }

    cardEls.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
    })

    const triggers: ScrollTrigger[] = []

    cardEls.forEach((el, i) => {
      const t = gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power2.out',
        delay: i * 0.08,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
      if (t.scrollTrigger) triggers.push(t.scrollTrigger)
    })

    let counterTl: gsap.core.Timeline | null = null
    if (counter && counterRef.current) {
      const { numeric, prefix, suffix } = parseCounterTarget(counter.value)
      const el = counterRef.current
      if (numeric !== null) {
        const obj = { val: 0 }
        el.textContent = `${prefix}0${suffix}`
        const isInt = Number.isInteger(numeric)
        counterTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        })
        counterTl.to(obj, {
          val: numeric,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => {
            const formatted = isInt
              ? Math.round(obj.val).toLocaleString('en-US')
              : obj.val.toFixed(2)
            el.textContent = `${prefix}${formatted}${suffix}`
          },
        })
        if (counterTl.scrollTrigger) triggers.push(counterTl.scrollTrigger)
      } else {
        el.textContent = counter.value
      }
    }

    return () => {
      triggers.forEach((t) => t.kill())
      if (counterTl) counterTl.kill()
    }
  }, [counter])

  const minHeight = cards.length <= 3 ? 1400 : 1400 + (cards.length - 3) * 200

  return (
    <section
      ref={sectionRef}
      className="bg-apple-canvas"
      style={{ padding: '100px 32px', minHeight }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 56,
          }}
        >
          {/* Sticky text column */}
          <div className="sticky-text-col">
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
              {renderTitle(headline)}
            </h2>

            {body ? (
              <p
                className="font-stripeSans"
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: 'rgba(0,0,0,0.7)',
                  maxWidth: 440,
                }}
              >
                {body}
              </p>
            ) : null}

            {counter ? (
              <div style={{ marginTop: 32 }}>
                <div
                  ref={counterRef}
                  className="font-atelierSerif"
                  style={{
                    fontSize: 'clamp(48px, 6vw, 64px)',
                    lineHeight: 1,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: '#1E5C35',
                  }}
                >
                  {counter.value}
                </div>
                <div
                  className="font-stripeSans"
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    color: 'rgba(0,0,0,0.5)',
                  }}
                >
                  {counter.label}
                </div>
              </div>
            ) : null}
          </div>

          {/* Cards column */}
          <div className="flex flex-col" style={{ gap: 24 }}>
            {cards.map((card, i) => (
              <div
                key={card.title + i}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                style={{
                  background: '#FFFFFF',
                  border: '0.5px solid rgba(0,0,0,0.08)',
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <div
                  aria-hidden
                  style={{
                    aspectRatio: '16 / 10',
                    width: '100%',
                    border: '1px dashed rgba(0,0,0,0.18)',
                    borderRadius: 12,
                    background:
                      'repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0 8px, transparent 8px 16px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(0,0,0,0.25)',
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: 18,
                  }}
                >
                  {card.image ? null : 'IMAGE'}
                </div>
                <div
                  className="font-stripeSans"
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    color: 'rgba(0,0,0,0.45)',
                    marginBottom: 8,
                  }}
                >
                  {card.fig}
                </div>
                <h3
                  className="font-atelierSerif text-apple-ink"
                  style={{
                    fontSize: 20,
                    lineHeight: 1.15,
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-stripeSans"
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: 'rgba(0,0,0,0.7)',
                    margin: '10px 0 0 0',
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .sticky-text-col {
          position: sticky;
          top: 80px;
          height: 480px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 768px) {
          section {
            min-height: 0 !important;
          }
          .sticky-text-col {
            position: static !important;
            height: auto !important;
          }
          .grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}



