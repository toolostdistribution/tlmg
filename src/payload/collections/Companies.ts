import type { CollectionConfig } from 'payload'

export const Companies: CollectionConfig = {
  slug: 'companies',
  access: {
    // Public/site-facing reads happen through the Local API (getPayload),
    // which bypasses access control. Restricting REST/GraphQL reads to
    // authenticated Payload users keeps the CMS data from being dumped
    // directly via `/api/companies`.
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'type',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. Distribution, Copyright Acquisition, Venture Capital',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fullDescription',
      type: 'richText',
    },
    {
      name: 'clients',
      type: 'textarea',
      admin: {
        description: 'Comma-separated list of notable clients or catalog',
      },
    },
    {
      name: 'clientsLabel',
      type: 'text',
      admin: {
        description: 'e.g. "Clients:", "Catalog:", "Investments:"',
      },
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first',
      },
    },
  ],
}
