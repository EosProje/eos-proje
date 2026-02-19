export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    description: string;
    category: string;
    results: string[];
    stats?: {
        area?: string;
        duration?: string;
        lod?: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        id: '1',
        title: 'Tarihi Bina Restorasyon Projesi',
        client: 'Belediye Başkanlığı',
        description: 'XVIII. yüzyıla ait tarihi konağın lazer tarama ile belgelenmesi ve koruma kurulu dosyası hazırlığı.',
        category: 'Restorasyon',
        results: [
            'LOD 400 seviyesinde detaylı BIM modeli',
            'Deformasyon analizi raporu',
            'Koruma kurulu onaylı dokümantasyon'
        ],
        stats: {
            area: '1,200 m²',
            duration: '3 ay',
            lod: '400'
        }
    },
    {
        id: '2',
        title: 'Enerji Santrali MEP Modelleme',
        client: 'Enerji A.Ş.',
        description: 'Doğalgaz kombine çevrim santralinde mevcut ekipman ve boru hatlarının as-built BIM modeli.',
        category: 'Endüstriyel',
        results: [
            '15,000+ ekipman modellendi',
            'Clash detection ile 200+ çakışma tespiti',
            'İşletme için interactive 3D model'
        ],
        stats: {
            area: '8,500 m²',
            duration: '6 ay',
            lod: '300'
        }
    },
    {
        id: '3',
        title: 'AVM Renovasyon Projesi',
        client: 'Retail Group',
        description: 'Aktif AVM\'nin iç mekan yenileme projesi için mevcut durum tespiti ve modelleme.',
        category: 'Mimari',
        results: [
            'Nokta bulutu: 2mm doğruluk',
            'Tüm kat planları ve kesitler',
            'Revit + IFC + DWG teslimat'
        ],
        stats: {
            area: '12,000 m²',
            duration: '2 ay',
            lod: '200'
        }
    },
    {
        id: '4',
        title: 'Fabrika Genişletme Projesi',
        client: 'Üretim San. Tic. A.Ş.',
        description: 'Mevcut üretim tesisinin genişletme projesi için as-built dokümantasyon ve koordinasyon.',
        category: 'Endüstriyel',
        results: [
            'Yapısal ve MEP koordinasyonu',
            'Navisworks collision raporu',
            'Şantiye için 4D simülasyon'
        ],
        stats: {
            area: '5,400 m²',
            duration: '4 ay',
            lod: '300'
        }
    },
    {
        id: '5',
        title: 'Ofis Binası BIM Dönüşümü',
        client: 'Holding A.Ş.',
        description: 'Eski CAD çizimlerinden modern BIM modeline geçiş ve facility management entegrasyonu.',
        category: 'Mimari',
        results: [
            'Tüm mimari + MEP sistemler',
            'FM için detaylı metadata',
            'Revit + IFC teslimat'
        ],
        stats: {
            area: '18,000 m²',
            duration: '5 ay',
            lod: '300'
        }
    },
    {
        id: '6',
        title: 'Köprü Restorasyon Dokümantasyonu',
        client: 'Karayolları Genel Müdürlüğü',
        description: 'Tarihi taş köprünün hasar tespiti ve restorasyon projesi için detaylı 3D dokümantasyon.',
        category: 'Restorasyon',
        results: [
            'Yüksek çözünürlüklü 3D model',
            'Hasar haritaları',
            'Statik analiz için veri'
        ],
        stats: {
            area: '450 m²',
            duration: '2 ay',
            lod: '400'
        }
    }
];
