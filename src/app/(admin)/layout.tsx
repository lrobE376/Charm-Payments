// src/app/(admin)/layout.tsx
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import AdminSidebar from '@/components/admin/AdminSidebar'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  // Check admin_profiles — only rows inserted by service role grant access
  const admin = createAdminClient()
  const { data: profile } = await admin
    .from('admin_profiles')
    .select('id, email')
    .eq('id', user.id)
    .single()

  if (!profile) redirect('/dashboard')

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar email={profile.email} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b border-gray-200 bg-white px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Admin Portal
          </span>
        </header>
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
