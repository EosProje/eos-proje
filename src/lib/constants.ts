export const SITE_URL = "https://www.eosproje.com";
export const DEFAULT_OG_IMAGE = "/images/EosProje-point-cloud-to-bim-modelleme.webp";
export const FALLBACK_IMAGE = "/images/EosProje-Lazer-Tarama-Sistemleri.webp";
export const CONTACT_EMAIL = "info@eosproje.com";
export const CONTACT_PHONE = "+90 530 664 2263";

export const I18N_PATH_MAPPINGS: Record<string, string> = {
    // TR -> EN
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
};

// Reverse mapping EN -> TR
export const I18N_PATH_MAPPINGS_REV = Object.fromEntries(
    Object.entries(I18N_PATH_MAPPINGS).map(([tr, en]) => [en, tr])
);
