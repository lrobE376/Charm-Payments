import type { Metadata } from 'next'
import { ProductFeaturePage } from '../_components/ProductFeaturePage'
import { productFeaturePages } from '../_data/productFeaturePages'

const content = productFeaturePages.ecommerce

export const metadata: Metadata = content.metadata

export default function EcommerceFeaturePage() {
  return <ProductFeaturePage content={content} />
}
