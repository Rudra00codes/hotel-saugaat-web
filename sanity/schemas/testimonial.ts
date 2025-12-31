import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'guestName',
            title: 'Guest Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'origin',
            title: 'Guest Origin (City/Country)',
            type: 'string',
        }),
        defineField({
            name: 'rating',
            title: 'Rating (1-5)',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5),
        }),
        defineField({
            name: 'review',
            title: 'Review Text',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Stay Date',
            type: 'date',
        }),
        defineField({
            name: 'eventType',
            title: 'Stay Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Wedding', value: 'wedding' },
                    { title: 'Stay', value: 'stay' },
                    { title: 'Corporate', value: 'corporate' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Guest Photo (Optional)',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
