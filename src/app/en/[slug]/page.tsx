import { getPage } from '@/lib/graphql';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import SubPageHero from '@/components/SubPageHero';
import ContentInjector from '@/components/ContentInjector';
import { SITE_URL, I18N_PATH_MAPPINGS_REV } from '@/lib/constants';

// Get Turkish equivalent for hreflang
function getTurkishEquivalent(slug: string): string | null {
  const enPath = `/en/${slug}`;
  return I18N_PATH_MAPPINGS_REV[enPath] || null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getPage(params.slug);
  if (!page) return {};

  const trEquivalent = getTurkishEquivalent(params.slug);

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.metaDesc,
    alternates: {
      canonical: `${SITE_URL}/en/${params.slug}`,
      languages: {
        'en': `${SITE_URL}/en/${params.slug}`,
        ...(trEquivalent && { 'tr': `${SITE_URL}${trEquivalent}` })
      }
    },
    openGraph: {
      title: page.seo?.opengraphTitle || page.title,
      description: page.seo?.opengraphDescription || page.seo?.metaDesc,
      url: `${SITE_URL}/en/${params.slug}`,
      locale: 'en_US',
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
      {/* Hero */}
      <SubPageHero
        title={page.title}
        description={page.seo?.metaDesc || ""}
        breadcrumb={[
          { label: "Home", href: "/en" },
          { label: page.title, href: `/en/${page.slug}` }
        ]}
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
