import SubPageHero from "@/components/SubPageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "KVKK Aydınlatma Metni | EOSPROJE",
    description: "EOS Proje Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni ve veri gizliliği politikamız.",
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <SubPageHero
                title="KVKK Aydınlatma Metni"
                description="Kişisel verilerinizin güvenliği bizim için önemlidir."
                category="Yasal"
                breadcrumb={[{ label: "KVKK", href: "/kvkk" }]}
            />

            <div className="max-w-4xl mx-auto px-4 py-20 text-slate-600 leading-relaxed space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                    <h3 className="text-xl font-black text-slate-900 mb-4">1. Veri Sorumlusu Kimliği</h3>
                    <p className="mb-4">
                        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; veri sorumlusu olarak <strong>EOS Proje</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="block font-bold text-slate-900">Ticari Ünvan:</span>
                            <span>EOS Proje Mühendislik ve Danışmanlık</span>
                        </div>
                        <div>
                            <span className="block font-bold text-slate-900">Adres:</span>
                            <span>Murat Reis mah Teyyareci Muammer sok No:10/4 Üsküdar/İstanbul</span>
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
                    <h3 className="text-2xl font-black text-slate-900 mb-4">2. Kişisel Verilerin İşlenme Amacı</h3>
                    <p>
                        2007 yılından bu yana <strong>Lazer Tarama (Point Cloud)</strong>, <strong>BIM Modelleme</strong> ve <strong>Dijital İkiz</strong> alanlarında faaliyet gösteren şirketimiz, topladığı kişisel verileri (Ad-Soyad, İletişim Bilgileri, Proje Lokasyon Verileri vb.) aşağıdaki uzmanlık alanlarımız çerçevesinde işlemektedir:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Lazer tarama ve rölöve projelerinde saha operasyonlarının güvenli bir şekilde yürütülmesi,</li>
                        <li>Mühendislik hesaplamaları ve teklif süreçlerinin (Scan-to-BIM, As-Built) yönetilmesi,</li>
                        <li>Ticari sözleşmelerin kurulması ve ifası,</li>
                        <li>Yasal yükümlülüklerin (Vergi Usul Kanunu, İş Kanunu vb.) yerine getirilmesi.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h3>
                    <p>
                        Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel kişilere, KVKK’nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
                    <p>
                        Kişisel verileriniz, her türlü sözlü, yazılı ya da elektronik ortamda, yukarıda yer verilen amaçlar doğrultusunda Şirketçe sunduğumuz ürün ve hizmetlerin belirlenen yasal çerçevede sunulabilmesi ve bu kapsamda Şirketimizin sözleşme ve yasadan doğan mesuliyetlerini eksiksiz ve doğru bir şekilde yerine getirebilmesi gayesi ile edinilir.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">5. Kişisel Veri Sahibinin Hakları</h3>
                    <p className="mb-4">
                        KVKK’nın 11. maddesi uyarınca veri sahipleri;
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
                        <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
                        <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                        <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
                        <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                        <li>KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme haklarına sahiptir.</li>
                    </ul>
                </div>

                <div className="pt-8 border-t border-slate-200">
                    <h3 className="text-2xl font-black text-slate-900 mb-4">İletişim</h3>
                    <p>
                        KVKK kapsamındaki haklarınızı kullanmak için taleplerinizi yazılı olarak <strong>Murat Reis mah Teyyareci Muammer sok No:10/4 Üsküdar/İstanbul</strong> adresine iletebilir veya <strong>info@eosproje.com</strong> e-posta adresine gönderebilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}
