import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image src="/images/white-logo.png" alt="Charm Payments" width={220} height={66} />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Enterprise payment processing for businesses of all sizes — powered by NMI Gateway and First Data/Fiserv acquiring.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm list-none m-0 p-0">
              {(
                [
                  ['Terms & Conditions', '/terms'],
                  ['Privacy Policy', '/privacy'],
                  ['Pricing Plans', '/pricing'],
                  ['FAQ', '/faq'],
                  ['Contact Us', '/contact'],
                ] as const
              ).map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-white/70 hover:text-brand-accent transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Our Solutions</h3>
            <ul className="space-y-3 text-sm list-none m-0 p-0">
              {['Virtual Terminal', 'Recurring Billing', 'E-Commerce Gateway', 'ACH Processing', 'High-Risk Merchants'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/70 hover:text-brand-accent transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-white/70 list-none m-0 p-0">
              <li>
                <a href="mailto:merchants@charmpayments.com" className="hover:text-brand-accent transition-colors">
                  merchants@charmpayments.com
                </a>
              </li>
              <li>
                <a href="tel:+13145550198" className="hover:text-brand-accent transition-colors">
                  +1 (314) 555-0198
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs text-white/35 leading-relaxed">
              Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner.
              Merchant funds are subject to the terms of the Merchant Agreement.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© Charm Payments — A Charm Holdings LLC Company</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
