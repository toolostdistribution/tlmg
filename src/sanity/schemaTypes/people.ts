import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
import { defineArrayMember, defineField, defineType } from 'sanity'

const personFields = (type: string) => [
  defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
  defineField({
    name: 'slug',
    type: 'slug',
    options: { source: 'name' },
    validation: (rule) => rule.required(),
  }),
  defineField({ name: 'role', type: 'string', validation: (rule) => rule.required() }),
  defineField({ name: 'photo', type: 'image', options: { hotspot: true } }),
  defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
  defineField({
    name: 'bio',
    type: 'array',
    description: 'One entry per paragraph. People without a bio get no profile page.',
    of: [defineArrayMember({ type: 'text', rows: 4 })],
  }),
  orderRankField({ type }),
]

export const boardMember = defineType({
  name: 'boardMember',
  title: 'Board member',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    ...personFields('boardMember'),
    defineField({
      name: 'tag',
      type: 'string',
      description: 'Board label, e.g. "board director"',
      initialValue: 'board director',
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
})

export const leader = defineType({
  name: 'leader',
  title: 'Leader',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: personFields('leader'),
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
})
