import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private/'], // In pages ko crawl mat karne dena
    },
    sitemap: 'https://akplasticscrap.com/sitemap.xml',
  }
}