// src/components/marketing/FooterAtelier.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/atelier/Container'
import { cn } from '@/lib/utils'

const QUICK_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Talk to Charm', href: '/contact' },
  { label: 'Get Free Rate Audit', href: '/quote' },
]

const SOLUTIONS = [
  { label: 'Charm Connect', href: '/' },
  { label: 'Charm Defense', href: '/charm-defense' },
  { label: 'Merchant Tools', href: '/features' },
  { label: 'Charm Cards', href: '/cards' },
]

const RESOURCES = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Merchant Dashboard', href: '/dashboard' },
  { label: 'Support', href: '/contact' },
]

function ColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'font-atelierMono text-xs uppercase tracking-label',
        'text-atelier-cream/70 mb-sm',
      )}
    >
      {children}
    </div>
  )
}

function ColumnLinks({
  links,
}: {
  links: { label: string; href: string }[]
}) {
  return (
    <ul className="space-y-1.5">
      {links.map((l) => (
        <li key={l.label}>
          <Link
            href={l.href}
            className="text-xs hover:text-atelier-cream transition-colors"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function FooterAtelier() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#0F3520] text-atelier-cream/70 py-10 px-lg"
    >
      <Container>
        <div
          className={cn(
            'grid grid-cols-1 gap-xl',
            'md:grid-cols-[1.5fr_1fr_1fr_1fr]',
          )}
        >
          <div>
            <Link href="/" aria-label="Charm Payments — home" className="inline-block">
              <Image
                src="/images/white-logo.png"
                alt="Charm Payments"
                width={320}
                height={120}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-xs text-atelier-cream/65 mt-2 leading-relaxed max-w-sm">
              Charm Connect helps merchants accept payments, reduce chargebacks,
              and manage the business from one simple platform.
            </p>
            <div className="mt-4 space-y-1">
              <a
                href="mailto:merchants@charmpayments.com"
                className="block font-atelierMono text-xs text-atelier-cream/85 hover:text-atelier-cream transition-colors"
              >
                merchants@charmpayments.com
              </a>
            </div>
          </div>

          <div>
            <ColumnHeader>QUICK LINKS</ColumnHeader>
            <ColumnLinks links={QUICK_LINKS} />
          </div>

          <div>
            <ColumnHeader>SOLUTIONS</ColumnHeader>
            <ColumnLinks links={SOLUTIONS} />
          </div>

          <div>
            <ColumnHeader>RESOURCES</ColumnHeader>
            <ColumnLinks links={RESOURCES} />
          </div>
        </div>

        <div
          className={cn(
            'mt-xl pt-3.5 flex flex-col sm:flex-row justify-between gap-xs',
            '[border-top-width:0.5px] border-atelier-cream/10',
          )}
        >
          <span className="text-xs text-atelier-cream/70">
            (c) Charm Connect by Charm Payments
          </span>
          <span className="font-atelierMono text-xs text-atelier-cream/70">
            Premium merchant infrastructure journal
          </span>
        </div>
      </Container>
    </footer>
  )
}





