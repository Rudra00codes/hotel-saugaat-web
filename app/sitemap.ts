import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.hotelsaugaatregency.in' // Deployed domain

    // Static routes
    const routes = [
        '',
        '/rooms',
        '/facilities',
        '/events',
        '/gallery',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [
        ...routes,
        // Add dynamic routes here when you have ready data source
    ]
}
