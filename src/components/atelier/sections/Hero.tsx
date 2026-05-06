// src/components/atelier/sections/Hero.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Container } from '@/components/atelier/Container'
import { prefersReducedMotion } from '@/lib/motion'

const HERO_BULLETS = [
  'Free statement audit',
  'See every fee, every card, every time',
  '24-hour approval',
  'PCI DSS compliant',
]

const HEADLINE = 'Your Processor Is\nCharging More\nThan You Know.'
const CHAR_DELAY = 32
const LINE_PAUSE = 320
const PERIOD_PAUSE = 180
const SPACE_EXTRA = 20
const START_DELAY = 200
const CURSOR_HIDE_DELAY = 200

function TypewriterHeadline() {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [mounted, setMounted] = useState(false)
  const startedRef = useRef(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || startedRef.current) return
    startedRef.current = true

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayed(HEADLINE)
      setShowCursor(false)
      return
    }

    let html = ''
    let cumulative = START_DELAY
    const timeouts: number[] = []

    for (let i = 0; i < HEADLINE.length; i++) {
      const ch = HEADLINE[i]
      const t = window.setTimeout(() => {
        html += ch
        setDisplayed(html)
      }, cumulative)
      timeouts.push(t)

      if (ch === '\n') cumulative += LINE_PAUSE
      else if (ch === '.') cumulative += CHAR_DELAY + PERIOD_PAUSE
      else if (ch === ' ') cumulative += CHAR_DELAY + SPACE_EXTRA
      else cumulative += CHAR_DELAY
    }

    const hideCursorTimeout = window.setTimeout(() => {
      setShowCursor(false)
    }, cumulative + CURSOR_HIDE_DELAY)
    timeouts.push(hideCursorTimeout)

    return () => {
      timeouts.forEach((t) => window.clearTimeout(t))
    }
  }, [mounted])

  const lines = displayed.split('\n')

  return (
    <h1
      className="font-atelierSerif text-[36px] md:text-[44px] font-bold leading-[1.08] tracking-[-0.015em] text-[#FAFAF7] m-0 mb-[22px]"
      style={{ minHeight: '200px' }}
    >
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      {showCursor && (
        <span
          className="inline-block w-[3px] bg-atelier-gold ml-[2px]"
          style={{
            height: '0.85em',
            verticalAlign: 'top',
            transform: 'translateY(0.08em)',
            animation: 'cursor-blink 0.7s steps(2) infinite',
          }}
          aria-hidden="true"
        />
      )}
    </h1>
  )
}

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const checkRef = useRef<SVGPathElement>(null)
  const savingsRef = useRef<HTMLSpanElement>(null)
  const receiptRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const check = checkRef.current
    const savings = savingsRef.current
    const receipt = receiptRef.current
    if (!card || !check || !savings || !receipt) return

    if (prefersReducedMotion()) {
      card.style.opacity = '1'
      card.style.transform = 'scale(1)'
      check.style.strokeDashoffset = '0'
      savings.textContent = '$847'
      receipt.textContent = '$142.00'
      return
    }

    const savingsCounter = { val: 0 }
    const receiptCounter = { val: 0 }

    const tl = gsap.timeline()

    tl.fromTo(
      card,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.0, ease: 'power3.out' },
      0.2,
    )

    tl.to(
      receiptCounter,
      {
        val: 142,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: () => {
          receipt.textContent = `$${receiptCounter.val.toFixed(2)}`
        },
      },
      0.6,
    )

    tl.to(
      check,
      { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out' },
      1.0,
    )

    tl.to(
      savingsCounter,
      {
        val: 847,
        duration: 1.4,
        ease: 'power2.out',
        onUpdate: () => {
          savings.textContent = `$${Math.round(savingsCounter.val).toLocaleString('en-US')}`
        },
      },
      1.0,
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      id="hero"
      className="bg-[#0F3520] text-atelier-cream py-12 md:py-16 px-lg"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-2xl items-center">
          <div>
            <TypewriterHeadline />
            <p className="text-[13px] text-atelier-cream/[0.78] max-w-[360px] mb-6 leading-relaxed">
              Your current processor bundles fees you can&apos;t audit, holds
              funds you&apos;ve already earned, and routes you to a chatbot
              when something breaks. We&apos;ll show you exactly what
              you&apos;re paying — and what changes with Charm.
            </p>
            <div className="flex gap-sm flex-wrap mb-lg">
              <a
                href="/apply"
                className="inline-flex items-center gap-xs bg-atelier-forest text-atelier-cream px-[18px] py-[10px] text-[12px] font-medium rounded-atelierXs hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold"
              >
                Apply Now
              </a>
              <a
                href="/quote"
                className="inline-flex items-center text-atelier-gold px-1 py-[10px] text-[12px] hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold"
              >
                Free Rate Audit →
              </a>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-3.5 gap-y-2 max-w-[380px]">
              {HERO_BULLETS.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-[12px] text-atelier-cream/85"
                >
                  <span className="text-atelier-gold" aria-hidden>
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={cardRef}
            className="bg-atelier-paper rounded-atelierMd shadow-2xl p-base border border-black/5"
            style={{ opacity: 0, transform: 'scale(0.95)' }}
          >
            <div className="font-atelierMono text-[10px] tracking-[0.18em] uppercase text-black/55">
              Payment Received
            </div>
            <div className="mt-xs flex items-center gap-xs">
              <span
                ref={receiptRef}
                className="font-atelierSerif text-3xl text-atelier-ink leading-none"
              >
                $0.00
              </span>
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-atelier-teal"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.25"
                />
                <path
                  ref={checkRef}
                  d="M 7 12 L 11 16 L 17 9"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset="1"
                />
              </svg>
            </div>
            <div className="mt-xxs text-sm text-atelier-ink">
              Charm Payments
            </div>
            <div className="mt-xs flex items-center gap-xs">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-atelier-teal animate-ping opacity-60" />
                <span className="relative inline-block w-2 h-2 rounded-full bg-atelier-teal" />
              </span>
              <span className="font-atelierMono text-xs text-black/65 tracking-wide">
                Processing Active
              </span>
            </div>

            <div className="mt-base pt-base border-t border-black/10">
              <div className="font-atelierMono text-[10px] tracking-[0.18em] uppercase text-black/55">
                Est. Monthly Savings
              </div>
              <div className="mt-xs">
                <span
                  ref={savingsRef}
                  className="font-atelierSerif text-4xl text-atelier-forest leading-none"
                >
                  $0
                </span>
              </div>
            </div>

            <div className="mt-base pt-base border-t border-black/10 flex items-center gap-base">
              <span className="font-atelierSerif italic text-base text-atelier-ink/70">
                VISA
              </span>
              <span className="font-atelierSans font-medium text-sm text-atelier-ink/70 tracking-wide">
                Mastercard
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
