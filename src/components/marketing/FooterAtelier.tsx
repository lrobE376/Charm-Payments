// src/components/marketing/FooterAtelier.tsx
import Link from 'next/link'
import { Container } from '@/components/atelier/Container'
import { cn } from '@/lib/utils'

const QUICK_LINKS = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get a Quote', href: '/quote' },
]

const SOLUTIONS = [
  { label: 'Charm Cards', href: '/cards' },
  { label: 'Charm Defense', href: '/charm-defense' },
  { label: 'Virtual Terminal', href: '/services' },
  { label: 'Gateway', href: '/gateway' },
]

const RESOURCES = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'API Documentation', href: '/docs' },
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
      className="bg-[#0F3520] text-atelier-cream/70 py-6 px-lg"
    >
      <Container>
        <div
          className={cn(
            'grid grid-cols-1 gap-xl',
            'md:grid-cols-[1.5fr_1fr_1fr_1fr]',
          )}
        >
          <div>
            <div className="font-atelierSerif font-medium text-base text-atelier-cream">
              Charm Payments<span className="text-atelier-gold">.</span>
            </div>
            <p className="text-xs text-atelier-cream/65 mt-2 leading-relaxed max-w-sm">
              Enterprise payment processing for businesses of all sizes — built
              and supported in St. Louis.
            </p>
            <div className="mt-3 space-y-1">
              <a
                href="tel:+13145550198"
                className="block font-atelierMono text-xs text-atelier-cream/85 hover:text-atelier-cream transition-colors"
              >
                +1 (314) 555-0198
              </a>
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
            © Charm Payments — A Charm Holdings LLC Company
          </span>
          <span className="font-atelierMono text-xs text-atelier-cream/70">
            Built in St. Louis · 2026
          </span>
        </div>
      </Container>
    </footer>
  )
}
