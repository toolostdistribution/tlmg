import Link from 'next/link'
import { notFound } from 'next/navigation'
import { boardMembers, leaders } from '@/payload/people-data'

function findPerson(slug: string) {
  const board = boardMembers.find((m) => m.slug === slug && m.bio.length > 0)
  if (board) return { ...board, tag: board.tag }

  const leader = leaders.find((m) => m.slug === slug && m.bio && m.bio.length > 0)
  if (leader) return { ...leader, tag: 'executive' }

  return null
}

export function generateStaticParams() {
  const boardSlugs = boardMembers
    .filter((m) => m.bio.length > 0)
    .map((m) => ({ slug: m.slug }))

  const leaderSlugs = leaders
    .filter((m) => m.bio && m.bio.length > 0)
    .map((m) => ({ slug: m.slug }))

  const seen = new Set<string>()
  return [...boardSlugs, ...leaderSlugs].filter((s) => {
    if (seen.has(s.slug)) return false
    seen.add(s.slug)
    return true
  })
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const person = findPerson(slug)
  if (!person) return {}
  return { title: `${person.name} — Too Lost Music Group` }
}

export default async function PersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const person = findPerson(slug)
  if (!person) notFound()

  return (
    <main className="subpage">
      <div className="page-hero member-hero">
        <div className="section-inner">
          <Link href="/about" className="page-back">← About</Link>
          <h1 className="page-title">{person.name}</h1>
        </div>
      </div>

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
              {person.bio!.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
