import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import { client } from "@/lib/sanity/client";
import { hotelAmenitiesQuery } from "@/lib/sanity/queries";
import { Amenity } from "@/types/sanity";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amenities & Facilities | Hotel Saugaat Regency",
    description: "Explore our premium amenities including Banquet Hall, Restaurant, Bar, and more at Hotel Saugaat Regency.",
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function FacilitiesPage() {
    // Sanity query returns { _id, name, image, description, icon }
    const facilities: Amenity[] = await client.fetch(hotelAmenitiesQuery);

    return (
        <div className="min-h-screen bg-cream-mist pb-20 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Amenities & Facilities</h1>
                    <p className="text-lg text-neutral-600">
                        At Hotel Saugaat Regency, we prioritize your comfort. Explore our range of top-class facilities designed to make your stay memorable.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {facilities.map((facility) => (
                        <FeatureCard
                            key={facility._id}
                            title={facility.name}
                            image={facility.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"}
                            overlayText={facility.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
