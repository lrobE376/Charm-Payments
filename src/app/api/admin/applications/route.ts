// src/app/api/admin/applications/route.ts
// GET /api/admin/applications?status=pending&limit=50&offset=0
import { requireAdmin } from '@/lib/auth/require-admin'
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'

export async function GET(request: Request) {
  const guard = await requireAdmin()
  if (!guard.ok) return guard.response

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const limit = Math.min(Number(searchParams.get('limit') ?? '50'), 200)
  const offset = Number(searchParams.get('offset') ?? '0')

  const db = createAdminClient()
  let query = db
    .from('merchant_applications')
    .select(
      'id, application_token, owner_first_name, owner_last_name, owner_email, ' +
      'business_name, monthly_volume, status, created_at, reviewed_at',
      { count: 'exact' },
    )
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (status) query = query.eq('status', status)

  const { data, error, count } = await query
  if (error) return jsonError('Failed to load applications', 500, 'DB_ERROR')

  return jsonSuccess({ applications: data, total: count ?? 0, limit, offset })
}
