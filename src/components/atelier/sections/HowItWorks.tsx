// src/components/atelier/sections/HowItWorks.tsx
'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { StoryArrow } from '@/components/atelier/StoryArrow'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

type Step = {
  num: string
  title: string
  body: string
  caption: string
  numeralBg: 'forest' | 'gold'
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Apply in minutes',
    body: 'Tell us about your business, volume, and how you take payments — online, in-store, or both.',
    caption: 'EST. 5 MIN',
    numeralBg: 'forest',
  },
  {
    num: '02',
    title: 'Approved in 24 hours',
    body: 'Submit a complete application — we target same-day to 24-hour approval when everything checks out.',
    caption: 'EST. T+1',
    numeralBg: 'forest',
  },
  {
    num: '03',
    title: 'Start accepting payments',
    body: "Gateway keys, fraud rules, and cart connections go live — you're ready to run real transactions.",
    caption: 'LIVE',
    numeralBg: 'gold',
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const numeralRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineDrawRef = useRef<HTMLDivElement>(null)
  const arrowWrapRef = useRef<HTMLDivElement>(null)

  const [stops, setStops] = useState<number[]>([])
  const [arrowReady, setArrowReady] = useState(false)

  useLayoutEffect(() => {
    const update = () => {
      const track = trackRef.current
      if (!track) return
      const trackRect = track.getBoundingClientRect()
      const newStops = numeralRefs.current
        .filter(Boolean)
        .map((n) => {
          const r = (n as HTMLDivElement).getBoundingClientRect()
          return Math.round(r.left + r.width / 2 - trackRect.left)
        })
      if (newStops.length === 3) setStops(newStops)
    }
    update()
    const ro = new ResizeObserver(update)
    if (trackRef.current) ro.observe(trackRef.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    const nums = numeralRefs.current.filter(Boolean) as HTMLDivElement[]
    if (nums.length === 0) return
    const lineEl = lineDrawRef.current

    if (prefersReducedMotion()) {
      nums.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'scale(1)'
      })
      if (lineEl) lineEl.style.transform = 'scaleX(1)'
      setArrowReady(true)
      return
    }

    if (lineEl) gsap.set(lineEl, { scaleX: 0, transformOrigin: 'left center' })
    nums.forEach((el) => {
      gsap.set(el, { opacity: 0, scale: 0.5 })
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    })

    tl.to(nums, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'back.out(1.6)',
      stagger: 0.22,
    })

    if (lineEl) {
      tl.to(lineEl, { scaleX: 1, duration: 0.9, ease: 'power2.inOut' })
    }

    tl.call(() => setArrowReady(true))

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="bg-atelier-creamWarm py-9 px-lg"
    >
      <Container>
        <div className="mb-2xl">
          <EyebrowTag section="§05" label="HOW IT WORKS" />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-atelier-ink',
              'max-w-3xl',
            )}
          >
            Three steps to a processor that{' '}
            <em className="italic text-atelier-forest">works for you.</em>
          </h2>
          <p className="text-base text-black/70 max-w-2xl mt-md leading-relaxed">
            No setup project. We handle underwriting, configuration, and
            go-live — you fill out one application.
          </p>
        </div>

        <div ref={trackRef} className="relative">
          <div
            aria-hidden
            className={cn(
              'hidden md:block absolute top-[26px] left-[8%] right-[8%]',
              'h-px',
            )}
          >
            <div
              ref={lineDrawRef}
              className={cn(
                'h-full bg-[length:8px_1px]',
                '[background-image:linear-gradient(to_right,rgba(30,92,53,0.35)_0_50%,transparent_50%_100%)]',
              )}
              style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
            />
          </div>

          {arrowReady && stops.length === 3 ? (
            <div
              ref={arrowWrapRef}
              className="hidden md:block absolute left-0 right-0 top-[20px]"
            >
              <StoryArrow
                stops={stops}
                pulseTargets={['#step-1-num', '#step-2-num', '#step-3-num']}
                height={12}
              />
            </div>
          ) : null}

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-base md:gap-0">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className={cn(
                  'flex flex-col items-center text-center',
                  'px-md',
                )}
              >
                <div
                  id={`step-${i + 1}-num`}
                  ref={(el) => {
                    numeralRefs.current[i] = el
                  }}
                  className={cn(
                    'relative z-10 w-[52px] h-[52px] flex items-center justify-center',
                    'font-atelierMono text-xl font-medium',
                    s.numeralBg === 'gold'
                      ? 'bg-atelier-gold text-atelier-ink'
                      : 'bg-atelier-forest text-atelier-cream',
                  )}
                >
                  {s.num}
                </div>
                <h3
                  className={cn(
                    'mt-base font-atelierSerif text-base font-medium',
                    'leading-tight text-atelier-ink',
                  )}
                >
                  {s.title}
                </h3>
                <p className="text-xs text-black/65 mt-xs leading-relaxed max-w-[28ch]">
                  {s.body}
                </p>
                <div
                  className={cn(
                    'mt-base font-atelierMono text-[10px] uppercase tracking-label',
                    s.numeralBg === 'gold'
                      ? 'text-atelier-gold'
                      : 'text-atelier-forest',
                  )}
                >
                  {s.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
