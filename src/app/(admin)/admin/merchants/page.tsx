// src/app/(admin)/admin/merchants/page.tsx
import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase/admin'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = { title: 'Merchants — Admin' }

export default async function AdminMerchantsPage() {
  const admin = createAdminClient()
  const { data: merchants } = await admin
    .from('merchants')
    .select('id, business_name, email, mid, status, plan, created_at')
    .order('created_at', { ascending: false })
    .limit(200)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Merchants</h1>
        <p className="mt-1 text-sm text-gray-500">All approved merchant accounts</p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3">Business</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">MID</th>
              <th className="px-5 py-3">Plan</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Since</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {(merchants ?? []).map((m) => (
              <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">{m.business_name}</td>
                <td className="px-5 py-3.5 text-gray-600">{m.email}</td>
                <td className="px-5 py-3.5 font-mono text-xs text-gray-500">{m.mid ?? '—'}</td>
                <td className="px-5 py-3.5 capitalize text-gray-700">{m.plan}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${
                    m.status === 'approved' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {m.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-xs text-gray-400">{formatDate(m.created_at)}</td>
              </tr>
            ))}
            {!merchants?.length && (
              <tr>
                <td colSpan={6} className="px-5 py-12 text-center text-sm text-gray-400">
                  No merchants yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
