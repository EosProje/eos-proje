"use client";

import { Download, FileText } from "lucide-react";
import { SAMPLE_FILES_URL } from "@/lib/constants";

interface SampleFilesDownloadProps {
  isEn?: boolean;
}

export function SampleFilesDownload({ isEn = false }: SampleFilesDownloadProps) {
  return (
    <section className="py-12 px-4 bg-blue-50 border-y border-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FileText className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-bold text-slate-900">
            {isEn ? "Sample Project Files" : "Örnek Proje Dosyaları"}
          </h3>
        </div>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          {isEn 
            ? "Download sample Revit models and IFC files to see the quality of our work. These files demonstrate our LOD standards and modeling approach."
            : "Çalışmalarımızın kalitesini görmek için örnek Revit modellerini ve IFC dosyalarını indirin. Bu dosyalar LOD standartlarımızı ve modelleme yaklaşımımızı göstermektedir."
          }
        </p>
        <a
          href={SAMPLE_FILES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          <Download className="w-5 h-5" />
          {isEn ? "Download Sample Files (Revit & IFC)" : "Örnek Dosyaları İndir (Revit & IFC)"}
        </a>
      </div>
    </section>
  );
}

export default SampleFilesDownload;
