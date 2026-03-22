'use client'

import { useCallback } from 'react'
import { Phone } from 'lucide-react'
import DashboardPageHeader from '@/components/dashboard/DashboardPageHeader'
import Badge from '@/components/ui/Badge'
import { formatDialLink } from '@/lib/integrations/ooma'
import type { Lead } from '@/types/lead'

export default function LeadsDashboardClient({ leads }: { leads: Lead[] }) {
  const handleCallLog = useCallback(async (lead: Lead) => {
    if (!lead.pipedriveDealId) return
    await fetch('/api/integrations/ooma', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dealId: lead.pipedriveDealId,
        leadName: lead.name,
        phone: lead.phone,
      }),
    })
  }, [])

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        title="Leads"
        description="Pipeline view — synced to Pipedrive when API credentials are configured. Click phone to dial (Ooma) and log the attempt to the deal."
      />
      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
        <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Filter: all</span>
        <span className="rounded-full border border-dashed border-gray-200 px-3 py-1 text-gray-400">Source (TODO)</span>
        <span className="rounded-full border border-dashed border-gray-200 px-3 py-1 text-gray-400">Status (TODO)</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="border-b border-gray-100 bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Business</th>
              <th className="px-4 py-3 font-semibold">Contact</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Volume</th>
              <th className="px-4 py-3 font-semibold">Source</th>
              <th className="px-4 py-3 font-semibold">Pipedrive</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Created</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-8 text-center text-gray-500">
                  No leads yet — submissions from Quote and Contact will appear here.
                </td>
              </tr>
            ) : (
              leads.map((l) => (
                <tr key={l.id} className="hover:bg-gray-50/80">
                  <td className="px-4 py-3 font-medium text-gray-900">{l.businessName}</td>
                  <td className="px-4 py-3 text-gray-700">
                    <div>{l.name}</div>
                    <div className="text-xs text-gray-500">{l.email}</div>
                  </td>
                  <td className="px-4 py-3">
                    {l.phone ? (
                      <a
                        href={formatDialLink(l.phone)}
                        onClick={() => {
                          void handleCallLog(l)
                        }}
                        className="inline-flex items-center gap-2 font-medium text-brand-accent hover:underline"
                        title="Click to call via Ooma"
                      >
                        <Phone className="h-4 w-4 shrink-0" aria-hidden />
                        {l.phone}
                      </a>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{l.monthlyVolume}</td>
                  <td className="px-4 py-3 text-gray-600">{l.source}</td>
                  <td className="px-4 py-3">
                    {l.pipedriveDealId ? (
                      <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">Synced</span>
                    ) : (
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">Not synced</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <Badge status={l.status} />
                  </td>
                  <td className="px-4 py-3 text-gray-500">{new Date(l.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-3">
                    {l.pipedriveDealId ? (
                      <button
                        type="button"
                        onClick={() => void handleCallLog(l)}
                        className="text-xs font-semibold text-brand-dark underline-offset-2 hover:underline"
                      >
                        Log call
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
