// src/app/(marketing)/features/text-to-pay/page.tsx
import type { Metadata } from 'next'
import { FeatureTemplate } from '@/components/atelier/feature-template/FeatureTemplate'
import { FEATURES } from '@/lib/features/data'

const data = FEATURES['text-to-pay']

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
}

export default function TextToPayFeaturePage() {
  return <FeatureTemplate data={data} />
}
