import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './new.css'

const sans = Inter({
  subsets: ['latin'],
  variable: '--nw-sans',
  display: 'swap',
})

const serif = Inter({
  subsets: ['latin'],
  variable: '--nw-serif',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--nw-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Too Lost Music Group — Independent Music, Institutionalized',
  description:
    'A global family of music companies spanning distribution, publishing, rights management, catalog ownership, and artist services.',
}

export default function NewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${serif.variable} ${sans.variable} ${mono.variable} nw-body`}>
      {children}
    </div>
  )
}
