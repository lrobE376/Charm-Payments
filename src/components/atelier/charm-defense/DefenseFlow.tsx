// src/components/atelier/charm-defense/DefenseFlow.tsx
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
  stage: string
  title: string
  body: string
  code: string[]
  numeralBg: 'forest' | 'gold'
  codeBorder: 'black' | 'forest'
}

const STEPS: Step[] = [
  {
    num: '01',
    stage: 'STAGE A · YOU',
    title: 'Subscribe',
    body: 'Open a Charm merchant account. Defense activates with the same application — no second contract, no add-on cart.',
    code: ['// account.created', 'defense: enabled', 'monitoring: live'],
    numeralBg: 'forest',
    codeBorder: 'black',
  },
  {
    num: '02',
    stage: 'STAGE B · CHARM',
    title: 'Disputed',
    body: "A chargeback hits. Charm intercepts it the moment the issuing bank flags it — you don't open a portal, you don't draft a response.",
    code: ['// chargeback.received', 'amount: $142.00', 'reason: 10.4 fraud'],
    numeralBg: 'forest',
    codeBorder: 'black',
  },
  {
    num: '03',
    stage: 'STAGE C · CHARM',
    title: 'Response',
    body: 'Charm assembles the evidence packet, files the response, and recovers the funds. You get a notification when the case is won.',
    code: ['// dispute.recovered', 'won: true', 'credited: $142.00 ✓'],
    numeralBg: 'gold',
    codeBorder: 'forest',
  },
]

export function DefenseFlow() {
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
      id="flow"
      className={cn(
        'bg-white py-12 px-lg',
        '[border-bottom-width:0.5px] border-black/[0.08]',
      )}
    >
      <Container>
        <div className="mb-2xl">
          <EyebrowTag section="§" label="THE FLOW" />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-atelier-ink',
              'max-w-3xl',
            )}
          >
            Three things happen —{' '}
            <em className="italic text-atelier-forest">
              none of them are your job.
            </em>
          </h2>
          <p className="text-base text-black/70 max-w-2xl mt-md leading-relaxed">
            Subscribe to Charm Payments. When a chargeback hits, we monitor it,
            respond to it, and fight to recover it — automatically.
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
                pulseTargets={['#flow-1-num', '#flow-2-num', '#flow-3-num']}
                height={12}
              />
            </div>
          ) : null}

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-lg md:gap-base">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="flex flex-col items-center text-center px-md"
              >
                <div
                  id={`flow-${i + 1}-num`}
                  ref={(el) => {
                    numeralRefs.current[i] = el
                  }}
                  className={cn(
                    'relative z-10 w-[52px] h-[52px] flex items-center justify-center',
                    'rounded-atelierSm font-atelierMono text-lg font-medium',
                    s.numeralBg === 'gold'
                      ? 'bg-atelier-gold text-atelier-ink'
                      : 'bg-atelier-forest text-atelier-cream',
                  )}
                >
                  {s.num}
                </div>

                <div
                  className={cn(
                    'mt-base font-atelierMono text-[11px] uppercase tracking-label',
                    'text-black/50',
                  )}
                >
                  {s.stage}
                </div>

                <h3
                  className={cn(
                    'mt-1 font-atelierSerif text-base font-medium',
                    'leading-tight text-atelier-ink',
                  )}
                >
                  {s.title}
                </h3>

                <p className="text-xs text-black/65 mt-xs leading-relaxed max-w-[28ch]">
                  {s.body}
                </p>

                <pre
                  className={cn(
                    'mt-base w-full text-left',
                    'bg-atelier-creamWarm',
                    '[border-width:0.5px]',
                    s.codeBorder === 'forest'
                      ? 'border-atelier-forest/60'
                      : 'border-black/[0.12]',
                    'px-2.5 py-[7px]',
                    'font-atelierMono text-xs leading-relaxed text-atelier-ink',
                  )}
                >
                  <code>
                    {s.code.map((line, j) => (
                      <span key={j} className="block">
                        {line.startsWith('//') ? (
                          <span className="text-black/60">{line}</span>
                        ) : (
                          line
                        )}
                      </span>
                    ))}
                  </code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        <p
          className={cn(
            'text-center mt-2xl',
            'font-atelierMono text-xs uppercase tracking-label text-black/55',
          )}
        >
          ZERO MERCHANT EFFORT · CHARM HANDLES STAGES B AND C · YOU JUST GET PAID
        </p>
      </Container>
    </section>
  )
}
