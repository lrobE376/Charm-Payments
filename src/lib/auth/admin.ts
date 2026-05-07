// src/lib/auth/admin.ts
// Server-only admin gate. Verifies an Authorization: Bearer <key> header
// against ADMIN_API_KEY. If the env var is unset, the gate fails closed.

const HEADER_RE = /^Bearer\s+(.+)$/i

function timingSafeStringCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let mismatch = 0
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return mismatch === 0
}

/**
 * Returns a 401/503 Response if the request is not authorized as admin,
 * or null if the request passed the gate. Use:
 *
 *   const denied = requireAdmin(req)
 *   if (denied) return denied
 */
export function requireAdmin(req: Request): Response | null {
  const expected = process.env.ADMIN_API_KEY
  if (!expected) {
    console.error('[auth] ADMIN_API_KEY not set; rejecting all admin requests')
    return new Response(JSON.stringify({ error: 'Admin auth not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  const header = req.headers.get('authorization') ?? ''
  const match = HEADER_RE.exec(header)
  if (!match) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  if (!timingSafeStringCompare(match[1], expected)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  return null
}
