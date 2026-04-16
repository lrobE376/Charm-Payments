'use client'

import { useMemo, useState } from 'react'

const MIN = 5_000
const MAX = 500_000

/** Illustrative annual savings vs. typical flat-rate stack (interchange-plus delta). Not a guarantee. */
function estimateAnnualSavings(monthlyVolume: number): number {
  const annual = monthlyVolume * 12
  return Math.round(annual * 0.0085)
}

function formatCurrency(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function SavingsCalculator() {
  const [monthly, setMonthly] = useState(50_000)

  const annualSavings = useMemo(() => estimateAnnualSavings(monthly), [monthly])

  return (
    <section data-section className="scroll-mt-24 section-ptb" id="savings-calculator" style={{ background: 'var(--surface-container-low)' }}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span data-animate="fade-up" className="section-label">RATE REALITY CHECK</span>
          <h2 data-animate="fade-up" data-delay="80" className="mt-3 text-3xl font-bold md:text-4xl" style={{ color: 'var(--on-surface)' }}>See what interchange-plus could mean for you</h2>
          <p data-animate="fade-up" data-delay="160" className="mt-3 text-lg text-[var(--paragraph)]/85">
            Slide your volume — we&apos;ll show an illustrative savings range based on typical flat-rate competitor pricing.
          </p>
        </div>

        <div data-animate="scale-up" data-delay="240" className="charm-card mt-10 p-6 md:p-8" style={{ background: 'var(--surface-container-lowest)', outline: '1px solid rgba(28,28,21,0.12)' }}>
          <label htmlFor="volume-slider" className="block text-sm font-semibold text-sales-navy">
            Monthly processing volume
          </label>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <span className="text-2xl font-bold tabular-nums text-sales-green">{formatCurrency(monthly)}</span>
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500">/ month</span>
          </div>
          <input
            id="volume-slider"
            type="range"
            min={MIN}
            max={MAX}
            step={1000}
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="mt-6 h-3 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-sales-green"
            aria-valuemin={MIN}
            aria-valuemax={MAX}
            aria-valuenow={monthly}
          />
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>{formatCurrency(MIN)}</span>
            <span>{formatCurrency(MAX)}</span>
          </div>

          <div className="mt-8 rounded-2xl px-5 py-6 text-center" style={{ background: 'linear-gradient(135deg, #004421, #1E5C35)' }}>
            <p className="text-sm font-medium text-white/80">Estimated annual savings with Charm</p>
            <p
              className="font-display mt-2 text-3xl font-bold tabular-nums text-sales-green md:text-4xl"
              aria-live="polite"
              aria-atomic="true"
            >
              {formatCurrency(annualSavings)}
            </p>
          </div>

          <p className="mt-4 text-center text-xs leading-relaxed text-gray-500">
            Based on average savings vs. standard flat-rate competitors. Actual savings depend on your mix, card types, and current statement —{' '}
            <span className="font-semibold text-sales-navy">your free audit</span> tells the real story.
          </p>
        </div>
      </div>
    </section>
  )
}
