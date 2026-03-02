"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_CURVES } from "@/lib/animations";

export interface FAQItem {
  question: string;
  answer: string;
  link?: string; // Optional internal link for SEO
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  showSchema?: boolean;
  variant?: "default" | "compact" | "card";
  className?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function FAQ({
  title = "Sıkça Sorulan Sorular",
  subtitle,
  faqs,
  showSchema = true,
  variant = "default",
  className = "",
  ctaText,
  ctaLink = "/iletisim"
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQPage Schema
  const faqSchema = showSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const containerVariants = {
    default: "bg-slate-50 py-20 px-4",
    compact: "py-12 px-4",
    card: "bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
  };

  return (
    <section className={`${containerVariants[variant]} ${className}`}>
      {showSchema && faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        {title && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[var(--color-primary-red)] font-black uppercase tracking-[0.2em] text-[10px] bg-red-50/50 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-3 h-3" />
              Bilgi Merkezi
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-2xl border-2 border-slate-100 hover:border-red-100 transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="text-base md:text-lg font-bold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  openIndex === idx 
                    ? 'bg-[var(--color-primary-red)] text-white' 
                    : 'bg-slate-100 text-slate-400'
                }`}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE_CURVES.smooth }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                        {faq.link && (
                          <Link 
                            href={faq.link}
                            className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-[var(--color-primary-red)] hover:underline"
                          >
                            Daha fazla bilgi →
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">Sorunuza cevap bulamadınız mı?</p>
            <Link 
              href={ctaLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary-red)] text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// English version
export function FAQEn({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  showSchema = true,
  variant = "default",
  className = "",
  ctaText,
  ctaLink = "/en/contact"
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = showSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const containerVariants = {
    default: "bg-slate-50 py-20 px-4",
    compact: "py-12 px-4",
    card: "bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
  };

  return (
    <section className={`${containerVariants[variant]} ${className}`}>
      {showSchema && faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-4xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[var(--color-primary-red)] font-black uppercase tracking-[0.2em] text-[10px] bg-red-50/50 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-3 h-3" />
              Knowledge Base
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-2xl border-2 border-slate-100 hover:border-red-100 transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-en-${idx}`}
              >
                <span className="text-base md:text-lg font-bold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  openIndex === idx 
                    ? 'bg-[var(--color-primary-red)] text-white' 
                    : 'bg-slate-100 text-slate-400'
                }`}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-en-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE_CURVES.smooth }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                        {faq.link && (
                          <Link 
                            href={faq.link}
                            className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-[var(--color-primary-red)] hover:underline"
                          >
                            Learn more →
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {ctaText && (
          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">Can&apos;t find your answer?</p>
            <Link 
              href={ctaLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary-red)] text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
