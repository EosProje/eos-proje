import { getMDXBySlug, getAllMDXMetadata } from "@/lib/mdx";
import SubPageHero from "@/components/SubPageHero";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
import { MDXRenderer } from "@/lib/markdown";
import JsonLd from "@/components/JsonLd";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const sectors = getAllMDXMetadata("sectors", "tr");
    return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = await getMDXBySlug(slug, "sectors", "tr");
    if (!data) return {};
    return {
        title: data.frontmatter.title,
        description: data.frontmatter.description,
        alternates: {
            canonical: `https://eosproje.com/sektorler/${slug}`,
            languages: {
                'tr': `/sektorler/${slug}`,
                'en': `/en/sectors/${slug}`,
            },
        },
    };
}

export default async function SectorPage({ params }: PageProps) {
    const { slug } = await params;
    const data = await getMDXBySlug(slug, "sectors", "tr");

    if (!data) notFound();

    const { frontmatter, content } = data;

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title={frontmatter.title}
                description={frontmatter.description}
                category="Sektörler"
                breadcrumb={[
                    { label: "Sektörler", href: "/sektorler" },
                    { label: frontmatter.title, href: `/sektorler/${slug}` }
                ]}
            />

            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "name": frontmatter.title,
                "description": frontmatter.description,
                "provider": {
                    "@type": "Organization",
                    "name": "Eos Proje",
                    "url": "https://eosproje.com"
                },
                "serviceType": frontmatter.category || "Lazer Tarama ve BIM",
                "areaServed": "TR",
                "image": frontmatter.image ? `https://eosproje.com${frontmatter.image}` : undefined,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://eosproje.com/sektorler/${slug}`
                }
            }} />

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Hero Image */}
                {frontmatter.image && (
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 border border-slate-100">
                        <Image
                            src={frontmatter.image}
                            alt={frontmatter.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content with Link Support */}
                <MDXRenderer content={content} />

                {/* FAQ Section */}
                {frontmatter.faq && frontmatter.faq.length > 0 && (
                    <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black mb-8 text-center">Sıkça Sorulan Sorular</h3>
                            <div className="space-y-4">
                                {frontmatter.faq.map((item, idx) => (
                                    <details key={idx} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:bg-white/10 transition-colors">
                                        <summary className="flex items-center justify-between p-5 cursor-pointer font-bold select-none hover:text-[var(--color-primary-red)] transition-colors">
                                            {item.question}
                                            <span className="transform group-open:rotate-180 transition-transform text-[var(--color-primary-red)]">▼</span>
                                        </summary>
                                        <div className="p-5 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 mt-2">
                                            {item.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
                    </div>
                )}

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link href="/iletisim" className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-primary-red)] text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-red-800 transition-all shadow-xl shadow-red-900/30 hover:-translate-y-1">
                        Detaylı Bilgi Alın <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </div>
    );
}
