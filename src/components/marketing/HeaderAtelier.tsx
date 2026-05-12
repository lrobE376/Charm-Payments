'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type MenuKey = 'products' | 'solutions' | 'gateway' | null

type MegaItem = { name: string; desc: string; href: string }

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

const NAV_ITEMS = [
  { key: 'products' as const, label: 'Products' },
  { key: 'solutions' as const, label: 'Solutions' },
  { key: 'gateway' as const, label: 'Gateway' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-atelierMono text-[10px] uppercase tracking-[0.28em] text-[#0f3520]/54">
      {children}
    </div>
  )
}

function MegaItemLink({ item, onNavigate }: { item: MegaItem; onNavigate: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group block rounded-[6px] px-3 py-2 transition-colors hover:bg-[#f8f6f1]"
    >
      <div className="text-sm font-medium leading-tight text-[#11251b] transition-colors group-hover:text-[#0f3520]">
        {item.name}
      </div>
      <div className="mt-1 text-xs leading-snug text-black/54">{item.desc}</div>
    </Link>
  )
}

function DropdownShell({
  active,
  onMouseEnter,
  onMouseLeave,
  children,
}: {
  active: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: React.ReactNode
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        'overflow-hidden bg-transparent transition-all duration-200 ease-out',
        active ? 'pointer-events-auto max-h-[760px] translate-y-0 opacity-100' : 'pointer-events-none max-h-0 -translate-y-1 opacity-0',
      )}
      aria-hidden={!active}
      inert={!active ? true : undefined}
    >
      <div className="pb-5">
        <div className="rounded-b-[14px] border border-t-0 border-[#0f3520]/10 bg-[#fffdfa] px-5 pb-6 pt-5 shadow-[0_24px_70px_rgba(15,53,32,0.09)] sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  )
}

function PanelTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-[11px] uppercase tracking-[0.24em] text-[#11251b]/64">{children}</div>
}

export function HeaderAtelier() {
  const [desktopMenu, setDesktopMenu] = useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<MenuKey>(null)
  const headerRef = useRef<HTMLElement>(null)
  const closeTimerRef = useRef<number | null>(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const openMenu = useCallback((key: Exclude<MenuKey, null>) => {
    clearCloseTimer()
    setDesktopMenu(key)
  }, [clearCloseTimer])

  const scheduleClose = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => {
      setDesktopMenu(null)
      closeTimerRef.current = null
    }, 240)
  }, [clearCloseTimer])

  const closeMenus = useCallback(() => {
    clearCloseTimer()
    setDesktopMenu(null)
  }, [clearCloseTimer])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenus()
        setMobileOpen(false)
        setMobileSection(null)
      }
    }

    const onPointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeMenus()
      }
    }

    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointerDown)

    return () => {
      clearCloseTimer()
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [closeMenus, clearCloseTimer])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white">
      <div className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center justify-between gap-3 py-4">
            <Link href="/" aria-label="Charm Payments home" className="shrink-0">
              <Image src="/images/logo.png" alt="Charm Payments" width={320} height={120} className="h-8 w-auto sm:h-10" priority />
            </Link>

            <nav className="hidden lg:flex lg:items-center lg:gap-8" aria-label="Primary">
              {NAV_ITEMS.map((item) => {
                const active = desktopMenu === item.key
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => openMenu(item.key)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-expanded={active}
                      aria-haspopup="true"
                      aria-controls={`menu-${item.key}`}
                      onClick={() => setDesktopMenu((current) => (current === item.key ? null : item.key))}
                      className={cn(
                        'inline-flex items-center gap-1 py-2 font-atelierMono text-[11px] uppercase tracking-[0.22em] transition-colors',
                        active ? 'text-[#11251b]' : 'text-[#11251b]/72 hover:text-[#11251b]',
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden
                        className={cn('h-3.5 w-3.5 transition-transform duration-200', active && 'rotate-180')}
                      />
                    </button>
                  </div>
                )
              })}
              <Link
                href="/contact"
                onClick={closeMenus}
                className="py-2 font-atelierMono text-[11px] uppercase tracking-[0.22em] text-[#11251b]/72 transition-colors hover:text-[#11251b]"
              >
                Contact
              </Link>
            </nav>

            <div className="flex min-w-0 items-center justify-end gap-2">
              <Link
                href="/quote"
                className="inline-flex min-h-[42px] max-w-[calc(100vw-7.25rem)] items-center justify-center whitespace-nowrap border border-[#0f3520] bg-[#0f3520] px-3 py-2 font-stripeSans text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90 sm:max-w-none sm:px-5 sm:text-[12px] sm:tracking-[0.12em]"
              >
                Request Audit <span className="ml-1" aria-hidden>{'->'}</span>
              </Link>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center border border-black/15 text-[#11251b] transition-colors hover:border-black/35 lg:hidden"
                aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((value) => !value)}
              >
                {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
              </button>
            </div>
          </div>

          <DropdownShell active={desktopMenu === 'products'} onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
            <div id="menu-products" className="grid gap-8 lg:grid-cols-[1fr_1fr_0.88fr]">
              <section>
                <SectionLabel>Accept</SectionLabel>
                <div className="mt-3 grid gap-1">
                  {PRODUCTS_ACCEPT.map((item) => (
                    <MegaItemLink key={item.href} item={item} onNavigate={closeMenus} />
                  ))}
                </div>
              </section>

              <section>
                <SectionLabel>Manage</SectionLabel>
                <div className="mt-3 grid gap-1">
                  {PRODUCTS_MANAGE.map((item) => (
                    <MegaItemLink key={item.href} item={item} onNavigate={closeMenus} />
                  ))}
                </div>
              </section>

              <aside className="rounded-[6px] border border-black/[0.08] bg-[#faf8f3] p-5">
                <PanelTitle>Platform</PanelTitle>
                <div className="mt-3 text-base font-medium leading-tight text-[#11251b]">
                  A cleaner set of tools for accepting, managing, and reconciling payments.
                </div>
                <p className="mt-3 text-sm leading-relaxed text-black/58">
                  Built for a focused merchant workflow with less friction at the edges.
                </p>
                <Link
                  href="/features"
                  onClick={closeMenus}
                  className="mt-5 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-[#0f3520]"
                >
                  See all features <span aria-hidden>{'->'}</span>
                </Link>
              </aside>
            </div>
          </DropdownShell>

          <DropdownShell active={desktopMenu === 'solutions'} onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
            <div id="menu-solutions" className="grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
              {[
                SOLUTIONS_ITEMS.slice(0, 3),
                SOLUTIONS_ITEMS.slice(3, 5),
                SOLUTIONS_ITEMS.slice(5),
              ].map((group, index) => (
                <section key={index}>
                  <SectionLabel>{index === 0 ? 'By Industry' : index === 1 ? 'By Channel' : 'Special Cases'}</SectionLabel>
                  <div className="mt-3 grid gap-1">
                    {group.map((item) => (
                      <MegaItemLink key={item.href} item={item} onNavigate={closeMenus} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </DropdownShell>

          <DropdownShell active={desktopMenu === 'gateway'} onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
            <div className="mx-auto max-w-[960px]">
              <div id="menu-gateway" className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
                <section>
                  <SectionLabel>Platform</SectionLabel>
                  <div className="mt-3 grid gap-1">
                    {GATEWAY_ITEMS.map((item) => (
                      <MegaItemLink key={item.href} item={item} onNavigate={closeMenus} />
                    ))}
                  </div>
                </section>

                <aside className="rounded-[6px] border border-black/[0.08] bg-[#faf8f3] p-5">
                  <PanelTitle>Gateway</PanelTitle>
                  <div className="mt-3 text-base font-medium leading-tight text-[#11251b]">
                    Enterprise processing with the quieter edges a modern header expects.
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-black/58">
                    Hardware, fraud tooling, and reporting kept in one disciplined surface.
                  </p>
                  <Link
                    href="/gateway"
                    onClick={closeMenus}
                    className="mt-5 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-[#0f3520]"
                  >
                    Gateway overview <span aria-hidden>{'->'}</span>
                  </Link>
                </aside>
              </div>
            </div>
          </DropdownShell>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-b border-black/10 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="grid gap-1">
              <button
                type="button"
                onClick={() => setMobileSection((current) => (current === 'products' ? null : 'products'))}
                aria-expanded={mobileSection === 'products'}
                className="flex items-center justify-between border-b border-black/5 py-3 text-left font-atelierMono text-[11px] uppercase tracking-[0.22em] text-[#11251b]"
              >
                Products
                <ChevronDown aria-hidden className={cn('h-4 w-4 text-black/35 transition-transform', mobileSection === 'products' && 'rotate-180')} />
              </button>
              {mobileSection === 'products' ? (
                <div className="space-y-2 border-b border-black/5 pb-3 pt-2">
                  <div>
                    <SectionLabel>Accept</SectionLabel>
                    <div className="mt-2 grid gap-1">
                      {PRODUCTS_ACCEPT.map((item) => (
                        <MegaItemLink key={item.href} item={item} onNavigate={() => setMobileOpen(false)} />
                      ))}
                    </div>
                  </div>
                  <div className="pt-2">
                    <SectionLabel>Manage</SectionLabel>
                    <div className="mt-2 grid gap-1">
                      {PRODUCTS_MANAGE.map((item) => (
                        <MegaItemLink key={item.href} item={item} onNavigate={() => setMobileOpen(false)} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              <button
                type="button"
                onClick={() => setMobileSection((current) => (current === 'solutions' ? null : 'solutions'))}
                aria-expanded={mobileSection === 'solutions'}
                className="flex items-center justify-between border-b border-black/5 py-3 text-left font-atelierMono text-[11px] uppercase tracking-[0.22em] text-[#11251b]"
              >
                Solutions
                <ChevronDown aria-hidden className={cn('h-4 w-4 text-black/35 transition-transform', mobileSection === 'solutions' && 'rotate-180')} />
              </button>
              {mobileSection === 'solutions' ? (
                <div className="space-y-1 border-b border-black/5 pb-3 pt-2">
                  {SOLUTIONS_ITEMS.map((item) => (
                    <MegaItemLink key={item.href} item={item} onNavigate={() => setMobileOpen(false)} />
                  ))}
                </div>
              ) : null}

              <button
                type="button"
                onClick={() => setMobileSection((current) => (current === 'gateway' ? null : 'gateway'))}
                aria-expanded={mobileSection === 'gateway'}
                className="flex items-center justify-between border-b border-black/5 py-3 text-left font-atelierMono text-[11px] uppercase tracking-[0.22em] text-[#11251b]"
              >
                Gateway
                <ChevronDown aria-hidden className={cn('h-4 w-4 text-black/35 transition-transform', mobileSection === 'gateway' && 'rotate-180')} />
              </button>
              {mobileSection === 'gateway' ? (
                <div className="space-y-1 border-b border-black/5 pb-3 pt-2">
                  {GATEWAY_ITEMS.map((item) => (
                    <MegaItemLink key={item.href} item={item} onNavigate={() => setMobileOpen(false)} />
                  ))}
                </div>
              ) : null}

              <Link
                href="/charm-defense"
                onClick={() => setMobileOpen(false)}
                className="border-b border-black/5 py-3 font-atelierMono text-[11px] uppercase tracking-[0.22em] text-[#11251b]/78"
              >
                Charm Defense
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="border-b border-black/5 py-3 font-atelierMono text-[11px] uppercase tracking-[0.22em] text-[#11251b]/78"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
