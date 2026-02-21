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
        title: "EndÃƒÂ¼striyel Tesis",
        description: "Fabrika, enerji santrali ve proses tesislerinde karmaÃ…Å¸Ã„Â±k MEP ve ekipman modelleme.",
        services: ["MEP Modelleme", "Ekipman Envanteri", "Ãƒâ€¡akÃ„Â±Ã…Å¸ma Analizi", "As-built DokÃƒÂ¼mantasyon"],
        deliverables: {
            models: ["Revit (Parametrik)", "Navisworks (NWD)", "Autocad Plant 3D"],
            drawings: ["P&ID", "Ã„Â°zometrik Ãƒâ€¡izimler", "Plan & Kesit PaftalarÃ„Â±"],
            reports: ["Vana/Ekipman Listesi", "Cloud-to-Model Sapma Raporu"]
        },
        precision: "Ã‚Â±8mm - Ã‚Â±15mm",
        lod: "350 - 400",
        icon: "factory",
        faq: [
            {
                question: "ÃƒÅ“retim durmadan tarama yapÃ„Â±labilir mi?",
                answer: "Evet, lazer tarama cihazlarÃ„Â±mÃ„Â±z (RTC360) saniyede 2 milyon nokta okuma hÃ„Â±zÃ„Â±yla ÃƒÂ§alÃ„Â±Ã…Å¸Ã„Â±r ve uzaktan ÃƒÂ¶lÃƒÂ§ÃƒÂ¼m yapabilir. Bu sayede ÃƒÂ¼retim hattÃ„Â±nÃ„Â±zÃ„Â± durdurmadan, iÃ…Å¸ gÃƒÂ¼venliÃ„Å¸i mesafesini koruyarak dijitalleÃ…Å¸tirme yapabiliriz."
            },
            {
                question: "Hangi formatlarda teslimat yapÃ„Â±yorsunuz?",
                answer: "EndÃƒÂ¼stri standardÃ„Â± olan tÃƒÂ¼m formatlarÃ„Â± destekliyoruz. YaygÃ„Â±n olarak .RVT (Revit), .NWD (Navisworks), .DWG (AutoCAD), .IFC ve .RCP (Recap) formatlarÃ„Â±nda teslimat yapmaktayÃ„Â±z."
            },
            {
                question: "Boru hatlarÃ„Â±ndaki izolasyonlarÃ„Â± nasÃ„Â±l modelliyorsunuz?",
                answer: "Nokta bulutunda gÃƒÂ¶rÃƒÂ¼nen dÃ„Â±Ã…Å¸ ÃƒÂ§eper (izolasyonlu yÃƒÂ¼zey) ÃƒÂ¼zerinden modelleme yapÃ„Â±lÃ„Â±r. Ancak istendiÃ„Å¸inde boru standartlarÃ„Â±na (ASME/DIN) gÃƒÂ¶re iÃƒÂ§ ÃƒÂ§ap tahminleri veya spec verilerine gÃƒÂ¶re parametrik bilgi giriÃ…Å¸i yapÃ„Â±labilir."
            }
        ]
    },
    {
        id: "architecture",
        slug: "mimarlik",
        title: "MimarlÃ„Â±k & TasarÃ„Â±m",
        description: "TasarÃ„Â±m altlÃ„Â±Ã„Å¸Ã„Â± olarak yÃƒÂ¼ksek doÃ„Å¸rulukta mimari as-built model ÃƒÂ¼retimi.",
        services: ["Mimari Modelleme", "Mevcut Durum Analizi", "Deformasyon Analizi"],
        deliverables: {
            models: ["Revit", "IFC", "ArchiCAD"],
            drawings: ["Mimari RÃƒÂ¶lÃƒÂ¶ve PaftalarÃ„Â±", "Detay Ãƒâ€¡izimleri"],
            reports: ["Alan Listesi", "GÃƒÂ¶rsel DokÃƒÂ¼mantasyon"]
        },
        precision: "Ã‚Â±5mm - Ã‚Â±10mm",
        lod: "200 - 300",
        icon: "building",
        faq: [
            {
                question: "RÃƒÂ¶lÃƒÂ¶ve projelerinde hata payÃ„Â±nÃ„Â±z nedir?",
                answer: "Mimari rÃƒÂ¶lÃƒÂ¶ve projelerinde Ã‚Â±5mm ile Ã‚Â±10mm arasÃ„Â±nda hassasiyetle ÃƒÂ§alÃ„Â±Ã…Å¸Ã„Â±yoruz. Bu, geleneksel ÃƒÂ¶lÃƒÂ§ÃƒÂ¼m yÃƒÂ¶ntemlerine (Ã…Å¸erit metre, distomat) gÃƒÂ¶re ÃƒÂ§ok daha yÃƒÂ¼ksek bir doÃ„Å¸ruluk saÃ„Å¸lar."
            },
            {
                question: "Tarihi eser olmayan binalarda da ÃƒÂ§alÃ„Â±Ã…Å¸Ã„Â±yor musunuz?",
                answer: "Evet; ofis binalarÃ„Â±, AVM'ler, oteller ve konut projeleri iÃƒÂ§in de as-built modelleme ve rÃƒÂ¶lÃƒÂ¶ve hizmeti veriyoruz. Ãƒâ€“zellikle cephe yenileme ve iÃƒÂ§ mekan tadilat projelerinde mevcut durumun tespiti iÃƒÂ§in tercih edilmektedir."
            },
            {
                question: "Revit modelini kendi Ã…Å¸ablonumuzda (template) teslim alabilir miyiz?",
                answer: "Evet, firmanÃ„Â±za ait Revit Ã…Å¸ablonunu (RTE) bize iletmeniz durumunda, tÃƒÂ¼m modellemeyi sizin standartlarÃ„Â±nÃ„Â±za, family kÃƒÂ¼tÃƒÂ¼phanenize ve katman yapÃ„Â±nÃ„Â±za uygun olarak gerÃƒÂ§ekleÃ…Å¸tirebiliriz."
            }
        ]
    },
    {
        id: "restoration",
        slug: "restorasyon",
        title: "Restorasyon & KÃƒÂ¼ltÃƒÂ¼rel Miras",
        description: "Tarihi yapÃ„Â±larÃ„Â±n korunmasÃ„Â± iÃƒÂ§in milimetrik hassasiyette belgeleme.",
        services: ["Hassas YÃƒÂ¼zey Modelleme", "Hasar Tespiti", "Nokta Bulutu ArÃ…Å¸ivleme"],
        deliverables: {
            models: ["NURBS Modelleme", "High-Poly Mesh", "Revit"],
            drawings: ["TaÃ…Å¸-TaÃ…Å¸ RÃƒÂ¶lÃƒÂ¶ve", "Analitik Projeler"],
            reports: ["RestitÃƒÂ¼syon Raporu AltyapÃ„Â±sÃ„Â±", "Ortomozaik GÃƒÂ¶rÃƒÂ¼ntÃƒÂ¼ler"]
        },
        precision: "Ã‚Â±2mm - Ã‚Â±5mm",
        lod: "300 - 400 (Custom)",
        icon: "landmark",
        faq: [
            {
                question: "TaÃ…Å¸-taÃ…Å¸ rÃƒÂ¶lÃƒÂ¶ve ÃƒÂ§izimi yapabiliyor musunuz?",
                answer: "Evet, nokta bulutu verisi ÃƒÂ¼zerinden her bir taÃ…Å¸Ã„Â±n sÃ„Â±nÃ„Â±rlarÃ„Â±nÃ„Â±, derzlerini ve yÃƒÂ¼zey deformasyonlarÃ„Â±nÃ„Â± birebir dijital ortama aktararak Kurul onayÃ„Â±na uygun detayda taÃ…Å¸-taÃ…Å¸ rÃƒÂ¶lÃƒÂ¶ve ÃƒÂ§izimleri ÃƒÂ¼retiyoruz."
            },
            {
                question: "Ortofoto (Ortomozaik) gÃƒÂ¶rÃƒÂ¼ntÃƒÂ¼ saÃ„Å¸lÃ„Â±yor musunuz?",
                answer: "Lazer tarama verisi ve yÃƒÂ¼ksek ÃƒÂ§ÃƒÂ¶zÃƒÂ¼nÃƒÂ¼rlÃƒÂ¼klÃƒÂ¼ fotoÃ„Å¸raflarÃ„Â± birleÃ…Å¸tirerek, cephe ve plan dÃƒÂ¼zlemlerinde ÃƒÂ¶lÃƒÂ§ekli, bozulmamÃ„Â±Ã…Å¸ ve yÃƒÂ¼ksek ÃƒÂ§ÃƒÂ¶zÃƒÂ¼nÃƒÂ¼rlÃƒÂ¼klÃƒÂ¼ ortofoto haritalar oluÃ…Å¸turuyoruz."
            },
            {
                question: "Tarihi esere herhangi bir zarar veriliyor mu?",
                answer: "HayÃ„Â±r, kullandÃ„Â±Ã„Å¸Ã„Â±mÃ„Â±z lazer tarama teknolojisi temassÃ„Â±z (non-contact) bir ÃƒÂ¶lÃƒÂ§ÃƒÂ¼m yÃƒÂ¶ntemidir. YapÃ„Â±ya fiziksel bir mÃƒÂ¼dahalede bulunulmaz, iskele kurulmasÃ„Â±na gerek kalmadan uzaktan ÃƒÂ¶lÃƒÂ§ÃƒÂ¼m yapÃ„Â±lÃ„Â±r."
            }
        ]
    },
    {
        id: "renovation",
        slug: "renovasyon",
        title: "Renovasyon & Fit-out",
        description: "Mevcut iÃƒÂ§ mekanlarÃ„Â±n yenileme projeleri iÃƒÂ§in dijital altyapÃ„Â±.",
        services: ["Ã„Â°ÃƒÂ§ Mekan Modelleme", "Mevcut MEP Tespiti", "Montaj Planlama"],
        deliverables: {
            models: ["LOD 300 Revit", "RCS/RCP Cloud"],
            drawings: ["As-built Planlar", "Tavan & AydÃ„Â±nlatma PlanÃ„Â±"],
            reports: ["Metraj Ãƒâ€¡izelgeleri", "Lokal Sapma Analizi"]
        },
        precision: "Ã‚Â±10mm",
        lod: "300",
        icon: "layout",
        faq: [
            {
                question: "Asma tavan iÃƒÂ§indeki tesisatlarÃ„Â± gÃƒÂ¶rebiliyor musunuz?",
                answer: "Lazer tarayÃ„Â±cÃ„Â±lar sadece 'gÃƒÂ¶rebildikleri' yÃƒÂ¼zeyleri ÃƒÂ¶lÃƒÂ§erler. Asma tavan kapalÃ„Â±ysa ÃƒÂ¼zerini gÃƒÂ¶remeyiz. Ancak bazÃ„Â± karolarÃ„Â±n aÃƒÂ§Ã„Â±lmasÃ„Â± durumunda tavan arasÃ„Â±na cihazÃ„Â± yÃƒÂ¼kselterek veya el tipi tarayÃ„Â±cÃ„Â±lar ile o bÃƒÂ¶lgeyi tarayabiliriz."
            },
            {
                question: "Mobilya ve tefriÃ…Å¸atlarÃ„Â± modelliyor musunuz?",
                answer: "Proje kapsamÃ„Â±na gÃƒÂ¶re deÃ„Å¸iÃ…Å¸mektedir. Genellikle sabit mobilyalar ve ana kÃƒÂ¼tleler modellenir. Ancak talebinize gÃƒÂ¶re hareketli mobilyalar, aydÃ„Â±nlatma armatÃƒÂ¼rleri ve diÃ„Å¸er tefriÃ…Å¸ elemanlarÃ„Â± da detaylÃ„Â± olarak modellenebilir."
            },
            {
                question: "Mevcut duvarlardaki eÃ„Å¸rilikleri gÃƒÂ¶rebilir miyiz?",
                answer: "Kesinlikle. Lazer tarama verisi, duvarlardaki Ã…Å¸akÃƒÂ¼l kaÃƒÂ§Ã„Â±klÃ„Â±klarÃ„Â±nÃ„Â±, eÃ„Å¸rilikleri ve yÃƒÂ¼zey bozukluklarÃ„Â±nÃ„Â± net bir Ã…Å¸ekilde ortaya koyar. Revit modelinde bu duvarlarÃ„Â± 'ortalama dÃƒÂ¼z' olarak ÃƒÂ§izebileceÃ„Å¸imiz gibi, 'as-is' yani olduÃ„Å¸u gibi eÃ„Å¸ri de modelleyebiliriz."
            }
        ]
    },
    {
        id: "construction",
        slug: "insaat-taahhut",
        title: "Ã„Â°nÃ…Å¸aat & TaahhÃƒÂ¼t",
        description: "Ã…Âantiye sahasÃ„Â± ile tasarÃ„Â±mÃ„Â±n uyumunu denetleyen BIM ÃƒÂ§ÃƒÂ¶zÃƒÂ¼mleri.",
        services: ["Kalite Kontrol (QA/QC)", "Progres Kontrol", "Betonarme Tolerans Analizi"],
        deliverables: {
            models: ["Navisworks Koordinasyon", "Tekla"],
            drawings: ["Shop Drawing Kontrol", "As-build PaftalarÃ„Â±"],
            reports: ["Tolerans DÃ„Â±Ã…Å¸Ã„Â± Eleman Listesi", "HaftalÃ„Â±k Progres Raporu"]
        },
        precision: "Ã‚Â±20mm (Global)",
        lod: "300 - 350",
        icon: "construction",
        faq: [
            {
                question: "Tarama verisi ile BIM modelini nasÃ„Â±l karÃ…Å¸Ã„Â±laÃ…Å¸tÃ„Â±rÃ„Â±yorsunuz?",
                answer: "Sahadan alÃ„Â±nan nokta bulutu verisini (as-built) ve tasarÃ„Â±m modelini (as-designed) Navisworks veya ÃƒÂ¶zel yazÃ„Â±lÃ„Â±mlarda ÃƒÂ¼st ÃƒÂ¼ste ÃƒÂ§akÃ„Â±Ã…Å¸tÃ„Â±rÃ„Â±yoruz. Belirlenen tolerans aralÃ„Â±Ã„Å¸Ã„Â± (ÃƒÂ¶rn. 2cm) dÃ„Â±Ã…Å¸Ã„Â±ndaki sapmalarÃ„Â± renk sÃƒÂ¼zgeci ile raporluyoruz."
            },
            {
                question: "Betonarme dÃƒÂ¶kÃƒÂ¼mÃƒÂ¼ sonrasÃ„Â± kontrol ne kadar sÃƒÂ¼rer?",
                answer: "Tarama iÃ…Å¸lemi sahanÃ„Â±n boyutuna gÃƒÂ¶re 1-4 saat sÃƒÂ¼rer. Verinin iÃ…Å¸lenmesi ve sapma raporunun hazÃ„Â±rlanmasÃ„Â± ise genellikle ertesi gÃƒÂ¼n tamamlanarak tarafÃ„Â±nÃ„Â±za sunulur. Bu sayede hata varsa bir sonraki imalata geÃƒÂ§ilmeden mÃƒÂ¼dahale edilebilir."
            },
            {
                question: "HakediÃ…Å¸ hesaplarÃ„Â±nda kullanabilir miyiz?",
                answer: "Evet, nokta bulutu ÃƒÂ¼zerinden yapÃ„Â±lan hacim ve alan hesaplarÃ„Â± ÃƒÂ§ok yÃƒÂ¼ksek doÃ„Å¸rulukludur. Ãƒâ€“zellikle hafriyat, dolgu veya beton metrajlarÃ„Â±nÃ„Â±n hakediÃ…Å¸e esas teÃ…Å¸kil edecek Ã…Å¸ekilde hesaplanmasÃ„Â±nda gÃƒÂ¼venle kullanÃ„Â±labilir."
            }
        ]
    }
];
