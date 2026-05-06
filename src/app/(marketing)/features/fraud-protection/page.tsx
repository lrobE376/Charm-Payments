// src/app/(marketing)/features/fraud-protection/page.tsx
import type { Metadata } from 'next'
import { FeatureTemplate } from '@/components/atelier/feature-template/FeatureTemplate'
import { FEATURES } from '@/lib/features/data'

const data = FEATURES['fraud-protection']

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
}

export default function FraudProtectionFeaturePage() {
  return <FeatureTemplate data={data} />
}
