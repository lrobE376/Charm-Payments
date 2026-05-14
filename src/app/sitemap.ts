// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.charmpayments.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: Array<{
    path: string
    priority: number
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  }> = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/gateway', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/gateway/features', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/gateway/hardware', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/cards', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features/virtual-terminal', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features/tap-to-pay', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features/card-present', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features/ecommerce', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features/ach', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features/invoicing', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features/text-to-pay', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features/recurring-billing', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features/qr-codes', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/features/fraud-protection', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/solutions/retail', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/restaurants', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/beauty', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/services', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/ecommerce', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/high-risk', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/mobile', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/charm-defense', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/quote', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/apply', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ]

  return staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
