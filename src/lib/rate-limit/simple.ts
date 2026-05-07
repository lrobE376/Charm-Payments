// src/lib/rate-limit/simple.ts
// Per-IP, per-instance, in-memory rate limiter for public-facing endpoints.
// NOTE: This is per-Vercel-serverless-instance limiting. Adequate to slow
// abuse but NOT a production-grade limiter — replace with Upstash/Redis
// for true distributed rate limiting.

const rateMap = new Map<string, { count: number; resetAt: number }>()

/**
 * Returns true if the request is allowed; false if it exceeds the limit
 * within the rolling window.
 */
export function checkRateLimit(ip: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }
  if (entry.count >= limit) return false
  entry.count++
  return true
}

/**
 * Best-effort client IP extraction. Falls back to 'unknown' so the limiter
 * still applies a shared bucket (which is conservative — better to over-limit
 * than to fail open).
 */
export function getClientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  const realIp = req.headers.get('x-real-ip')
  if (realIp) return realIp.trim()
  return 'unknown'
}

/**
 * Convenience: returns null if allowed, or a 429 Response if over-limit.
 */
export function rateLimitGate(req: Request, limit = 5, windowMs = 60_000): Response | null {
  const ip = getClientIp(req)
  if (!checkRateLimit(ip, limit, windowMs)) {
    return new Response(JSON.stringify({ error: 'Too many requests' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json', 'Retry-After': String(Math.ceil(windowMs / 1000)) },
    })
  }
  return null
}
