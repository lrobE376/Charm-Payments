'use client'

import { useEffect, useState } from 'react'

type Phase = 'idle' | 'tapping' | 'success'

export default function CardsNfcDemo() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [successCycle, setSuccessCycle] = useState(0)

  useEffect(() => {
    let cancelled = false
    let t1: ReturnType<typeof setTimeout> | undefined
    let t2: ReturnType<typeof setTimeout> | undefined
    let t3: ReturnType<typeof setTimeout> | undefined

    const seq = () => {
      if (cancelled) return
      setPhase('idle')
      t1 = setTimeout(() => {
        if (!cancelled) setPhase('tapping')
      }, 1500)
      t2 = setTimeout(() => {
        if (!cancelled) {
          setSuccessCycle((c) => c + 1)
          setPhase('success')
        }
      }, 2000)
      t3 = setTimeout(seq, 5000)
    }

    seq()
    return () => {
      cancelled = true
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <div className="mx-auto max-w-xs text-center">
      <div className="relative flex min-h-[340px] flex-col items-center">
        <div
          className={`relative z-10 w-[200px] overflow-hidden rounded-[1.75rem] border-4 border-gray-800 bg-gray-900 shadow-xl transition-all duration-500 ${
            phase === 'idle' ? 'brightness-[0.45]' : 'brightness-100'
          } ${phase === 'tapping' ? 'ring-2 ring-brand-accent/60' : ''}`}
        >
          <div className="relative aspect-[9/19] w-full bg-gradient-to-b from-gray-800 to-gray-900">
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${
                phase === 'success' ? 'pointer-events-none opacity-0' : 'opacity-100'
              }`}
            >
              <div className="h-8 w-8 rounded-full bg-white/10 blur-[1px]" />
              <div className="h-2 w-24 rounded-full bg-white/10" />
              <div className="h-2 w-16 rounded-full bg-white/5" />
            </div>

            <div
              key={successCycle}
              className={`absolute inset-0 flex flex-col gap-2 p-4 pt-8 transition-opacity duration-500 ${
                phase === 'success' ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <div
                className="absolute right-2 top-2 h-6 w-6 rounded-full bg-green-500 shadow ring-2 ring-green-400/50"
                aria-hidden
              />
              <div
                className={`mx-auto h-12 w-12 rounded-full bg-brand-accent/40 ${
                  phase === 'success' ? 'animate-charm-nfc-fade-in' : ''
                }`}
                style={{ animationDelay: phase === 'success' ? '0.05s' : undefined }}
              />
              <div
                className={`mx-auto h-2.5 w-28 rounded-full bg-white/30 ${phase === 'success' ? 'animate-charm-nfc-fade-in opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: '0.12s' }}
              />
              <div
                className={`mx-auto h-2 w-36 rounded-full bg-white/20 ${phase === 'success' ? 'animate-charm-nfc-fade-in opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: '0.22s' }}
              />
              <div className="mt-2 space-y-2">
                {[0.35, 0.5, 0.65].map((delay, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 ${phase === 'success' ? 'animate-charm-nfc-fade-in opacity-100' : 'opacity-0'}`}
                    style={{ animationDelay: `${delay}s` }}
                  >
                    <span className="h-6 w-6 shrink-0 rounded bg-white/15" />
                    <div className="h-2 flex-1 rounded-full bg-white/25" />
                  </div>
                ))}
              </div>
            </div>

            {phase === 'tapping' && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="absolute h-16 w-16 rounded-full border-2 border-brand-accent animate-charm-nfc-ripple" />
              </div>
            )}
          </div>
        </div>

        <div
          className={`relative z-20 mt-4 h-14 w-36 rounded-lg bg-gradient-to-br from-slate-300 via-slate-400 to-slate-600 shadow-lg transition-transform duration-500 ease-out ${
            phase === 'tapping' ? '-translate-y-16 scale-105' : 'translate-y-0'
          }`}
        >
          <div className="absolute inset-x-2 top-2 h-1 rounded-full bg-white/30" />
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-end justify-center gap-0.5 pb-0.5">
            <span className="h-2 w-0.5 rounded-full bg-white/70 animate-charm-nfc-pulse" />
            <span
              className="h-3 w-0.5 rounded-full bg-white/90 animate-charm-nfc-pulse"
              style={{ animationDelay: '0.15s' }}
            />
            <span
              className="h-2 w-0.5 rounded-full bg-white/70 animate-charm-nfc-pulse"
              style={{ animationDelay: '0.3s' }}
            />
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-gray-600">
        Demo profile (illustrative): <span className="font-semibold text-brand-dark">Marcus B.</span> · Master Barber · The Grove — phone, Pay Me, and Book Now rows
        appear after tap.
      </p>
    </div>
  )
}
