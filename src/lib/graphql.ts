import { cache } from 'react';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

class GraphQLError extends Error {
    constructor(public errors: any[]) {
        super('GraphQL Error');
        this.name = 'GraphQLError';
    }
}

/**
 * Basic fetcher for WPGraphQL
 */
export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
    const headers = { 'Content-Type': 'application/json' };

    if (!API_URL) {
        console.warn("NEXT_PUBLIC_WORDPRESS_API_URL is not defined in .env");
        throw new Error("API URL not configured");
    }

    // Next.js caching extension
    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    const json = await res.json();

    if (json.errors) {
        console.error("GraphQL Errors:", json.errors);
        throw new GraphQLError(json.errors);
    }

    return json.data;
}

// --- FRAGMENTS ---

const ACF_FIELDS_FRAGMENT = `
  fragment AcfFields on Page {
    sayfaDetaylari {
      youtubeVideoLinki
      gorselBir {
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
      gorselIki {
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
    }
  }
`;

const SEO_FRAGMENT = `
  fragment SeoFields on NodeWithTitle {
    seo {
      title
      metaDesc
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
      }
    }
  }
`;

// --- QUERIES ---

// 1. Pages
export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: ID!) {
     page(id: $slug, idType: URI) {
       title
       content
       slug
       date
       ...AcfFields
       seo {
          title
          metaDesc
       }
     }
  }
  ${ACF_FIELDS_FRAGMENT}
`;

// 2. Posts (Blog)
export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
          title
          metaDesc
      }
      sayfaDetaylari {
        youtubeVideoLinki
        gorselBir {
          sourceUrl
          altText
        }
        gorselIki {
          sourceUrl
          altText
        }
      }
    }
  }
`;

// 3. Sectors (Assuming CPT 'sector')
export const GET_SECTOR_BY_SLUG = `
  query GetSectorBySlug($slug: ID!) {
    sector(id: $slug, idType: SLUG) {
      title
      content
      slug
      seo {
          title
          metaDesc
      }
      sayfaDetaylari {
        youtubeVideoLinki
        gorselBir {
          sourceUrl
          altText
        }
        gorselIki {
          sourceUrl
          altText
        }
      }
    }
  }
`;

// 4. References (Assuming CPT 'reference' or 'referans')
export const GET_REFERENCE_BY_SLUG = `
  query GetReferenceBySlug($slug: ID!) {
    reference(id: $slug, idType: SLUG) {
      title
      content
      slug
      seo {
          title
          metaDesc
      }
      sayfaDetaylari {
        youtubeVideoLinki
        gorselBir {
          sourceUrl
          altText
        }
        gorselIki {
          sourceUrl
          altText
        }
      }
    }
  }
`;

// 5. Sitemap Helpers
export const GET_ALL_SLUGS = `
  query GetAllSlugs {
    pages(first: 100) {
      nodes {
        slug
        modified
      }
    }
    posts(first: 100) {
      nodes {
        slug
        modified
      }
    }
    sectors(first: 100) {
      nodes {
        slug
        modified
      }
    }
    references(first: 100) {
      nodes {
        slug
        modified
      }
    }
  }
`;

// Utility functions to fetch data
export const getPage = cache(async (slug: string) => {
    const data = await fetchAPI(GET_PAGE_BY_SLUG, { variables: { slug } });
    return data?.page;
});

export const getPost = cache(async (slug: string) => {
    const data = await fetchAPI(GET_POST_BY_SLUG, { variables: { slug } });
    return data?.post;
});

export const getSector = cache(async (slug: string) => {
    const data = await fetchAPI(GET_SECTOR_BY_SLUG, { variables: { slug } });
    return data?.sector;
});

export const getReference = cache(async (slug: string) => {
    const data = await fetchAPI(GET_REFERENCE_BY_SLUG, { variables: { slug } });
    return data?.reference;
});
