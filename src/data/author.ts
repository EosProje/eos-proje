// Author profile for Uğur Bilen - BIM Specialist

export interface AuthorProfile {
    name: string;
    role: {
        tr: string;
        en: string;
    };
    company: string;
    linkedIn: string;
    expertise: string[];
    bio: {
        tr: string;
        en: string;
    };
    image?: string;
}

export const authorProfile: AuthorProfile = {
    name: "Uğur Bilen",
    role: {
        tr: "BIM Modelleme Uzmanı & Kurucu",
        en: "BIM Modeling Specialist & Founder",
    },
    company: "Eos Proje",
    linkedIn: "https://www.linkedin.com/company/eos-proje",
    expertise: [
        "Point Cloud to BIM",
        "3D Modeling",
        "Revit",
        "QA/QC",
        "As-Built Documentation",
        "LOD Standardization",
    ],
    bio: {
        tr: "10+ yıllık BIM modelleme deneyimine sahip Uğur Bilen, Türkiye'de Point Cloud to BIM dönüşüm alanında öncü çalışmalar yürütmektedir. Endüstriyel tesislerden tarihi yapılara, AVM'lerden otel projelerine kadar geniş bir portföyde LOD 200-400 seviyesinde profesyonel BIM modelleme hizmeti sunmaktadır.",
        en: "With over 10 years of BIM modeling experience, Uğur Bilen is pioneering Point Cloud to BIM conversion services in Turkey. He delivers professional BIM modeling at LOD 200-400 standards across a diverse portfolio, from industrial facilities to historical buildings, shopping malls to hotel projects.",
    },
};
