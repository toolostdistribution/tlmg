import { notFound } from 'next/navigation'
import { PersonProfile } from '@/components/PersonProfile'
import { leaders } from '@/payload/people-data'

function findLeader(slug: string) {
  const leader = leaders.find((m) => m.slug === slug)
  if (!leader?.bio?.length) return null
  return { ...leader, bio: leader.bio }
}

export function generateStaticParams() {
  return leaders.filter((m) => m.bio && m.bio.length > 0).map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const leader = findLeader(slug)
  if (!leader) return {}
  return { title: `${leader.name} — Too Lost Music Group` }
}

export default async function LeaderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const leader = findLeader(slug)
  if (!leader) notFound()

  return (
    <PersonProfile
      person={leader}
      section={{ href: '/company/leadership', label: 'Leadership' }}
    />
  )
}
