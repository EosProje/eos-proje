"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
    className?: string;
    count?: number;
}

export default function Skeleton({ className = "", count = 1 }: SkeletonProps) {
    return (
        <>
            {[...Array(count)].map((_, i) => (
                <div
                    key={i}
                    className={`relative overflow-hidden bg-slate-200 rounded-2xl ${className}`}
                >
                    <motion.div
                        animate={{
                            x: ["-100%", "100%"]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    ></motion.div>
                </div>
            ))}
        </>
    );
}
