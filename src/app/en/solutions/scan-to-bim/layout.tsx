import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Scan to BIM Services | Point Cloud to BIM Model | EOS Proje",
  description: "Professional Scan to BIM solutions for digitizing existing structures. ISO 19650 compliant BIM models from point cloud data.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/solutions/scan-to-bim"
});

export default function ScanToBimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
