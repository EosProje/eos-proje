import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from "lucide-react";
import { FAQ, FAQSection, Callout, ExpertQuote } from '@/components/mdx/InteractiveComponents';

/**
 * Parses markdown but also handles custom component TAGS like <Callout>, <FAQ>, etc.
 */
export function MDXRenderer({ content }: { content: string }) {
    // This is a more advanced parser that can handle both standard MD and custom component tags
    const lines = content.split("\n");
    const result: React.ReactNode[] = [];

    let i = 0;
    while (i < lines.length) {
        let line = lines[i];
        const trimmed = line.trim();

        if (!trimmed) {
            i++;
            continue;
        }

        // --- Custom Component: FAQSection ---
        if (trimmed.startsWith("<FAQSection>")) {
            let faqContent: React.ReactNode[] = [];
            i++;
            while (i < lines.length && !lines[i].trim().startsWith("</FAQSection>")) {
                const innerLine = lines[i].trim();
                if (innerLine.startsWith("<FAQ")) {
                    // Extract question property from <FAQ question="...">
                    const qMatch = innerLine.match(/question="([^"]+)"/);
                    const question = qMatch ? qMatch[1] : "Soru";

                    // Extract children until </FAQ>
                    let childrenLines: string[] = [];
                    i++;
                    while (i < lines.length && !lines[i].trim().startsWith("</FAQ>")) {
                        childrenLines.push(lines[i]);
                        i++;
                    }
                    faqContent.push(<FAQ key={i} question={question}>{renderBasicMarkdown(childrenLines.join("\n"))}</FAQ>);
                }
                i++;
            }
            result.push(<FAQSection key={i}>{faqContent}</FAQSection>);
            i++;
            continue;
        }

        // --- Custom Component: Callout ---
        if (trimmed.startsWith("<Callout")) {
            const typeMatch = trimmed.match(/type="([^"]+)"/);
            const type = (typeMatch ? typeMatch[1] : "info") as any;

            let childrenLines: string[] = [];
            i++;
            while (i < lines.length && !lines[i].trim().startsWith("</Callout>")) {
                childrenLines.push(lines[i]);
                i++;
            }
            result.push(<Callout key={i} type={type}>{renderBasicMarkdown(childrenLines.join("\n"))}</Callout>);
            i++;
            continue;
        }

        // --- Custom Component: ExpertQuote ---
        if (trimmed.startsWith("<ExpertQuote")) {
            const authorMatch = trimmed.match(/author="([^"]+)"/);
            const roleMatch = trimmed.match(/role="([^"]+)"/);
            const author = authorMatch ? authorMatch[1] : "";
            const role = roleMatch ? roleMatch[1] : "";

            let childrenLines: string[] = [];
            i++;
            while (i < lines.length && !lines[i].trim().startsWith("</ExpertQuote>")) {
                childrenLines.push(lines[i]);
                i++;
            }
            result.push(<ExpertQuote key={i} author={author} role={role}>{renderBasicMarkdown(childrenLines.join("\n"))}</ExpertQuote>);
            i++;
            continue;
        }

        // --- Standard Markdown Elements ---
        if (line.startsWith("# ")) {
            result.push(<h1 key={i} className="text-3xl md:text-5xl font-black text-slate-900 mb-10 leading-tight">{renderInlineContent(line.replace("# ", ""))}</h1>);
        } else if (line.startsWith("## ")) {
            result.push(
                <h2 key={i} className="text-3xl md:text-4xl font-black text-slate-900 mt-20 mb-8 tracking-tight leading-tight flex items-center gap-4">
                    <span className="w-8 h-[3px] bg-[var(--color-primary-red)] block shrink-0"></span>
                    {renderInlineContent(line.replace("## ", ""))}
                </h2>
            );
        } else if (line.startsWith("### ")) {
            result.push(<h3 key={i} className="text-xl md:text-2xl font-black text-slate-900 mt-12 mb-6 flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-500" />{renderInlineContent(line.replace("### ", ""))}</h3>);
        } else if (line.startsWith("- ") || line.startsWith("* ")) {
            result.push(
                <div key={i} className="flex items-start gap-4 mb-5 pl-2 group">
                    <span className="w-2 h-2 bg-red-100 border-2 border-[var(--color-primary-red)] rounded-full mt-2.5 shrink-0 transition-all group-hover:scale-125 group-hover:bg-[var(--color-primary-red)]"></span>
                    <span className="text-slate-600 font-medium leading-relaxed">{renderInlineContent(line.replace(/^[-*] /, ""))}</span>
                </div>
            );
        } else if (trimmed.match(/^\d+\.\s/)) {
            const num = trimmed.match(/^\d+/)?.[0];
            const text = trimmed.replace(/^\d+\.\s/, "");
            const parts = text.split(":");
            if (parts.length > 1) {
                result.push(
                    <div key={i} className="flex items-start gap-5 mb-8 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-red-50 hover:shadow-xl transition-all group">
                        <span className="w-10 h-10 rounded-2xl bg-[var(--color-primary-red)] text-white flex items-center justify-center font-black text-lg flex-shrink-0 shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
                            {num}
                        </span>
                        <div>
                            <h4 className="font-black text-slate-900 text-lg mb-1">{renderInlineContent(parts[0])}</h4>
                            <p className="text-slate-500 font-medium m-0 leading-relaxed">{renderInlineContent(parts.slice(1).join(":"))}</p>
                        </div>
                    </div>
                );
            } else {
                result.push(
                    <div key={i} className="flex items-start gap-3 mb-4 pl-2">
                        <span className="font-black text-[var(--color-primary-red)] text-xl w-8">{num}.</span>
                        <span className="text-slate-600 font-medium leading-relaxed">{renderInlineContent(text)}</span>
                    </div>
                );
            }
        } else if (trimmed === "---") {
            result.push(<hr key={i} className="my-16 border-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />);
        } else if (line.startsWith("> ")) {
            result.push(<blockquote key={i} className="border-l-8 border-[var(--color-primary-red)] pl-8 py-4 my-12 italic text-2xl font-black text-slate-800 bg-slate-50 rounded-r-[2rem] leading-relaxed shadow-sm">{renderInlineContent(line.replace("> ", ""))}</blockquote>);
        } else if (line.startsWith("|") && lines[i + 1]?.startsWith("|---")) {
            // SIMPLE TABLE PARSER
            let tableLines: string[] = [];
            while (i < lines.length && lines[i].startsWith("|")) {
                tableLines.push(lines[i]);
                i++;
            }
            result.push(renderTable(tableLines));
            continue; // Already incremented i
        } else {
            result.push(<p key={i} className="mb-8 leading-relaxed text-slate-600 text-lg font-medium">{renderInlineContent(line)}</p>);
        }

        i++;
    }

    return (
        <div className="prose prose-lg max-w-none">
            {result}
        </div>
    );
}

function renderBasicMarkdown(text: string): React.ReactNode {
    return text.split("\n").map((line, i) => <p key={i} className="mb-4 last:mb-0">{renderInlineContent(line.trim())}</p>);
}

function renderInlineContent(text: string): React.ReactNode {
    if (!text) return null;

    // Links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = text.split(linkRegex);

    if (parts.length === 1) return renderFormatting(text);

    const result: React.ReactNode[] = [];
    for (let i = 0; i < parts.length; i += 3) {
        if (parts[i]) result.push(renderFormatting(parts[i]));
        if (i + 1 < parts.length && i + 2 < parts.length) {
            result.push(
                <Link key={`link-${i}`} href={parts[i + 2]} className="text-[var(--color-primary-red)] hover:text-red-700 font-bold no-underline hover:underline transition-colors">
                    {parts[i + 1]}
                </Link>
            );
        }
    }
    return <>{result}</>;
}

function renderFormatting(text: string): React.ReactNode {
    // Bold: **text**
    const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
        <>
            {boldParts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={`bold-${index}`} className="font-black text-slate-900">{part.slice(2, -2)}</strong>;
                }

                // Italic: _text_
                const italicParts = part.split(/(_[^_]+_)/g);
                return italicParts.map((iPart, iIndex) => {
                    if (iPart.startsWith('_') && iPart.endsWith('_')) {
                        return <em key={`italic-${index}-${iIndex}`} className="italic text-slate-500">{iPart.slice(1, -1)}</em>;
                    }
                    return iPart;
                });
            })}
        </>
    );
}

function renderTable(lines: string[]): React.ReactNode {
    const headers = lines[0].split("|").filter(h => h.trim()).map(h => h.trim());
    const body = lines.slice(2).map(line => line.split("|").filter(c => c.trim()).map(c => c.trim()));

    return (
        <div className="my-16 overflow-x-auto rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/30">
            <table className="min-w-full border-collapse bg-white">
                <thead className="bg-slate-50 border-b-2 border-slate-100">
                    <tr>
                        {headers.map((h, i) => (
                            <th key={i} className="px-8 py-5 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {body.map((row, ri) => (
                        <tr key={ri} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                            {row.map((cell, ci) => (
                                <td key={ci} className="px-8 py-5 text-sm text-slate-600 font-bold">{renderInlineContent(cell)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
