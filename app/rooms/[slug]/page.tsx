import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Wifi, Car, Utensils, Wind, Wine, Flower, Dumbbell, Calendar, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity/client";
import { roomBySlugQuery } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Define the shape of the data we expect from Sanity for this Page
interface RoomWithExpandedAmenities {
    _id: string;
    name: string;
    slug: string;
    shortDescription: string;
    fullDescription?: any;
    images: string[];
    price: string;
    capacity?: string;
    amenities?: {
        name: string;
        icon: string;
        image?: string;
        category?: string;
    }[];
}

const iconMap: Record<string, any> = {
    wifi: Wifi,
    parking: Car,
    restaurant: Utensils,
    ac: Wind,
    bar: Wine,
    spa: Flower,
    gym: Dumbbell,
    event: Calendar,
    laundry: Shirt,
    default: Check
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const room: RoomWithExpandedAmenities = await client.fetch(roomBySlugQuery, { slug });

    if (!room) {
        return {
            title: "Room Not Found | Hotel Saugaat Regency",
        };
    }

    return {
        title: `${room.name} | Hotel Saugaat Regency`,
        description: room.shortDescription,
    };
}

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function RoomDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const room: RoomWithExpandedAmenities = await client.fetch(roomBySlugQuery, { slug });

    if (!room) {
        notFound();
    }

    return (
        <div className="bg-cream-mist min-h-screen pb-20 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb / Back */}
                <div className="mb-8">
                    <Link href="/rooms" className="inline-flex items-center text-sm text-neutral-500 hover:text-black transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Rooms
                    </Link>
                </div>

                {/* Title Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">{room.name}</h1>
                        <p className="text-lg text-neutral-500">Starting from <span className="text-black font-semibold">{room.price}</span> / night</p>
                    </div>
                    <Button size="lg" className="rounded-full px-8">Book This Room</Button>
                </div>

                {/* Gallery Grid - Handle cases with fewer images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-3xl overflow-hidden mb-12 h-[500px]">
                    <div className="relative h-full">
                        {room.images && room.images[0] && (
                            <Image src={room.images[0]} alt={room.name} fill className="object-cover" priority />
                        )}
                    </div>
                    <div className="grid grid-rows-2 gap-4 h-full">
                        <div className="relative h-full">
                            {room.images && room.images[1] ? (
                                <Image src={room.images[1]} alt={`${room.name} detail`} fill className="object-cover" />
                            ) : (
                                <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400">No Image</div>
                            )}
                        </div>
                        <div className="relative h-full">
                            {room.images && room.images[2] ? (
                                <Image src={room.images[2]} alt={`${room.name} bathroom`} fill className="object-cover" />
                            ) : (
                                <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400">No Image</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4">About the Room</h2>
                            <p className="text-neutral-600 leading-relaxed text-lg whitespace-pre-line">
                                {room.shortDescription}
                            </p>
                        </section>

                        {/* Amenities */}
                        {room.amenities && room.amenities.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Room Amenities</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {room.amenities.map((item, idx) => {
                                        const IconComponent = iconMap[item.icon] || iconMap.default;
                                        return (
                                            <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                                                <IconComponent className="w-5 h-5 text-neutral-700" />
                                                <span className="font-medium text-neutral-700">{item.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Sidebar (Booking Form Placeholder) */}
                    <div className="lg:col-span-1">
                        <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Interested in this room?</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-neutral-700">Name</label>
                                    <input type="text" className="w-full rounded-xl border-neutral-200 px-4 py-2.5 focus:ring-black focus:border-black" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-neutral-700">Email (Optional)</label>
                                    <input type="email" className="w-full rounded-xl border-neutral-200 px-4 py-2.5 focus:ring-black focus:border-black" placeholder="you@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-neutral-700">Phone</label>
                                    <input type="tel" className="w-full rounded-xl border-neutral-200 px-4 py-2.5 focus:ring-black focus:border-black" placeholder="+91 98765 43210" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-neutral-700">Dates</label>
                                    <input type="text" className="w-full rounded-xl border-neutral-200 px-4 py-2.5 focus:ring-black focus:border-black" placeholder="Check-in - Check-out" />
                                </div>
                                <Button className="w-full rounded-full h-12 text-base mt-2">Send Inquiry</Button>
                                <p className="text-xs text-center text-neutral-500 mt-4">
                                    This is an inquiry form. Our team will contact you shortly to confirm availability.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
