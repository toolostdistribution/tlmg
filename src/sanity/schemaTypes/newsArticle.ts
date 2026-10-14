import { defineField, defineType } from 'sanity'

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News article',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'summary', type: 'text', rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: 'date', type: 'date', validation: (rule) => rule.required() }),
    defineField({
      name: 'source',
      type: 'string',
      description: 'Publication name, e.g. Digital Music News',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Article URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'image', title: 'Thumbnail', type: 'image', options: { hotspot: true } }),
  ],
  orderings: [
    { title: 'Date, newest first', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', date: 'date', source: 'source', media: 'image' },
    prepare: ({ title, date, source, media }) => ({
      title,
      subtitle: [date, source].filter(Boolean).join(' · '),
      media,
    }),
  },
})
