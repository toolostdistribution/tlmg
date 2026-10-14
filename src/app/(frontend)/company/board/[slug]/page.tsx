import { notFound } from 'next/navigation'
import { PersonProfile } from '@/components/PersonProfile'
import { getBoardMembers } from '@/sanity/queries'

async function findMember(slug: string) {
  return (await getBoardMembers()).find((m) => m.slug === slug && m.bio.length > 0)
}

export async function generateStaticParams() {
  const boardMembers = await getBoardMembers()
  return boardMembers.filter((m) => m.bio.length > 0).map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await findMember(slug)
  if (!member) return {}
  return { title: `${member.name} — Too Lost Music Group` }
}

export default async function BoardMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await findMember(slug)
  if (!member) notFound()

  return (
    <PersonProfile
      person={member}
      section={{ href: '/company/board', label: 'Board of Directors' }}
    />
  )
}
