/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/about', destination: '/om', permanent: true },
      { source: '/services', destination: '/tjanster', permanent: true },
      { source: '/contact', destination: '/kontakt', permanent: true },
      { source: '/blog', destination: '/blogg', permanent: true },
      { source: '/blog/:slug', destination: '/blogg/:slug', permanent: true },
      { source: '/book', destination: '/boka', permanent: true },
      { source: '/privacy', destination: '/integritetspolicy', permanent: true },
    ];
  },
};

export default nextConfig;
