import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import readingTime from "reading-time";

export type ContentType = "blog" | "case-studies" | "pages" | "sectors";
export type Locale = "tr" | "en";

export interface MDXFrontmatter {
    title: string;
    description: string;
    image?: string;
    keywords?: string[];
    author?: string;
    authorLinkedIn?: string;
    date: string;
    lastUpdated?: string;
    category?: string;
    tags?: string[];
    featured?: boolean;
    locale: Locale;
    alternates?: Record<string, string>;
    schema?: {
        type: string;
        faq?: boolean;
    };
    images?: {
        hero?: string;
        gallery?: string[];
    };
    video?: string;
    client?: string;
    sector?: string;
    location?: string;
    year?: string;
    projectSize?: string;
    deliverables?: string[];
    faq?: { question: string; answer: string }[];
}

export interface MDXContent {
    frontmatter: MDXFrontmatter;
    content: string;
    slug: string;
    readingTime: string;
}

const contentDirectory = path.join(process.cwd(), "src", "content");

/**
 * Get all MDX files for a content type and locale
 */
export function getMDXFiles(
    contentType: ContentType,
    locale: Locale
): string[] {
    const directory = path.join(contentDirectory, contentType, locale);

    if (!fs.existsSync(directory)) {
        return [];
    }

    return fs
        .readdirSync(directory)
        .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

/**
 * Get MDX content by slug
 */
export async function getMDXBySlug(
    slug: string,
    contentType: ContentType,
    locale: Locale
): Promise<MDXContent | null> {
    try {
        const filePath = path.join(
            contentDirectory,
            contentType,
            locale,
            `${slug}.mdx`
        );

        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);

        const mdxSource = await serialize(content, {
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypePrism],
            },
        });

        return {
            frontmatter: data as MDXFrontmatter,
            content: content,
            slug,
            readingTime: readingTime(content).text,
        };
    } catch (error) {
        console.error(`Error reading MDX file: ${slug}`, error);
        return null;
    }
}

/**
 * Get all MDX metadata for a content type and locale
 */
export function getAllMDXMetadata(
    contentType: ContentType,
    locale: Locale
): Array<MDXFrontmatter & { slug: string; readingTime: string }> {
    const files = getMDXFiles(contentType, locale);

    return files
        .map((file) => {
            const slug = file.replace(/\.mdx?$/, "");
            const filePath = path.join(contentDirectory, contentType, locale, file);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                ...(data as MDXFrontmatter),
                slug,
                readingTime: readingTime(content).text,
            };
        })
        .sort((a, b) => {
            // Sort by date, newest first
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
}

/**
 * Get related posts based on tags
 */
export function getRelatedPosts(
    currentSlug: string,
    contentType: ContentType,
    locale: Locale,
    count: number = 3
): Array<MDXFrontmatter & { slug: string; readingTime: string }> {
    const allPosts = getAllMDXMetadata(contentType, locale);
    const currentPost = allPosts.find((post) => post.slug === currentSlug);

    if (!currentPost || !currentPost.tags) {
        return allPosts.slice(0, count);
    }

    // Find posts with matching tags
    const related = allPosts
        .filter((post) => post.slug !== currentSlug)
        .map((post) => {
            const matchingTags =
                post.tags?.filter((tag) => currentPost.tags?.includes(tag)).length || 0;
            return { ...post, matchScore: matchingTags };
        })
        .filter((post) => post.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, count);

    // If not enough related posts, fill with latest posts
    if (related.length < count) {
        const additional = allPosts
            .filter(
                (post) =>
                    post.slug !== currentSlug &&
                    !related.find((r) => r.slug === post.slug)
            )
            .slice(0, count - related.length);

        return [...related, ...additional];
    }

    return related;
}

/**
 * Get all available locales for a content piece
 */
export function getAvailableLocales(
    slug: string,
    contentType: ContentType
): Locale[] {
    const locales: Locale[] = ["tr", "en"];
    return locales.filter((locale) => {
        const filePath = path.join(
            contentDirectory,
            contentType,
            locale,
            `${slug}.mdx`
        );
        return fs.existsSync(filePath);
    });
}
