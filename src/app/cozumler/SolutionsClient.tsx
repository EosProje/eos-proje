"use client";

import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { Box, Layers, Database, Settings, ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Point Cloud to BIM",
    desc: "Lazer tarama verilerinden akıllı Revit/IFC modelleri üretiyoruz. LOD 200-400 seviyesinde parametrik içerik.",
    icon: <Box className="w-8 h-8" />,
    href: "/cozumler/point-cloud-to-bim",
    tags: ["RVT", "IFC", "E57"]
  },
  {
    title: "As-built Modelleme",
    desc: "Mevcut yapıların güncel durumunu milimetrik doğrulukla dijitalleştiriyoruz. Mevcut durum tespiti.",
    icon: <Layers className="w-8 h-8" />,
    href: "/cozumler/as-built-modeling",
    tags: ["DWG", "PDF", "RCS"]
  },
  {
    title: "2D to 3D/BIM Dönüşüm",
    desc: "Kağıt veya CAD ortamındaki arşiv projelerini modern BIM standartlarına dönüştürüyoruz.",
    icon: <Database className="w-8 h-8" />,
    href: "/cozumler/2d-to-3d-bim-conversion",
    tags: ["Legacy to BIM"]
  },
  {
    title: "Endüstriyel Ekipman",
    desc: "Fabrika ve tesislerdeki karmaşık MEP sistemleri ve makineler için detaylı ekipman kütüphaneleri.",
    icon: <Settings className="w-8 h-8" />,
    href: "/cozumler/industrial-equipment-modeling",
    tags: ["MEP", "Equipment"]
  }
];

export default function SolutionsClient() {
  return (
    <div className="min-h-screen bg-white">
      <SubPageHero
        title="Mühendislik Çözümlerimiz"
        description="Nokta bulutundan akıllı modellere; dijital ikiz projeleriniz için profesyonel as-built dokümantasyon ve BIM hizmetleri."
        category="Servisler"
        breadcrumb={[{ label: "Çözümler", href: "/cozumler" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {solutions.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={item.href} className="group block h-full">
                <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-transparent hover:border-red-100 hover:bg-white transition-all duration-500 hover:shadow-2xl flex flex-col h-full relative overflow-hidden group hover-lift active-shrink bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    {item.icon}
                  </div>
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-[var(--color-primary-red)] group-hover:bg-[var(--color-primary-red)] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-slate-900 leading-tight">{item.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 flex-grow font-medium">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-black font-mono text-slate-400 group-hover:border-red-50 group-hover:text-red-400 transition-colors uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <span className="text-[var(--color-primary-red)] text-sm font-black uppercase tracking-widest flex items-center gap-2">
                      Servis Detayları <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-24 bg-[var(--color-deep-charcoal)] rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>
          <h3 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Proje Kapsamınızı Belirleyelim</h3>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10 font-medium">
            İhtiyacınız olan LOD hassasiyeti ve teslimat formatları konusunda mühendislik ekibimizden destek alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link href="/iletisim" className="px-12 py-5 bg-[var(--color-primary-red)] text-white font-black rounded-2xl shadow-xl shadow-red-900/40 hover:bg-white hover:text-black transition-all">
              Hemen Teklif Alın
            </Link>
            <Link href="/referanslar" className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-2xl hover:bg-white/20 transition-all">
              Vaka Analizlerini Gör
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
