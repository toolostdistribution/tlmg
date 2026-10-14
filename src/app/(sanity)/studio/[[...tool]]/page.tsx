import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { NextStudio, metadata as studioMetadata } from 'next-sanity/studio'
import config from '../../../../../sanity.config'

export const dynamic = 'force-static'

export { viewport } from 'next-sanity/studio'

export const metadata: Metadata = {
  ...studioMetadata,
  title: 'Studio · Too Lost Music Group',
  icons: { icon: '/fav.png' },
}

const displayFont = Inter({
  weight: ['400', '500', '600', '700'],
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

export default function StudioPage() {
  return (
    <div className={`${displayFont.variable} ${monoFont.variable}`} style={{ height: '100vh', background: '#111111' }}>
      <NextStudio config={config} scheme="dark" />
    </div>
  )
}
