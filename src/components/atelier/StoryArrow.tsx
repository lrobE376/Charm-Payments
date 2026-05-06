// src/components/atelier/StoryArrow.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

export interface StoryArrowProps {
  stops: number[]
  pulseTargets?: string[]
  className?: string
  height?: number
}

const ARROW_W = 18
const ARROW_H = 12

export function StoryArrow({
  stops,
  pulseTargets = [],
  className,
  height = 24,
}: StoryArrowProps) {
  const arrowRef = useRef<SVGPolygonElement>(null)

  useEffect(() => {
    const arrow = arrowRef.current
    if (!arrow || stops.length === 0) return

    gsap.set(arrow, { x: stops[0], opacity: 1 })

    if (prefersReducedMotion()) return

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.9 })

    for (let i = 1; i < stops.length; i++) {
      const x = stops[i]
      const target = pulseTargets[i]
      tl.to(arrow, { x, duration: 1.0, ease: 'power2.inOut' })
      if (target && typeof document !== 'undefined') {
        const el = document.querySelector(target)
        if (el) {
          tl.to(
            el,
            {
              scale: 1.08,
              duration: 0.25,
              ease: 'power2.out',
              yoyo: true,
              repeat: 1,
              transformOrigin: 'center center',
            },
            '<',
          )
        }
      }
    }

    tl.to(arrow, { opacity: 0, duration: 0.4, ease: 'power1.in' }, '>+=0.2')
    tl.set(arrow, { x: stops[0] })
    tl.to(arrow, { opacity: 1, duration: 0.3, ease: 'power1.out' })

    return () => {
      tl.kill()
    }
  }, [stops, pulseTargets])

  if (stops.length === 0) return null

  const lineStart = Math.min(...stops)
  const lineEnd = Math.max(...stops)
  const svgWidth = lineEnd + ARROW_W + 8
  const centerY = height / 2

  return (
    <div
      aria-hidden
      className={cn('relative pointer-events-none select-none', className)}
      style={{ width: svgWidth, height }}
    >
      <svg
        width={svgWidth}
        height={height}
        viewBox={`0 0 ${svgWidth} ${height}`}
        fill="none"
      >
        <line
          x1={lineStart}
          y1={centerY}
          x2={lineEnd}
          y2={centerY}
          stroke="var(--atelier-forest)"
          strokeWidth={1}
          strokeDasharray="2 4"
          opacity={0.35}
        />
        <polygon
          ref={arrowRef}
          points={`0,0 ${ARROW_W},${ARROW_H / 2} 0,${ARROW_H}`}
          fill="var(--atelier-forest)"
          transform={`translate(0, ${centerY - ARROW_H / 2})`}
        />
      </svg>
    </div>
  )
}
