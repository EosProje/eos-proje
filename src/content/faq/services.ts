// Hizmet Sayfaları SSS İçerikleri
import { FAQItem } from "@/components/FAQ";

// Point Cloud to BIM (Scan to BIM) SSS
export const scanToBimFAQs: FAQItem[] = [
  {
    question: "Point Cloud to BIM sürecinin maliyeti nedir?",
    answer: "Maliyet, proje büyüklüğü, LOD seviyesi ve disiplin sayısına göre değişir. Genel olarak:\n\n• LOD 200: ₺15-25/m²\n• LOD 300: ₺25-45/m²\n• LOD 400: ₺45-80/m²\n\nEndüstriyel tesislerde MEP karmaşıklığına göre fiyatlar artabilir. Ücretsiz keşif görüşmesi için iletişime geçin.",
    link: "/ucretlendirme"
  },
  {
    question: "Hangi nokta bulutu formatlarını kabul ediyorsunuz?",
    answer: "Tüm endüstri standardı formatları destekliyoruz:\n\n• E57 (en yaygın)\n• RCS/RCP (Autodesk native)\n• LAS/LAZ\n• PTX/PTS\n• XYZ\n\nFaro, Leica, Trimble, Riegl gibi tüm büyük üreticilerin cihazlarından gelen verilerle çalışıyoruz.",
    link: "/surec-ve-standartlar"
  },
  {
    question: "LOD seviyeleri arasındaki fark nedir?",
    answer: "LOD (Level of Development) seviyeleri modelin detay derecesini belirler:\n\n• LOD 200: Genel geometri, yaklaşık boyutlar (konsept aşaması)\n• LOD 300: Kesin boyutlar, malzeme tanımları (tasarım geliştirme)\n• LOD 350: Bağlantı detayları, interface bilgileri (koordinasyon)\n• LOD 400: İmalat seviyesi detaylar (fabrikasyon)\n\nProje ihtiyacınıza göre optimal LOD'u birlikte belirleriz.",
    link: "/surec-ve-standartlar"
  },
  {
    question: "Model doğruluğu nasıl garanti ediliyor?",
    answer: "3 aşamalı QA/QC sürecimiz:\n\n1. İç Kontrol: Modelleme ekibi tarafından detay kontrolü\n2. Bağımsız Doğrulama: QC uzmanı tarafından geometrik kontrol\n3. Sapma Analizi: CloudCompare ile model-nokta bulutu karşılaştırması\n\nSonuç: ±2mm hassasiyet raporu ile teslimat. Tüm Revit Warnings temizlenir.",
    link: "/qa-qc"
  },
  {
    question: "Tarama sırasında üretim durur mu?",
    answer: "Hayır, çoğu durumda tesis çalışırken tarama yapılır. Vardiya aralarında veya hafta sonlarında çalışarak üretimi hiç etkilemeden veri topluyoruz. Sadece yükseklik çalışması veya tehlikeli bölgelerde kısa süreli erişim koordinasyonu gerekebilir.",
    link: "/iletisim"
  }
];

export const scanToBimFAQsEn: FAQItem[] = [
  {
    question: "What is the cost of the Point Cloud to BIM process?",
    answer: "Cost varies by project size, LOD level, and number of disciplines. Generally:\n\n• LOD 200: €8-15/m²\n• LOD 300: €15-25/m²\n• LOD 400: €25-45/m²\n\nPrices may increase for industrial facilities depending on MEP complexity. Contact us for a free consultation.",
    link: "/en/pricing"
  },
  {
    question: "Which point cloud formats do you accept?",
    answer: "We support all industry standard formats:\n\n• E57 (most common)\n• RCS/RCP (Autodesk native)\n• LAS/LAZ\n• PTX/PTS\n• XYZ\n\nWe work with data from all major manufacturers including Faro, Leica, Trimble, and Riegl.",
    link: "/en/process-standards"
  },
  {
    question: "What is the difference between LOD levels?",
    answer: "LOD (Level of Development) levels determine the detail level of the model:\n\n• LOD 200: General geometry, approximate dimensions (concept phase)\n• LOD 300: Exact dimensions, material definitions (design development)\n• LOD 350: Connection details, interface information (coordination)\n• LOD 400: Manufacturing level details (fabrication)\n\nWe determine the optimal LOD together based on your project needs.",
    link: "/en/process-standards"
  },
  {
    question: "How is model accuracy guaranteed?",
    answer: "Our 3-stage QA/QC process:\n\n1. Internal Control: Detail check by modeling team\n2. Independent Verification: Geometric check by QC specialist\n3. Deviation Analysis: Model-point cloud comparison with CloudCompare\n\nResult: Delivery with ±2mm accuracy report. All Revit Warnings cleared.",
    link: "/en/qa-qc"
  },
  {
    question: "Does production stop during scanning?",
    answer: "No, in most cases scanning is done while the facility is operating. We collect data during shift breaks or weekends without affecting production at all. Only brief access coordination may be needed for height work or hazardous areas.",
    link: "/en/contact"
  }
];

// As-Built Modelleme SSS
export const asBuiltFAQs: FAQItem[] = [
  {
    question: "As-built modelleme neden gerekli?",
    answer: "As-built modelleme, mevcut yapının gerçek durumunu dijital ortama aktarır. Gereklilik nedenleri:\n\n• Renovasyon projelerinde doğru başlangıç verisi\n• Clash detection ile çakışma önleme\n• Tesis yönetimi için dijital ikiz\n• Sigorta ve yasal dokümantasyon\n• Mülkiyet satışı öncesi değerleme",
    link: "/cozumler/mevcut-durum-modelleme"
  },
  {
    question: "Hangi yapı tipleri için as-built modelleme yapıyorsunuz?",
    answer: "Her türlü mevcut yapı için hizmet veriyoruz:\n\n• Endüstriyel tesisler (fabrikalar, depolar)\n• Ticari binalar (ofisler, AVM'ler)\n• Konut projeleri\n• Tarihi yapılar (HBIM)\n• Altyapı (köprüler, tüneller)\n• Enerji santralleri",
    link: "/sektorler"
  },
  {
    question: "As-built modelden hangi çıktılar alınır?",
    answer: "Teslimat paketimiz:\n\n• Revit natif dosya (.rvt)\n• IFC açık format\n• AutoCAD planları (.dwg)\n• PDF çizimler (A0-A3)\n• Nokta bulutu ham verisi\n• Alan/hacim hesapları (Schedule)\n• Clash detection raporu\n• QA/QC doğrulama raporu",
    link: "/surec-ve-standartlar"
  }
];

export const asBuiltFAQsEn: FAQItem[] = [
  {
    question: "Why is as-built modeling necessary?",
    answer: "As-built modeling transfers the actual condition of existing structures to a digital environment. Reasons for necessity:\n\n• Accurate baseline data for renovation projects\n• Clash prevention through clash detection\n• Digital twin for facility management\n• Insurance and legal documentation\n• Pre-sale property valuation",
    link: "/en/solutions/as-built-modeling"
  },
  {
    question: "What types of buildings do you provide as-built modeling for?",
    answer: "We serve all types of existing structures:\n\n• Industrial facilities (factories, warehouses)\n• Commercial buildings (offices, shopping malls)\n• Residential projects\n• Historic buildings (HBIM)\n• Infrastructure (bridges, tunnels)\n• Power plants",
    link: "/en/sectors"
  },
  {
    question: "What outputs are obtained from as-built models?",
    answer: "Our delivery package:\n\n• Revit native file (.rvt)\n• IFC open format\n• AutoCAD plans (.dwg)\n• PDF drawings (A0-A3)\n• Raw point cloud data\n• Area/volume calculations (Schedule)\n• Clash detection report\n• QA/QC verification report",
    link: "/en/process-standards"
  }
];

// 2D to 3D BIM Dönüşüm SSS
export const cadToBimFAQs: FAQItem[] = [
  {
    question: "Neden 2D CAD'den BIM'e geçmeliyim?",
    answer: "2D çizimlerle çalışmanın dezavantajları:\n\n• Plan-kesit-görünüş senkronizasyonu yok\n• Değişiklikler manuel, hata riski yüksek\n• Metraj çıkarmak çok zaman alıyor\n• Clash detection yapılamıyor\n\nBIM'e geçtiğinizde: %30-40 daha hızlı proje, %90 daha az hata, otomatik metraj ve koordinasyon.",
    link: "/cozumler/2d-3d-bim-donusum"
  },
  {
    question: "Hangi CAD formatlarından dönüşüm yapıyorsunuz?",
    answer: "Kabul ettiğimiz formatlar:\n\n• AutoCAD (.dwg, .dxf)\n• PDF teknik çizimler\n• Kağıt çizimler (taranmış)\n• MicroStation (.dgn)\n• SketchUp (.skp)\n\nElde ne varsa başlangıç noktası olarak kullanıyoruz.",
    link: "/iletisim"
  },
  {
    question: "Dönüşüm süreci ne kadar sürer?",
    answer: "Proje karmaşıklığına bağlı:\n\n• Basit mimari: 1-2 hafta\n• Orta seviye (MEP dahil): 2-3 hafta\n• Karmaşık endüstriyel: 3-4 hafta\n\nMevcut çizimlerin kalitesi ve detay seviyesi süreyi etkiler.",
    link: "/surec-ve-standartlar"
  }
];

export const cadToBimFAQsEn: FAQItem[] = [
  {
    question: "Why should I switch from 2D CAD to BIM?",
    answer: "Disadvantages of working with 2D drawings:\n\n• No plan-section-elevation synchronization\n• Manual changes, high error risk\n• Quantity takeoff takes too long\n• No clash detection possible\n\nWhen you switch to BIM: 30-40% faster project, 90% fewer errors, automatic quantity takeoff and coordination.",
    link: "/en/solutions/2d-to-3d-bim-conversion"
  },
  {
    question: "Which CAD formats do you convert from?",
    answer: "Formats we accept:\n\n• AutoCAD (.dwg, .dxf)\n• PDF technical drawings\n• Paper drawings (scanned)\n• MicroStation (.dgn)\n• SketchUp (.skp)\n\nWe use whatever you have available as a starting point.",
    link: "/en/contact"
  },
  {
    question: "How long does the conversion process take?",
    answer: "Depending on project complexity:\n\n• Simple architectural: 1-2 weeks\n• Medium level (including MEP): 2-3 weeks\n• Complex industrial: 3-4 weeks\n\nThe quality and detail level of existing drawings affects the timeline.",
    link: "/en/process-standards"
  }
];

// MEP & Endüstriyel Ekipman SSS
export const mepFAQs: FAQItem[] = [
  {
    question: "Endüstriyel MEP modellemede neleri kapsıyorsunuz?",
    answer: "Kapsamlı MEP hizmetimiz:\n\n• Boru sistemleri (P&ID, isometrik)\n• HVAC kanalları ve ekipmanları\n• Elektrik tesisatı (kablo tavları, panolar)\n• Yangın söndürme sistemleri\n• Proses ekipmanları (tanklar, pompalar, vanalar)\n• Konveyör ve taşıma sistemleri",
    link: "/cozumler/endustriyel-ekipman-modelleme"
  },
  {
    question: "MEP modelleme hangi detay seviyesinde yapılıyor?",
    answer: "İhtiyaca göre esnek LOD seviyeleri:\n\n• LOD 300: Tasarım koordinasyonu için yeterli\n• LOD 350: MEP koordinasyonu ve clash detection\n• LOD 400: İmalat ve montaj için detaylı\n\nBağlantı noktaları, flanşlar, destekler ve izolasyon dahil edilebilir.",
    link: "/surec-ve-standartlar"
  },
  {
    question: "Clash detection raporu veriyor musunuz?",
    answer: "Evet, Navisworks kullanarak detaylı clash detection yapıyoruz:\n\n• Hard clash (fiziksel çakışma)\n• Soft clash (güvenlik mesafesi ihlali)\n• Workflow clash (montaj sırası problemi)\n\nTeslimat: Sınıflandırılmış clash listesi, görsel raporlar ve çözüm önerileri.",
    link: "/qa-qc"
  }
];

export const mepFAQsEn: FAQItem[] = [
  {
    question: "What do you cover in industrial MEP modeling?",
    answer: "Our comprehensive MEP service:\n\n• Pipe systems (P&ID, isometric)\n• HVAC ducts and equipment\n• Electrical installation (cable trays, panels)\n• Fire suppression systems\n• Process equipment (tanks, pumps, valves)\n• Conveyor and transport systems",
    link: "/en/solutions/industrial-equipment-modeling"
  },
  {
    question: "At what detail level is MEP modeling done?",
    answer: "Flexible LOD levels according to needs:\n\n• LOD 300: Sufficient for design coordination\n• LOD 350: MEP coordination and clash detection\n• LOD 400: Detailed for manufacturing and installation\n\nConnection points, flanges, supports, and insulation can be included.",
    link: "/en/process-standards"
  },
  {
    question: "Do you provide a clash detection report?",
    answer: "Yes, we perform detailed clash detection using Navisworks:\n\n• Hard clash (physical collision)\n• Soft clash (safety clearance violation)\n• Workflow clash (assembly sequence problem)\n\nDelivery: Classified clash list, visual reports, and solution recommendations.",
    link: "/en/qa-qc"
  }
];

// Rölöve Hizmetleri SSS (Yeni)
export const roloveFAQs: FAQItem[] = [
  {
    question: "Lazer tarama ile rölöve çıkarmak klasik yöntemlerden nasıl farklı?",
    answer: "Lazer tarama ile rölöve avantajları:\n\n• %99.9 doğruluk (±2mm hassasiyet)\n• 10 kat daha hızlı veri toplama\n• Ulaşılması zor noktalara erişim\n• Detay kaybı yok (milyon nokta)\n• Dijital arşiv ve tekrar kullanım\n\nKlasik yöntem: Şerit metre, nivelman, zaman alıcı ve hata riski yüksek.",
    link: "/hizmetler/rolove-hizmetleri"
  },
  {
    question: "Cephe rölövesi ne kadar sürer ve maliyeti nedir?",
    answer: "Cephe büyüklüğü ve detay seviyesine göre:\n\n• Küçük cephe (100m²): 1 gün tarama, ₺5.000-10.000\n• Orta cephe (500m²): 2-3 gün tarama, ₺15.000-25.000\n• Büyük cephe (1000m²+): 3-5 gün tarama, ₺30.000+\n\nTarihi yapılarda detay yoğunluğu fiyatı artırabilir.",
    link: "/ucretlendirme"
  },
  {
    question: "Eski eser rölövesi için özel sertifika gerekiyor mu?",
    answer: "Evet, koruma kuruluna sunulacak rölöveler için:\n\n• Lisanslı harita mühendisi onayı\n• Fotoğraflı dokümantasyon\n• 1/50 ve 1/20 ölçekli çizimler\n• Detay rölöveleri\n• Hasaр raporu\n\nEOS Proje olarak tüm yasal gereklilikleri karşılayan rölöve paketleri sunuyoruz.",
    link: "/sektorler/restorasyon"
  }
];

// Dijital İkiz SSS
export const digitalTwinFAQs: FAQItem[] = [
  {
    question: "Dijital ikiz nedir ve ne işe yarar?",
    answer: "Dijital ikiz, fiziksel bir varlığın (bina, fabrika, makine) tüm özelliklerini içeren dinamik dijital kopyasıdır. Kullanım alanları:\n\n• Gerçek zamanlı izleme (IoT entegrasyonu)\n• Bakım planlaması ve tahminsel bakım\n• Simülasyon ve senaryo analizi\n• Uzaktan yönetim ve kontrol\n• Eğitim ve güvenlik simülasyonları",
    link: "/blog/endustriyel-dijital-ikiz"
  },
  {
    question: "Dijital ikiz ile BIM modeli arasındaki fark nedir?",
    answer: "BIM modeli statik bir dijital temsil iken, dijital ikiz dinamik ve günceldir:\n\n• BIM: Tasarım ve inşaat odaklı, statik\n• Dijital İkiz: Operasyon odaklı, sensör verileriyle güncellenen\n\nBIM modeli dijital ikizin temelini oluşturur; IoT entegrasyonu ile dijital ikize dönüşür.",
    link: "/blog/bim-tesis-yonetimi"
  },
  {
    question: "Dijital ikiz oluşturmak ne kadar sürer?",
    answer: "Projenin kapsamına göre:\n\n• Basit tesis: 4-6 hafta\n• Orta ölçekli fabrika: 8-12 hafta\n• Büyük endüstriyel tesis: 3-6 ay\n\nAşamalar: Lazer tarama → BIM modelleme → IoT entegrasyonu → Platform kurulumu",
    link: "/iletisim"
  }
];

// HBIM (Tarihi Yapı) SSS
export const hbimFAQs: FAQItem[] = [
  {
    question: "HBIM nedir ve standart BIM'den farkı nedir?",
    answer: "HBIM (Heritage BIM), tarihi yapıların belgelenmesi için özelleştirilmiş BIM metodolojisidir. Farkları:\n\n• Düzensiz geometriler için parametrik modelleme\n• Malzeme bozulması ve hasaр takibi\n• Tarihsel dönem bilgisi (stratigrafi)\n• Arkeolojik katman kaydı\n• Restorasyon müdahale geçmişi",
    link: "/blog/hbim-restorasyon"
  },
  {
    question: "Tarihi yapı taramasında hangi teknolojiler kullanılıyor?",
    answer: "Kullandığımız teknolojiler:\n\n• Terrestrial Lazer Tarama (TLS): Yüksek doğruluk\n• Drone fotogrametri: Çatı ve ulaşılmaz alanlar\n• El tipi tarayıcılar: Süsleme detayları\n• Structured Light: Küçük objeler\n\nVeriler birleştirilerek eksiksiz 3D model oluşturulur.",
    link: "/blog/lazer-tarama-teknolojileri"
  },
  {
    question: "Koruma kurulu için hangi çıktılar hazırlanıyor?",
    answer: "Koruma kuruluna sunulan paket:\n\n• 1/50 ve 1/20 ölçekli rölöve çizimleri\n• Cephe rölöveleri\n• Kesit rölöveleri\n• Hasar haritalama\n• Fotoğraf dokümantasyonu\n• Öneri restorasyon projesi\n• BIM modeli (talep edilirse)",
    link: "/sektorler/restorasyon"
  }
];

export const hbimFAQsEn: FAQItem[] = [
  {
    question: "What is HBIM and how is it different from standard BIM?",
    answer: "HBIM (Heritage BIM) is a customized BIM methodology for documenting historic buildings. Differences:\n\n• Parametric modeling for irregular geometries\n• Material deterioration and damage tracking\n• Historical period information (stratigraphy)\n• Archaeological layer recording\n• Restoration intervention history",
    link: "/en/blog/heritage-bim-restoration"
  },
  {
    question: "What technologies are used in historic building scanning?",
    answer: "Technologies we use:\n\n• Terrestrial Laser Scanning (TLS): High accuracy\n• Drone photogrammetry: Roofs and inaccessible areas\n• Handheld scanners: Ornamental details\n• Structured Light: Small objects\n\nData is combined to create a complete 3D model.",
    link: "/en/blog/laser-scanning-technologies"
  },
  {
    question: "What outputs are prepared for heritage conservation boards?",
    answer: "Package submitted to conservation boards:\n\n• 1/50 and 1/20 scale survey drawings\n• Facade surveys\n• Section surveys\n• Damage mapping\n• Photo documentation\n• Proposed restoration project\n• BIM model (if requested)",
    link: "/en/sectors/restoration"
  }
];
