// src/components/atelier/feature-template/FeatureTierCards.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

export type TierCard = {
  name: string
  price?: string
  priceCaption?: string
  description: string
  features: string[]
  cta?: { label: string; href: string }
  variant?: 'standard' | 'inverted'
  badge?: string
}

export type FeatureTierCardsProps = {
  eyebrow: string
  title: string
  tiers: TierCard[]
}

function renderTitle(title: string) {
  if (!title.includes('{')) return title
  const parts: React.ReactNode[] = []
  const regex = /\{([^}]+)\}/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = regex.exec(title)) !== null) {
    if (match.index > lastIndex) parts.push(title.slice(lastIndex, match.index))
    parts.push(
      <em key={key++} className="italic text-atelier-forest">
        {match[1]}
      </em>,
    )
    lastIndex = regex.lastIndex
  }
  if (lastIndex < title.length) parts.push(title.slice(lastIndex))
  return parts
}

export function FeatureTierCards({ eyebrow, title, tiers }: FeatureTierCardsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return
    const els = cardRefs.current.filter(Boolean) as HTMLDivElement[]
    if (els.length === 0) return

    if (prefersReducedMotion()) {
      els.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
      return
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })

    tl.fromTo(
      els,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 },
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-atelier-paper py-12 md:py-16 px-lg">
      <Container>
        <div className="mb-2xl">
          <EyebrowTag section="§02" label={eyebrow} />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-atelier-ink',
              'max-w-3xl',
            )}
          >
            {renderTitle(title)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
          {tiers.map((tier, i) => {
            const isInverted = tier.variant === 'inverted'
            return (
              <div
                key={tier.name}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                style={{ opacity: 0 }}
                className={cn(
                  'relative p-base rounded-atelierMd flex flex-col',
                  isInverted
                    ? 'bg-atelier-forest-deep text-atelier-cream [border-width:0.5px] border-atelier-gold/30'
                    : 'bg-white text-atelier-ink [border-width:0.5px] border-black/[0.12]',
                )}
              >
                {tier.badge ? (
                  <div
                    className={cn(
                      'inline-block self-start',
                      'font-atelierMono text-[10px] uppercase tracking-label font-medium',
                      'px-1.5 py-0.5 mb-xs',
                      isInverted
                        ? 'bg-atelier-gold text-atelier-ink'
                        : 'bg-atelier-forest text-atelier-cream',
                    )}
                  >
                    {tier.badge}
                  </div>
                ) : null}

                <h3
                  className={cn(
                    'font-atelierSerif text-xl font-medium leading-tight',
                    isInverted ? 'text-atelier-cream' : 'text-atelier-ink',
                  )}
                >
                  {tier.name}
                </h3>

                {tier.price ? (
                  <div className="mt-xs">
                    <div
                      className={cn(
                        'font-atelierSerif text-2xl md:text-3xl font-medium leading-none',
                        isInverted ? 'text-atelier-gold' : 'text-atelier-forest',
                      )}
                    >
                      {tier.price}
                    </div>
                    {tier.priceCaption ? (
                      <div
                        className={cn(
                          'font-atelierMono text-[10px] uppercase tracking-label mt-xs',
                          isInverted ? 'text-atelier-cream/65' : 'text-atelier-ink-soft',
                        )}
                      >
                        {tier.priceCaption}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <p
                  className={cn(
                    'mt-md font-atelierSans text-sm leading-relaxed',
                    isInverted ? 'text-atelier-cream/85' : 'text-atelier-ink-soft',
                  )}
                >
                  {tier.description}
                </p>

                <ul className="mt-md space-y-2">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        'flex items-start gap-xs font-atelierSans text-sm',
                        isInverted ? 'text-atelier-cream/85' : 'text-atelier-ink',
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          'mt-0.5 shrink-0',
                          isInverted ? 'text-atelier-gold' : 'text-atelier-forest',
                        )}
                      >
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {tier.cta ? (
                  <Link
                    href={tier.cta.href}
                    className={cn(
                      'mt-base inline-flex items-center justify-center gap-xs',
                      'px-md py-sm text-sm font-medium rounded-atelierXs',
                      'transition-opacity hover:opacity-90',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                      isInverted
                        ? 'bg-atelier-gold text-atelier-ink'
                        : 'bg-atelier-forest text-atelier-cream',
                    )}
                  >
                    {tier.cta.label}
                    <span aria-hidden>↗</span>
                  </Link>
                ) : null}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
