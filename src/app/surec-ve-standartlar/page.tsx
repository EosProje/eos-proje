"use client";

import SubPageHero from "@/components/SubPageHero";
import { Workflow, FileCheck, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const steps = [
    {
      phase: "Keşif ve Planlama",
      duration: "1-2 gün",
      items: [
        "İlk görüşme: Proje kapsamı, ihtiyaçlar, beklentiler",
        "Saha ön incelemesi (gerekirse)",
        "Teknik fizibilite analizi",
        "LOD seviyesi ve teslimat formatı belirleme",
        "Detaylı fiyat teklifi hazırlama",
        "Sözleşme ve NDA imzalama"
      ]
    },
    {
      phase: "Veri Toplama",
      duration: "2-5 gün",
      items: [
        "Lazer tarama ekipmanı hazırlığı",
        "Sahada scan planı oluşturma",
        "Nokta bulutu veri toplama (Leica/Faro)",
        "Panoramik fotoğraf çekimi",
        "Mevcut CAD/PDF dokümanları toplama",
        "Operasyon ekibinden teknik bilgi alma"
      ]
    },
    {
      phase: "Veri İşleme",
      duration: "3-7 gün",
      items: [
        "Scan registration (nokta birleştirme)",
        "Quality check ve eksik veri tespiti",
        "Koordinat sistemi tanımlama",
        "Outlier temizleme",
        "Veri optimizasyonu",
        "Client review için low-res model export"
      ]
    },
    {
      phase: "BIM Modelleme",
      duration: "10-20 gün",
      items: [
        "Revit template hazırlama",
        "Levels, Grids, Views oluşturma",
        "Parametrik modelleme (mimari, yapısal, MEP)",
        "Family atama ve parametre doldurma",
        "Annotation ve dimension ekleme",
        "İlk draft teslimat ve feedback"
      ]
    },
    {
      phase: "Kalite Kontrol",
      duration: "3-5 gün",
      items: [
        "İç kontrol: Revit Warnings temizleme",
        "Bağımsız QC: Geometrik doğrulama",
        "Nokta bulutu overlay analizi (±2mm)",
        "Clash detection (Navisworks)",
        "IFC export testi",
        "Revizyon döngüsü (gerekirse)"
      ]
    },
    {
      phase: "Teslimat ve Destek",
      duration: "1-2 gün",
      items: [
        "Final package hazırlama (RVT, IFC, DWG, PDF)",
        "Sapma analiz raporu ekleme",
        "Dokümantasyon (BEP, kullanım kılavuzu)",
        "Client eğitimi (isteğe bağlı)",
        "30 gün destek süreci başlatma",
        "Proje kapanış toplantısı"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SubPageHero
        title="Süreç ve Standartlarımız"
        description="Point cloud to BIM projelerinde uyguladığımız 6 aşamalı iş akışımız ve kalite standartlarımız. ISO 19650 BIM standardına tam uyum."
        category="Süreç & Kalite"
        breadcrumb={[{ label: "Süreç & Standartlar", href: "/surec-ve-standartlar" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-4">6 Aşamalı Proje Süreci</h2>
          <p className="text-lg text-slate-600 mb-12">
            Ortalama 3-4 haftalık bir as-built modelleme projesinin aşamaları ve süreleri:
          </p>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary-red)] to-slate-200"></div>
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className="relative pl-24">
                  <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary-red)] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl font-black">{idx + 1}</span>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-black text-slate-900">{step.phase}</h3>
                      <span className="px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg text-sm flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Standartlar */}
        <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white">
          <h2 className="text-3xl font-black mb-8">Uyduğumuz Uluslararası Standartlar</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-black text-red-400 mb-4 uppercase">BIM Standartları</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">ISO 19650:</strong> BIM enformasyon yönetimi (UK BIM Level 2)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">LOD Specification:</strong> BIMForum tarafından tanımlanan detay seviyeleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">IFC Standards:</strong> buildingSMART IFC2x3 ve IFC4 uyumluluğu</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-red-400 mb-4 uppercase">Lazer Tarama Standartları</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">ASTM E2807:</strong> 3D imaging kullanarak bina ölçüm standardı</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">USIBD:</strong> ABD BIM dokümantasyon standardı</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">E57 Format:</strong> Nokta bulutu veri standardı (ASTM E2807)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-[3rem] p-16 text-white text-center">
          <Workflow className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-black mb-6">Projenizi Başlatalım</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
            Standartlara uygun, kalite garantili BIM modelleme hizmeti almak için bizimle iletişime geçin.
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-700 font-black rounded-2xl hover:bg-slate-100 transition-all">
            Proje Başvurusu Yapın <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
