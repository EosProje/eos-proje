"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Map,
  Plane,
  Mountain,
  Building2,
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  Shield,
  Layers
} from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import TLDR from "@/components/geo/TLDR";
import EEAT from "@/components/geo/EEAT";
import FAQ from "@/components/FAQ";
import { EASE_CURVES } from "@/lib/animations";
import { SITE_URL } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE_CURVES.smooth }
};

// Harita Ölçme FAQs
const haritaFAQs = [
  {
    question: "Drone ile halihazır harita çıkarmak ne kadar sürer?",
    answer: "Alan büyüklüğüne göre:\n\n• 10 hektar altı: 1 gün uçuş + 2-3 gün işleme\n• 10-50 hektar: 2-3 gün uçuş + 1 hafta işleme\n• 50+ hektar: Proje bazlı planlama\n\nHava koşulları ve izin süreçleri ek süre gerektirebilir."
  },
  {
    question: "Drone haritalaması mı yoksa lazer tarama mı tercih edilmeli?",
    answer: "Projeye göre değişir:\n\n• Drone: Geniş açık alanlar, arazi, şantiyeler için ideal\n• Lazer Tarama: Yapı içi, yoğun bitki örtüsü, yüksek hassasiyet gereken alanlar için\n\nÇoğu projede hibrit yaklaşım en iyi sonucu verir."
  },
  {
    question: "Halihazır harita hangi ölçeklerde hazırlanıyor?",
    answer: "İhtiyaca göre:\n\n• 1/500: Detaylı imar planları\n• 1/1000: Genel imar planları\n• 1/2000: Bölge planları\n• 1/5000: Master planlar\n\nStandart teslimat 1/500 ve 1/1000 ölçeklerindedir."
  },
  {
    question: "Drone uçuşları için izin gerekiyor mu?",
    answer: "Evet, Sivil Havacılık Genel Müdürlüğü (SHGM) düzenlemelerine uygun çalışıyoruz:\n\n• Pilot lisansı (SHY-IHA)\n• Uçuş izni ve sigorta\n• NOTAM bildirimi (gerekli bölgelerde)\n\nTüm izin süreçlerini EOS Proje olarak yönetiyoruz."
  },
  {
    question: "CBS (GIS) uyumlu veri üretiyor musunuz?",
    answer: "Evet, tüm büyük CBS platformlarıyla uyumlu formatlar:\n\n• Shapefile (.shp)\n• GeoDatabase (.gdb)\n• GeoTIFF\n• KML/KMZ\n• DWG/DXF (georeferanslı)\n\nKoordinat sistemi: ITRF96 veya talep edilen sistem."
  }
];

export default function HaritaOlcmeClient() {
  const services = [
    {
      icon: Plane,
      title: "Drone ile Halihazır Harita",
      description: "Fotogrametri tekniği ile geniş alanların hızlı ve ekonomik haritalanması.",
      features: ["Ortomozaik üretimi", "Sayısal yükseklik modeli", "Hacim hesabı"]
    },
    {
      icon: Mountain,
      title: "Topografik Harita",
      description: "Arazi eğimi, yükseklik eğrileri ve detay noktalarını içeren haritalar.",
      features: ["Kontur haritası", "Eğim analizi", "Kesit profilleri"]
    },
    {
      icon: Building2,
      title: "Kadastral Harita",
      description: "Mülkiyet sınırları ve tapu bilgilerini içeren yasal haritalar.",
      features: ["Parsel tespiti", "Aplikasyon", "Cins değişikliği"]
    },
    {
      icon: Layers,
      title: "Altyapı Haritalama",
      description: "Yeraltı ve yerüstü altyapı sistemlerinin dijital haritalanması.",
      features: ["Boru hatları", "Elektrik şebekesi", "Telekomünikasyon"]
    }
  ];

  const technologies = [
    { name: "DJI Matrice 300 RTK", type: "Drone", spec: "±2cm hassasiyet" },
    { name: "Leica RTC360", type: "Lazer Tarayıcı", spec: "±2mm hassasiyet" },
    { name: "Trimble R12i", type: "GNSS", spec: "RTK ölçüm" },
    { name: "Pix4D / Agisoft", type: "Yazılım", spec: "Fotogrametri işleme" }
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Harita Ölçme ve Halihazır Harita Hizmetleri",
    "description": "Drone ile halihazır harita ve lazer tarama ile harita ölçme hizmetleri.",
    "provider": {
      "@type": "Organization",
      "name": "EOS Proje",
      "url": SITE_URL
    },
    "serviceType": ["Halihazır Harita", "Topografik Harita", "Kadastral Harita", "Altyapı Haritalama"],
    "areaServed": ["Türkiye", "Avrupa"]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--color-deep-charcoal)]">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <SubPageHero
        category="Mühendislik Hizmetleri"
        title="Harita Ölçme & Halihazır Harita"
        description="Drone ve lazer tarama teknolojileri ile profesyonel harita üretimi. ±2cm hassasiyet, CBS uyumlu teslimat."
        breadcrumb={[
          { label: "Hizmetler", href: "/cozumler" },
          { label: "Harita Ölçme", href: "/hizmetler/harita-olcme" }
        ]}
      />

      {/* TL;DR */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <TLDR
          title="Bu Sayfanın Özeti"
          points={[
            "Drone fotogrametri ile geniş alanların hızlı haritalanması",
            "Lazer tarama ile yüksek hassasiyetli ölçümler (±2mm)",
            "Halihazır harita, topografik harita, kadastral harita hizmetleri",
            "CBS (GIS) uyumlu veri formatlarında teslimat",
            "SHGM onaylı profesyonel ekip ve ekipmanlar"
          ]}
          readTime="4 dk okuma"
        />
      </section>

      {/* What is Halihazır Harita */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              Halihazır Harita Nedir?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Halihazır harita</strong>, bir arazinin veya yerleşim alanının mevcut durumunu gösteren, 
              yapılar, yollar, altyapı elemanları ve arazi detaylarını içeren teknik haritadır. İmar planı, 
              proje tasarımı ve mühendislik çalışmalarının vazgeçilmez altlığıdır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeUp}>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Neden Drone ile Halihazır Harita?</h3>
              <ul className="space-y-4">
                {[
                  "10 kat daha hızlı veri toplama",
                  "Ulaşılması zor alanların güvenle haritalanması",
                  "Yüksek çözünürlüklü ortofoto ve 3D model",
                  "Hacim hesabı ve kesit profilleri",
                  "Periyodik karşılaştırma ve değişim tespiti"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="font-bold text-slate-900 mb-4">Kullanılan Teknolojiler</h4>
              <div className="space-y-4">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <div>
                      <div className="font-semibold text-slate-900">{tech.name}</div>
                      <div className="text-sm text-slate-500">{tech.type}</div>
                    </div>
                    <div className="text-sm text-red-600 font-medium">{tech.spec}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">
              Hizmetlerimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              Harita Ölçme Hizmetleri
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 hover:bg-slate-100 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-xs bg-white text-slate-600 px-3 py-1.5 rounded-full">
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Kullanım Alanları
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "İnşaat & Şantiye", items: ["Şantiye takibi", "Kazı/dolgu hesabı", "Progress monitoring"] },
              { title: "Belediye & Kamu", items: ["İmar planı altlığı", "Kent envanteri", "Altyapı yönetimi"] },
              { title: "Enerji & Altyapı", items: ["Güzergah etüdü", "Hat haritalama", "Tesis envanteri"] },
              { title: "Tarım & Orman", items: ["Arazi planlama", "Verim haritalama", "Orman envanteri"] },
              { title: "Madencilik", items: ["Ocak takibi", "Stok hesabı", "Rekültivasyon"] },
              { title: "Gayrimenkul", items: ["Parsel ölçümü", "Değerleme altlığı", "Due diligence"] }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
              >
                <h4 className="font-bold text-white mb-4">{item.title}</h4>
                <ul className="space-y-2">
                  {item.items.map((i, idx) => (
                    <li key={idx} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T */}
      <EEAT variant="compact" lang="tr" className="py-16 px-4" />

      {/* FAQ */}
      <FAQ
        title="Harita Ölçme SSS"
        subtitle="Drone haritalama ve halihazır harita hakkında sıkça sorulan sorular."
        faqs={haritaFAQs}
        ctaText="Teklif Alın"
        ctaLink="/iletisim"
      />

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Harita Projeniz İçin Teklif Alın
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Drone fotogrametri veya lazer tarama ile profesyonel harita üretimi için bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-black rounded-xl hover:bg-slate-100 transition-all"
            >
              Ücretsiz Teklif Alın <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/referanslar"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              Referansları İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
