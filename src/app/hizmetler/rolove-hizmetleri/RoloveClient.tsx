"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ruler,
  Building2,
  Landmark,
  Camera,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
  Target,
  Shield,
  Zap,
  Award,
  ChevronDown,
  Paintbrush,
  Warehouse
} from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import TLDR from "@/components/geo/TLDR";
import EEAT from "@/components/geo/EEAT";
import FAQ from "@/components/FAQ";
import { roloveFAQs } from "@/content/faq/services";
import { EASE_CURVES } from "@/lib/animations";
import { SITE_URL } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE_CURVES.smooth }
};

export default function RoloveClient() {
  const services = [
    {
      icon: Building2,
      title: "Cephe Rölövesi",
      description: "Bina cephelerinin detaylı ölçümü ve çizimi. Pencere, kapı, süsleme elemanları dahil tüm detaylar.",
      features: ["Ortofoto üretimi", "CAD çıktılar", "Deformasyon analizi"],
      link: "/sektorler/mimarlik"
    },
    {
      icon: Ruler,
      title: "Mimari Rölöve",
      description: "Yapının tüm katlarının plan, kesit ve görünüşlerinin hazırlanması. İç mekan ve dış cephe dahil.",
      features: ["1/50 ve 1/100 ölçekler", "Alan hesapları", "BIM modeli opsiyonu"],
      link: "/cozumler/nokta-bulutu-bim"
    },
    {
      icon: Landmark,
      title: "Eski Eser Rölövesi",
      description: "Tescilli tarihi yapıların koruma kurulu standartlarına uygun belgelenmesi.",
      features: ["Hasaр haritalama", "Malzeme analizi", "Dönem tespiti"],
      link: "/sektorler/restorasyon"
    },
    {
      icon: Paintbrush,
      title: "Restorasyon Rölövesi",
      description: "Restorasyon projelerine altlık oluşturacak detaylı rölöve ve analiz çalışmaları.",
      features: ["Deformasyon ölçümü", "Stratigrafi", "Müdahale önerileri"],
      link: "/blog/hbim-restorasyon"
    }
  ];

  const comparisonData = [
    { aspect: "Ölçüm Süresi (1000m²)", traditional: "5-7 gün", laserScanning: "1-2 gün" },
    { aspect: "Doğruluk", traditional: "±10-20mm", laserScanning: "±2mm" },
    { aspect: "Detay Kaybı", traditional: "Yüksek", laserScanning: "Minimum" },
    { aspect: "Ulaşılmaz Noktalar", traditional: "Ölçülemez", laserScanning: "Ölçülebilir" },
    { aspect: "Dijital Arşiv", traditional: "Yok", laserScanning: "Nokta bulutu" },
    { aspect: "Tekrar Kullanım", traditional: "Zor", laserScanning: "Kolay" }
  ];

  const process = [
    { step: 1, title: "Keşif & Planlama", desc: "Yapının incelenmesi, tarama stratejisinin belirlenmesi" },
    { step: 2, title: "Saha Taraması", desc: "3D lazer tarama ve/veya fotogrametri ile veri toplama" },
    { step: 3, title: "Veri İşleme", desc: "Nokta bulutlarının birleştirilmesi ve temizlenmesi" },
    { step: 4, title: "Rölöve Çizimi", desc: "CAD ortamında plan, kesit, cephe çizimlerinin hazırlanması" },
    { step: 5, title: "Kontrol & Teslimat", desc: "Kalite kontrol ve son düzeltmeler" }
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lazer Tarama ile Rölöve Hizmetleri",
    "description": "Lazer tarama teknolojisi ile cephe rölöve, mimari rölöve, eski eser rölöve ve restorasyon rölövesi hizmetleri.",
    "provider": {
      "@type": "Organization",
      "name": "EOS Proje",
      "url": SITE_URL
    },
    "serviceType": ["Cephe Rölöve", "Mimari Rölöve", "Eski Eser Rölöve", "Restorasyon Rölövesi"],
    "areaServed": ["Türkiye", "Avrupa"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rölöve Hizmetleri",
      "itemListElement": services.map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        }
      }))
    }
  };

  // HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Lazer Tarama ile Rölöve Nasıl Yapılır?",
    "description": "3D lazer tarama teknolojisi kullanarak profesyonel rölöve çıkarma süreci",
    "step": process.map(p => ({
      "@type": "HowToStep",
      "position": p.step,
      "name": p.title,
      "text": p.desc
    }))
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--color-deep-charcoal)]">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <SubPageHero
        category="Mühendislik Hizmetleri"
        title="Lazer Tarama ile Rölöve Hizmetleri"
        description="Cephe rölöve, mimari rölöve, eski eser rölöve ve restorasyon rölövesi. ±2mm hassasiyet garantisi ile profesyonel belgeleme."
        breadcrumb={[
          { label: "Hizmetler", href: "/cozumler" },
          { label: "Rölöve Hizmetleri", href: "/hizmetler/rolove-hizmetleri" }
        ]}
      />

      {/* TL;DR Summary */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <TLDR
          title="Bu Sayfanın Özeti"
          points={[
            "Lazer tarama ile rölöve, geleneksel yöntemlere göre 5-10 kat daha hızlı ve ±2mm hassasiyette",
            "Cephe, mimari, eski eser ve restorasyon rölöveleri için uygundur",
            "Koruma kurulu standartlarına uygun çıktılar hazırlıyoruz",
            "Dijital arşiv sayesinde gelecekte tekrar kullanım mümkün",
            "15+ yıllık deneyim ve 500+ tamamlanmış proje"
          ]}
          readTime="5 dk okuma"
          variant="summary"
        />
      </section>

      {/* What is Rölöve */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">
              Tanım
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              Rölöve Nedir?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Rölöve</strong>, mevcut bir yapının ölçülü teknik çizimlerinin (plan, kesit, cephe) hazırlanması işlemidir. 
              Geleneksel olarak şerit metre ve nivelman ile yapılırken, modern teknoloji ile <strong>3D lazer tarama</strong> 
              kullanılarak çok daha hızlı, doğru ve detaylı sonuçlar elde edilir.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div {...fadeUp} className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
              Geleneksel vs Lazer Tarama ile Rölöve
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-4 font-bold text-slate-900">Kriter</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-500">Geleneksel Yöntem</th>
                    <th className="text-center py-4 px-4 font-bold text-red-600">Lazer Tarama</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100">
                      <td className="py-4 px-4 font-medium text-slate-700">{row.aspect}</td>
                      <td className="py-4 px-4 text-center text-slate-500">{row.traditional}</td>
                      <td className="py-4 px-4 text-center text-green-600 font-semibold">{row.laserScanning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">
              Hizmetlerimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              Rölöve Hizmet Türleri
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Her proje tipine özel, ihtiyaca yönelik rölöve çözümleri sunuyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-red-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
                >
                  Detaylı Bilgi <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-red-400 font-black uppercase tracking-widest text-[10px] bg-red-500/10 px-4 py-2 rounded-full mb-6 inline-block">
              Süreç
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Rölöve Çalışması Nasıl Yapılır?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Profesyonel 5 adımlık sürecimiz ile hızlı ve doğru sonuçlar.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-700 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="bg-slate-800 rounded-2xl p-6 text-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T Section */}
      <EEAT variant="full" lang="tr" />

      {/* Deliverables */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">
              Teslimat
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              Ne Teslim Ediyoruz?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "CAD Çizimler",
                items: ["Plan rölöveleri (1/50, 1/100)", "Kesit rölöveleri", "Cephe rölöveleri", "Detay çizimleri (1/20, 1/10)"]
              },
              {
                icon: Camera,
                title: "Görsel Belgeler",
                items: ["Ortofoto görüntüler", "Panoramik fotoğraflar", "3D model görselleri", "Video fly-through"]
              },
              {
                icon: Warehouse,
                title: "Dijital Veri",
                items: ["Nokta bulutu (E57, RCS)", "BIM modeli (opsiyonel)", "Alan/hacim hesapları", "Deformasyon raporu"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Rölöve Hizmetleri SSS"
        subtitle="Lazer tarama ile rölöve çalışmaları hakkında sıkça sorulan sorular."
        faqs={roloveFAQs}
        ctaText="Teklif Alın"
        ctaLink="/iletisim"
      />

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Rölöve Projeniz İçin Teklif Alın
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif görüşmesi ve detaylı fiyat teklifi için hemen iletişime geçin.
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
