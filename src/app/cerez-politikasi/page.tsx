import SubPageHero from "@/components/SubPageHero";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Çerez Politikası | EOSPROJE",
    description: "Web sitemizdeki çerez kullanımı ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgilendirme.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Çerez (Cookie) Politikası"
                description="Daha iyi bir kullanıcı deneyimi için tanımlama bilgileri kullanıyoruz."
                category="Yasal"
                breadcrumb={[{ label: "Çerez Politikası", href: "/cerez-politikasi" }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-20 text-slate-600 leading-relaxed space-y-6">
                <p>
                    <strong>EOS Proje</strong> olarak, web sitemizden en verimli şekilde faydalanabilmeniz ve kullanıcı deneyiminizi geliştirebilmek amacıyla Çerez (Cookie) kullanıyoruz. Bu web sitesini kullanarak çerez kullanımını kabul etmiş sayılırsınız.
                </p>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">Çerez Nedir?</h3>
                    <p>
                        Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar aracılığıyla bilgisayarınıza (veya akıllı telefon, tablet gibi diğer cihazlarınıza) kaydedilen küçük metin dosyalarıdır. Çerezler ziyaretçilerin tercihlerini takip etmek ve web sitesi deneyimini iyileştirmek amacıyla kullanılır.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-6">Hangi Tür Çerezleri Kullanıyoruz?</h3>

                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">1. Zorunlu Çerezler</h4>
                        <p>
                            Web sitesinin düzgün çalışması için gerekli olan çerezlerdir. Bu çerezler olmadan sitenin bazı bölümleri (örn. form gönderme) çalışmayabilir.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">2. Performans ve Analiz Çerezleri</h4>
                        <p>
                            Ziyaretçilerin web sitemizi nasıl kullandığını analiz etmemize yardımcı olur (örneğin, en çok ziyaret edilen sayfalar, hata mesajları). Bu veriler anonim olarak toplanır ve sitemizi geliştirmek için kullanılır (Google Analytics vb.).
                        </p>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">3. İşlevsellik Çerezleri</h4>
                        <p>
                            Tercihlerinizi hatırlamamızı sağlar (örneğin, dil seçimi veya bölge). Böylece size daha kişiselleştirilmiş bir deneyim sunabiliriz.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">Çerezleri Nasıl Yönetebilirsiniz?</h3>
                    <p className="mb-4">
                        Çoğu internet tarayıcısı çerezleri otomatik olarak kabul edecek şekilde ayarlanmıştır. Ancak, tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya bir çerez gönderildiğinde uyarı alabilirsiniz. Çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özelliklerinin düzgün çalışmayabileceğini lütfen unutmayın.
                    </p>
                    <p>
                        Tarayıcınızın &quot;Yardım&quot; menüsünden çerez yönetimi hakkında detaylı bilgi alabilirsiniz.
                    </p>
                </div>

                <div className="pt-8 border-t border-slate-200">
                    <h3 className="text-2xl font-black text-slate-900 mb-6">Kurumsal İletişim</h3>
                    <p className="mb-6">
                        Çerez politikamız veya web sitemizin güvenlik uygulamaları hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-sm">
                        <p className="font-bold text-slate-900">EOS Proje Mühendislik ve Danışmanlık</p>
                        <p className="text-slate-600 mt-1">Murat Reis mah Teyyareci Muammer sok No:10/4 Üsküdar/İstanbul</p>
                        <p className="text-slate-600 mt-1">info@eosproje.com | +90 530 664 2263</p>
                    </div>
                    <div className="mt-8">
                        <Link href="/gizlilik" className="text-[var(--color-primary-red)] font-bold hover:underline">
                            Gizlilik Politikası Sayfasına Git →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
