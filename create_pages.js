const fs = require('fs');
const path = require('path');

const pages = [
    { path: 'src/app/cozumler/page.tsx', title: 'Çözümlerimiz', desc: 'Tüm modelleme ve veri işleme çözümlerimiz.' },
    { path: 'src/app/cozumler/point-cloud-to-bim/page.tsx', title: 'Point Cloud to BIM', desc: 'Lazer tarama verisinden Revit/IFC modeli üretimi.' },
    { path: 'src/app/cozumler/as-built-modelleme/page.tsx', title: 'As-built Modelleme', desc: 'Mevcut yapıların CAD/BIM dokümantasyonu.' },
    { path: 'src/app/cozumler/2d-to-3d-bim-donusum/page.tsx', title: '2D to 3D/BIM Dönüşüm', desc: 'CAD çizimlerinden 3D model ve BIM üretimi.' },
    { path: 'src/app/cozumler/endustriyel-ekipman-modelleme/page.tsx', title: 'Endüstriyel Ekipman Modelleme', desc: 'MEP ve ekipman için detaylı 3D model.' },
    { path: 'src/app/sektorler/page.tsx', title: 'Sektörler', desc: 'Hizmet verdiğimiz sektörler.' },
    { path: 'src/app/sektorler/mimarlik/page.tsx', title: 'Mimarlık', desc: 'Mimari projeler için as-built çözümler.' },
    { path: 'src/app/sektorler/renovasyon/page.tsx', title: 'Renovasyon Projeleri', desc: 'Yenileme projeleri için detaylı modelleme.' },
    { path: 'src/app/sektorler/insaat-taahhut/page.tsx', title: 'İnşaat & Taahhüt', desc: 'Şantiye koordinasyonu ve BIM.' },
    { path: 'src/app/sektorler/endustriyel-tesis/page.tsx', title: 'Endüstriyel Tesis', desc: 'Fabrika ve tesis modelleme.' },
    { path: 'src/app/sektorler/restorasyon/page.tsx', title: 'Restorasyon & Kültürel Miras', desc: 'Tarihi yapı belgelenmesi.' },
    { path: 'src/app/surec-ve-standartlar/page.tsx', title: 'Süreç & Standartlar', desc: 'İş akışımız ve kalite standartlarımız.' },
    { path: 'src/app/qa-qc/page.tsx', title: 'QA/QC', desc: 'Kalite kontrol ve güvence süreçleri.' },
    { path: 'src/app/referanslar/page.tsx', title: 'Referanslar', desc: 'Tamamlanan projelerimiz.' },
    { path: 'src/app/hakkimizda/page.tsx', title: 'Hakkımızda', desc: 'Eos Proje hakkında.' },
    { path: 'src/app/iletisim/page.tsx', title: 'İletişim', desc: 'Bizimle iletişime geçin.' },
    { path: 'src/app/sss/page.tsx', title: 'Sıkça Sorulan Sorular', desc: 'Merak edilenler.' },
    { path: 'src/app/blog/page.tsx', title: 'Blog', desc: 'Sektörel haberler ve güncellemeler.' },
];

function getTemplate(title, desc) {
    return 'export default function Page() {\n' +
        '  return (\n' +
        '    <div className="min-h-screen bg-[var(--color-soft-bg)] pt-20">\n' +
        '      <div className="bg-[var(--color-deep-charcoal)] text-white py-20 px-4">\n' +
        '        <div className="max-w-7xl mx-auto text-center">\n' +
        '          <h1 className="text-4xl md:text-5xl font-bold mb-4">' + title + '</h1>\n' +
        '          <p className="text-xl text-slate-400 max-w-2xl mx-auto">' + desc + '</p>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '      <div className="max-w-7xl mx-auto px-4 py-12">\n' +
        '        <div className="bg-white rounded-xl shadow-sm p-8 min-h-[400px] flex items-center justify-center border border-slate-100">\n' +
        '          <p className="text-slate-500">Bu sayfa yapım aşamasındadır. İçerik yakında eklenecektir.</p>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  );\n' +
        '}';
}

pages.forEach(page => {
    const fullPath = path.join(process.cwd(), page.path);
    fs.writeFileSync(fullPath, getTemplate(page.title, page.desc));
    console.log('Created ' + page.path);
});
