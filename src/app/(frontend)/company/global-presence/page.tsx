import { CompanySectionHero } from '@/components/CompanySectionHero'
import { DotMap } from '@/components/DotMap'

export const metadata = { title: 'Global Presence — Too Lost Music Group' }

export default function GlobalPresencePage() {
  return (
    <main className="subpage">
      <CompanySectionHero title="Global Presence" />

      <section className="section offices-section offices-section-flush">
        <div className="section-inner">
          <DotMap />
        </div>
      </section>
    </main>
  )
}
