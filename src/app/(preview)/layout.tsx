import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Too Lost Music Group — Preview',
  description: 'Site preview versions',
  robots: 'noindex, nofollow',
}

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
