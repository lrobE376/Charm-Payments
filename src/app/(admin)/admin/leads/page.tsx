// src/app/(admin)/admin/leads/page.tsx
import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase/admin'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = { title: 'Leads — Admin' }

export default async function AdminLeadsPage() {
  const admin = createAdminClient()
  const { data: leads } = await admin
    .from('leads')
    .select('id, name, business_name, email, phone, monthly_volume, source, status, created_at')
    .order('created_at', { ascending: false })
    .limit(200)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
        <p className="mt-1 text-sm text-gray-500">Inbound merchant leads</p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Business</th>
              <th className="px-5 py-3">Monthly Vol.</th>
              <th className="px-5 py-3">Source</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {(leads ?? []).map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">
                  {lead.name}
                  <div className="text-xs text-gray-400 font-normal">{lead.email}</div>
                </td>
                <td className="px-5 py-3.5 text-gray-700">{lead.business_name}</td>
                <td className="px-5 py-3.5 text-gray-600">{lead.monthly_volume ?? '—'}</td>
                <td className="px-5 py-3.5 capitalize text-gray-500">{lead.source}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${
                    lead.status === 'converted' ? 'bg-green-50 text-green-700' :
                    lead.status === 'new'       ? 'bg-blue-50 text-blue-700' :
                                                  'bg-gray-100 text-gray-600'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-xs text-gray-400">{formatDate(lead.created_at)}</td>
              </tr>
            ))}
            {!leads?.length && (
              <tr>
                <td colSpan={6} className="px-5 py-12 text-center text-sm text-gray-400">
                  No leads yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
