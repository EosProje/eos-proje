import SectorListClient from "./SectorListClient";
import { getAllMDXMetadata } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmet VerdiÃ„Å¸imiz SektÃƒÂ¶rler - Ã„Â°nÃ…Å¸aat, EndÃƒÂ¼stri, Mimari | EosProje",
  description: "EndÃƒÂ¼striyel tesisler, inÃ…Å¸aat Ã…Å¸antiyeleri, mimari rÃƒÂ¶lÃƒÂ¶ve, tarihi eser restorasyonu ve enerji sektÃƒÂ¶rÃƒÂ¼ iÃƒÂ§in ÃƒÂ¶zel lazer tarama ve BIM ÃƒÂ§ÃƒÂ¶zÃƒÂ¼mleri.",
  alternates: {
    canonical: "https://www.eosproje.com/sektorler",
  },
  openGraph: {
    title: "Hizmet VerdiÃ„Å¸imiz SektÃƒÂ¶rler | EosProje",
    description: "Hangi sektÃƒÂ¶rlerde hizmet veriyoruz? EndÃƒÂ¼stri, Ã„Â°nÃ…Å¸aat, Mimari, Restorasyon.",
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
