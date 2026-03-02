import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Us | EOS Proje - Expert Surveying & BIM Engineering",
  description: "Meet our expert engineering team providing laser scanning and BIM services at international standards. Istanbul and Budapest offices.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/about"
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
