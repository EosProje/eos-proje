import { MDXFrontmatter } from "./mdx";
import { authorProfile } from "@/data/author";

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(
    frontmatter: MDXFrontmatter,
    content: string
) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: frontmatter.title,
        description: frontmatter.description,
        author: {
            "@type": "Person",
            name: frontmatter.author || authorProfile.name,
            url: frontmatter.authorLinkedIn || authorProfile.linkedIn,
        },
        datePublished: frontmatter.date,
        dateModified: frontmatter.lastUpdated || frontmatter.date,
        publisher: {
            "@type": "Organization",
            name: "Eos Proje",
            logo: {
                "@type": "ImageObject",
                url: "https://www.eosproje.com/images/EosProje-Lazer-Tarama-Sistemleri.webp",
            },
        },
        image: frontmatter.images?.hero
            ? frontmatter.images.hero
            : `${process.env.NEXT_PUBLIC_SITE_URL}/og-default.jpg`,
        keywords: frontmatter.keywords?.join(", "),
    };

    return schema;
}

/**
 * Generate FAQ schema
 */
export interface FAQItem {
    question: string;
    answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generate Organization schema for Eos Proje
 */
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Eos Proje",
        description:
            "Point Cloud to BIM dÃƒÂ¶nÃƒÂ¼Ã…Å¸ÃƒÂ¼m, 3D modelleme, As-Built modelleme uzmanÃ„Â±",
        url: process.env.NEXT_PUBLIC_SITE_URL,
        logo: "https://www.eosproje.com/images/EosProje-Lazer-Tarama-Sistemleri.webp",
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "info@eosproje.com",
        },
        sameAs: [
            authorProfile.linkedIn,
            // Add other social media profiles if available
        ],
        founder: {
            "@type": "Person",
            name: authorProfile.name,
            url: authorProfile.linkedIn,
        },
    };
}

/**
 * Generate Person schema for author
 */
export function generatePersonSchema(locale: "tr" | "en" = "tr") {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: authorProfile.name,
        jobTitle: authorProfile.role[locale],
        worksFor: {
            "@type": "Organization",
            name: authorProfile.company,
        },
        url: authorProfile.linkedIn,
        sameAs: [authorProfile.linkedIn],
        description: authorProfile.bio[locale],
        knowsAbout: authorProfile.expertise,
    };
}

/**
 * Generate BreadcrumbList schema
 */
export interface BreadcrumbItem {
    name: string;
    url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * Generate Case Study / Project schema
 */
export function generateCaseStudySchema(frontmatter: MDXFrontmatter) {
    if (!frontmatter.client) return null;

    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: frontmatter.title,
        description: frontmatter.description,
        author: {
            "@type": "Organization",
            name: "Eos Proje",
        },
        datePublished: frontmatter.year || frontmatter.date,
        about: {
            "@type": "Thing",
            name: frontmatter.sector,
        },
        keywords: frontmatter.keywords?.join(", "),
        image: frontmatter.images?.hero,
    };
}

/**
 * Generate LocalBusiness schema for contact page
 */
export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Eos Proje",
        description:
            "Point Cloud to BIM, 3D Modelleme, As-Built Modelleme Hizmetleri",
        url: process.env.NEXT_PUBLIC_SITE_URL,
        telephone: "+90-XXX-XXX-XXXX", // Add actual phone
        email: "info@eosproje.com",
        address: {
            "@type": "PostalAddress",
            addressCountry: "TR",
            addressLocality: "Istanbul", // Add actual location if available
        },
        geo: {
            "@type": "GeoCoordinates",
            // Add coordinates if available
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
        },
        priceRange: "$$",
        areaServed: {
            "@type": "Country",
            name: "Turkey",
        },
    };
}
