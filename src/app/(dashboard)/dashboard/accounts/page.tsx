import DashboardPageHeader from '@/components/dashboard/DashboardPageHeader'
import Badge from '@/components/ui/Badge'
import { getMerchantAccounts } from '@/lib/services/account-service'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Accounts — Charm Payments' }

export default function DashboardAccountsPage() {
  const accounts = getMerchantAccounts()

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Merchant accounts"
        description="Operational view of onboarding and gateway assignment — extend with Supabase sync later."
      />
      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
        <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Onboarding status</span>
        <span className="rounded-full border border-dashed border-gray-200 px-3 py-1 text-gray-400">MID search (TODO)</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-gray-100 bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Business</th>
              <th className="px-4 py-3 font-semibold">Owner</th>
              <th className="px-4 py-3 font-semibold">Processor</th>
              <th className="px-4 py-3 font-semibold">Gateway</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {accounts.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50/80">
                <td className="px-4 py-3 font-medium text-gray-900">{a.businessName}</td>
                <td className="px-4 py-3 text-gray-700">
                  <div>{a.ownerName}</div>
                  <div className="text-xs text-gray-500">{a.email}</div>
                </td>
                <td className="px-4 py-3 text-gray-600">{a.processor}</td>
                <td className="px-4 py-3 text-gray-600">{a.gateway}</td>
                <td className="px-4 py-3">
                  <Badge status={a.status} />
                </td>
                <td className="px-4 py-3 text-gray-500">{new Date(a.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
