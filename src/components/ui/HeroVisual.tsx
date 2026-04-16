// src/components/ui/HeroVisual.tsx
// Hero right-panel: image + 3 bleeding data cards with CreditCardHero-style mouse tilt
'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import FloatingCard from '@/components/ui/FloatingCard'

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const el = containerRef.current
    const tilt = tiltRef.current
    if (!el || !tilt) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5   // -0.5 → 0.5
    const y = (e.clientY - top) / height - 0.5
    tilt.style.transform = `perspective(1200px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg)`
  }

  function handleMouseLeave() {
    const tilt = tiltRef.current
    if (!tilt) return
    tilt.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[500px] cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tilt wrapper — CSS perspective applied via JS on mouse move */}
      <div
        ref={tiltRef}
        style={{ transition: 'transform 0.18s ease-out' }}
      >
        {/* Main hero image — device mockup */}
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src="/images/hero-devices.png"
            alt="Charm Payments dashboard on desktop and mobile devices"
            width={600}
            height={680}
            className="animate-ken-burns h-[540px] w-full object-contain object-center"
            priority
          />
        </div>

        {/* ── Bottom-left bleeding card — Payment Received (slow depth) ── */}
        <FloatingCard
          duration={5}
          className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-[0.75rem] px-4 py-3"
          style={{
            background: 'var(--surface-container-lowest)',
            boxShadow: '0px 4px 20px rgba(28,28,21,0.04), 0px 16px 48px rgba(28,28,21,0.10)',
            outline: '1px solid var(--outline-variant)',
          }}
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ background: 'var(--primary)' }}
          >
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
              Payment Received
            </p>
            <p
              className="text-sm font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--on-surface)' }}
            >
              $142.00 ✓
            </p>
          </div>
        </FloatingCard>

        {/* ── Top-right bleeding card — brand status (fast depth) ── */}
        <FloatingCard
          duration={3}
          className="absolute -right-6 -top-5 rounded-[0.75rem] px-4 py-3"
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)',
            boxShadow: '0px 4px 20px rgba(28,28,21,0.04), 0px 16px 48px rgba(28,28,21,0.10)',
          }}
        >
          <p className="label-sm" style={{ color: 'var(--gold)' }}>Charm Payments</p>
          <p className="text-sm font-semibold text-white">Processing Active</p>
        </FloatingCard>

        {/* ── Mid-right bleeding stat — gold premium indicator (medium depth) ── */}
        <FloatingCard
          duration={4}
          className="absolute -right-10 bottom-28 rounded-[0.75rem] px-4 py-3"
          style={{
            background: 'var(--surface-container-lowest)',
            boxShadow: '0px 4px 20px rgba(28,28,21,0.04), 0px 16px 48px rgba(28,28,21,0.10)',
            outline: '1px solid var(--outline-variant)',
          }}
        >
          <p className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
            Est. Monthly Savings
          </p>
          <p
            className="text-lg font-bold"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
          >
            $847
          </p>
        </FloatingCard>
      </div>
    </div>
  )
}
