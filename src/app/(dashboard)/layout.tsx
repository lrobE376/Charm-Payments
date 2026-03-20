import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardSidebar from '@/components/dashboard/Sidebar'
import DashboardHeader from '@/components/dashboard/Header'
import type { Merchant } from '@/types'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: merchant } = await supabase.from('merchants').select('*').eq('user_id', user.id).single()
  if (!merchant) redirect('/apply')
  const m = merchant as Merchant
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar merchant={m} />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader merchant={m} />
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
