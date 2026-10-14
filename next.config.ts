import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbopackServerFastRefresh: true,
  },
  allowedDevOrigins: ['tlmg.test'],
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: "frame-ancestors 'none'" },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
  async redirects() {
    return [
      { source: '/divisions', destination: '/brands', permanent: true },
      { source: '/divisions/:slug', destination: '/brands/:slug', permanent: true },
      { source: '/about', destination: '/company', permanent: true },
      { source: '/about/:slug', destination: '/company/:slug', permanent: true },
    ]
  },
}

export default nextConfig
