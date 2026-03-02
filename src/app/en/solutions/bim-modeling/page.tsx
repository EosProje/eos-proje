import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Box, Layers, FileCode, Building2, Ruler, Database, ChevronDown, Settings } from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { SITE_URL } from "@/lib/constants";
import { SampleFilesDownload } from "@/components/SampleFilesDownload";

export const metadata: Metadata = {
  title: "BIM Modeling Services | Revit, ArchiCAD | EOS Proje",
  description: "Professional BIM modeling services at LOD 100-500 levels using Revit and ArchiCAD. Expert team in Architectural, Structural, and MEP disciplines.",
  keywords: ["bim modeling", "revit modeling", "archicad", "lod 300", "lod 400", "mep modeling", "building information modeling"],
  alternates: {
    canonical: `${SITE_URL}/en/solutions/bim-modeling`,
    languages: {
      "tr": `${SITE_URL}/cozumler/bim-modelleme`,
      "en": `${SITE_URL}/en/solutions/bim-modeling`,
    },
  },
  openGraph: {
    title: "BIM Modeling Services | EOS Proje",
    description: "Professional BIM modeling at LOD 100-500 levels.",
    url: `${SITE_URL}/en/solutions/bim-modeling`,
    type: "website",
    images: ["/images/EosProje-point-cloud-to-bim-modelleme.webp"],
  },
};

const faqs = [
  {
    question: "What is BIM modeling?",
    answer: "BIM (Building Information Modeling) is the creation of intelligent digital models of structures that include not only 3D geometry but also materials, cost, and time information."
  },
  {
    question: "What do LOD levels mean?",
    answer: "LOD (Level of Development) indicates the detail and information density of the model. LOD 100 is concept, LOD 200 schematic, LOD 300 detailed design, LOD 400 fabrication, LOD 500 as-built level."
  },
  {
    question: "Which software do you use?",
    answer: "Our main software is Autodesk Revit. We can also work in ArchiCAD, Tekla, and Bentley platforms upon request. We deliver in universal IFC format."
  },
  {
    question: "How long does BIM modeling take?",
    answer: "Duration varies by project size and LOD level. A LOD 300 model for a 1000 m² building takes approximately 2-3 weeks. This may extend for industrial facilities."
  },
  {
    question: "Do you perform Clash Detection?",
    answer: "Yes. We perform interdisciplinary clash detection with Navisworks and provide detailed reporting. Clash detection can also be offered as a separate service."
  },
  {
    question: "What file formats do you deliver?",
    answer: "Standard delivery includes: Native format (.RVT, .PLN), IFC, 2D CAD outputs (.DWG), PDF sections, and Navisworks (.NWD) files."
  }
];

const lodLevels = [
  {
    lod: "LOD 100",
    title: "Concept",
    description: "General massing and area calculations",
    usage: "Feasibility, preliminary studies",
    color: "bg-blue-100 text-blue-700"
  },
  {
    lod: "LOD 200",
    title: "Schematic Design",
    description: "Approximate dimensions, system schematics",
    usage: "Permit drawings, cost estimation",
    color: "bg-green-100 text-green-700"
  },
  {
    lod: "LOD 300",
    title: "Detailed Design",
    description: "Specific systems, accurate measurements",
    usage: "Construction documents, coordination",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    lod: "LOD 350",
    title: "Coordination",
    description: "System interactions, connection details",
    usage: "Clash Detection, 4D/5D BIM",
    color: "bg-orange-100 text-orange-700"
  },
  {
    lod: "LOD 400",
    title: "Fabrication",
    description: "Manufacturing and assembly details",
    usage: "Prefabrication, site assembly",
    color: "bg-red-100 text-red-700"
  },
  {
    lod: "LOD 500",
    title: "As-Built",
    description: "Model of actual site conditions",
    usage: "Facility management, FM",
    color: "bg-purple-100 text-purple-700"
  }
];

const disciplines = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Architectural (ARC)",
    items: ["Walls, floors, roofs", "Doors and windows", "Stairs, railings", "Facade systems"]
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Structural (STR)",
    items: ["Reinforced concrete elements", "Steel construction", "Foundation systems", "Connection details"]
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "MEP",
    items: ["HVAC systems", "Plumbing", "Electrical systems", "Fire protection"]
  }
];

export default function BimModelingPage() {
  return (
    <>
      <ServiceSchema
        name="BIM Modeling Services"
        description="Professional BIM modeling services at LOD 100-500 levels. Expert team in Architectural, Structural, and MEP disciplines."
        url="/en/solutions/bim-modeling"
        image="/images/EosProje-point-cloud-to-bim-modelleme.webp"
      />
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-white">
        <SubPageHero
          category="Engineering Solutions"
          title="BIM Modeling"
          description="We model your projects at LOD 100-500 levels in Revit and ArchiCAD. Expert team in Architectural, Structural, and MEP disciplines."
          breadcrumb={[
            { label: "Solutions", href: "/en/solutions" },
            { label: "BIM Modeling", href: "/en/solutions/bim-modeling" }
          ]}
        />

        {/* TL;DR Section */}
        <section className="py-12 px-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">TL;DR</span> — Summary
              </h2>
              <p className="text-slate-600 leading-relaxed">
                <strong>BIM Modeling</strong> is the creation of intelligent 3D models containing both geometry and information. 
                At EOS Proje, we produce Architectural, Structural, and MEP models at LOD 200-500 levels in Revit. 
                We provide Clash Detection, 4D/5D BIM, and facility management integration. Delivery in IFC, DWG, and native formats.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Building Information Modeling</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Intelligent and Parametric 3D Models</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  BIM (Building Information Modeling) creates digital twins that include not only the 3D geometry of buildings but also 
                  <strong> materials, cost, time, and maintenance information</strong>.
                </p>
                <ul className="space-y-4">
                  {[
                    "Modeling at LOD 200-500 levels",
                    "Architectural, Structural, MEP disciplines",
                    "Revit, ArchiCAD, IFC formats",
                    "Clash Detection and coordination",
                    "4D (schedule) and 5D (cost) integration"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/infographics/eosproje-bim-lod-seviyeleri.png"
                  alt="BIM LOD Levels"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* LOD Levels */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">LOD Levels</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We determine the appropriate detail level based on your project needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {lodLevels.map((level, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${level.color}`}>
                    {level.lod}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{level.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{level.description}</p>
                  <div className="text-xs text-red-400 font-medium">{level.usage}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disciplines */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Modeling Disciplines</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We provide services across all building disciplines with our expert team.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {disciplines.map((disc, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                    {disc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{disc.title}</h3>
                  <ul className="space-y-2">
                    {disc.items.map((item, i) => (
                      <li key={i} className="text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software & Formats */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Box className="w-6 h-6 text-red-600" />
                  Software We Use
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Autodesk Revit", type: "Main Platform" },
                    { name: "ArchiCAD", type: "Alternative" },
                    { name: "Tekla Structures", type: "Steel/Concrete" },
                    { name: "Navisworks", type: "Coordination" },
                    { name: "BIM Track", type: "Issue Management" },
                    { name: "Solibri", type: "Model Checking" }
                  ].map((sw, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl">
                      <div className="font-bold text-slate-900">{sw.name}</div>
                      <div className="text-sm text-slate-500">{sw.type}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <FileCode className="w-6 h-6 text-red-600" />
                  Delivery Formats
                </h3>
                <div className="space-y-4">
                  {[
                    { format: ".RVT / .PLN", desc: "Native Revit/ArchiCAD" },
                    { format: ".IFC", desc: "Universal BIM format" },
                    { format: ".DWG / .DXF", desc: "2D CAD drawings" },
                    { format: ".NWD / .NWC", desc: "Navisworks coordination" },
                    { format: ".PDF", desc: "Sections and elevations" },
                    { format: "COBie", desc: "Facility management data" }
                  ].map((f, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="font-bold text-red-600">{f.format}</span>
                      <span className="text-slate-600 text-sm">{f.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Common questions about BIM modeling</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Files Download */}
        <SampleFilesDownload isEn />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your BIM Project</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Contact us for professional BIM modeling services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/en/blog/lod-levels-differences" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                Read LOD Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        <section className="py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Related Solutions</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Scan to BIM", href: "/en/solutions/scan-to-bim" },
                { label: "Point Cloud to BIM", href: "/en/solutions/point-cloud-to-bim" },
                { label: "Clash Detection", href: "/en/solutions/clash-detection" },
                { label: "2D to 3D Conversion", href: "/en/solutions/2d-to-3d-bim-conversion" },
                { label: "As-Built Modeling", href: "/en/solutions/as-built-modeling" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
