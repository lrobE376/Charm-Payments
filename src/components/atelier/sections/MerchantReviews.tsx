// src/components/atelier/sections/MerchantReviews.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { SpecCard } from '@/components/atelier/SpecCard'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

const TESTIMONIALS = [
  {
    id: 'metro-auto',
    quote:
      'Charm Payments got us live before our launch weekend. Transparent pricing finally matched what we were promised.',
    name: 'Marcus T.',
    business: 'Metro Auto Repair',
    initial: 'M',
  },
  {
    id: 'sunflower',
    quote:
      'Recurring billing just works. Support picked up on the first ring when we had a gateway question.',
    name: 'Diane R.',
    business: 'Sunflower Wellness Spa',
    initial: 'D',
  },
  {
    id: 'streamflow',
    quote:
      'We process six figures monthly without downtime. The reporting exports clean into our accounting stack.',
    name: 'James K.',
    business: 'StreamFlow Software',
    initial: 'J',
  },
]

export function MerchantReviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardWrapRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return
    const els = cardWrapRefs.current.filter(Boolean) as HTMLDivElement[]
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
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    })

    tl.fromTo(
      els,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 },
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="merchant-reviews"
      className="bg-atelier-creamWarm py-9 px-lg"
    >
      <Container>
        <div className="mb-2xl">
          <EyebrowTag section="§07" label="MERCHANT REVIEWS" />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-atelier-ink',
              'max-w-3xl',
            )}
          >
            What merchants say{' '}
            <em className="italic text-atelier-forest">after switching.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              ref={(el) => {
                cardWrapRefs.current[i] = el
              }}
              style={{ opacity: 0 }}
            >
              <SpecCard
                variant="verified"
                title=""
                badge="VERIFIED"
                focusable
                ariaLabel={`Verified testimonial from ${t.name}, ${t.business}`}
              >
                <div className="-mt-xs">
                  <p className="font-atelierSerif italic text-xs leading-relaxed text-atelier-ink">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div
                    className={cn(
                      'mt-base pt-2 flex items-center gap-xs',
                      '[border-top-width:0.5px] border-black/15',
                    )}
                  >
                    <div
                      aria-hidden
                      className={cn(
                        'w-6 h-6 rounded-full bg-atelier-forest text-atelier-cream',
                        'flex items-center justify-center',
                        'font-atelierMono text-[11px] uppercase font-medium shrink-0',
                      )}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-atelier-ink leading-tight">
                        {t.name}
                      </div>
                      <div
                        className={cn(
                          'font-atelierMono text-[10px] uppercase tracking-spec',
                          'text-black/55',
                        )}
                      >
                        {t.business}
                      </div>
                    </div>
                  </div>
                </div>
              </SpecCard>
            </div>
          ))}
        </div>

        <p
          className={cn(
            'text-center mt-2xl',
            'font-atelierMono text-xs text-black/60 tracking-[0.05em]',
          )}
        >
          Testimonials are illustrative. Individual merchant results may vary.
        </p>
      </Container>
    </section>
  )
}
