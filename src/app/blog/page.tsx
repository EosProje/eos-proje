import type { Metadata } from "next";
import { getAllMDXMetadata } from "@/lib/mdx";
import BlogListClient from "./BlogListClient";
import { Suspense } from "react";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog & Makaleler - Lazer Tarama ve BIM Teknolojileri | EosProje",
  description: "Endüstriyel tesislerde dijital ikiz, scan to BIM süreçleri, lazer tarama teknolojileri ve mühendislik çözümleri üzerine teknik makaleler.",
  openGraph: {
    title: "Blog & Makaleler - Lazer Tarama ve BIM Teknolojileri | EosProje",
    description: "Endüstriyel tesislerde dijital ikiz, scan to BIM süreçleri, lazer tarama teknolojileri ve mühendislik çözümleri üzerine teknik makaleler.",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogListingPage() {
  const posts = getAllMDXMetadata("blog", "tr");

  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <BlogListClient posts={posts} />
    </Suspense>
  );
}
