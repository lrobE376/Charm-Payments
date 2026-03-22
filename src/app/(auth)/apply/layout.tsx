import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Apply for a Merchant Account — Charm Payments' },
  description:
    'Apply for your Charm Payments merchant account today. Accept credit cards, ACH, and digital wallets with no long-term contracts.',
}

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children
}
