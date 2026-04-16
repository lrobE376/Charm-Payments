// src/app/api/admin/applications/[id]/review/route.ts
// POST /api/admin/applications/[id]/review
// Flags an application for further review. No auth user is created.
// Body: { notes?: string }

import { requireAdmin } from '@/lib/auth/require-admin'
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const guard = await requireAdmin()
  if (!guard.ok) return guard.response

  const { id } = await params
  let notes: string | undefined
  try {
    const body = (await request.json()) as { notes?: string }
    notes = body.notes
  } catch { /* empty body is fine */ }

  const db = createAdminClient()

  const { error } = await db
    .from('merchant_applications')
    .update({
      status: 'review',
      reviewed_by: guard.user.id,
      reviewed_at: new Date().toISOString(),
      decision_notes: notes ?? null,
    })
    .eq('id', id)

  if (error) return jsonError('Failed to update application', 500, 'DB_ERROR')

  await db.from('application_status_history').insert({
    application_id: id,
    status: 'review',
    changed_by: guard.user.id,
    notes: notes ?? null,
  })

  return jsonSuccess({ flagged: true })
}
