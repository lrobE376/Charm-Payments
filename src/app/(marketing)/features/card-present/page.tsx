// src/app/(marketing)/features/card-present/page.tsx
import type { Metadata } from 'next'
import { FeatureTemplate } from '@/components/atelier/feature-template/FeatureTemplate'
import { FEATURES } from '@/lib/features/data'

const data = FEATURES['card-present']

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
}

export default function CardPresentFeaturePage() {
  return <FeatureTemplate data={data} />
}
