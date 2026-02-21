"use client";

import SubPageHero from "@/components/SubPageHero";
import { Linkedin, Mail, Twitter, Users, Award, Briefcase } from "lucide-react";
import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";

export default function Page() {
    const team = [
        {
            name: "Uğur Bilen",
            role: "Kurucu & Kıdemli 3D Specialist",
            bio: "YTÜ Harita Mühendisliği mezunu. 20 yıllık sektör tecrübesiyle 50+ büyük ölçekli as-built projesini yönetti. Lazer Tarama, Drone ve Revit uzmanı.",
            image: "/images/blog/team-1.webp",
            email: "ugur@eosproje.com"
        },
        {
            name: "Öykü Hun",
            role: "Operasyon Direktörü",
            bio: "İTÜ Yüksek Geomatik Mühendisliği mezunu. Modelleme, Six Sigma ve Planlama uzmanı. Lazer tarama ve fotogrametri süreçlerini yönetiyor.",
            image: "/images/blog/team-2.webp",
            email: "oyku@eosproje.com"
        },
        {
            name: "Kamil Serin",
            role: "Veri & Kalite Koordinatörü",
            bio: "20 yıl sektör tecrübesi. Lazer Tarama, Data Proses ve modelleme süreçlerinde uzmanlaşmış Mühendislik tecrübesi.",
            image: "/images/blog/team-3.webp",
            email: "kamil@eosproje.com"
        },
        {
            name: "Utku Karaman",
            role: "MEP Modelleme Uzmanı",
            bio: "İTÜ Makina Mühendisliği mezunu. Scan to MEP ve MEP Modelleme uzmanı. Endüstriyel projelerde 3D çizim modelleme süreçlerini yönetiyor.",
            image: "/images/blog/team-7.webp",
            email: "utku@eosproje.com"
        },
        {
            name: "Melis Melike Begdeş",
            role: "Modelleme Uzmanı",
            bio: "Işık Üniversitesi Mimarlık mezunu. Tarihi yapı restorasyon projelerinde uzman. Nokta Bulutu, fotogrametri 2D & 3D çizim modelleme süreçlerini yönetiyor.",
            image: "/images/blog/team-4.webp",
            email: "melis@eosproje.com"
        },
        {
            name: "Yasin Demirci",
            role: "Nokta Bulutu İşleme Uzmanı",
            bio: "Jeodezi ve Fotogrametri mezunu. Faro Scene ve ReCap yazılımlarında cloud-to-cloud registration ve veri temizliği konusunda yetkin. Modelleme uzmanı.",
            image: "/images/blog/team-5.webp",
            email: "yasin@eosproje.com"
        },
        {
            name: "Emir Demirci",
            role: "Ölçme ve Değerlendirme Uzmanı",
            bio: "Jeodezi ve Fotogrametri mezunu. Lazer Tarama ve Drone konusunda yetkin. Ölçme ve değerlendirme uzmanı.",
            image: "/images/blog/team-8.webp",
            email: "emir@eosproje.com"
        },
        {
            name: "Cafer Saygılı",
            role: "Finans ve Mali İşler Sorumlusu",
            bio: "2007 yılından beri Eos Projenin tüm finans ve mali işler sorumlusu olarak görev almaktadır.",
            image: "/images/blog/team-6.webp",
            email: "cafer@eosproje.com"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Ekibimiz"
                description="Mühendis, mimar ve teknik uzmanlardan oluşan dinamik ve deneyimli kadromuzla tanışın."
                category="Kurumsal"
                breadcrumb={[{ label: "Ekip", href: "/ekip" }]}
            />

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Intro */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Uzmanlık ve Tutku Bir Arada</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        EosProje ekibi, sadece teknik becerileriyle değil, problem çözme odaklı yaklaşımlarıyla da fark yaratır.
                        Her projeyi kendi projemiz gibi sahipleniyor ve mühendislik etiğine uygun çalışıyoruz.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-10 mb-24">
                    {team.map((member, idx) => (
                        <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-red-100 shadow-sm hover:shadow-2xl transition-all duration-300">
                            <div className="h-64 bg-slate-200 relative overflow-hidden">
                                <SmartImage
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <div className="mb-4">
                                    <h3 className="text-xl font-black text-slate-900">{member.name}</h3>
                                    <p className="text-[var(--color-primary-red)] font-medium text-sm mt-1">{member.role}</p>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {member.bio}
                                </p>
                                <div className="flex gap-4">
                                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-red-50 hover:text-[var(--color-primary-red)] transition-all text-xs font-bold w-full justify-center">
                                        <Mail className="w-4 h-4" />
                                        {member.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Us */}
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-black mb-6">Ekibimize Katılmak İster misiniz?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        BIM modelleme, lazer tarama veya yazılım geliştirme alanında kariyer yapmak istiyorsanız, CV'nizi bekliyoruz.
                        Sürekli öğrenen ve gelişen bir kültürün parçası olun.
                    </p>
                    <Link href="/iletisim" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-100 transition-all">
                        Kariyer Olanakları
                    </Link>
                </div>
            </div>
        </div>
    );
}
