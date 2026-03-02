"use client";

import { Award, Users, Shield, Briefcase, CheckCircle, Star, Building2, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface EEATProps {
  variant?: "full" | "compact" | "inline";
  className?: string;
  lang?: "tr" | "en";
}

// Stats data
const stats = {
  tr: {
    experience: "15+ Yıl",
    experienceLabel: "Sektör Deneyimi",
    projects: "500+",
    projectsLabel: "Tamamlanan Proje",
    clients: "50+",
    clientsLabel: "Mutlu Müşteri",
    accuracy: "±2mm",
    accuracyLabel: "Hassasiyet Garantisi"
  },
  en: {
    experience: "15+ Years",
    experienceLabel: "Industry Experience",
    projects: "500+",
    projectsLabel: "Completed Projects",
    clients: "50+",
    clientsLabel: "Happy Clients",
    accuracy: "±2mm",
    accuracyLabel: "Accuracy Guarantee"
  }
};

const trustBadges = {
  tr: [
    { icon: Shield, label: "ISO 27001 Uyumlu" },
    { icon: Award, label: "BIM Sertifikalı Uzmanlar" },
    { icon: CheckCircle, label: "NDA Garantisi" },
    { icon: Building2, label: "Türkiye & Avrupa Ofisleri" }
  ],
  en: [
    { icon: Shield, label: "ISO 27001 Compliant" },
    { icon: Award, label: "BIM Certified Experts" },
    { icon: CheckCircle, label: "NDA Guaranteed" },
    { icon: Building2, label: "Turkey & Europe Offices" }
  ]
};

export default function EEAT({ variant = "full", className = "", lang = "tr" }: EEATProps) {
  const s = stats[lang];
  const badges = trustBadges[lang];

  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap items-center gap-4 text-sm ${className}`}>
        <span className="flex items-center gap-1.5 text-slate-600">
          <Clock className="w-4 h-4 text-red-500" />
          <strong>{s.experience}</strong> {s.experienceLabel}
        </span>
        <span className="text-slate-300">|</span>
        <span className="flex items-center gap-1.5 text-slate-600">
          <Briefcase className="w-4 h-4 text-red-500" />
          <strong>{s.projects}</strong> {s.projectsLabel}
        </span>
        <span className="text-slate-300">|</span>
        <span className="flex items-center gap-1.5 text-slate-600">
          <Star className="w-4 h-4 text-red-500" />
          <strong>{s.accuracy}</strong> {s.accuracyLabel}
        </span>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`bg-slate-50 rounded-2xl p-6 ${className}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-black text-red-600">{s.experience}</div>
            <div className="text-xs text-slate-500 mt-1">{s.experienceLabel}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-red-600">{s.projects}</div>
            <div className="text-xs text-slate-500 mt-1">{s.projectsLabel}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-red-600">{s.clients}</div>
            <div className="text-xs text-slate-500 mt-1">{s.clientsLabel}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-red-600">{s.accuracy}</div>
            <div className="text-xs text-slate-500 mt-1">{s.accuracyLabel}</div>
          </div>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <section className={`bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: s.experience, label: s.experienceLabel, icon: Clock },
            { value: s.projects, label: s.projectsLabel, icon: Briefcase },
            { value: s.clients, label: s.clientsLabel, icon: Users },
            { value: s.accuracy, label: s.accuracyLabel, icon: Star }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
            >
              <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"
            >
              <badge.icon className="w-4 h-4 text-green-400" />
              <span className="text-sm text-white font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial component for E-E-A-T
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export function Testimonial({ quote, author, role, company, image }: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-slate-700 leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        {image ? (
          <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
            <Users className="w-6 h-6 text-slate-400" />
          </div>
        )}
        <div>
          <div className="font-bold text-slate-900">{author}</div>
          <div className="text-sm text-slate-500">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
}

// Certification badges for trust signals
export function CertificationBadges({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const certifications = lang === "tr" ? [
    "Autodesk Revit Sertifikalı",
    "ISO 19650 BIM Yönetimi",
    "ISO 27001 Bilgi Güvenliği",
    "RICS Standartları Uyumlu"
  ] : [
    "Autodesk Revit Certified",
    "ISO 19650 BIM Management",
    "ISO 27001 Information Security",
    "RICS Standards Compliant"
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {certifications.map((cert, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
        >
          <Shield className="w-4 h-4" />
          {cert}
        </div>
      ))}
    </div>
  );
}
