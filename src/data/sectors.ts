export interface SectorDetail {
    id: string;
    slug: string;
    title: string;
    description: string;
    services: string[];
    deliverables: {
        models: string[];
        drawings: string[];
        reports: string[];
    };
    precision: string;
    lod: string;
    icon: string; // pin icon key
    faq: {
        question: string;
        answer: string;
    }[];
}

export const sectors: SectorDetail[] = [
    {
        id: "industrial",
        slug: "endustriyel-tesis",
        title: "Endüstriyel Tesis",
        description: "Fabrika, enerji santrali ve proses tesislerinde karmaşık MEP ve ekipman modelleme.",
        services: ["MEP Modelleme", "Ekipman Envanteri", "Çakışma Analizi", "As-built Dokümantasyon"],
        deliverables: {
            models: ["Revit (Parametrik)", "Navisworks (NWD)", "Autocad Plant 3D"],
            drawings: ["P&ID", "İzometrik Çizimler", "Plan & Kesit Paftaları"],
            reports: ["Vana/Ekipman Listesi", "Cloud-to-Model Sapma Raporu"]
        },
        precision: "±8mm - ±15mm",
        lod: "350 - 400",
        icon: "factory",
        faq: [
            {
                question: "Üretim durmadan tarama yapılabilir mi?",
                answer: "Evet, lazer tarama cihazlarımız (RTC360) saniyede 2 milyon nokta okuma hızıyla çalışır ve uzaktan ölçüm yapabilir. Bu sayede üretim hattınızı durdurmadan, iş güvenliği mesafesini koruyarak dijitalleştirme yapabiliriz."
            },
            {
                question: "Hangi formatlarda teslimat yapıyorsunuz?",
                answer: "Endüstri standardı olan tüm formatları destekliyoruz. Yaygın olarak .RVT (Revit), .NWD (Navisworks), .DWG (AutoCAD), .IFC ve .RCP (Recap) formatlarında teslimat yapmaktayız."
            },
            {
                question: "Boru hatlarındaki izolasyonları nasıl modelliyorsunuz?",
                answer: "Nokta bulutunda görünen dış çeper (izolasyonlu yüzey) üzerinden modelleme yapılır. Ancak istendiğinde boru standartlarına (ASME/DIN) göre iç çap tahminleri veya spec verilerine göre parametrik bilgi girişi yapılabilir."
            }
        ]
    },
    {
        id: "architecture",
        slug: "mimarlik",
        title: "Mimarlık & Tasarım",
        description: "Tasarım altlığı olarak yüksek doğrulukta mimari as-built model üretimi.",
        services: ["Mimari Modelleme", "Mevcut Durum Analizi", "Deformasyon Analizi"],
        deliverables: {
            models: ["Revit", "IFC", "ArchiCAD"],
            drawings: ["Mimari Rölöve Paftaları", "Detay Çizimleri"],
            reports: ["Alan Listesi", "Görsel Dokümantasyon"]
        },
        precision: "±5mm - ±10mm",
        lod: "200 - 300",
        icon: "building",
        faq: [
            {
                question: "Rölöve projelerinde hata payınız nedir?",
                answer: "Mimari rölöve projelerinde ±5mm ile ±10mm arasında hassasiyetle çalışıyoruz. Bu, geleneksel ölçüm yöntemlerine (şerit metre, distomat) göre çok daha yüksek bir doğruluk sağlar."
            },
            {
                question: "Tarihi eser olmayan binalarda da çalışıyor musunuz?",
                answer: "Evet; ofis binaları, AVM'ler, oteller ve konut projeleri için de as-built modelleme ve rölöve hizmeti veriyoruz. Özellikle cephe yenileme ve iç mekan tadilat projelerinde mevcut durumun tespiti için tercih edilmektedir."
            },
            {
                question: "Revit modelini kendi şablonumuzda (template) teslim alabilir miyiz?",
                answer: "Evet, firmanıza ait Revit şablonunu (RTE) bize iletmeniz durumunda, tüm modellemeyi sizin standartlarınıza, family kütüphanenize ve katman yapınıza uygun olarak gerçekleştirebiliriz."
            }
        ]
    },
    {
        id: "restoration",
        slug: "restorasyon",
        title: "Restorasyon & Kültürel Miras",
        description: "Tarihi yapıların korunması için milimetrik hassasiyette belgeleme.",
        services: ["Hassas Yüzey Modelleme", "Hasar Tespiti", "Nokta Bulutu Arşivleme"],
        deliverables: {
            models: ["NURBS Modelleme", "High-Poly Mesh", "Revit"],
            drawings: ["Taş-Taş Rölöve", "Analitik Projeler"],
            reports: ["Restitüsyon Raporu Altyapısı", "Ortomozaik Görüntüler"]
        },
        precision: "±2mm - ±5mm",
        lod: "300 - 400 (Custom)",
        icon: "landmark",
        faq: [
            {
                question: "Taş-taş rölöve çizimi yapabiliyor musunuz?",
                answer: "Evet, nokta bulutu verisi üzerinden her bir taşın sınırlarını, derzlerini ve yüzey deformasyonlarını birebir dijital ortama aktararak Kurul onayına uygun detayda taş-taş rölöve çizimleri üretiyoruz."
            },
            {
                question: "Ortofoto (Ortomozaik) görüntü sağlıyor musunuz?",
                answer: "Lazer tarama verisi ve yüksek çözünürlüklü fotoğrafları birleştirerek, cephe ve plan düzlemlerinde ölçekli, bozulmamış ve yüksek çözünürlüklü ortofoto haritalar oluşturuyoruz."
            },
            {
                question: "Tarihi esere herhangi bir zarar veriliyor mu?",
                answer: "Hayır, kullandığımız lazer tarama teknolojisi temassız (non-contact) bir ölçüm yöntemidir. Yapıya fiziksel bir müdahalede bulunulmaz, iskele kurulmasına gerek kalmadan uzaktan ölçüm yapılır."
            }
        ]
    },
    {
        id: "renovation",
        slug: "renovasyon",
        title: "Renovasyon & Fit-out",
        description: "Mevcut iç mekanların yenileme projeleri için dijital altyapı.",
        services: ["İç Mekan Modelleme", "Mevcut MEP Tespiti", "Montaj Planlama"],
        deliverables: {
            models: ["LOD 300 Revit", "RCS/RCP Cloud"],
            drawings: ["As-built Planlar", "Tavan & Aydınlatma Planı"],
            reports: ["Metraj Çizelgeleri", "Lokal Sapma Analizi"]
        },
        precision: "±10mm",
        lod: "300",
        icon: "layout",
        faq: [
            {
                question: "Asma tavan içindeki tesisatları görebiliyor musunuz?",
                answer: "Lazer tarayıcılar sadece 'görebildikleri' yüzeyleri ölçerler. Asma tavan kapalıysa üzerini göremeyiz. Ancak bazı karoların açılması durumunda tavan arasına cihazı yükselterek veya el tipi tarayıcılar ile o bölgeyi tarayabiliriz."
            },
            {
                question: "Mobilya ve tefrişatları modelliyor musunuz?",
                answer: "Proje kapsamına göre değişmektedir. Genellikle sabit mobilyalar ve ana kütleler modellenir. Ancak talebinize göre hareketli mobilyalar, aydınlatma armatürleri ve diğer tefriş elemanları da detaylı olarak modellenebilir."
            },
            {
                question: "Mevcut duvarlardaki eğrilikleri görebilir miyiz?",
                answer: "Kesinlikle. Lazer tarama verisi, duvarlardaki şakül kaçıklıklarını, eğrilikleri ve yüzey bozukluklarını net bir şekilde ortaya koyar. Revit modelinde bu duvarları 'ortalama düz' olarak çizebileceğimiz gibi, 'as-is' yani olduğu gibi eğri de modelleyebiliriz."
            }
        ]
    },
    {
        id: "construction",
        slug: "insaat-taahhut",
        title: "İnşaat & Taahhüt",
        description: "Şantiye sahası ile tasarımın uyumunu denetleyen BIM çözümleri.",
        services: ["Kalite Kontrol (QA/QC)", "Progres Kontrol", "Betonarme Tolerans Analizi"],
        deliverables: {
            models: ["Navisworks Koordinasyon", "Tekla"],
            drawings: ["Shop Drawing Kontrol", "As-build Paftaları"],
            reports: ["Tolerans Dışı Eleman Listesi", "Haftalık Progres Raporu"]
        },
        precision: "±20mm (Global)",
        lod: "300 - 350",
        icon: "construction",
        faq: [
            {
                question: "Tarama verisi ile BIM modelini nasıl karşılaştırıyorsunuz?",
                answer: "Sahadan alınan nokta bulutu verisini (as-built) ve tasarım modelini (as-designed) Navisworks veya özel yazılımlarda üst üste çakıştırıyoruz. Belirlenen tolerans aralığı (örn. 2cm) dışındaki sapmaları renk süzgeci ile raporluyoruz."
            },
            {
                question: "Betonarme dökümü sonrası kontrol ne kadar sürer?",
                answer: "Tarama işlemi sahanın boyutuna göre 1-4 saat sürer. Verinin işlenmesi ve sapma raporunun hazırlanması ise genellikle ertesi gün tamamlanarak tarafınıza sunulur. Bu sayede hata varsa bir sonraki imalata geçilmeden müdahale edilebilir."
            },
            {
                question: "Hakediş hesaplarında kullanabilir miyiz?",
                answer: "Evet, nokta bulutu üzerinden yapılan hacim ve alan hesapları çok yüksek doğrulukludur. Özellikle hafriyat, dolgu veya beton metrajlarının hakedişe esas teşkil edecek şekilde hesaplanmasında güvenle kullanılabilir."
            }
        ]
    }
];
