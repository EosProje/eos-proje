import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Clash Detection Services | BIM Coordination | EOS Proje",
  description: "Professional clash analysis with Navisworks and BIM 360. MEP, architectural and structural discipline coordination and resolution reports.",
  cluster: "scanToBim",
  funnel: "consideration",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/solutions/clash-detection"
});

export default function ClashDetectionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
