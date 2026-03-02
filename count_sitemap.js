const sitemap = `
// TR Ana Sayfalar
/
/hakkimizda
/ekip
/iletisim

// TR Çözümler
/cozumler
/cozumler/scan-to-bim
/cozumler/point-cloud-to-bim
/cozumler/as-built-modeling
/cozumler/2d-to-3d-bim-conversion
/cozumler/industrial-equipment-modeling
/cozumler/lazer-tarama
/cozumler/dijital-ikiz
/cozumler/bim-modelleme
/cozumler/hbim
/cozumler/cakisma-tespiti

// TR Sektörler
/sektorler

// TR Referanslar
/referanslar

// TR Blog & Bilgi Merkezi
/blog
/sss
/kaynaklar

// TR Hizmetler
/hizmetler/rolove-hizmetleri
/hizmetler/harita-olcme

// TR Süreç & Kalite
/qa-qc
/kalite-politikamiz
/surec-ve-standartlar
/ucretlendirme
/teknik-dokumanlar

// TR Yasal
/kvkk
/gizlilik
/cerez-politikasi

// EN Main Pages
/en
/en/about
/en/team
/en/contact

// EN Solutions
/en/solutions
/en/solutions/scan-to-bim
/en/solutions/point-cloud-to-bim
/en/solutions/as-built-modeling
/en/solutions/2d-to-3d-bim-conversion
/en/solutions/industrial-equipment-modeling
/en/solutions/laser-scanning
/en/solutions/digital-twin
/en/solutions/bim-modeling
/en/solutions/hbim
/en/solutions/clash-detection

// EN Sectors
/en/sectors

// EN References
/en/references

// EN Blog & Info Center
/en/blog
/en/faq
/en/resources

// EN Process & Quality
/en/qa-qc
/en/quality-policy
/en/process-and-standards
/en/pricing
/en/technical-docs

// EN Yasal
/en/gdpr
/en/privacy-policy
/en/cookie-policy

// LLM Files
/llm.txt
/llm-en.txt
`;

const urls = sitemap.split('\n').filter(line => line.startsWith('/') && !line.includes('//'));
console.log('Sitemap static URLs count:', urls.length);
console.log(urls.join('\n'));
