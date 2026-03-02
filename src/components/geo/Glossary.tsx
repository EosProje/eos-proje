"use client";

import { useState } from "react";
import { Search, BookOpen, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
  link?: string;
}

interface GlossaryProps {
  terms: GlossaryTerm[];
  title?: string;
  searchable?: boolean;
  showSchema?: boolean;
  className?: string;
}

export default function Glossary({
  terms,
  title = "Teknik Terimler Sözlüğü",
  searchable = true,
  showSchema = true,
  className = ""
}: GlossaryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredTerms = terms.filter(term =>
    term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // DefinedTermSet Schema for SEO
  const glossarySchema = showSchema ? {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": title,
    "hasDefinedTerm": terms.map(t => ({
      "@type": "DefinedTerm",
      "name": t.term,
      "description": t.definition
    }))
  } : null;

  return (
    <section className={`bg-slate-50 py-16 px-4 ${className}`}>
      {showSchema && glossarySchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
        />
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[var(--color-primary-red)] font-black uppercase tracking-[0.2em] text-[10px] bg-red-50/50 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-3 h-3" />
            Sözlük
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            3D lazer tarama, BIM modelleme ve dijital ikiz teknolojileri hakkında temel kavramlar.
          </p>
        </div>

        {/* Search */}
        {searchable && (
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Terim ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border-2 border-slate-200 focus:border-red-300 focus:outline-none transition-colors"
            />
          </div>
        )}

        {/* Terms List */}
        <div className="space-y-3">
          {filteredTerms.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border-2 border-slate-100 hover:border-red-100 transition-all overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
              >
                <span className="font-bold text-slate-900">{item.term}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    expandedIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 pt-0 border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed mt-3">
                        {item.definition}
                      </p>
                      {item.relatedTerms && item.relatedTerms.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="text-xs text-slate-400">İlgili:</span>
                          {item.relatedTerms.map((rt, i) => (
                            <span
                              key={i}
                              className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                            >
                              {rt}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            Aramanızla eşleşen terim bulunamadı.
          </div>
        )}
      </div>
    </section>
  );
}

// Default glossary terms for BIM/Laser Scanning
export const defaultGlossaryTerms: GlossaryTerm[] = [
  {
    term: "3D Lazer Tarama (LiDAR)",
    definition: "Lazer ışınları kullanarak fiziksel nesnelerin ve mekanların üç boyutlu dijital kopyasını oluşturan non-invaziv ölçüm teknolojisi. Saniyede milyonlarca nokta ölçümü yaparak nokta bulutu oluşturur.",
    relatedTerms: ["Nokta Bulutu", "TLS", "SLAM"]
  },
  {
    term: "Nokta Bulutu (Point Cloud)",
    definition: "3D lazer tarama veya fotogrametri ile elde edilen, her biri X, Y, Z koordinatları ve renk bilgisi içeren milyonlarca noktadan oluşan veri kümesi. BIM modelinin hammaddesidir.",
    relatedTerms: ["E57", "RCS", "LAS"]
  },
  {
    term: "BIM (Building Information Modeling)",
    definition: "Yapıların fiziksel ve fonksiyonel özelliklerini dijital ortamda temsil eden akıllı 3D modelleme süreci. Sadece geometri değil, malzeme, maliyet, zaman gibi bilgileri de içerir.",
    relatedTerms: ["LOD", "IFC", "Revit"]
  },
  {
    term: "Scan to BIM (Point Cloud to BIM)",
    definition: "3D lazer tarama ile elde edilen nokta bulutu verisinin BIM modeline dönüştürülme süreci. Mevcut yapıların dijitalleştirilmesinde kullanılır.",
    relatedTerms: ["As-Built", "Reverse Engineering"]
  },
  {
    term: "LOD (Level of Development)",
    definition: "BIM modelinin detay ve güvenilirlik seviyesini gösteren standart. LOD 100 (konsept) ile LOD 500 (as-built/gerçekleşen) arasında değişir.",
    relatedTerms: ["LOD 200", "LOD 300", "LOD 400"]
  },
  {
    term: "As-Built Model",
    definition: "Bir yapının inşaat tamamlandıktan sonraki gerçek durumunu yansıtan BIM modeli. Renovasyon, bakım ve tesis yönetimi için kritik öneme sahiptir.",
    relatedTerms: ["Scan to BIM", "Dijital İkiz"]
  },
  {
    term: "Dijital İkiz (Digital Twin)",
    definition: "Fiziksel bir varlığın tüm özelliklerini içeren, sensör verileriyle gerçek zamanlı güncellenen dinamik dijital kopyası. BIM modelinin evrimleşmiş halidir.",
    relatedTerms: ["IoT", "BIM", "Facility Management"]
  },
  {
    term: "HBIM (Heritage BIM)",
    definition: "Tarihi yapıların belgelenmesi için özelleştirilmiş BIM metodolojisi. Düzensiz geometriler, malzeme bozulması ve tarihsel katman bilgisini içerir.",
    relatedTerms: ["Restorasyon", "Koruma", "Rölöve"]
  },
  {
    term: "Clash Detection",
    definition: "BIM modelinde farklı disiplinlerin (mimari, yapısal, MEP) çakışmalarını otomatik tespit eden analiz. Navisworks gibi yazılımlarla yapılır.",
    relatedTerms: ["Hard Clash", "Soft Clash", "Koordinasyon"]
  },
  {
    term: "IFC (Industry Foundation Classes)",
    definition: "Farklı BIM yazılımları arasında veri alışverişini sağlayan açık dosya formatı. BuildingSMART tarafından geliştirilmiştir.",
    relatedTerms: ["OpenBIM", "Revit", "ArchiCAD"]
  },
  {
    term: "TLS (Terrestrial Laser Scanning)",
    definition: "Yerden yapılan yüksek doğruluklu lazer tarama teknolojisi. Statik noktalarda kurularak detaylı veri toplar. FARO, Leica gibi markalar üretir.",
    relatedTerms: ["SLAM", "Fotogrametri", "Nokta Bulutu"]
  },
  {
    term: "SLAM (Simultaneous Localization and Mapping)",
    definition: "Hareket halindeyken anlık konum belirleme ve harita oluşturma teknolojisi. Mobil lazer tarayıcılarda kullanılır, hızlı veri toplar.",
    relatedTerms: ["TLS", "GeoSLAM", "Mobil Tarama"]
  },
  {
    term: "Rölöve",
    definition: "Mevcut bir yapının ölçülü çizimlerinin hazırlanması işlemi. Lazer tarama ile yapıldığında yüksek doğruluk ve hız sağlanır.",
    relatedTerms: ["Cephe Rölövesi", "Restorasyon", "As-Built"]
  },
  {
    term: "MEP (Mechanical, Electrical, Plumbing)",
    definition: "Yapılardaki mekanik, elektrik ve tesisat sistemlerinin genel adı. BIM'de ayrı bir disiplin olarak modellenir.",
    relatedTerms: ["HVAC", "Borulama", "Clash Detection"]
  },
  {
    term: "E57 Format",
    definition: "Nokta bulutu verisi için ASTM standart dosya formatı. Farklı tarayıcı ve yazılımlar arası veri transferinde kullanılan evrensel formattır.",
    relatedTerms: ["RCS", "LAS", "PTX"]
  }
];

// English glossary terms
export const defaultGlossaryTermsEn: GlossaryTerm[] = [
  {
    term: "3D Laser Scanning (LiDAR)",
    definition: "Non-invasive measurement technology that creates three-dimensional digital copies of physical objects and spaces using laser beams. Creates point clouds by measuring millions of points per second.",
    relatedTerms: ["Point Cloud", "TLS", "SLAM"]
  },
  {
    term: "Point Cloud",
    definition: "A data set consisting of millions of points, each containing X, Y, Z coordinates and color information, obtained through 3D laser scanning or photogrammetry. It is the raw material of BIM models.",
    relatedTerms: ["E57", "RCS", "LAS"]
  },
  {
    term: "BIM (Building Information Modeling)",
    definition: "Intelligent 3D modeling process that digitally represents the physical and functional characteristics of buildings. Contains not only geometry but also information like materials, cost, and time.",
    relatedTerms: ["LOD", "IFC", "Revit"]
  },
  {
    term: "Scan to BIM (Point Cloud to BIM)",
    definition: "The process of converting point cloud data obtained through 3D laser scanning into a BIM model. Used for digitizing existing structures.",
    relatedTerms: ["As-Built", "Reverse Engineering"]
  },
  {
    term: "LOD (Level of Development)",
    definition: "Standard indicating the detail and reliability level of a BIM model. Ranges from LOD 100 (concept) to LOD 500 (as-built/actual).",
    relatedTerms: ["LOD 200", "LOD 300", "LOD 400"]
  },
  {
    term: "As-Built Model",
    definition: "BIM model reflecting the actual condition of a structure after construction is completed. Critical for renovation, maintenance, and facility management.",
    relatedTerms: ["Scan to BIM", "Digital Twin"]
  },
  {
    term: "Digital Twin",
    definition: "A dynamic digital copy containing all properties of a physical asset, updated in real-time with sensor data. An evolved form of BIM model.",
    relatedTerms: ["IoT", "BIM", "Facility Management"]
  },
  {
    term: "HBIM (Heritage BIM)",
    definition: "Customized BIM methodology for documenting historic buildings. Includes irregular geometries, material deterioration, and historical layer information.",
    relatedTerms: ["Restoration", "Conservation", "Survey"]
  },
  {
    term: "Clash Detection",
    definition: "Analysis that automatically detects conflicts between different disciplines (architectural, structural, MEP) in a BIM model. Done with software like Navisworks.",
    relatedTerms: ["Hard Clash", "Soft Clash", "Coordination"]
  },
  {
    term: "IFC (Industry Foundation Classes)",
    definition: "Open file format enabling data exchange between different BIM software. Developed by BuildingSMART.",
    relatedTerms: ["OpenBIM", "Revit", "ArchiCAD"]
  }
];
