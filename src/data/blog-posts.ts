export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    slug: string;
    author?: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Point Cloud to BIM Sürecinde Dikkat Edilmesi Gerekenler',
        excerpt: 'Lazer tarama verilerinden BIM modeli oluştururken kalite ve doğruluk için önemli noktalar.',
        date: '2026-01-15',
        category: 'BIM',
        slug: 'point-cloud-to-bim-sureci',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-point-cloud-to-bim-modelleme.png'
    },
    {
        id: '2',
        title: 'LOD Seviyeleri: 200, 300 ve 400 Arasındaki Farklar',
        excerpt: 'BIM projelerinde LOD seviyelerinin önemi ve proje gereksinimlerine göre doğru seviye seçimi.',
        date: '2026-01-10',
        category: 'Standartlar',
        slug: 'lod-seviyeleri-farklari',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-Lazer-Tarama-Sistemleri-3D-Model.jpeg'
    },
    {
        id: '3',
        title: 'Endüstriyel Tesislerde As-Built Modelleme',
        excerpt: 'Fabrika ve enerji santrallerinde mevcut durum tespiti için lazer tarama ve BIM entegrasyonu.',
        date: '2026-01-05',
        category: 'Endüstri',
        slug: 'endustriyel-as-built-modelleme',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-Endustriyel-Tesis-3B-Lazer-Tarama-Fabrika.jpg'
    },
    {
        id: '4',
        title: 'QA/QC Sürecinde Cloud-to-Model Sapma Kontrolü',
        excerpt: 'Kalite güvencesi için nokta bulutu ile model arasındaki sapmaların ölçülmesi ve raporlanması.',
        date: '2025-12-28',
        category: 'QA/QC',
        slug: 'cloud-to-model-sapma-kontrolu',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-migros-3d-lazer-tarama-bim-model.png'
    },
    {
        id: '5',
        title: 'Restorasyon Projelerinde Dijital Dokümantasyon',
        excerpt: 'Tarihi yapıların lazer tarama ile belgelenmesi ve koruma kurulu dosyası hazırlığı.',
        date: '2025-12-20',
        category: 'Restorasyon',
        slug: 'restorasyon-dijital-dokumantasyon',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-Lazer-Tarama-Sistemleri-Cevahir-Avm-3D-Mimari-Rolove.jpeg'
    },
    {
        id: '6',
        title: '2D CAD Çizimlerinden 3D BIM Modeline Geçiş',
        excerpt: 'Mevcut DWG ve PDF çizimlerinden parametrik 3D BIM modeli oluşturma süreci.',
        date: '2025-12-15',
        category: 'BIM',
        slug: '2d-cad-3d-bim-gecis',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-sokak-siluet-3d-model-calismasi.jpg'
    }
];

export function getRandomPosts(count: number = 3): BlogPost[] {
    const shuffled = [...blogPosts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}
