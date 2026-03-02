export const SITE_URL = "https://www.eosproje.com";
export const DEFAULT_OG_IMAGE = "/images/EosProje-point-cloud-to-bim-modelleme.webp";
export const FALLBACK_IMAGE = "/images/EosProje-Lazer-Tarama-Sistemleri.webp";
export const CONTACT_EMAIL = "info@eosproje.com";
export const CONTACT_PHONE = "+90 530 664 2263";

// Sample project files download link (Google Drive)
export const SAMPLE_FILES_URL = "https://drive.google.com/file/d/1xCkILSJZBIbrCSp7kdTpJSPfnuBuA-Ax/view?usp=drive_link";

// Main page mappings TR -> EN
export const I18N_PATH_MAPPINGS: Record<string, string> = {
    // Main pages
    "/": "/en",
    "/hakkimizda": "/en/about",
    "/ekip": "/en/team",
    "/referanslar": "/en/references",
    "/blog": "/en/blog",
    "/iletisim": "/en/contact",
    "/sektorler": "/en/sectors",
    "/cozumler": "/en/solutions",
    "/sss": "/en/faq",
    "/ucretlendirme": "/en/pricing",
    "/surec-ve-standartlar": "/en/process-and-standards",
    "/kalite-politikamiz": "/en/quality-policy",
    "/qa-qc": "/en/qa-qc",
    "/teknik-dokumanlar": "/en/technical-docs",
    "/cerez-politikasi": "/en/cookie-policy",
    "/gizlilik": "/en/privacy-policy",
    "/kvkk": "/en/gdpr",
    "/kaynaklar": "/en/resources",

    // Hizmetler (Services) pages
    "/hizmetler/rolove-hizmetleri": "/en/services/survey-services",
    "/hizmetler/harita-olcme": "/en/services/mapping-surveying",

    // Solutions pages
    "/cozumler/nokta-bulutu-bim": "/en/solutions/point-cloud-to-bim",
    "/cozumler/mevcut-durum-modelleme": "/en/solutions/as-built-modeling",
    "/cozumler/2d-3d-bim-donusum": "/en/solutions/2d-to-3d-bim-conversion",
    "/cozumler/endustriyel-ekipman-modelleme": "/en/solutions/industrial-equipment-modeling",
    "/cozumler/scan-to-cad": "/en/solutions/scan-to-cad",
    "/cozumler/heritage-bim": "/en/solutions/heritage-bim",
    
    // New Solution pages
    "/cozumler/scan-to-bim": "/en/solutions/scan-to-bim",
    "/cozumler/lazer-tarama": "/en/solutions/laser-scanning",
    "/cozumler/dijital-ikiz": "/en/solutions/digital-twin",
    "/cozumler/bim-modelleme": "/en/solutions/bim-modeling",
    "/cozumler/hbim": "/en/solutions/hbim",
    "/cozumler/cakisma-tespiti": "/en/solutions/clash-detection",

    // Sector pages
    "/sektorler/endustriyel-tesis": "/en/sectors/industrial-facilities",
    "/sektorler/insaat-taahhut": "/en/sectors/construction",
    "/sektorler/mimarlik": "/en/sectors/architecture",
    "/sektorler/renovasyon": "/en/sectors/renovation",
    "/sektorler/restorasyon": "/en/sectors/restoration",

    // Reference / Case Study pages
    "/referanslar/cevahir-avm": "/en/references/cevahir-mall",
    "/referanslar/enerji-santrali": "/en/references/power-plant",
    "/referanslar/linde-endustriyel-gaz-tesisi": "/en/references/linde-industrial-gas-facility",
    "/referanslar/migros-magaza-scan-to-bim": "/en/references/migros-store-scan-to-bim",
    "/referanslar/tarihi-yarimada-otel": "/en/references/historic-peninsula-hotel",
    "/referanslar/turkcell-magaza-rolove": "/en/references/turkcell-store-survey",
    "/referanslar/toyota-fabrikasi": "/en/references/toyota-factory",

    // Location pages - Europe
    "/lokasyon/almanya": "/en/location/germany",
    "/lokasyon/romanya": "/en/location/romania",
    "/lokasyon/macaristan": "/en/location/hungary",
    "/lokasyon/hirvatistan": "/en/location/croatia",
    "/lokasyon/ingiltere": "/en/location/united-kingdom",
    "/lokasyon/italya": "/en/location/italy",
    "/lokasyon/polonya": "/en/location/poland",
    "/lokasyon/hollanda": "/en/location/netherlands",
    
    // Location pages - Turkey
    "/lokasyon/istanbul": "/en/location/istanbul",
    "/lokasyon/ankara": "/en/location/ankara",
    "/lokasyon/izmir": "/en/location/izmir",
    "/lokasyon/kocaeli": "/en/location/kocaeli",
    "/lokasyon/izmit": "/en/location/izmit",
    "/lokasyon/balikesir": "/en/location/balikesir",
    "/lokasyon/eskisehir": "/en/location/eskisehir",
    "/lokasyon/hatay": "/en/location/hatay",
    "/lokasyon/kahramanmaras": "/en/location/kahramanmaras",
    "/lokasyon/antalya": "/en/location/antalya",
    "/lokasyon/gaziantep": "/en/location/gaziantep",
    "/lokasyon/rize": "/en/location/rize",
    "/lokasyon/trabzon": "/en/location/trabzon",
    "/lokasyon/diyarbakir": "/en/location/diyarbakir",
    "/lokasyon/bursa": "/en/location/bursa",
    "/lokasyon/adana": "/en/location/adana",
    "/lokasyon/mersin": "/en/location/mersin",
    "/lokasyon/sakarya": "/en/location/sakarya",
    "/lokasyon/canakkale": "/en/location/canakkale",
    
    // Location pages - Middle East
    "/lokasyon/libya": "/en/location/libya",
    "/lokasyon/irak": "/en/location/iraq",
    "/lokasyon/rusya": "/en/location/russia",
    "/lokasyon/azerbaycan": "/en/location/azerbaijan",
    "/lokasyon/kazakistan": "/en/location/kazakhstan",
    
    // Location pages - Gulf
    "/lokasyon/suudi-arabistan": "/en/location/saudi-arabia",
    "/lokasyon/birlesik-arap-emirlikleri": "/en/location/united-arab-emirates",
    "/lokasyon/katar": "/en/location/qatar",
    "/lokasyon/kuveyt": "/en/location/kuwait",
    
    // Location pages - North Africa & Central Asia
    "/lokasyon/cezayir": "/en/location/algeria",
    "/lokasyon/misir": "/en/location/egypt",
    "/lokasyon/ozbekistan": "/en/location/uzbekistan",

    // Blog posts
    "/blog/scan-to-cad-onemi": "/en/blog/scan-to-cad-importance",
    "/blog/cakisma-analizi-maliyet": "/en/blog/clash-detection-cost-savings",
    "/blog/point-cloud-to-bim-process": "/en/blog/point-cloud-to-bim-process",
    "/blog/endustriyel-dijital-ikiz": "/en/blog/industrial-digital-twin",
    "/blog/lod-levels-differences": "/en/blog/lod-levels-differences",
    "/blog/lazer-tarama-nedir": "/en/blog/what-is-laser-scanning",
    "/blog/revit-family-olusturma": "/en/blog/revit-family-creation",
    "/blog/scan-to-bim-rehberi": "/en/blog/scan-to-bim-guide",
    "/blog/lazer-tarama-teknolojisi": "/en/blog/laser-scanning-technologies",
    "/blog/2d-cad-to-3d-bim-transition": "/en/blog/2d-cad-to-3d-bim-transition",
    "/blog/bim-facility-management": "/en/blog/bim-facility-management",
    "/blog/tarihi-eser-hbim": "/en/blog/heritage-building-hbim",
    "/blog/heritage-bim-restorasyon": "/en/blog/heritage-bim-restoration",
    "/blog/industrial-as-built-modeling": "/en/blog/industrial-as-built-modeling",
};

// Reverse mapping EN -> TR
export const I18N_PATH_MAPPINGS_REV = Object.fromEntries(
    Object.entries(I18N_PATH_MAPPINGS).map(([tr, en]) => [en, tr])
);

/**
 * Get the equivalent page path for the other language.
 * @param currentPath - The current page path
 * @param targetLang - The target language ('en' or 'tr')
 * @returns The equivalent path in the target language, or the home page if not found
 */
export function getLanguageEquivalentPath(currentPath: string, targetLang: 'en' | 'tr'): string {
    // Remove trailing slash for consistency
    const normalizedPath = currentPath.endsWith('/') && currentPath.length > 1 
        ? currentPath.slice(0, -1) 
        : currentPath;

    if (targetLang === 'en') {
        // TR -> EN: Check direct mapping first
        if (I18N_PATH_MAPPINGS[normalizedPath]) {
            return I18N_PATH_MAPPINGS[normalizedPath];
        }
        // If no mapping found, return English home
        return '/en';
    } else {
        // EN -> TR: Check reverse mapping
        if (I18N_PATH_MAPPINGS_REV[normalizedPath]) {
            return I18N_PATH_MAPPINGS_REV[normalizedPath];
        }
        // If no mapping found, return Turkish home
        return '/';
    }
}
