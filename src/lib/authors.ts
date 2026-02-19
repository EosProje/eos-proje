export const AUTHORS: Record<string, {
    name: string;
    role: string;
    description: string;
    image: string;
    linkedin?: string;
}> = {
    "Uğur Bilen": {
        name: "Uğur Bilen",
        role: "Kurucu & Kıdemli 3D Specialist",
        description: "YTÜ Harita Mühendisliği mezunu. 20 yıllık sektör tecrübesiyle 50+ büyük ölçekli as-built projesini yönetti. Lazer Tarama, Drone ve Revit uzmanı.",
        image: "/images/team/ugur-bilen.webp",
        linkedin: "https://linkedin.com/in/ugur-bilen"
    },
    "Öykü Hun": {
        name: "Öykü Hun",
        role: "Operasyon Direktörü",
        description: "İTÜ Yüksek Geomatik Mühendisliği mezunu. Modelleme, Six Sigma ve Planlama uzmanı. Lazer tarama ve fotogrametri süreçlerini yönetiyor.",
        image: "/images/team/oyku-hun.webp",
        linkedin: "https://linkedin.com/in/oykuhun"
    },
    "Kamil Serin": {
        name: "Kamil Serin",
        role: "Veri & Kalite Koordinatörü",
        description: "20 yıl sektör tecrübesi. Lazer Tarama, Data Proses ve modelleme süreçlerinde uzmanlaşmış mühendislik tecrübesine sahiptir.",
        image: "/images/team/kamil-serin.webp",
    },
    "Yasin Demirci": {
        name: "Yasin Demirci",
        role: "Nokta Bulutu İşleme Uzmanı",
        description: "Jeodezi ve Fotogrametri mezunu. Faro Scene ve ReCap yazılımlarında veri temizliği ve registration konularında uzmandır.",
        image: "/images/team/yasin-demirci.webp",
    },
    "Utku Karaman": {
        name: "Utku Karaman",
        role: "MEP Modelleme Uzmanı",
        description: "İTÜ Makina Mühendisliği mezunu. Scan to MEP ve endüstriyel 3D çizim modelleme süreçlerini yönetmektedir.",
        image: "/images/team/utku-karaman.webp",
    },
    "Melis Melike Begdeş": {
        name: "Melis Melike Begdeş",
        role: "Modelleme Uzmanı",
        description: "Işık Üniversitesi Mimarlık mezunu. Tarihi yapı restorasyon projeleri, nokta bulutu ve fotogrametri süreçlerinde uzmandır.",
        image: "/images/team/melis-melike-begdes.webp",
    }
};

// Fallback for legacy keys if any
AUTHORS["Öykü"] = AUTHORS["Öykü Hun"];
AUTHORS["Kamil"] = AUTHORS["Kamil Serin"];
AUTHORS["Yasin"] = AUTHORS["Yasin Demirci"];
