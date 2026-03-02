import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Görsel optimizasyonu
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // ✅ Güvenlik headers (CSP OLMADAN)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // ❌ CSP KALDIRILDI - www vs non-www sorununa neden oluyordu
        ],
      },
    ];
  },
  
  trailingSlash: false,
  
  // 301 Redirects
  async redirects() {
    return [
      {
        source: '/cozumler/as-built-modeling',
        destination: '/cozumler/mevcut-durum-modelleme',
        permanent: true,
      },
      {
        source: '/cozumler/point-cloud-to-bim',
        destination: '/cozumler/nokta-bulutu-bim',
        permanent: true,
      },
      {
        source: '/cozumler/2d-to-3d-bim-conversion',
        destination: '/cozumler/2d-3d-bim-donusum',
        permanent: true,
      },
      {
        source: '/cozumler/industrial-equipment-modeling',
        destination: '/cozumler/endustriyel-ekipman-modelleme',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
