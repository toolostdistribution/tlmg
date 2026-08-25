import type { Metadata } from 'next'
import { CareersClient } from './CareersClient'

export const metadata: Metadata = {
  title: 'Careers — Too Lost Music Group',
}

export default function CareersPage() {
  return <CareersClient />
}
