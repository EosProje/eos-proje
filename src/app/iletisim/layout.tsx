import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "İletişim ve Fiyat Teklifi | EOS Proje",
  description: "Lazer tarama ve 3D modelleme projeleriniz için EOS Proje ile iletişime geçin, hemen fiyat teklifi alın. İstanbul ve Budapeşte.",
  cluster: "scanToBim",
  funnel: "action",
  lang: "tr",
  canonicalUrl: "https://eosproje.com/iletisim"
});

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
