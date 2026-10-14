import { notFound } from 'next/navigation'
import { PersonProfile } from '@/components/PersonProfile'
import { boardMembers } from '@/payload/people-data'

function findMember(slug: string) {
  return boardMembers.find((m) => m.slug === slug && m.bio.length > 0)
}

export function generateStaticParams() {
  return boardMembers.filter((m) => m.bio.length > 0).map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = findMember(slug)
  if (!member) return {}
  return { title: `${member.name} — Too Lost Music Group` }
}

export default async function BoardMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = findMember(slug)
  if (!member) notFound()

  return (
    <PersonProfile
      person={member}
      section={{ href: '/company/board', label: 'Board of Directors' }}
    />
  )
}
