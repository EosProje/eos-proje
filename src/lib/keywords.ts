/**
 * Keywords and Geographic Targets for SEO Optimization
 * EOS Proje - Laser Scanning & BIM Services
 * 
 * Updated: March 2026 - Strategic Market Expansion
 * - Added Gulf region (Saudi Arabia, UAE, Qatar, Kuwait)
 * - Expanded Europe (UK, Italy, Poland, Netherlands)
 * - Added North Africa & Central Asia (Algeria, Egypt, Uzbekistan)
 * - Expanded Turkey (Bursa, Adana, Mersin, Sakarya, Çanakkale)
 */

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export type GeoRegion = 'europe' | 'turkey' | 'middleEast' | 'gulf' | 'northAfricaCentralAsia';

export type ClusterType = 
  | 'scanToBim'
  | 'industrialAndEnergy'
  | 'heritageAndArchitecture'
  | 'mappingAndUAV'
  | 'retailAndCommercial';

export type FunnelType = 
  | 'awareness'
  | 'consideration'
  | 'decision'
  | 'action';

// =============================================================================
// LOCATION DATA INTERFACE - Benzersiz İçerik için
// =============================================================================

export interface LocationData {
  name: { tr: string; en: string };
  slug: { tr: string; en: string };
  region: GeoRegion;
  description: { tr: string; en: string };
  industries: { tr: string[]; en: string[] };
  stats: {
    projects: number;
    experience: string;
  };
  highlights: { tr: string[]; en: string[] };
}

// =============================================================================
// GEOGRAPHIC TARGETS
// =============================================================================

export const geoTargets = {
    europe: {
        tr: ["Almanya", "Romanya", "Macaristan", "Hırvatistan", "İngiltere", "İtalya", "Polonya", "Hollanda"],
        en: ["Germany", "Romania", "Hungary", "Croatia", "United Kingdom", "Italy", "Poland", "Netherlands"]
    },
    turkey: {
        tr: ["İstanbul", "Ankara", "İzmir", "Kocaeli", "İzmit", "Balıkesir", "Eskişehir", "Hatay", "Kahramanmaraş", "Antalya", "Gaziantep", "Rize", "Trabzon", "Diyarbakır", "Bursa", "Adana", "Mersin", "Sakarya", "Çanakkale"],
        en: ["Istanbul", "Ankara", "Izmir", "Kocaeli", "Izmit", "Balikesir", "Eskisehir", "Hatay", "Kahramanmaras", "Antalya", "Gaziantep", "Rize", "Trabzon", "Diyarbakir", "Bursa", "Adana", "Mersin", "Sakarya", "Canakkale"]
    },
    middleEast: {
        tr: ["Libya", "Irak", "Rusya", "Azerbaycan", "Kazakistan"],
        en: ["Libya", "Iraq", "Russia", "Azerbaijan", "Kazakhstan"]
    },
    gulf: {
        tr: ["Suudi Arabistan", "Birleşik Arap Emirlikleri", "Katar", "Kuveyt"],
        en: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait"]
    },
    northAfricaCentralAsia: {
        tr: ["Cezayir", "Mısır", "Özbekistan"],
        en: ["Algeria", "Egypt", "Uzbekistan"]
    }
};

// =============================================================================
// LOCATION SPECIFIC DATA - Her şehir için benzersiz içerik
// =============================================================================

export const locationData: Record<string, LocationData> = {
  // ============ TÜRKİYE ============
  'istanbul': {
    name: { tr: 'İstanbul', en: 'Istanbul' },
    slug: { tr: 'istanbul', en: 'istanbul' },
    region: 'turkey',
    description: {
      tr: 'İstanbul\'da 10+ yıllık deneyimimizle, Boğaz köprülerinden tarihi Sultanahmet yapılarına, modern gökdelenlerden endüstriyel tesislere kadar geniş bir yelpazede 3D lazer tarama ve BIM hizmetleri sunuyoruz. Türkiye\'nin ekonomik merkezi olan İstanbul\'daki projelerimizde en son teknoloji FARO ve Leica tarayıcıları kullanıyoruz.',
      en: 'With over 10 years of experience in Istanbul, we provide 3D laser scanning and BIM services for a wide range of projects, from Bosphorus bridges to historic Sultanahmet buildings, modern skyscrapers to industrial facilities. We use state-of-the-art FARO and Leica scanners in our projects in Istanbul, Turkey\'s economic center.'
    },
    industries: {
      tr: ['Tarihi Yapı Restorasyonu', 'Gökdelen & Yüksek Yapılar', 'Alışveriş Merkezleri', 'Metro & Ulaşım Altyapısı', 'Endüstriyel Tesisler'],
      en: ['Historic Building Restoration', 'Skyscrapers & High-Rise Buildings', 'Shopping Centers', 'Metro & Transportation Infrastructure', 'Industrial Facilities']
    },
    stats: { projects: 180, experience: '10+ yıl' },
    highlights: {
      tr: ['Topkapı Sarayı restorasyon projesi', 'İstanbul Havalimanı terminal taraması', 'Marmaray tünel rölövesi'],
      en: ['Topkapi Palace restoration project', 'Istanbul Airport terminal scanning', 'Marmaray tunnel survey']
    }
  },
  'ankara': {
    name: { tr: 'Ankara', en: 'Ankara' },
    slug: { tr: 'ankara', en: 'ankara' },
    region: 'turkey',
    description: {
      tr: 'Başkent Ankara\'da kamu binaları, bakanlık kompleksleri, üniversite kampüsleri ve büyük altyapı projeleri için profesyonel lazer tarama hizmetleri veriyoruz. ODTÜ ve Bilkent gibi prestijli kurumlarla çalışma deneyimimiz bulunmaktadır.',
      en: 'In the capital Ankara, we provide professional laser scanning services for government buildings, ministry complexes, university campuses, and major infrastructure projects. We have experience working with prestigious institutions such as METU and Bilkent.'
    },
    industries: {
      tr: ['Kamu Binaları', 'Üniversite Kampüsleri', 'Savunma Sanayi', 'Altyapı Projeleri', 'Sağlık Tesisleri'],
      en: ['Government Buildings', 'University Campuses', 'Defense Industry', 'Infrastructure Projects', 'Healthcare Facilities']
    },
    stats: { projects: 95, experience: '8+ yıl' },
    highlights: {
      tr: ['TBMM bina rölövesi', 'Anıtkabir koruma projesi', 'Ankara Metrosu istasyon taraması'],
      en: ['Turkish Parliament building survey', 'Anitkabir preservation project', 'Ankara Metro station scanning']
    }
  },
  'izmir': {
    name: { tr: 'İzmir', en: 'Izmir' },
    slug: { tr: 'izmir', en: 'izmir' },
    region: 'turkey',
    description: {
      tr: 'Ege\'nin incisi İzmir\'de liman tesisleri, serbest bölge fabrikaları, Alsancak\'taki tarihi yapılar ve modern turizm projelerinde uzmanlaşmış lazer tarama hizmetleri sunuyoruz. Denizcilik ve lojistik sektöründe özel deneyime sahibiz.',
      en: 'In Izmir, the pearl of the Aegean, we offer specialized laser scanning services for port facilities, free zone factories, historic buildings in Alsancak, and modern tourism projects. We have special expertise in the maritime and logistics sector.'
    },
    industries: {
      tr: ['Liman & Denizcilik', 'Serbest Bölge Fabrikaları', 'Tarihi Yapılar', 'Turizm Tesisleri', 'Enerji Santralleri'],
      en: ['Port & Maritime', 'Free Zone Factories', 'Historic Buildings', 'Tourism Facilities', 'Power Plants']
    },
    stats: { projects: 72, experience: '7+ yıl' },
    highlights: {
      tr: ['Alsancak Limanı genişleme projesi', 'Kemeraltı tarihi çarşı belgeleme', 'SOCAR rafinerisi taraması'],
      en: ['Alsancak Port expansion project', 'Kemeral historical bazaar documentation', 'SOCAR refinery scanning']
    }
  },
  'kocaeli': {
    name: { tr: 'Kocaeli', en: 'Kocaeli' },
    slug: { tr: 'kocaeli', en: 'kocaeli' },
    region: 'turkey',
    description: {
      tr: 'Türkiye\'nin sanayi başkenti Kocaeli\'de otomotiv fabrikaları, kimya tesisleri, rafineri ve petrokimya kompleksleri için endüstriyel lazer tarama hizmetleri sunuyoruz. Ford Otosan, TÜPRAŞ ve IGSAŞ gibi dev tesislerde deneyimimiz var.',
      en: 'In Kocaeli, Turkey\'s industrial capital, we provide industrial laser scanning services for automotive factories, chemical facilities, refinery and petrochemical complexes. We have experience at major facilities such as Ford Otosan, TUPRAS, and IGSAS.'
    },
    industries: {
      tr: ['Otomotiv Fabrikaları', 'Petrokimya & Rafineri', 'Kimya Tesisleri', 'Lojistik Merkezleri', 'Ağır Sanayi'],
      en: ['Automotive Factories', 'Petrochemical & Refinery', 'Chemical Facilities', 'Logistics Centers', 'Heavy Industry']
    },
    stats: { projects: 120, experience: '9+ yıl' },
    highlights: {
      tr: ['Ford Otosan fabrika modernizasyonu', 'TÜPRAŞ rafineri rölövesi', 'Gebze OSB tesis taramaları'],
      en: ['Ford Otosan factory modernization', 'TUPRAS refinery survey', 'Gebze OIZ facility scans']
    }
  },
  'izmit': {
    name: { tr: 'İzmit', en: 'Izmit' },
    slug: { tr: 'izmit', en: 'izmit' },
    region: 'turkey',
    description: {
      tr: 'Kocaeli\'nin merkezi İzmit\'te endüstriyel tesisler, kağıt fabrikaları, petrokimya tesisleri ve liman altyapısı için özelleşmiş lazer tarama çözümleri sunuyoruz. Deprem sonrası yapı değerlendirme ve güçlendirme projelerinde de deneyimliyiz.',
      en: 'In Izmit, the center of Kocaeli, we provide specialized laser scanning solutions for industrial facilities, paper mills, petrochemical plants, and port infrastructure. We are also experienced in post-earthquake building assessment and reinforcement projects.'
    },
    industries: {
      tr: ['Kağıt & Selüloz Fabrikaları', 'Petrokimya', 'Liman Tesisleri', 'Yapı Güçlendirme', 'Depolama Tesisleri'],
      en: ['Paper & Pulp Mills', 'Petrochemical', 'Port Facilities', 'Building Reinforcement', 'Storage Facilities']
    },
    stats: { projects: 85, experience: '8+ yıl' },
    highlights: {
      tr: ['SEKA kağıt fabrikası dönüşümü', 'İzmit Körfezi liman rölövesi', 'Deprem sonrası bina değerlendirmeleri'],
      en: ['SEKA paper mill transformation', 'Izmit Bay port survey', 'Post-earthquake building assessments']
    }
  },
  'bursa': {
    name: { tr: 'Bursa', en: 'Bursa' },
    slug: { tr: 'bursa', en: 'bursa' },
    region: 'turkey',
    description: {
      tr: 'Otomotiv sanayinin kalbi Bursa\'da OYAK-Renault, TOFAŞ ve Bosch gibi dev tesislerde endüstriyel lazer tarama hizmetleri sunuyoruz. Ayrıca Osmanlı mirası tarihi yapıların restorasyonu için HBIM projeleri yürütüyoruz.',
      en: 'In Bursa, the heart of the automotive industry, we provide industrial laser scanning services at major facilities such as OYAK-Renault, TOFAS, and Bosch. We also carry out HBIM projects for the restoration of Ottoman heritage historic buildings.'
    },
    industries: {
      tr: ['Otomotiv Sanayi', 'Tekstil Fabrikaları', 'Osmanlı Tarihi Yapıları', 'Makine İmalat', 'Gıda Üretim Tesisleri'],
      en: ['Automotive Industry', 'Textile Factories', 'Ottoman Historic Buildings', 'Machinery Manufacturing', 'Food Production Facilities']
    },
    stats: { projects: 88, experience: '7+ yıl' },
    highlights: {
      tr: ['TOFAŞ fabrika genişleme projesi', 'Ulu Cami restorasyon rölövesi', 'Bursa OSB tesis taramaları'],
      en: ['TOFAS factory expansion project', 'Grand Mosque restoration survey', 'Bursa OIZ facility scans']
    }
  },
  'adana': {
    name: { tr: 'Adana', en: 'Adana' },
    slug: { tr: 'adana', en: 'adana' },
    region: 'turkey',
    description: {
      tr: 'Çukurova\'nın merkezi Adana\'da tarım-gıda tesisleri, çimento fabrikaları, enerji santralleri ve tekstil kompleksleri için profesyonel lazer tarama hizmetleri veriyoruz. Akdeniz bölgesinin en büyük sanayi merkezlerinden birinde geniş deneyime sahibiz.',
      en: 'In Adana, the center of Cukurova, we provide professional laser scanning services for agri-food facilities, cement factories, power plants, and textile complexes. We have extensive experience in one of the largest industrial centers in the Mediterranean region.'
    },
    industries: {
      tr: ['Tarım-Gıda Tesisleri', 'Çimento Fabrikaları', 'Tekstil Kompleksleri', 'Enerji Santralleri', 'Cam & Seramik'],
      en: ['Agri-Food Facilities', 'Cement Factories', 'Textile Complexes', 'Power Plants', 'Glass & Ceramics']
    },
    stats: { projects: 54, experience: '6+ yıl' },
    highlights: {
      tr: ['TEMSA otobüs fabrikası rölövesi', 'ÇİMSA çimento tesisi taraması', 'Adana OSB endüstriyel projeler'],
      en: ['TEMSA bus factory survey', 'CIMSA cement facility scanning', 'Adana OIZ industrial projects']
    }
  },
  'mersin': {
    name: { tr: 'Mersin', en: 'Mersin' },
    slug: { tr: 'mersin', en: 'mersin' },
    region: 'turkey',
    description: {
      tr: 'Akdeniz\'in en büyük limanı Mersin\'de konteyner terminalleri, serbest bölge tesisleri, petrokimya kompleksleri ve depolama alanları için uzman lazer tarama hizmetleri sunuyoruz. Liman lojistiği ve denizcilik sektöründe özel deneyime sahibiz.',
      en: 'In Mersin, home to the Mediterranean\'s largest port, we offer expert laser scanning services for container terminals, free zone facilities, petrochemical complexes, and storage areas. We have special expertise in port logistics and the maritime sector.'
    },
    industries: {
      tr: ['Konteyner Limanı', 'Serbest Bölge', 'Petrokimya', 'Depolama Tesisleri', 'Tarım Ürünleri İşleme'],
      en: ['Container Port', 'Free Zone', 'Petrochemical', 'Storage Facilities', 'Agricultural Processing']
    },
    stats: { projects: 48, experience: '5+ yıl' },
    highlights: {
      tr: ['Mersin Uluslararası Liman taraması', 'Serbest Bölge fabrika rölöveleri', 'Akkuyu NGS altyapı projesi'],
      en: ['Mersin International Port scanning', 'Free Zone factory surveys', 'Akkuyu NPP infrastructure project']
    }
  },
  'antalya': {
    name: { tr: 'Antalya', en: 'Antalya' },
    slug: { tr: 'antalya', en: 'antalya' },
    region: 'turkey',
    description: {
      tr: 'Turizm başkenti Antalya\'da 5 yıldızlı oteller, tarihi Kaleiçi yapıları, havalimanı terminalleri ve marina projeleri için özelleşmiş lazer tarama ve BIM hizmetleri sunuyoruz. Antik kentlerin arkeolojik belgeleme projelerinde de deneyimliyiz.',
      en: 'In Antalya, the tourism capital, we offer specialized laser scanning and BIM services for 5-star hotels, historic Kaleici buildings, airport terminals, and marina projects. We are also experienced in archaeological documentation projects for ancient cities.'
    },
    industries: {
      tr: ['5 Yıldızlı Oteller', 'Tarihi Kaleiçi Yapıları', 'Havalimanı & Marina', 'Antik Kent Belgeleme', 'Kongre Merkezleri'],
      en: ['5-Star Hotels', 'Historic Kaleici Buildings', 'Airport & Marina', 'Ancient City Documentation', 'Congress Centers']
    },
    stats: { projects: 62, experience: '6+ yıl' },
    highlights: {
      tr: ['Aspendos antik tiyatro belgeleme', 'Kaleiçi UNESCO koruma projesi', 'Antalya Havalimanı terminal taraması'],
      en: ['Aspendos ancient theater documentation', 'Kaleici UNESCO preservation project', 'Antalya Airport terminal scanning']
    }
  },
  'gaziantep': {
    name: { tr: 'Gaziantep', en: 'Gaziantep' },
    slug: { tr: 'gaziantep', en: 'gaziantep' },
    region: 'turkey',
    description: {
      tr: 'Güneydoğu Anadolu\'nun sanayi devi Gaziantep\'te tekstil fabrikaları, gıda üretim tesisleri, makine imalat kompleksleri ve organize sanayi bölgeleri için endüstriyel lazer tarama hizmetleri sunuyoruz.',
      en: 'In Gaziantep, the industrial giant of Southeastern Anatolia, we provide industrial laser scanning services for textile factories, food production facilities, machinery manufacturing complexes, and organized industrial zones.'
    },
    industries: {
      tr: ['Tekstil & Halı Fabrikaları', 'Gıda Üretim', 'Makine İmalat', 'Plastik & Ambalaj', 'OSB Tesisleri'],
      en: ['Textile & Carpet Factories', 'Food Production', 'Machinery Manufacturing', 'Plastics & Packaging', 'OIZ Facilities']
    },
    stats: { projects: 45, experience: '5+ yıl' },
    highlights: {
      tr: ['Sanko Holding fabrika rölöveleri', 'GAP Bölgesi altyapı projeleri', 'Gaziantep OSB tesis taramaları'],
      en: ['Sanko Holding factory surveys', 'GAP Region infrastructure projects', 'Gaziantep OIZ facility scans']
    }
  },
  'balikesir': {
    name: { tr: 'Balıkesir', en: 'Balikesir' },
    slug: { tr: 'balikesir', en: 'balikesir' },
    region: 'turkey',
    description: {
      tr: 'Balıkesir\'de madencilik tesisleri, zeytin işleme fabrikaları, enerji santralleri ve tarım endüstrisi için lazer tarama hizmetleri sunuyoruz. Ayrıca bölgedeki termal turizm tesislerinin projelerinde de deneyimliyiz.',
      en: 'In Balikesir, we provide laser scanning services for mining facilities, olive processing factories, power plants, and the agricultural industry. We are also experienced in projects for thermal tourism facilities in the region.'
    },
    industries: {
      tr: ['Madencilik', 'Zeytin & Gıda İşleme', 'Termal Turizm', 'Enerji Santralleri', 'Tarım Endüstrisi'],
      en: ['Mining', 'Olive & Food Processing', 'Thermal Tourism', 'Power Plants', 'Agricultural Industry']
    },
    stats: { projects: 28, experience: '4+ yıl' },
    highlights: {
      tr: ['Bandırma limanı rölövesi', 'Madencilik tesisleri taraması', 'Tarım işleme fabrikaları'],
      en: ['Bandirma port survey', 'Mining facility scanning', 'Agricultural processing plants']
    }
  },
  'eskisehir': {
    name: { tr: 'Eskişehir', en: 'Eskisehir' },
    slug: { tr: 'eskisehir', en: 'eskisehir' },
    region: 'turkey',
    description: {
      tr: 'Modern Eskişehir\'de havacılık ve savunma sanayi tesisleri, TUSAŞ kompleksi, üniversite kampüsleri ve seramik fabrikaları için profesyonel lazer tarama hizmetleri sunuyoruz. Türk Havacılık ve Uzay Sanayii projelerinde deneyimiz var.',
      en: 'In modern Eskisehir, we provide professional laser scanning services for aerospace and defense industry facilities, the TUSAS complex, university campuses, and ceramic factories. We have experience in Turkish Aerospace Industries projects.'
    },
    industries: {
      tr: ['Havacılık & Uzay Sanayi', 'Savunma Sanayi', 'Seramik & Cam', 'Üniversite Kampüsleri', 'Demiryolu Araçları'],
      en: ['Aerospace Industry', 'Defense Industry', 'Ceramics & Glass', 'University Campuses', 'Railway Vehicles']
    },
    stats: { projects: 38, experience: '5+ yıl' },
    highlights: {
      tr: ['TUSAŞ tesis rölöveleri', 'Anadolu Üniversitesi kampüs taraması', 'Eskişehir seramik fabrikaları'],
      en: ['TUSAS facility surveys', 'Anadolu University campus scanning', 'Eskisehir ceramic factories']
    }
  },
  'hatay': {
    name: { tr: 'Hatay', en: 'Hatay' },
    slug: { tr: 'hatay', en: 'hatay' },
    region: 'turkey',
    description: {
      tr: 'Hatay\'da deprem sonrası yapı değerlendirme, tarihi yapı belgeleme (özellikle Antakya tarihi dokusu), liman tesisleri ve sanayi alanları için lazer tarama hizmetleri sunuyoruz. Afet sonrası yeniden yapılanma projelerinde özel deneyime sahibiz.',
      en: 'In Hatay, we provide laser scanning services for post-earthquake building assessment, historic building documentation (especially Antakya\'s historic fabric), port facilities, and industrial areas. We have special expertise in post-disaster reconstruction projects.'
    },
    industries: {
      tr: ['Deprem Sonrası Değerlendirme', 'Tarihi Antakya Yapıları', 'İskenderun Limanı', 'Demir-Çelik Sanayi', 'Yeniden Yapılanma'],
      en: ['Post-Earthquake Assessment', 'Historic Antakya Buildings', 'Iskenderun Port', 'Iron-Steel Industry', 'Reconstruction']
    },
    stats: { projects: 35, experience: '4+ yıl' },
    highlights: {
      tr: ['Deprem sonrası yapı belgeleme', 'Antakya tarihi doku rölövesi', 'İskenderun limanı taraması'],
      en: ['Post-earthquake building documentation', 'Antakya historic fabric survey', 'Iskenderun port scanning']
    }
  },
  'kahramanmaras': {
    name: { tr: 'Kahramanmaraş', en: 'Kahramanmaras' },
    slug: { tr: 'kahramanmaras', en: 'kahramanmaras' },
    region: 'turkey',
    description: {
      tr: 'Kahramanmaraş\'ta tekstil ve dondurma endüstrisi tesisleri, deprem sonrası yapı değerlendirme ve yeniden yapılanma projeleri için lazer tarama hizmetleri sunuyoruz. 2023 depremi sonrası bölgede yoğun çalışmalar yürütüyoruz.',
      en: 'In Kahramanmaras, we provide laser scanning services for textile and ice cream industry facilities, post-earthquake building assessment and reconstruction projects. We have been conducting intensive work in the region after the 2023 earthquake.'
    },
    industries: {
      tr: ['Tekstil Fabrikaları', 'Gıda Endüstrisi', 'Deprem Değerlendirme', 'Kentsel Dönüşüm', 'Altyapı Projeleri'],
      en: ['Textile Factories', 'Food Industry', 'Earthquake Assessment', 'Urban Transformation', 'Infrastructure Projects']
    },
    stats: { projects: 32, experience: '4+ yıl' },
    highlights: {
      tr: ['Deprem sonrası yapı değerlendirme', 'Kentsel dönüşüm projeleri', 'Tekstil fabrikası rölöveleri'],
      en: ['Post-earthquake building assessment', 'Urban transformation projects', 'Textile factory surveys']
    }
  },
  'rize': {
    name: { tr: 'Rize', en: 'Rize' },
    slug: { tr: 'rize', en: 'rize' },
    region: 'turkey',
    description: {
      tr: 'Doğu Karadeniz\'in yeşil kenti Rize\'de çay fabrikaları, hidroelektrik santralleri, yayla turizm tesisleri ve dağ yolları altyapısı için özelleşmiş lazer tarama hizmetleri sunuyoruz.',
      en: 'In Rize, the green city of the Eastern Black Sea, we provide specialized laser scanning services for tea factories, hydroelectric power plants, highland tourism facilities, and mountain road infrastructure.'
    },
    industries: {
      tr: ['Çay Fabrikaları', 'Hidroelektrik Santraller', 'Yayla Turizmi', 'Dağ Yolu Altyapısı', 'Tarım Tesisleri'],
      en: ['Tea Factories', 'Hydroelectric Power Plants', 'Highland Tourism', 'Mountain Road Infrastructure', 'Agricultural Facilities']
    },
    stats: { projects: 22, experience: '3+ yıl' },
    highlights: {
      tr: ['ÇAYKUR fabrika rölöveleri', 'HES projeleri taraması', 'Ayder yaylası turizm tesisleri'],
      en: ['CAYKUR factory surveys', 'HPP project scanning', 'Ayder highland tourism facilities']
    }
  },
  'trabzon': {
    name: { tr: 'Trabzon', en: 'Trabzon' },
    slug: { tr: 'trabzon', en: 'trabzon' },
    region: 'turkey',
    description: {
      tr: 'Karadeniz\'in incisi Trabzon\'da Sümela Manastırı gibi UNESCO dünya mirası yapıları, liman tesisleri, havalimanı ve üniversite kampüsleri için profesyonel lazer tarama ve HBIM hizmetleri sunuyoruz.',
      en: 'In Trabzon, the pearl of the Black Sea, we provide professional laser scanning and HBIM services for UNESCO World Heritage sites like Sumela Monastery, port facilities, airport, and university campuses.'
    },
    industries: {
      tr: ['UNESCO Miras Yapıları', 'Liman Tesisleri', 'Üniversite Kampüsleri', 'Havalimanı', 'Turizm Tesisleri'],
      en: ['UNESCO Heritage Buildings', 'Port Facilities', 'University Campuses', 'Airport', 'Tourism Facilities']
    },
    stats: { projects: 28, experience: '4+ yıl' },
    highlights: {
      tr: ['Sümela Manastırı restorasyon projesi', 'Trabzon Limanı taraması', 'KTÜ kampüs rölövesi'],
      en: ['Sumela Monastery restoration project', 'Trabzon Port scanning', 'KTU campus survey']
    }
  },
  'diyarbakir': {
    name: { tr: 'Diyarbakır', en: 'Diyarbakir' },
    slug: { tr: 'diyarbakir', en: 'diyarbakir' },
    region: 'turkey',
    description: {
      tr: 'Tarihi Diyarbakır\'da UNESCO Dünya Mirası listesindeki Sur ve Hevsel Bahçeleri, tarihi yapıların restorasyonu, kentsel dönüşüm projeleri ve enerji sektörü için lazer tarama hizmetleri sunuyoruz.',
      en: 'In historic Diyarbakir, we provide laser scanning services for the UNESCO World Heritage-listed Walls and Hevsel Gardens, restoration of historic buildings, urban transformation projects, and the energy sector.'
    },
    industries: {
      tr: ['UNESCO Dünya Mirası', 'Tarihi Sur Yapıları', 'Kentsel Dönüşüm', 'Enerji Sektörü', 'Tarım Tesisleri'],
      en: ['UNESCO World Heritage', 'Historic Wall Structures', 'Urban Transformation', 'Energy Sector', 'Agricultural Facilities']
    },
    stats: { projects: 25, experience: '4+ yıl' },
    highlights: {
      tr: ['Diyarbakır Surları rölövesi', 'Tarihi cami restorasyonları', 'GAP Bölgesi enerji projeleri'],
      en: ['Diyarbakir Walls survey', 'Historic mosque restorations', 'GAP Region energy projects']
    }
  },
  'sakarya': {
    name: { tr: 'Sakarya', en: 'Sakarya' },
    slug: { tr: 'sakarya', en: 'sakarya' },
    region: 'turkey',
    description: {
      tr: 'Marmara\'nın sanayi kenti Sakarya\'da otomotiv yan sanayi, makine imalat, gıda üretim tesisleri ve lojistik merkezleri için endüstriyel lazer tarama hizmetleri sunuyoruz. Toyota ve Hyundai tedarikçileriyle çalışma deneyimimiz var.',
      en: 'In Sakarya, the industrial city of Marmara, we provide industrial laser scanning services for automotive suppliers, machinery manufacturing, food production facilities, and logistics centers. We have experience working with Toyota and Hyundai suppliers.'
    },
    industries: {
      tr: ['Otomotiv Yan Sanayi', 'Makine İmalat', 'Gıda Üretim', 'Lojistik Merkezleri', 'OSB Tesisleri'],
      en: ['Automotive Suppliers', 'Machinery Manufacturing', 'Food Production', 'Logistics Centers', 'OIZ Facilities']
    },
    stats: { projects: 42, experience: '5+ yıl' },
    highlights: {
      tr: ['Toyota tedarikçi fabrikaları', 'Sakarya OSB tesis taramaları', 'Gıda üretim tesisleri rölövesi'],
      en: ['Toyota supplier factories', 'Sakarya OIZ facility scans', 'Food production facility surveys']
    }
  },
  'canakkale': {
    name: { tr: 'Çanakkale', en: 'Canakkale' },
    slug: { tr: 'canakkale', en: 'canakkale' },
    region: 'turkey',
    description: {
      tr: 'Tarihi Çanakkale\'de Truva antik kenti, Gelibolu Yarımadası anıtları, 1915 Çanakkale Köprüsü ve seramik fabrikaları için özelleşmiş lazer tarama ve arkeolojik belgeleme hizmetleri sunuyoruz.',
      en: 'In historic Canakkale, we provide specialized laser scanning and archaeological documentation services for the ancient city of Troy, Gallipoli Peninsula monuments, 1915 Canakkale Bridge, and ceramic factories.'
    },
    industries: {
      tr: ['Arkeolojik Alanlar', 'Köprü & Altyapı', 'Seramik Fabrikaları', 'Turizm Tesisleri', 'Anıt Koruma'],
      en: ['Archaeological Sites', 'Bridge & Infrastructure', 'Ceramic Factories', 'Tourism Facilities', 'Monument Preservation']
    },
    stats: { projects: 20, experience: '3+ yıl' },
    highlights: {
      tr: ['Truva antik kenti belgeleme', '1915 Çanakkale Köprüsü projesi', 'Gelibolu anıtları rölövesi'],
      en: ['Troy ancient city documentation', '1915 Canakkale Bridge project', 'Gallipoli monuments survey']
    }
  },

  // ============ AVRUPA ============
  'almanya': {
    name: { tr: 'Almanya', en: 'Germany' },
    slug: { tr: 'almanya', en: 'germany' },
    region: 'europe',
    description: {
      tr: 'Avrupa\'nın sanayi devi Almanya\'da otomotiv fabrikaları, kimya tesisleri, enerji santralleri ve tarihi yapılar için lazer tarama hizmetleri sunuyoruz. BMW, Mercedes ve Volkswagen tedarik zincirinde projeler yürütüyoruz.',
      en: 'In Germany, Europe\'s industrial giant, we provide laser scanning services for automotive factories, chemical facilities, power plants, and historic buildings. We carry out projects in the BMW, Mercedes, and Volkswagen supply chain.'
    },
    industries: {
      tr: ['Otomotiv Fabrikaları', 'Kimya & İlaç', 'Enerji Sektörü', 'Tarihi Yapılar', 'Makine İmalat'],
      en: ['Automotive Factories', 'Chemical & Pharmaceutical', 'Energy Sector', 'Historic Buildings', 'Machinery Manufacturing']
    },
    stats: { projects: 65, experience: '8+ yıl' },
    highlights: {
      tr: ['BMW fabrika modernizasyonu', 'Kimya tesisi rölöveleri', 'Tarihi kilise restorasyonları'],
      en: ['BMW factory modernization', 'Chemical facility surveys', 'Historic church restorations']
    }
  },
  'romanya': {
    name: { tr: 'Romanya', en: 'Romania' },
    slug: { tr: 'romanya', en: 'romania' },
    region: 'europe',
    description: {
      tr: 'Romanya\'da otomotiv endüstrisi, enerji projeleri, tarihi Ortodoks kiliseleri ve UNESCO mirası yapılar için profesyonel lazer tarama hizmetleri sunuyoruz. Dacia ve Ford fabrikalarında deneyimimiz var.',
      en: 'In Romania, we provide professional laser scanning services for the automotive industry, energy projects, historic Orthodox churches, and UNESCO heritage buildings. We have experience at Dacia and Ford factories.'
    },
    industries: {
      tr: ['Otomotiv Sanayi', 'Enerji Projeleri', 'Ortodoks Kiliseleri', 'UNESCO Miras Yapıları', 'Endüstriyel Tesisler'],
      en: ['Automotive Industry', 'Energy Projects', 'Orthodox Churches', 'UNESCO Heritage Buildings', 'Industrial Facilities']
    },
    stats: { projects: 35, experience: '5+ yıl' },
    highlights: {
      tr: ['Dacia fabrika rölövesi', 'Transilvanya tarihi yapılar', 'Bükreş enerji projeleri'],
      en: ['Dacia factory survey', 'Transylvania historic buildings', 'Bucharest energy projects']
    }
  },
  'macaristan': {
    name: { tr: 'Macaristan', en: 'Hungary' },
    slug: { tr: 'macaristan', en: 'hungary' },
    region: 'europe',
    description: {
      tr: 'Avrupa ofisimizin bulunduğu Macaristan\'da tarihi Budapeşte yapıları, endüstriyel tesisler ve altyapı projeleri için kapsamlı lazer tarama hizmetleri sunuyoruz. Avrupa operasyonlarımızın merkeziyiz.',
      en: 'In Hungary, where our European office is located, we provide comprehensive laser scanning services for historic Budapest buildings, industrial facilities, and infrastructure projects. We are the center of our European operations.'
    },
    industries: {
      tr: ['Tarihi Budapeşte Yapıları', 'Otomotiv Sanayi', 'Gıda İşleme', 'Altyapı Projeleri', 'Turizm Tesisleri'],
      en: ['Historic Budapest Buildings', 'Automotive Industry', 'Food Processing', 'Infrastructure Projects', 'Tourism Facilities']
    },
    stats: { projects: 55, experience: '7+ yıl' },
    highlights: {
      tr: ['Budapeşte Parlamento rölövesi', 'Audi Györ fabrika taraması', 'Tuna kıyısı tarihi yapılar'],
      en: ['Budapest Parliament survey', 'Audi Gyor factory scanning', 'Danube riverside historic buildings']
    }
  },
  'hirvatistan': {
    name: { tr: 'Hırvatistan', en: 'Croatia' },
    slug: { tr: 'hirvatistan', en: 'croatia' },
    region: 'europe',
    description: {
      tr: 'Hırvatistan\'da Adriyatik kıyısındaki tarihi yapılar, Dubrovnik ve Split UNESCO miras alanları, turizm tesisleri ve denizcilik altyapısı için lazer tarama hizmetleri sunuyoruz.',
      en: 'In Croatia, we provide laser scanning services for historic buildings along the Adriatic coast, Dubrovnik and Split UNESCO heritage sites, tourism facilities, and maritime infrastructure.'
    },
    industries: {
      tr: ['UNESCO Miras Alanları', 'Turizm Tesisleri', 'Denizcilik Altyapısı', 'Tarihi Yapılar', 'Marina Projeleri'],
      en: ['UNESCO Heritage Sites', 'Tourism Facilities', 'Maritime Infrastructure', 'Historic Buildings', 'Marina Projects']
    },
    stats: { projects: 22, experience: '4+ yıl' },
    highlights: {
      tr: ['Dubrovnik surları belgeleme', 'Split Diocletian Sarayı', 'Adriyatik marina projeleri'],
      en: ['Dubrovnik walls documentation', 'Split Diocletian Palace', 'Adriatic marina projects']
    }
  },
  'ingiltere': {
    name: { tr: 'İngiltere', en: 'United Kingdom' },
    slug: { tr: 'ingiltere', en: 'united-kingdom' },
    region: 'europe',
    description: {
      tr: 'Birleşik Krallık\'ta tarihi İngiliz mimarisi, endüstriyel tesisler, altyapı projeleri ve heritage building koruma projeleri için profesyonel lazer tarama hizmetleri sunuyoruz.',
      en: 'In the United Kingdom, we provide professional laser scanning services for historic British architecture, industrial facilities, infrastructure projects, and heritage building conservation projects.'
    },
    industries: {
      tr: ['Heritage Buildings', 'Endüstriyel Tesisler', 'Altyapı Projeleri', 'Enerji Sektörü', 'Eğitim Kurumları'],
      en: ['Heritage Buildings', 'Industrial Facilities', 'Infrastructure Projects', 'Energy Sector', 'Educational Institutions']
    },
    stats: { projects: 28, experience: '4+ yıl' },
    highlights: {
      tr: ['Tarihi kilise restorasyonları', 'Endüstriyel tesis rölöveleri', 'Üniversite kampüs projeleri'],
      en: ['Historic church restorations', 'Industrial facility surveys', 'University campus projects']
    }
  },
  'italya': {
    name: { tr: 'İtalya', en: 'Italy' },
    slug: { tr: 'italya', en: 'italy' },
    region: 'europe',
    description: {
      tr: 'Sanat ve mimarinin başkenti İtalya\'da Rönesans yapıları, antik Roma kalıntıları, endüstriyel tesisler ve lüks moda markaları için HBIM ve lazer tarama hizmetleri sunuyoruz.',
      en: 'In Italy, the capital of art and architecture, we provide HBIM and laser scanning services for Renaissance buildings, ancient Roman ruins, industrial facilities, and luxury fashion brands.'
    },
    industries: {
      tr: ['Rönesans Yapıları', 'Antik Roma Kalıntıları', 'Moda & Lüks', 'Otomotiv', 'Turizm Tesisleri'],
      en: ['Renaissance Buildings', 'Ancient Roman Ruins', 'Fashion & Luxury', 'Automotive', 'Tourism Facilities']
    },
    stats: { projects: 32, experience: '5+ yıl' },
    highlights: {
      tr: ['Tarihi villa restorasyonları', 'Roma antik yapı belgeleme', 'Fiat fabrika projeleri'],
      en: ['Historic villa restorations', 'Rome ancient building documentation', 'Fiat factory projects']
    }
  },
  'polonya': {
    name: { tr: 'Polonya', en: 'Poland' },
    slug: { tr: 'polonya', en: 'poland' },
    region: 'europe',
    description: {
      tr: 'Orta Avrupa\'nın yükselen ekonomisi Polonya\'da otomotiv fabrikaları, enerji santralleri, tarihi Varşova ve Krakow yapıları için lazer tarama hizmetleri sunuyoruz.',
      en: 'In Poland, the rising economy of Central Europe, we provide laser scanning services for automotive factories, power plants, and historic Warsaw and Krakow buildings.'
    },
    industries: {
      tr: ['Otomotiv Fabrikaları', 'Enerji Santralleri', 'Tarihi Yapılar', 'Lojistik Merkezleri', 'Gıda Üretim'],
      en: ['Automotive Factories', 'Power Plants', 'Historic Buildings', 'Logistics Centers', 'Food Production']
    },
    stats: { projects: 25, experience: '4+ yıl' },
    highlights: {
      tr: ['Varşova tarihi merkez rölövesi', 'Volkswagen fabrika taraması', 'Krakow eski şehir belgeleme'],
      en: ['Warsaw historic center survey', 'Volkswagen factory scanning', 'Krakow old town documentation']
    }
  },
  'hollanda': {
    name: { tr: 'Hollanda', en: 'Netherlands' },
    slug: { tr: 'hollanda', en: 'netherlands' },
    region: 'europe',
    description: {
      tr: 'Hollanda\'da Rotterdam limanı, Amsterdam tarihi kanalları, petrokimya tesisleri ve yenilenebilir enerji projeleri için profesyonel lazer tarama hizmetleri sunuyoruz.',
      en: 'In the Netherlands, we provide professional laser scanning services for Rotterdam Port, Amsterdam historic canals, petrochemical facilities, and renewable energy projects.'
    },
    industries: {
      tr: ['Liman Tesisleri', 'Tarihi Kanal Yapıları', 'Petrokimya', 'Yenilenebilir Enerji', 'Lojistik'],
      en: ['Port Facilities', 'Historic Canal Buildings', 'Petrochemical', 'Renewable Energy', 'Logistics']
    },
    stats: { projects: 20, experience: '3+ yıl' },
    highlights: {
      tr: ['Rotterdam limanı rölövesi', 'Amsterdam kanal evleri', 'Shell rafineri taraması'],
      en: ['Rotterdam port survey', 'Amsterdam canal houses', 'Shell refinery scanning']
    }
  },

  // ============ ORTA DOĞU ============
  'libya': {
    name: { tr: 'Libya', en: 'Libya' },
    slug: { tr: 'libya', en: 'libya' },
    region: 'middleEast',
    description: {
      tr: 'Libya\'da petrol ve gaz tesisleri, altyapı yenileme projeleri ve enerji sektörü için lazer tarama hizmetleri sunuyoruz. Zorlu çevre koşullarında çalışma deneyimine sahibiz.',
      en: 'In Libya, we provide laser scanning services for oil and gas facilities, infrastructure renewal projects, and the energy sector. We have experience working in challenging environmental conditions.'
    },
    industries: {
      tr: ['Petrol & Gaz Tesisleri', 'Altyapı Yenileme', 'Enerji Santralleri', 'Liman Tesisleri', 'Endüstriyel Kompleksler'],
      en: ['Oil & Gas Facilities', 'Infrastructure Renewal', 'Power Plants', 'Port Facilities', 'Industrial Complexes']
    },
    stats: { projects: 18, experience: '4+ yıl' },
    highlights: {
      tr: ['Petrol sahası tesis rölöveleri', 'Boru hattı taraması', 'Enerji altyapısı projeleri'],
      en: ['Oil field facility surveys', 'Pipeline scanning', 'Energy infrastructure projects']
    }
  },
  'irak': {
    name: { tr: 'Irak', en: 'Iraq' },
    slug: { tr: 'irak', en: 'iraq' },
    region: 'middleEast',
    description: {
      tr: 'Irak\'ta petrol rafinerileri, enerji altyapısı, yeniden yapılanma projeleri ve tarihi Mezopotamya yapıları için profesyonel lazer tarama hizmetleri sunuyoruz.',
      en: 'In Iraq, we provide professional laser scanning services for oil refineries, energy infrastructure, reconstruction projects, and historic Mesopotamian structures.'
    },
    industries: {
      tr: ['Petrol Rafinerileri', 'Enerji Altyapısı', 'Yeniden Yapılanma', 'Tarihi Yapılar', 'Altyapı Projeleri'],
      en: ['Oil Refineries', 'Energy Infrastructure', 'Reconstruction', 'Historic Buildings', 'Infrastructure Projects']
    },
    stats: { projects: 22, experience: '5+ yıl' },
    highlights: {
      tr: ['Basra rafinerisi taraması', 'Erbil altyapı projeleri', 'Tarihi yapı belgeleme'],
      en: ['Basra refinery scanning', 'Erbil infrastructure projects', 'Historic building documentation']
    }
  },
  'rusya': {
    name: { tr: 'Rusya', en: 'Russia' },
    slug: { tr: 'rusya', en: 'russia' },
    region: 'middleEast',
    description: {
      tr: 'Rusya\'da endüstriyel tesisler, enerji santralleri ve büyük altyapı projeleri için lazer tarama hizmetleri sunuyoruz. Sibirya dahil zorlu iklim koşullarında çalışma deneyimimiz var.',
      en: 'In Russia, we provide laser scanning services for industrial facilities, power plants, and major infrastructure projects. We have experience working in challenging climate conditions including Siberia.'
    },
    industries: {
      tr: ['Enerji Santralleri', 'Endüstriyel Tesisler', 'Madencilik', 'Petrol & Gaz', 'Altyapı Projeleri'],
      en: ['Power Plants', 'Industrial Facilities', 'Mining', 'Oil & Gas', 'Infrastructure Projects']
    },
    stats: { projects: 15, experience: '3+ yıl' },
    highlights: {
      tr: ['Enerji santrali rölöveleri', 'Endüstriyel tesis taraması', 'Altyapı projeleri'],
      en: ['Power plant surveys', 'Industrial facility scanning', 'Infrastructure projects']
    }
  },
  'azerbaycan': {
    name: { tr: 'Azerbaycan', en: 'Azerbaijan' },
    slug: { tr: 'azerbaycan', en: 'azerbaijan' },
    region: 'middleEast',
    description: {
      tr: 'Azerbaycan\'da petrol ve gaz sektörü, Bakü\'deki modern ve tarihi yapılar, enerji altyapısı için lazer tarama hizmetleri sunuyoruz. SOCAR projelerinde deneyimimiz var.',
      en: 'In Azerbaijan, we provide laser scanning services for the oil and gas sector, modern and historic buildings in Baku, and energy infrastructure. We have experience in SOCAR projects.'
    },
    industries: {
      tr: ['Petrol & Gaz', 'Tarihi Bakü Yapıları', 'Enerji Altyapısı', 'Modern Mimari', 'Endüstriyel Tesisler'],
      en: ['Oil & Gas', 'Historic Baku Buildings', 'Energy Infrastructure', 'Modern Architecture', 'Industrial Facilities']
    },
    stats: { projects: 28, experience: '5+ yıl' },
    highlights: {
      tr: ['SOCAR rafineri rölöveleri', 'Bakü eski şehir belgeleme', 'Enerji projeleri'],
      en: ['SOCAR refinery surveys', 'Baku old city documentation', 'Energy projects']
    }
  },
  'kazakistan': {
    name: { tr: 'Kazakistan', en: 'Kazakhstan' },
    slug: { tr: 'kazakistan', en: 'kazakhstan' },
    region: 'middleEast',
    description: {
      tr: 'Orta Asya\'nın en büyük ekonomisi Kazakistan\'da madencilik tesisleri, enerji projeleri ve Astana\'daki modern mimari için lazer tarama hizmetleri sunuyoruz.',
      en: 'In Kazakhstan, Central Asia\'s largest economy, we provide laser scanning services for mining facilities, energy projects, and modern architecture in Astana.'
    },
    industries: {
      tr: ['Madencilik', 'Enerji Projeleri', 'Modern Mimari', 'Petrol & Gaz', 'Altyapı'],
      en: ['Mining', 'Energy Projects', 'Modern Architecture', 'Oil & Gas', 'Infrastructure']
    },
    stats: { projects: 18, experience: '4+ yıl' },
    highlights: {
      tr: ['Astana modern yapıları', 'Madencilik tesisi rölöveleri', 'Enerji altyapısı projeleri'],
      en: ['Astana modern buildings', 'Mining facility surveys', 'Energy infrastructure projects']
    }
  },

  // ============ KÖRFEZ ============
  'suudi-arabistan': {
    name: { tr: 'Suudi Arabistan', en: 'Saudi Arabia' },
    slug: { tr: 'suudi-arabistan', en: 'saudi-arabia' },
    region: 'gulf',
    description: {
      tr: 'Suudi Arabistan\'da NEOM, The Line gibi mega projeler, petrol rafinerileri, kutsal mekanlar ve Vision 2030 kapsamındaki yeni şehir projeleri için lazer tarama hizmetleri sunuyoruz.',
      en: 'In Saudi Arabia, we provide laser scanning services for mega projects like NEOM and The Line, oil refineries, holy sites, and new city projects under Vision 2030.'
    },
    industries: {
      tr: ['Mega Projeler (NEOM)', 'Petrol Rafinerileri', 'Kutsal Mekanlar', 'Vision 2030 Projeleri', 'Altyapı'],
      en: ['Mega Projects (NEOM)', 'Oil Refineries', 'Holy Sites', 'Vision 2030 Projects', 'Infrastructure']
    },
    stats: { projects: 35, experience: '6+ yıl' },
    highlights: {
      tr: ['NEOM altyapı projeleri', 'ARAMCO rafineri rölöveleri', 'Riyad metro istasyonları'],
      en: ['NEOM infrastructure projects', 'ARAMCO refinery surveys', 'Riyadh metro stations']
    }
  },
  'birlesik-arap-emirlikleri': {
    name: { tr: 'Birleşik Arap Emirlikleri', en: 'United Arab Emirates' },
    slug: { tr: 'birlesik-arap-emirlikleri', en: 'united-arab-emirates' },
    region: 'gulf',
    description: {
      tr: 'BAE\'de Dubai gökdelenleri, Abu Dhabi mega projeleri, petrokimya tesisleri ve lüks turizm kompleksleri için profesyonel lazer tarama hizmetleri sunuyoruz.',
      en: 'In the UAE, we provide professional laser scanning services for Dubai skyscrapers, Abu Dhabi mega projects, petrochemical facilities, and luxury tourism complexes.'
    },
    industries: {
      tr: ['Gökdelenler', 'Mega Projeler', 'Petrokimya', 'Lüks Turizm', 'Havalimanları'],
      en: ['Skyscrapers', 'Mega Projects', 'Petrochemical', 'Luxury Tourism', 'Airports']
    },
    stats: { projects: 42, experience: '7+ yıl' },
    highlights: {
      tr: ['Dubai gökdelen projeleri', 'ADNOC rafineri taraması', 'Abu Dhabi altyapı projeleri'],
      en: ['Dubai skyscraper projects', 'ADNOC refinery scanning', 'Abu Dhabi infrastructure projects']
    }
  },
  'katar': {
    name: { tr: 'Katar', en: 'Qatar' },
    slug: { tr: 'katar', en: 'qatar' },
    region: 'gulf',
    description: {
      tr: 'Katar\'da 2022 Dünya Kupası stadyumları, Lusail City mega projesi, LNG tesisleri ve Doha\'daki modern mimari için lazer tarama hizmetleri sunuyoruz.',
      en: 'In Qatar, we provide laser scanning services for 2022 World Cup stadiums, Lusail City mega project, LNG facilities, and modern architecture in Doha.'
    },
    industries: {
      tr: ['Stadyumlar', 'Mega Şehir Projeleri', 'LNG Tesisleri', 'Modern Mimari', 'Altyapı'],
      en: ['Stadiums', 'Mega City Projects', 'LNG Facilities', 'Modern Architecture', 'Infrastructure']
    },
    stats: { projects: 28, experience: '5+ yıl' },
    highlights: {
      tr: ['Dünya Kupası stadyum projeleri', 'Lusail City rölöveleri', 'QatarGas tesis taraması'],
      en: ['World Cup stadium projects', 'Lusail City surveys', 'QatarGas facility scanning']
    }
  },
  'kuveyt': {
    name: { tr: 'Kuveyt', en: 'Kuwait' },
    slug: { tr: 'kuveyt', en: 'kuwait' },
    region: 'gulf',
    description: {
      tr: 'Kuveyt\'te petrol rafinerileri, enerji altyapısı, modern şehir projeleri ve kamu binaları için profesyonel lazer tarama hizmetleri sunuyoruz.',
      en: 'In Kuwait, we provide professional laser scanning services for oil refineries, energy infrastructure, modern city projects, and government buildings.'
    },
    industries: {
      tr: ['Petrol Rafinerileri', 'Enerji Altyapısı', 'Modern Şehir Projeleri', 'Kamu Binaları', 'Altyapı'],
      en: ['Oil Refineries', 'Energy Infrastructure', 'Modern City Projects', 'Government Buildings', 'Infrastructure']
    },
    stats: { projects: 18, experience: '4+ yıl' },
    highlights: {
      tr: ['KPC rafineri rölöveleri', 'Kuveyt şehir projeleri', 'Enerji altyapısı taraması'],
      en: ['KPC refinery surveys', 'Kuwait city projects', 'Energy infrastructure scanning']
    }
  },

  // ============ KUZEY AFRİKA & ORTA ASYA ============
  'cezayir': {
    name: { tr: 'Cezayir', en: 'Algeria' },
    slug: { tr: 'cezayir', en: 'algeria' },
    region: 'northAfricaCentralAsia',
    description: {
      tr: 'Cezayir\'de petrol ve gaz sektörü, enerji altyapısı, liman tesisleri ve altyapı projeleri için lazer tarama hizmetleri sunuyoruz.',
      en: 'In Algeria, we provide laser scanning services for the oil and gas sector, energy infrastructure, port facilities, and infrastructure projects.'
    },
    industries: {
      tr: ['Petrol & Gaz', 'Enerji Altyapısı', 'Liman Tesisleri', 'Altyapı Projeleri', 'Endüstriyel Tesisler'],
      en: ['Oil & Gas', 'Energy Infrastructure', 'Port Facilities', 'Infrastructure Projects', 'Industrial Facilities']
    },
    stats: { projects: 15, experience: '3+ yıl' },
    highlights: {
      tr: ['Sonatrach enerji projeleri', 'Cezayir limanı taraması', 'Altyapı rölöveleri'],
      en: ['Sonatrach energy projects', 'Algeria port scanning', 'Infrastructure surveys']
    }
  },
  'misir': {
    name: { tr: 'Mısır', en: 'Egypt' },
    slug: { tr: 'misir', en: 'egypt' },
    region: 'northAfricaCentralAsia',
    description: {
      tr: 'Mısır\'da antik piramitler ve tapınakların arkeolojik belgeleme, Süveyş Kanalı altyapısı, enerji projeleri ve modern şehir projeleri için lazer tarama hizmetleri sunuyoruz.',
      en: 'In Egypt, we provide laser scanning services for archaeological documentation of ancient pyramids and temples, Suez Canal infrastructure, energy projects, and modern city projects.'
    },
    industries: {
      tr: ['Arkeolojik Alanlar', 'Süveyş Kanalı', 'Enerji Projeleri', 'Modern Şehir Projeleri', 'Turizm'],
      en: ['Archaeological Sites', 'Suez Canal', 'Energy Projects', 'Modern City Projects', 'Tourism']
    },
    stats: { projects: 22, experience: '4+ yıl' },
    highlights: {
      tr: ['Antik tapınak belgeleme', 'Süveyş Kanalı altyapısı', 'Yeni başkent projeleri'],
      en: ['Ancient temple documentation', 'Suez Canal infrastructure', 'New capital projects']
    }
  },
  'ozbekistan': {
    name: { tr: 'Özbekistan', en: 'Uzbekistan' },
    slug: { tr: 'ozbekistan', en: 'uzbekistan' },
    region: 'northAfricaCentralAsia',
    description: {
      tr: 'Özbekistan\'da Semerkant, Buhara gibi UNESCO İpek Yolu şehirlerinin tarihi yapıları, enerji projeleri ve altyapı çalışmaları için lazer tarama hizmetleri sunuyoruz.',
      en: 'In Uzbekistan, we provide laser scanning services for historic buildings in UNESCO Silk Road cities like Samarkand and Bukhara, energy projects, and infrastructure works.'
    },
    industries: {
      tr: ['UNESCO Tarihi Yapılar', 'İpek Yolu Mirası', 'Enerji Projeleri', 'Altyapı', 'Turizm Tesisleri'],
      en: ['UNESCO Historic Buildings', 'Silk Road Heritage', 'Energy Projects', 'Infrastructure', 'Tourism Facilities']
    },
    stats: { projects: 12, experience: '3+ yıl' },
    highlights: {
      tr: ['Semerkant Registan belgeleme', 'Buhara tarihi merkez rölövesi', 'Enerji altyapısı projeleri'],
      en: ['Samarkand Registan documentation', 'Bukhara historic center survey', 'Energy infrastructure projects']
    }
  }
};

// =============================================================================
// LOCATION DATA HELPER FUNCTIONS
// =============================================================================

/**
 * Get location data by slug
 */
export const getLocationDataBySlug = (slug: string, lang: 'tr' | 'en' = 'tr'): LocationData | null => {
  const normalizedSlug = normalizeSlug(slug);
  
  // Direct match
  if (locationData[normalizedSlug]) {
    return locationData[normalizedSlug];
  }
  
  // Search by name
  for (const key in locationData) {
    const loc = locationData[key];
    if (normalizeSlug(loc.name[lang]) === normalizedSlug || 
        normalizeSlug(loc.slug[lang]) === normalizedSlug) {
      return loc;
    }
  }
  
  return null;
};

/**
 * Get all location data
 */
export const getAllLocationData = (): LocationData[] => {
  return Object.values(locationData);
};

// =============================================================================
// SERVICE KEYWORDS
// =============================================================================

export const serviceKeywords = {
    tr: {
        primary: [
            "lazer tarama",
            "3D lazer tarama",
            "nokta bulutu",
            "BIM modelleme",
            "Scan to BIM",
            "as-built modelleme",
            "rölöve çıkarma",
            "tersine mühendislik",
            "dijital ikiz",
            "endüstriyel tarama"
        ],
        secondary: [
            "LIDAR tarama",
            "3D ölçüm",
            "mevcut durum tespiti",
            "tesis tarama",
            "fabrika tarama",
            "bina tarama",
            "mimari rölöve",
            "tarihi yapı belgeleme",
            "HBIM",
            "restorasyon tarama"
        ],
        services: [
            "nokta bulutu işleme",
            "2D çizim çıkarma",
            "3D model oluşturma",
            "Revit modelleme",
            "çakışma analizi",
            "clash detection",
            "MEP modelleme",
            "yapısal modelleme",
            "deformasyon analizi",
            "harita ölçme"
        ]
    },
    en: {
        primary: [
            "laser scanning",
            "3D laser scanning",
            "point cloud",
            "BIM modeling",
            "Scan to BIM",
            "as-built modeling",
            "survey drawing",
            "reverse engineering",
            "digital twin",
            "industrial scanning"
        ],
        secondary: [
            "LIDAR scanning",
            "3D measurement",
            "existing condition documentation",
            "facility scanning",
            "factory scanning",
            "building scanning",
            "architectural survey",
            "heritage building documentation",
            "HBIM",
            "restoration scanning"
        ],
        services: [
            "point cloud processing",
            "2D drawing extraction",
            "3D model creation",
            "Revit modeling",
            "clash analysis",
            "clash detection",
            "MEP modeling",
            "structural modeling",
            "deformation analysis",
            "mapping surveying"
        ]
    }
};

// =============================================================================
// SECTOR KEYWORDS
// =============================================================================

export const sectorKeywords = {
    tr: [
        "endüstriyel tesis",
        "mimari proje",
        "inşaat sektörü",
        "enerji santrali",
        "petrokimya",
        "çimento fabrikası",
        "otomotiv fabrikası",
        "gıda üretim tesisi",
        "restorasyon",
        "renovasyon",
        "yenileme projesi"
    ],
    en: [
        "industrial facility",
        "architectural project",
        "construction sector",
        "power plant",
        "petrochemical",
        "cement factory",
        "automotive factory",
        "food production facility",
        "restoration",
        "renovation",
        "refurbishment project"
    ]
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Tüm coğrafi hedefleri döndüren fonksiyon
 * Returns all geographic targets for a given language
 */
export const getAllGeoTargets = (lang: 'tr' | 'en' = 'tr'): string[] => {
    return [
        ...geoTargets.europe[lang],
        ...geoTargets.turkey[lang],
        ...geoTargets.middleEast[lang],
        ...geoTargets.gulf[lang],
        ...geoTargets.northAfricaCentralAsia[lang]
    ];
};

/**
 * Belirli bir bölgenin hedeflerini döndüren fonksiyon
 * Returns geographic targets for a specific region
 */
export const getGeoTargetsByRegion = (
    region: GeoRegion, 
    lang: 'tr' | 'en' = 'tr'
): string[] => {
    return geoTargets[region][lang];
};

/**
 * Coğrafi hedef sayısını döndüren fonksiyon
 * Returns the count of geographic targets by region or total
 */
export const getGeoTargetCount = (region?: GeoRegion): number => {
    if (region) {
        return geoTargets[region].tr.length;
    }
    return getAllGeoTargets('tr').length;
};

/**
 * Gelişmiş keyword kombinasyonları oluşturan fonksiyon
 * Generates advanced keyword combinations with geographic targets
 */
export const getAdvancedKeywords = (
    lang: 'tr' | 'en' = 'tr',
    options?: {
        includeGeo?: boolean;
        geoRegion?: GeoRegion | 'all';
        keywordTypes?: ('primary' | 'secondary' | 'services')[];
        limit?: number;
    }
): string[] => {
    const {
        includeGeo = true,
        geoRegion = 'all',
        keywordTypes = ['primary', 'secondary', 'services'],
        limit
    } = options || {};

    const keywords: string[] = [];

    // Base keywords
    keywordTypes.forEach(type => {
        if (serviceKeywords[lang][type]) {
            keywords.push(...serviceKeywords[lang][type]);
        }
    });

    // Add sector keywords
    keywords.push(...sectorKeywords[lang]);

    // Generate geo-combined keywords if enabled
    if (includeGeo) {
        const geoLocations = geoRegion === 'all' 
            ? getAllGeoTargets(lang)
            : getGeoTargetsByRegion(geoRegion, lang);

        const baseKeywords = serviceKeywords[lang].primary.slice(0, 5); // Top 5 primary keywords

        geoLocations.forEach(location => {
            baseKeywords.forEach(keyword => {
                if (lang === 'tr') {
                    keywords.push(`${location} ${keyword}`);
                    keywords.push(`${keyword} ${location}`);
                    keywords.push(`${location} ${keyword} hizmeti`);
                } else {
                    keywords.push(`${keyword} in ${location}`);
                    keywords.push(`${location} ${keyword}`);
                    keywords.push(`${keyword} services ${location}`);
                }
            });
        });
    }

    // Remove duplicates
    const uniqueKeywords = [...new Set(keywords)];

    // Apply limit if specified
    return limit ? uniqueKeywords.slice(0, limit) : uniqueKeywords;
};

/**
 * Belirli bir şehir/ülke için lokalize edilmiş keyword setini döndürür
 * Returns localized keyword set for a specific city/country
 */
export const getLocalizedKeywords = (
    location: string,
    lang: 'tr' | 'en' = 'tr'
): string[] => {
    const keywords: string[] = [];
    const primaryServices = serviceKeywords[lang].primary;

    primaryServices.forEach(service => {
        if (lang === 'tr') {
            keywords.push(`${location} ${service}`);
            keywords.push(`${service} ${location}`);
            keywords.push(`${location}'da ${service}`);
            keywords.push(`${location} ${service} firması`);
            keywords.push(`${location} ${service} hizmeti`);
        } else {
            keywords.push(`${service} in ${location}`);
            keywords.push(`${location} ${service}`);
            keywords.push(`${service} company ${location}`);
            keywords.push(`${service} services in ${location}`);
            keywords.push(`best ${service} ${location}`);
        }
    });

    return keywords;
};

/**
 * Meta description için keyword string oluşturur
 * Generates a keyword string for meta descriptions
 */
export const generateMetaKeywords = (
    lang: 'tr' | 'en' = 'tr',
    includeGeo: boolean = true,
    maxKeywords: number = 10
): string => {
    const keywords = getAdvancedKeywords(lang, {
        includeGeo,
        keywordTypes: ['primary'],
        limit: maxKeywords
    });
    return keywords.join(', ');
};

/**
 * Tüm bölgelerin istatistiklerini döndürür
 * Returns statistics for all regions
 */
export const getGeoStats = () => {
    return {
        europe: {
            count: geoTargets.europe.tr.length,
            countries: geoTargets.europe.tr
        },
        turkey: {
            count: geoTargets.turkey.tr.length,
            cities: geoTargets.turkey.tr
        },
        middleEast: {
            count: geoTargets.middleEast.tr.length,
            countries: geoTargets.middleEast.tr
        },
        gulf: {
            count: geoTargets.gulf.tr.length,
            countries: geoTargets.gulf.tr
        },
        northAfricaCentralAsia: {
            count: geoTargets.northAfricaCentralAsia.tr.length,
            countries: geoTargets.northAfricaCentralAsia.tr
        },
        total: getAllGeoTargets('tr').length
    };
};

/**
 * Bölge bazlı keyword önerileri döndürür
 * Returns region-specific keyword suggestions
 */
export const getRegionKeywordSuggestions = (
    region: GeoRegion,
    lang: 'tr' | 'en' = 'tr'
): string[] => {
    const locations = getGeoTargetsByRegion(region, lang);
    const suggestions: string[] = [];
    
    const topKeywords = serviceKeywords[lang].primary.slice(0, 3);
    
    locations.forEach(location => {
        topKeywords.forEach(keyword => {
            if (lang === 'tr') {
                suggestions.push(`${location} ${keyword}`);
            } else {
                suggestions.push(`${keyword} in ${location}`);
            }
        });
    });
    
    return suggestions;
};

// =============================================================================
// CLUSTER-BASED KEYWORDS (for SEO metadata)
// =============================================================================

const clusterKeywords: Record<ClusterType, { tr: string[]; en: string[] }> = {
    scanToBim: {
        tr: ['Scan to BIM', 'Lazer Tarama', 'BIM Modelleme', 'Nokta Bulutu', '3D Tarama', 'As-Built Modelleme', 'Dijital İkiz', 'Rölöve', 'Tersine Mühendislik'],
        en: ['Scan to BIM', 'Laser Scanning', 'BIM Modeling', 'Point Cloud', '3D Scanning', 'As-Built Modeling', 'Digital Twin', 'Survey', 'Reverse Engineering']
    },
    industrialAndEnergy: {
        tr: ['Endüstriyel Tesis Tarama', 'Petrol Rafinerisi', 'Fabrika Tarama', 'Boru Hattı Rölövesi', 'Piping Modelleme', 'Tank Kalibrasyon', 'Enerji Santrali', 'MEP Modelleme'],
        en: ['Industrial Facility Scanning', 'Oil Refinery', 'Factory Scanning', 'Pipeline Survey', 'Piping Modeling', 'Tank Calibration', 'Power Plant', 'MEP Modeling']
    },
    heritageAndArchitecture: {
        tr: ['Tarihi Eser Rölöve', 'HBIM', 'Kültürel Miras', 'Cephe Rölövesi', 'Restorasyon Projesi', 'Mimari Belgeleme', 'Koruma Projesi'],
        en: ['Heritage Building Survey', 'HBIM', 'Cultural Heritage', 'Facade Survey', 'Restoration Project', 'Architectural Documentation', 'Conservation Project']
    },
    mappingAndUAV: {
        tr: ['İHA Fotogrametri', 'Drone Haritalama', 'Halihazır Harita', 'Ortofoto', 'Kübaj Hesabı', 'Sayısal Arazi Modeli', 'Harita Ölçme'],
        en: ['UAV Photogrammetry', 'Drone Mapping', 'Topographic Survey', 'Orthophoto', 'Volume Calculation', 'Digital Terrain Model', 'Land Surveying']
    },
    retailAndCommercial: {
        tr: ['Mağaza Tarama', 'AVM Rölövesi', 'Ticari Alan Ölçümü', 'Net Alan Hesabı', 'Perakende BIM', 'Zincir Mağaza'],
        en: ['Store Scanning', 'Mall Survey', 'Commercial Space Measurement', 'Net Area Calculation', 'Retail BIM', 'Chain Store']
    }
};

const funnelKeywords: Record<FunnelType, { tr: string[]; en: string[] }> = {
    awareness: {
        tr: ['Nedir', 'Nasıl Yapılır', 'Avantajları', 'Faydaları', 'Teknoloji'],
        en: ['What is', 'How to', 'Advantages', 'Benefits', 'Technology']
    },
    consideration: {
        tr: ['Fiyat', 'Karşılaştırma', 'Özellikler', 'Hizmetler', 'Çözümler'],
        en: ['Price', 'Comparison', 'Features', 'Services', 'Solutions']
    },
    decision: {
        tr: ['Firma', 'Uzman', 'Profesyonel', 'Deneyimli', 'Güvenilir', 'Kaliteli'],
        en: ['Company', 'Expert', 'Professional', 'Experienced', 'Reliable', 'Quality']
    },
    action: {
        tr: ['Teklif', 'İletişim', 'Fiyat Teklifi', 'Hemen', 'Başvuru'],
        en: ['Quote', 'Contact', 'Price Quote', 'Now', 'Apply']
    }
};

/**
 * Cluster ve Funnel bazlı keyword string oluşturur
 * Generates keyword string based on cluster and funnel type
 */
export function getClusterKeywords(
    cluster: ClusterType,
    funnel: FunnelType,
    targetGeo: string | null = null,
    lang: 'tr' | 'en' = 'tr'
): string {
    const clusterKws = clusterKeywords[cluster][lang];
    const funnelKws = funnelKeywords[funnel][lang];
    
    let keywords = [...clusterKws, ...funnelKws];
    
    // Add geo-specific keywords if provided
    if (targetGeo) {
        const geoKeywords = clusterKws.slice(0, 5).map(kw => `${targetGeo} ${kw}`);
        keywords = [...keywords, ...geoKeywords];
    }
    
    // Add brand
    keywords.push('EOS Proje');
    
    return keywords.slice(0, 15).join(', ');
}

// =============================================================================
// REGION DETECTION FOR WHATSAPP NUMBERS
// =============================================================================

/**
 * Normalize slug for comparison (Turkish character handling)
 * IMPORTANT: Replace Turkish İ BEFORE toLowerCase() to avoid combining character issues
 */
export const normalizeSlug = (str: string): string => {
    return str
        .replace(/İ/g, 'i')  // Turkish capital İ - MUST be before toLowerCase()
        .replace(/I/g, 'i')   // Capital I (to avoid becoming ı in Turkish locale)
        .toLowerCase()
        .replace(/ı/g, 'i')   // Turkish lowercase ı
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ç/g, 'c')
        .replace(/ğ/g, 'g')
        .replace(/i̇/g, 'i')   // Remove combining dot above (in case toLowerCase created it)
        .normalize('NFD')      // Normalize Unicode to decomposed form
        .replace(/[\u0300-\u036f]/g, '') // Remove all combining diacritical marks
        .replace(/\s+/g, '-');
};

/**
 * Get region by location slug
 * Returns the region code for a given location
 */
export const getRegionBySlug = (slug: string, lang: 'tr' | 'en' = 'tr'): GeoRegion | null => {
    const normalizedSlug = normalizeSlug(slug);
    
    const regions: GeoRegion[] = ['europe', 'turkey', 'middleEast', 'gulf', 'northAfricaCentralAsia'];
    
    for (const region of regions) {
        const locations = geoTargets[region][lang];
        for (const location of locations) {
            if (normalizeSlug(location) === normalizedSlug) {
                return region;
            }
        }
    }
    
    return null;
};

/**
 * Get WhatsApp number based on region
 * Europe → Hungarian number (+36 70 244 9628)
 * Others → Turkish number (+90 530 664 2263)
 */
export const getWhatsAppByRegion = (region: GeoRegion | null): { number: string; formatted: string } => {
    if (region === 'europe') {
        return {
            number: '36702449628',
            formatted: '+36 70 244 9628'
        };
    }
    // Turkey, Middle East, Gulf, North Africa & Central Asia → Turkish number
    return {
        number: '905306642263',
        formatted: '+90 530 664 2263'
    };
};

/**
 * Get WhatsApp number by location slug directly
 * Convenience function combining getRegionBySlug and getWhatsAppByRegion
 */
export const getWhatsAppByLocation = (slug: string, lang: 'tr' | 'en' = 'tr'): { number: string; formatted: string } => {
    const region = getRegionBySlug(slug, lang);
    return getWhatsAppByRegion(region);
};

// =============================================================================
// EXPORTS
// =============================================================================

export default {
    geoTargets,
    serviceKeywords,
    sectorKeywords,
    getAllGeoTargets,
    getGeoTargetsByRegion,
    getGeoTargetCount,
    getAdvancedKeywords,
    getLocalizedKeywords,
    generateMetaKeywords,
    getGeoStats,
    getRegionKeywordSuggestions,
    normalizeSlug,
    getRegionBySlug,
    getWhatsAppByRegion,
    getWhatsAppByLocation
};
