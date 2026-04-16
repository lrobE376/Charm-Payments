// src/components/conversion/StatsBar.tsx
// Animated stats bar — IntersectionObserver triggers rAF count-up (zero deps)
// Pattern from 21st.dev CaseStudies / Animated Counter components
'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  prefix?: string
  end: number
  suffix: string
  label: string
  sublabel: string
}

const stats: Stat[] = [
  { end: 500,  suffix: '+',  label: 'Merchants Served',    sublabel: 'St. Louis & beyond'          },
  { end: 24,   suffix: 'hr', label: 'Approval Target',     sublabel: 'On complete applications'    },
  { prefix: '$', end: 0, suffix: '', label: 'Setup Fees',  sublabel: 'No cost to get started'      },
  { end: 200,  suffix: '+',  label: 'Cart Integrations',   sublabel: 'E-commerce platforms'        },
]

/** easeOutExpo — snappy start, graceful finish */
function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function useCountUp(end: number, duration = 1400, enabled: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!enabled) return
    if (end === 0) { setCount(0); return }

    let startTime: number | null = null
    let rafId: number

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(easeOutExpo(progress) * end))
      if (progress < 1) rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [end, duration, enabled])

  return count
}

function StatItem({ stat, enabled, isLast }: { stat: Stat; enabled: boolean; isLast: boolean }) {
  const count = useCountUp(stat.end, 1400, enabled)

  return (
    <div
      className="flex flex-col items-center text-center px-6 py-10"
      style={
        !isLast
          ? { borderRight: '1px solid var(--outline-variant)' }
          : undefined
      }
    >
      {/* Gold counter — display-lg scale from globals.css */}
      <p
        className="display-lg tabular-nums"
        style={{ color: 'var(--gold)', lineHeight: 1 }}
        aria-label={`${stat.prefix ?? ''}${count}${stat.suffix} ${stat.label}`}
      >
        {stat.prefix ?? ''}{count.toLocaleString()}{stat.suffix}
      </p>

      <p
        className="mt-3 text-base font-semibold"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}
      >
        {stat.label}
      </p>

      <p className="mt-1 body-md" style={{ color: 'var(--on-surface-variant)' }}>
        {stat.sublabel}
      </p>
    </div>
  )
}

export default function StatsBar() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section
      aria-label="Key metrics"
      style={{ background: 'var(--surface-container-lowest)' }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} data-animate="fade-up" data-delay={String(i * 80)}>
              <StatItem
                stat={stat}
                enabled={visible}
                isLast={i === stats.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
