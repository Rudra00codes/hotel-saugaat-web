import { groq } from "next-sanity";

// --- Site Settings ---
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    "logo": logo.asset->url,
    contactInfo,
    socialMedia,
    seoDefaults
  }
`;

// --- Rooms ---
export const featuredRoomsQuery = groq`
  *[_type == "roomType" && featured == true] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    shortDescription,
    "image": images[0].asset->url,
    price,
    capacity
  }
`;

export const allRoomsQuery = groq`
  *[_type == "roomType"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    "image": images[0].asset->url,
    price,
    capacity,
    size,
    shortDescription
  }
`;

export const roomBySlugQuery = groq`
  *[_type == "roomType" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    shortDescription,
    fullDescription,
    "images": images[].asset->url,
    price,
    capacity,
    amenities,
    size,
    seo
  }
`;

// --- Events ---
export const eventsQuery = groq`
  *[_type == "eventSpace"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    "image": images[0].asset->url,
    capacity,
    features
  }
`;

// --- Gallery ---
export const galleryQuery = groq`
  *[_type == "gallery"] | order(order asc) {
    _id,
    title,
    "image": image.asset->url,
    category,
    altText
  }
`;

// --- Testimonials ---
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(date desc) {
    _id,
    guestName,
    rating,
    review,
    eventType
  }
`;
