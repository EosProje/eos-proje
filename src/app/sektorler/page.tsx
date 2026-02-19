import SectorListClient from "./SectorListClient";
import { getAllMDXMetadata } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmet Verdiğimiz Sektörler - İnşaat, Endüstri, Mimari | EosProje",
  description: "Endüstriyel tesisler, inşaat şantiyeleri, mimari rölöve, tarihi eser restorasyonu ve enerji sektörü için özel lazer tarama ve BIM çözümleri.",
  alternates: {
    canonical: "https://www.eosproje.com/sektorler",
  },
  openGraph: {
    title: "Hizmet Verdiğimiz Sektörler | EosProje",
    description: "Hangi sektörlerde hizmet veriyoruz? Endüstri, İnşaat, Mimari, Restorasyon.",
    url: "https://www.eosproje.com/sektorler",
    images: [{ url: "/images/og/sektorler-og.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default async function SectorPage() {
  // This runs ONLY on the server
  const metadata = getAllMDXMetadata("case-studies", "tr");

  return (
    <SectorListClient relatedProjectsMetadata={metadata} />
  );
}