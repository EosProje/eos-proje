import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "BIM Modeling Services | Revit & ArchiCAD | EOS Proje",
  description: "Professional BIM modeling from LOD 100 to LOD 500. Revit modeling services for architectural, structural and MEP disciplines.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/solutions/bim-modeling"
});

export default function BimModelingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
