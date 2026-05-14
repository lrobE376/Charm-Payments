// src/app/robots.ts
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.charmpayments.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/apply/submitted',
          '/dashboard',
          '/old-home',
          '/prototype/',
          '/unsubscribe',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
