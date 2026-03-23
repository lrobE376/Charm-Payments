'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AlertCircle, ArrowDownToLine, CreditCard, LayoutDashboard, Settings } from 'lucide-react'

const items = [
  { href: '/dashboard', label: 'Overview', Icon: LayoutDashboard },
  { href: '/dashboard/transactions', label: 'Transactions', Icon: CreditCard },
  { href: '/dashboard/payouts', label: 'Payouts', Icon: ArrowDownToLine },
  { href: '/dashboard/disputes', label: 'Disputes', Icon: AlertCircle },
  { href: '/dashboard/settings', label: 'Settings', Icon: Settings },
] as const

export default function DashboardMobileNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Dashboard mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-50 block border-t border-white/10 bg-brand-dark lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex flex-row">
        {items.map(({ href, label, Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={`flex min-h-[44px] flex-1 flex-col items-center gap-0.5 py-3 ${
                active ? 'text-brand-accent' : 'text-white/50'
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
