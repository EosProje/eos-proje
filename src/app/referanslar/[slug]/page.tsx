import { getMDXBySlug, getAllMDXMetadata } from "@/lib/mdx";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SubPageHero from "@/components/SubPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Calendar, Layers, Package, ArrowLeft, ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const caseStudies = getAllMDXMetadata("case-studies", "tr");
    return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = await getMDXBySlug(slug, "case-studies", "tr");
    if (!data) return {};
    return {
        title: data.frontmatter.title,
        description: data.frontmatter.description,
        alternates: {
            canonical: `https://eosproje.com/referanslar/${slug}`,
        },
        openGraph: {
            title: data.frontmatter.title,
            description: data.frontmatter.description,
            images: data.frontmatter.images?.hero ? [data.frontmatter.images.hero] : [],
        },
    };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const data = await getMDXBySlug(slug, "case-studies", "tr");

    if (!data) notFound();

    const { frontmatter, content } = data;
    const gallery = frontmatter.images?.gallery ?? [];
    const heroImage = frontmatter.images?.hero;

    // Parse markdown content to simple HTML for display
    const sections = content
        .split(/\n(?=#{1,3} )/)
        .filter(Boolean)
        .map((block) => block.trim());

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title={frontmatter.title.split("|")[0].trim()}
                description={frontmatter.description}
                category={frontmatter.sector ?? "Referans"}
                breadcrumb={[
                    { label: "Referanslar", href: "/referanslar" },
                    { label: frontmatter.client ?? frontmatter.title.split("|")[0].trim(), href: `/referanslar/${slug}` },
                ]}
            />

            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": frontmatter.title,
                "description": frontmatter.description,
                "image": heroImage ? `https://eosproje.com${heroImage}` : undefined,
                "author": {
                    "@type": "Organization",
                    "name": "Eos Proje",
                    "url": "https://eosproje.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Eos Proje",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://eosproje.com/images/logo.png"
                    }
                },
                "datePublished": frontmatter.date,
                "dateModified": frontmatter.lastUpdated || frontmatter.date,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://eosproje.com/referanslar/${slug}`
                }
            }} />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* ── Sol: Ana İçerik ── */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Hero Görsel */}
                        {heroImage && (
                            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                                <Image
                                    src={heroImage}
                                    alt={`${frontmatter.title} - EosProje Lazer Tarama BIM`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 flex gap-3">
                                    <span className="px-3 py-1.5 bg-[var(--color-primary-red)] text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                                        {frontmatter.sector}
                                    </span>
                                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-black rounded-full uppercase tracking-widest">
                                        {frontmatter.year}
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Markdown İçerik */}
                        <div className="prose prose-slate prose-lg max-w-none
                            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                            prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                            prose-h3:text-xl prose-h3:text-[var(--color-primary-red)]
                            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                            prose-strong:text-slate-900 prose-strong:font-black
                            prose-li:text-slate-600 prose-li:font-medium
                            prose-table:text-sm prose-th:font-black prose-th:text-slate-900
                            prose-td:text-slate-600
                            prose-blockquote:border-l-[var(--color-primary-red)] prose-blockquote:bg-red-50 prose-blockquote:rounded-r-2xl prose-blockquote:py-1
                            prose-code:text-[var(--color-primary-red)] prose-code:bg-red-50 prose-code:rounded prose-code:px-1
                            prose-a:text-[var(--color-primary-red)] prose-a:no-underline hover:prose-a:underline">
                            {/* Render content as formatted text blocks */}
                            {content.split("\n").map((line, i) => {
                                if (line.startsWith("# ")) {
                                    return <h1 key={i}>{line.replace("# ", "")}</h1>;
                                }
                                if (line.startsWith("## ")) {
                                    return <h2 key={i}>{line.replace("## ", "")}</h2>;
                                }
                                if (line.startsWith("### ")) {
                                    return <h3 key={i}>{line.replace("### ", "")}</h3>;
                                }
                                if (line.startsWith("- ") || line.startsWith("* ")) {
                                    return <li key={i}>{line.replace(/^[-*] /, "")}</li>;
                                }
                                if (line.startsWith("> ")) {
                                    return <blockquote key={i}><p>{line.replace("> ", "")}</p></blockquote>;
                                }
                                if (line.startsWith("**") && line.endsWith("**")) {
                                    return <p key={i}><strong>{line.replace(/\*\*/g, "")}</strong></p>;
                                }
                                if (line.startsWith("<Callout") || line.startsWith("<ExpertQuote") || line.startsWith("</")) {
                                    return null;
                                }
                                if (line.startsWith("---")) {
                                    return <hr key={i} className="my-8 border-slate-100" />;
                                }
                                if (line.startsWith("|")) {
                                    // Skip table rows — rendered in sidebar
                                    return null;
                                }
                                if (line.trim() === "") {
                                    return <br key={i} />;
                                }
                                // Inline bold: **text**
                                const parts = line.split(/(\*\*[^*]+\*\*)/g);
                                if (parts.length > 1) {
                                    return (
                                        <p key={i}>
                                            {parts.map((part, j) =>
                                                part.startsWith("**") && part.endsWith("**")
                                                    ? <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
                                                    : part
                                            )}
                                        </p>
                                    );
                                }
                                return <p key={i}>{line}</p>;
                            })}
                        </div>

                        {/* Galeri */}
                        {gallery.length > 1 && (
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">
                                    Proje <span className="text-gradient-red">Görselleri</span>
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {gallery.slice(1).map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="relative aspect-video rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
                                        >
                                            <Image
                                                src={img}
                                                alt={`${frontmatter.title} - Proje Görseli ${idx + 2}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ── Sağ: Proje Bilgileri Sidebar ── */}
                    <div className="space-y-6">

                        {/* Proje Özet Kartı */}
                        <div className="bg-slate-900 rounded-[2rem] p-8 text-white sticky top-28">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-red-400 mb-6">
                                Proje Bilgileri
                            </h3>

                            <div className="space-y-5">
                                {frontmatter.client && (
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Müşteri</p>
                                        <p className="text-white font-bold">{frontmatter.client}</p>
                                    </div>
                                )}
                                {frontmatter.sector && (
                                    <div className="flex items-start gap-3">
                                        <Layers className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Sektör</p>
                                            <p className="text-white font-bold">{frontmatter.sector}</p>
                                        </div>
                                    </div>
                                )}
                                {frontmatter.location && (
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Lokasyon</p>
                                            <p className="text-white font-bold">{frontmatter.location}</p>
                                        </div>
                                    </div>
                                )}
                                {frontmatter.year && (
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Yıl</p>
                                            <p className="text-white font-bold">{frontmatter.year}</p>
                                        </div>
                                    </div>
                                )}
                                {frontmatter.projectSize && (
                                    <div className="flex items-start gap-3">
                                        <Package className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Proje Büyüklüğü</p>
                                            <p className="text-white font-bold">{frontmatter.projectSize}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Teslimatlar */}
                            {frontmatter.deliverables && frontmatter.deliverables.length > 0 && (
                                <div className="mt-8 pt-8 border-t border-slate-700">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                                        Teslim Edilen Çıktılar
                                    </p>
                                    <ul className="space-y-2.5">
                                        {frontmatter.deliverables.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Etiketler */}
                            {frontmatter.tags && frontmatter.tags.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-slate-700">
                                    <div className="flex flex-wrap gap-2">
                                        {frontmatter.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="mt-8 pt-8 border-t border-slate-700">
                                <Link
                                    href="/iletisim"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-primary-red)] text-white font-black uppercase tracking-[0.15em] text-xs rounded-2xl hover:bg-red-700 transition-all"
                                >
                                    Benzer Proje Teklifi Al <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alt Navigasyon */}
                <div className="mt-20 pt-12 border-t border-slate-100 flex items-center justify-between">
                    <Link
                        href="/referanslar"
                        className="flex items-center gap-2 text-slate-500 hover:text-[var(--color-primary-red)] font-black uppercase tracking-widest text-xs transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Tüm Referanslar
                    </Link>
                    <Link
                        href="/iletisim"
                        className="flex items-center gap-2 px-8 py-4 bg-[var(--color-primary-red)] text-white font-black uppercase tracking-[0.15em] text-xs rounded-2xl hover:bg-red-700 transition-all shadow-lg shadow-red-900/20"
                    >
                        Teklif Al <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
