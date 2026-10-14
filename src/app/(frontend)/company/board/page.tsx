import { BoardGrid } from '@/components/BoardGrid'
import { CompanySectionHero } from '@/components/CompanySectionHero'

export const metadata = { title: 'Board of Directors — Too Lost Music Group' }

export default function BoardPage() {
  return (
    <main className="subpage">
      <CompanySectionHero title="Board of Directors" />

      <section className="section">
        <div className="section-inner">
          <BoardGrid />
        </div>
      </section>
    </main>
  )
}
