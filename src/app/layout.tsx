import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: { default: 'Charm Payments — Payment Processing Built for Business', template: '%s — Charm Payments' },
  description:
    'Charm Payments gives St. Louis small businesses enterprise-grade payment processing — credit cards, ACH, Apple Pay, and more. Powered by NMI and First Data.',
  metadataBase: new URL('https://charm-payments.vercel.app'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-dark focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
