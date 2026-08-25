import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'TLMG is a global music company building the infrastructure, technology, and services that power independent artists, labels, and music businesses worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
