import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({ name: 'phone', type: 'string', title: 'Phone Number' }),
        defineField({ name: 'email', type: 'string', title: 'Email Address' }),
        defineField({ name: 'whatsapp', type: 'string', title: 'WhatsApp Number' }),
        defineField({ name: 'address', type: 'text', title: 'Physical Address' }),
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        defineField({ name: 'facebook', type: 'url', title: 'Facebook URL' }),
        defineField({ name: 'instagram', type: 'url', title: 'Instagram URL' }),
        defineField({ name: 'twitter', type: 'url', title: 'Twitter/X URL' }),
      ],
    }),
    defineField({
      name: 'seoDefaults',
      title: 'SEO Defaults',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Default Meta Title' }),
        defineField({ name: 'description', type: 'text', title: 'Default Meta Description' }),
        defineField({ name: 'keywords', type: 'array', of: [{ type: 'string' }], title: 'Keywords' }),
      ],
    }),
  ],
})
