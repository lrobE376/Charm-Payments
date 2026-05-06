// src/app/(marketing)/features/qr-codes/page.tsx
import type { Metadata } from 'next'
import { FeatureTemplate } from '@/components/atelier/feature-template/FeatureTemplate'
import { FEATURES } from '@/lib/features/data'

const data = FEATURES['qr-codes']

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
}

export default function QrCodesFeaturePage() {
  return <FeatureTemplate data={data} />
}
