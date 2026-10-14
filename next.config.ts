import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbopackServerFastRefresh: true,
  },
  allowedDevOrigins: ['tlmg.test'],
  async redirects() {
    return [
      { source: '/divisions', destination: '/brands', permanent: true },
      { source: '/divisions/:slug', destination: '/brands/:slug', permanent: true },
      { source: '/about', destination: '/company', permanent: true },
      { source: '/about/:slug', destination: '/company/:slug', permanent: true },
    ]
  },
}

export default withPayload(nextConfig)
