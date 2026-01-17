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

export const roomNamesQuery = groq`
  *[_type == "roomType"] | order(name asc) {
    name
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
    amenities[]->{
      name,
      icon,
      "image": image.asset->url,
      category
    },
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
    features,
    order
  }
`;

// --- Gallery ---
export const galleryQuery = groq`
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    title,
    "image": image.asset->url,
    category,
    altText,
    order
  }
`;



// --- Amenities ---
export const hotelAmenitiesQuery = groq`
  *[_type == "amenity" && category == "hotel"] {
    _id,
    name,
    "image": image.asset->url,
    description,
    "icon": icon
  }
`;
