"use client";

import { Info, Lightbulb, Clock, CheckCircle2 } from "lucide-react";

interface TLDRProps {
  title?: string;
  points: string[];
  readTime?: string;
  variant?: "info" | "tip" | "summary";
  className?: string;
}

export default function TLDR({
  title = "Özet (TL;DR)",
  points,
  readTime,
  variant = "summary",
  className = ""
}: TLDRProps) {
  const variants = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: <Info className="w-5 h-5 text-blue-600" />,
      title: "text-blue-900",
      bullet: "bg-blue-500"
    },
    tip: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
      title: "text-amber-900",
      bullet: "bg-amber-500"
    },
    summary: {
      bg: "bg-slate-50",
      border: "border-slate-200",
      icon: <CheckCircle2 className="w-5 h-5 text-slate-600" />,
      title: "text-slate-900",
      bullet: "bg-red-500"
    }
  };

  const style = variants[variant];

  return (
    <div className={`${style.bg} ${style.border} border-2 rounded-2xl p-6 mb-8 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-0.5">
          {style.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h4 className={`font-bold ${style.title}`}>{title}</h4>
            {readTime && (
              <div className="flex items-center gap-1 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                {readTime}
              </div>
            )}
          </div>
          <ul className="space-y-2">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700">
                <span className={`w-1.5 h-1.5 ${style.bullet} rounded-full mt-2 flex-shrink-0`} />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// English variant
export function TLDREn({
  title = "Summary (TL;DR)",
  points,
  readTime,
  variant = "summary",
  className = ""
}: TLDRProps) {
  const variants = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: <Info className="w-5 h-5 text-blue-600" />,
      title: "text-blue-900",
      bullet: "bg-blue-500"
    },
    tip: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
      title: "text-amber-900",
      bullet: "bg-amber-500"
    },
    summary: {
      bg: "bg-slate-50",
      border: "border-slate-200",
      icon: <CheckCircle2 className="w-5 h-5 text-slate-600" />,
      title: "text-slate-900",
      bullet: "bg-red-500"
    }
  };

  const style = variants[variant];

  return (
    <div className={`${style.bg} ${style.border} border-2 rounded-2xl p-6 mb-8 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-0.5">
          {style.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h4 className={`font-bold ${style.title}`}>{title}</h4>
            {readTime && (
              <div className="flex items-center gap-1 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                {readTime}
              </div>
            )}
          </div>
          <ul className="space-y-2">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700">
                <span className={`w-1.5 h-1.5 ${style.bullet} rounded-full mt-2 flex-shrink-0`} />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
