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
        slug: 'point-cloud-to-bim-process',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-point-cloud-to-bim-modelleme.webp'
    },
    {
        id: '2',
        title: 'LOD Seviyeleri: 200, 300 ve 400 Arasındaki Farklar',
        excerpt: 'BIM projelerinde LOD seviyelerinin önemi ve proje gereksinimlerine göre doğru seviye seçimi.',
        date: '2026-01-10',
        category: 'Standartlar',
        slug: 'lod-levels-differences',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-Lazer-Tarama-Sistemleri-3D-Model.webp'
    },
    {
        id: '3',
        title: 'Endüstriyel Tesislerde As-Built Modelleme',
        excerpt: 'Fabrika ve enerji santrallerinde mevcut durum tespiti için lazer tarama ve BIM entegrasyonu.',
        date: '2026-01-05',
        category: 'Endüstri',
        slug: 'industrial-as-built-modeling',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-Endustriyel-Tesis-3B-Lazer-Tarama-Fabrika.webp'
    },
    {
        id: '4',
        title: 'Çakışma Analizi (Clash Detection) ile Maliyet Tasarrufu',
        excerpt: 'Kalite güvencesi için nokta bulutu ile model arasındaki çakışmaların analizi ve raporlanması.',
        date: '2025-12-28',
        category: 'QA/QC',
        slug: 'cakisma-analizi-maliyet',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-migros-3d-lazer-tarama-bim-model.webp'
    },
    {
        id: '5',
        title: 'Tarihi Yapılarda Lazer Tarama (HBIM) Teknolojisi',
        excerpt: 'Tarihi yapıların lazer tarama ile belgelenmesi ve koruma kurulu dosyası hazırlığı.',
        date: '2025-12-20',
        category: 'Restorasyon',
        slug: 'tarihi-eser-hbim',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-Lazer-Tarama-Sistemleri-Cevahir-Avm-3D-Mimari-Rolove.webp'
    },
    {
        id: '6',
        title: '2D CAD Çizimlerinden 3D BIM Modeline Geçiş',
        excerpt: 'Mevcut DWG ve PDF çizimlerinden parametrik 3D BIM modeli oluşturma süreci.',
        date: '2025-12-15',
        category: 'BIM',
        slug: '2d-cad-to-3d-bim-transition',
        author: 'Eos Proje Ekibi',
        image: '/images/EosProje-sokak-siluet-3d-model-calismasi.webp'
    }
];

export function getRandomPosts(count: number = 3): BlogPost[] {
    const shuffled = [...blogPosts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}
