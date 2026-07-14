import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbopackServerFastRefresh: true,
  },
  allowedDevOrigins: ['tlmg.test'],
}

export default withPayload(nextConfig)
