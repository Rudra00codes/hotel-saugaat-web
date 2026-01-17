import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Wifi, Car, Utensils, Wind, Wine, Flower, Dumbbell, Calendar, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity/client";
import { roomBySlugQuery, roomNamesQuery } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText, PortableTextComponents } from "next-sanity";
import BookingForm from "@/components/rooms/BookingForm";

// Define components for Portable Text rendering
const ptComponents: PortableTextComponents = {
    block: {
        h1: ({ children }) => <h1 className="text-3xl font-bold mb-4 mt-8 text-neutral-900">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold mb-3 mt-6 text-neutral-900">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold mb-2 mt-4 text-neutral-900">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-bold mb-2 mt-4 text-neutral-900">{children}</h4>,
        normal: ({ children }) => <p className="mb-4 text-neutral-600 leading-relaxed text-lg">{children}</p>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-neutral-300 pl-4 italic my-4 text-neutral-700">{children}</blockquote>,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-5 mb-4 space-y-2 text-neutral-600 marker:text-neutral-400">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-5 mb-4 space-y-2 text-neutral-600 marker:text-neutral-400">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="pl-1">{children}</li>,
        number: ({ children }) => <li className="pl-1">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-semibold text-neutral-900">{children}</strong>,
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a href={value.href} rel={rel} className="text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 transition-all">
                    {children}
                </a>
            );
        },
    },
};

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

    const [room, roomNames] = await Promise.all([
        client.fetch(roomBySlugQuery, { slug }),
        client.fetch(roomNamesQuery)
    ]);

    if (!room) {
        notFound();
    }

    return (
        <div className="bg-gradient-to-b from-gray-950 via-orange-100 to-cream-mist min-h-screen pb-20 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb / Back */}
                <div className="mb-8">
                    <Link href="/rooms" className="inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Rooms
                    </Link>
                </div>

                {/* Title Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-2">{room.name}</h1>
                        <p className="text-lg text-neutral-400">Starting from <span className="text-white font-semibold">₹ {room.price}</span> / night</p>
                    </div>
                    <Button size="lg" className="rounded-full bg-white text-neutral-900 hover:bg-gray-200 px-8" asChild>
                        <a href="#booking-form">Book This Room</a>
                    </Button>
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
                            <div className="text-neutral-600 leading-relaxed text-lg">
                                {room.fullDescription ? (
                                    <PortableText value={room.fullDescription} components={ptComponents} />
                                ) : (
                                    <p className="whitespace-pre-line">{room.shortDescription}</p>
                                )}
                            </div>
                        </section>

                        {/* Amenities */}
                        {room.amenities && room.amenities.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Room Amenities</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {room.amenities.map((item: any, idx: number) => {
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

                    {/* Right Sidebar */}
                    <div id="booking-form" className="lg:col-span-1 scroll-mt-32">
                        <BookingForm defaultRoomName={room.name} price={room.price} availableRooms={roomNames} />
                    </div>
                </div>
            </div>
        </div>
    );
}
