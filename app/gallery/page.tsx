import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import { client } from "@/lib/sanity/client";
import { galleryQuery } from "@/lib/sanity/queries";
import { GalleryItem } from "@/types/sanity";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo Gallery | Hotel Saugaat Regency",
    description: "Explore photos of Hotel Saugaat Regency, including rooms, banquet halls, dining areas, and the beautiful exterior.",
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function GalleryPage() {
    const images: GalleryItem[] = await client.fetch(galleryQuery);

    return (
        <div className="min-h-screen bg-cream-mist pb-20 pt-24">
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
                            key={img._id}
                            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                        >
                            <Image
                                src={img.image}
                                alt={img.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                    {img.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
