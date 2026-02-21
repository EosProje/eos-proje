import SubPageHero from "@/components/SubPageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "KVKK AydÃ„Â±nlatma Metni | EOSPROJE",
    description: "EOS Proje KiÃ…Å¸isel Verilerin KorunmasÃ„Â± Kanunu (KVKK) aydÃ„Â±nlatma metni ve veri gizliliÃ„Å¸i politikamÃ„Â±z.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="KVKK AydÃ„Â±nlatma Metni"
                description="KiÃ…Å¸isel verilerinizin gÃƒÂ¼venliÃ„Å¸i bizim iÃƒÂ§in ÃƒÂ¶nemlidir."
                category="Yasal"
                breadcrumb={[{ label: "KVKK", href: "/kvkk" }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-20 text-slate-600 leading-relaxed space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                    <h3 className="text-xl font-black text-slate-900 mb-4">1. Veri Sorumlusu KimliÃ„Å¸i</h3>
                    <p className="mb-4">
                        6698 sayÃ„Â±lÃ„Â± KiÃ…Å¸isel Verilerin KorunmasÃ„Â± Kanunu (Ã¢â‚¬Å“KVKKÃ¢â‚¬Â) uyarÃ„Â±nca, kiÃ…Å¸isel verileriniz; veri sorumlusu olarak <strong>EOS Proje</strong> tarafÃ„Â±ndan aÃ…Å¸aÃ„Å¸Ã„Â±da aÃƒÂ§Ã„Â±klanan kapsamda iÃ…Å¸lenebilecektir.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="block font-bold text-slate-900">Ticari ÃƒÅ“nvan:</span>
                            <span>EOS Proje MÃƒÂ¼hendislik ve DanÃ„Â±Ã…Å¸manlÃ„Â±k</span>
                        </div>
                        <div>
                            <span className="block font-bold text-slate-900">Adres:</span>
                            <span>Murat Reis mah Teyyareci Muammer sok No:10/4 ÃƒÅ“skÃƒÂ¼dar/Ã„Â°stanbul</span>
                        </div>
                        <div>
                            <span className="block font-bold text-slate-900">Telefon:</span>
                            <span>+90 530 664 2263</span>
                        </div>
                        <div>
                            <span className="block font-bold text-slate-900">E-Posta:</span>
                            <span>info@eosproje.com</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">2. KiÃ…Å¸isel Verilerin Ã„Â°Ã…Å¸lenme AmacÃ„Â±</h3>
                    <p>
                        2007 yÃ„Â±lÃ„Â±ndan bu yana <strong>Lazer Tarama (Point Cloud)</strong>, <strong>BIM Modelleme</strong> ve <strong>Dijital Ã„Â°kiz</strong> alanlarÃ„Â±nda faaliyet gÃƒÂ¶steren Ã…Å¸irketimiz, topladÃ„Â±Ã„Å¸Ã„Â± kiÃ…Å¸isel verileri (Ad-Soyad, Ã„Â°letiÃ…Å¸im Bilgileri, Proje Lokasyon Verileri vb.) aÃ…Å¸aÃ„Å¸Ã„Â±daki uzmanlÃ„Â±k alanlarÃ„Â±mÃ„Â±z ÃƒÂ§erÃƒÂ§evesinde iÃ…Å¸lemektedir:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Lazer tarama ve rÃƒÂ¶lÃƒÂ¶ve projelerinde saha operasyonlarÃ„Â±nÃ„Â±n gÃƒÂ¼venli bir Ã…Å¸ekilde yÃƒÂ¼rÃƒÂ¼tÃƒÂ¼lmesi,</li>
                        <li>MÃƒÂ¼hendislik hesaplamalarÃ„Â± ve teklif sÃƒÂ¼reÃƒÂ§lerinin (Scan-to-BIM, As-Built) yÃƒÂ¶netilmesi,</li>
                        <li>Ticari sÃƒÂ¶zleÃ…Å¸melerin kurulmasÃ„Â± ve ifasÃ„Â±,</li>
                        <li>Yasal yÃƒÂ¼kÃƒÂ¼mlÃƒÂ¼lÃƒÂ¼klerin (Vergi Usul Kanunu, Ã„Â°Ã…Å¸ Kanunu vb.) yerine getirilmesi.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">3. Ã„Â°Ã…Å¸lenen KiÃ…Å¸isel Verilerin Kimlere ve Hangi AmaÃƒÂ§la AktarÃ„Â±labileceÃ„Å¸i</h3>
                    <p>
                        Toplanan kiÃ…Å¸isel verileriniz; yukarÃ„Â±da belirtilen amaÃƒÂ§larÃ„Â±n gerÃƒÂ§ekleÃ…Å¸tirilmesi doÃ„Å¸rultusunda, iÃ…Å¸ ortaklarÃ„Â±mÃ„Â±za, tedarikÃƒÂ§ilerimize, kanunen yetkili kamu kurumlarÃ„Â±na ve ÃƒÂ¶zel kiÃ…Å¸ilere, KVKKÃ¢â‚¬â„¢nÃ„Â±n 8. ve 9. maddelerinde belirtilen kiÃ…Å¸isel veri iÃ…Å¸leme Ã…Å¸artlarÃ„Â± ve amaÃƒÂ§larÃ„Â± ÃƒÂ§erÃƒÂ§evesinde aktarÃ„Â±labilecektir.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">4. KiÃ…Å¸isel Veri ToplamanÃ„Â±n YÃƒÂ¶ntemi ve Hukuki Sebebi</h3>
                    <p>
                        KiÃ…Å¸isel verileriniz, her tÃƒÂ¼rlÃƒÂ¼ sÃƒÂ¶zlÃƒÂ¼, yazÃ„Â±lÃ„Â± ya da elektronik ortamda, yukarÃ„Â±da yer verilen amaÃƒÂ§lar doÃ„Å¸rultusunda Ã…ÂirketÃƒÂ§e sunduÃ„Å¸umuz ÃƒÂ¼rÃƒÂ¼n ve hizmetlerin belirlenen yasal ÃƒÂ§erÃƒÂ§evede sunulabilmesi ve bu kapsamda Ã…Âirketimizin sÃƒÂ¶zleÃ…Å¸me ve yasadan doÃ„Å¸an mesuliyetlerini eksiksiz ve doÃ„Å¸ru bir Ã…Å¸ekilde yerine getirebilmesi gayesi ile edinilir.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">5. KiÃ…Å¸isel Veri Sahibinin HaklarÃ„Â±</h3>
                    <p className="mb-4">
                        KVKKÃ¢â‚¬â„¢nÃ„Â±n 11. maddesi uyarÃ„Â±nca veri sahipleri;
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>KiÃ…Å¸isel veri iÃ…Å¸lenip iÃ…Å¸lenmediÃ„Å¸ini ÃƒÂ¶Ã„Å¸renme,</li>
                        <li>KiÃ…Å¸isel verileri iÃ…Å¸lenmiÃ…Å¸se buna iliÃ…Å¸kin bilgi talep etme,</li>
                        <li>KiÃ…Å¸isel verilerin iÃ…Å¸lenme amacÃ„Â±nÃ„Â± ve bunlarÃ„Â±n amacÃ„Â±na uygun kullanÃ„Â±lÃ„Â±p kullanÃ„Â±lmadÃ„Â±Ã„Å¸Ã„Â±nÃ„Â± ÃƒÂ¶Ã„Å¸renme,</li>
                        <li>Yurt iÃƒÂ§inde veya yurt dÃ„Â±Ã…Å¸Ã„Â±nda kiÃ…Å¸isel verilerin aktarÃ„Â±ldÃ„Â±Ã„Å¸Ã„Â± ÃƒÂ¼ÃƒÂ§ÃƒÂ¼ncÃƒÂ¼ kiÃ…Å¸ileri bilme,</li>
                        <li>KiÃ…Å¸isel verilerin eksik veya yanlÃ„Â±Ã…Å¸ iÃ…Å¸lenmiÃ…Å¸ olmasÃ„Â± hÃƒÂ¢linde bunlarÃ„Â±n dÃƒÂ¼zeltilmesini isteme,</li>
                        <li>KVKKÃ¢â‚¬â„¢nÃ„Â±n 7. maddesinde ÃƒÂ¶ngÃƒÂ¶rÃƒÂ¼len Ã…Å¸artlar ÃƒÂ§erÃƒÂ§evesinde kiÃ…Å¸isel verilerin silinmesini veya yok edilmesini isteme haklarÃ„Â±na sahiptir.</li>
                    </ul>
                </div>

                <div className="pt-8 border-t border-slate-200">
                    <h3 className="text-2xl font-black text-slate-900 mb-4">Ã„Â°letiÃ…Å¸im</h3>
                    <p>
                        KVKK kapsamÃ„Â±ndaki haklarÃ„Â±nÃ„Â±zÃ„Â± kullanmak iÃƒÂ§in taleplerinizi yazÃ„Â±lÃ„Â± olarak <strong>Murat Reis mah Teyyareci Muammer sok No:10/4 ÃƒÅ“skÃƒÂ¼dar/Ã„Â°stanbul</strong> adresine iletebilir veya <strong>info@eosproje.com</strong> e-posta adresine gÃƒÂ¶nderebilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}
