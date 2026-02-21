import React from "react";
import {
    CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { FAQ, FAQSection, Callout, ExpertQuote } from "./InteractiveComponents";

// Exporting components list
export const mdxComponents: Record<string, React.ComponentType<any>> = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight" />,
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 {...props} className="text-3xl md:text-5xl font-black text-slate-900 mt-24 mb-10 tracking-tight leading-tight pt-10 border-t border-slate-50 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-[var(--color-primary-red)] block shrink-0"></span>
            {props.children}
        </h2>
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 {...props} className="text-2xl font-black text-slate-900 mt-16 mb-6 leading-tight flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-red-500" />
            {props.children}
        </h3>
    ),
    h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h4 {...props} className="text-xl font-black text-slate-900 mb-4" />,
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props} className="mb-8 leading-relaxed text-slate-600 text-lg font-medium" />,
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <Link href={props.href || '#'} className="text-[var(--color-primary-red)] no-underline hover:underline font-bold" {...props} />,
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul {...props} className="space-y-5 my-10" />,
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol {...props} className="list-decimal list-inside space-y-4 my-10 text-slate-600 font-medium" />,
    li: (props: React.HTMLAttributes<HTMLLIElement>) => {
        const content = props.children;
        const isTask = typeof content === 'string' && (content.startsWith('[ ]') || content.startsWith('[x]'));

        if (isTask) {
            const checked = content.startsWith('[x]');
            return (
                <li className="flex gap-4 items-center bg-slate-50/50 p-4 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-md">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${checked ? 'bg-green-500 text-white' : 'bg-white border-2 border-slate-200 text-transparent'}`}>
                        <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className={`text-sm font-bold ${checked ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                        {content.replace('[ ]', '').replace('[x]', '').trim()}
                    </span>
                </li>
            );
        }

        return (
            <li className="flex gap-4 group">
                <span className="w-2 h-2 bg-red-100 border-2 border-[var(--color-primary-red)] rounded-full mt-2.5 shrink-0 transition-all group-hover:scale-125 group-hover:bg-[var(--color-primary-red)]"></span>
                <span className="text-slate-600 font-medium leading-[1.7]">{content}</span>
            </li>
        );
    },
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-16 overflow-x-auto rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/30 no-scrollbar">
            <table className="min-w-full border-collapse" {...props} />
        </div>
    ),
    thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => <thead className="bg-white border-b-2 border-slate-50" {...props} />,
    th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => <th className="px-10 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-[0.25em]" {...props} />,
    td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => <td className="px-10 py-6 text-sm text-slate-600 font-bold border-t border-slate-50 bg-white/50" {...props} />,
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code className="px-2 py-0.5 bg-slate-100 text-[var(--color-primary-red)] rounded-md font-mono text-sm font-bold">
            {props.children}
        </code>
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <div className="relative my-12 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <pre className="relative bg-slate-900 p-10 rounded-[2rem] overflow-x-auto text-slate-300 font-mono text-sm leading-relaxed shadow-2xl" {...props} />
        </div>
    ),
    hr: () => <hr className="my-24 border-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />,
    Callout,
    ExpertQuote,
    FAQ,
    FAQSection,
};
