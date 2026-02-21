"use client";

import SubPageHero from "@/components/SubPageHero";
import { Calculator, CheckCircle2, DollarSign, Clock, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import PricingCalculator from "@/components/PricingCalculator";

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Ücretlendirme ve Hesaplama"
                description="Şeffaf ve esnek fiyatlandırma politikamız. Projenizin büyüklüğüne, LOD seviyesine ve teslimat formatına göre tahmini maliyet hesaplayın."
                category="Hizmetler"
                breadcrumb={[{ label: "Ücretlendirme", href: "/ucretlendirme" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-32">
                {/* Intro */}
                <div className="mb-32 text-center max-w-4xl mx-auto">
                    <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-red-50/50 px-5 py-2.5 rounded-full mb-8 inline-block backdrop-blur-sm border border-red-100/50">
                        Şeffaf Mühendislik
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight text-balance">
                        Proje Bazlı <span className="text-gradient-red">Fiyatlandırma</span>
                    </h2>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 text-balance">
                        Her projenin gereksinimleri farklıdır. Fiyat teklifimizi oluştururken; taranacak alanın metrekaresi,
                        koşulların zorluğu, LOD seviyesi ve modellenecek disiplin sayılarını göz önüne alıyoruz.
                    </p>
                    <div className="p-6 bg-[#F8FAFC] border border-slate-100 rounded-[2rem] inline-flex items-center gap-4 text-left shadow-sm">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[var(--color-primary-red)] flex-shrink-0">
                            <HelpCircle className="w-6 h-6" />
                        </div>
                        <p className="text-sm text-slate-500 font-bold italic leading-relaxed">
                            Belirtilen fiyatlar fikir verme amaçlıdır. <br className="hidden sm:block" />
                            Sözleşme imzalanmadan bağlayıcılığı yoktur.
                        </p>
                    </div>
                </div>

                {/* Pricing Models */}
                <div className="grid md:grid-cols-3 gap-10 mb-32 items-stretch">
                    {[
                        {
                            title: "Metrekare Bazlı",
                            subtitle: "(Lump Sum)",
                            desc: "Kapsamı net olan projeler için. Toplam tutar üzerinden sabit fiyat garantisi.",
                            icon: <DollarSign className="w-7 h-7" />,
                            features: ["Net bütçeleme imkanı", "Teslimat garantili", "Sürpriz maliyet yok"],
                            cta: "Teklif Alın",
                            href: "/iletisim",
                            light: true
                        },
                        {
                            title: "Hibrit Model",
                            subtitle: "(En Çok Tercih Edilen)",
                            desc: "Tarama için sabit ücret + Modelleme için birim fiyat. Değişken projeler için ideal.",
                            icon: <Calculator className="w-7 h-7" />,
                            features: ["Esnek kapsam yönetimi", "Aşamalı faturalandırma", "Revizyon kolaylığı"],
                            cta: "İletişime Geçin",
                            href: "/iletisim",
                            featured: true
                        },
                        {
                            title: "Adam/Gün Bazlı",
                            subtitle: "(Time & Material)",
                            desc: "Danışmanlık veya belirsiz kapsamlı işler için günlük/saatlik ücretlendirme.",
                            icon: <Clock className="w-7 h-7" />,
                            features: ["Sadece harcanan zaman", "Esnek kaynak planlama", "Günlük raporlama"],
                            cta: "Bilgi Alın",
                            href: "/iletisim",
                            light: true
                        }
                    ].map((model, idx) => (
                        <div key={idx} className={`relative flex flex-col h-full rounded-[3rem] p-10 transition-all duration-500 ${model.featured
                            ? "bg-slate-900 text-white shadow-[0_30px_100px_rgba(15,23,42,0.2)] scale-105 z-10 border border-white/10"
                            : "bg-white border border-slate-100 hover:border-red-100/50 hover:shadow-2xl hover:shadow-slate-200/50"
                            }`}>
                            {model.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-primary-red)] text-white text-[10px] font-black tracking-[0.2em] px-6 py-2 rounded-full shadow-xl uppercase">
                                    POPÜLER
                                </div>
                            )}

                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${model.featured ? "bg-white/10 text-white border border-white/10" : "bg-red-50 text-[var(--color-primary-red)] border border-red-100"
                                }`}>
                                {model.icon}
                            </div>

                            <h3 className={`text-2xl font-black tracking-tight mb-2 ${model.featured ? "text-white" : "text-slate-900"}`}>{model.title}</h3>
                            <p className={`text-[10px] font-black uppercase tracking-widest mb-6 ${model.featured ? "text-[var(--color-primary-red)]" : "text-slate-400"}`}>{model.subtitle}</p>

                            <p className={`text-sm font-medium leading-relaxed mb-10 flex-grow ${model.featured ? "text-slate-400" : "text-slate-500"}`}>
                                {model.desc}
                            </p>

                            <ul className="space-y-4 mb-12">
                                {model.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${model.featured ? "bg-emerald-500/20 text-emerald-400" : "bg-green-50 text-green-500"}`}>
                                            <CheckCircle2 className="w-3 h-3" />
                                        </div>
                                        <span className={`text-sm font-bold ${model.featured ? "text-slate-300" : "text-slate-700"}`}>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={model.href}
                                className={`w-full py-5 rounded-2xl font-black text-center text-xs uppercase tracking-widest transition-all ${model.featured
                                    ? "bg-[var(--color-primary-red)] hover:bg-red-800 text-white shadow-xl shadow-red-900/40"
                                    : "bg-slate-50 hover:bg-red-50 hover:text-[var(--color-primary-red)] text-slate-900 border border-slate-100"
                                    }`}
                            >
                                {model.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Calculator Section */}
                <div className="mb-32 bg-[#F8FAFC] rounded-[4rem] p-12 md:p-24 border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>

                    <div className="text-center mb-20 relative z-10">
                        <span className="text-[var(--color-primary-red)] font-black uppercase tracking-[0.3em] text-[10px] bg-white px-5 py-2.5 rounded-full mb-8 inline-block shadow-sm border border-slate-200/50">
                            Hızlı Teklif Aracı
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">Tahmini Maliyet <span className="text-gradient-red">Hesaplayıcı</span></h2>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                            Projeniz için yaklaşık bir bütçe aralığı görebilirsiniz. Kesin teklif için lütfen bizimle iletişime geçin.
                        </p>
                    </div>

                    <div className="relative z-10">
                        <PricingCalculator />
                    </div>
                </div>

                {/* Footer info */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-10 p-12 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                        <div className="w-20 h-20 bg-blue-50 rounded-[1.5rem] flex items-center justify-center text-blue-600 flex-shrink-0">
                            <HelpCircle className="w-10 h-10" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Fiyatlara Neler Dahil?</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                Standart tekliflerimize saha tarama masrafları (ulaşım, konaklama), veri işleme, modelleme, QA/QC süreçleri,
                                final teslimat paketi ve 30 gün revizyon desteği dahildir. KDV hariçtir. Yurt dışı projelerinde vize ve lojistik
                                masrafları ayrıca bütçelendirilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
