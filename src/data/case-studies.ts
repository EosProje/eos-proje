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
        client: 'Belediye BaÃ…Å¸kanlÃ„Â±Ã„Å¸Ã„Â±',
        description: 'XVIII. yÃƒÂ¼zyÃ„Â±la ait tarihi konaÃ„Å¸Ã„Â±n lazer tarama ile belgelenmesi ve koruma kurulu dosyasÃ„Â± hazÃ„Â±rlÃ„Â±Ã„Å¸Ã„Â±.',
        category: 'Restorasyon',
        results: [
            'LOD 400 seviyesinde detaylÃ„Â± BIM modeli',
            'Deformasyon analizi raporu',
            'Koruma kurulu onaylÃ„Â± dokÃƒÂ¼mantasyon'
        ],
        stats: {
            area: '1,200 mÃ‚Â²',
            duration: '3 ay',
            lod: '400'
        }
    },
    {
        id: '2',
        title: 'Enerji Santrali MEP Modelleme',
        client: 'Enerji A.Ã…Â.',
        description: 'DoÃ„Å¸algaz kombine ÃƒÂ§evrim santralinde mevcut ekipman ve boru hatlarÃ„Â±nÃ„Â±n as-built BIM modeli.',
        category: 'EndÃƒÂ¼striyel',
        results: [
            '15,000+ ekipman modellendi',
            'Clash detection ile 200+ ÃƒÂ§akÃ„Â±Ã…Å¸ma tespiti',
            'Ã„Â°Ã…Å¸letme iÃƒÂ§in interactive 3D model'
        ],
        stats: {
            area: '8,500 mÃ‚Â²',
            duration: '6 ay',
            lod: '300'
        }
    },
    {
        id: '3',
        title: 'AVM Renovasyon Projesi',
        client: 'Retail Group',
        description: 'Aktif AVM\'nin iÃƒÂ§ mekan yenileme projesi iÃƒÂ§in mevcut durum tespiti ve modelleme.',
        category: 'Mimari',
        results: [
            'Nokta bulutu: 2mm doÃ„Å¸ruluk',
            'TÃƒÂ¼m kat planlarÃ„Â± ve kesitler',
            'Revit + IFC + DWG teslimat'
        ],
        stats: {
            area: '12,000 mÃ‚Â²',
            duration: '2 ay',
            lod: '200'
        }
    },
    {
        id: '4',
        title: 'Fabrika GeniÃ…Å¸letme Projesi',
        client: 'ÃƒÅ“retim San. Tic. A.Ã…Â.',
        description: 'Mevcut ÃƒÂ¼retim tesisinin geniÃ…Å¸letme projesi iÃƒÂ§in as-built dokÃƒÂ¼mantasyon ve koordinasyon.',
        category: 'EndÃƒÂ¼striyel',
        results: [
            'YapÃ„Â±sal ve MEP koordinasyonu',
            'Navisworks collision raporu',
            'Ã…Âantiye iÃƒÂ§in 4D simÃƒÂ¼lasyon'
        ],
        stats: {
            area: '5,400 mÃ‚Â²',
            duration: '4 ay',
            lod: '300'
        }
    },
    {
        id: '5',
        title: 'Ofis BinasÃ„Â± BIM DÃƒÂ¶nÃƒÂ¼Ã…Å¸ÃƒÂ¼mÃƒÂ¼',
        client: 'Holding A.Ã…Â.',
        description: 'Eski CAD ÃƒÂ§izimlerinden modern BIM modeline geÃƒÂ§iÃ…Å¸ ve facility management entegrasyonu.',
        category: 'Mimari',
        results: [
            'TÃƒÂ¼m mimari + MEP sistemler',
            'FM iÃƒÂ§in detaylÃ„Â± metadata',
            'Revit + IFC teslimat'
        ],
        stats: {
            area: '18,000 mÃ‚Â²',
            duration: '5 ay',
            lod: '300'
        }
    },
    {
        id: '6',
        title: 'KÃƒÂ¶prÃƒÂ¼ Restorasyon DokÃƒÂ¼mantasyonu',
        client: 'KarayollarÃ„Â± Genel MÃƒÂ¼dÃƒÂ¼rlÃƒÂ¼Ã„Å¸ÃƒÂ¼',
        description: 'Tarihi taÃ…Å¸ kÃƒÂ¶prÃƒÂ¼nÃƒÂ¼n hasar tespiti ve restorasyon projesi iÃƒÂ§in detaylÃ„Â± 3D dokÃƒÂ¼mantasyon.',
        category: 'Restorasyon',
        results: [
            'YÃƒÂ¼ksek ÃƒÂ§ÃƒÂ¶zÃƒÂ¼nÃƒÂ¼rlÃƒÂ¼klÃƒÂ¼ 3D model',
            'Hasar haritalarÃ„Â±',
            'Statik analiz iÃƒÂ§in veri'
        ],
        stats: {
            area: '450 mÃ‚Â²',
            duration: '2 ay',
            lod: '400'
        }
    }
];
