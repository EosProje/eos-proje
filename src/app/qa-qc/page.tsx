"use client";

import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { Shield, CheckCircle2, AlertTriangle, FileCheck, Target, Award } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SubPageHero
        title="QA/QC - Kalite GÃƒÂ¼vence ve Kontrol"
        description="TÃƒÂ¼m projelerimizde uygulanan ÃƒÂ¼ÃƒÂ§ aÃ…Å¸amalÃ„Â±k kalite kontrol sÃƒÂ¼recimiz ve doÃ„Å¸ruluk garantilerimiz. BIM modelleme ve lazer tarama hizmetlerinde sÃ„Â±fÃ„Â±r hata hedefiyle ÃƒÂ§alÃ„Â±Ã…Å¸Ã„Â±yoruz."
        category="SÃƒÂ¼reÃƒÂ§ & Kalite"
        breadcrumb={[{ label: "QA/QC", href: "/qa-qc" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Genel BakÃ„Â±Ã…Å¸ */}
        <div className="mb-24">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Kalite gÃƒÂ¼vencesi (Quality Assurance) ve kalite kontrolÃƒÂ¼ (Quality Control), BIM modelleme sÃƒÂ¼reÃƒÂ§lerinde en kritik aÃ…Å¸amalardan biridir.
            Bir modelin %99 doÃ„Å¸ru olmasÃ„Â± yeterli deÃ„Å¸ildir; %1'lik hata renovasyon sÃ„Â±rasÃ„Â±nda bÃƒÂ¼yÃƒÂ¼k maliyet artÃ„Â±Ã…Å¸larÃ„Â±na veya montaj problemlerine
            yol aÃƒÂ§abilir. Bu nedenle tÃƒÂ¼m projelerimizde sistematik bir QA/QC protokolÃƒÂ¼ uyguluyoruz.
          </p>
        </div>

        {/* 3 AÃ…Å¸amalÃ„Â± SÃƒÂ¼reÃƒÂ§ */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-12">ÃƒÅ“ÃƒÂ§ AÃ…Å¸amalÃ„Â± Kalite Kontrol SÃƒÂ¼rec jimiz</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-10 rounded-3xl border-2 border-blue-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Ã„Â°ÃƒÂ§ Kontrol (Internal QC)</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Modelleme sÃƒÂ¼recini tamamlayan teknik eleman, kendi ÃƒÂ§alÃ„Â±Ã…Å¸masÃ„Â±nÃ„Â± ISO 19650 BIM standardÃ„Â±na gÃƒÂ¶re kontrol eder. Bu aÃ…Å¸amada:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Revit Warnings listesini sÃ„Â±fÃ„Â±rlar",
                      "TÃƒÂ¼m elemanlarÃ„Â±n doÃ„Å¸ru Category'ye atandÃ„Â±Ã„Å¸Ã„Â±nÃ„Â± doÃ„Å¸rular",
                      "Family parametrelerinin dolu olduÃ„Å¸unu kontrol eder",
                      "Naming convention'a uygunluÃ„Å¸u test eder",
                      "View Template'lerin doÃ„Å¸ru uygulandÃ„Â±Ã„Å¸Ã„Â±nÃ„Â± gÃƒÂ¶z den geÃƒÂ§irir",
                      "IFC export kalitesini test eder"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-10 rounded-3xl border-2 border-green-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">BaÃ„Å¸Ã„Â±msÃ„Â±z Geometrik DoÃ„Å¸rulama (Independent Validation)</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Modelleme ekibinden tamamen baÃ„Å¸Ã„Â±msÃ„Â±z bir QC uzmanÃ„Â±, modelin geometrik doÃ„Å¸ruluÃ„Å¸unu ve standartlara uygunluÃ„Å¸unu kontrol eder:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Kritik boyutlarÃ„Â±n (aks mesafeleri, kat yÃƒÂ¼kseklikleri) doÃ„Å¸ruluÃ„Å¸u",
                      "Eleman baÃ„Å¸lantÃ„Â± noktalarÃ„Â±nÃ„Â±n (join, constraint) kontrolÃƒÂ¼",
                      "Modelin farklÃ„Â± Revit ver siyonlarÃ„Â±nda aÃƒÂ§Ã„Â±labilirliÃ„Å¸i",
                      "Navisworks'te clash detection testi",
                      "Schedule doÃ„Å¸ruluÃ„Å¸u (miktar ÃƒÂ§Ã„Â±karmalarÃ„Â±)",
                      "PDF export kalitesi ve gÃƒÂ¶rÃƒÂ¼nÃƒÂ¼rlÃƒÂ¼k kontrolÃƒÂ¼"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-10 rounded-3xl border-2 border-orange-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Nokta Bulutu Overlay DoÃ„Å¸rulamasÃ„Â± (Cloud-to-Model Validation)</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    As-built projelerinde en kritik aÃ…Å¸ama budur. CloudCompare yazÃ„Â±lÃ„Â±mÃ„Â±nda model ile nokta bulutu karÃ…Å¸Ã„Â±laÃ…Å¸tÃ„Â±rÃ„Â±lÃ„Â±r:
                  </p>
                  <ul className="space-y-3">
                    {[
                      { title: "Deviation Map OluÃ…Å¸turma", desc: "Modelin her noktasÃ„Â± ile en yakÃ„Â±n nokta bulutu noktasÃ„Â±nÃ„Â±n mesafesi hesaplanÃ„Â±r. Renkli sapma haritasÃ„Â± ÃƒÂ¼retilir (yeÃ…Å¸il: tolerans iÃƒÂ§inde, sarÃ„Â±-kÃ„Â±rmÃ„Â±zÃ„Â±: tolerans dÃ„Â±Ã…Å¸Ã„Â±)." },
                      { title: "Kabul Kriteri", desc: "Genel saha ÃƒÂ§alÃ„Â±Ã…Å¸malarÃ„Â±nda Ã‚Â±5mm, endÃƒÂ¼striyel tesislerde Ã‚Â±2mm hedefliyoruz. Kritik ekipman montaj noktalarÃ„Â±nda Ã‚Â±1mm hassasiyet saÃ„Å¸lÃ„Â±yoruz." },
                      { title: "Revizyon DÃƒÂ¶ngÃƒÂ¼sÃƒÂ¼", desc: "Tolerans dÃ„Â±Ã…Å¸Ã„Â± alanlar modelde dÃƒÂ¼zeltilir ve kontrol tekrarlanÃ„Â±r. TÃƒÂ¼m sapma raporu teslimat paketine eklenir." }
                    ].map((item, i) => (
                      <li key={i} className="border-l-4 border-orange-500 pl-4">
                        <strong className="text-slate-900 block mb-1">{item.title}:</strong>
                        <span className="text-slate-700">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kalite Metrikleri */}
        <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white">
          <h2 className="text-3xl font-black mb-8">Kalite Metriklerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-black text-red-400 mb-2">Ã‚Â±2mm</div>
              <div className="text-lg font-bold text-slate-300 mb-2">DoÃ„Å¸ruluk StandardÃ„Â±</div>
              <p className="text-slate-400 text-sm">EndÃƒÂ¼striyel tesislerde garanti ettiÃ„Å¸imiz geometrik hassasiyet seviyesi</p>
            </div>
            <div>
              <div className="text-5xl font-black text-green-400 mb-2">0</div>
              <div className="text-lg font-bold text-slate-300 mb-2">Revit Warnings</div>
              <p className="text-slate-400 text-sm">Teslimat ÃƒÂ¶ncesi tÃƒÂ¼m bÃƒÂ¼tÃƒÂ¼nlÃƒÂ¼k uyarÃ„Â±larÃ„Â± temizlenir</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-400 mb-2">100%</div>
              <div className="text-lg font-bold text-slate-300 mb-2">IFC UyumluluÃ„Å¸u</div>
              <p className="text-slate-400 text-sm">Open BIM standartlarÃ„Â±na tam uyum, diÃ„Å¸er yazÃ„Â±lÃ„Â±mlarda sorunsuz aÃƒÂ§Ã„Â±lma</p>
            </div>
          </div>
        </div>

        {/* YaygÃ„Â±n Hatalar */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-8">QC SÃƒÂ¼recinde Tespit EttiÃ„Å¸imiz YaygÃ„Â±n Hatalar</h2>
          <div className="space-y-4">
            {[
              { icon: <AlertTriangle className="w-6 h-6" />, title: "Overlapping Walls", desc: "Ã„Â°ki duvarÃ„Â±n iÃƒÂ§iÃƒÂ§e geÃƒÂ§mesi. Miktar ÃƒÂ§Ã„Â±ksÃ„Â±nda hata yaratÃ„Â±r. Join geometry ile dÃƒÂ¼zeltilir." },
              { icon: <AlertTriangle className="w-6 h-6" />, title: "Unplaced Elements", desc: "Room, Space gibi elemanlarÃ„Â±n view'da gÃƒÂ¶runmemesi. Filter ayarlarÃ„Â±yla ÃƒÂ§ÃƒÂ¶zÃƒÂ¼lÃƒÂ¼r." },
              { icon: <AlertTriangle className="w-6 h-6" />, title: "Incorrect Constraints", desc: "ElemanlarÃ„Â±n yanlÃ„Â±Ã…Å¸ Levels veya Grids'e kilitlenmesi. Tek tek dÃƒÂ¼zeltilir." },
              { icon: <AlertTriangle className="w-6 h-6" />, title: "Missing Parameters", desc: "Family'lerde Fire Rating, Material gibi kritik parametrelerin boÃ…Å¸ kalmasÃ„Â±. Manuel doldurulur." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl">
                <div className="text-yellow-600">{item.icon}</div>
                <div>
                  <h3 className="font-black text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-[3rem] p-16 text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black mb-6">Kalite Garantili BIM Modelleme</h2>
          <p className="text-green-100 mb-10 max-w-2xl mx-auto text-lg">
            ÃƒÅ“ÃƒÂ§ aÃ…Å¸amalÃ„Â± QA/QC sÃƒÂ¼recimiz ve sapma analiz raporlarÃ„Â±mÃ„Â±zla hatasÃ„Â±z teslimat garantisi veriyoruz.
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-green-700 font-black rounded-2xl hover:bg-slate-100 transition-all">
            Kalite SertifikalarÃ„Â±mÃ„Â±zÃ„Â± GÃƒÂ¶rÃƒÂ¼n
          </Link>
        </div>
      </div>
    </div>
  );
}
