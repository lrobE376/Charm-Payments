import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: { default: 'Charm Payments — Payment Processing Built for Business', template: '%s — Charm Payments' },
  description:
    'Enterprise-grade payment processing for businesses of all sizes. Accept cards, ACH, and more — powered by NMI gateway infrastructure.',
  metadataBase: new URL('https://charm-payments.vercel.app'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
