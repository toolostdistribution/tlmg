import Link from 'next/link'
import { OfficesShowcase } from '@/components/OfficesShowcase'

export const metadata = { title: 'Offices — Too Lost Music Group' }

export default function OfficesPage() {
  return (
    <main className="subpage">
      <section className="about-hero-section">
        <div className="section-inner">
          <Link href="/" className="page-back">← back</Link>
          <h1 className="page-title">Our Offices</h1>
          <p className="page-desc">
            Operating across ten cities on five continents, we work where music happens.
          </p>
        </div>
      </section>

      <section className="section offices-section">
        <div className="section-inner">
          <OfficesShowcase />
        </div>
      </section>
    </main>
  )
}
