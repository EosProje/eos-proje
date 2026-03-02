"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Map,
  Plane,
  Mountain,
  Building2,
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  Shield,
  Layers
} from "lucide-react";
import SubPageHero from "@/components/SubPageHero";
import TLDR from "@/components/geo/TLDR";
import EEAT from "@/components/geo/EEAT";
import FAQ from "@/components/FAQ";
import { EASE_CURVES } from "@/lib/animations";
import { SITE_URL } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE_CURVES.smooth }
};

// Mapping FAQs
const mappingFAQs = [
  {
    question: "How long does drone mapping take?",
    answer: "Depending on area size:\n\n• Under 10 hectares: 1 day flight + 2-3 days processing\n• 10-50 hectares: 2-3 days flight + 1 week processing\n• 50+ hectares: Project-based planning\n\nWeather conditions and permit processes may require additional time."
  },
  {
    question: "Should I choose drone mapping or laser scanning?",
    answer: "It depends on the project:\n\n• Drone: Ideal for large open areas, terrain, construction sites\n• Laser Scanning: For building interiors, dense vegetation, high-precision requirements\n\nA hybrid approach often delivers the best results."
  },
  {
    question: "What map scales do you provide?",
    answer: "According to requirements:\n\n• 1/500: Detailed zoning plans\n• 1/1000: General zoning plans\n• 1/2000: Regional plans\n• 1/5000: Master plans\n\nStandard delivery is at 1/500 and 1/1000 scales."
  },
  {
    question: "Are drone flight permits required?",
    answer: "Yes, we comply with civil aviation regulations:\n\n• Pilot license\n• Flight permit and insurance\n• NOTAM notification (in required zones)\n\nEOS Proje manages all permit processes."
  },
  {
    question: "Do you produce GIS-compatible data?",
    answer: "Yes, we deliver in all major GIS platform formats:\n\n• Shapefile (.shp)\n• GeoDatabase (.gdb)\n• GeoTIFF\n• KML/KMZ\n• DWG/DXF (georeferenced)\n\nCoordinate system: WGS84 or requested system."
  }
];

export default function MappingSurveyingClient() {
  const services = [
    {
      icon: Plane,
      title: "Drone Mapping",
      description: "Fast and economical mapping of large areas using photogrammetry technique.",
      features: ["Orthomosaic production", "Digital elevation model", "Volume calculation"]
    },
    {
      icon: Mountain,
      title: "Topographic Map",
      description: "Maps containing terrain slope, elevation contours, and detail points.",
      features: ["Contour map", "Slope analysis", "Cross-section profiles"]
    },
    {
      icon: Building2,
      title: "Cadastral Map",
      description: "Legal maps containing property boundaries and title deed information.",
      features: ["Parcel determination", "Application", "Property type change"]
    },
    {
      icon: Layers,
      title: "Infrastructure Mapping",
      description: "Digital mapping of underground and aboveground infrastructure systems.",
      features: ["Pipelines", "Electrical network", "Telecommunications"]
    }
  ];

  const technologies = [
    { name: "DJI Matrice 300 RTK", type: "Drone", spec: "±2cm accuracy" },
    { name: "Leica RTC360", type: "Laser Scanner", spec: "±2mm accuracy" },
    { name: "Trimble R12i", type: "GNSS", spec: "RTK measurement" },
    { name: "Pix4D / Agisoft", type: "Software", spec: "Photogrammetry processing" }
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mapping and Surveying Services",
    "description": "Drone photogrammetry and laser scanning for professional mapping services.",
    "provider": {
      "@type": "Organization",
      "name": "EOS Proje",
      "url": SITE_URL
    },
    "serviceType": ["Drone Mapping", "Topographic Map", "Cadastral Map", "Infrastructure Mapping"],
    "areaServed": ["Turkey", "Europe"]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--color-deep-charcoal)]">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <SubPageHero
        category="Engineering Services"
        title="Mapping & Surveying Services"
        description="Professional mapping with drone and laser scanning technologies. ±2cm accuracy, GIS-compatible delivery."
        breadcrumb={[
          { label: "Services", href: "/en/solutions" },
          { label: "Mapping & Surveying", href: "/en/services/mapping-surveying" }
        ]}
      />

      {/* TL;DR */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <TLDR
          title="Page Summary"
          points={[
            "Fast mapping of large areas with drone photogrammetry",
            "High-precision measurements with laser scanning (±2mm)",
            "Topographic map, cadastral map, infrastructure mapping services",
            "Delivery in GIS-compatible data formats",
            "Licensed professional team and equipment"
          ]}
          readTime="4 min read"
        />
      </section>

      {/* What is Mapping */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              What is Digital Mapping?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Digital mapping</strong> is the creation of technical maps showing the current state of land or 
              settlement areas, including structures, roads, infrastructure elements, and terrain details. It is 
              an essential base layer for zoning plans, project design, and engineering work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeUp}>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Why Drone Mapping?</h3>
              <ul className="space-y-4">
                {[
                  "10x faster data collection",
                  "Safe mapping of hard-to-reach areas",
                  "High-resolution orthophoto and 3D model",
                  "Volume calculation and cross-section profiles",
                  "Periodic comparison and change detection"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="font-bold text-slate-900 mb-4">Technologies Used</h4>
              <div className="space-y-4">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <div>
                      <div className="font-semibold text-slate-900">{tech.name}</div>
                      <div className="text-sm text-slate-500">{tech.type}</div>
                    </div>
                    <div className="text-sm text-red-600 font-medium">{tech.spec}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              Mapping Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 hover:bg-slate-100 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-xs bg-white text-slate-600 px-3 py-1.5 rounded-full">
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Application Areas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Construction & Site", items: ["Site monitoring", "Cut/fill calculation", "Progress monitoring"] },
              { title: "Municipal & Government", items: ["Zoning plan base", "City inventory", "Infrastructure management"] },
              { title: "Energy & Infrastructure", items: ["Route study", "Line mapping", "Facility inventory"] },
              { title: "Agriculture & Forestry", items: ["Land planning", "Yield mapping", "Forest inventory"] },
              { title: "Mining", items: ["Quarry monitoring", "Stockpile calculation", "Reclamation"] },
              { title: "Real Estate", items: ["Parcel survey", "Valuation base", "Due diligence"] }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
              >
                <h4 className="font-bold text-white mb-4">{item.title}</h4>
                <ul className="space-y-2">
                  {item.items.map((i, idx) => (
                    <li key={idx} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T */}
      <EEAT variant="compact" lang="en" className="py-16 px-4" />

      {/* FAQ */}
      <FAQ
        title="Mapping Services FAQ"
        subtitle="Frequently asked questions about drone mapping and surveying."
        faqs={mappingFAQs}
        ctaText="Get a Quote"
        ctaLink="/en/contact"
      />

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Get a Quote for Your Mapping Project
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us for professional mapping with drone photogrammetry or laser scanning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-black rounded-xl hover:bg-slate-100 transition-all"
            >
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/en/references"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              View References
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
