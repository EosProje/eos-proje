/**
 * SEO Metadata Helper
 * EOS Proje - Centralized SEO Configuration
 * 
 * Created: March 2026
 */

import { Metadata } from 'next';
import { getClusterKeywords, ClusterType, FunnelType } from './keywords';
import { SITE_URL } from './constants';

interface SEOProps {
  title: string;
  description: string;
  cluster?: ClusterType;
  funnel?: FunnelType;
  targetGeo?: string | null;
  lang?: 'tr' | 'en';
  canonicalUrl?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Merkezi metadata oluşturucu
 * Constructs metadata with cluster-based keywords
 */
export function constructMetadata({
  title,
  description,
  cluster = 'scanToBim',
  funnel = 'decision',
  targetGeo = null,
  lang = 'tr',
  canonicalUrl,
  image = '/images/og-default.jpg',
  noIndex = false
}: SEOProps): Metadata {
  const keywords = getClusterKeywords(cluster, funnel, targetGeo, lang);
  
  return {
    title,
    description,
    keywords,
    alternates: {
      ...(canonicalUrl && { canonical: canonicalUrl }),
    },
    openGraph: {
      title,
      description,
      locale: lang === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      siteName: 'EOS Proje',
      url: canonicalUrl || SITE_URL,
      images: [
        {
          url: image.startsWith('http') ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.startsWith('http') ? image : `${SITE_URL}${image}`]
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}

// Re-export types for convenience
export type { ClusterType, FunnelType };
