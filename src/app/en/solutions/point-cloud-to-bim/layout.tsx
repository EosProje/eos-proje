import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Point Cloud to BIM Conversion | 3D Modeling | EOS Proje",
  description: "Intelligent 3D BIM models from laser scan data (point cloud). Output in Revit, AutoCAD and other formats.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/solutions/point-cloud-to-bim"
});

export default function PointCloudBimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
