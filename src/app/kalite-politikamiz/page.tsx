"use client";

import SubPageHero from "@/components/SubPageHero";
import { ShieldCheck, Book, Scale, Lock, Leaf, FileCheck } from "lucide-react";

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Kalite Politikamız"
                description="Müşteri memnuniyeti, sürdürülebilirlik ve iş güvenliği konusundaki temel ilkelerimiz ve taahhütlerimiz."
                category="Kurumsal"
                breadcrumb={[{ label: "Kalite Politikası", href: "/kalite-politikamiz" }]}
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
                                <h2 className="text-2xl font-black text-slate-900">Kalite Yönetim Sistemi</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    EosProje olarak, ISO 9001:2015 standartlarına uygun bir kalite yönetim sistemi benimsiyoruz.
                                    Tüm süreçlerimiz (tekliflendirme, saha çalışması, modelleme, teslimat) dökümante edilmiş prosedürlere göre yürütülür.
                                    Hedefimiz, müşteri gereksinimlerini %100 karşılayan, hatasız ve zamanında teslim edilen projeler üretmektir.
                                </p>
                                <p>
                                    Performansımızı düzenli iç denetimler ve müşteri geri bildirim anketleriyle ölçüyor, sürekli iyileştirme
                                    (kaizen) felsefesiyle süreçlerimizi revize ediyoruz.
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Çevre ve Sürdürülebilirlik</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Dijitalleşmenin (Digital Transformation) çevre üzerindeki olumlu etkisinin bilincindeyiz.
                                    Yaptığımız as-built modelleme çalışmaları, mevcut binaların yıkılıp yeniden yapılması yerine
                                    renove edilerek tekrar kullanılmasına (adaptive reuse) olanak tanır.
                                </p>
                                <p>
                                    Ofis içi operasyonlarımızda kağıtsız ofis politikasını benimsiyor, enerji verimliliği yüksek donanımlar kullanıyoruz.
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Bilgi Güvenliği (ISMS)</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Endüstriyel tesislerin ve kritik altyapıların verilerini yönettiğimiz için bilgi güvenliği en öncelikli konumuzdur.
                                    ISO 27001 standartlarına uygun olarak:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4">
                                    <li>Tüm proje verileri şifreli sunucularda saklanır.</li>
                                    <li>Verilere erişim "need-to-know" (bilmesi gereken) prensibine göre yetkilendirilir.</li>
                                    <li>Düzenli siber güvenlik testleri ve yedekleme prosedürleri uygulanır.</li>
                                    <li>Tüm çalışanlarımız gizlilik sözleşmesi (NDA) imzalamıştır.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">İş Sağlığı ve Güvenliği (İSG)</h2>
                            </div>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Saha çalışmalarında "Önce Güvenlik" ilkesiyle hareket ediyoruz. Lazer tarama ekiplerimiz, sahada
                                    gerekli tüm KKD (Kişisel Koruyucu Donanım) ekipmanlarını kullanır ve tesisin İSG kurallarına tam uyum sağlar.
                                    Yüksekte çalışma, kapalı alan çalışması gibi riskli durumlarda özel eğitimli personel görevlendirilir.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                            <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
                                <FileCheck className="w-5 h-5 text-red-500" />
                                Sertifikalarımız
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-xs text-slate-600">ISO</div>
                                    <div>
                                        <div className="font-bold text-slate-900">ISO 9001:2015</div>
                                        <div className="text-xs text-slate-500">Kalite Yönetim Sistemi</div>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-xs text-slate-600">ISO</div>
                                    <div>
                                        <div className="font-bold text-slate-900">ISO 27001</div>
                                        <div className="text-xs text-slate-500">Bilgi Güvenliği</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[var(--color-deep-charcoal)] p-8 rounded-3xl text-white">
                            <h3 className="font-black mb-4">Politika Belgesi</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Resmi kalite politikası dökümanımızı ve taahhütnamemizi PDF formatında indirebilirsiniz.
                            </p>
                            <button className="w-full py-3 bg-[var(--color-primary-red)] rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                                PDF İndir (TR)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
