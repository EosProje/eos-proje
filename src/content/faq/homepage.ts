// Ana Sayfa SSS İçerikleri
import { FAQItem } from "@/components/FAQ";

export const homepageFAQs: FAQItem[] = [
  {
    question: "3D lazer tarama nedir ve nasıl çalışır?",
    answer: "3D lazer tarama (LiDAR), lazer ışınları kullanarak fiziksel nesnelerin ve mekanların üç boyutlu dijital kopyasını oluşturan non-invaziv bir ölçüm teknolojisidir. Saniyede milyonlarca nokta ölçümü yaparak \"nokta bulutu\" (point cloud) adı verilen yüksek yoğunluklu veri seti oluşturur. Bu veriler daha sonra BIM modeli, CAD çizimi veya dijital ikiz oluşturmak için kullanılır. Geleneksel ölçüm yöntemlerine göre çok daha hızlı, güvenli ve doğrudur.",
    link: "/blog/lazer-tarama-nedir"
  },
  {
    question: "BIM modelleme nedir ve avantajları nelerdir?",
    answer: "BIM (Building Information Modeling), yapıların fiziksel ve fonksiyonel özelliklerini dijital ortamda temsil eden akıllı 3D modelleme sürecidir. Avantajları:\n\n• Tasarım hatalarını %90 oranında azaltır\n• Projeleri %30-40 daha hızlı tamamlatır\n• Malzeme israfını minimuma indirir\n• Tüm paydaşlar arasında koordinasyonu sağlar\n• Tesis yönetimi için değerli veri kaynağı oluşturur",
    link: "/cozumler/nokta-bulutu-bim"
  },
  {
    question: "Scan to BIM (Point Cloud to BIM) süreci nasıl işler?",
    answer: "Scan to BIM süreci 5 ana adımdan oluşur:\n\n1. Saha Planlaması: Tarama noktaları ve erişim planı belirlenir\n2. Veri Toplama: 3D lazer tarama ile nokta bulutu oluşturulur\n3. Veri İşleme: Nokta bulutları birleştirilir ve temizlenir\n4. BIM Modelleme: Revit'te LOD 200-400 seviyesinde model üretilir\n5. Kalite Kontrol: Model-nokta bulutu karşılaştırması yapılır\n\nOrtalama süre 2-4 hafta arasında değişir.",
    link: "/surec-ve-standartlar"
  },
  {
    question: "Hangi sektörlere hizmet veriyorsunuz?",
    answer: "EOS Proje olarak birçok sektöre hizmet veriyoruz:\n\n• Endüstriyel Tesisler: Fabrikalar, rafineriler, enerji santralleri\n• Mimarlık & İnşaat: Yeni projeler ve renovasyon\n• Tarihi Yapı Restorasyonu: HBIM ile kültürel miras belgeleme\n• Altyapı: Köprüler, tüneller, havalimanları\n• Lojistik: Depolar, dağıtım merkezleri\n\n15+ yıllık deneyim ve 500+ tamamlanmış proje ile sektör lideriyiz.",
    link: "/sektorler"
  },
  {
    question: "Proje süresi ne kadar ve teslimat formatları nelerdir?",
    answer: "Proje süresi alan büyüklüğü ve LOD seviyesine göre değişir:\n\n• 1.000 m² altı: 1-2 hafta\n• 1.000-5.000 m²: 2-3 hafta\n• 5.000 m² üzeri: 3-4 hafta\n\nTeslimat formatları: Revit (.rvt), IFC, AutoCAD (.dwg), Navisworks (.nwc), ArchiCAD (.pla), PDF çizimler ve nokta bulutu ham verisi (E57, RCS, RCP).",
    link: "/ucretlendirme"
  },
  {
    question: "Fiyatlandırma nasıl yapılıyor ve teklif nasıl alınır?",
    answer: "Fiyatlandırmayı etkileyen faktörler:\n\n• Taranacak alan (m²)\n• İstenen LOD seviyesi (200-400)\n• Disiplin sayısı (Mimari, MEP, Yapısal)\n• Proje aciliyeti\n• Teslimat formatları\n\nÜcretsiz ön keşif görüşmesi ve detaylı teklif için web sitemizden form doldurun veya +90 530 664 2263 numarasını arayın. Sabit fiyat garantimiz var.",
    link: "/iletisim"
  }
];

export const homepageFAQsEn: FAQItem[] = [
  {
    question: "What is 3D laser scanning and how does it work?",
    answer: "3D laser scanning (LiDAR) is a non-invasive measurement technology that creates three-dimensional digital copies of physical objects and spaces using laser beams. It measures millions of points per second, creating a high-density data set called a \"point cloud.\" This data is then used to create BIM models, CAD drawings, or digital twins. It is much faster, safer, and more accurate than traditional measurement methods.",
    link: "/en/blog/what-is-laser-scanning"
  },
  {
    question: "What is BIM modeling and what are its advantages?",
    answer: "BIM (Building Information Modeling) is an intelligent 3D modeling process that digitally represents the physical and functional characteristics of buildings. Advantages:\n\n• Reduces design errors by 90%\n• Completes projects 30-40% faster\n• Minimizes material waste\n• Enables coordination among all stakeholders\n• Creates valuable data source for facility management",
    link: "/en/solutions/point-cloud-to-bim"
  },
  {
    question: "How does the Scan to BIM process work?",
    answer: "The Scan to BIM process consists of 5 main steps:\n\n1. Site Planning: Scanning points and access plan determined\n2. Data Collection: Point cloud created via 3D laser scanning\n3. Data Processing: Point clouds merged and cleaned\n4. BIM Modeling: Model produced at LOD 200-400 level in Revit\n5. Quality Control: Model-point cloud comparison performed\n\nAverage duration ranges from 2-4 weeks.",
    link: "/en/process-standards"
  },
  {
    question: "Which sectors do you serve?",
    answer: "EOS Proje serves multiple sectors:\n\n• Industrial Facilities: Factories, refineries, power plants\n• Architecture & Construction: New projects and renovation\n• Heritage Building Restoration: Cultural heritage documentation with HBIM\n• Infrastructure: Bridges, tunnels, airports\n• Logistics: Warehouses, distribution centers\n\nWith 15+ years of experience and 500+ completed projects, we are the industry leader.",
    link: "/en/sectors"
  },
  {
    question: "How long does a project take and what are delivery formats?",
    answer: "Project duration varies by area size and LOD level:\n\n• Under 1,000 m²: 1-2 weeks\n• 1,000-5,000 m²: 2-3 weeks\n• Over 5,000 m²: 3-4 weeks\n\nDelivery formats: Revit (.rvt), IFC, AutoCAD (.dwg), Navisworks (.nwc), ArchiCAD (.pla), PDF drawings, and raw point cloud data (E57, RCS, RCP).",
    link: "/en/pricing"
  },
  {
    question: "How is pricing done and how can I get a quote?",
    answer: "Factors affecting pricing:\n\n• Area to be scanned (m²)\n• Required LOD level (200-400)\n• Number of disciplines (Architectural, MEP, Structural)\n• Project urgency\n• Delivery formats\n\nFor a free preliminary consultation and detailed quote, fill out the form on our website or call +90 530 664 2263. We offer a fixed price guarantee.",
    link: "/en/contact"
  }
];
