import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "3D Laser Scanning Services | LiDAR & Point Cloud | EOS Proje",
  description: "Millimeter-accurate 3D laser scanning and LiDAR services. Professional point cloud solutions for buildings, facilities and industrial structures.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "en",
  canonicalUrl: "https://eosproje.com/en/solutions/laser-scanning"
});

export default function LaserScanningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
