/**
 * Simple utility for mobile haptic feedback
 * Uses high-priority vibration if supported by device
 */
export const triggerHaptic = (intensity: number = 10) => {
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(intensity);
    }
};
