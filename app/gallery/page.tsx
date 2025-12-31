import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo Gallery | Hotel Saugaat Regency",
    description: "Explore photos of Hotel Saugaat Regency, including rooms, banquet halls, dining areas, and the beautiful exterior.",
};

export default function GalleryPage() {
    const images = [
        { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3540&auto=format&fit=crop", alt: "Hotel Exterior" },
        { src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=3270&auto=format&fit=crop", alt: "Super Deluxe Room" },
        { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=3540&auto=format&fit=crop", alt: "Fine Dining Restaurant" },
        { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=3536&auto=format&fit=crop", alt: "Banquet Hall" },
        { src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=3474&auto=format&fit=crop", alt: "Bar & Lounge" },
        { src: "https://images.unsplash.com/photo-1590490360182-f33efe29a77d?q=80&w=3274&auto=format&fit=crop", alt: "Executive Suite" },
        { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=3450&auto=format&fit=crop", alt: "Room Detail" },
        { src: "https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=3542&auto=format&fit=crop", alt: "Laundry" },
    ];

    return (
        <div className="min-h-screen bg-white pb-20 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Photo Gallery"
                    subtitle="Explore our Hotel"
                    center
                    className="mb-12"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {/* Masonry-style grid attempt using spans */}
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                    {img.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
