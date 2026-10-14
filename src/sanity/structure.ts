import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('newsArticle')
        .title('News')
        .child(
          S.documentTypeList('newsArticle')
            .title('News')
            .defaultOrdering([{ field: 'date', direction: 'desc' }]),
        ),
      S.divider(),
      orderableDocumentListDeskItem({ type: 'leader', title: 'Leadership', S, context }),
      orderableDocumentListDeskItem({ type: 'boardMember', title: 'Board of Directors', S, context }),
      S.divider(),
      orderableDocumentListDeskItem({ type: 'brand', title: 'Brands', S, context }),
    ])
