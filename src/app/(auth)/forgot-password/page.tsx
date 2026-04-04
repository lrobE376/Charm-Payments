// src/app/(auth)/forgot-password/page.tsx
import type { Metadata } from 'next'
import { ForgotPasswordForm } from './forgot-password-form'

export const metadata: Metadata = {
  title: 'Reset Password — Charm Payments',
  description: 'Reset your Charm Payments merchant account password.',
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />
}
