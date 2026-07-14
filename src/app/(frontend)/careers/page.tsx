import type { Metadata } from 'next'
import { CareersClient } from './CareersClient'

export const metadata: Metadata = {
  title: 'Careers — Too Lost Music Group',
  description: 'Join Too Lost Music Group. Explore open positions across A&R, engineering, operations, and more.',
}

export default function CareersPage() {
  return <CareersClient />
}
