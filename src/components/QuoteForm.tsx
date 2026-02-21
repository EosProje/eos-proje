"use client";

import { useState } from "react";

export default function QuoteForm({ isEn = false }: { isEn?: boolean }) {
    const [formData, setFormData] = useState({
        projectName: "",
        description: "",
        squareMeters: "",
        lodLevel: "",
        address: "",
        email: "",
        phone: "",
    });

    const [files, setFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const labels = isEn ? {
        title: "Request a Quote",
        success: "✓ Your quote request has been sent successfully!",
        successDetail: "We will get back to you as soon as possible.",
        error: "✖ An error occurred.",
        errorDetail: "Please try again or contact us directly.",
        projectName: "Project Name *",
        projectNamePlaceholder: "e.g. Factory Expansion Project",
        description: "Project Details *",
        descriptionPlaceholder: "Provide detailed information about your project...",
        area: "Area (m²) *",
        lod: "Requested LOD Level *",
        lodOptions: [
            { value: "", label: "Select" },
            { value: "200", label: "LOD 200 - Concept" },
            { value: "300", label: "LOD 300 - Detailed Design" },
            { value: "400", label: "LOD 400 - Production/Fabrication" }
        ],
        address: "Project Address *",
        addressPlaceholder: "City, District, Neighborhood",
        email: "Email *",
        phone: "Phone",
        fileLabel: "Add Files (PDF, Images, CAD Drawings)",
        fileHint: "Click to select files",
        submit: "Request Quote",
        submitting: "Sending..."
    } : {
        title: "Teklif Talep Formu",
        success: "✓ Teklif talebiniz başarıyla gönderildi!",
        successDetail: "En kısa sürede size dönüş yapacağız.",
        error: "✖ Bir hata oluştu.",
        errorDetail: "Lütfen tekrar deneyin veya bize doğrudan ulaşın.",
        projectName: "Proje Adı *",
        projectNamePlaceholder: "Örn: Fabrika Genişletme Projesi",
        description: "Proje Detayları *",
        descriptionPlaceholder: "Projeniz hakkında detaylı bilgi verin...",
        area: "Alan (m²) *",
        lod: "İstenen LOD Seviyesi *",
        lodOptions: [
            { value: "", label: "Seçiniz" },
            { value: "200", label: "LOD 200 - Konsept" },
            { value: "300", label: "LOD 300 - Detaylı Tasarım" },
            { value: "400", label: "LOD 400 - Üretim/İmalat" }
        ],
        address: "Proje Adresi *",
        addressPlaceholder: "Şehir, İlçe, Mahalle",
        email: "E-posta *",
        phone: "Telefon",
        fileLabel: "Dosya Ekle (PDF, Fotoğraf, CAD Çizimleri)",
        fileHint: "Dosya seçmek için tıklayın",
        submit: "Teklif Talep Et",
        submitting: "Gönderiliyor..."
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles([...files, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            files.forEach((file) => {
                formDataToSend.append("files", file);
            });

            const response = await fetch("/api/contact", {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            setSubmitStatus("success");

            setFormData({
                projectName: "",
                description: "",
                squareMeters: "",
                lodLevel: "",
                address: "",
                email: "",
                phone: "",
            });
            setFiles([]);
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-deep-charcoal)]">{labels.title}</h2>

            {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">{labels.success}</p>
                    <p className="text-green-600 text-sm mt-1">{labels.successDetail}</p>
                </div>
            )}

            {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-semibold">{labels.error}</p>
                    <p className="text-red-600 text-sm mt-1">{labels.errorDetail}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="projectName" className="block text-sm font-semibold text-slate-700 mb-2">
                        {labels.projectName}
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        required
                        value={formData.projectName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent outline-none transition-all"
                        placeholder={labels.projectNamePlaceholder}
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-2">
                        {labels.description}
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent outline-none transition-all resize-none"
                        placeholder={labels.descriptionPlaceholder}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="squareMeters" className="block text-sm font-semibold text-slate-700 mb-2">
                            {labels.area}
                        </label>
                        <input
                            type="number"
                            id="squareMeters"
                            name="squareMeters"
                            required
                            value={formData.squareMeters}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent outline-none transition-all"
                            placeholder="e.g. 5000"
                        />
                    </div>

                    <div>
                        <label htmlFor="lodLevel" className="block text-sm font-semibold text-slate-700 mb-2">
                            {labels.lod}
                        </label>
                        <select
                            id="lodLevel"
                            name="lodLevel"
                            required
                            value={formData.lodLevel}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent outline-none transition-all bg-white"
                        >
                            {labels.lodOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">
                        {labels.address}
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent outline-none transition-all"
                        placeholder={labels.addressPlaceholder}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                            {labels.email}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent outline-none transition-all"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                            {labels.phone}
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent outline-none transition-all"
                            placeholder="+90 5XX XXX XX XX"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {labels.fileLabel}
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-[var(--color-primary-red)] transition-colors">
                        <input
                            type="file"
                            id="fileUpload"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf,.rvt"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <label
                            htmlFor="fileUpload"
                            className="cursor-pointer inline-flex flex-col items-center"
                        >
                            <svg className="w-12 h-12 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="text-sm text-slate-600">{labels.fileHint}</span>
                            <span className="text-xs text-slate-400 mt-1">PDF, JPG, PNG, DWG, DXF, RVT</span>
                        </label>
                    </div>

                    {files.length > 0 && (
                        <div className="mt-4 space-y-2">
                            {files.map((file, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-medium text-slate-700">{file.name}</p>
                                            <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeFile(index)}
                                        className="text-red-500 hover:text-red-700 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-[var(--color-primary-red)] hover:bg-red-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isSubmitting ? labels.submitting : labels.submit}
                    </button>
                </div>
            </form>
        </div>
    );
}
