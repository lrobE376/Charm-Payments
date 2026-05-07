// src/app/api/quote/upload/route.ts
import { randomUUID } from 'crypto'
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'
import { rateLimitGate } from '@/lib/rate-limit/simple'

const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
const MAX_BYTES = 10 * 1024 * 1024 // 10 MB

const EXT_MAP: Record<string, string> = {
  'application/pdf': 'pdf',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}

// Private bucket — must be created in Supabase dashboard with public reads disabled.
// See PHASE-1-SECURITY.md for the manual provisioning step.
const PRIVATE_BUCKET = 'merchant-statements-private'
const SIGNED_URL_TTL_SECONDS = 60 * 60 * 24 // 24 hours

export async function POST(request: Request) {
  const limited = rateLimitGate(request, 5, 60_000)
  if (limited) return limited
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file || !(file instanceof File)) {
      return jsonError('No file provided', 400, 'MISSING_FILE')
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return jsonError(
        'Invalid file type. Only PDF, JPEG, PNG, and WebP are accepted.',
        415,
        'INVALID_FILE_TYPE',
      )
    }

    if (file.size > MAX_BYTES) {
      return jsonError('File exceeds 10 MB limit', 413, 'FILE_TOO_LARGE')
    }

    const ext = EXT_MAP[file.type]
    const submissionToken = randomUUID()
    const random = Math.random().toString(36).slice(2, 10)
    // submissionToken makes the path unguessable; signed URL gates access.
    const filename = `${random}.${ext}`
    const storagePath = `submissions/${submissionToken}/${filename}`

    const arrayBuffer = await file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    const supabase = createAdminClient()
    const { error: uploadError } = await supabase.storage
      .from(PRIVATE_BUCKET)
      .upload(storagePath, buffer, { contentType: file.type, upsert: false })

    if (uploadError) {
      console.error('[upload] Supabase storage upload failed:', uploadError.message)
      return jsonError('Upload failed', 500, 'UPLOAD_ERROR')
    }

    const { data: signedData, error: signError } = await supabase.storage
      .from(PRIVATE_BUCKET)
      .createSignedUrl(storagePath, SIGNED_URL_TTL_SECONDS)

    if (signError || !signedData?.signedUrl) {
      console.error('[upload] Signed URL generation failed:', signError?.message)
      return jsonError('Could not generate access URL', 500, 'SIGN_URL_ERROR')
    }

    // Response shape preserves the existing `url` + `path` fields so the
    // quote-form client doesn't break. `url` is now a 24-hour signed URL
    // instead of a public URL. `submissionToken` lets a future admin
    // endpoint re-sign the path on demand.
    return jsonSuccess({
      url: signedData.signedUrl,
      path: storagePath,
      submissionToken,
      expiresInSeconds: SIGNED_URL_TTL_SECONDS,
    })
  } catch (err) {
    console.error('[upload] Unhandled error:', err)
    return jsonError('Internal server error', 500, 'SERVER_ERROR')
  }
}
