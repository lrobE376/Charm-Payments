'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function CardsStickyCta() {
  const [visible, setVisible] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 300
      setVisible(show)
      const el = barRef.current
      if (el) {
        if (!show) {
          el.setAttribute('inert', '')
        } else {
          el.removeAttribute('inert')
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={barRef}
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-50 block border-t border-white/10 bg-brand-dark px-4 py-3 transition-all duration-300 md:hidden ${
        visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 12px)' }}
      role="navigation"
      aria-label="Charm Cards quick actions"
    >
      <div className="mx-auto flex w-full max-w-lg flex-row items-stretch">
        <Link
          href="/cards"
          className="btn-outline inline-flex min-h-[48px] flex-1 items-center justify-center border-white/30 !text-white hover:!border-white hover:!bg-white hover:!text-brand-dark"
        >
          Learn More
        </Link>
        <Link
          href="/cards"
          className="btn-accent ml-3 inline-flex min-h-[48px] flex-1 items-center justify-center"
        >
          Get Your Card →
        </Link>
      </div>
    </div>
  )
}
