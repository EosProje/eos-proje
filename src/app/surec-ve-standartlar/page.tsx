"use client";

import SubPageHero from "@/components/SubPageHero";
import { Workflow, FileCheck, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const steps = [
    {
      phase: "KeÃ…Å¸if ve Planlama",
      duration: "1-2 gÃƒÂ¼n",
      items: [
        "Ã„Â°lk gÃƒÂ¶rÃƒÂ¼Ã…Å¸me: Proje kapsamÃ„Â±, ihtiyaÃƒÂ§lar, beklentiler",
        "Saha ÃƒÂ¶n incelemesi (gerekirse)",
        "Teknik fizibilite analizi",
        "LOD seviyesi ve teslimat formatÃ„Â± belirleme",
        "DetaylÃ„Â± fiyat teklifi hazÃ„Â±rlama",
        "SÃƒÂ¶zleÃ…Å¸me ve NDA imzalama"
      ]
    },
    {
      phase: "Veri Toplama",
      duration: "2-5 gÃƒÂ¼n",
      items: [
        "Lazer tarama ekipmanÃ„Â± hazÃ„Â±rlÃ„Â±Ã„Å¸Ã„Â±",
        "Sahada scan planÃ„Â± oluÃ…Å¸turma",
        "Nokta bulutu veri toplama (Leica/Faro)",
        "Panoramik fotoÃ„Å¸raf ÃƒÂ§ekimi",
        "Mevcut CAD/PDF dokÃƒÂ¼manlarÃ„Â± toplama",
        "Operasyon ekibinden teknik bilgi alma"
      ]
    },
    {
      phase: "Veri Ã„Â°Ã…Å¸leme",
      duration: "3-7 gÃƒÂ¼n",
      items: [
        "Scan registration (nokta birleÃ…Å¸tirme)",
        "Quality check ve eksik veri tespiti",
        "Koordinat sistemi tanÃ„Â±mlama",
        "Outlier temizleme",
        "Veri optimizasyonu",
        "Client review iÃƒÂ§in low-res model export"
      ]
    },
    {
      phase: "BIM Modelleme",
      duration: "10-20 gÃƒÂ¼n",
      items: [
        "Revit template hazÃ„Â±rlama",
        "Levels, Grids, Views oluÃ…Å¸turma",
        "Parametrik modelleme (mimari, yapÃ„Â±sal, MEP)",
        "Family atama ve parametre doldurma",
        "Annotation ve dimension ekleme",
        "Ã„Â°lk draft teslimat ve feedback"
      ]
    },
    {
      phase: "Kalite Kontrol",
      duration: "3-5 gÃƒÂ¼n",
      items: [
        "Ã„Â°ÃƒÂ§ kontrol: Revit Warnings temizleme",
        "BaÃ„Å¸Ã„Â±msÃ„Â±z QC: Geometrik doÃ„Å¸rulama",
        "Nokta bulutu overlay analizi (Ã‚Â±2mm)",
        "Clash detection (Navisworks)",
        "IFC export testi",
        "Revizyon dÃƒÂ¶ngÃƒÂ¼sÃƒÂ¼ (gerekirse)"
      ]
    },
    {
      phase: "Teslimat ve Destek",
      duration: "1-2 gÃƒÂ¼n",
      items: [
        "Final package hazÃ„Â±rlama (RVT, IFC, DWG, PDF)",
        "Sapma analiz raporu ekleme",
        "DokÃƒÂ¼mantasyon (BEP, kullanÃ„Â±m kÃ„Â±lavuzu)",
        "Client eÃ„Å¸itimi (isteÃ„Å¸e baÃ„Å¸lÃ„Â±)",
        "30 gÃƒÂ¼n destek sÃƒÂ¼reci baÃ…Å¸latma",
        "Proje kapanÃ„Â±Ã…Å¸ toplantÃ„Â±sÃ„Â±"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SubPageHero
        title="SÃƒÂ¼reÃƒÂ§ ve StandartlarÃ„Â±mÃ„Â±z"
        description="Point cloud to BIM projelerinde uyguladÃ„Â±Ã„Å¸Ã„Â±mÃ„Â±z 6 aÃ…Å¸amalÃ„Â± iÃ…Å¸ akÃ„Â±Ã…Å¸Ã„Â±mÃ„Â±z ve kalite standartlarÃ„Â±mÃ„Â±z. ISO 19650 BIM standardÃ„Â±na tam uyum."
        category="SÃƒÂ¼reÃƒÂ§ & Kalite"
        breadcrumb={[{ label: "SÃƒÂ¼reÃƒÂ§ & Standartlar", href: "/surec-ve-standartlar" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-4">6 AÃ…Å¸amalÃ„Â± Proje SÃƒÂ¼reci</h2>
          <p className="text-lg text-slate-600 mb-12">
            Ortalama 3-4 haftalÃ„Â±k bir as-built modelleme projesinin aÃ…Å¸amalarÃ„Â± ve sÃƒÂ¼releri:
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
          <h2 className="text-3xl font-black mb-8">UyduÃ„Å¸umuz UluslararasÃ„Â± Standartlar</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-black text-red-400 mb-4 uppercase">BIM StandartlarÃ„Â±</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">ISO 19650:</strong> BIM enformasyon yÃƒÂ¶netimi (UK BIM Level 2)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">LOD Specification:</strong> BIMForum tarafÃ„Â±ndan tanÃ„Â±mlanan detay seviyeleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">IFC Standards:</strong> buildingSMART IFC2x3 ve IFC4 uyumluluÃ„Å¸u</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-red-400 mb-4 uppercase">Lazer Tarama StandartlarÃ„Â±</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">ASTM E2807:</strong> 3D imaging kullanarak bina ÃƒÂ¶lÃƒÂ§ÃƒÂ¼m standardÃ„Â±</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">USIBD:</strong> ABD BIM dokÃƒÂ¼mantasyon standardÃ„Â±</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">E57 Format:</strong> Nokta bulutu veri standardÃ„Â± (ASTM E2807)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-[3rem] p-16 text-white text-center">
          <Workflow className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-black mb-6">Projenizi BaÃ…Å¸latalÃ„Â±m</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
            Standartlara uygun, kalite garantili BIM modelleme hizmeti almak iÃƒÂ§in bizimle iletiÃ…Å¸ime geÃƒÂ§in.
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-700 font-black rounded-2xl hover:bg-slate-100 transition-all">
            Proje BaÃ…Å¸vurusu YapÃ„Â±n <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
