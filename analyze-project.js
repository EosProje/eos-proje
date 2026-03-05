const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

// Get all source files
function getAllSourceFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.includes('node_modules') && !item.name.includes('.next')) {
      files.push(...getAllSourceFiles(fullPath, extensions));
    } else if (item.isFile() && extensions.some(ext => item.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

// 1. ANALYZE IMAGES
function analyzeImages() {
  console.log(`\n${colors.cyan}=== 1. EKSİK GÖRSEL DOSYALARI ANALİZİ ===${colors.reset}\n`);
  
  const files = getAllSourceFiles('./src');
  const missingImages = [];
  const checkedPaths = new Set();
  
  const imagePatterns = [
    /<Image[^>]*src=["']([^"']+)["']/g,
    /<img[^>]*src=["']([^"']+)["']/g,
    /src:\s*["']([^"']+\.(png|jpg|jpeg|webp|gif|svg))["']/g,
    /image:\s*["']([^"']+\.(png|jpg|jpeg|webp|gif|svg))["']/g,
    /backgroundImage:\s*["']url\(([^)]+)\)["']/g,
    /url\(["']?([^"')\s]+\.(png|jpg|jpeg|webp|gif|svg))["']?\)/g,
  ];
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    
    imagePatterns.forEach(pattern => {
      let match;
      const regex = new RegExp(pattern.source, pattern.flags);
      while ((match = regex.exec(content)) !== null) {
        let imagePath = match[1];
        
        // Skip external URLs and data URIs
        if (imagePath.startsWith('http') || imagePath.startsWith('data:') || imagePath.startsWith('//')) continue;
        
        // Skip dynamic paths
        if (imagePath.includes('${') || imagePath.includes('{') || imagePath.includes('`')) continue;
        
        // Clean path
        imagePath = imagePath.replace(/['"]/g, '').trim();
        
        // Build unique key
        const checkKey = `${file}:${imagePath}`;
        if (checkedPaths.has(checkKey)) continue;
        checkedPaths.add(checkKey);
        
        // Check if file exists
        let fullPath;
        if (imagePath.startsWith('/')) {
          fullPath = path.join(process.cwd(), 'public', imagePath);
        } else {
          continue; // Skip relative paths for now
        }
        
        if (!fs.existsSync(fullPath)) {
          const relFile = file.replace(process.cwd() + '/', '');
          missingImages.push({
            file: relFile,
            imagePath: imagePath,
            expectedLocation: `public${imagePath}`,
          });
        }
      }
    });
  });
  
  // Deduplicate
  const uniqueMissing = [];
  const seen = new Set();
  missingImages.forEach(img => {
    const key = img.imagePath;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueMissing.push(img);
    }
  });
  
  if (uniqueMissing.length === 0) {
    console.log(`${colors.green}✅ Tüm görsel dosyaları mevcut!${colors.reset}\n`);
  } else {
    console.log(`${colors.red}❌ ${uniqueMissing.length} eksik görsel dosyası bulundu:${colors.reset}\n`);
    uniqueMissing.forEach((img, i) => {
      console.log(`${i+1}. ${colors.yellow}${img.imagePath}${colors.reset}`);
      console.log(`   Kullanıldığı dosya: ${img.file}`);
      console.log(`   Olması gereken: ${img.expectedLocation}\n`);
    });
  }
  
  return uniqueMissing;
}

// 2. ANALYZE OG IMAGES
function analyzeOGImages() {
  console.log(`\n${colors.cyan}=== 2. META TAG (OG IMAGE) KONTROLÜ ===${colors.reset}\n`);
  
  const files = getAllSourceFiles('./src');
  const missingOGImages = [];
  const checkedPaths = new Set();
  
  const ogPatterns = [
    /openGraph:\s*\{[^}]*images:\s*\[?\s*["']([^"']+)["']/gs,
    /openGraph:\s*\{[^}]*images:\s*\[\s*\{[^}]*url:\s*["']([^"']+)["']/gs,
    /twitter:\s*\{[^}]*images:\s*\[?\s*["']([^"']+)["']/gs,
    /property=["']og:image["'][^>]*content=["']([^"']+)["']/g,
    /name=["']twitter:image["'][^>]*content=["']([^"']+)["']/g,
    /ogImage:\s*["']([^"']+)["']/g,
    /image:\s*["']\/images\/og\/([^"']+)["']/g,
  ];
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    
    ogPatterns.forEach(pattern => {
      let match;
      const regex = new RegExp(pattern.source, pattern.flags);
      while ((match = regex.exec(content)) !== null) {
        let imagePath = match[1];
        
        // Skip external URLs
        if (imagePath.startsWith('http') || imagePath.startsWith('${')) continue;
        
        // Build check key
        const checkKey = `${file}:${imagePath}`;
        if (checkedPaths.has(checkKey)) continue;
        checkedPaths.add(checkKey);
        
        // Check if file exists
        let fullPath;
        if (imagePath.startsWith('/')) {
          fullPath = path.join(process.cwd(), 'public', imagePath);
        } else if (imagePath.startsWith('images/')) {
          fullPath = path.join(process.cwd(), 'public', imagePath);
          imagePath = '/' + imagePath;
        } else {
          continue;
        }
        
        if (!fs.existsSync(fullPath)) {
          const relFile = file.replace(process.cwd() + '/', '');
          missingOGImages.push({
            file: relFile,
            imagePath: imagePath,
            expectedLocation: `public${imagePath}`,
          });
        }
      }
    });
  });
  
  // Deduplicate
  const uniqueMissing = [];
  const seen = new Set();
  missingOGImages.forEach(img => {
    const key = img.imagePath;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueMissing.push(img);
    }
  });
  
  if (uniqueMissing.length === 0) {
    console.log(`${colors.green}✅ Tüm OG image dosyaları mevcut!${colors.reset}\n`);
  } else {
    console.log(`${colors.red}❌ ${uniqueMissing.length} eksik OG image dosyası bulundu:${colors.reset}\n`);
    uniqueMissing.forEach((img, i) => {
      console.log(`${i+1}. ${colors.yellow}${img.imagePath}${colors.reset}`);
      console.log(`   Kullanıldığı dosya: ${img.file}`);
      console.log(`   Olması gereken: ${img.expectedLocation}\n`);
    });
  }
  
  return uniqueMissing;
}

// 3. ANALYZE BROKEN LINKS
function analyzeBrokenLinks() {
  console.log(`\n${colors.cyan}=== 3. KIRIK LİNK VE YÖNLENDİRME HATALARI ===${colors.reset}\n`);
  
  const files = getAllSourceFiles('./src');
  const issues = [];
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const relFile = file.replace(process.cwd() + '/', '');
    const isEnglishFile = relFile.includes('/en/');
    
    // Find href patterns
    const hrefPattern = /href=["']([^"']+)["']/g;
    let match;
    
    while ((match = hrefPattern.exec(content)) !== null) {
      const href = match[1];
      
      // Skip external, mailto, tel, hash, dynamic
      if (href.startsWith('http') || href.startsWith('mailto:') || 
          href.startsWith('tel:') || href.startsWith('#') ||
          href.includes('${') || href.includes('{')) continue;
      
      // Check language mismatch
      const isEnglishLink = href.startsWith('/en/') || href === '/en';
      const isTurkishLink = !isEnglishLink && href.startsWith('/');
      
      if (isEnglishFile && isTurkishLink && href !== '/' && !href.includes('downloads') && !href.includes('images')) {
        issues.push({
          file: relFile,
          href: href,
          issue: 'Dil uyumsuzluğu: İngilizce sayfadan Türkçe linke',
          suggestion: `Link'i /en${href} olarak değiştirin`,
        });
      }
      
      // Check for Turkish characters in URLs
      if (/[İıĞğÜüŞşÖöÇç]/.test(href)) {
        issues.push({
          file: relFile,
          href: href,
          issue: 'URL\'de Türkçe karakter var',
          suggestion: 'URL\'yi ASCII karakterlerle değiştirin',
        });
      }
    }
  });
  
  // Deduplicate
  const uniqueIssues = [];
  const seen = new Set();
  issues.forEach(issue => {
    const key = `${issue.file}:${issue.href}:${issue.issue}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueIssues.push(issue);
    }
  });
  
  if (uniqueIssues.length === 0) {
    console.log(`${colors.green}✅ Link hatası bulunamadı!${colors.reset}\n`);
  } else {
    console.log(`${colors.red}❌ ${uniqueIssues.length} potansiyel link hatası bulundu:${colors.reset}\n`);
    uniqueIssues.forEach((issue, i) => {
      console.log(`${i+1}. ${colors.yellow}${issue.href}${colors.reset}`);
      console.log(`   Dosya: ${issue.file}`);
      console.log(`   Sorun: ${issue.issue}`);
      console.log(`   Öneri: ${issue.suggestion}\n`);
    });
  }
  
  return uniqueIssues;
}

// Generate Markdown Report
function generateReport(missingImages, missingOGImages, brokenLinks) {
  let report = `# EOSPROJE - Kapsamlı Proje Analizi Raporu

**Tarih:** ${new Date().toLocaleString('tr-TR')}

---

## 📊 Genel Durum

| Kategori | Durum | Sayı |
|----------|-------|------|
| Eksik Görsel Dosyaları | ${missingImages.length === 0 ? '✅' : '❌'} | ${missingImages.length} |
| Eksik OG Image Dosyaları | ${missingOGImages.length === 0 ? '✅' : '❌'} | ${missingOGImages.length} |
| Kırık Link Hataları | ${brokenLinks.length === 0 ? '✅' : '❌'} | ${brokenLinks.length} |

---

## 1️⃣ Eksik Görsel Dosyaları

`;

  if (missingImages.length === 0) {
    report += `✅ **Tüm görsel dosyaları mevcut!**\n\n`;
  } else {
    report += `❌ **${missingImages.length} eksik görsel dosyası bulundu:**\n\n`;
    report += `| # | Görsel Yolu | Kullanıldığı Dosya | Olması Gereken Konum |\n`;
    report += `|---|-------------|-------------------|---------------------|\n`;
    missingImages.forEach((img, i) => {
      report += `| ${i+1} | \`${img.imagePath}\` | \`${img.file}\` | \`${img.expectedLocation}\` |\n`;
    });
    report += `\n`;
  }

  report += `---

## 2️⃣ Eksik OG Image Dosyaları

`;

  if (missingOGImages.length === 0) {
    report += `✅ **Tüm OG image dosyaları mevcut!**\n\n`;
  } else {
    report += `❌ **${missingOGImages.length} eksik OG image dosyası bulundu:**\n\n`;
    report += `| # | OG Image Yolu | Kullanıldığı Dosya | Olması Gereken Konum |\n`;
    report += `|---|---------------|-------------------|---------------------|\n`;
    missingOGImages.forEach((img, i) => {
      report += `| ${i+1} | \`${img.imagePath}\` | \`${img.file}\` | \`${img.expectedLocation}\` |\n`;
    });
    report += `\n`;
  }

  report += `---

## 3️⃣ Kırık Link ve Yönlendirme Hataları

`;

  if (brokenLinks.length === 0) {
    report += `✅ **Link hatası bulunamadı!**\n\n`;
  } else {
    report += `❌ **${brokenLinks.length} potansiyel link hatası bulundu:**\n\n`;
    report += `| # | Link | Dosya | Sorun | Öneri |\n`;
    report += `|---|------|-------|-------|-------|\n`;
    brokenLinks.forEach((link, i) => {
      report += `| ${i+1} | \`${link.href}\` | \`${link.file}\` | ${link.issue} | ${link.suggestion} |\n`;
    });
    report += `\n`;
  }

  report += `---

## 🔧 Öneriler

### Eksik Görseller İçin:
1. Belirtilen yollara uygun görselleri ekleyin
2. Görsel boyutları: OG images için 1200x630 px önerilir
3. WebP formatı tercih edilmeli (dosya boyutu optimizasyonu)

### Link Hataları İçin:
1. İngilizce sayfalardaki Türkçe linkleri düzeltin
2. URL'lerdeki Türkçe karakterleri ASCII'ye dönüştürün
3. Dil tutarlılığını koruyun

---

*Bu rapor otomatik olarak oluşturulmuştur.*
`;

  fs.writeFileSync('PROJECT_ANALYSIS_REPORT.md', report);
  console.log(`\n${colors.green}✅ Detaylı rapor oluşturuldu: PROJECT_ANALYSIS_REPORT.md${colors.reset}\n`);
}

// Main
console.log(`${colors.magenta}
╔═══════════════════════════════════════════════════════════╗
║   EOSPROJE - KAPSAMLI PROJE ANALİZİ                      ║
║   Eksik Görseller, OG Images ve Kırık Linkler            ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}`);

const missingImages = analyzeImages();
const missingOGImages = analyzeOGImages();
const brokenLinks = analyzeBrokenLinks();

generateReport(missingImages, missingOGImages, brokenLinks);

console.log(`\n${colors.magenta}=== ÖZET ===${colors.reset}`);
console.log(`Eksik Görsel Dosyaları: ${missingImages.length === 0 ? colors.green + '✅ 0' : colors.red + '❌ ' + missingImages.length}${colors.reset}`);
console.log(`Eksik OG Image Dosyaları: ${missingOGImages.length === 0 ? colors.green + '✅ 0' : colors.red + '❌ ' + missingOGImages.length}${colors.reset}`);
console.log(`Potansiyel Link Hataları: ${brokenLinks.length === 0 ? colors.green + '✅ 0' : colors.red + '❌ ' + brokenLinks.length}${colors.reset}`);
