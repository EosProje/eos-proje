import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Scan, Box, FileCheck, Zap, Clock, Shield, Building2, Factory, Landmark, ChevronDown } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "Scan to BIM Hizmeti | Lazer Taramadan BIM Modele | EOS Proje",
  description: "Scan to BIM hizmeti ile mevcut yapılarınızı lazer tarama teknolojisi kullanarak milimetrik hassasiyetle 3D BIM modellerine dönüştürüyoruz. LOD 100-500 seviyelerinde profesyonel çözümler.",
  keywords: ["scan to bim", "lazer tarama bim", "3d tarama", "nokta bulutu bim", "mevcut yapı modelleme", "as-built bim"],
  alternates: {
    canonical: `${SITE_URL}/cozumler/scan-to-bim`,
    languages: {
      "tr": `${SITE_URL}/cozumler/scan-to-bim`,
      "en": `${SITE_URL}/en/solutions/scan-to-bim`,
    },
  },
  openGraph: {
    title: "Scan to BIM Hizmeti | EOS Proje",
    description: "Lazer tarama ile elde edilen nokta bulutlarını akıllı BIM modellerine dönüştürüyoruz.",
    url: `${SITE_URL}/cozumler/scan-to-bim`,
    type: "website",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

const faqs = [
  {
    question: "Scan to BIM süreci ne kadar sürer?",
    answer: "Proje büyüklüğüne ve istenen LOD seviyesine bağlı olarak 1-4 hafta arasında değişir. Küçük ölçekli projeler (500m²) 1 haftada, büyük endüstriyel tesisler 4 haftaya kadar sürebilir."
  },
  {
    question: "Scan to BIM maliyeti nasıl belirlenir?",
    answer: "Maliyet; taranacak alan (m²), istenen detay seviyesi (LOD), mekanın karmaşıklığı ve MEP yoğunluğuna göre belirlenir. Ücretsiz keşif ziyareti sonrası detaylı teklif sunuyoruz."
  },
  {
    question: "Hangi dosya formatlarında teslim alırım?",
    answer: "Standart teslim paketimiz: Nokta Bulutu (.RCP, .E57), BIM Modeli (.RVT, .IFC), 2D CAD çizimleri (.DWG) ve QA/QC raporlarını içerir."
  },
  {
    question: "LOD 300 ile LOD 400 arasındaki fark nedir?",
    answer: "LOD 300 mimari ve mühendislik koordinasyonu için yeterli detay sunarken, LOD 400 imalat ve montaj için gereken tüm bağlantı detaylarını, flanşları ve askı elemanlarını içerir."
  },
  {
    question: "Tarihi binalar için Scan to BIM yapılabilir mi?",
    answer: "Evet, Heritage BIM (HBIM) olarak adlandırılan bu süreçte tarihi yapıların düzensiz geometrilerini ve deformasyonlarını koruyarak modelleriz."
  },
  {
    question: "Tarama sırasında üretim durmak zorunda mı?",
    answer: "Hayır. Lazer tarama temassız ve hızlı bir süreçtir. Endüstriyel tesislerde üretimi durdurmadan, güvenli mesafeden tarama yapılabilir."
  }
];

const processSteps = [
  {
    step: 1,
    title: "Proje Planlama",
    description: "Tarama noktaları belirlenir, LOD seviyesi ve teslim formatları netleştirilir.",
    icon: <FileCheck className="w-6 h-6" />
  },
  {
    step: 2,
    title: "Saha Taraması",
    description: "LiDAR ve SLAM teknolojileri ile yapının tamamı milimetrik hassasiyetle taranır.",
    icon: <Scan className="w-6 h-6" />
  },
  {
    step: 3,
    title: "Veri İşleme",
    description: "Nokta bulutları birleştirilir, temizlenir ve optimize edilir.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    step: 4,
    title: "BIM Modelleme",
    description: "Revit ortamında parametrik ve akıllı BIM modeli oluşturulur.",
    icon: <Box className="w-6 h-6" />
  },
  {
    step: 5,
    title: "QA/QC & Teslim",
    description: "Model nokta bulutu ile doğrulanır, sapma analizi raporlanır ve teslim edilir.",
    icon: <Shield className="w-6 h-6" />
  }
];

export default function ScanToBimPage() {
  return (
    <>
      <ServiceSchema
        name="Scan to BIM Hizmeti"
        description="Mevcut yapıları lazer tarama teknolojisi ile dijitalleştirerek akıllı BIM modellerine dönüştürme hizmeti."
        url="/cozumler/scan-to-bim"
        image="/images/EosProje-point-cloud-to-bim-modelleme.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Mühendislik Çözümleri"
          title="Scan to BIM"
          description="Mevcut yapılarınızı lazer tarama teknolojisi ile dijitalleştirerek akıllı, parametrik BIM modellerine dönüştürüyoruz."
          breadcrumb={[
            { label: "Çözümler", href: "/cozumler" },
            { label: "Scan to BIM", href: "/cozumler/scan-to-bim" }
          ]}
        />

        {/* TL;DR Section */}
        <section className="py-12 px-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">TL;DR</span> — Özet
              </h2>
              <p className="text-slate-600 leading-relaxed">
                <strong>Scan to BIM</strong>, mevcut yapıların 3D lazer tarama ile dijitalleştirilip akıllı BIM modellerine dönüştürülmesi sürecidir. 
                EOS Proje olarak ±2mm hassasiyetle tarama yapıyor, LOD 200-500 seviyelerinde Revit modelleri üretiyoruz. 
                Renovasyon, endüstriyel tesis ve tarihi eser projelerinde tasarım hatalarını önleyerek %30'a varan maliyet tasarrufu sağlıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Dijital Dönüşüm</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Fiziksel Gerçekliği Dijital İkize Dönüştürün</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Geleneksel rölöve yöntemleri ile elde edilmesi günler süren, hata payı yüksek ölçümler yerine; 
                  <strong> Scan to BIM</strong> teknolojisi ile saatler içinde milimetrik hassasiyetle dijital model elde edin.
                </p>
                <ul className="space-y-4">
                  {[
                    "±2mm hassasiyette 3D nokta bulutu",
                    "LOD 200-500 seviyelerinde BIM modelleme",
                    "Revit, ArchiCAD, IFC formatlarında teslim",
                    "Clash Detection ile çakışma analizi",
                    "QA/QC raporu ve sapma analizi"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/infographics/eosproje-scan-to-bim-sureci.png"
                  alt="Scan to BIM Süreci"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5 Adımda Scan to BIM Süreci</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Projelerimizi şeffaf ve denetlenebilir bir süreçle yönetiyoruz.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-slate-800 rounded-2xl p-6 text-center relative">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {step.icon}
                  </div>
                  <div className="text-red-500 text-sm font-bold mb-2">Adım {step.step}</div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Uygulama Alanları</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Scan to BIM teknolojisi farklı sektörlerde kritik avantajlar sağlar.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: "Mimari & Renovasyon",
                  description: "Mevcut binaların yenileme projelerinde gerçek durum tespiti ve tasarım altlığı oluşturma.",
                  link: "/sektorler/renovasyon"
                },
                {
                  icon: <Factory className="w-8 h-8" />,
                  title: "Endüstriyel Tesisler",
                  description: "Fabrika, enerji santrali ve üretim tesislerinin MEP sistemlerinin modellenmesi.",
                  link: "/sektorler/endustriyel-tesis"
                },
                {
                  icon: <Landmark className="w-8 h-8" />,
                  title: "Tarihi Eser (HBIM)",
                  description: "Kültürel miras yapılarının koruma ve restorasyon projelerinde dokümantasyon.",
                  link: "/cozumler/hbim"
                }
              ].map((item, idx) => (
                <Link href={item.link} key={idx} className="group">
                  <div className="bg-slate-50 rounded-2xl p-8 h-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-200">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <span className="text-red-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Detaylı Bilgi <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-slate-600">Scan to BIM hakkında merak edilenler</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Files Download */}
        <SampleFilesDownload />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projeniz İçin Ücretsiz Keşif Alın</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Mevcut yapınızı dijitalleştirmek ve BIM avantajlarından yararlanmak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Teklif Alın <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/referanslar" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                Referanslarımızı İnceleyin
              </Link>
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        <section className="py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-6">İlgili Çözümler</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Point Cloud to BIM", href: "/cozumler/nokta-bulutu-bim" },
                { label: "Lazer Tarama", href: "/cozumler/lazer-tarama" },
                { label: "As-Built Modelleme", href: "/cozumler/mevcut-durum-modelleme" },
                { label: "Dijital İkiz", href: "/cozumler/dijital-ikiz" },
                { label: "HBIM", href: "/cozumler/hbim" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
