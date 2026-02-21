"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface SubPageHeroProps {
    title: string;
    description: string;
    category?: string;
    breadcrumb?: { label: string; href: string }[];
}

export default function SubPageHero({ title, description, category, breadcrumb }: SubPageHeroProps) {
    return (
        <div className="relative bg-grid-pattern pt-40 pb-20 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[120px] -mr-64 -mt-64"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {breadcrumb && (
                    <nav className="flex items-center gap-2 mb-8 overflow-x-auto whitespace-nowrap text-xs font-bold uppercase tracking-widest text-slate-400 no-scrollbar">
                        <Link href="/" className="hover:text-[var(--color-primary-red)] transition-colors">Ana Sayfa</Link>
                        {breadcrumb.map((item, i) => (
                            <span key={i} className="flex items-center gap-2">
                                <ChevronRight className="w-3 h-3" />
                                <Link href={item.href} className="hover:text-[var(--color-primary-red)] transition-colors">{item.label}</Link>
                            </span>
                        ))}
                    </nav>
                )}

                {category && (
                    <span className="inline-block px-4 py-1.5 bg-red-50 text-[var(--color-primary-red)] text-[10px] font-black rounded-full uppercase tracking-[0.2em] mb-6">
                        {category}
                    </span>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] text-[var(--color-deep-charcoal)]"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl text-slate-500 max-w-3xl font-medium leading-relaxed"
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
}
