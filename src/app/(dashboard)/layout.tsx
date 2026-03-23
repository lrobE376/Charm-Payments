import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardMobileNav from '@/components/dashboard/DashboardMobileNav'
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
      <div className="relative flex min-w-0 flex-1 flex-col">
        <DashboardHeader merchant={m} />
        <main id="main-content" className="flex-1 p-6 pb-16 lg:p-8 lg:pb-0">
          {children}
        </main>
        <DashboardMobileNav />
      </div>
    </div>
  )
}
