// src/app/(marketing)/features/ecommerce/page.tsx
import type { Metadata } from 'next'
import { FeatureTemplate } from '@/components/atelier/feature-template/FeatureTemplate'
import { FEATURES } from '@/lib/features/data'

const data = FEATURES['ecommerce']

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
}

export default function EcommerceFeaturePage() {
  return <FeatureTemplate data={data} />
}
