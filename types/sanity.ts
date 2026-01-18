export interface SanityImage {
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface SiteSettings {
    siteName: string;
    logo: string;
    contactInfo: {
        phone: string;
        email: string;
        whatsapp: string;
        address: string;
    };
    socialMedia: {
        facebook: string;
        instagram: string;
        twitter: string;
    };
}

export interface Room {
    _id: string;
    name: string;
    slug: string;
    shortDescription: string;
    fullDescription?: any; // Portable Text
    image: string; // URL
    images?: string[]; // URLs
    price: string;
    capacity: string;
    size?: string;
    amenities?: string[];
    featured?: boolean;
}

export interface EventSpace {
    _id: string;
    name: string;
    slug: string;
    description: any; // Portable Text
    images: string[];
    capacity: string;
    features: string[];
}

export interface Amenity {
    _id: string;
    name: string;
    icon: any; // Sanity Image or string
    image?: string; // Large image URL
    description: string;
    category: string;
}

export interface GalleryItem {
    _id: string;
    title: string;
    image: string;
    category: string;
    altText?: string;
}
