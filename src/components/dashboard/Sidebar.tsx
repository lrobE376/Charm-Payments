'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, CreditCard, ArrowDownToLine, AlertCircle, Settings, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { createClient } from '@/lib/supabase/client'
import type { Merchant } from '@/types'

const navItems = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Transactions', href: '/dashboard/transactions', icon: CreditCard },
  { label: 'Payouts', href: '/dashboard/payouts', icon: ArrowDownToLine },
  { label: 'Disputes', href: '/dashboard/disputes', icon: AlertCircle },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardSidebar({ merchant }: { merchant: Merchant }) {
  const pathname = usePathname()
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <aside className="hidden lg:flex w-64 bg-brand-dark flex-col min-h-screen" aria-label="Dashboard navigation">
      <div className="p-6 border-b border-white/10">
        <Link href="/">
          <Image src="/images/white-logo.png" alt="Charm Payments" width={140} height={36} />
        </Link>
      </div>
      <div className="px-4 py-4 border-b border-white/10">
        <p className="text-xs text-white/40 uppercase tracking-wider">Merchant Account</p>
        <p className="text-sm font-semibold text-white mt-1 truncate">{merchant.business_name}</p>
        {merchant.mid && <p className="text-xs text-white/50 mt-0.5">MID: {merchant.mid}</p>}
        <span
          className={cn(
            'inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium',
            merchant.status === 'approved' ? 'bg-brand-accent text-brand-dark' : 'bg-yellow-400 text-yellow-900'
          )}
        >
          {merchant.status}
        </span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px]',
                active ? 'bg-white/15 text-white' : 'text-white/60 hover:bg-white/10 hover:text-white'
              )}
            >
              <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-3 border-t border-white/10">
        <button
          type="button"
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-colors w-full min-h-[44px]"
        >
          <LogOut className="w-4 h-4" aria-hidden="true" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
