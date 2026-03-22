import LeadsDashboardClient from '@/components/dashboard/leads-dashboard-client'
import { getLeads } from '@/lib/services/lead-service'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Leads — Charm Payments' }

export default async function DashboardLeadsPage() {
  const leads = await getLeads()
  return <LeadsDashboardClient leads={leads} />
}
