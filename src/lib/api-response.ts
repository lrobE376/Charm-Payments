import { NextResponse } from 'next/server'

export type ApiSuccess<T> = { success: true; data: T }
export type ApiFailure = { success: false; error: string; code?: string }

export type ApiResponseBody<T> = ApiSuccess<T> | ApiFailure

export function jsonSuccess<T>(data: T, status = 200): NextResponse<ApiSuccess<T>> {
  return NextResponse.json({ success: true, data }, { status })
}

export function jsonError(error: string, status: number, code?: string): NextResponse<ApiFailure> {
  return NextResponse.json({ success: false, error, ...(code ? { code } : {}) }, { status })
}
