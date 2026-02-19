"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    alt: string;
    className?: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Ham Nokta Bulutu",
    afterLabel = "BIM Modeli (Revit)",
    alt,
    className = ""
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse/Touch olaylarını dinle
    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;

        setSliderPosition(percentage);
    };

    const handleMouseDown = () => setIsResizing(true);
    const handleTouchStart = () => setIsResizing(true);
    const handleMouseUp = () => setIsResizing(false);
    const handleTouchEnd = () => setIsResizing(false);

    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;
            handleMove(e.clientX);
        };

        const handleGlobalTouchMove = (e: TouchEvent) => {
            if (!isResizing) return;
            handleMove(e.touches[0].clientX);
        };

        window.addEventListener("mousemove", handleGlobalMouseMove);
        window.addEventListener("touchmove", handleGlobalTouchMove);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("mousemove", handleGlobalMouseMove);
            window.removeEventListener("touchmove", handleGlobalTouchMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isResizing]);

    return (
        <div className={`relative w-full aspect-video rounded-[2rem] overflow-hidden select-none shadow-2xl border border-slate-200 ${className}`} ref={containerRef}>

            {/* Alt Katman: After Image (Model) */}
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt={`${alt} - After`}
                    fill
                    className="object-cover"
                    priority
                />
                <span className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md text-[var(--color-primary-red)] text-xs font-black uppercase tracking-widest rounded-xl shadow-lg z-10">
                    {afterLabel}
                </span>
            </div>

            {/* Üst Katman: Before Image (Point Cloud) - Clip Path ile maskeleme */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <Image
                    src={beforeImage}
                    alt={`${alt} - Before`}
                    fill
                    className="object-cover"
                    priority
                />
                <span className="absolute top-6 left-6 px-4 py-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg z-10">
                    {beforeLabel}
                </span>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-slate-100/50 backdrop-blur-sm transition-transform hover:scale-110 active:scale-95">
                    <MoveHorizontal className="w-5 h-5 text-[var(--color-primary-red)]" />
                </div>
            </div>

            {/* Etkileşim İpucu (Sadece başta görünür, sonra kaybolabilir veya sürekli kalabilir - sade tuttum) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none opacity-60">
                <span className="text-[10px] font-black uppercase text-white drop-shadow-md tracking-[0.2em] bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    Karşılaştırmak için Sürükleyin
                </span>
            </div>
        </div>
    );
}
