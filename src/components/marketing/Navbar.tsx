'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <div className="bg-brand-dark text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>Enterprise Payment Processing — Powered by NMI Gateway</span>
          <div className="flex gap-6">
            <a href="tel:+13145550198" className="hover:text-brand-accent transition-colors">
              +1 (314) 555-0198
            </a>
            <a href="mailto:merchants@charmpayments.com" className="hover:text-brand-accent transition-colors">
              merchants@charmpayments.com
            </a>
          </div>
        </div>
      </div>
      <nav
        className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/images/logo.png" alt="Charm Payments" width={220} height={66} priority />
          </Link>
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-gray-700 hover:text-brand-dark transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors">
              Merchant Login
            </Link>
            <Button size="sm" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4">
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                <Link href="/login" className="text-sm font-medium text-gray-600" onClick={() => setOpen(false)}>
                  Merchant Login
                </Link>
                <Button size="sm" asChild>
                  <Link href="/apply" onClick={() => setOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}
