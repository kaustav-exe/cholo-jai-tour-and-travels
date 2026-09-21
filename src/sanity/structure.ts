import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Cholo Jai Content Manager')
    .items([
      // 🏠 Website Category
      S.listItem()
        .title('Website')
        .child(
          S.list()
            .title('Website Management')
            .items([
              S.listItem()
                .title('Homepage Sections')
                .schemaType('homepage')
                .child(
                  S.document()
                    .schemaType('homepage')
                    .documentId('homepage')
                    .title('Edit Homepage')
                ),
              S.listItem()
                .title('Website Settings & Contact')
                .schemaType('siteSettings')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('Edit Website Settings & Contact')
                ),
            ])
        ),

      S.divider(),

      // ✈️ Tours Category
      S.listItem()
        .title('Tours & Packages')
        .child(
          S.list()
            .title('Tour Management')
            .items([
              S.listItem()
                .title('Tour Packages')
                .schemaType('tourPackage')
                .child(
                  S.documentTypeList('tourPackage')
                    .title('All Tour Packages')
                ),
              S.listItem()
                .title('Destinations')
                .schemaType('destination')
                .child(
                  S.documentTypeList('destination')
                    .title('Destinations')
                ),
            ])
        ),

      S.divider(),

      // 📸 Media Category
      S.listItem()
        .title('Media & Social')
        .child(
          S.list()
            .title('Media Management')
            .items([
              S.listItem()
                .title('Facebook Reels & Videos')
                .schemaType('facebookReel')
                .child(
                  S.documentTypeList('facebookReel')
                    .title('Facebook Reels')
                ),
              S.listItem()
                .title('Photo Gallery')
                .schemaType('galleryItem')
                .child(
                  S.documentTypeList('galleryItem')
                    .title('Gallery Photos')
                ),
            ])
        ),

      S.divider(),

      // 💬 Customer Content Category
      S.listItem()
        .title('Customer Content')
        .child(
          S.list()
            .title('Customer & Support')
            .items([
              S.listItem()
                .title('Frequently Asked Questions (FAQ)')
                .schemaType('faq')
                .child(
                  S.documentTypeList('faq')
                    .title('FAQs')
                ),
              S.listItem()
                .title('Testimonials & Reviews')
                .schemaType('testimonial')
                .child(
                  S.documentTypeList('testimonial')
                    .title('Customer Reviews')
                ),
            ])
        ),
    ]);
