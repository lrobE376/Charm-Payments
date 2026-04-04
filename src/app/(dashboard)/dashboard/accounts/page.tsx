// src/app/(dashboard)/dashboard/accounts/page.tsx
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import DashboardPageHeader from '@/components/dashboard/DashboardPageHeader'
import Badge from '@/components/ui/Badge'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Accounts — Charm Payments' }

interface MerchantRow {
  id: string
  business_name: string
  owner_first_name: string | null
  owner_last_name: string | null
  owner_email: string | null
  status: string
  monthly_volume: string | null
  mid: string | null
  processor: string | null
  gateway: string | null
  created_at: string
}

export default async function DashboardAccountsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data, error } = await supabase
    .from('merchants')
    .select(
      'id, business_name, owner_first_name, owner_last_name, owner_email, status, monthly_volume, mid, processor, gateway, created_at',
    )
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const accounts = (data ?? []) as MerchantRow[]

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Merchant accounts"
        description="Your active merchant IDs, processing status, and monthly volume."
      />

      {error && (
        <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
          Failed to load accounts. Please refresh the page.
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="border-b border-gray-100 bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 font-semibold">MID</th>
              <th className="px-4 py-3 font-semibold">Business</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Monthly Volume</th>
              <th className="px-4 py-3 font-semibold">Since</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {accounts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-gray-400">
                  No merchant accounts found. Once your application is approved, your account will appear here.
                </td>
              </tr>
            )}
            {accounts.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50/80">
                <td className="px-4 py-3 font-mono text-xs text-gray-600">
                  {a.mid ?? <span className="text-gray-300 italic">Pending</span>}
                </td>
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-900">{a.business_name}</p>
                  {a.owner_email && (
                    <p className="text-xs text-gray-500">{a.owner_email}</p>
                  )}
                </td>
                <td className="px-4 py-3">
                  <Badge status={a.status} />
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {a.monthly_volume ? `$${Number(a.monthly_volume).toLocaleString()}` : <span className="text-gray-300">—</span>}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(a.created_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
