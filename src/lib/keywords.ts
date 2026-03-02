/**
 * Keywords and Geographic Targets for SEO Optimization
 * EOS Proje - Laser Scanning & BIM Services
 * 
 * Updated: March 2026 - Strategic Market Expansion
 * - Added Gulf region (Saudi Arabia, UAE, Qatar, Kuwait)
 * - Expanded Europe (UK, Italy, Poland, Netherlands)
 * - Added North Africa & Central Asia (Algeria, Egypt, Uzbekistan)
 * - Expanded Turkey (Bursa, Adana, Mersin, Sakarya, Çanakkale)
 */

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export type GeoRegion = 'europe' | 'turkey' | 'middleEast' | 'gulf' | 'northAfricaCentralAsia';

export type ClusterType = 
  | 'scanToBim'
  | 'industrialAndEnergy'
  | 'heritageAndArchitecture'
  | 'mappingAndUAV'
  | 'retailAndCommercial';

export type FunnelType = 
  | 'awareness'
  | 'consideration'
  | 'decision'
  | 'action';

// =============================================================================
// GEOGRAPHIC TARGETS
// =============================================================================

export const geoTargets = {
    europe: {
        tr: ["Almanya", "Romanya", "Macaristan", "Hırvatistan", "İngiltere", "İtalya", "Polonya", "Hollanda"],
        en: ["Germany", "Romania", "Hungary", "Croatia", "United Kingdom", "Italy", "Poland", "Netherlands"]
    },
    turkey: {
        tr: ["İstanbul", "Ankara", "İzmir", "Kocaeli", "İzmit", "Balıkesir", "Eskişehir", "Hatay", "Kahramanmaraş", "Antalya", "Gaziantep", "Rize", "Trabzon", "Diyarbakır", "Bursa", "Adana", "Mersin", "Sakarya", "Çanakkale"],
        en: ["Istanbul", "Ankara", "Izmir", "Kocaeli", "Izmit", "Balikesir", "Eskisehir", "Hatay", "Kahramanmaras", "Antalya", "Gaziantep", "Rize", "Trabzon", "Diyarbakir", "Bursa", "Adana", "Mersin", "Sakarya", "Canakkale"]
    },
    middleEast: {
        tr: ["Libya", "Irak", "Rusya", "Azerbaycan", "Kazakistan"],
        en: ["Libya", "Iraq", "Russia", "Azerbaijan", "Kazakhstan"]
    },
    gulf: {
        tr: ["Suudi Arabistan", "Birleşik Arap Emirlikleri", "Katar", "Kuveyt"],
        en: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait"]
    },
    northAfricaCentralAsia: {
        tr: ["Cezayir", "Mısır", "Özbekistan"],
        en: ["Algeria", "Egypt", "Uzbekistan"]
    }
};

// =============================================================================
// SERVICE KEYWORDS
// =============================================================================

export const serviceKeywords = {
    tr: {
        primary: [
            "lazer tarama",
            "3D lazer tarama",
            "nokta bulutu",
            "BIM modelleme",
            "Scan to BIM",
            "as-built modelleme",
            "rölöve çıkarma",
            "tersine mühendislik",
            "dijital ikiz",
            "endüstriyel tarama"
        ],
        secondary: [
            "LIDAR tarama",
            "3D ölçüm",
            "mevcut durum tespiti",
            "tesis tarama",
            "fabrika tarama",
            "bina tarama",
            "mimari rölöve",
            "tarihi yapı belgeleme",
            "HBIM",
            "restorasyon tarama"
        ],
        services: [
            "nokta bulutu işleme",
            "2D çizim çıkarma",
            "3D model oluşturma",
            "Revit modelleme",
            "çakışma analizi",
            "clash detection",
            "MEP modelleme",
            "yapısal modelleme",
            "deformasyon analizi",
            "harita ölçme"
        ]
    },
    en: {
        primary: [
            "laser scanning",
            "3D laser scanning",
            "point cloud",
            "BIM modeling",
            "Scan to BIM",
            "as-built modeling",
            "survey drawing",
            "reverse engineering",
            "digital twin",
            "industrial scanning"
        ],
        secondary: [
            "LIDAR scanning",
            "3D measurement",
            "existing condition documentation",
            "facility scanning",
            "factory scanning",
            "building scanning",
            "architectural survey",
            "heritage building documentation",
            "HBIM",
            "restoration scanning"
        ],
        services: [
            "point cloud processing",
            "2D drawing extraction",
            "3D model creation",
            "Revit modeling",
            "clash analysis",
            "clash detection",
            "MEP modeling",
            "structural modeling",
            "deformation analysis",
            "mapping surveying"
        ]
    }
};

// =============================================================================
// SECTOR KEYWORDS
// =============================================================================

export const sectorKeywords = {
    tr: [
        "endüstriyel tesis",
        "mimari proje",
        "inşaat sektörü",
        "enerji santrali",
        "petrokimya",
        "çimento fabrikası",
        "otomotiv fabrikası",
        "gıda üretim tesisi",
        "restorasyon",
        "renovasyon",
        "yenileme projesi"
    ],
    en: [
        "industrial facility",
        "architectural project",
        "construction sector",
        "power plant",
        "petrochemical",
        "cement factory",
        "automotive factory",
        "food production facility",
        "restoration",
        "renovation",
        "refurbishment project"
    ]
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Tüm coğrafi hedefleri döndüren fonksiyon
 * Returns all geographic targets for a given language
 */
export const getAllGeoTargets = (lang: 'tr' | 'en' = 'tr'): string[] => {
    return [
        ...geoTargets.europe[lang],
        ...geoTargets.turkey[lang],
        ...geoTargets.middleEast[lang],
        ...geoTargets.gulf[lang],
        ...geoTargets.northAfricaCentralAsia[lang]
    ];
};

/**
 * Belirli bir bölgenin hedeflerini döndüren fonksiyon
 * Returns geographic targets for a specific region
 */
export const getGeoTargetsByRegion = (
    region: GeoRegion, 
    lang: 'tr' | 'en' = 'tr'
): string[] => {
    return geoTargets[region][lang];
};

/**
 * Coğrafi hedef sayısını döndüren fonksiyon
 * Returns the count of geographic targets by region or total
 */
export const getGeoTargetCount = (region?: GeoRegion): number => {
    if (region) {
        return geoTargets[region].tr.length;
    }
    return getAllGeoTargets('tr').length;
};

/**
 * Gelişmiş keyword kombinasyonları oluşturan fonksiyon
 * Generates advanced keyword combinations with geographic targets
 */
export const getAdvancedKeywords = (
    lang: 'tr' | 'en' = 'tr',
    options?: {
        includeGeo?: boolean;
        geoRegion?: GeoRegion | 'all';
        keywordTypes?: ('primary' | 'secondary' | 'services')[];
        limit?: number;
    }
): string[] => {
    const {
        includeGeo = true,
        geoRegion = 'all',
        keywordTypes = ['primary', 'secondary', 'services'],
        limit
    } = options || {};

    const keywords: string[] = [];

    // Base keywords
    keywordTypes.forEach(type => {
        if (serviceKeywords[lang][type]) {
            keywords.push(...serviceKeywords[lang][type]);
        }
    });

    // Add sector keywords
    keywords.push(...sectorKeywords[lang]);

    // Generate geo-combined keywords if enabled
    if (includeGeo) {
        const geoLocations = geoRegion === 'all' 
            ? getAllGeoTargets(lang)
            : getGeoTargetsByRegion(geoRegion, lang);

        const baseKeywords = serviceKeywords[lang].primary.slice(0, 5); // Top 5 primary keywords

        geoLocations.forEach(location => {
            baseKeywords.forEach(keyword => {
                if (lang === 'tr') {
                    keywords.push(`${location} ${keyword}`);
                    keywords.push(`${keyword} ${location}`);
                    keywords.push(`${location} ${keyword} hizmeti`);
                } else {
                    keywords.push(`${keyword} in ${location}`);
                    keywords.push(`${location} ${keyword}`);
                    keywords.push(`${keyword} services ${location}`);
                }
            });
        });
    }

    // Remove duplicates
    const uniqueKeywords = [...new Set(keywords)];

    // Apply limit if specified
    return limit ? uniqueKeywords.slice(0, limit) : uniqueKeywords;
};

/**
 * Belirli bir şehir/ülke için lokalize edilmiş keyword setini döndürür
 * Returns localized keyword set for a specific city/country
 */
export const getLocalizedKeywords = (
    location: string,
    lang: 'tr' | 'en' = 'tr'
): string[] => {
    const keywords: string[] = [];
    const primaryServices = serviceKeywords[lang].primary;

    primaryServices.forEach(service => {
        if (lang === 'tr') {
            keywords.push(`${location} ${service}`);
            keywords.push(`${service} ${location}`);
            keywords.push(`${location}'da ${service}`);
            keywords.push(`${location} ${service} firması`);
            keywords.push(`${location} ${service} hizmeti`);
        } else {
            keywords.push(`${service} in ${location}`);
            keywords.push(`${location} ${service}`);
            keywords.push(`${service} company ${location}`);
            keywords.push(`${service} services in ${location}`);
            keywords.push(`best ${service} ${location}`);
        }
    });

    return keywords;
};

/**
 * Meta description için keyword string oluşturur
 * Generates a keyword string for meta descriptions
 */
export const generateMetaKeywords = (
    lang: 'tr' | 'en' = 'tr',
    includeGeo: boolean = true,
    maxKeywords: number = 10
): string => {
    const keywords = getAdvancedKeywords(lang, {
        includeGeo,
        keywordTypes: ['primary'],
        limit: maxKeywords
    });
    return keywords.join(', ');
};

/**
 * Tüm bölgelerin istatistiklerini döndürür
 * Returns statistics for all regions
 */
export const getGeoStats = () => {
    return {
        europe: {
            count: geoTargets.europe.tr.length,
            countries: geoTargets.europe.tr
        },
        turkey: {
            count: geoTargets.turkey.tr.length,
            cities: geoTargets.turkey.tr
        },
        middleEast: {
            count: geoTargets.middleEast.tr.length,
            countries: geoTargets.middleEast.tr
        },
        gulf: {
            count: geoTargets.gulf.tr.length,
            countries: geoTargets.gulf.tr
        },
        northAfricaCentralAsia: {
            count: geoTargets.northAfricaCentralAsia.tr.length,
            countries: geoTargets.northAfricaCentralAsia.tr
        },
        total: getAllGeoTargets('tr').length
    };
};

/**
 * Bölge bazlı keyword önerileri döndürür
 * Returns region-specific keyword suggestions
 */
export const getRegionKeywordSuggestions = (
    region: GeoRegion,
    lang: 'tr' | 'en' = 'tr'
): string[] => {
    const locations = getGeoTargetsByRegion(region, lang);
    const suggestions: string[] = [];
    
    const topKeywords = serviceKeywords[lang].primary.slice(0, 3);
    
    locations.forEach(location => {
        topKeywords.forEach(keyword => {
            if (lang === 'tr') {
                suggestions.push(`${location} ${keyword}`);
            } else {
                suggestions.push(`${keyword} in ${location}`);
            }
        });
    });
    
    return suggestions;
};

// =============================================================================
// CLUSTER-BASED KEYWORDS (for SEO metadata)
// =============================================================================

const clusterKeywords: Record<ClusterType, { tr: string[]; en: string[] }> = {
    scanToBim: {
        tr: ['Scan to BIM', 'Lazer Tarama', 'BIM Modelleme', 'Nokta Bulutu', '3D Tarama', 'As-Built Modelleme', 'Dijital İkiz', 'Rölöve', 'Tersine Mühendislik'],
        en: ['Scan to BIM', 'Laser Scanning', 'BIM Modeling', 'Point Cloud', '3D Scanning', 'As-Built Modeling', 'Digital Twin', 'Survey', 'Reverse Engineering']
    },
    industrialAndEnergy: {
        tr: ['Endüstriyel Tesis Tarama', 'Petrol Rafinerisi', 'Fabrika Tarama', 'Boru Hattı Rölövesi', 'Piping Modelleme', 'Tank Kalibrasyon', 'Enerji Santrali', 'MEP Modelleme'],
        en: ['Industrial Facility Scanning', 'Oil Refinery', 'Factory Scanning', 'Pipeline Survey', 'Piping Modeling', 'Tank Calibration', 'Power Plant', 'MEP Modeling']
    },
    heritageAndArchitecture: {
        tr: ['Tarihi Eser Rölöve', 'HBIM', 'Kültürel Miras', 'Cephe Rölövesi', 'Restorasyon Projesi', 'Mimari Belgeleme', 'Koruma Projesi'],
        en: ['Heritage Building Survey', 'HBIM', 'Cultural Heritage', 'Facade Survey', 'Restoration Project', 'Architectural Documentation', 'Conservation Project']
    },
    mappingAndUAV: {
        tr: ['İHA Fotogrametri', 'Drone Haritalama', 'Halihazır Harita', 'Ortofoto', 'Kübaj Hesabı', 'Sayısal Arazi Modeli', 'Harita Ölçme'],
        en: ['UAV Photogrammetry', 'Drone Mapping', 'Topographic Survey', 'Orthophoto', 'Volume Calculation', 'Digital Terrain Model', 'Land Surveying']
    },
    retailAndCommercial: {
        tr: ['Mağaza Tarama', 'AVM Rölövesi', 'Ticari Alan Ölçümü', 'Net Alan Hesabı', 'Perakende BIM', 'Zincir Mağaza'],
        en: ['Store Scanning', 'Mall Survey', 'Commercial Space Measurement', 'Net Area Calculation', 'Retail BIM', 'Chain Store']
    }
};

const funnelKeywords: Record<FunnelType, { tr: string[]; en: string[] }> = {
    awareness: {
        tr: ['Nedir', 'Nasıl Yapılır', 'Avantajları', 'Faydaları', 'Teknoloji'],
        en: ['What is', 'How to', 'Advantages', 'Benefits', 'Technology']
    },
    consideration: {
        tr: ['Fiyat', 'Karşılaştırma', 'Özellikler', 'Hizmetler', 'Çözümler'],
        en: ['Price', 'Comparison', 'Features', 'Services', 'Solutions']
    },
    decision: {
        tr: ['Firma', 'Uzman', 'Profesyonel', 'Deneyimli', 'Güvenilir', 'Kaliteli'],
        en: ['Company', 'Expert', 'Professional', 'Experienced', 'Reliable', 'Quality']
    },
    action: {
        tr: ['Teklif', 'İletişim', 'Fiyat Teklifi', 'Hemen', 'Başvuru'],
        en: ['Quote', 'Contact', 'Price Quote', 'Now', 'Apply']
    }
};

/**
 * Cluster ve Funnel bazlı keyword string oluşturur
 * Generates keyword string based on cluster and funnel type
 */
export function getClusterKeywords(
    cluster: ClusterType,
    funnel: FunnelType,
    targetGeo: string | null = null,
    lang: 'tr' | 'en' = 'tr'
): string {
    const clusterKws = clusterKeywords[cluster][lang];
    const funnelKws = funnelKeywords[funnel][lang];
    
    let keywords = [...clusterKws, ...funnelKws];
    
    // Add geo-specific keywords if provided
    if (targetGeo) {
        const geoKeywords = clusterKws.slice(0, 5).map(kw => `${targetGeo} ${kw}`);
        keywords = [...keywords, ...geoKeywords];
    }
    
    // Add brand
    keywords.push('EOS Proje');
    
    return keywords.slice(0, 15).join(', ');
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
    geoTargets,
    serviceKeywords,
    sectorKeywords,
    getAllGeoTargets,
    getGeoTargetsByRegion,
    getGeoTargetCount,
    getAdvancedKeywords,
    getLocalizedKeywords,
    generateMetaKeywords,
    getGeoStats,
    getRegionKeywordSuggestions
};
