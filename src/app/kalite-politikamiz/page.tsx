"use client";

import SubPageHero from "@/components/SubPageHero";
import { ShieldCheck, Book, Scale, Lock, Leaf, FileCheck } from "lucide-react";

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Kalite PolitikamÃ„Â±z"
                description="MÃƒÂ¼Ã…Å¸teri memnuniyeti, sÃƒÂ¼rdÃƒÂ¼rÃƒÂ¼lebilirlik ve iÃ…Å¸ gÃƒÂ¼venliÃ„Å¸i konusundaki temel ilkelerimiz ve taahhÃƒÂ¼tlerimiz."
                category="Kurumsal"
                breadcrumb={[{ label: "Kalite PolitikasÃ„Â±", href: "/kalite-politikamiz" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[var(--color-primary-red)]">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Kalite YÃƒÂ¶netim Sistemi</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    EosProje olarak, ISO 9001:2015 standartlarÃ„Â±na uygun bir kalite yÃƒÂ¶netim sistemi benimsiyoruz.
                                    TÃƒÂ¼m sÃƒÂ¼reÃƒÂ§lerimiz (tekliflendirme, saha ÃƒÂ§alÃ„Â±Ã…Å¸masÃ„Â±, modelleme, teslimat) dÃƒÂ¶kÃƒÂ¼mante edilmiÃ…Å¸ prosedÃƒÂ¼rlere gÃƒÂ¶re yÃƒÂ¼rÃƒÂ¼tÃƒÂ¼lÃƒÂ¼r.
                                    Hedefimiz, mÃƒÂ¼Ã…Å¸teri gereksinimlerini %100 karÃ…Å¸Ã„Â±layan, hatasÃ„Â±z ve zamanÃ„Â±nda teslim edilen projeler ÃƒÂ¼retmektir.
                                </p>
                                <p>
                                    PerformansÃ„Â±mÃ„Â±zÃ„Â± dÃƒÂ¼zenli iÃƒÂ§ denetimler ve mÃƒÂ¼Ã…Å¸teri geri bildirim anketleriyle ÃƒÂ¶lÃƒÂ§ÃƒÂ¼yor, sÃƒÂ¼rekli iyileÃ…Å¸tirme
                                    (kaizen) felsefesiyle sÃƒÂ¼reÃƒÂ§lerimizi revize ediyoruz.
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Ãƒâ€¡evre ve SÃƒÂ¼rdÃƒÂ¼rÃƒÂ¼lebilirlik</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    DijitalleÃ…Å¸menin (Digital Transformation) ÃƒÂ§evre ÃƒÂ¼zerindeki olumlu etkisinin bilincindeyiz.
                                    YaptÃ„Â±Ã„Å¸Ã„Â±mÃ„Â±z as-built modelleme ÃƒÂ§alÃ„Â±Ã…Å¸malarÃ„Â±, mevcut binalarÃ„Â±n yÃ„Â±kÃ„Â±lÃ„Â±p yeniden yapÃ„Â±lmasÃ„Â± yerine
                                    renove edilerek tekrar kullanÃ„Â±lmasÃ„Â±na (adaptive reuse) olanak tanÃ„Â±r.
                                </p>
                                <p>
                                    Ofis iÃƒÂ§i operasyonlarÃ„Â±mÃ„Â±zda kaÃ„Å¸Ã„Â±tsÃ„Â±z ofis politikasÃ„Â±nÃ„Â± benimsiyor, enerji verimliliÃ„Å¸i yÃƒÂ¼ksek donanÃ„Â±mlar kullanÃ„Â±yoruz.
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Bilgi GÃƒÂ¼venliÃ„Å¸i (ISMS)</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    EndÃƒÂ¼striyel tesislerin ve kritik altyapÃ„Â±larÃ„Â±n verilerini yÃƒÂ¶nettiÃ„Å¸imiz iÃƒÂ§in bilgi gÃƒÂ¼venliÃ„Å¸i en ÃƒÂ¶ncelikli konumuzdur.
                                    ISO 27001 standartlarÃ„Â±na uygun olarak:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4">
                                    <li>TÃƒÂ¼m proje verileri Ã…Å¸ifreli sunucularda saklanÃ„Â±r.</li>
                                    <li>Verilere eriÃ…Å¸im "need-to-know" (bilmesi gereken) prensibine gÃƒÂ¶re yetkilendirilir.</li>
                                    <li>DÃƒÂ¼zenli siber gÃƒÂ¼venlik testleri ve yedekleme prosedÃƒÂ¼rleri uygulanÃ„Â±r.</li>
                                    <li>TÃƒÂ¼m ÃƒÂ§alÃ„Â±Ã…Å¸anlarÃ„Â±mÃ„Â±z gizlilik sÃƒÂ¶zleÃ…Å¸mesi (NDA) imzalamÃ„Â±Ã…Å¸tÃ„Â±r.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Ã„Â°Ã…Å¸ SaÃ„Å¸lÃ„Â±Ã„Å¸Ã„Â± ve GÃƒÂ¼venliÃ„Å¸i (Ã„Â°SG)</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Saha ÃƒÂ§alÃ„Â±Ã…Å¸malarÃ„Â±nda "Ãƒâ€“nce GÃƒÂ¼venlik" ilkesiyle hareket ediyoruz. Lazer tarama ekiplerimiz, sahada
                                    gerekli tÃƒÂ¼m KKD (KiÃ…Å¸isel Koruyucu DonanÃ„Â±m) ekipmanlarÃ„Â±nÃ„Â± kullanÃ„Â±r ve tesisin Ã„Â°SG kurallarÃ„Â±na tam uyum saÃ„Å¸lar.
                                    YÃƒÂ¼ksekte ÃƒÂ§alÃ„Â±Ã…Å¸ma, kapalÃ„Â± alan ÃƒÂ§alÃ„Â±Ã…Å¸masÃ„Â± gibi riskli durumlarda ÃƒÂ¶zel eÃ„Å¸itimli personel gÃƒÂ¶revlendirilir.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                            <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
                                <FileCheck className="w-5 h-5 text-red-500" />
                                SertifikalarÃ„Â±mÃ„Â±z
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-xs text-slate-600">ISO</div>
                                    <div>
                                        <div className="font-bold text-slate-900">ISO 9001:2015</div>
                                        <div className="text-xs text-slate-500">Kalite YÃƒÂ¶netim Sistemi</div>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-xs text-slate-600">ISO</div>
                                    <div>
                                        <div className="font-bold text-slate-900">ISO 27001</div>
                                        <div className="text-xs text-slate-500">Bilgi GÃƒÂ¼venliÃ„Å¸i</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[var(--color-deep-charcoal)] p-8 rounded-3xl text-white">
                            <h3 className="font-black mb-4">Politika Belgesi</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Resmi kalite politikasÃ„Â± dÃƒÂ¶kÃƒÂ¼manÃ„Â±mÃ„Â±zÃ„Â± ve taahhÃƒÂ¼tnamemizi PDF formatÃ„Â±nda indirebilirsiniz.
                            </p>
                            <button className="w-full py-3 bg-[var(--color-primary-red)] rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                                PDF Ã„Â°ndir (TR)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
