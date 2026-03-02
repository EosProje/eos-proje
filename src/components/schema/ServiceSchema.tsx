"use client";

import { SITE_URL } from "@/lib/constants";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
}

// Named export for { ServiceSchema } imports
export function ServiceSchema({ 
  name, 
  description, 
  url,
  image,
  provider = "EOS Proje"
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url.startsWith('http') ? url : `${SITE_URL}${url}`,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": SITE_URL
    },
    ...(image && { "image": image.startsWith('http') ? image : `${SITE_URL}${image}` })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Default export for backwards compatibility
export default ServiceSchema;
