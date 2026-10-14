import { CompanySectionHero } from '@/components/CompanySectionHero'

interface Person {
  name: string
  photo?: string
  linkedin?: string
  bio: string[]
}

export function PersonProfile({
  person,
  section,
}: {
  person: Person
  section: { href: string; label: string }
}) {
  return (
    <main className="subpage">
      <CompanySectionHero
        title={person.name}
        trail={[{ href: '/company', label: 'Company' }, section]}
      />

      <section className="section">
        <div className="section-inner">
          <div className="member-profile">
            <aside className="member-sidebar">
              {person.photo && (
                <div className="member-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={person.photo} alt={person.name} />
                </div>
              )}
              {person.linkedin && (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="member-linkedin"
                >
                  View on LinkedIn →
                </a>
              )}
            </aside>
            <div className="member-bio">
              {person.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
