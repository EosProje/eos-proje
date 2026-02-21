"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SmartImageProps extends ImageProps {
    fallbackSrc?: string;
}

export default function SmartImage({
    src,
    alt,
    fallbackSrc = "/images/EosProje-Lazer-Tarama-Sistemleri.webp",
    ...props
}: SmartImageProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    return (
        <Image
            {...props}
            src={hasError ? fallbackSrc : imgSrc}
            alt={alt}
            onError={() => {
                if (!hasError) {
                    setHasError(true);
                }
            }}
        />
    );
}
