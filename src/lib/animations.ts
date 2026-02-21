// Type definition for Framer Motion custom easing curves
export type CustomEasingArray = [number, number, number, number];

// Common easing curves used throughout the app
export const EASE_CURVES = {
    smooth: [0.16, 1, 0.3, 1] as CustomEasingArray,
    spring: [0.6, 0.01, -0.05, 0.95] as CustomEasingArray,
    bounce: [0.68, -0.55, 0.265, 1.55] as CustomEasingArray,
} as const;
