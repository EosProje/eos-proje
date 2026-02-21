import SubPageHero from "@/components/SubPageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gizlilik Politikası | EOSPROJE",
    description: "EOS Proje gizlilik politikası. Müşteri bilgileri ve proje gizliliği konusundaki taahhütlerimiz.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Gizlilik Politikası"
                description="Proje verileriniz ve kurumsal sırlarınız güvencemiz altındadır."
                category="Yasal"
                breadcrumb={[{ label: "Gizlilik Politikası", href: "/gizlilik" }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-20 text-slate-600 leading-relaxed space-y-6">
                <p className="text-lg font-medium text-slate-800">
                    <strong>EOS Proje</strong> (bundan sonra &quot;Şirket&quot; olarak anılacaktır), web sitemizi ziyaret edenlerin ve hizmetlerimizden yararlananların gizliliğini korumayı ilke edinmiştir. 2007 yılından bu yana 50'den fazla büyük ölçekli endüstriyel ve mimari projede edindiğimiz kurumsal tecrübe ile, hem kişisel verilerinizi hem de ticari sır niteliğindeki proje dosyalarınızı (DWG, RVT, RCS vb.) uluslararası bilgi güvenliği standartlarında saklıyoruz.
                </p>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">1. Toplanan Bilgiler</h3>
                    <p>
                        Web sitemiz üzerinden &quot;Teklif Al&quot; formu veya iletişim kanalları aracılığıyla bize ulaştırdığınız ad, soyad, e-post adresi, telefon numarası ve proje detayları gibi bilgiler tarafımızca toplanmaktadır. Ayrıca, sitenin kullanımı sırasında çerezler (cookies) aracılığıyla bazı teknik veriler (IP adresi, tarayıcı türü vb.) toplanabilir.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">2. Bilgilerin Kullanımı</h3>
                    <p className="mb-4">
                        Toplanan bilgiler aşağıdaki amaçlarla kullanılır:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Hizmet taleplerinizi yanıtlamak ve teklif hazırlamak,</li>
                        <li>Müşteri ilişkileri yönetimi ve iletişim sağlamak,</li>
                        <li>Web sitesi performansını analiz etmek ve kullanıcı deneyimini iyileştirmek,</li>
                        <li>Yasal yükümlülükleri yerine getirmek.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">3. Proje Gizliliği ve Veri Güvenliği</h3>
                    <p className="mb-4">
                        Mühendislik ve Lazer Tarama hizmetlerimiz kapsamında paylaştığınız DWG, RVT, PDF, Point Cloud vb. proje dosyaları <strong>&quot;Ticari Sır&quot;</strong> niteliğinde kabul edilir. Bu veriler:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Asla üçüncü şahıslarla paylaşılmaz.</li>
                        <li>Sadece ilgili projede görevli yetkili personel tarafından erişilebilir.</li>
                        <li>Proje tesliminden sonra, talep edilmesi durumunda sunucularımızdan kalıcı olarak silinir.</li>
                        <li>Endüstriyel standartlarda güvenlik duvarları ve şifreleme yöntemleri ile korunur.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">4. Üçüncü Taraflarla Paylaşım</h3>
                    <p>
                        Kişisel verileriniz, yasal zorunluluklar haricinde ve açık rızanız olmaksızın üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">5. Değişiklikler</h3>
                    <p>
                        Şirketimiz, bu Gizlilik Politikası'nı dilediği zaman güncelleme hakkını saklı tutar. Güncellemeler web sitemizde yayınlandığı tarihten itibaren yürürlüğe girer.
                    </p>
                </div>

                <div className="pt-8 border-t border-slate-200">
                    <h3 className="text-2xl font-black text-slate-900 mb-6">İletişim ve Kurumsal Kimlik</h3>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Merkez Ofis</h4>
                                <p className="text-sm text-slate-600 mb-4">Murat Reis mah Teyyareci Muammer sok No:10/4 Üsküdar/İstanbul</p>

                                <h4 className="font-bold text-slate-900 mb-2">İletişim Kanalları</h4>
                                <p className="text-sm text-slate-600">Tel: +90 530 664 2263</p>
                                <p className="text-sm text-slate-600">E-Posta: info@eosproje.com</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Hukuki Bildirimler</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Gizlilik politikamız veya kişisel verilerinizle ilgili her türlü talebinizi yukarıdaki adreslere yazılı olarak veya kayıtlı elektronik posta (KEP) adresimize iletebilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
