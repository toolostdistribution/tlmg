import { getCompanies } from '@/payload/queries'
import { DivisionsGrid } from '@/components/DivisionsGrid'

export const metadata = { title: 'Divisions — Too Lost Music Group' }

export default async function DivisionsPage() {
  const companies = await getCompanies()

  return (
    <main className="subpage">
      <section className="about-hero-section">
        <div className="section-inner">
          <h1 className="about-headline">Divisions</h1>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <DivisionsGrid companies={companies} />
        </div>
      </section>
    </main>
  )
}
