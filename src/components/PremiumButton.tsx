"use client";

import React from "react";
import { triggerHaptic } from "@/lib/haptics";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    children: React.ReactNode;
    className?: string;
}

export default function PremiumButton({
    variant = "primary",
    children,
    className = "",
    onClick,
    ...props
}: PremiumButtonProps) {
    const baseStyles = "px-6 py-3 rounded-xl font-bold transition-all duration-200 active-shrink hover-lift flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-[var(--color-primary-red)] text-white shadow-lg shadow-red-900/20 hover:bg-black",
        secondary: "bg-[var(--color-deep-charcoal)] text-white shadow-lg shadow-black/10 hover:bg-red-800",
        outline: "border-2 border-[var(--color-primary-red)] text-[var(--color-primary-red)] hover:bg-red-50",
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        triggerHaptic(15);
        if (onClick) onClick(e);
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
}
