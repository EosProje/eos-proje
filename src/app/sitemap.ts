import { MetadataRoute } from 'next'
import { getAllMDXMetadata } from '@/lib/mdx'
import { getAllGeoTargets } from '@/lib/keywords'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.eosproje.com'

    const blogPosts = getAllMDXMetadata('blog', 'tr')
    const enBlogPosts = getAllMDXMetadata('blog', 'en')
    const caseStudies = getAllMDXMetadata('case-studies', 'tr')
    const enCaseStudies = getAllMDXMetadata('case-studies', 'en')
    const sectors = getAllMDXMetadata('sectors', 'tr')
    const enSectors = getAllMDXMetadata('sectors', 'en')
    
    // Geographic locations
    const allLocationsTr = getAllGeoTargets('tr')
    const allLocationsEn = getAllGeoTargets('en')

    const staticPages = [
        // TR Ana Sayfalar
        { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
        { url: `${baseUrl}/hakkimizda`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/ekip`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/iletisim`, priority: 0.9, changeFrequency: 'monthly' as const },
        
        // TR Çözümler
        { url: `${baseUrl}/cozumler`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/scan-to-bim`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/nokta-bulutu-bim`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/mevcut-durum-modelleme`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/2d-3d-bim-donusum`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/endustriyel-ekipman-modelleme`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/lazer-tarama`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/dijital-ikiz`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/bim-modelleme`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/hbim`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/cozumler/cakisma-tespiti`, priority: 0.8, changeFrequency: 'monthly' as const },
        
        // TR Sektörler
        { url: `${baseUrl}/sektorler`, priority: 0.8, changeFrequency: 'monthly' as const },
        
        // TR Referanslar
        { url: `${baseUrl}/referanslar`, priority: 0.9, changeFrequency: 'weekly' as const },
        
        // TR Blog & Bilgi Merkezi
        { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
        { url: `${baseUrl}/sss`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/kaynaklar`, priority: 0.7, changeFrequency: 'monthly' as const },
        
        // TR Hizmetler (Yeni)
        { url: `${baseUrl}/hizmetler/rolove-hizmetleri`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/hizmetler/harita-olcme`, priority: 0.9, changeFrequency: 'monthly' as const },
        
        // TR Süreç & Kalite
        { url: `${baseUrl}/qa-qc`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/kalite-politikamiz`, priority: 0.6, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/surec-ve-standartlar`, priority: 0.6, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/ucretlendirme`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/teknik-dokumanlar`, priority: 0.6, changeFrequency: 'monthly' as const },
        
        // TR Yasal
        { url: `${baseUrl}/kvkk`, priority: 0.3, changeFrequency: 'yearly' as const },
        { url: `${baseUrl}/gizlilik`, priority: 0.3, changeFrequency: 'yearly' as const },
        { url: `${baseUrl}/cerez-politikasi`, priority: 0.3, changeFrequency: 'yearly' as const },
        
        // EN Main Pages
        { url: `${baseUrl}/en`, priority: 1.0, changeFrequency: 'weekly' as const },
        { url: `${baseUrl}/en/about`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/team`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
        
        // EN Solutions
        { url: `${baseUrl}/en/solutions`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/scan-to-bim`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/point-cloud-to-bim`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/as-built-modeling`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/2d-to-3d-bim-conversion`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/industrial-equipment-modeling`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/laser-scanning`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/digital-twin`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/bim-modeling`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/hbim`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/solutions/clash-detection`, priority: 0.8, changeFrequency: 'monthly' as const },
        
        // EN Sectors
        { url: `${baseUrl}/en/sectors`, priority: 0.8, changeFrequency: 'monthly' as const },
        
        // EN References
        { url: `${baseUrl}/en/references`, priority: 0.9, changeFrequency: 'weekly' as const },
        
        // EN Blog & Info Center
        { url: `${baseUrl}/en/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
        { url: `${baseUrl}/en/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/resources`, priority: 0.7, changeFrequency: 'monthly' as const },
        
        // EN Process & Quality
        { url: `${baseUrl}/en/qa-qc`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/quality-policy`, priority: 0.6, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/process-and-standards`, priority: 0.6, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/pricing`, priority: 0.7, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/technical-docs`, priority: 0.6, changeFrequency: 'monthly' as const },
        
        // EN Services (New)
        { url: `${baseUrl}/en/services/survey-services`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/en/services/mapping-surveying`, priority: 0.9, changeFrequency: 'monthly' as const },
        
        // EN Legal
        { url: `${baseUrl}/en/gdpr`, priority: 0.3, changeFrequency: 'yearly' as const },
        { url: `${baseUrl}/en/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
        { url: `${baseUrl}/en/cookie-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
        
        // LLM Files
        { url: `${baseUrl}/llm.txt`, priority: 0.5, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/llm-en.txt`, priority: 0.5, changeFrequency: 'monthly' as const },
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

    const enSectorUrls = enSectors.map(sector => ({
        url: `${baseUrl}/en/sectors/${sector.slug}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
        lastModified: sector.lastUpdated ? new Date(sector.lastUpdated) : (sector.date ? new Date(sector.date) : new Date()),
    }))

    // TR Location pages
    // IMPORTANT: Replace Turkish İ BEFORE toLowerCase() to avoid combining character issues
    const locationUrlsTr = allLocationsTr.map(location => ({
        url: `${baseUrl}/lokasyon/${location
            .replace(/İ/g, 'i')   // Turkish capital İ - MUST be before toLowerCase()
            .replace(/I/g, 'i')    // Capital I
            .toLowerCase()
            .replace(/ı/g, 'i')
            .replace(/ö/g, 'o')
            .replace(/ü/g, 'u')
            .replace(/ş/g, 's')
            .replace(/ç/g, 'c')
            .replace(/ğ/g, 'g')
            .replace(/\s+/g, '-')}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
        lastModified: new Date(),
    }))

    // EN Location pages
    const locationUrlsEn = allLocationsEn.map(location => ({
        url: `${baseUrl}/en/location/${location.toLowerCase().replace(/\s+/g, '-')}`,
        priority: 0.7,
        changeFrequency: 'monthly' as const,
        lastModified: new Date(),
    }))

    return [...staticPages, ...blogUrls, ...enBlogUrls, ...caseStudyUrls, ...enCaseStudyUrls, ...sectorUrls, ...enSectorUrls, ...locationUrlsTr, ...locationUrlsEn]
}
