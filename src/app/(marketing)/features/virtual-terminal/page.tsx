// src/app/(marketing)/features/virtual-terminal/page.tsx
import type { Metadata } from 'next'
import { FeatureTemplate } from '@/components/atelier/feature-template/FeatureTemplate'
import { FEATURES } from '@/lib/features/data'

const data = FEATURES['virtual-terminal']

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
}

export default function VirtualTerminalFeaturePage() {
  return <FeatureTemplate data={data} />
}
