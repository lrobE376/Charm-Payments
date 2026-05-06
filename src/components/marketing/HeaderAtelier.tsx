// src/components/marketing/HeaderAtelier.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type MegaItem = { name: string; desc: string; href: string }
type MegaKey = 'products' | 'solutions' | 'gateway' | null

const PRODUCTS_ACCEPT: MegaItem[] = [
  { name: 'Virtual Terminal', desc: 'Accept payments from any browser', href: '/features/virtual-terminal' },
  { name: 'Tap to Pay', desc: 'Your phone is your terminal', href: '/features/tap-to-pay' },
  { name: 'Card Present', desc: 'WiFi + 4G cellular terminals', href: '/features/card-present' },
  { name: 'E-Commerce', desc: 'Online payments and checkout', href: '/features/ecommerce' },
  { name: 'ACH & eCheck', desc: 'Bank transfers and e-checks', href: '/features/ach' },
]

const PRODUCTS_MANAGE: MegaItem[] = [
  { name: 'Invoicing', desc: 'Send invoices, get paid instantly', href: '/features/invoicing' },
  { name: 'Text to Pay', desc: 'Payment requests via SMS', href: '/features/text-to-pay' },
  { name: 'Recurring Billing', desc: 'Subscriptions and auto-payments', href: '/features/recurring-billing' },
  { name: 'QR Code Payments', desc: 'Contactless QR payment links', href: '/features/qr-codes' },
  { name: 'Fraud Protection', desc: 'AI-powered fraud screening', href: '/features/fraud-protection' },
]

const SOLUTIONS_ITEMS: MegaItem[] = [
  { name: 'Retail & Boutiques', desc: 'In-store and online payments', href: '/solutions/retail' },
  { name: 'Restaurants & Food', desc: 'Table, counter, and delivery', href: '/solutions/restaurants' },
  { name: 'Beauty & Salons', desc: 'Appointments and walk-ins', href: '/solutions/beauty' },
  { name: 'Service Businesses', desc: 'Contractors, cleaners, mobile', href: '/solutions/services' },
  { name: 'E-Commerce', desc: 'Online stores and marketplaces', href: '/solutions/ecommerce' },
  { name: 'High Risk', desc: 'Specialized merchant accounts', href: '/solutions/high-risk' },
  { name: 'Mobile & On-the-Go', desc: 'EMV reader, Text to Pay, Offline Mode', href: '/solutions/mobile' },
]

const GATEWAY_ITEMS: MegaItem[] = [
  { name: 'Gateway Overview', desc: 'The full processing platform', href: '/gateway' },
  { name: 'Gateway Features', desc: 'Virtual Terminal, Vault, Fraud & more', href: '/gateway/features' },
  { name: 'Payment Hardware', desc: 'PAX A920, Lane/3000, Lane/7000', href: '/gateway/hardware' },
]

function MegaItemLink({ item, onNavigate }: { item: MegaItem; onNavigate: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={cn(
        'group/item relative block py-2 pl-3 pr-2',
        'border-l-2 border-transparent',
        'hover:bg-atelier-paper hover:border-atelier-gold',
        'transition-all duration-200',
      )}
    >
      <div className="font-atelierSans text-sm font-medium text-atelier-ink leading-tight group-hover/item:text-atelier-forest transition-colors">
        {item.name}
      </div>
      <div className="font-atelierSans text-xs text-atelier-ink-soft mt-0.5 leading-snug">
        {item.desc}
      </div>
    </Link>
  )
}

function CategoryHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-atelierMono text-xs uppercase tracking-label text-atelier-forest pb-2 mb-1 [border-bottom-width:0.5px] border-atelier-forest/20">
      {children}
    </div>
  )
}

function PanelCta({ href, label, onNavigate }: { href: string; label: string; onNavigate: () => void }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        'inline-flex items-center gap-1',
        'font-atelierMono text-xs uppercase tracking-label text-atelier-gold',
        'hover:opacity-80 transition-opacity',
      )}
    >
      {label}
      <span aria-hidden>→</span>
    </Link>
  )
}

export function HeaderAtelier() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mega, setMega] = useState<MegaKey>(null)
  const [mobileSection, setMobileSection] = useState<MegaKey>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setCollapsed(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMega(null)
        setMobileOpen(false)
        setMobileSection(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMega(null)
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const closeAll = () => {
    setMega(null)
    setMobileOpen(false)
    setMobileSection(null)
  }

  const toggleMega = (key: Exclude<MegaKey, null>) => {
    setMega((cur) => (cur === key ? null : key))
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Promo bar */}
      <div
        className={cn(
          'bg-[#0F3520] text-atelier-cream',
          'transition-transform duration-300 ease-out origin-top',
          collapsed ? '-translate-y-full' : 'translate-y-0',
        )}
        aria-hidden={collapsed}
      >
        <div className="flex items-center justify-center gap-3 py-1.5 px-lg text-xs">
          <span className="text-atelier-cream/85">
            Free account review — we&apos;ll beat your current rate
          </span>
          <span className="text-atelier-cream/30" aria-hidden>·</span>
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

      {/* Main nav */}
      <div
        ref={navRef}
        className={cn(
          'bg-atelier-creamWarm',
          '[border-bottom-width:0.5px] border-black/[0.08]',
        )}
      >
        <div className="flex items-center justify-between gap-base py-3 px-lg">
          <Link
            href="/"
            onClick={closeAll}
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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {/* PRODUCTS */}
            <div
              className="relative"
              onMouseEnter={() => setMega('products')}
              onMouseLeave={() => setMega(null)}
            >
              <button
                type="button"
                aria-expanded={mega === 'products'}
                aria-haspopup="true"
                onClick={() => toggleMega('products')}
                className={cn(
                  'inline-flex items-center gap-1 px-3 py-2',
                  'text-[11px] uppercase tracking-label font-atelierMono',
                  'text-atelier-ink/70 hover:text-atelier-ink transition-colors',
                  mega === 'products' && 'text-atelier-ink',
                )}
              >
                Products
                <span
                  aria-hidden
                  className={cn(
                    'text-atelier-ink/40 text-[10px] transition-transform duration-200',
                    mega === 'products' && 'rotate-180',
                  )}
                >
                  ⌄
                </span>
              </button>
              <div
                className={cn(
                  'absolute left-0 top-full pt-2 z-50 transition-all duration-200 ease-out',
                  mega === 'products'
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0',
                )}
              >
                <div
                  className={cn(
                    'min-w-[560px] bg-atelier-creamWarm',
                    'border-t-2 border-atelier-forest',
                    'shadow-[0_12px_40px_-8px_rgba(15,53,32,0.18),0_4px_12px_-4px_rgba(15,53,32,0.10)]',
                    'p-base',
                  )}
                >
                  <div className="grid grid-cols-2 gap-base">
                    <div>
                      <CategoryHeader>Accept</CategoryHeader>
                      <div className="flex flex-col">
                        {PRODUCTS_ACCEPT.map((item) => (
                          <MegaItemLink key={item.href} item={item} onNavigate={closeAll} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <CategoryHeader>Manage</CategoryHeader>
                      <div className="flex flex-col">
                        {PRODUCTS_MANAGE.map((item) => (
                          <MegaItemLink key={item.href} item={item} onNavigate={closeAll} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-base pt-3 [border-top-width:0.5px] border-atelier-ink/15 flex justify-end">
                    <PanelCta href="/features" label="See All Features" onNavigate={closeAll} />
                  </div>
                </div>
              </div>
            </div>

            {/* SOLUTIONS */}
            <div
              className="relative"
              onMouseEnter={() => setMega('solutions')}
              onMouseLeave={() => setMega(null)}
            >
              <button
                type="button"
                aria-expanded={mega === 'solutions'}
                aria-haspopup="true"
                onClick={() => toggleMega('solutions')}
                className={cn(
                  'inline-flex items-center gap-1 px-3 py-2',
                  'text-[11px] uppercase tracking-label font-atelierMono',
                  'text-atelier-ink/70 hover:text-atelier-ink transition-colors',
                  mega === 'solutions' && 'text-atelier-ink',
                )}
              >
                Solutions
                <span
                  aria-hidden
                  className={cn(
                    'text-atelier-ink/40 text-[10px] transition-transform duration-200',
                    mega === 'solutions' && 'rotate-180',
                  )}
                >
                  ⌄
                </span>
              </button>
              <div
                className={cn(
                  'absolute left-0 top-full pt-2 z-50 transition-all duration-200 ease-out',
                  mega === 'solutions'
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0',
                )}
              >
                <div
                  className={cn(
                    'min-w-[480px] bg-atelier-creamWarm',
                    'border-t-2 border-atelier-forest',
                    'shadow-[0_12px_40px_-8px_rgba(15,53,32,0.18),0_4px_12px_-4px_rgba(15,53,32,0.10)]',
                    'p-base',
                  )}
                >
                  <CategoryHeader>By Industry</CategoryHeader>
                  <div className="grid grid-cols-2 gap-x-base">
                    {SOLUTIONS_ITEMS.map((item) => (
                      <MegaItemLink key={item.href} item={item} onNavigate={closeAll} />
                    ))}
                  </div>
                  <div className="mt-base pt-3 [border-top-width:0.5px] border-atelier-ink/15 flex justify-end">
                    <PanelCta href="/services" label="All Solutions" onNavigate={closeAll} />
                  </div>
                </div>
              </div>
            </div>

            {/* GATEWAY */}
            <div
              className="relative"
              onMouseEnter={() => setMega('gateway')}
              onMouseLeave={() => setMega(null)}
            >
              <button
                type="button"
                aria-expanded={mega === 'gateway'}
                aria-haspopup="true"
                onClick={() => toggleMega('gateway')}
                className={cn(
                  'inline-flex items-center gap-1 px-3 py-2',
                  'text-[11px] uppercase tracking-label font-atelierMono',
                  'text-atelier-ink/70 hover:text-atelier-ink transition-colors',
                  mega === 'gateway' && 'text-atelier-ink',
                )}
              >
                Gateway
                <span
                  aria-hidden
                  className={cn(
                    'text-atelier-ink/40 text-[10px] transition-transform duration-200',
                    mega === 'gateway' && 'rotate-180',
                  )}
                >
                  ⌄
                </span>
              </button>
              <div
                className={cn(
                  'absolute left-0 top-full pt-2 z-50 transition-all duration-200 ease-out',
                  mega === 'gateway'
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0',
                )}
              >
                <div
                  className={cn(
                    'min-w-[320px] bg-atelier-creamWarm',
                    'border-t-2 border-atelier-forest',
                    'shadow-[0_12px_40px_-8px_rgba(15,53,32,0.18),0_4px_12px_-4px_rgba(15,53,32,0.10)]',
                    'p-base',
                  )}
                >
                  <CategoryHeader>Platform</CategoryHeader>
                  <div className="flex flex-col">
                    {GATEWAY_ITEMS.map((item) => (
                      <MegaItemLink key={item.href} item={item} onNavigate={closeAll} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Charm Defense */}
            <Link
              href="/charm-defense"
              className={cn(
                'inline-flex items-center px-3 py-2',
                'text-[11px] uppercase tracking-label font-atelierMono',
                'text-atelier-ink/70 hover:text-atelier-ink transition-colors',
              )}
            >
              Charm Defense
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center px-3 py-2',
                'text-[11px] uppercase tracking-label font-atelierMono',
                'text-atelier-ink/70 hover:text-atelier-ink transition-colors',
              )}
            >
              Contact
            </Link>
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

        {/* Mobile slide-down */}
        {mobileOpen ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className={cn(
              'md:hidden px-lg pb-3',
              '[border-top-width:0.5px] border-black/[0.08]',
            )}
          >
            <ul className="flex flex-col gap-1 pt-3">
              {/* Products accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => setMobileSection((s) => (s === 'products' ? null : 'products'))}
                  aria-expanded={mobileSection === 'products'}
                  className={cn(
                    'w-full flex items-center justify-between py-2',
                    'font-atelierMono text-xs uppercase tracking-label text-atelier-ink',
                  )}
                >
                  Products
                  <span aria-hidden className={cn('text-atelier-ink/40 transition-transform', mobileSection === 'products' && 'rotate-180')}>⌄</span>
                </button>
                {mobileSection === 'products' ? (
                  <div className="pl-3 pb-2 [border-left-width:1px] border-atelier-forest/20">
                    <CategoryHeader>Accept</CategoryHeader>
                    {PRODUCTS_ACCEPT.map((item) => (
                      <MegaItemLink key={item.href} item={item} onNavigate={closeAll} />
                    ))}
                    <div className="mt-2">
                      <CategoryHeader>Manage</CategoryHeader>
                    </div>
                    {PRODUCTS_MANAGE.map((item) => (
                      <MegaItemLink key={item.href} item={item} onNavigate={closeAll} />
                    ))}
                    <div className="pt-2">
                      <PanelCta href="/features" label="See All Features" onNavigate={closeAll} />
                    </div>
                  </div>
                ) : null}
              </li>

              {/* Solutions accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => setMobileSection((s) => (s === 'solutions' ? null : 'solutions'))}
                  aria-expanded={mobileSection === 'solutions'}
                  className={cn(
                    'w-full flex items-center justify-between py-2',
                    'font-atelierMono text-xs uppercase tracking-label text-atelier-ink',
                  )}
                >
                  Solutions
                  <span aria-hidden className={cn('text-atelier-ink/40 transition-transform', mobileSection === 'solutions' && 'rotate-180')}>⌄</span>
                </button>
                {mobileSection === 'solutions' ? (
                  <div className="pl-3 pb-2 [border-left-width:1px] border-atelier-forest/20">
                    {SOLUTIONS_ITEMS.map((item) => (
                      <MegaItemLink key={item.href} item={item} onNavigate={closeAll} />
                    ))}
                    <div className="pt-2">
                      <PanelCta href="/services" label="All Solutions" onNavigate={closeAll} />
                    </div>
                  </div>
                ) : null}
              </li>

              {/* Gateway accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => setMobileSection((s) => (s === 'gateway' ? null : 'gateway'))}
                  aria-expanded={mobileSection === 'gateway'}
                  className={cn(
                    'w-full flex items-center justify-between py-2',
                    'font-atelierMono text-xs uppercase tracking-label text-atelier-ink',
                  )}
                >
                  Gateway
                  <span aria-hidden className={cn('text-atelier-ink/40 transition-transform', mobileSection === 'gateway' && 'rotate-180')}>⌄</span>
                </button>
                {mobileSection === 'gateway' ? (
                  <div className="pl-3 pb-2 [border-left-width:1px] border-atelier-forest/20">
                    {GATEWAY_ITEMS.map((item) => (
                      <MegaItemLink key={item.href} item={item} onNavigate={closeAll} />
                    ))}
                  </div>
                ) : null}
              </li>

              <li>
                <Link
                  href="/charm-defense"
                  onClick={closeAll}
                  className="block py-2 font-atelierMono text-xs uppercase tracking-label text-atelier-ink"
                >
                  Charm Defense
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="block py-2 font-atelierMono text-xs uppercase tracking-label text-atelier-ink"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>

      {/* Bottom contact bar */}
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
          <span className="text-atelier-cream/40" aria-hidden>·</span>
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
