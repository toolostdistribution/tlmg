import { Inter, Space_Mono } from 'next/font/google'
import './v1.css'

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

export default function V1Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${displayFont.variable} ${monoFont.variable}`}>
      {children}
    </div>
  )
}
