import { MetadataRoute } from 'next'
import { SITE_URL } from './metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/pourquoi', '/role', '/conditions', '/contrib']

  return routes.map(route => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
