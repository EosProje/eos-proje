// Sektör Sayfaları SSS İçerikleri
import { FAQItem } from "@/components/FAQ";

// Endüstriyel Tesisler SSS
export const industrialFAQs: FAQItem[] = [
  {
    question: "Fabrika çalışırken lazer tarama yapılabilir mi?",
    answer: "Evet, endüstriyel tesislerin %90'ında üretim devam ederken tarama yapıyoruz. Yöntemimiz:\n\n• Vardiya aralarında kritik bölgeler\n• Hafta sonu taramaları\n• Gece vardiyasında düşük aktiviteli alanlar\n• Güvenlik protokollerine tam uyum\n\nÜretim kesintisi minimumda tutulur.",
    link: "/sektorler/endustriyel-tesisler"
  },
  {
    question: "Endüstriyel tesis taraması için hangi ekipmanlar kullanılıyor?",
    answer: "Profesyonel ekipmanlarımız:\n\n• Faro Focus S350: Uzun mesafe, yüksek hız\n• Leica RTC360: 360° görüntü, hızlı kayıt\n• GeoSLAM ZEB Horizon: Mobil tarama, dar alanlar\n• DJI Matrice 300: Yüksek noktalar, çatılar\n\nProje ihtiyacına göre optimal kombinasyon seçilir.",
    link: "/blog/lazer-tarama-teknolojileri"
  },
  {
    question: "Brownfield projelerde BIM nasıl fayda sağlar?",
    answer: "Mevcut tesislere (brownfield) yapılacak yatırımlarda BIM:\n\n• Mevcut durum tespiti ile risk azaltma\n• Yeni ekipman yerleşim simülasyonu\n• Clash detection ile montaj problemlerini önleme\n• Revizyon projelerinde %40 maliyet tasarrufu\n• Bakım ve operasyon için dijital ikiz",
    link: "/cozumler/mevcut-durum-modelleme"
  },
  {
    question: "MEP sistemleri modelleme hangi detayda yapılıyor?",
    answer: "Endüstriyel MEP modelleme kapsamı:\n\n• Borulama: DN50 ve üzeri (isteğe bağlı DN25'e kadar)\n• HVAC: Tüm kanallar ve ekipmanlar\n• Elektrik: Kablo tavları, majör ekipmanlar\n• Proses: Tanklar, pompalar, vanalar\n\nLOD 300-400 arası, proje ihtiyacına göre belirlenir.",
    link: "/cozumler/endustriyel-ekipman-modelleme"
  }
];

export const industrialFAQsEn: FAQItem[] = [
  {
    question: "Can laser scanning be done while the factory is operating?",
    answer: "Yes, we scan 90% of industrial facilities while production continues. Our method:\n\n• Critical areas during shift breaks\n• Weekend scanning\n• Low-activity areas during night shifts\n• Full compliance with safety protocols\n\nProduction interruption is kept to a minimum.",
    link: "/en/sectors/industrial-facilities"
  },
  {
    question: "What equipment is used for industrial facility scanning?",
    answer: "Our professional equipment:\n\n• Faro Focus S350: Long range, high speed\n• Leica RTC360: 360° image, fast registration\n• GeoSLAM ZEB Horizon: Mobile scanning, tight spaces\n• DJI Matrice 300: High points, roofs\n\nOptimal combination selected based on project needs.",
    link: "/en/blog/laser-scanning-technologies"
  },
  {
    question: "How does BIM benefit brownfield projects?",
    answer: "BIM for investments in existing facilities (brownfield):\n\n• Risk reduction through as-is condition assessment\n• New equipment placement simulation\n• Preventing installation problems through clash detection\n• 40% cost savings in revision projects\n• Digital twin for maintenance and operations",
    link: "/en/solutions/as-built-modeling"
  },
  {
    question: "At what detail level is MEP systems modeling done?",
    answer: "Industrial MEP modeling scope:\n\n• Piping: DN50 and above (optionally down to DN25)\n• HVAC: All ducts and equipment\n• Electrical: Cable trays, major equipment\n• Process: Tanks, pumps, valves\n\nBetween LOD 300-400, determined by project needs.",
    link: "/en/solutions/industrial-equipment-modeling"
  }
];

// Mimarlık SSS
export const architectureFAQs: FAQItem[] = [
  {
    question: "Mimari projeler için lazer tarama ne zaman gerekli?",
    answer: "Lazer tarama gereken durumlar:\n\n• Renovasyon ve tadilat projeleri\n• Kat çıkma ve ilave yapı\n• Mevcut yapı güçlendirme\n• Cephe yenileme\n• Tarihi yapı restorasyonu\n• As-built dokümantasyon eksikliği\n\nYeni projeler için gerekli değildir.",
    link: "/sektorler/mimarlik"
  },
  {
    question: "Mimari BIM modeli hangi detayları içerir?",
    answer: "Mimari BIM modeli kapsamı:\n\n• Yapısal elemanlar (kolon, kiriş, döşeme, duvar)\n• Cephe sistemleri (pencere, kapı, giydirme)\n• İç mekan detayları (doğrama, merdiven, tavan)\n• Alan hesapları ve Schedule'lar\n• Malzeme tanımları\n\nLOD 300 standarttır, isteğe bağlı LOD 400.",
    link: "/cozumler/nokta-bulutu-bim"
  },
  {
    question: "İç mekan taraması sırasında mobilyalar sorun yaratır mı?",
    answer: "Mobilyalar genellikle sorun yaratmaz çünkü:\n\n• Çoklu tarama noktasıyla gölgeler minimize edilir\n• Post-processing'de gürültü temizlenir\n• Kritik ölçümler mobilyasız alanlarda alınır\n\nAncak yoğun mobilyalı alanlarda geçici taşıma önerilir.",
    link: "/iletisim"
  }
];

export const architectureFAQsEn: FAQItem[] = [
  {
    question: "When is laser scanning needed for architectural projects?",
    answer: "Situations requiring laser scanning:\n\n• Renovation and modification projects\n• Floor additions and extensions\n• Existing building retrofitting\n• Facade renewal\n• Historic building restoration\n• Lack of as-built documentation\n\nNot required for new projects.",
    link: "/en/sectors/architecture"
  },
  {
    question: "What details does an architectural BIM model include?",
    answer: "Architectural BIM model scope:\n\n• Structural elements (columns, beams, slabs, walls)\n• Facade systems (windows, doors, curtain walls)\n• Interior details (joinery, stairs, ceilings)\n• Area calculations and Schedules\n• Material definitions\n\nLOD 300 is standard, optional LOD 400.",
    link: "/en/solutions/point-cloud-to-bim"
  },
  {
    question: "Do furnishings cause problems during interior scanning?",
    answer: "Furnishings usually don't cause problems because:\n\n• Shadows minimized with multiple scan positions\n• Noise cleaned in post-processing\n• Critical measurements taken in unfurnished areas\n\nHowever, temporary relocation is recommended for heavily furnished areas.",
    link: "/en/contact"
  }
];

// İnşaat SSS
export const constructionFAQs: FAQItem[] = [
  {
    question: "İnşaat projelerinde Scan to BIM nasıl kullanılır?",
    answer: "İnşaat aşamasında Scan to BIM kullanımı:\n\n• Temel/zemin seviyesi doğrulama\n• Yapısal eleman kontrol (kırmızı-sarı-yeşil rapor)\n• Progress monitoring (ilerleme takibi)\n• Quantity verification (imalat doğrulama)\n• Punch list oluşturma\n\nHaftalık veya aylık tarama ile sürekli kontrol.",
    link: "/sektorler/insaat"
  },
  {
    question: "Clash detection ne kadar maliyet tasarrufu sağlar?",
    answer: "Araştırmalara göre clash detection:\n\n• Sahada değişiklik maliyetini %60-80 azaltır\n• Proje süresini %10-15 kısaltır\n• RFI (Request for Information) sayısını %50 düşürür\n\nÖrnek: 100M TL projelerde 3-5M TL tasarruf potansiyeli.",
    link: "/blog/clash-detection-maliyet"
  },
  {
    question: "4D BIM (zaman boyutu) hizmeti veriyor musunuz?",
    answer: "Evet, 3D modele zaman boyutu ekliyoruz:\n\n• İş programı entegrasyonu (MS Project, Primavera)\n• Animasyonlu inşaat simülasyonu\n• Kaynak planlaması\n• İlerleme karşılaştırma (planlanan vs gerçekleşen)\n\nNavisworks ve Synchro kullanıyoruz.",
    link: "/cozumler/mevcut-durum-modelleme"
  }
];

export const constructionFAQsEn: FAQItem[] = [
  {
    question: "How is Scan to BIM used in construction projects?",
    answer: "Scan to BIM usage during construction:\n\n• Foundation/ground level verification\n• Structural element control (red-yellow-green report)\n• Progress monitoring\n• Quantity verification\n• Punch list creation\n\nContinuous control with weekly or monthly scanning.",
    link: "/en/sectors/construction"
  },
  {
    question: "How much cost savings does clash detection provide?",
    answer: "According to research, clash detection:\n\n• Reduces field change costs by 60-80%\n• Shortens project duration by 10-15%\n• Reduces RFI (Request for Information) count by 50%\n\nExample: 10M € savings potential in 100M € projects.",
    link: "/en/blog/clash-detection-cost-savings"
  },
  {
    question: "Do you provide 4D BIM (time dimension) services?",
    answer: "Yes, we add time dimension to 3D models:\n\n• Work schedule integration (MS Project, Primavera)\n• Animated construction simulation\n• Resource planning\n• Progress comparison (planned vs actual)\n\nWe use Navisworks and Synchro.",
    link: "/en/solutions/as-built-modeling"
  }
];

// Restorasyon SSS
export const restorationFAQs: FAQItem[] = [
  {
    question: "Tarihi yapı taraması için özel izin gerekiyor mu?",
    answer: "İzin durumu yapının statüsüne bağlı:\n\n• Tescilli anıt eser: Koruma kurulu izni şart\n• Koruma alanı yapısı: Belediye izni yeterli\n• Envanter yapısı: Genellikle izin gerekmez\n\nİzin süreçlerinde destek sağlıyoruz.",
    link: "/sektorler/restorasyon"
  },
  {
    question: "Taş işçiliği ve süslemeler nasıl belgeleniyor?",
    answer: "Detaylı belgeleme yöntemlerimiz:\n\n• Yüksek çözünürlüklü lazer tarama (0.3mm nokta aralığı)\n• Makro fotogrametri (texture mapping)\n• Structured light tarama (küçük objeler)\n• Renk kalibrasyonlu fotoğraf\n\nTüm veriler HBIM modeline entegre edilir.",
    link: "/blog/hbim-lazer-tarama"
  },
  {
    question: "Restorasyon rölövesi klasik rölöveden farklı mı?",
    answer: "Evet, restorasyon rölövesi daha kapsamlı:\n\n• Hasar haritalama (çatlak, nem, bozulma)\n• Malzeme analizi ve kodlama\n• Deformasyon ölçümü\n• Dönem analizi (yapım evreleri)\n• Müdahale geçmişi kaydı\n\nKoruma kurulu standartlarına uygun çıktılar.",
    link: "/hizmetler/rolove-hizmetleri"
  }
];

export const restorationFAQsEn: FAQItem[] = [
  {
    question: "Is special permission required for historic building scanning?",
    answer: "Permission depends on the building's status:\n\n• Registered monument: Conservation board permission required\n• Conservation area building: Municipal permission sufficient\n• Inventory building: Usually no permission needed\n\nWe provide support in permission processes.",
    link: "/en/sectors/restoration"
  },
  {
    question: "How are stonework and ornaments documented?",
    answer: "Our detailed documentation methods:\n\n• High-resolution laser scanning (0.3mm point spacing)\n• Macro photogrammetry (texture mapping)\n• Structured light scanning (small objects)\n• Color-calibrated photography\n\nAll data integrated into HBIM model.",
    link: "/en/blog/heritage-building-hbim"
  },
  {
    question: "Is restoration survey different from regular survey?",
    answer: "Yes, restoration survey is more comprehensive:\n\n• Damage mapping (cracks, moisture, deterioration)\n• Material analysis and coding\n• Deformation measurement\n• Period analysis (construction phases)\n• Intervention history recording\n\nOutputs compliant with conservation board standards.",
    link: "/en/sectors/restoration"
  }
];

// Renovasyon SSS
export const renovationFAQs: FAQItem[] = [
  {
    question: "Renovasyon projesi için neden as-built model gerekli?",
    answer: "As-built model olmadan renovasyonda yaşanan sorunlar:\n\n• Sürpriz yapısal elemanlar (proje durur)\n• Ölçü hataları (sipariş yanlışlıkları)\n• MEP çakışmaları (sahada revizyon)\n• Bütçe aşımı (%20-40 ek maliyet)\n\nAs-built model ile tüm bu riskler minimize edilir.",
    link: "/sektorler/renovasyon"
  },
  {
    question: "Renovasyon taraması ne kadar sürer?",
    answer: "Alan büyüklüğüne göre saha çalışması:\n\n• 500 m² altı: 1 gün\n• 500-2.000 m²: 2-3 gün\n• 2.000-5.000 m²: 3-5 gün\n• 5.000 m² üzeri: 1+ hafta\n\nModelleme ayrıca 1-3 hafta sürer.",
    link: "/iletisim"
  },
  {
    question: "Kiracı/kullanıcı varken tarama yapılabilir mi?",
    answer: "Evet, aktif kullanımdaki binalarda tarama yapıyoruz:\n\n• Mesai dışı saatler (gece/hafta sonu)\n• Bölüm bölüm tarama planı\n• Minimum rahatsızlık protokolü\n• Hızlı tarama teknolojileri\n\nİş sürekliliği kesintiye uğramaz.",
    link: "/sektorler/renovasyon"
  }
];

export const renovationFAQsEn: FAQItem[] = [
  {
    question: "Why is an as-built model needed for renovation projects?",
    answer: "Problems experienced in renovation without as-built model:\n\n• Surprise structural elements (project stops)\n• Measurement errors (order mistakes)\n• MEP conflicts (field revisions)\n• Budget overrun (20-40% additional cost)\n\nAll these risks are minimized with as-built model.",
    link: "/en/sectors/renovation"
  },
  {
    question: "How long does renovation scanning take?",
    answer: "Field work by area size:\n\n• Under 500 m²: 1 day\n• 500-2,000 m²: 2-3 days\n• 2,000-5,000 m²: 3-5 days\n• Over 5,000 m²: 1+ week\n\nModeling takes an additional 1-3 weeks.",
    link: "/en/contact"
  },
  {
    question: "Can scanning be done with tenants/users present?",
    answer: "Yes, we scan in actively used buildings:\n\n• After-hours (nights/weekends)\n• Section-by-section scanning plan\n• Minimum disturbance protocol\n• Fast scanning technologies\n\nBusiness continuity is not interrupted.",
    link: "/en/sectors/renovation"
  }
];
