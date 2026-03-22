import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Merchant Login — Charm Payments' },
  description:
    'Log in to your Charm Payments merchant dashboard to view transactions, payouts, disputes, and account settings.',
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children
}
