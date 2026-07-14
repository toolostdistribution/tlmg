import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import '../globals.css'

const displayFont = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Corporate — Too Lost Music Group',
  description: 'A group of divisions shaping the future of music, media, and technology.',
}

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${displayFont.variable} ${spaceMono.variable}`}>
      {children}
    </div>
  )
}
