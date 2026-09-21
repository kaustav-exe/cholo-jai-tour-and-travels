export default {
  name: 'siteSettings',
  title: 'Website Settings & Contact',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Company / Business Name',
      type: 'string',
      initialValue: 'Cholo Jai Tour & Travels',
    },
    {
      name: 'phoneNumbers',
      title: 'Contact Phone Numbers',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Primary customer service numbers (e.g. 9830905332)',
    },
    {
      name: 'email',
      title: 'Business Email',
      type: 'string',
      initialValue: 'cholojai2013@gmail.com',
    },
    {
      name: 'address',
      title: 'Office Address',
      type: 'text',
      rows: 2,
      initialValue: 'R. N. Avenue, Sodepur, Near Deshbandhu School, Kolkata - 700110',
    },
    {
      name: 'socials',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'whatsapp', title: 'WhatsApp URL / Number', type: 'string', initialValue: 'https://wa.me/919830905332' },
        { name: 'facebook', title: 'Facebook Page URL', type: 'string', initialValue: 'https://www.facebook.com/profile.php?id=61577840137646' },
        { name: 'instagram', title: 'Instagram Profile URL', type: 'string' },
        { name: 'twitter', title: 'Twitter / X Profile URL', type: 'string' },
        { name: 'youtube', title: 'YouTube Channel URL', type: 'string' },
      ],
    },
    {
      name: 'announcementBanner',
      title: 'Website Announcement / Promotional Bar',
      type: 'object',
      fields: [
        { name: 'enabled', title: 'Enable Banner', type: 'boolean', initialValue: true },
        { name: 'headline', title: 'Headline / Offer Text', type: 'string' },
        { name: 'subtext', title: 'Subtext / Price details', type: 'string' },
        { name: 'buttonText', title: 'CTA Button Text', type: 'string', initialValue: 'Book Now' },
        { name: 'buttonLink', title: 'CTA Button Link / WhatsApp', type: 'string' },
      ],
    },
    {
      name: 'aboutSummary',
      title: 'About Summary & Statistics',
      type: 'object',
      fields: [
        { name: 'mission', title: 'Mission Statement', type: 'text' },
        { name: 'vision', title: 'Vision Statement', type: 'text' },
        { name: 'experienceYears', title: 'Experience Text (e.g. 10+ Years)', type: 'string', initialValue: '10+' },
        {
          name: 'stats',
          title: 'Key Milestones / Stats Counter',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Stat Label', type: 'string' },
                { name: 'value', title: 'Stat Value (e.g. 10k+, 500+)', type: 'string' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
