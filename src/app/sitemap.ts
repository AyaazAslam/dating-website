import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/privacy', '/terms', '/login', '/register']
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}
