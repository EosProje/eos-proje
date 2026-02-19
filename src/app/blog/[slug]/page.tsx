import { getMDXBySlug, getRelatedPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRenderer } from "@/lib/markdown";
import type { Metadata } from "next";
import SubPageHero from "@/components/SubPageHero";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    Clock,
    User,
    Share2,
    Linkedin,
    Twitter,
    Facebook,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { AUTHORS } from "@/lib/authors";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = (await import("@/lib/mdx")).getAllMDXMetadata("blog", "tr"); // Dynamically import to avoid circular dependency
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = await getMDXBySlug(slug, "blog", "tr");
    if (!data) return {};
    return {
        title: data.frontmatter.title,
        description: data.frontmatter.description,
        alternates: {
            canonical: `https://www.eosproje.com/blog/${slug}`,
        },
        openGraph: {
            title: data.frontmatter.title,
            description: data.frontmatter.description,
            images: data.frontmatter.image ? [data.frontmatter.image] : [],
            type: "article",
            publishedTime: data.frontmatter.date,
            authors: [data.frontmatter.author || "EosProje"],
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getMDXBySlug(slug, "blog", "tr");

    if (!post) notFound();

    const { frontmatter, content, readingTime } = post;

    // İlgili yazıları getir (Aynı kategoriden veya etiketlerden)
    const relatedPosts = getRelatedPosts(slug, "blog", "tr", 3);

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title={frontmatter.title}
                description={""}
                category="Blog"
                breadcrumb={[
                    { label: "Blog", href: "/blog" },
                    { label: frontmatter.title, href: `/blog/${slug}` }
                ]}
            />

            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": frontmatter.title,
                "description": frontmatter.description,
                "image": frontmatter.image ? `https://www.eosproje.com${frontmatter.image}` : undefined,
                "author": {
                    "@type": "Person",
                    "name": frontmatter.author || "Eos Proje",
                    "url": frontmatter.authorLinkedIn
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Eos Proje",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.eosproje.com/images/EosProje-Lazer-Tarama-Sistemleri.webp"
                    }
                },
                "datePublished": frontmatter.date,
                "dateModified": frontmatter.lastUpdated || frontmatter.date,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://www.eosproje.com/blog/${slug}`
                }
            }} />

            <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <article>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6 font-medium">
                                <span className="px-3 py-1 bg-red-50 text-[var(--color-primary-red)] rounded-full font-bold text-xs uppercase tracking-wider">
                                    {frontmatter.category}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(frontmatter.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    {readingTime}
                                </span>
                            </div>

                            {/* Main Image */}
                            {frontmatter.image && (
                                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 border border-slate-100 group">
                                    <Image
                                        src={frontmatter.image}
                                        alt={frontmatter.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
                                </div>
                            )}

                            {/* Content */}
                            <MDXRenderer content={content} />

                            {/* Tags */}
                            {frontmatter.tags && frontmatter.tags.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-slate-100">
                                    <div className="flex flex-wrap gap-2">
                                        {frontmatter.tags?.map((tag) => (
                                            <Link
                                                key={tag}
                                                href={`/blog?tag=${tag}`}
                                                className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-bold hover:bg-[var(--color-primary-red)] hover:text-white transition-all"
                                            >
                                                #{tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Share Buttons (Dummy) */}
                            <div className="mt-8 flex items-center gap-4">
                                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-all">
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-all">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-800 hover:text-white transition-all ml-auto">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>

                        </article>
                    </div>

                    {/* ── SAĞ: Sidebar ── */}
                    <aside className="lg:col-span-4 space-y-10">

                        {/* Yazar Kartı */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center sticky top-24 transition-all">
                            <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-md relative">
                                {AUTHORS[frontmatter.author as string]?.image ? (
                                    <Image
                                        src={AUTHORS[frontmatter.author as string].image}
                                        alt={AUTHORS[frontmatter.author as string].name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-300">
                                        <User className="w-10 h-10" />
                                    </div>
                                )}
                            </div>
                            <h3 className="text-lg font-black text-slate-900 mb-1">{AUTHORS[frontmatter.author as string]?.name || frontmatter.author}</h3>
                            <p className="text-xs font-black text-[var(--color-primary-red)] uppercase tracking-widest mb-4">
                                {AUTHORS[frontmatter.author as string]?.role || "BIM Uzmanı"}
                            </p>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                                {AUTHORS[frontmatter.author as string]?.description || "Eos Proje bünyesinde BIM ve lazer tarama çözümleri üzerine uzmanlaşmış ekip üyesi."}
                            </p>
                            {AUTHORS[frontmatter.author as string]?.linkedin && (
                                <Link
                                    href={AUTHORS[frontmatter.author as string].linkedin!}
                                    target="_blank"
                                    className="text-xs font-black text-slate-900 uppercase tracking-widest border-b-2 border-red-200 hover:border-red-500 transition-colors pb-1"
                                >
                                    LinkedIn Profili
                                </Link>
                            )}
                        </div>

                        {/* İlgili Yazılar */}
                        {relatedPosts.length > 0 && (
                            <div>
                                <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    İlgili Makaleler
                                </h3>
                                <div className="space-y-6">
                                    {relatedPosts.map((post) => (
                                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                                            <div className="flex gap-4 items-start">
                                                <div className="w-20 h-20 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-100 group-hover:border-red-200 transition-colors relative">
                                                    {post.image ? (
                                                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-slate-300"><CheckCircle2 className="w-6 h-6" /></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[var(--color-primary-red)] transition-colors mb-2 line-clamp-2">
                                                        {post.title.split("|")[0]}
                                                    </h4>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> {post.readingTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="bg-slate-900 p-8 rounded-[2rem] text-white text-center relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-xl font-black mb-4">Projenizi Başlatın</h3>
                                <p className="text-slate-400 text-sm mb-8 font-medium">Uzman ekibimizle görüşerek ihtiyaçlarınıza özel çözümler alın.</p>
                                <Link href="/iletisim" className="block w-full py-3 bg-[var(--color-primary-red)] rounded-xl font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-900/40 transform group-hover:scale-[1.02] transition-transform">
                                    Teklif Alın
                                </Link>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-red-500/20 transition-all"></div>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    );
}
