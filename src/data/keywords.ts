// Keyword taxonomy and mapping for SEO optimization

export const primaryKeywords = {
    tr: [
        "Point Cloud to BIM",
        "Nokta Bulutu 3D Modelleme",
        "BIM Modelleme Hizmeti",
        "Lazer Tarama 3D Model",
        "As-Built Modelleme",
        "2D CAD 3D BIM Dönüşüm",
        "LOD 200 300 400",
        "Revit Modelleme",
        "QA/QC BIM",
    ],
    en: [
        "Point Cloud to BIM",
        "Point Cloud 3D Modeling",
        "BIM Modeling Service",
        "Laser Scanning 3D Model",
        "As-Built Modeling",
        "2D to 3D BIM Conversion",
        "LOD 200 300 400",
        "Revit Modeling",
        "BIM QA/QC",
    ],
};

export const longTailKeywords = {
    bimConversion: {
        tr: [
            "nokta bulutu verilerinden revit modeli nasıl oluşturulur",
            "lazer tarama verisinden bim modeli yapımı",
            "endüstriyel tesis için point cloud to bim",
            "fabrika 3d modelleme hizmeti istanbul",
        ],
        en: [
            "how to convert point cloud data to bim model",
            "industrial facility 3d modeling from laser scan",
            "point cloud to revit conversion service turkey",
            "factory 3d modeling service",
        ],
    },
    cadConversion: {
        tr: [
            "2d cad çizimlerinden 3d model oluşturma",
            "pdf çizimlerden revit modeli yapımı",
            "dwg dosyalarından bim modeline geçiş",
        ],
        en: [
            "convert 2d autocad drawings to 3d bim model",
            "architectural drawings to revit conversion",
            "dwg to bim conversion service",
        ],
    },
    sectorSpecific: {
        tr: [
            "otel restorasyon için as-built modelleme",
            "avm 3d modelleme bim hizmeti",
            "fabrika mevcut durum lazer tarama modelleme",
            "tarihi bina dijital dokümantasyon bim",
            "metro hattı 3d modelleme projesi",
        ],
        en: [
            "hotel renovation as-built bim modeling",
            "shopping mall 3d bim documentation",
            "power plant point cloud modeling service",
            "historical building digital documentation bim",
            "metro line 3d modeling project",
        ],
    },
    qaQc: {
        tr: [
            "bim model kalite kontrol hizmeti",
            "cloud to model sapma analizi",
            "revit model doğruluk kontrolü",
        ],
        en: [
            "bim qa qc service turkey",
            "point cloud deviation analysis",
            "revit model accuracy verification",
        ],
    },
    standards: {
        tr: [
            "lod 200 300 400 farkları nedir",
            "bim lod seviyeleri açıklaması",
            "iso 19650 bim standartları",
        ],
        en: [
            "what is lod in bim modeling",
            "bim standards for industrial facilities",
            "iso 19650 implementation guide",
        ],
    },
};

export const categoryTaxonomy = {
    tr: [
        "BIM Teknolojileri",
        "3D Modelleme Süreçleri",
        "Sektörel Uygulamalar",
        "Standartlar ve QA/QC",
        "Vaka Analizleri",
    ],
    en: [
        "BIM Technologies",
        "3D Modeling Processes",
        "Industry Applications",
        "Standards and QA/QC",
        "Case Studies",
    ],
};

export const tagTaxonomy = [
    "Point Cloud to BIM",
    "2D to 3D Conversion",
    "As-Built Modeling",
    "Industrial Facilities",
    "Historical Buildings",
    "Hospitality Projects",
    "Retail Centers",
    "Infrastructure Projects",
    "LOD 200",
    "LOD 300",
    "LOD 400",
    "Revit Modeling",
    "QA/QC Processes",
    "Laser Scanning",
    "BIM Standards",
    "MEP Modeling",
    "Structural Modeling",
    "ISO 19650",
    "Renovation Projects",
    "Digital Twin",
];

// Keyword mapping for specific blog posts
export const blogKeywordMapping: Record<string, string[]> = {
    "point-cloud-to-bim-sureci": [
        "Point Cloud to BIM",
        "LOD 300",
        "Laser Scanning",
        "Revit Modeling",
    ],
    "lod-seviyeleri-farklari": ["LOD 200", "LOD 300", "LOD 400", "BIM Standards"],
    "endustriyel-as-built-modelleme": [
        "As-Built Modeling",
        "Industrial Facilities",
        "Point Cloud to BIM",
    ],
    "cloud-to-model-sapma-kontrolu": [
        "QA/QC Processes",
        "Point Cloud to BIM",
        "BIM Standards",
    ],
    "restorasyon-dijital-dokumantasyon": [
        "Historical Buildings",
        "As-Built Modeling",
        "Digital Twin",
    ],
    "2d-cad-3d-bim-gecis": ["2D to 3D Conversion", "Revit Modeling", "BIM Standards"],
};
