import { type SchemaTypeDefinition } from 'sanity'

import siteSettings from './siteSettings'
import roomType from './roomType'
import amenity from './amenity'
import eventSpace from './eventSpace'
import gallery from './gallery'
import testimonial from './testimonial'
import pageContent from './pageContent'
import faq from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        siteSettings,
        roomType,
        amenity,
        eventSpace,
        gallery,
        testimonial,
        pageContent,
        faq,
    ],
}
