// src/components/marketing/Navbar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  Building2,
  ChevronDown,
  Cpu,
  CreditCard,
  FileText,
  Globe,
  Menu,
  MessageSquare,
  Monitor,
  QrCode,
  RefreshCw,
  Scissors,
  Shield,
  ShoppingCart,
  Smartphone,
  Store,
  Utensils,
  X,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Button from '@/components/ui/Button'

type DesktopMenu = 'products' | 'solutions' | 'gateway' | null

const productsAccept: { href: string; name: string; desc: string; Icon: LucideIcon }[] = [
  { href: '/features/virtual-terminal', name: 'Virtual Terminal',  desc: 'Accept payments from any browser',    Icon: Monitor     },
  { href: '/features/tap-to-pay',       name: 'Tap to Pay',        desc: 'Your phone is your terminal',         Icon: Smartphone  },
  { href: '/features/card-present',     name: 'Card Present',      desc: 'WiFi + 4G cellular terminals',        Icon: CreditCard  },
  { href: '/features/ecommerce',        name: 'E-Commerce',        desc: 'Online payments and checkout',        Icon: ShoppingCart},
  { href: '/features/ach',              name: 'ACH & eCheck',      desc: 'Bank transfers and e-checks',         Icon: Building2   },
]

const productsManage: { href: string; name: string; desc: string; Icon: LucideIcon }[] = [
  { href: '/features/invoicing',         name: 'Electronic Invoicing', desc: 'Send invoices, get paid instantly', Icon: FileText     },
  { href: '/features/text-to-pay',       name: 'Text to Pay',          desc: 'Payment requests via SMS',          Icon: MessageSquare},
  { href: '/features/recurring-billing', name: 'Recurring Billing',    desc: 'Subscriptions and auto-payments',   Icon: RefreshCw    },
  { href: '/features/qr-codes',          name: 'QR Code Payments',     desc: 'Contactless QR payment links',      Icon: QrCode       },
  { href: '/features/fraud-protection',  name: 'Fraud Protection',     desc: 'AI-powered fraud screening',        Icon: Shield       },
]

const solutionsItems: { href: string; name: string; desc: string; Icon: LucideIcon }[] = [
  { href: '/solutions/retail',     name: 'Retail & Boutiques',  desc: 'In-store and online payments',   Icon: Store       },
  { href: '/solutions/restaurants',name: 'Restaurants & Food',  desc: 'Table, counter, and delivery',   Icon: Utensils    },
  { href: '/solutions/beauty',     name: 'Beauty & Salons',     desc: 'Appointments and walk-ins',      Icon: Scissors    },
  { href: '/solutions/services',   name: 'Service Businesses',  desc: 'Contractors, cleaners, mobile',  Icon: Briefcase   },
  { href: '/solutions/ecommerce',  name: 'E-Commerce',          desc: 'Online stores and marketplaces', Icon: Globe       },
  { href: '/solutions/high-risk',  name: 'High Risk',           desc: 'Specialized merchant accounts',  Icon: AlertCircle },
]

const gatewayItems: { href: string; name: string; desc: string; Icon: LucideIcon }[] = [
  { href: '/gateway',          name: 'Gateway Overview',  desc: 'The full NMI platform',                 Icon: Globe   },
  { href: '/gateway/features', name: 'Gateway Features',  desc: 'Virtual Terminal, Vault, Fraud & more', Icon: Zap     },
  { href: '/gateway/hardware', name: 'Payment Hardware',  desc: 'PAX A920, Lane/3000, Lane/7000',        Icon: Cpu     },
]

function MegaLink({
  href,
  name,
  desc,
  Icon,
  onNavigate,
}: {
  href: string
  name: string
  desc: string
  Icon: LucideIcon
  onNavigate?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--surface-container-low)]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-container-low)]">
        <Icon className="h-5 w-5 text-[var(--primary)]" aria-hidden />
      </span>
      <span className="min-w-0 text-left">
        <span className="block text-sm font-semibold text-[var(--on-surface)]">{name}</span>
        <span className="mt-0.5 block text-xs text-[var(--on-surface-variant)]">{desc}</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [mobileGatewayOpen, setMobileGatewayOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopMenu(null)
        setMobileProductsOpen(false)
        setMobileSolutionsOpen(false)
        setMobileGatewayOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDesktopMenu(null)
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const closeAllMobile = () => {
    setOpen(false)
    setMobileProductsOpen(false)
    setMobileSolutionsOpen(false)
    setMobileGatewayOpen(false)
  }

  return (
    <div className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-[var(--primary)] py-2 text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6">
          <a href="tel:+13145550198" className="transition-colors hover:text-[var(--gold)]">
            +1 (314) 555-0198
          </a>
          <a href="mailto:merchants@charmpayments.com" className="transition-colors hover:text-[var(--gold)]">
            merchants@charmpayments.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        ref={navRef}
        style={{
          background: scrolled ? 'rgba(253,249,237,0.80)' : 'rgba(253,249,237,0.72)',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
          boxShadow: scrolled
            ? '0px 4px 20px rgba(28,28,21,0.06)'
            : '0px 1px 0px var(--outline-variant)',
        }}
        className="transition-all duration-300"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

          {/* Logo */}
          <Link href="/" className="mr-12 flex items-center select-none">
            <Image
              src="/images/logo.png"
              alt="Charm Payments"
              width={320}
              height={120}
              className="h-16 w-auto object-contain transition-opacity duration-300"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
              priority
            />
          </Link>

          {/* Desktop mega-nav */}
          <ul className="m-0 hidden list-none items-center gap-2 p-0 md:flex lg:gap-4">

            {/* Products */}
            <li
              className="relative"
              onMouseEnter={() => setDesktopMenu('products')}
              onMouseLeave={() => setDesktopMenu(null)}
            >
              <button
                type="button"
                className="flex min-h-[44px] items-center gap-1 rounded-lg px-3 text-sm font-medium text-[var(--on-surface-variant)] transition-colors hover:text-[var(--on-surface)]"
                aria-expanded={desktopMenu === 'products'}
                aria-haspopup="true"
                onClick={() => setDesktopMenu((m) => (m === 'products' ? null : 'products'))}
              >
                Products
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${desktopMenu === 'products' ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              <div
                className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ease-out ${
                  desktopMenu === 'products'
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0'
                }`}
              >
                <div
                  className="min-w-[480px] rounded-[0.75rem] p-6"
                  style={{
                    background: 'var(--surface-container-lowest)',
                    outline: '1px solid var(--outline-variant)',
                    boxShadow: '0px 4px 20px rgba(28,28,21,0.04), 0px 12px 40px rgba(28,28,21,0.06)',
                  }}
                >
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="label-sm mb-3 text-[var(--on-surface-variant)]">Accept Payments</p>
                      <div className="flex flex-col">
                        {productsAccept.map((item) => (
                          <MegaLink key={item.href} {...item} onNavigate={() => setDesktopMenu(null)} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="label-sm mb-3 text-[var(--on-surface-variant)]">Manage &amp; Grow</p>
                      <div className="flex flex-col">
                        {productsManage.map((item) => (
                          <MegaLink key={item.href} {...item} onNavigate={() => setDesktopMenu(null)} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/features"
                    onClick={() => setDesktopMenu(null)}
                    className="mt-5 flex min-h-[44px] items-center justify-center gap-1 pt-4 text-sm font-semibold text-[var(--secondary)] transition hover:underline"
                    style={{ borderTop: '1px solid var(--outline-variant)' }}
                  >
                    See all features
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </li>

            {/* Solutions */}
            <li
              className="relative"
              onMouseEnter={() => setDesktopMenu('solutions')}
              onMouseLeave={() => setDesktopMenu(null)}
            >
              <button
                type="button"
                className="flex min-h-[44px] items-center gap-1 rounded-lg px-3 text-sm font-medium text-[var(--on-surface-variant)] transition-colors hover:text-[var(--on-surface)]"
                aria-expanded={desktopMenu === 'solutions'}
                aria-haspopup="true"
                onClick={() => setDesktopMenu((m) => (m === 'solutions' ? null : 'solutions'))}
              >
                Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${desktopMenu === 'solutions' ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              <div
                className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ease-out ${
                  desktopMenu === 'solutions'
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0'
                }`}
              >
                <div
                  className="min-w-[320px] rounded-[0.75rem] p-6"
                  style={{
                    background: 'var(--surface-container-lowest)',
                    outline: '1px solid var(--outline-variant)',
                    boxShadow: '0px 4px 20px rgba(28,28,21,0.04), 0px 12px 40px rgba(28,28,21,0.06)',
                  }}
                >
                  <div className="flex flex-col">
                    {solutionsItems.map((item) => (
                      <MegaLink key={item.href} {...item} onNavigate={() => setDesktopMenu(null)} />
                    ))}
                  </div>
                  <Link
                    href="/services"
                    onClick={() => setDesktopMenu(null)}
                    className="mt-5 flex min-h-[44px] items-center justify-center gap-1 pt-4 text-sm font-semibold text-[var(--secondary)] transition hover:underline"
                    style={{ borderTop: '1px solid var(--outline-variant)' }}
                  >
                    All solutions
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </li>

            {/* Gateway & Products */}
            <li
              className="relative"
              onMouseEnter={() => setDesktopMenu('gateway')}
              onMouseLeave={() => setDesktopMenu(null)}
            >
              <button
                type="button"
                className="flex min-h-[44px] items-center gap-1 rounded-lg px-3 text-sm font-medium text-[var(--on-surface-variant)] transition-colors hover:text-[var(--on-surface)]"
                aria-expanded={desktopMenu === 'gateway'}
                aria-haspopup="true"
                onClick={() => setDesktopMenu((m) => (m === 'gateway' ? null : 'gateway'))}
              >
                Gateway
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${desktopMenu === 'gateway' ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              <div
                className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ease-out ${
                  desktopMenu === 'gateway'
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0'
                }`}
              >
                <div
                  className="min-w-[280px] rounded-[0.75rem] p-4"
                  style={{
                    background: 'var(--surface-container-lowest)',
                    outline: '1px solid var(--outline-variant)',
                    boxShadow: '0px 4px 20px rgba(28,28,21,0.04), 0px 12px 40px rgba(28,28,21,0.06)',
                  }}
                >
                  <div className="flex flex-col">
                    {gatewayItems.map((item) => (
                      <MegaLink key={item.href} {...item} onNavigate={() => setDesktopMenu(null)} />
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/pricing"
                className="flex min-h-[44px] items-center px-3 text-sm font-medium text-[var(--on-surface-variant)] transition-colors hover:text-[var(--on-surface)]"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex min-h-[44px] items-center px-3 text-sm font-medium text-[var(--on-surface-variant)] transition-colors hover:text-[var(--on-surface)]"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-[var(--on-surface-variant)] transition-colors hover:text-[var(--on-surface)]"
            >
              Merchant Login
            </Link>
            <Button size="sm" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 transition-colors hover:bg-[var(--surface-container-low)] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5 text-[var(--on-surface)]" />
            ) : (
              <Menu className="h-5 w-5 text-[var(--on-surface)]" />
            )}
          </button>
        </div>

        {/* Mobile slide-down panel */}
        {open && (
          <div
            className="px-6 py-4 md:hidden"
            style={{ background: 'var(--surface-container-low)' }}
          >
            <div className="flex flex-col gap-2">

              {/* Products accordion */}
              <button
                type="button"
                className="flex min-h-[44px] w-full items-center justify-between rounded-lg px-2 text-left text-sm font-semibold text-[var(--on-surface)]"
                onClick={() => setMobileProductsOpen((v) => !v)}
                aria-expanded={mobileProductsOpen}
              >
                Products
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {mobileProductsOpen && (
                <div
                  className="flex flex-col gap-1 pl-3"
                  style={{ borderLeft: '2px solid var(--outline-variant)' }}
                >
                  {[...productsAccept, ...productsManage].map((item) => (
                    <MegaLink key={item.href} {...item} onNavigate={closeAllMobile} />
                  ))}
                  <Link
                    href="/features"
                    onClick={closeAllMobile}
                    className="py-2 text-sm font-semibold text-[var(--secondary)]"
                  >
                    See all features →
                  </Link>
                </div>
              )}

              {/* Solutions accordion */}
              <button
                type="button"
                className="flex min-h-[44px] w-full items-center justify-between rounded-lg px-2 text-left text-sm font-semibold text-[var(--on-surface)]"
                onClick={() => setMobileSolutionsOpen((v) => !v)}
                aria-expanded={mobileSolutionsOpen}
              >
                Solutions
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {mobileSolutionsOpen && (
                <div
                  className="flex flex-col gap-1 pl-3"
                  style={{ borderLeft: '2px solid var(--outline-variant)' }}
                >
                  {solutionsItems.map((item) => (
                    <MegaLink key={item.href} {...item} onNavigate={closeAllMobile} />
                  ))}
                  <Link
                    href="/services"
                    onClick={closeAllMobile}
                    className="py-2 text-sm font-semibold text-[var(--secondary)]"
                  >
                    All solutions →
                  </Link>
                </div>
              )}

              {/* Gateway accordion */}
              <button
                type="button"
                className="flex min-h-[44px] w-full items-center justify-between rounded-lg px-2 text-left text-sm font-semibold text-[var(--on-surface)]"
                onClick={() => setMobileGatewayOpen((v) => !v)}
                aria-expanded={mobileGatewayOpen}
              >
                Gateway
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${mobileGatewayOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {mobileGatewayOpen && (
                <div
                  className="flex flex-col gap-1 pl-3"
                  style={{ borderLeft: '2px solid var(--outline-variant)' }}
                >
                  {gatewayItems.map((item) => (
                    <MegaLink key={item.href} {...item} onNavigate={closeAllMobile} />
                  ))}
                </div>
              )}

              <Link
                href="/pricing"
                className="min-h-[44px] py-3 text-sm font-medium text-[var(--on-surface-variant)]"
                onClick={closeAllMobile}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="min-h-[44px] py-3 text-sm font-medium text-[var(--on-surface-variant)]"
                onClick={closeAllMobile}
              >
                Contact
              </Link>

              <div
                className="mt-2 flex flex-col gap-3 pt-4"
                style={{ borderTop: '1px solid var(--outline-variant)' }}
              >
                <Link
                  href="/login"
                  className="text-sm font-medium text-[var(--on-surface-variant)]"
                  onClick={closeAllMobile}
                >
                  Merchant Login
                </Link>
                <Button size="sm" asChild>
                  <Link href="/apply" onClick={closeAllMobile}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
