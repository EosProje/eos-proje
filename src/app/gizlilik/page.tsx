import SubPageHero from "@/components/SubPageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gizlilik PolitikasÃ„Â± | EOSPROJE",
    description: "EOS Proje gizlilik politikasÃ„Â±. MÃƒÂ¼Ã…Å¸teri bilgileri ve proje gizliliÃ„Å¸i konusundaki taahhÃƒÂ¼tlerimiz.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Gizlilik PolitikasÃ„Â±"
                description="Proje verileriniz ve kurumsal sÃ„Â±rlarÃ„Â±nÃ„Â±z gÃƒÂ¼vencemiz altÃ„Â±ndadÃ„Â±r."
                category="Yasal"
                breadcrumb={[{ label: "Gizlilik PolitikasÃ„Â±", href: "/gizlilik" }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-20 text-slate-600 leading-relaxed space-y-6">
                <p className="text-lg font-medium text-slate-800">
                    <strong>EOS Proje</strong> (bundan sonra &quot;Ã…Âirket&quot; olarak anÃ„Â±lacaktÃ„Â±r), web sitemizi ziyaret edenlerin ve hizmetlerimizden yararlananlarÃ„Â±n gizliliÃ„Å¸ini korumayÃ„Â± ilke edinmiÃ…Å¸tir. 2007 yÃ„Â±lÃ„Â±ndan bu yana 50'den fazla bÃƒÂ¼yÃƒÂ¼k ÃƒÂ¶lÃƒÂ§ekli endÃƒÂ¼striyel ve mimari projede edindiÃ„Å¸imiz kurumsal tecrÃƒÂ¼be ile, hem kiÃ…Å¸isel verilerinizi hem de ticari sÃ„Â±r niteliÃ„Å¸indeki proje dosyalarÃ„Â±nÃ„Â±zÃ„Â± (DWG, RVT, RCS vb.) uluslararasÃ„Â± bilgi gÃƒÂ¼venliÃ„Å¸i standartlarÃ„Â±nda saklÃ„Â±yoruz.
                </p>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">1. Toplanan Bilgiler</h3>
                    <p>
                        Web sitemiz ÃƒÂ¼zerinden &quot;Teklif Al&quot; formu veya iletiÃ…Å¸im kanallarÃ„Â± aracÃ„Â±lÃ„Â±Ã„Å¸Ã„Â±yla bize ulaÃ…Å¸tÃ„Â±rdÃ„Â±Ã„Å¸Ã„Â±nÃ„Â±z ad, soyad, e-posta adresi, telefon numarasÃ„Â± ve proje detaylarÃ„Â± gibi bilgiler tarafÃ„Â±mÃ„Â±zca toplanmaktadÃ„Â±r. AyrÃ„Â±ca, sitenin kullanÃ„Â±mÃ„Â± sÃ„Â±rasÃ„Â±nda ÃƒÂ§erezler (cookies) aracÃ„Â±lÃ„Â±Ã„Å¸Ã„Â±yla bazÃ„Â± teknik veriler (IP adresi, tarayÃ„Â±cÃ„Â± tÃƒÂ¼rÃƒÂ¼ vb.) toplanabilir.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">2. Bilgilerin KullanÃ„Â±mÃ„Â±</h3>
                    <p className="mb-4">
                        Toplanan bilgiler aÃ…Å¸aÃ„Å¸Ã„Â±daki amaÃƒÂ§larla kullanÃ„Â±lÃ„Â±r:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Hizmet taleplerinizi yanÃ„Â±tlamak ve teklif hazÃ„Â±rlamak,</li>
                        <li>MÃƒÂ¼Ã…Å¸teri iliÃ…Å¸kileri yÃƒÂ¶netimi ve iletiÃ…Å¸im saÃ„Å¸lamak,</li>
                        <li>Web sitesi performansÃ„Â±nÃ„Â± analiz etmek ve kullanÃ„Â±cÃ„Â± deneyimini iyileÃ…Å¸tirmek,</li>
                        <li>Yasal yÃƒÂ¼kÃƒÂ¼mlÃƒÂ¼lÃƒÂ¼kleri yerine getirmek.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">3. Proje GizliliÃ„Å¸i ve Veri GÃƒÂ¼venliÃ„Å¸i</h3>
                    <p className="mb-4">
                        MÃƒÂ¼hendislik ve Lazer Tarama hizmetlerimiz kapsamÃ„Â±nda paylaÃ…Å¸tÃ„Â±Ã„Å¸Ã„Â±nÃ„Â±z DWG, RVT, PDF, Point Cloud vb. proje dosyalarÃ„Â± <strong>&quot;Ticari SÃ„Â±r&quot;</strong> niteliÃ„Å¸inde kabul edilir. Bu veriler:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Asla ÃƒÂ¼ÃƒÂ§ÃƒÂ¼ncÃƒÂ¼ Ã…Å¸ahÃ„Â±slarla paylaÃ…Å¸Ã„Â±lmaz.</li>
                        <li>Sadece ilgili projede gÃƒÂ¶revli yetkili personel tarafÃ„Â±ndan eriÃ…Å¸ilebilir.</li>
                        <li>Proje tesliminden sonra, talep edilmesi durumunda sunucularÃ„Â±mÃ„Â±zdan kalÃ„Â±cÃ„Â± olarak silinir.</li>
                        <li>EndÃƒÂ¼striyel standartlarda gÃƒÂ¼venlik duvarlarÃ„Â± ve Ã…Å¸ifreleme yÃƒÂ¶ntemleri ile korunur.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">4. ÃƒÅ“ÃƒÂ§ÃƒÂ¼ncÃƒÂ¼ Taraflarla PaylaÃ…Å¸Ã„Â±m</h3>
                    <p>
                        KiÃ…Å¸isel verileriniz, yasal zorunluluklar haricinde ve aÃƒÂ§Ã„Â±k rÃ„Â±zanÃ„Â±z olmaksÃ„Â±zÃ„Â±n ÃƒÂ¼ÃƒÂ§ÃƒÂ¼ncÃƒÂ¼ taraflarla paylaÃ…Å¸Ã„Â±lmaz, satÃ„Â±lmaz veya kiralanmaz.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">5. DeÃ„Å¸iÃ…Å¸iklikler</h3>
                    <p>
                        Ã…Âirketimiz, bu Gizlilik PolitikasÃ„Â±'nÃ„Â± dilediÃ„Å¸i zaman gÃƒÂ¼ncelleme hakkÃ„Â±nÃ„Â± saklÃ„Â± tutar. GÃƒÂ¼ncellemeler web sitemizde yayÃ„Â±nlandÃ„Â±Ã„Å¸Ã„Â± tarihten itibaren yÃƒÂ¼rÃƒÂ¼rlÃƒÂ¼Ã„Å¸e girer.
                    </p>
                </div>

                <div className="pt-8 border-t border-slate-200">
                    <h3 className="text-2xl font-black text-slate-900 mb-6">Ã„Â°letiÃ…Å¸im ve Kurumsal Kimlik</h3>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Merkez Ofis</h4>
                                <p className="text-sm text-slate-600 mb-4">Murat Reis mah Teyyareci Muammer sok No:10/4 ÃƒÅ“skÃƒÂ¼dar/Ã„Â°stanbul</p>

                                <h4 className="font-bold text-slate-900 mb-2">Ã„Â°letiÃ…Å¸im KanallarÃ„Â±</h4>
                                <p className="text-sm text-slate-600">Tel: +90 530 664 2263</p>
                                <p className="text-sm text-slate-600">E-Posta: info@eosproje.com</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Hukuki Bildirimler</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Gizlilik politikamÃ„Â±z veya kiÃ…Å¸isel verilerinizle ilgili her tÃƒÂ¼rlÃƒÂ¼ talebinizi yukarÃ„Â±daki adreslere yazÃ„Â±lÃ„Â± olarak veya kayÃ„Â±tlÃ„Â± elektronik posta (KEP) adresimize iletebilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
