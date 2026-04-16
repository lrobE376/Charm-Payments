// src/app/api/admin/applications/[id]/route.ts
// GET /api/admin/applications/[id] — full application detail
import { requireAdmin } from '@/lib/auth/require-admin'
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const guard = await requireAdmin()
  if (!guard.ok) return guard.response

  const { id } = await params
  const db = createAdminClient()

  const [{ data: app }, { data: history }] = await Promise.all([
    db
      .from('merchant_applications')
      .select('*')
      .eq('id', id)
      .single(),
    db
      .from('application_status_history')
      .select('id, status, notes, created_at, changed_by')
      .eq('application_id', id)
      .order('created_at', { ascending: false }),
  ])

  if (!app) return jsonError('Application not found', 404, 'NOT_FOUND')

  return jsonSuccess({ application: app, history: history ?? [] })
}
