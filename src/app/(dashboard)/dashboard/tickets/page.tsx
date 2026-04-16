import DashboardPageHeader from '@/components/dashboard/DashboardPageHeader'
import Badge from '@/components/ui/Badge'
import SupportTicketForm from '@/components/support/support-ticket-form'
import { getTickets } from '@/lib/services/ticket-service'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Support Tickets — Charm Payments' }

export default async function DashboardTicketsPage() {
  const tickets = await getTickets()

  return (
    <div className="space-y-10">
      <DashboardPageHeader
        title="Support tickets"
        description="Lightweight queue — wire to email or a helpdesk provider when ready."
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Open a ticket</h2>
          <p className="mt-1 text-sm text-gray-500">Creates a record via the ticket service API (in-memory stub).</p>
          <div className="mt-4 max-w-md">
            <SupportTicketForm />
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Subject</th>
                <th className="px-4 py-3 font-semibold">From</th>
                <th className="px-4 py-3 font-semibold">Priority</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tickets.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                    No tickets yet.
                  </td>
                </tr>
              ) : (
                tickets.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50/80">
                    <td className="px-4 py-3 font-medium text-gray-900">{t.subject}</td>
                    <td className="px-4 py-3 text-gray-600">
                      <div>{t.name}</div>
                      <div className="text-xs text-gray-500">{t.email}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{t.priority}</td>
                    <td className="px-4 py-3">
                      <Badge status={t.status} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
