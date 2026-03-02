/**
 * EOS Proje - Page Test Script
 * 
 * Bu script, sitedeki tüm sayfaların erişilebilirliğini test eder.
 * Kullanım: node test-pages.js
 * 
 * Not: Önce `npm run build && npm start` ile sunucuyu başlatın.
 */

const http = require('http');
const https = require('https');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// Test edilecek sayfalar
const pages = [
  // Türkçe Ana Sayfalar
  '/',
  '/hakkimizda',
  '/ekip',
  '/iletisim',
  '/cozumler',
  '/sektorler',
  '/referanslar',
  '/blog',
  '/sss',
  '/kaynaklar',
  
  // Türkçe Yeni Çözüm Sayfaları
  '/cozumler/scan-to-bim',
  '/cozumler/lazer-tarama',
  '/cozumler/dijital-ikiz',
  '/cozumler/bim-modelleme',
  '/cozumler/hbim',
  '/cozumler/cakisma-tespiti',
  
  // Türkçe Diğer Çözümler
  '/cozumler/point-cloud-to-bim',
  '/cozumler/as-built-modeling',
  '/cozumler/2d-to-3d-bim-conversion',
  '/cozumler/industrial-equipment-modeling',
  
  // İngilizce Ana Sayfalar
  '/en',
  '/en/about',
  '/en/team',
  '/en/contact',
  '/en/solutions',
  '/en/sectors',
  '/en/references',
  '/en/blog',
  '/en/faq',
  '/en/resources',
  
  // İngilizce Yeni Çözüm Sayfaları
  '/en/solutions/scan-to-bim',
  '/en/solutions/laser-scanning',
  '/en/solutions/digital-twin',
  '/en/solutions/bim-modeling',
  '/en/solutions/hbim',
  '/en/solutions/clash-detection',
  
  // İngilizce Diğer Çözümler
  '/en/solutions/point-cloud-to-bim',
  '/en/solutions/as-built-modeling',
  '/en/solutions/2d-to-3d-bim-conversion',
  '/en/solutions/industrial-equipment-modeling',
  
  // SEO Dosyaları
  '/sitemap.xml',
  '/robots.txt',
];

async function testPage(url) {
  return new Promise((resolve) => {
    const fullUrl = BASE_URL + url;
    const client = fullUrl.startsWith('https') ? https : http;
    
    const request = client.get(fullUrl, (response) => {
      resolve({
        url,
        status: response.statusCode,
        ok: response.statusCode >= 200 && response.statusCode < 400
      });
    });
    
    request.on('error', (error) => {
      resolve({
        url,
        status: 'ERROR',
        ok: false,
        error: error.message
      });
    });
    
    request.setTimeout(10000, () => {
      request.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        ok: false
      });
    });
  });
}

async function runTests() {
  console.log('='.repeat(60));
  console.log('EOS Proje - Sayfa Test Raporu');
  console.log('Base URL:', BASE_URL);
  console.log('Test Tarihi:', new Date().toLocaleString('tr-TR'));
  console.log('='.repeat(60));
  console.log('');
  
  const results = {
    passed: 0,
    failed: 0,
    errors: []
  };
  
  for (const page of pages) {
    const result = await testPage(page);
    
    if (result.ok) {
      console.log(`✅ [${result.status}] ${result.url}`);
      results.passed++;
    } else {
      console.log(`❌ [${result.status}] ${result.url}${result.error ? ' - ' + result.error : ''}`);
      results.failed++;
      results.errors.push(result);
    }
  }
  
  console.log('');
  console.log('='.repeat(60));
  console.log('ÖZET');
  console.log('='.repeat(60));
  console.log(`Toplam Test: ${pages.length}`);
  console.log(`Başarılı: ${results.passed}`);
  console.log(`Başarısız: ${results.failed}`);
  console.log('');
  
  if (results.errors.length > 0) {
    console.log('HATALI SAYFALAR:');
    results.errors.forEach(e => {
      console.log(`  - ${e.url} (${e.status})`);
    });
  } else {
    console.log('🎉 Tüm testler başarılı!');
  }
  
  console.log('='.repeat(60));
  
  // Exit code
  process.exit(results.failed > 0 ? 1 : 0);
}

// Check if server is running
console.log('Sunucu kontrolü yapılıyor...');
const client = BASE_URL.startsWith('https') ? https : http;

client.get(BASE_URL, (res) => {
  console.log('Sunucu erişilebilir. Testler başlıyor...\n');
  runTests();
}).on('error', () => {
  console.log('');
  console.log('❌ HATA: Sunucu erişilemiyor!');
  console.log('');
  console.log('Lütfen aşağıdaki adımları izleyin:');
  console.log('1. npm run build');
  console.log('2. npm start');
  console.log('3. node test-pages.js');
  console.log('');
  console.log('Veya farklı bir URL için:');
  console.log('BASE_URL=https://eosproje.com node test-pages.js');
  process.exit(1);
});
