"use client";

import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { Shield, CheckCircle2, AlertTriangle, FileCheck, Target, Award } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SubPageHero
        title="QA/QC - Kalite Güvence ve Kontrol"
        description="Tüm projelerimizde uygulanan üç aşamalık kalite kontrol sürecimiz ve doğruluk garantilerimiz. BIM modelleme ve lazer tarama hizmetlerinde sıfır hata hedefiyle çalışıyoruz."
        category="Süreç & Kalite"
        breadcrumb={[{ label: "QA/QC", href: "/qa-qc" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Genel Bakış */}
        <div className="mb-24">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Kalite güvencesi (Quality Assurance) ve kalite kontrolü (Quality Control), BIM modelleme süreçlerinde en kritik aşamalardan biridir.
            Bir modelin %99 doğru olması yeterli değildir; %1'lik hata renovasyon sırasında büyük maliyet artışlarına veya montaj problemlerine
            yol açabilir. Bu nedenle tüm projelerimizde sistematik bir QA/QC protokolü uyguluyoruz.
          </p>
        </div>

        {/* 3 Aşamalı Süreç */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-12">Üç Aşamalı Kalite Kontrol Sürecimiz</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-10 rounded-3xl border-2 border-blue-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">İç Kontrol (Internal QC)</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Modelleme sürecini tamamlayan teknik eleman, kendi çalışmasını ISO 19650 BIM standardına göre kontrol eder. Bu aşamada:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Revit Warnings listesini sıfırlar",
                      "Tüm elemanların doğru Category'ye atandığını doğrular",
                      "Family parametrelerinin dolu olduğunu kontrol eder",
                      "Naming convention'a uygunluğu test eder",
                      "View Template'lerin doğru uygulandığını gözden geçirir",
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
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Bağımsız Geometrik Doğrulama (Independent Validation)</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Modelleme ekibinden tamamen bağımsız bir QC uzmanı, modelin geometrik doğruluğunu ve standartlara uygunluğunu kontrol eder:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Kritik boyutların (aks mesafeleri, kat yükseklikleri) doğruluğu",
                      "Eleman bağlantı noktalarının (join, constraint) kontrolü",
                      "Modelin farklı Revit versiyonlarında açılabilirliği",
                      "Navisworks'te clash detection testi",
                      "Schedule doğruluğu (miktar çıkarmaları)",
                      "PDF export kalitesi ve görünürlük kontrolü"
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
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Nokta Bulutu Overlay Doğrulaması (Cloud-to-Model Validation)</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    As-built projelerinde en kritik aşama budur. CloudCompare yazılımında model ile nokta bulutu karşılaştırılır:
                  </p>
                  <ul className="space-y-3">
                    {[
                      { title: "Deviation Map Oluşturma", desc: "Modelin her noktası ile en yakın nokta bulutu noktasının mesafesi hesaplanır. Renkli sapma haritası üretilir (yeşil: tolerans içinde, sarı-kırmızı: tolerans dışı)." },
                      { title: "Kabul Kriteri", desc: "Genel saha çalışmalarında ±5mm, endüstriyel tesislerde ±2mm hedefliyoruz. Kritik ekipman montaj noktalarında ±1mm hassasiyet sağlıyoruz." },
                      { title: "Revizyon Döngüsü", desc: "Tolerans dışı alanlar modelde düzeltilir ve kontrol tekrarlanır. Tüm sapma raporu teslimat paketine eklenir." }
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
              <div className="text-5xl font-black text-red-400 mb-2">±2mm</div>
              <div className="text-lg font-bold text-slate-300 mb-2">Doğruluk Standardı</div>
              <p className="text-slate-400 text-sm">Endüstriyel tesislerde garanti ettiğimiz geometrik hassasiyet seviyesi</p>
            </div>
            <div>
              <div className="text-5xl font-black text-green-400 mb-2">0</div>
              <div className="text-lg font-bold text-slate-300 mb-2">Revit Warnings</div>
              <p className="text-slate-400 text-sm">Teslimat öncesi tüm bütünlük uyarıları temizlenir</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-400 mb-2">100%</div>
              <div className="text-lg font-bold text-slate-300 mb-2">IFC Uyumluluğu</div>
              <p className="text-slate-400 text-sm">Open BIM standartlarına tam uyum, diğer yazılımlarda sorunsuz açılma</p>
            </div>
          </div>
        </div>

        {/* Yaygın Hatalar */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-8">QC Sürecinde Tespit Ettiğimiz Yaygın Hatalar</h2>
          <div className="space-y-4">
            {[
              { icon: <AlertTriangle className="w-6 h-6" />, title: "Overlapping Walls", desc: "İki duvarın içiçe geçmesi. Miktar çıkışında hata yaratır. Join geometry ile düzeltilir." },
              { icon: <AlertTriangle className="w-6 h-6" />, title: "Unplaced Elements", desc: "Room, Space gibi elemanların view'da görünmemesi. Filter ayarlarıyla çözülür." },
              { icon: <AlertTriangle className="w-6 h-6" />, title: "Incorrect Constraints", desc: "Elemanların yanlış Levels veya Grids'e kilitlenmesi. Tek tek düzeltilir." },
              { icon: <AlertTriangle className="w-6 h-6" />, title: "Missing Parameters", desc: "Family'lerde Fire Rating, Material gibi kritik parametrelerin boş kalması. Manuel doldurulur." }
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
            Üç aşamalı QA/QC sürecimiz ve sapma analiz raporlarımızla hatasız teslimat garantisi veriyoruz.
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-green-700 font-black rounded-2xl hover:bg-slate-100 transition-all">
            Kalite Sertifikalarımızı Görün
          </Link>
        </div>
      </div>
    </div>
  );
}
