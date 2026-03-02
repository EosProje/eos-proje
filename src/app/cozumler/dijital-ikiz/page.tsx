import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cpu, Layers, Activity, Shield, Zap, Database, Building2, Factory, Settings, ChevronDown, Network } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "Dijital İkiz Çözümleri | Digital Twin | EOS Proje",
  description: "Dijital İkiz (Digital Twin) çözümleri ile yapılarınızın ve tesislerinizin canlı dijital kopyalarını oluşturuyoruz. IoT entegrasyonu, gerçek zamanlı izleme ve simülasyon.",
  keywords: ["dijital ikiz", "digital twin", "iot entegrasyonu", "akıllı bina", "tesis yönetimi", "gerçek zamanlı izleme"],
  alternates: {
    canonical: `${SITE_URL}/cozumler/dijital-ikiz`,
    languages: {
      "tr": `${SITE_URL}/cozumler/dijital-ikiz`,
      "en": `${SITE_URL}/en/solutions/digital-twin`,
    },
  },
  openGraph: {
    title: "Dijital İkiz Çözümleri | EOS Proje",
    description: "Yapılarınızın canlı dijital kopyalarını oluşturun.",
    url: `${SITE_URL}/cozumler/dijital-ikiz`,
    type: "website",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

const faqs = [
  {
    question: "Dijital İkiz nedir?",
    answer: "Dijital İkiz (Digital Twin), fiziksel bir varlığın veya sistemin gerçek zamanlı verilerle desteklenen sanal kopyasıdır. BIM modeli ile IoT sensörlerinin birleşiminden oluşur ve canlı bir şekilde yapının durumunu yansıtır."
  },
  {
    question: "Dijital İkiz ile BIM modeli arasındaki fark nedir?",
    answer: "BIM modeli statik bir 3D model iken, Dijital İkiz canlı sensör verileriyle beslenen dinamik bir sistemdir. Dijital İkiz, gerçek zamanlı izleme, simülasyon ve prediktif bakım imkanı sunar."
  },
  {
    question: "Hangi sektörlerde Dijital İkiz kullanılıyor?",
    answer: "Endüstriyel tesisler, akıllı binalar, enerji santralleri, havalimanları, hastaneler ve şehir altyapıları gibi karmaşık yapılarda yaygın olarak kullanılmaktadır."
  },
  {
    question: "Dijital İkiz oluşturmak için ne gerekiyor?",
    answer: "Temel olarak 3D tarama ile elde edilmiş As-Built BIM modeli, IoT sensörleri (sıcaklık, basınç, titreşim vb.) ve bunları birleştiren bir platform gerekir. EOS Proje olarak tüm süreci yönetiyoruz."
  },
  {
    question: "Dijital İkiz'in ROI'si nasıl hesaplanır?",
    answer: "Dijital İkiz, arıza sürelerini %30-50 azaltabilir, enerji verimliliğini %10-20 artırabilir ve bakım maliyetlerini %25-40 düşürebilir. ROI genellikle 1-2 yıl içinde görülür."
  },
  {
    question: "Mevcut sistemlerimle entegre olabilir mi?",
    answer: "Evet. Dijital İkiz platformları SCADA, BMS, CMMS gibi mevcut sistemlerle API üzerinden entegre olabilir. EOS Proje olarak entegrasyon sürecinde destek sağlıyoruz."
  }
];

const benefits = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Gerçek Zamanlı İzleme",
    description: "Yapınızın durumunu 7/24 canlı olarak takip edin."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Prediktif Bakım",
    description: "Arızaları olmadan önce tespit edip önlem alın."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Enerji Optimizasyonu",
    description: "Enerji tüketimini analiz edin ve optimize edin."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Risk Simülasyonu",
    description: "Yangın, deprem gibi senaryoları simüle edin."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Veri Entegrasyonu",
    description: "Tüm yapı verilerini tek platformda birleştirin."
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "IoT Entegrasyonu",
    description: "Sensör verilerini BIM modeline bağlayın."
  }
];

export default function DijitalIkizPage() {
  return (
    <>
      <ServiceSchema
        name="Dijital İkiz Çözümleri"
        description="Yapıların ve tesislerin IoT entegrasyonu ile canlı dijital kopyalarının oluşturulması hizmeti."
        url="/cozumler/dijital-ikiz"
        image="/images/EosProje-point-cloud-to-bim-modelleme.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Mühendislik Çözümleri"
          title="Dijital İkiz"
          description="Yapılarınızın ve tesislerinizin IoT entegrasyonu ile canlı dijital kopyalarını oluşturuyoruz. Gerçek zamanlı izleme ve akıllı yönetim."
          breadcrumb={[
            { label: "Çözümler", href: "/cozumler" },
            { label: "Dijital İkiz", href: "/cozumler/dijital-ikiz" }
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
                <strong>Dijital İkiz</strong>, fiziksel yapıların IoT sensörleri ve BIM modelleri ile birleştirilmiş canlı dijital kopyalarıdır. 
                EOS Proje olarak lazer tarama ile As-Built modeli oluşturuyor, sensör entegrasyonu yapıyor ve gerçek zamanlı izleme platformu kuruyoruz. 
                Arıza sürelerinde %30-50 azalma, enerji maliyetlerinde %10-20 tasarruf sağlıyor.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Digital Twin</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Yapılarınızın Canlı Dijital Kopyası</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Dijital İkiz, fiziksel varlıklarınızın gerçek zamanlı verilerle beslenen sanal kopyasıdır. 
                  <strong> BIM modeli + IoT sensörleri + Analitik platform</strong> üçlüsünün birleşiminden oluşur.
                </p>
                <p className="text-slate-600 mb-6">
                  Geleneksel BIM modelleri statik kalırken, Dijital İkiz yapınızın anlık durumunu yansıtır, 
                  tahminleme yapar ve karar destek sistemi olarak çalışır.
                </p>
                <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">%30-50</div>
                    <div className="text-xs text-slate-500">Arıza Süresi Azalması</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">%10-20</div>
                    <div className="text-xs text-slate-500">Enerji Tasarrufu</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">%25-40</div>
                    <div className="text-xs text-slate-500">Bakım Maliyeti Düşüşü</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/infographics/eosproje-dijital-ikiz-mimari.png"
                  alt="Dijital İkiz Mimarisi"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dijital İkiz Avantajları</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Yapı ve tesis yönetiminde yeni nesil çözümler
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.description}</p>
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
                Dijital İkiz teknolojisi farklı sektörlerde değer yaratır.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Factory className="w-8 h-8" />,
                  title: "Endüstriyel Tesisler",
                  description: "Üretim hatları, enerji santralleri ve rafinerilerde anlık izleme ve prediktif bakım.",
                  link: "/sektorler/endustriyel-tesis"
                },
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: "Akıllı Binalar",
                  description: "Ofis binaları, AVM'ler ve hastanelerde enerji yönetimi ve konfor optimizasyonu.",
                  link: "/sektorler/mimarlik"
                },
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "Tesis Yönetimi (FM)",
                  description: "Varlık takibi, bakım planlaması ve alan yönetimi için merkezi platform.",
                  link: "/blog/bim-facility-management"
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

        {/* Process */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dijital İkiz Oluşturma Süreci</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Veri Toplama", desc: "Lazer tarama ile As-Built verisi toplama" },
                { step: 2, title: "BIM Modelleme", desc: "LOD 300-400 seviyesinde akıllı model" },
                { step: 3, title: "IoT Entegrasyonu", desc: "Sensör bağlantıları ve veri akışı" },
                { step: 4, title: "Platform Kurulumu", desc: "Görselleştirme ve analitik dashboard" }
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-slate-600">Dijital İkiz hakkında merak edilenler</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Dijital İkiz Projenizi Başlatın</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Yapılarınızı akıllı ve bağlantılı hale getirmek için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Danışmanlık Alın <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/blog/endustriyel-dijital-ikiz" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                Blog Yazısını Okuyun
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
                { label: "Scan to BIM", href: "/cozumler/scan-to-bim" },
                { label: "BIM Modelleme", href: "/cozumler/bim-modelleme" },
                { label: "Lazer Tarama", href: "/cozumler/lazer-tarama" },
                { label: "As-Built Modelleme", href: "/cozumler/mevcut-durum-modelleme" },
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
