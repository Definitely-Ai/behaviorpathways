import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/mdx'
import { siteConfig } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages = [
    '',
    '/services',
    '/approach',
    '/service-areas',
    '/parent-training',
    '/testimonials',
    '/resources',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/accessibility',
  ]

  // Blog pages
  const blogSlugs = getAllSlugs('blog')
  const blogPages = blogSlugs.map((slug) => `/blog/${slug}`)

  // All pages
  const allPages = [...staticPages, ...blogPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date('2025-09-05'),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 0.8,
  }))
}
