import { AddIcon } from '@sanity/icons/Add'
import { ArrowRightIcon } from '@sanity/icons/ArrowRight'
import { LaunchIcon } from '@sanity/icons/Launch'
import { Box, Button, Card, Container, Flex, Grid, Heading, Stack, Text } from '@sanity/ui'
import { useEffect, useState } from 'react'
import { type Tool, useClient } from 'sanity'
import { useRouter } from 'sanity/router'

const SITE_URL = 'https://www.tlmg.com'

const SECTIONS = [
  { type: 'newsArticle', listId: 'newsArticle', title: 'News', site: '/news' },
  { type: 'leader', listId: 'orderable-leader', title: 'Leadership', site: '/company/leadership' },
  { type: 'boardMember', listId: 'orderable-boardMember', title: 'Board of Directors', site: '/company/board' },
  { type: 'brand', listId: 'orderable-brand', title: 'Brands', site: '/brands' },
] as const

const TYPE_TITLES: Record<string, string> = Object.fromEntries(SECTIONS.map((s) => [s.type, s.title]))

type Overview = {
  counts: Record<string, number>
  recent: { _id: string; _type: string; _updatedAt: string; label?: string }[]
}

const OVERVIEW_QUERY = `{
  "counts": {
    "newsArticle": count(*[_type == "newsArticle" && !(_id in path("drafts.**"))]),
    "leader": count(*[_type == "leader" && !(_id in path("drafts.**"))]),
    "boardMember": count(*[_type == "boardMember" && !(_id in path("drafts.**"))]),
    "brand": count(*[_type == "brand" && !(_id in path("drafts.**"))])
  },
  "recent": *[_type in ["newsArticle", "leader", "boardMember", "brand"]] | order(_updatedAt desc)[0...8]{
    _id, _type, _updatedAt, "label": coalesce(title, name)
  }
}`

const eyebrow = {
  fontFamily: 'var(--font-mono), "Space Mono", ui-monospace, monospace',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
}

function timeAgo(iso: string) {
  const minutes = Math.round((Date.now() - new Date(iso).getTime()) / 60000)
  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.round(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function HomeView() {
  const client = useClient({ apiVersion: '2026-10-01' })
  const router = useRouter()
  const [data, setData] = useState<Overview | null>(null)

  useEffect(() => {
    let active = true
    client.fetch<Overview>(OVERVIEW_QUERY, {}, { perspective: 'raw' }).then((result) => {
      if (active) setData(result)
    })
    return () => {
      active = false
    }
  }, [client])

  const openList = (listId: string) => router.navigateUrl({ path: `/studio/structure/${listId}` })

  return (
    <Box height="fill" overflow="auto" padding={[4, 5, 6]}>
      <Container width={3}>
        <Stack gap={6}>
          <Flex align="flex-end" justify="space-between" wrap="wrap" gap={4}>
            <Stack gap={4}>
              <img
                src="/tlmg-wordmark.png"
                alt="TLMG"
                style={{
                  height: 56,
                  width: 'auto',
                  filter: 'invert(1)',
                  mixBlendMode: 'screen',
                  margin: '-12px 0 -12px -4px',
                }}
              />
              <Text muted size={1} style={eyebrow}>
                Content Studio
              </Text>
            </Stack>
            <Button
              as="a"
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              mode="ghost"
              text="View tlmg.com"
              iconRight={LaunchIcon}
            />
          </Flex>

          <Grid gridTemplateColumns={[1, 2, 2, 4]} gap={3}>
            {SECTIONS.map((section) => (
              <Card key={section.type} border radius={2} padding={4} tone="default">
                <Stack gap={5}>
                  <Stack gap={3}>
                    <Text muted size={0} style={eyebrow}>
                      {section.title}
                    </Text>
                    <Heading size={4} as="p">
                      {data ? data.counts[section.type] : '–'}
                    </Heading>
                  </Stack>
                  <Flex gap={2} wrap="wrap">
                    <Button
                      mode="ghost"
                      fontSize={1}
                      padding={2}
                      text="Open"
                      iconRight={ArrowRightIcon}
                      onClick={() => openList(section.listId)}
                    />
                    <Button
                      mode="bleed"
                      fontSize={1}
                      padding={2}
                      icon={AddIcon}
                      text="New"
                      onClick={() => router.navigateIntent('create', { type: section.type })}
                    />
                  </Flex>
                </Stack>
              </Card>
            ))}
          </Grid>

          <Stack gap={3}>
            <Text muted size={0} style={eyebrow}>
              Recently edited
            </Text>
            <Card border radius={2}>
              {!data && (
                <Box padding={4}>
                  <Text muted size={1}>
                    Loading…
                  </Text>
                </Box>
              )}
              {data?.recent.map((doc, index) => (
                <Card
                  key={doc._id}
                  as="button"
                  padding={4}
                  borderTop={index > 0}
                  onClick={() =>
                    router.navigateIntent('edit', { id: doc._id.replace(/^drafts\./, ''), type: doc._type })
                  }
                  style={{ width: '100%', textAlign: 'left', cursor: 'pointer', background: 'transparent' }}
                >
                  <Flex align="center" gap={4}>
                    <Box flex={1}>
                      <Text size={1} weight="medium" textOverflow="ellipsis">
                        {doc.label || 'Untitled'}
                        {doc._id.startsWith('drafts.') ? '  ·  Draft' : ''}
                      </Text>
                    </Box>
                    <Text muted size={0} style={eyebrow}>
                      {TYPE_TITLES[doc._type]}
                    </Text>
                    <Box style={{ minWidth: 96, textAlign: 'right' }}>
                      <Text muted size={1}>
                        {timeAgo(doc._updatedAt)}
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              ))}
            </Card>
          </Stack>

          <Text muted size={1}>
            Published changes appear on tlmg.com within a few seconds. Drafts stay private until you press Publish.
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export const homeTool: Tool = {
  name: 'home',
  title: 'Home',
  component: HomeView,
}
