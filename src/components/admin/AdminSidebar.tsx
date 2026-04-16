// src/components/admin/AdminSidebar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FileText,
  Users,
  Ticket,
  Building2,
  ShieldCheck,
  LogOut,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { signOut } from '@/app/(dashboard)/actions'

const navItems = [
  { label: 'Overview',     href: '/admin',                   icon: LayoutDashboard },
  { label: 'Applications', href: '/admin/applications',      icon: FileText        },
  { label: 'Merchants',    href: '/admin/merchants',         icon: Building2       },
  { label: 'Leads',        href: '/admin/leads',             icon: Users           },
  { label: 'Tickets',      href: '/admin/tickets',           icon: Ticket          },
  { label: 'Admins',       href: '/admin/admins',            icon: ShieldCheck     },
]

export default function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex w-64 bg-brand-dark flex-col min-h-screen" aria-label="Admin navigation">
      <div className="p-6 border-b border-white/10">
        <Link href="/">
          <Image src="/images/white-logo.png" alt="Charm Payments" width={220} height={66} />
        </Link>
      </div>

      <div className="px-4 py-4 border-b border-white/10">
        <p className="text-xs text-white/40 uppercase tracking-wider">Admin Portal</p>
        <p className="text-sm font-semibold text-white mt-1 truncate">{email}</p>
        <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium bg-brand-accent text-brand-dark">
          Admin
        </span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const active =
            item.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px]',
                active
                  ? 'bg-white/15 text-white'
                  : 'text-white/60 hover:bg-white/10 hover:text-white'
              )}
            >
              <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-3 border-t border-white/10">
        <form action={signOut}>
          <button
            type="submit"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-colors w-full min-h-[44px]"
          >
            <LogOut className="w-4 h-4" aria-hidden="true" />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  )
}
