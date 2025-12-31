import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amenities & Facilities | Hotel Saugaat Regency",
    description: "Explore our premium amenities including Banquet Hall, Restaurant, Bar, and more at Hotel Saugaat Regency.",
};

export default function FacilitiesPage() {
    const facilities = [
        {
            title: "Multi-Cuisine Restaurant",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=3540&auto=format&fit=crop",
            overlayText: "Savor delicious delicacies from around the world"
        },
        {
            title: "Stylish Bar & Lounge",
            image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=3474&auto=format&fit=crop",
            overlayText: "Relax with our selection of premium beverages"
        },
        {
            title: "Banquet Hall",
            image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=3536&auto=format&fit=crop",
            overlayText: "The perfect venue for your grand celebrations"
        },
        {
            title: "Laundry Service",
            image: "https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=3542&auto=format&fit=crop",
            overlayText: "Professional laundry and dry cleaning"
        },
        {
            title: "Free High-Speed WiFi",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=3540&auto=format&fit=crop",
            overlayText: "Stay connected throughout the property"
        },
        {
            title: "Ample Parking Space",
            image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=3540&auto=format&fit=crop",
            overlayText: "Secure parking for all our guests"
        },
        {
            title: "24/7 Front Desk",
            image: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=3420&auto=format&fit=crop",
            overlayText: "Ready to assist you anytime"
        },
        {
            title: "Power Backup",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=3538&auto=format&fit=crop",
            overlayText: "Uninterrupted comfort during your stay"
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-50 pb-20 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Amenities & Facilities</h1>
                    <p className="text-lg text-neutral-600">
                        At Hotel Saugaat Regency, we prioritize your comfort. Explore our range of top-class facilities designed to make your stay memorable.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {facilities.map((facility, index) => (
                        <FeatureCard
                            key={index}
                            {...facility}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
