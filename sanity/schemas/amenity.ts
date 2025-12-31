import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'amenity',
    title: 'Amenity',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon Type',
            type: 'string',
            options: {
                list: [
                    { title: 'WiFi', value: 'wifi' },
                    { title: 'Parking', value: 'parking' },
                    { title: 'Restaurant', value: 'restaurant' },
                    { title: 'AC', value: 'ac' },
                    { title: 'Bar', value: 'bar' },
                    { title: 'Spa', value: 'spa' },
                    { title: 'Gym', value: 'gym' },
                    { title: 'Event Space', value: 'event' },
                    { title: 'Laundry', value: 'laundry' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Custom Icon Image (Optional)',
            type: 'image',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Room Amenity', value: 'room' },
                    { title: 'Hotel Facility', value: 'hotel' },
                ],
            },
        }),
    ],
})
