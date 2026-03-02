import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Landmark, Camera, FileSearch, Shield, History, BookOpen, ChevronDown, Ruler } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "HBIM - Tarihi Yapı Bilgi Modellemesi | Heritage BIM | EOS Proje",
  description: "HBIM (Heritage BIM) hizmeti ile tarihi yapıların lazer tarama ve fotogrametri teknolojileriyle dijital dokümantasyonu. Restorasyon projeleri için koruma odaklı BIM çözümleri.",
  keywords: ["hbim", "heritage bim", "tarihi yapı modelleme", "restorasyon bim", "koruma dokümantasyonu", "tarihi eser lazer tarama"],
  alternates: {
    canonical: `${SITE_URL}/cozumler/hbim`,
    languages: {
      "tr": `${SITE_URL}/cozumler/hbim`,
      "en": `${SITE_URL}/en/solutions/hbim`,
    },
  },
  openGraph: {
    title: "HBIM - Tarihi Yapı Bilgi Modellemesi | EOS Proje",
    description: "Tarihi yapıların dijital koruma ve dokümantasyonu.",
    url: `${SITE_URL}/cozumler/hbim`,
    type: "website",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

const faqs = [
  {
    question: "HBIM nedir?",
    answer: "HBIM (Historic Building Information Modeling), tarihi yapıların lazer tarama ve fotogrametri ile dijitalleştirilip, koruma bilgilerini içeren akıllı BIM modellerinin oluşturulmasıdır. Standart BIM'den farklı olarak düzensiz geometrileri ve bozunma bilgilerini barındırır."
  },
  {
    question: "Geleneksel rölöve yerine neden HBIM?",
    answer: "HBIM, geleneksel rölöveye göre çok daha hassas (±2mm), hızlı ve kapsamlı veri sunar. Deformasyonlar, çatlaklar ve malzeme bozunmaları dijital ortamda belgelenir ve analiz edilebilir."
  },
  {
    question: "Hangi tarihi yapılar için HBIM uygulanabilir?",
    answer: "Camiler, kiliseler, saraylar, köşkler, hanlar, hamamlar, sivil mimarlık örnekleri ve arkeolojik alanlar dahil her türlü kültürel miras yapısında HBIM uygulanabilir."
  },
  {
    question: "HBIM süreci nasıl işler?",
    answer: "Süreç: 1) Lazer tarama ve fotogrametri ile veri toplama, 2) Nokta bulutu işleme, 3) Parametrik modelleme (düzensiz geometriler dahil), 4) Malzeme ve bozunma bilgisi ekleme, 5) Koruma raporu oluşturma."
  },
  {
    question: "Taş-taş rölöve nedir?",
    answer: "Taş-taş rölöve, tarihi duvarlardaki her bir taşın ayrı ayrı belgelenmesidir. Lazer tarama ile otomatik olarak tespit edilebilir veya manuel olarak işaretlenebilir. Restorasyon müdahalelerinin planlanmasında kritiktir."
  },
  {
    question: "Koruma Kurulu projelerinde HBIM kullanılabilir mi?",
    answer: "Evet. HBIM çıktıları Koruma Kurulu başvurularında kabul görür. Ayrıca 2D kesitler, görünüşler ve detay çizimleri de modellerden üretilebilir."
  }
];

const services = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "3D Lazer Tarama",
    description: "Tarihi yapıların milimetrik hassasiyetle temassız dijitalleştirilmesi."
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Rölöve Çıktıları",
    description: "Plan, kesit, görünüş ve detay çizimleri üretimi."
  },
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: "Hasar Analizi",
    description: "Çatlak haritalama, deformasyon ve bozunma tespiti."
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "HBIM Modelleme",
    description: "Düzensiz geometrileri koruyan parametrik modeller."
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Dijital Arşivleme",
    description: "Kültürel mirasın gelecek nesillere aktarılması."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Restorasyon Desteği",
    description: "Müdahale planlaması ve malzeme analizi."
  }
];

export default function HbimPage() {
  return (
    <>
      <ServiceSchema
        name="HBIM - Tarihi Yapı Bilgi Modellemesi"
        description="Tarihi yapıların lazer tarama ve fotogrametri teknolojileriyle dijital dokümantasyonu ve Heritage BIM çözümleri."
        url="/cozumler/hbim"
        image="/images/EosProje-point-cloud-to-bim-modelleme.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Mühendislik Çözümleri"
          title="HBIM - Heritage BIM"
          description="Tarihi yapıların lazer tarama ve fotogrametri teknolojileriyle dijital dokümantasyonu. Kültürel mirasın korunması için özel çözümler."
          breadcrumb={[
            { label: "Çözümler", href: "/cozumler" },
            { label: "HBIM", href: "/cozumler/hbim" }
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
                <strong>HBIM (Heritage BIM)</strong>, tarihi yapıların dijital koruma ve dokümantasyonu için özelleşmiş BIM yaklaşımıdır. 
                EOS Proje olarak lazer tarama ile ±2mm hassasiyette veri topluyor, düzensiz geometrileri koruyan modeller oluşturuyor 
                ve hasar analizi yapıyoruz. Koruma Kurulu projelerinden sanal müze uygulamalarına kadar geniş bir alanda hizmet veriyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Kültürel Miras</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Tarihi Yapıların Dijital Koruyucusu</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  HBIM, standart BIM'den farklı olarak <strong>düzensiz geometrileri, deformasyonları ve bozunma bilgilerini</strong> koruyarak tarihi yapıların gerçek durumunu dijital ortama aktarır.
                </p>
                <p className="text-slate-600 mb-6">
                  Geleneksel rölöve yöntemlerinin aksine, lazer tarama ile her detay milimetrik hassasiyetle yakalanır ve restorasyon sürecinde kritik bir altlık oluşturur.
                </p>
                <ul className="space-y-3">
                  {[
                    "±2mm hassasiyette 3D lazer tarama",
                    "Düzensiz geometrilerin korunması",
                    "Hasar ve bozunma analizi",
                    "Taş-taş rölöve dokümantasyonu",
                    "Koruma Kurulu uyumlu çıktılar"
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
                  src="/images/infographics/eosproje-hbim-tarihi-yapi-sureci.png"
                  alt="HBIM Tarihi Yapı Süreci"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">HBIM Hizmetlerimiz</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Tarihi yapılar için özelleşmiş kapsamlı çözümler sunuyoruz.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">HBIM Süreci</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Tarihi yapıların dijitalleştirilmesi için özel sürecimiz
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, title: "Ön İnceleme", desc: "Yapının durumu ve ihtiyaçların belirlenmesi" },
                { step: 2, title: "Veri Toplama", desc: "Lazer tarama ve fotogrametri" },
                { step: 3, title: "Veri İşleme", desc: "Nokta bulutu birleştirme ve temizleme" },
                { step: 4, title: "HBIM Modelleme", desc: "Düzensiz geometrili model oluşturma" },
                { step: 5, title: "Raporlama", desc: "Hasar analizi ve rölöve çıktıları" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Uygulama Alanları</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Camiler & Kiliseler", desc: "Dini yapıların koruma projeleri" },
                { title: "Saraylar & Köşkler", desc: "Sivil mimarlık örnekleri" },
                { title: "Hanlar & Hamamlar", desc: "Ticari tarihi yapılar" },
                { title: "Arkeolojik Alanlar", desc: "Kazı ve koruma çalışmaları" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <History className="w-8 h-8 text-red-600 mb-4" />
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
              <p className="text-slate-600">HBIM hakkında merak edilenler</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tarihi Yapınızı Dijitalleştirin</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Kültürel mirasımızın korunması için birlikte çalışalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Proje Görüşmesi <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/sektorler/restorasyon" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                Restorasyon Çözümleri
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
                { label: "Lazer Tarama", href: "/cozumler/lazer-tarama" },
                { label: "Scan to BIM", href: "/cozumler/scan-to-bim" },
                { label: "Point Cloud to BIM", href: "/cozumler/nokta-bulutu-bim" },
                { label: "Scan to CAD", href: "/cozumler/scan-to-cad" },
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
