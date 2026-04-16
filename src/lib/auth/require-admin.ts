// src/lib/auth/require-admin.ts
// Returns the authenticated admin user, or null if the caller is not an admin.
// Use this at the top of every /api/admin/* route handler.
//
// Pattern:
//   const admin = await requireAdmin()
//   if (!admin.ok) return admin.response

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError } from '@/lib/api-response'
import type { User } from '@supabase/supabase-js'

type AdminGuardOk = { ok: true; user: User; adminId: string }
type AdminGuardFail = { ok: false; response: Response }
type AdminGuard = AdminGuardOk | AdminGuardFail

export async function requireAdmin(): Promise<AdminGuard> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { ok: false, response: jsonError('Unauthorized', 401, 'UNAUTHORIZED') }
  }

  const db = createAdminClient()
  const { data: profile } = await db
    .from('admin_profiles')
    .select('id')
    .eq('id', user.id)
    .single()

  if (!profile) {
    return { ok: false, response: jsonError('Forbidden', 403, 'FORBIDDEN') }
  }

  return { ok: true, user, adminId: profile.id }
}
