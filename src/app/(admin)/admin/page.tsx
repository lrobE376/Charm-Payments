// src/app/(admin)/admin/page.tsx
import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase/admin'
import { FileText, Users, Ticket, Building2 } from 'lucide-react'

export const metadata: Metadata = { title: 'Admin — Charm Payments' }

export default async function AdminOverviewPage() {
  const admin = createAdminClient()

  const [
    { count: appCount },
    { count: merchantCount },
    { count: leadCount },
    { count: ticketCount },
  ] = await Promise.all([
    admin.from('merchant_applications').select('*', { count: 'exact', head: true }).eq('status', 'new'),
    admin.from('merchants').select('*', { count: 'exact', head: true }),
    admin.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'new'),
    admin.from('tickets').select('*', { count: 'exact', head: true }).eq('status', 'open'),
  ])

  const stats = [
    { label: 'Pending Applications', value: appCount ?? 0, icon: FileText, href: '/admin/applications', color: 'text-amber-600' },
    { label: 'Active Merchants',      value: merchantCount ?? 0, icon: Building2, href: '/admin/merchants', color: 'text-green-600' },
    { label: 'New Leads',             value: leadCount ?? 0, icon: Users, href: '/admin/leads', color: 'text-blue-600' },
    { label: 'Open Tickets',          value: ticketCount ?? 0, icon: Ticket, href: '/admin/tickets', color: 'text-red-600' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
        <p className="mt-1 text-sm text-gray-500">Charm Payments admin dashboard</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, href, color }) => (
          <a
            key={href}
            href={href}
            className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50">
              <Icon className={`h-6 w-6 ${color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-xs text-gray-500">{label}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
