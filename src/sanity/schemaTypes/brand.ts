import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const brand = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  orderings: [orderRankOrdering],
  fieldsets: [
    {
      name: 'extended',
      title: 'Extended page content',
      description: 'Not currently shown on the site.',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'string',
      description: 'e.g. Distribution, Publishing',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'logo', type: 'image' }),
    defineField({
      name: 'shortDescription',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'More about',
      type: 'text',
      rows: 10,
      description: 'Separate paragraphs with a blank line.',
    }),
    defineField({ name: 'clients', type: 'text', rows: 3 }),
    defineField({ name: 'clientsLabel', type: 'string', description: 'e.g. "Artists include:"' }),
    defineField({ name: 'website', type: 'url' }),
    defineField({
      name: 'socials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'social',
          fields: [
            defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'url', type: 'url', validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: 'label', subtitle: 'url' } },
        }),
      ],
    }),
    defineField({
      name: 'metrics',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'productSuite',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'tagline', type: 'string', fieldset: 'extended' }),
    defineField({ name: 'websiteLabel', type: 'string', fieldset: 'extended' }),
    defineField({ name: 'longDescription', type: 'text', rows: 5, fieldset: 'extended' }),
    defineField({ name: 'wordmark', type: 'image', fieldset: 'extended' }),
    defineField({
      name: 'features',
      type: 'array',
      fieldset: 'extended',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'headlineMetrics',
      type: 'array',
      fieldset: 'extended',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'headlineMetric',
          fields: [
            defineField({ name: 'value', type: 'string' }),
            defineField({ name: 'label', type: 'string' }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        }),
      ],
    }),
    defineField({
      name: 'collageImages',
      type: 'array',
      fieldset: 'extended',
      of: [defineArrayMember({ type: 'image' })],
      options: { layout: 'grid' },
    }),
    orderRankField({ type: 'brand' }),
  ],
  preview: { select: { title: 'name', subtitle: 'type', media: 'logo' } },
})
