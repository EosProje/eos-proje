"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ruler,
  Building2,
  Landmark,
  Camera,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
  Target,
  Shield,
  Zap,
  Award,
  ChevronDown,
  Paintbrush,
  Warehouse
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

// English FAQs
const surveyFAQs = [
  {
    question: "How long does a laser scanning survey take?",
    answer: "Depending on the building size:\n\n• Small buildings (< 500m²): 1-2 days\n• Medium buildings (500-2000m²): 3-5 days\n• Large/complex structures: 1-2 weeks\n\nDrawing production adds 1-2 weeks to the schedule."
  },
  {
    question: "What accuracy can be achieved with laser scanning surveys?",
    answer: "Our laser scanning equipment achieves ±2mm accuracy. This is 5-10 times more accurate than traditional tape measurement methods and ensures precise documentation for renovation and restoration projects."
  },
  {
    question: "What deliverables do you provide?",
    answer: "Standard deliverables include:\n\n• CAD drawings (plans, sections, elevations)\n• Point cloud data (E57, RCS formats)\n• Orthophotos and panoramic images\n• BIM model (optional)\n• Deformation analysis report (if required)"
  },
  {
    question: "Do you work on heritage/listed buildings?",
    answer: "Yes, we specialize in heritage building documentation. Our survey drawings comply with conservation authority standards and include detailed material analysis, damage mapping, and period-specific documentation."
  },
  {
    question: "What is the difference between survey and Scan to BIM?",
    answer: "Survey produces 2D CAD drawings (plans, sections, elevations) from laser scan data. Scan to BIM creates a 3D parametric model with intelligent objects. Survey is ideal for renovation design, while Scan to BIM is better for facility management and complex MEP coordination."
  }
];

export default function SurveyServicesClient() {
  const services = [
    {
      icon: Building2,
      title: "Facade Survey",
      description: "Detailed measurement and drawing of building facades. All elements including windows, doors, and ornamental details.",
      features: ["Orthophoto production", "CAD outputs", "Deformation analysis"],
      link: "/en/sectors/architecture"
    },
    {
      icon: Ruler,
      title: "Architectural Survey",
      description: "Preparation of floor plans, sections, and elevations for all levels of the building. Interior and exterior included.",
      features: ["1/50 and 1/100 scales", "Area calculations", "BIM model option"],
      link: "/en/solutions/point-cloud-to-bim"
    },
    {
      icon: Landmark,
      title: "Heritage Building Survey",
      description: "Documentation of listed historic buildings to conservation authority standards.",
      features: ["Damage mapping", "Material analysis", "Period identification"],
      link: "/en/sectors/restoration"
    },
    {
      icon: Paintbrush,
      title: "Restoration Survey",
      description: "Detailed survey and analysis work to provide base documentation for restoration projects.",
      features: ["Deformation measurement", "Stratigraphy", "Intervention recommendations"],
      link: "/en/blog/heritage-bim-restoration"
    }
  ];

  const comparisonData = [
    { aspect: "Survey Time (1000m²)", traditional: "5-7 days", laserScanning: "1-2 days" },
    { aspect: "Accuracy", traditional: "±10-20mm", laserScanning: "±2mm" },
    { aspect: "Detail Loss", traditional: "High", laserScanning: "Minimal" },
    { aspect: "Inaccessible Areas", traditional: "Cannot measure", laserScanning: "Can measure" },
    { aspect: "Digital Archive", traditional: "None", laserScanning: "Point cloud" },
    { aspect: "Reusability", traditional: "Difficult", laserScanning: "Easy" }
  ];

  const process = [
    { step: 1, title: "Site Visit & Planning", desc: "Building inspection, scanning strategy determination" },
    { step: 2, title: "Site Scanning", desc: "Data collection with 3D laser scanning and/or photogrammetry" },
    { step: 3, title: "Data Processing", desc: "Registration and cleaning of point clouds" },
    { step: 4, title: "Drawing Production", desc: "Preparation of plans, sections, elevations in CAD" },
    { step: 5, title: "QC & Delivery", desc: "Quality control and final corrections" }
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Survey Services with Laser Scanning",
    "description": "Professional survey services with laser scanning technology. Facade survey, architectural survey, heritage building documentation.",
    "provider": {
      "@type": "Organization",
      "name": "EOS Proje",
      "url": SITE_URL
    },
    "serviceType": ["Facade Survey", "Architectural Survey", "Heritage Building Survey", "Restoration Survey"],
    "areaServed": ["Turkey", "Europe"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Survey Services",
      "itemListElement": services.map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        }
      }))
    }
  };

  // HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How is Laser Scanning Survey Done?",
    "description": "Professional survey process using 3D laser scanning technology",
    "step": process.map(p => ({
      "@type": "HowToStep",
      "position": p.step,
      "name": p.title,
      "text": p.desc
    }))
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--color-deep-charcoal)]">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <SubPageHero
        category="Engineering Services"
        title="Survey Services with Laser Scanning"
        description="Facade survey, architectural survey, heritage building documentation and restoration surveys. ±2mm accuracy guaranteed."
        breadcrumb={[
          { label: "Services", href: "/en/solutions" },
          { label: "Survey Services", href: "/en/services/survey-services" }
        ]}
      />

      {/* TL;DR Summary */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <TLDR
          title="Page Summary"
          points={[
            "Laser scanning surveys are 5-10x faster than traditional methods with ±2mm accuracy",
            "Suitable for facade, architectural, heritage, and restoration surveys",
            "We prepare conservation authority compliant outputs",
            "Digital archive enables future reuse",
            "15+ years experience with 500+ completed projects"
          ]}
          readTime="5 min read"
          variant="summary"
        />
      </section>

      {/* What is Survey */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">
              Definition
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              What is Building Survey?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Building Survey</strong> is the process of creating measured technical drawings (plans, sections, elevations) 
              of existing structures. Traditionally done with tape measures and levels, modern technology uses <strong>3D laser scanning</strong> 
              to achieve much faster, more accurate, and more detailed results.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div {...fadeUp} className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
              Traditional vs Laser Scanning Survey
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-4 font-bold text-slate-900">Criteria</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-500">Traditional Method</th>
                    <th className="text-center py-4 px-4 font-bold text-red-600">Laser Scanning</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100">
                      <td className="py-4 px-4 font-medium text-slate-700">{row.aspect}</td>
                      <td className="py-4 px-4 text-center text-slate-500">{row.traditional}</td>
                      <td className="py-4 px-4 text-center text-green-600 font-semibold">{row.laserScanning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              Survey Service Types
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We provide tailored survey solutions for every project type.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-red-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-red-400 font-black uppercase tracking-widest text-[10px] bg-red-500/10 px-4 py-2 rounded-full mb-6 inline-block">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              How is Survey Work Done?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Fast and accurate results with our professional 5-step process.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-700 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="bg-slate-800 rounded-2xl p-6 text-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T Section */}
      <EEAT variant="full" lang="en" />

      {/* Deliverables */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[var(--color-primary-red)] font-black uppercase tracking-widest text-[10px] bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">
              Deliverables
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
              What Do We Deliver?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "CAD Drawings",
                items: ["Floor plans (1/50, 1/100)", "Section drawings", "Elevation drawings", "Detail drawings (1/20, 1/10)"]
              },
              {
                icon: Camera,
                title: "Visual Documents",
                items: ["Orthophoto images", "Panoramic photos", "3D model visuals", "Video fly-through"]
              },
              {
                icon: Warehouse,
                title: "Digital Data",
                items: ["Point cloud (E57, RCS)", "BIM model (optional)", "Area/volume calculations", "Deformation report"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Survey Services FAQ"
        subtitle="Frequently asked questions about laser scanning survey services."
        faqs={surveyFAQs}
        ctaText="Get a Quote"
        ctaLink="/en/contact"
      />

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Get a Quote for Your Survey Project
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and detailed pricing.
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
