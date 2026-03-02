/**
 * Performance Utilities for Core Web Vitals Optimization
 * 
 * INP (Interaction to Next Paint) Optimization:
 * - Use debounce/throttle for input handlers
 * - Defer non-critical updates
 * - Keep interactions under 200ms
 * 
 * LCP (Largest Contentful Paint) Optimization:
 * - Preload critical resources
 * - Optimize images
 * - Minimize render-blocking resources
 * 
 * CLS (Cumulative Layout Shift) Optimization:
 * - Set explicit dimensions on media
 * - Reserve space for dynamic content
 * - Use transform for animations
 */

/**
 * Debounce function for INP optimization
 * Delays execution until after wait milliseconds have elapsed since the last call
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/**
 * Throttle function for INP optimization
 * Limits execution to at most once per wait milliseconds
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let lastTime = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    const now = Date.now();

    if (now - lastTime >= wait) {
      lastTime = now;
      func.apply(this, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastTime = Date.now();
        func.apply(this, args);
        timeoutId = null;
      }, wait - (now - lastTime));
    }
  };
}

/**
 * Request Idle Callback polyfill for deferring non-critical work
 */
export const requestIdleCallback =
  typeof window !== 'undefined'
    ? window.requestIdleCallback ||
      function (callback: IdleRequestCallback): number {
        const start = Date.now();
        return window.setTimeout(() => {
          callback({
            didTimeout: false,
            timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
          });
        }, 1) as unknown as number;
      }
    : (callback: IdleRequestCallback) => setTimeout(() => callback({
        didTimeout: false,
        timeRemaining: () => 50
      }), 1);

/**
 * Cancel Idle Callback polyfill
 */
export const cancelIdleCallback =
  typeof window !== 'undefined'
    ? window.cancelIdleCallback || ((id: number) => clearTimeout(id))
    : (id: number) => clearTimeout(id);

/**
 * Defer execution to idle time for better INP
 */
export function deferToIdle(callback: () => void): void {
  if (typeof window === 'undefined') {
    callback();
    return;
  }

  requestIdleCallback(() => {
    callback();
  });
}

/**
 * Preload critical resources for better LCP
 */
export function preloadImage(src: string): void {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Intersection Observer hook options for lazy loading
 */
export const defaultIntersectionOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1,
};

/**
 * Generate srcSet for responsive images
 */
export function generateSrcSet(
  baseSrc: string,
  widths: number[] = [640, 750, 828, 1080, 1200]
): string {
  // For external URLs or already optimized images, return as-is
  if (baseSrc.startsWith('http') || baseSrc.includes('/_next/image')) {
    return baseSrc;
  }

  return widths
    .map((width) => `/_next/image?url=${encodeURIComponent(baseSrc)}&w=${width}&q=75 ${width}w`)
    .join(', ');
}

/**
 * Critical CSS classes for above-the-fold content
 */
export const criticalStyles = {
  // Use contain: layout for elements that shouldn't affect outside layout
  containLayout: 'contain-layout',
  // Use will-change sparingly for known animations
  willChangeTransform: 'will-change-transform',
  // Use content-visibility for below-fold content
  contentVisibilityAuto: 'content-visibility-auto',
};

/**
 * Performance marks for debugging
 */
export function measurePerformance(markName: string): void {
  if (typeof window === 'undefined' || !window.performance) return;

  performance.mark(markName);
}

export function measurePerformanceEnd(
  measureName: string,
  startMark: string,
  endMark?: string
): void {
  if (typeof window === 'undefined' || !window.performance) return;

  if (endMark) {
    performance.mark(endMark);
  }
  
  try {
    performance.measure(measureName, startMark, endMark);
    const entries = performance.getEntriesByName(measureName);
    if (entries.length > 0) {
      console.log(`[Performance] ${measureName}: ${entries[entries.length - 1].duration.toFixed(2)}ms`);
    }
  } catch (e) {
    // Silently fail in case marks don't exist
  }
}
