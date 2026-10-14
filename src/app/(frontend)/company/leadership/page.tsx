import { CompanySectionHero } from '@/components/CompanySectionHero'
import { LeadershipGrid } from '@/components/LeadershipGrid'

export const metadata = { title: 'Leadership — Too Lost Music Group' }

export default function LeadershipPage() {
  return (
    <main className="subpage">
      <CompanySectionHero title="Leadership" />

      <section className="section">
        <div className="section-inner">
          <LeadershipGrid />
        </div>
      </section>
    </main>
  )
}
