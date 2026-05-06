// src/app/(marketing)/features/recurring-billing/page.tsx
import type { Metadata } from 'next'
import { FeatureTemplate } from '@/components/atelier/feature-template/FeatureTemplate'
import { FEATURES } from '@/lib/features/data'

const data = FEATURES['recurring-billing']

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
}

export default function RecurringBillingFeaturePage() {
  return <FeatureTemplate data={data} />
}
