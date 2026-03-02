import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "HBIM - Heritage Building Information Modeling | EOS Proje",
  description: "Heritage BIM (HBIM) solutions for cultural heritage preservation. Historic building survey, restoration and documentation projects.",
  cluster: "heritageAndArchitecture",
  funnel: "decision",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/solutions/hbim"
});

export default function HbimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
