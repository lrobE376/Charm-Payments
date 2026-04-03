// src/app/api/quote/upload/route.ts
import { createAdminClient } from '@/lib/supabase/admin'
import { jsonError, jsonSuccess } from '@/lib/api-response'

const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
const MAX_BYTES = 10 * 1024 * 1024 // 10 MB

const EXT_MAP: Record<string, string> = {
  'application/pdf': 'pdf',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}

export async function POST(request: Request) {
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
    const timestamp = Date.now()
    const random = Math.random().toString(36).slice(2, 10)
    const filename = `${timestamp}-${random}.${ext}`
    const storagePath = `statements/${filename}`

    const arrayBuffer = await file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    const supabase = createAdminClient()
    const { error } = await supabase.storage
      .from('statements')
      .upload(storagePath, buffer, { contentType: file.type, upsert: false })

    if (error) {
      console.error('Storage upload error:', JSON.stringify(error))
      return jsonError(error.message, 500, 'UPLOAD_ERROR')
    }

    const { data: publicUrlData } = supabase.storage
      .from('statements')
      .getPublicUrl(storagePath)

    return jsonSuccess({ url: publicUrlData.publicUrl, path: storagePath })
  } catch {
    return jsonError('Internal server error', 500, 'SERVER_ERROR')
  }
}
