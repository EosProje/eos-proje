
import { getPage } from '@/lib/graphql';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import SubPageHero from '@/components/SubPageHero';
import ContentInjector from '@/components/ContentInjector';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const page = await getPage(params.slug);
    if (!page) return {};

    return {
        title: page.seo?.title || page.title,
        description: page.seo?.metaDesc,
        openGraph: {
            title: page.seo?.opengraphTitle || page.title,
            description: page.seo?.opengraphDescription || page.seo?.metaDesc,
            images: page.seo?.opengraphImage?.sourceUrl ? [{ url: page.seo.opengraphImage.sourceUrl }] : [],
        },
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const page = await getPage(params.slug);

    if (!page) {
        notFound();
    }

    const { sayfaDetaylari } = page;

    return (
        <div className="min-h-screen bg-white">
            {/* Fallback Hero if no SEO title */}
            <SubPageHero
                title={page.title}
                description={page.seo?.metaDesc || ""}
                // We assume breadcrumb can be static or based on parent, for root pages it's just Home > Page
                breadcrumb={[{ label: page.title, href: `/${page.slug}` }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Dynamic Content Injection */}
                <ContentInjector
                    content={page.content}
                    videoUrl={sayfaDetaylari?.youtubeVideoLinki}
                    images={[sayfaDetaylari?.gorselBir, sayfaDetaylari?.gorselIki]}
                    type="page"
                />
            </div>
        </div>
    );
}
