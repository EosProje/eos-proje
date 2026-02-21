export const AUTHORS: Record<string, {
    name: string;
    role: string;
    description: string;
    image: string;
    linkedin?: string;
}> = {
    "UÃ„Å¸ur Bilen": {
        name: "UÃ„Å¸ur Bilen",
        role: "Kurucu & KÃ„Â±demli 3D Specialist",
        description: "YTÃƒÅ“ Harita MÃƒÂ¼hendisliÃ„Å¸i mezunu. 20 yÃ„Â±llÃ„Â±k sektÃƒÂ¶r tecrÃƒÂ¼besiyle 50+ bÃƒÂ¼yÃƒÂ¼k ÃƒÂ¶lÃƒÂ§ekli as-built projesini yÃƒÂ¶netti. Lazer Tarama, Drone ve Revit uzmanÃ„Â±.",
        image: "/images/team/ugur-bilen.webp",
        linkedin: "https://linkedin.com/in/ugur-bilen"
    },
    "Ãƒâ€“ykÃƒÂ¼ Hun": {
        name: "Ãƒâ€“ykÃƒÂ¼ Hun",
        role: "Operasyon DirektÃƒÂ¶rÃƒÂ¼",
        description: "Ã„Â°TÃƒÅ“ YÃƒÂ¼ksek Geomatik MÃƒÂ¼hendisliÃ„Å¸i mezunu. Modelleme, Six Sigma ve Planlama uzmanÃ„Â±. Lazer tarama ve fotogrametri sÃƒÂ¼reÃƒÂ§lerini yÃƒÂ¶netiyor.",
        image: "/images/team/oyku-hun.webp",
        linkedin: "https://linkedin.com/in/oykuhun"
    },
    "Kamil Serin": {
        name: "Kamil Serin",
        role: "Veri & Kalite KoordinatÃƒÂ¶rÃƒÂ¼",
        description: "20 yÃ„Â±l sektÃƒÂ¶r tecrÃƒÂ¼besi. Lazer Tarama, Data Proses ve modelleme sÃƒÂ¼reÃƒÂ§lerinde uzmanlaÃ…Å¸mÃ„Â±Ã…Å¸ mÃƒÂ¼hendislik tecrÃƒÂ¼besine sahiptir.",
        image: "/images/team/kamil-serin.webp",
    },
    "Yasin Demirci": {
        name: "Yasin Demirci",
        role: "Nokta Bulutu Ã„Â°Ã…Å¸leme UzmanÃ„Â±",
        description: "Jeodezi ve Fotogrametri mezunu. Faro Scene ve ReCap yazÃ„Â±lÃ„Â±mlarÃ„Â±nda veri temizliÃ„Å¸i ve registration konularÃ„Â±nda uzmandÃ„Â±r.",
        image: "/images/team/yasin-demirci.webp",
    },
    "Utku Karaman": {
        name: "Utku Karaman",
        role: "MEP Modelleme UzmanÃ„Â±",
        description: "Ã„Â°TÃƒÅ“ Makina MÃƒÂ¼hendisliÃ„Å¸i mezunu. Scan to MEP ve endÃƒÂ¼striyel 3D ÃƒÂ§izim modelleme sÃƒÂ¼reÃƒÂ§lerini yÃƒÂ¶netmektedir.",
        image: "/images/team/utku-karaman.webp",
    },
    "Melis Melike BegdeÃ…Å¸": {
        name: "Melis Melike BegdeÃ…Å¸",
        role: "Modelleme UzmanÃ„Â±",
        description: "IÃ…Å¸Ã„Â±k ÃƒÅ“niversitesi MimarlÃ„Â±k mezunu. Tarihi yapÃ„Â± restorasyon projeleri, nokta bulutu ve fotogrametri sÃƒÂ¼reÃƒÂ§lerinde uzmandÃ„Â±r.",
        image: "/images/team/melis-melike-begdes.webp",
    }
};

// Fallback for legacy keys if any
AUTHORS["Ãƒâ€“ykÃƒÂ¼"] = AUTHORS["Ãƒâ€“ykÃƒÂ¼ Hun"];
AUTHORS["Kamil"] = AUTHORS["Kamil Serin"];
AUTHORS["Yasin"] = AUTHORS["Yasin Demirci"];
