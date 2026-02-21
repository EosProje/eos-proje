"use client";

import React, { useState } from "react";
import { ChevronDown, Info, AlertTriangle, Lightbulb, FileText, Quote } from "lucide-react";

export const FAQ = ({ question, children }: { question: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-6 border-b border-slate-100 last:border-0 group">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex items-center justify-between group"
            >
                <h4 className={`text-lg md:text-xl font-black transition-colors ${isOpen ? 'text-[var(--color-primary-red)]' : 'text-slate-900 group-hover:text-[var(--color-primary-red)]'}`}>
                    {question}
                </h4>
                <ChevronDown className={`w-5 h-5 text-slate-300 transition-all duration-300 ${isOpen ? 'rotate-180 text-[var(--color-primary-red)]' : 'group-hover:text-[var(--color-primary-red)]'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="text-slate-500 font-medium leading-relaxed pb-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const FAQSection = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-slate-50/50 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 my-16 md:my-20 border border-slate-100">
        <div className="flex items-center gap-3 mb-10">
            <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-[var(--color-primary-red)]" />
            </span>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">SÃ„Â±kÃƒÂ§a Sorulan Sorular</h3>
        </div>
        <div className="space-y-2">
            {children}
        </div>
    </div>
);

export const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" | "tip" | "summary" }) => {
    const icons = {
        info: <Info className="w-5 h-5 text-blue-500" />,
        warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
        tip: <Lightbulb className="w-5 h-5 text-emerald-500" />,
        summary: <FileText className="w-5 h-5 text-[var(--color-primary-red)]" />,
    };

    const styles = {
        info: "bg-blue-50/50 border-blue-100 text-blue-900",
        warning: "bg-amber-50/50 border-amber-100 text-amber-900",
        tip: "bg-emerald-50/50 border-emerald-100 text-emerald-900",
        summary: "bg-slate-900 border-slate-800 text-white shadow-2xl shadow-slate-900/20",
    };

    return (
        <div className={`p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 my-12 ${styles[type]} leading-relaxed font-medium transition-all hover:shadow-lg relative overflow-hidden group`}>
            {type !== 'summary' && (
                <div className="absolute top-6 right-8 opacity-20 group-hover:opacity-40 transition-opacity">
                    {icons[type]}
                </div>
            )}

            {type === 'summary' && (
                <div className="flex items-center gap-3 mb-6 text-[var(--color-primary-red)] text-xs font-black uppercase tracking-[0.3em]">
                    <span className="w-2 h-2 bg-[var(--color-primary-red)] rounded-full animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.5)]"></span>
                    Analitik Ãƒâ€“zet
                </div>
            )}

            <div className={type === 'summary' ? 'text-slate-300 text-lg leading-relaxed italic' : 'relative z-10'}>
                {children}
            </div>
        </div>
    );
};

export const ExpertQuote = ({ children, author, role }: { children: React.ReactNode; author?: string; role?: string }) => (
    <div className="my-16 md:my-24 relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-50 rounded-full opacity-40 blur-3xl z-0"></div>
        <div className="relative z-10 bg-white p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
            <Quote className="w-12 h-12 text-[var(--color-primary-red)] opacity-10 absolute top-8 left-8" />
            <div className="relative z-20 text-xl md:text-3xl text-slate-800 leading-[1.4] md:leading-[1.3] font-black italic tracking-tight">
                {children}
            </div>
            {(author || role) && (
                <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-slate-50 flex items-center gap-4 md:gap-6 not-italic text-left">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-100 rounded-xl md:rounded-2xl flex items-center justify-center text-slate-300 overflow-hidden shrink-0">
                        <span className="font-black text-lg">{author?.[0]}</span>
                    </div>
                    <div>
                        <p className="font-black text-slate-900 text-xs md:text-sm uppercase tracking-widest mb-1">{author}</p>
                        <p className="text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">{role}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
);
