import type { Metadata } from 'next'
import { ProductFeaturePage } from '../_components/ProductFeaturePage'
import { productFeaturePages } from '../_data/productFeaturePages'

const content = productFeaturePages.virtualTerminal

export const metadata: Metadata = content.metadata

export default function VirtualTerminalFeaturePage() {
  return <ProductFeaturePage content={content} />
}
