// src/components/atelier/feature-template/FeatureHowItWorks.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

export type HowItWorksStep = {
  label: string // e.g. "STEP 01"
  title: string
  description: string
}

export type HowItWorksChecklistItem = {
  title: string
  description: string
}

export type FeatureHowItWorksProps = {
  eyebrow: string
  title: string
  steps: HowItWorksStep[] // expected length 3
  checklist?: HowItWorksChecklistItem[] // optional 4 items
  checklistEyebrow?: string
}

function renderTitle(title: string) {
  // Allow rendering "Plain text {italic gold}" if surrounded by braces
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

export function FeatureHowItWorks({
  eyebrow,
  title,
  steps,
  checklist,
  checklistEyebrow,
}: FeatureHowItWorksProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const checklistRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return

    const stepEls = stepRefs.current.filter(Boolean) as HTMLDivElement[]
    const checklistEls = checklistRefs.current.filter(Boolean) as HTMLDivElement[]
    const allEls = [...stepEls, ...checklistEls]
    if (allEls.length === 0) return

    if (prefersReducedMotion()) {
      allEls.forEach((el) => {
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
      stepEls,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.1 },
    )

    if (checklistEls.length > 0) {
      tl.fromTo(
        checklistEls,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.06 },
        '+=0.1',
      )
    }

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
          {steps.map((s, i) => (
            <div
              key={s.label}
              ref={(el) => {
                stepRefs.current[i] = el
              }}
              style={{ opacity: 0 }}
              className={cn(
                'bg-white p-base',
                '[border-width:0.5px] border-black/[0.12] rounded-atelierSm',
              )}
            >
              <div className="font-atelierMono text-xs uppercase tracking-label text-atelier-gold">
                {s.label}
              </div>
              <h3 className="mt-xs font-atelierSerif text-lg font-medium text-atelier-ink leading-tight">
                {s.title}
              </h3>
              <p className="mt-xs font-atelierSans text-sm text-atelier-ink-soft leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {checklist && checklist.length > 0 ? (
          <div className="mt-2xl">
            {checklistEyebrow ? (
              <div className="font-atelierMono text-xs uppercase tracking-label text-atelier-forest mb-md">
                {checklistEyebrow}
              </div>
            ) : null}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-base gap-y-md">
              {checklist.map((item, i) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    checklistRefs.current[i] = el
                  }}
                  style={{ opacity: 0 }}
                  className="flex items-start gap-xs"
                >
                  <span aria-hidden className="text-atelier-forest mt-0.5 shrink-0">
                    ✓
                  </span>
                  <div>
                    <div className="font-atelierSans text-sm font-medium text-atelier-ink">
                      {item.title}
                    </div>
                    <div className="font-atelierSans text-xs text-atelier-ink-soft mt-0.5 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
