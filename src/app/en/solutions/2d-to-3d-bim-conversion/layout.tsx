import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "2D CAD to 3D BIM Conversion Services | EOS Proje",
  description: "Convert your flat DWG files into intelligent 3D BIM models with clash detection capability, ISO 19650 compliant.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/solutions/2d-to-3d-bim-conversion"
});

export default function TwoDto3DBimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
