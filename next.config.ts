import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbopackServerFastRefresh: true,
  },
  allowedDevOrigins: ['tlmg.test'],
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
