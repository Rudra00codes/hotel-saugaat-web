import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Exterior', value: 'exterior' },
                    { title: 'Rooms', value: 'rooms' },
                    { title: 'Restaurant/Bar', value: 'restaurant' },
                    { title: 'Events', value: 'events' },
                    { title: 'Other', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
        }),
        defineField({
            name: 'featured',
            title: 'Featured on Homepage',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})
