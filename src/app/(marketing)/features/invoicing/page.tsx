import type { Metadata } from 'next'
import { ProductFeaturePage } from '../_components/ProductFeaturePage'
import { productFeaturePages } from '../_data/productFeaturePages'

const content = productFeaturePages.invoicing

export const metadata: Metadata = content.metadata

export default function InvoicingFeaturePage() {
  return <ProductFeaturePage content={content} />
}
