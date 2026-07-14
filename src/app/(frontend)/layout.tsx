import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Loader } from '@/components/Loader'
import { Navigation } from '@/components/Navigation'
import { ScrollReveal } from '@/components/ScrollReveal'
import '../globals.css'

const displayFont = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const monoFont = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Too Lost Music Group',
  description: 'A group of divisions shaping the future of music, media, and technology.',
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${displayFont.variable} ${monoFont.variable}`}>
      <Loader />
      <div className="page-grid" aria-hidden="true">
        <div className="page-grid-inner" />
      </div>
      <ScrollReveal />
      <Navigation />
      <main className="ubpage">
        {children}
      </main>
      <Footer />
    </div>
  )
}
