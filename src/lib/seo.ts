import type { Metadata } from "next";
import { MDXFrontmatter } from "./mdx";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eosproje.com";

/**
 * Generate Next.js metadata from MDX frontmatter
 */
export function generateMetadata(frontmatter: MDXFrontmatter): Metadata {
    const {
        title,
        description,
        keywords = [],
        author,
        date,
        locale,
        alternates,
        images,
    } = frontmatter;

    const metadata: Metadata = {
        title: title,
        description: description,
        keywords: keywords.join(", "),
        authors: author ? [{ name: author }] : undefined,
        openGraph: {
            title: title,
            description: description,
            type: "article",
            publishedTime: date,
            locale: locale === "tr" ? "tr_TR" : "en_US",
            images: images?.hero
                ? [
                    {
                        url: images.hero,
                        alt: title,
                    },
                ]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: images?.hero ? [images.hero] : undefined,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };

    // Add alternates for i18n
    if (alternates) {
        metadata.alternates = {
            languages: alternates,
        };
    }

    return metadata;
}

/**
 * Generate canonical URL for a page
 */
export function generateCanonicalUrl(path: string, locale: string): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const localePrefix = locale === "tr" ? "" : "/en";
    return `${siteUrl}${localePrefix}${cleanPath}`;
}

/**
 * Generate hreflang alternate links
 */
export function generateAlternateLinks(
    path: string
): Array<{ rel: string; hrefLang: string; href: string }> {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;

    return [
        {
            rel: "alternate",
            hrefLang: "tr",
            href: `${siteUrl}${cleanPath}`,
        },
        {
            rel: "alternate",
            hrefLang: "en",
            href: `${siteUrl}/en${cleanPath}`,
        },
        {
            rel: "alternate",
            hrefLang: "x-default",
            href: `${siteUrl}${cleanPath}`,
        },
    ];
}

/**
 * Generate meta tags for SEO
 */
export interface MetaTag {
    name?: string;
    property?: string;
    content: string;
}

export function generateMetaTags(frontmatter: MDXFrontmatter): MetaTag[] {
    const tags: MetaTag[] = [
        { name: "description", content: frontmatter.description },
        { property: "og:title", content: frontmatter.title },
        { property: "og:description", content: frontmatter.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: frontmatter.title },
        { name: "twitter:description", content: frontmatter.description },
    ];

    if (frontmatter.keywords && frontmatter.keywords.length > 0) {
        tags.push({ name: "keywords", content: frontmatter.keywords.join(", ") });
    }

    if (frontmatter.author) {
        tags.push({ name: "author", content: frontmatter.author });
    }

    if (frontmatter.images?.hero) {
        tags.push({ property: "og:image", content: frontmatter.images.hero });
        tags.push({ name: "twitter:image", content: frontmatter.images.hero });
    }

    return tags;
}

/**
 * Calculate SEO score for a page (simplified)
 */
export interface SEOScore {
    score: number;
    issues: string[];
    recommendations: string[];
}

export function calculateSEOScore(frontmatter: MDXFrontmatter): SEOScore {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let score = 100;

    // Title length check
    if (frontmatter.title.length < 30 || frontmatter.title.length > 60) {
        score -= 10;
        issues.push("Title should be between 30-60 characters");
    }

    // Description length check
    if (
        frontmatter.description.length < 120 ||
        frontmatter.description.length > 160
    ) {
        score -= 10;
        issues.push("Meta description should be between 120-160 characters");
    }

    // Keywords check
    if (!frontmatter.keywords || frontmatter.keywords.length === 0) {
        score -= 15;
        issues.push("No keywords defined");
    }

    // Image check
    if (!frontmatter.images?.hero) {
        score -= 10;
        recommendations.push("Add a featured image for better social sharing");
    }

    // Schema check
    if (!frontmatter.schema) {
        score -= 10;
        recommendations.push("Add schema markup for better SEO");
    }

    // Tags check
    if (!frontmatter.tags || frontmatter.tags.length < 3) {
        score -= 5;
        recommendations.push("Add at least 3 tags for better organization");
    }

    return {
        score: Math.max(0, score),
        issues,
        recommendations,
    };
}
