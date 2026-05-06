// src/components/marketing/HeaderAtelier.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type NavItem = {
  label: string
  href: string
  hasMenu?: boolean
  asLink?: boolean
}

const NAV: NavItem[] = [
  { label: 'Products', href: '/features', hasMenu: true, asLink: true },
  { label: 'Solutions', href: '/services', hasMenu: true, asLink: true },
  { label: 'Charm Defense', href: '/charm-defense', asLink: true },
  { label: 'Pricing', href: '/pricing', asLink: true },
  { label: 'Contact', href: '/contact', asLink: true },
]

export function HeaderAtelier() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setCollapsed(window.scrollY > 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          'bg-[#0F3520] text-atelier-cream',
          'transition-transform duration-300 ease-out',
          'origin-top',
          collapsed ? '-translate-y-full' : 'translate-y-0',
        )}
        aria-hidden={collapsed}
      >
        <div className="flex items-center justify-center gap-3 py-1.5 px-lg text-xs">
          <span className="text-atelier-cream/85">
            Free account review — we&apos;ll beat your current rate
          </span>
          <span className="text-atelier-cream/30" aria-hidden>
            ·
          </span>
          <Link
            href="/quote"
            className={cn(
              'inline-block bg-atelier-gold text-atelier-ink',
              'font-atelierMono text-xs font-medium uppercase tracking-[0.15em]',
              'px-2.5 py-1 rounded-atelierXs',
              'hover:opacity-90 transition-opacity',
            )}
          >
            GET INSTANT QUOTE
          </Link>
        </div>
      </div>

      <div
        className={cn(
          'bg-atelier-creamWarm',
          '[border-bottom-width:0.5px] border-black/[0.08]',
        )}
      >
        <div className="flex items-center justify-between gap-base py-3 px-lg">
          <Link
            href="/"
            className={cn(
              'flex items-center shrink-0',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-atelier-gold',
            )}
            aria-label="Charm Payments — home"
          >
            <Image
              src="/images/logo.png"
              alt="Charm Payments"
              width={320}
              height={120}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <nav
            className="hidden md:flex items-center gap-4"
            aria-label="Primary"
          >
            {NAV.map((item) =>
              item.asLink ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'inline-flex items-center gap-1',
                    'text-[11px] text-black/65 hover:text-black',
                    'transition-colors',
                  )}
                >
                  {item.label}
                  {item.hasMenu ? (
                    <span aria-hidden className="text-black/40">
                      ⌄
                    </span>
                  ) : null}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className={cn(
                    'inline-flex items-center gap-1 cursor-default',
                    'text-[11px] text-black/65',
                  )}
                >
                  {item.label}
                  {item.hasMenu ? (
                    <span aria-hidden className="text-black/40">
                      ⌄
                    </span>
                  ) : null}
                </span>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/apply"
              className={cn(
                'bg-atelier-forest text-atelier-cream',
                'px-3.5 py-1.5 text-xs font-medium rounded-atelierXs',
                'hover:opacity-90 transition-opacity',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                'whitespace-nowrap',
              )}
            >
              Apply Now
            </Link>

            <button
              type="button"
              className={cn(
                'md:hidden inline-flex items-center justify-center',
                'w-8 h-8 rounded-atelierXs',
                'border border-atelier-ink/30 text-atelier-ink',
                'hover:border-atelier-ink/60 transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
              )}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span aria-hidden className="text-base leading-none">
                {mobileOpen ? '×' : '≡'}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className={cn(
              'md:hidden px-lg pb-3',
              '[border-top-width:0.5px] border-black/[0.08]',
            )}
          >
            <ul className="flex flex-col gap-2 pt-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  {item.asLink ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-atelier-ink"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="block text-sm text-black/55">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>

      <div
        className={cn(
          'bg-atelier-forest text-atelier-cream',
          'transition-transform duration-300 ease-out origin-top',
          collapsed ? '-translate-y-full' : 'translate-y-0',
        )}
        aria-hidden={collapsed}
      >
        <div className="flex items-center justify-end gap-3 py-1 px-lg font-atelierMono text-xs">
          <a
            href="tel:+13145550198"
            className="text-atelier-cream/85 hover:text-atelier-cream transition-colors"
          >
            +1 (314) 555-0198
          </a>
          <span className="text-atelier-cream/40" aria-hidden>
            ·
          </span>
          <a
            href="mailto:merchants@charmpayments.com"
            className="text-atelier-cream/85 hover:text-atelier-cream transition-colors"
          >
            merchants@charmpayments.com
          </a>
        </div>
      </div>
    </header>
  )
}
