'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Container } from '@/components/atelier/Container'

type FooterLink = {
  label: string
  href: string
}

const PRODUCT_LINKS: FooterLink[] = [
  { label: 'Payment Gateway', href: '/gateway' },
  { label: 'Chargeback Management', href: '/charm-defense' },
  { label: 'Fraud Prevention', href: '/features/fraud-protection' },
  { label: 'Payouts', href: '/dashboard' },
]

const SOLUTION_LINKS: FooterLink[] = [
  { label: 'Retail', href: '/solutions/retail' },
  { label: 'E-Commerce', href: '/solutions/ecommerce' },
  { label: 'High-Risk', href: '/solutions/high-risk' },
  { label: 'SaaS', href: '#' },
]

const COMPANY_LINKS: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Contact', href: '/contact' },
]

const RESOURCE_LINKS: FooterLink[] = [
  { label: 'Docs', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Help Center', href: '/faq' },
  { label: 'Status', href: '#' },
]

const COMPLIANCE_LINKS: FooterLink[] = [
  { label: 'PCI Compliance', href: '#' },
  { label: 'Security', href: '#' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

const SOCIALS = [
  { label: 'LinkedIn', Icon: Linkedin, href: '#' },
  { label: 'X / Twitter', Icon: Twitter, href: '#' },
  { label: 'YouTube', Icon: Youtube, href: '#' },
  { label: 'Instagram', Icon: Instagram, href: '#' },
]

function ColumnHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 font-atelierMono text-[10px] uppercase tracking-[0.28em] text-[#0f3520]/62">{children}</div>
}

function LinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          {link.href === '#' ? (
            <a href={link.href} className="text-sm leading-relaxed text-[#11251b]/76 transition-colors hover:text-[#0f3520]">
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className="text-sm leading-relaxed text-[#11251b]/76 transition-colors hover:text-[#0f3520]">
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

function SocialLinks() {
  return (
    <div className="mt-5 flex items-center gap-2">
      {SOCIALS.map(({ label, Icon, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/60 text-[#0f3520] transition-colors hover:border-black/20 hover:bg-white"
        >
          <Icon className="h-4 w-4" aria-hidden />
        </a>
      ))}
    </div>
  )
}

export function FooterAtelier() {
  function handleNewsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: Wire newsletter signup to the selected email service.
  }

  return (
    <footer role="contentinfo" className="border-t border-[#0f3520]/10 bg-brand-light text-[#11251b]">
      <Container className="overflow-hidden">
        <section
          aria-labelledby="footer-newsletter-heading"
          className="border-b border-[#0f3520]/10 py-12 sm:py-14 lg:py-16"
        >
          <div className="grid min-w-0 grid-cols-1 gap-8 rounded-[2px] border border-[#0f3520]/10 bg-[#fbf7ed] px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14 lg:px-12 lg:py-12">
            <div className="min-w-0">
              <p className="font-atelierMono text-[10px] uppercase tracking-[0.28em] text-[#0f3520]/62">Merchant Insights</p>
              <h2 id="footer-newsletter-heading" className="mt-4 max-w-2xl font-atelierSerif text-3xl leading-[1.08] text-[#0f3520] sm:text-4xl">
                Get payment tips, chargeback alerts, and merchant updates.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#11251b]/70 sm:text-base">
                Practical updates for business owners who want cleaner payments, fewer disputes, and better control.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="min-w-0 w-full" aria-label="Newsletter signup">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  className="min-h-12 w-full min-w-0 flex-1 rounded-none border border-[#0f3520]/18 bg-white px-4 text-base text-[#11251b] outline-none transition-colors placeholder:text-[#11251b]/42 focus:border-[#0f3520] focus:ring-2 focus:ring-[#0f3520]/12"
                />
                <button
                  type="submit"
                  className="min-h-12 w-full bg-[#0f3520] px-6 font-atelierMono text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#11251b] focus:outline-none focus:ring-2 focus:ring-[#0f3520]/25 focus:ring-offset-2 focus:ring-offset-[#fbf7ed] sm:w-auto sm:min-w-36"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs leading-5 text-[#11251b]/58">No spam. Just useful merchant insights.</p>
            </form>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 py-12 md:grid-cols-3 lg:grid-cols-6 lg:py-14">
          <div>
            <Link href="/" aria-label="Charm Payments home" className="inline-block">
              <Image src="/images/logo.png" alt="Charm Payments" width={320} height={120} className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#11251b]/70">
              Premium payment infrastructure for modern businesses.
            </p>
            <SocialLinks />
          </div>

          <div>
            <ColumnHeader>Products</ColumnHeader>
            <LinkList links={PRODUCT_LINKS} />
          </div>

          <div>
            <ColumnHeader>Solutions</ColumnHeader>
            <LinkList links={SOLUTION_LINKS} />
          </div>

          <div>
            <ColumnHeader>Company</ColumnHeader>
            <LinkList links={COMPANY_LINKS} />
          </div>

          <div>
            <ColumnHeader>Resources</ColumnHeader>
            <LinkList links={RESOURCE_LINKS} />
          </div>

          <div>
            <ColumnHeader>Compliance</ColumnHeader>
            <LinkList links={COMPLIANCE_LINKS} />
          </div>
        </div>

        <div className="border-t border-[#0f3520]/10 py-4 text-xs text-[#11251b]/58">© 2025 Charm Payments. All rights reserved.</div>
      </Container>
    </footer>
  )
}
