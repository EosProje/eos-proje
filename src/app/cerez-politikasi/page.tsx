import SubPageHero from "@/components/SubPageHero";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Ãƒâ€¡erez PolitikasÃ„Â± | EOSPROJE",
    description: "Web sitemizdeki ÃƒÂ§erez kullanÃ„Â±mÃ„Â± ve tercihlerinizi nasÃ„Â±l yÃƒÂ¶netebileceÃ„Å¸iniz hakkÃ„Â±nda bilgilendirme.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="Ãƒâ€¡erez (Cookie) PolitikasÃ„Â±"
                description="Daha iyi bir kullanÃ„Â±cÃ„Â± deneyimi iÃƒÂ§in tanÃ„Â±mlama bilgileri kullanÃ„Â±yoruz."
                category="Yasal"
                breadcrumb={[{ label: "Ãƒâ€¡erez PolitikasÃ„Â±", href: "/cerez-politikasi" }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-20 text-slate-600 leading-relaxed space-y-6">
                <p>
                    <strong>EOS Proje</strong> olarak, web sitemizden en verimli Ã…Å¸ekilde faydalanabilmeniz ve kullanÃ„Â±cÃ„Â± deneyiminizi geliÃ…Å¸tirebilmek amacÃ„Â±yla Ãƒâ€¡erez (Cookie) kullanÃ„Â±yoruz. Bu web sitesini kullanarak ÃƒÂ§erez kullanÃ„Â±mÃ„Â±nÃ„Â± kabul etmiÃ…Å¸ sayÃ„Â±lÃ„Â±rsÃ„Â±nÃ„Â±z.
                </p>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">Ãƒâ€¡erez Nedir?</h3>
                    <p>
                        Ãƒâ€¡erezler, ziyaret ettiÃ„Å¸iniz internet siteleri tarafÃ„Â±ndan tarayÃ„Â±cÃ„Â±lar aracÃ„Â±lÃ„Â±Ã„Å¸Ã„Â±yla bilgisayarÃ„Â±nÃ„Â±za (veya akÃ„Â±llÃ„Â± telefon, tablet gibi diÃ„Å¸er cihazlarÃ„Â±nÃ„Â±za) kaydedilen kÃƒÂ¼ÃƒÂ§ÃƒÂ¼k metin dosyalarÃ„Â±dÃ„Â±r. Ãƒâ€¡erezler ziyaretÃƒÂ§ilerin tercihlerini takip etmek ve web sitesi deneyimini iyileÃ…Å¸tirmek amacÃ„Â±yla kullanÃ„Â±lÃ„Â±r.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-6">Hangi TÃƒÂ¼r Ãƒâ€¡erezleri KullanÃ„Â±yoruz?</h3>

                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">1. Zorunlu Ãƒâ€¡erezler</h4>
                        <p>
                            Web sitesinin dÃƒÂ¼zgÃƒÂ¼n ÃƒÂ§alÃ„Â±Ã…Å¸masÃ„Â± iÃƒÂ§in gerekli olan ÃƒÂ§erezlerdir. Bu ÃƒÂ§erezler olmadan sitenin bazÃ„Â± bÃƒÂ¶lÃƒÂ¼mleri (ÃƒÂ¶rn. form gÃƒÂ¶nderme) ÃƒÂ§alÃ„Â±Ã…Å¸mayabilir.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">2. Performans ve Analiz Ãƒâ€¡erezleri</h4>
                        <p>
                            ZiyaretÃƒÂ§ilerin web sitemizi nasÃ„Â±l kullandÃ„Â±Ã„Å¸Ã„Â±nÃ„Â± analiz etmemize yardÃ„Â±mcÃ„Â± olur (ÃƒÂ¶rneÃ„Å¸in, en ÃƒÂ§ok ziyaret edilen sayfalar, hata mesajlarÃ„Â±). Bu veriler anonim olarak toplanÃ„Â±r ve sitemizi geliÃ…Å¸tirmek iÃƒÂ§in kullanÃ„Â±lÃ„Â±r (Google Analytics vb.).
                        </p>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">3. Ã„Â°Ã…Å¸levsellik Ãƒâ€¡erezleri</h4>
                        <p>
                            Tercihlerinizi hatÃ„Â±rlamamÃ„Â±zÃ„Â± saÃ„Å¸lar (ÃƒÂ¶rneÃ„Å¸in, dil seÃƒÂ§imi veya bÃƒÂ¶lge). BÃƒÂ¶ylece size daha kiÃ…Å¸iselleÃ…Å¸tirilmiÃ…Å¸ bir deneyim sunabiliriz.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">Ãƒâ€¡erezleri NasÃ„Â±l YÃƒÂ¶netebilirsiniz?</h3>
                    <p className="mb-4">
                        Ãƒâ€¡oÃ„Å¸u internet tarayÃ„Â±cÃ„Â±sÃ„Â± ÃƒÂ§erezleri otomatik olarak kabul edecek Ã…Å¸ekilde ayarlanmÃ„Â±Ã…Å¸tÃ„Â±r. Ancak, tarayÃ„Â±cÃ„Â± ayarlarÃ„Â±nÃ„Â±zÃ„Â± deÃ„Å¸iÃ…Å¸tirerek ÃƒÂ§erezleri reddedebilir veya bir ÃƒÂ§erez gÃƒÂ¶nderildiÃ„Å¸inde uyarÃ„Â± alabilirsiniz. Ãƒâ€¡erezleri devre dÃ„Â±Ã…Å¸Ã„Â± bÃ„Â±rakmanÃ„Â±z durumunda web sitemizin bazÃ„Â± ÃƒÂ¶zelliklerinin dÃƒÂ¼zgÃƒÂ¼n ÃƒÂ§alÃ„Â±Ã…Å¸mayabileceÃ„Å¸ini lÃƒÂ¼tfen unutmayÃ„Â±n.
                    </p>
                    <p>
                        TarayÃ„Â±cÃ„Â±nÃ„Â±zÃ„Â±n &quot;YardÃ„Â±m&quot; menÃƒÂ¼sÃƒÂ¼nden ÃƒÂ§erez yÃƒÂ¶netimi hakkÃ„Â±nda detaylÃ„Â± bilgi alabilirsiniz.
                    </p>
                </div>

                <div className="pt-8 border-t border-slate-200">
                    <h3 className="text-2xl font-black text-slate-900 mb-6">Kurumsal Ã„Â°letiÃ…Å¸im</h3>
                    <p className="mb-6">
                        Ãƒâ€¡erez politikamÃ„Â±z veya web sitemizin gÃƒÂ¼venlik uygulamalarÃ„Â± hakkÃ„Â±nda detaylÃ„Â± bilgi almak iÃƒÂ§in bizimle iletiÃ…Å¸ime geÃƒÂ§ebilirsiniz.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-sm">
                        <p className="font-bold text-slate-900">EOS Proje MÃƒÂ¼hendislik ve DanÃ„Â±Ã…Å¸manlÃ„Â±k</p>
                        <p className="text-slate-600 mt-1">Murat Reis mah Teyyareci Muammer sok No:10/4 ÃƒÅ“skÃƒÂ¼dar/Ã„Â°stanbul</p>
                        <p className="text-slate-600 mt-1">info@eosproje.com | +90 530 664 2263</p>
                    </div>
                    <div className="mt-8">
                        <Link href="/gizlilik" className="text-[var(--color-primary-red)] font-bold hover:underline">
                            Gizlilik PolitikasÃ„Â± SayfasÃ„Â±na Git Ã¢â€ â€™
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
