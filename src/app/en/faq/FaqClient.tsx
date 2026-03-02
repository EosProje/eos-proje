"use client";

import { useState } from "react";
import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import { ChevronDown, HelpCircle, Wrench, CreditCard, Settings, MessageCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  title: string;
  icon: React.ReactNode;
  items: FaqItem[];
}

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<string | null>("general-0");

  const faqCategories: FaqCategory[] = [
    {
      title: "General Questions",
      icon: <HelpCircle className="w-5 h-5" />,
      items: [
        {
          q: "What services does Eos Proje offer?",
          a: "Eos Proje offers 3D laser scanning, Point Cloud to BIM modeling, as-built documentation, MEP modeling, digital twin creation, HBIM (Heritage Building Information Modeling), survey services, and mapping services. We provide comprehensive solutions for industrial facilities, commercial buildings, historical monuments, and retail chains."
        },
        {
          q: "Which sectors do you have experience in?",
          a: "We have completed 50+ projects in many sectors including petrochemical and refinery, automotive production plants, food and beverage factories, power plants, logistics warehouses, mall and hotel complexes, airport terminals, and historical building restorations. We serve throughout Turkey and Europe."
        },
        {
          q: "Do you provide services outside of Turkey?",
          a: "Yes, we carry out site work in Central Europe (Hungary, Austria, Germany) through our Budapest office. We can also process point cloud data from anywhere in the world with our remote (offshore) modeling service."
        },
        {
          q: "Do you sign an NDA (Non-Disclosure Agreement)?",
          a: "Absolutely. Even if the client doesn't request it, we sign an NDA as standard. All project files are stored on encrypted servers and deleted 6 months after project completion (we archive upon request). Team members sign confidentiality undertakings. We comply with ISO 27001 information security standards."
        },
        {
          q: "How many people are on your team?",
          a: "Our team consists of 8+ core staff including survey engineers, architects, mechanical engineers, and BIM specialists. We can expand our capacity with our business partners for large projects."
        }
      ]
    },
    {
      title: "About Services",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        {
          q: "How long does the Point Cloud to BIM process take?",
          a: "It varies depending on project size. For an average 3,000-5,000 m² industrial facility, scanning takes 2-3 days and modeling takes 10-15 business days. Including shipping time, we deliver within 3-4 weeks total. We have an express option for urgent projects."
        },
        {
          q: "What LOD (Level of Development) levels do you work with?",
          a: "We provide services at all levels from LOD 200 to LOD 400. LOD 200: General geometry and approximate dimensions. LOD 300: Exact dimensions, material definitions, and connection points. LOD 350: Detailed interface information. LOD 400: Fabrication-level details (typically for prefabricated elements). We determine the most suitable LOD together based on your project needs."
        },
        {
          q: "Which software and file formats do you deliver in?",
          a: "We deliver in Revit native (.rvt), IFC 2x3 or IFC4 open BIM format, AutoCAD DWG plans, Navisworks (.nwc) files, and raw point cloud data (E57, RCS, RCP) formats. Upon request, we can also provide PDF A0 drawings and COBie spreadsheets."
        },
        {
          q: "Do facility operations stop during laser scanning?",
          a: "No, in most cases, we scan while the facility continues to operate. Short-term access permission may only be required in critical safety areas (height work, hazardous chemical zones). We adjust the scanning plan according to your production schedule; we typically work between shifts or on weekends."
        },
        {
          q: "How is modeling accuracy guaranteed?",
          a: "We have a three-stage QA/QC process: 1) Internal check by the modeling team. 2) Geometric verification by an independent quality control specialist. 3) Point cloud-model overlay comparison (deviation analysis) with CloudCompare. We provide a ±2mm accuracy report in the delivery package. Additionally, all Revit Warnings are cleared and clash detection is performed."
        },
        {
          q: "Do you perform remote (offshore) modeling?",
          a: "Yes, our team performs the site scanning on-site, or you can scan and send us the point cloud data. The modeling work is carried out at our Turkey office. We track progress with weekly online meetings. This allows us to serve global clients."
        },
        {
          q: "Do you work on historical building restoration projects?",
          a: "Yes, we specialize in as-built documentation of historical structures. We perform precise laser scanning of buildings with cultural heritage status, model original building elements (stone masonry, wooden details, ornaments) in high resolution, and report them for submission to the conservation board."
        },
        {
          q: "Why do I need to convert my 2D CAD drawings to BIM?",
          a: "Working with old 2D plans causes many problems: Plans, sections, and views are not synchronized, changes are made manually, quantity takeoff takes a lot of time, and clash detection cannot be performed. When you switch to a BIM model, all these problems are solved, projects progress 30-40% faster, and error rates decrease."
        }
      ]
    },
    {
      title: "Pricing and Process",
      icon: <CreditCard className="w-5 h-5" />,
      items: [
        {
          q: "How is pricing determined?",
          a: "We provide project-based quotes. Factors affecting price: Area to be scanned (m²), model LOD level, number of disciplines (architectural only or including MEP), project urgency, and delivery formats. We conduct a free preliminary meeting and provide you with a detailed custom quote. We have a fixed price guarantee; we don't charge extra fees unless the project scope changes."
        },
        {
          q: "Do you provide post-delivery support?",
          a: "Yes, we respond to questions and correction requests regarding model usage free of charge within 30 days after delivery. We also have optional training packages: Revit model navigation, Schedule usage, view management, and simple editing operations. We also offer long-term maintenance contracts."
        },
        {
          q: "What are the payment terms?",
          a: "For standard projects, we take 50% upfront and 50% after delivery. We apply phased payment plans for large projects. We can offer 30-60 day terms for corporate clients. Invoicing is done after project delivery."
        },
        {
          q: "Do you conduct a site assessment before starting the project?",
          a: "Yes, we conduct a free preliminary site visit for complex or large projects. We assess site conditions, access restrictions, and special requirements on-site. For simple projects, we hold a scope determination meeting via video conference."
        }
      ]
    },
    {
      title: "Technical Questions",
      icon: <Settings className="w-5 h-5" />,
      items: [
        {
          q: "What is the accuracy of laser scanning?",
          a: "The Leica RTC360 and Faro Focus devices we use offer ±2mm accuracy at 10m distance. Total project accuracy varies between ±3-8mm depending on the number of scanning stations and registration quality. We perform control point verification for critical measurements."
        },
        {
          q: "Which laser scanning equipment do you use?",
          a: "For static scanning, we use Leica RTC360 and Faro Focus S350; for mobile scanning, we use Leica BLK2GO and GeoSLAM ZEB Horizon. For drone photogrammetry, we prefer DJI Mavic 3E. We select the most appropriate technology based on project requirements."
        },
        {
          q: "What is the file size of point cloud data?",
          a: "It varies depending on project size. For an average facility (5,000-10,000 m²), 10-50 GB of raw data is generated. Processed and optimized RCS/RCP files are smaller. We offer secure FTP or physical delivery (HDD) options for large files."
        },
        {
          q: "How is a clash detection report prepared?",
          a: "We perform automatic conflict analysis between all disciplines (architectural, structural, MEP) using Autodesk Navisworks. We report in hard clash (physical intersection), soft clash (minimum clearance violation), and workflow clash (sequencing errors) categories. We provide a detailed report including location, priority, and solution recommendations for each clash."
        },
        {
          q: "What information is included in the BIM model?",
          a: "In addition to geometric data (dimensions, location, slope), parametric data such as material information, equipment tags, pipe diameters, fire resistance classes, manufacturer data, and maintenance information are added. We can also provide COBie standard compliant data output."
        }
      ]
    },
    {
      title: "Support and Contact",
      icon: <MessageCircle className="w-5 h-5" />,
      items: [
        {
          q: "What do I need to do to get a quote?",
          a: "You can fill out the contact form on our website, send an email to info@eosproje.com, or call +90 530 664 2263. Simply provide brief information about the project scope, location, and timeline. We'll get back to you within 24 hours."
        },
        {
          q: "Who will I contact during the project?",
          a: "A project manager is assigned to each project. Your project manager serves as your single point of contact throughout the process. You can always reach them for weekly progress reports, milestone meetings, and instant questions."
        },
        {
          q: "Do you have an express service for urgent projects?",
          a: "Yes, we offer express service for urgent projects. Accelerated delivery up to 50% of standard times is possible. Additional fees apply for express projects. We accept based on our current capacity."
        }
      ]
    }
  ];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(cat => 
      cat.items.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SubPageHero
        title="Frequently Asked Questions"
        description="Answers to the most frequently asked questions about our Point Cloud to BIM, as-built modeling, and laser scanning services."
        category="Info Center"
        breadcrumb={[{ label: "FAQ", href: "/en/faq" }]}
      />

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {faqCategories.map((category, catIdx) => (
            <button
              key={catIdx}
              onClick={() => {
                document.getElementById(`category-${catIdx}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[var(--color-primary-red)] rounded-full text-sm font-bold transition-all"
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} id={`category-${catIdx}`} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-50 rounded-xl text-[var(--color-primary-red)]">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-black text-slate-900">{category.title}</h2>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500">
                  {category.items.length} Questions
                </span>
              </div>

              <div className="space-y-3">
                {category.items.map((faq, idx) => {
                  const itemKey = `${catIdx}-${idx}`;
                  return (
                    <div key={idx} className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-red-100 transition-all">
                      <button
                        onClick={() => setOpenIndex(openIndex === itemKey ? null : itemKey)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-base font-bold text-slate-900">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-[var(--color-primary-red)] flex-shrink-0 transition-transform ${openIndex === itemKey ? 'rotate-180' : ''}`} />
                      </button>
                      {openIndex === itemKey && (
                        <div className="px-6 pb-5">
                          <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-2xl font-black mb-4">Couldn't Find Your Answer?</h2>
          <p className="text-red-100 mb-8">Contact us for detailed information.</p>
          <Link href="/en/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-black rounded-xl hover:bg-slate-100 transition-all">
            Contact Form
          </Link>
        </div>
      </div>
    </div>
  );
}
