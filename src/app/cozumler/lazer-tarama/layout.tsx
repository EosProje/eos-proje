import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "3D Lazer Tarama Hizmeti | LiDAR ve Nokta Bulutu | EOS Proje",
  description: "Milimetrik hassasiyette 3D lazer tarama ve LiDAR hizmetleri. Binalar, tesisler ve endüstriyel yapılar için profesyonel nokta bulutu çözümleri.",
  cluster: "scanToBim",
  funnel: "decision",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/cozumler/lazer-tarama"
});

export default function LazerTaramaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
