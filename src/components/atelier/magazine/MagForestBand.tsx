// src/components/atelier/magazine/MagForestBand.tsx
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/lib/motion'
import { renderTitle } from './_renderTitle'

export type MagForestBandStat = {
  num: string
  label: string
}

export type MagForestBandProps = {
  eyebrow: string
  headline: string
  subtitle: string
  stats: MagForestBandStat[]
  backgroundImage?: string
  backgroundImageAlt?: string
}

export function MagForestBand({
  eyebrow,
  headline,
  subtitle,
  stats,
  backgroundImage,
  backgroundImageAlt,
}: MagForestBandProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const goldLayerRef = useRef<HTMLDivElement>(null)
  const tealLayerRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const statRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    const goldLayer = goldLayerRef.current
    const tealLayer = tealLayerRef.current
    if (!section) return

    const fadeEls = [
      eyebrowRef.current,
      headlineRef.current,
      subtitleRef.current,
      ...statRefs.current.filter(Boolean),
    ].filter(Boolean) as HTMLElement[]

    if (prefersReducedMotion()) {
      fadeEls.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    fadeEls.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(14px)'
    })

    // Content reveal timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })

    if (eyebrowRef.current) {
      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
    }
    if (headlineRef.current) {
      tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' }, '+=0.05')
    }
    if (subtitleRef.current) {
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, '+=0.05')
    }
    tl.to(
      statRefs.current.filter(Boolean),
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.12 },
      '+=0.05',
    )

    // Parallax — driven by section progress through the viewport
    const parallaxTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const p = self.progress // 0 entering, 1 exiting
        // Layer 1 (gold): translateY (-60 → +60), translateX (-20 → +20)
        if (goldLayer) {
          const y = -60 + p * 120
          const x = -20 + p * 40
          goldLayer.style.transform = `translate(${x}px, ${y}px)`
        }
        // Layer 2 (teal): translateY (+80 → -80), translateX (+30 → -30)
        if (tealLayer) {
          const y = 80 - p * 160
          const x = 30 - p * 60
          tealLayer.style.transform = `translate(${x}px, ${y}px)`
        }
      },
    })

    return () => {
      tl.kill()
      parallaxTrigger.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-forest-band text-apple-canvas"
      style={{ padding: '100px 32px' }}
    >
      {/* Background image slot — sits behind glow layers */}
      {backgroundImage ? (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt ?? ''}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.25, mixBlendMode: 'multiply' }}
          />
        </div>
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ opacity: 0.08 }}
        >
          {/* Empty placeholder — subtle concentric circles in white/gold */}
          <svg
            className="absolute inset-0 m-auto"
            width="640"
            height="640"
            viewBox="0 0 640 640"
            fill="none"
            style={{ inset: 0 }}
          >
            <circle cx="320" cy="320" r="300" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
            <circle cx="320" cy="320" r="220" stroke="rgba(189,153,82,0.5)" strokeWidth="1" fill="none" />
            <circle cx="320" cy="320" r="140" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
            <circle cx="320" cy="320" r="60" stroke="rgba(189,153,82,0.5)" strokeWidth="1" fill="none" />
          </svg>
          <div
            className="absolute font-atelierMono"
            style={{
              right: 24,
              bottom: 16,
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Background image slot · full-bleed
          </div>
        </div>
      )}

      {/* Parallax glow layers */}
      <div
        ref={goldLayerRef}
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: '-10%',
          left: '-10%',
          width: '60%',
          height: '120%',
          background:
            'radial-gradient(ellipse at center, rgba(189,153,82,0.18) 0%, rgba(189,153,82,0) 65%)',
          willChange: 'transform',
        }}
      />
      <div
        ref={tealLayerRef}
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          bottom: '-20%',
          right: '-10%',
          width: '60%',
          height: '100%',
          background:
            'radial-gradient(ellipse at center, rgba(42,191,160,0.15) 0%, rgba(42,191,160,0) 65%)',
          willChange: 'transform',
        }}
      />

      <div className="relative mx-auto" style={{ maxWidth: 920 }}>
        <div
          ref={eyebrowRef}
          className="font-stripeSans text-center"
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#BD9952',
          }}
        >
          {eyebrow}
        </div>

        <h2
          ref={headlineRef}
          className="font-atelierSerif mx-auto text-center"
          style={{
            marginTop: 24,
            maxWidth: 720,
            fontSize: 'clamp(36px, 4.4vw, 48px)',
            lineHeight: 1.05,
            fontWeight: 500,
            letterSpacing: '-0.025em',
            color: '#FBFBFD',
          }}
        >
          {renderTitle(headline, 'italic text-[#BD9952]')}
        </h2>

        <p
          ref={subtitleRef}
          className="font-stripeSans mx-auto text-center"
          style={{
            marginTop: 24,
            maxWidth: 580,
            fontSize: 18,
            lineHeight: 1.55,
            color: 'rgba(251,251,253,0.75)',
          }}
        >
          {subtitle}
        </p>

        <div
          className="grid"
          style={{
            marginTop: 64,
            paddingTop: 36,
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 32,
            borderTop: '0.5px solid rgba(251,251,253,0.15)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={`${stat.num}-${i}`}
              ref={(el) => {
                statRefs.current[i] = el
              }}
              className="text-center"
            >
              <div
                className="font-atelierSerif"
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 40px)',
                  lineHeight: 1,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  color: '#BD9952',
                }}
              >
                {stat.num}
              </div>
              <div
                className="font-stripeSans"
                style={{
                  marginTop: 12,
                  fontSize: 13,
                  lineHeight: 1.4,
                  color: 'rgba(251,251,253,0.65)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
