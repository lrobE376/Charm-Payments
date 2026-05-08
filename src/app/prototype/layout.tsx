// src/app/prototype/layout.tsx
import type { Metadata } from 'next'
import { HeaderAtelier } from '@/components/marketing/HeaderAtelier'

export const metadata: Metadata = {
  title: 'Prototype — Charm Payments',
  description: 'Design system prototype, not for public consumption.',
  robots: { index: false, follow: false },
}

export default function PrototypeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderAtelier />
      <main id="main-content">{children}</main>
      <footer
        role="contentinfo"
        className="font-stripeSans bg-apple-canvas-warm"
        style={{
          padding: '32px 32px',
          fontSize: 12,
          fontWeight: 500,
          color: 'rgba(0,0,0,0.45)',
          letterSpacing: '0.04em',
          borderTop: '0.5px solid rgba(0,0,0,0.06)',
          textAlign: 'center',
        }}
      >
        Charm Payments · St. Louis · 2026 · Prototype
      </footer>
    </>
  )
}



