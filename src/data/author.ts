// Author profile for UÃ„Å¸ur Bilen - BIM Specialist

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
    name: "UÃ„Å¸ur Bilen",
    role: {
        tr: "BIM Modelleme UzmanÃ„Â± & Kurucu",
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
        tr: "10+ yÃ„Â±llÃ„Â±k BIM modelleme deneyimine sahip UÃ„Å¸ur Bilen, TÃƒÂ¼rkiye'de Point Cloud to BIM dÃƒÂ¶nÃƒÂ¼Ã…Å¸ÃƒÂ¼m alanÃ„Â±nda ÃƒÂ¶ncÃƒÂ¼ ÃƒÂ§alÃ„Â±Ã…Å¸malar yÃƒÂ¼rÃƒÂ¼tmektedir. EndÃƒÂ¼striyel tesislerden tarihi yapÃ„Â±lara, AVM'lerden otel projelerine kadar geniÃ…Å¸ bir portfÃƒÂ¶yde LOD 200-400 seviyesinde profesyonel BIM modelleme hizmeti sunmaktadÃ„Â±r.",
        en: "With over 10 years of BIM modeling experience, UÃ„Å¸ur Bilen is pioneering Point Cloud to BIM conversion services in Turkey. He delivers professional BIM modeling at LOD 200-400 standards across a diverse portfolio, from industrial facilities to historical buildings, shopping malls to hotel projects.",
    },
};
