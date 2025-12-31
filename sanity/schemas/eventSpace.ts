import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'eventSpace',
    title: 'Event Space',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'capacity',
            title: 'Capacity (Guests)',
            type: 'string',
        }),
        defineField({
            name: 'dimensions',
            title: 'Dimensions',
            type: 'string',
        }),
        defineField({
            name: 'suitableFor',
            title: 'Suitable For',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Weddings', value: 'wedding' },
                    { title: 'Corporate Events', value: 'corporate' },
                    { title: 'Social Gatherings', value: 'social' },
                ]
            }
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
            name: 'features',
            title: 'Key Features',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})
