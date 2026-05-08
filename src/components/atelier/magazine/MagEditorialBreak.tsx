// src/components/atelier/magazine/MagEditorialBreak.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/lib/motion'
import { renderTitle } from './_renderTitle'

export type MagEditorialBreakProps = {
  text: string
}

export function MagEditorialBreak({ text }: MagEditorialBreakProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const proseRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    const prose = proseRef.current
    if (!section || !prose) return

    if (prefersReducedMotion()) {
      prose.style.opacity = '1'
      prose.style.transform = 'none'
      return
    }

    const ctx = gsap.context(() => {
      prose.style.opacity = '0'
      prose.style.transform = 'translateY(8px)'

      gsap.to(prose, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-apple-canvas"
      style={{ padding: '88px 32px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 720 }}>
        <p
          ref={proseRef}
          className="font-atelierSerif"
          style={{
            fontSize: 'clamp(24px, 2.6vw, 30px)',
            lineHeight: 1.3,
            fontWeight: 500,
            color: '#1D1D1F',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          {renderTitle(text)}
        </p>
      </div>
    </section>
  )
}



