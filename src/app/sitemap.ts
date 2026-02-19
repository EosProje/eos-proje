import { MetadataRoute } from 'next'
import { getAllMDXMetadata } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.eosproje.com'

    const blogPosts = getAllMDXMetadata('blog', 'tr')
    const enBlogPosts = getAllMDXMetadata('blog', 'en')
    const caseStudies = getAllMDXMetadata('case-studies', 'tr')
    const enCaseStudies = getAllMDXMetadata('case-studies', 'en')
    const sectors = getAllMDXMetadata('sectors', 'tr')

    const staticPages = [
        // TR pages
        { url: baseUrl, priority: 1.0, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/hakkimizda`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/ekip`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/point-cloud-to-bim`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/as-built-modelleme`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/2d-to-3d-bim-donusum`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/endustriyel-ekipman-modelleme`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/sektorler`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/referanslar`, priority: 0.9, changeFrequency: 'weekly' as const },
        { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
        { url: `${baseUrl}/sss`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/iletisim`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/qa-qc`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/surec-ve-standartlar`, priority: 0.6, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/ucretlendirme`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/teknik-dokumanlar`, priority: 0.6, changeFrequency: 'monthly' as const },
        // EN pages
        { url: `${baseUrl}/en`, priority: 1.0, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/about`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/team`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/point-cloud-to-bim`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/as-built-modeling`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/2d-to-3d-bim-conversion`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/industrial-equipment-modeling`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/sectors`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/references`, priority: 0.9, changeFrequency: 'weekly' as const },
        { url: `${baseUrl}/en/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
        { url: `${baseUrl}/en/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/qa-qc`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/process-and-standards`, priority: 0.6, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/pricing`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/technical-docs`, priority: 0.6, changeFrequency: 'monthly' as const },
    ]

    const blogUrls = blogPosts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        priority: 0.6,
        changeFrequency: 'monthly' as const,
        lastModified: post.date ? new Date(post.date) : new Date(),
    }))

    const enBlogUrls = enBlogPosts.map(post => ({
        url: `${baseUrl}/en/blog/${post.slug}`,
        priority: 0.6,
        changeFrequency: 'monthly' as const,
        lastModified: post.date ? new Date(post.date) : new Date(),
    }))

    const caseStudyUrls = caseStudies.map(cs => ({
        url: `${baseUrl}/referanslar/${cs.slug}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
        lastModified: cs.lastUpdated ? new Date(cs.lastUpdated) : (cs.date ? new Date(cs.date) : new Date()),
    }))

    const enCaseStudyUrls = enCaseStudies.map(cs => ({
        url: `${baseUrl}/en/references/${cs.slug}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
        lastModified: cs.lastUpdated ? new Date(cs.lastUpdated) : (cs.date ? new Date(cs.date) : new Date()),
    }))

    const sectorUrls = sectors.map(sector => ({
        url: `${baseUrl}/sektorler/${sector.slug}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
        lastModified: sector.lastUpdated ? new Date(sector.lastUpdated) : (sector.date ? new Date(sector.date) : new Date()),
    }))

    return [...staticPages, ...blogUrls, ...enBlogUrls, ...caseStudyUrls, ...enCaseStudyUrls, ...sectorUrls]
}
