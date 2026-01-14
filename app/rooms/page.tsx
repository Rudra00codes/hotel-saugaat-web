import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity/client";
import { allRoomsQuery } from "@/lib/sanity/queries";
import { Room } from "@/types/sanity";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function RoomsPage() {
    const rooms: Room[] = await client.fetch(allRoomsQuery);

    return (
        <div className="bg-gradient-to-b from-gray-950 via-orange-100 to-cream-mist min-h-screen pb-20 pt-24">
            <div className="container mx-auto pt-16 px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Accommodations</h1>
                    <p className="text-lg text-white/70 max-w-2xl">
                        Choose from our range of luxurious rooms and suites, designed to provide you with the utmost comfort during your stay in Dera Bassi.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {rooms.map((room) => (
                        <div key={room.slug} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-100 flex flex-col lg:flex-row h-full lg:h-[400px] transition-transform hover:shadow-md">
                            {/* Image */}
                            <div className="relative w-full lg:w-1/2 h-64 lg:h-full overflow-hidden">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-8 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">{room.name}</h2>
                                    <span className="bg-neutral-900 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                                        {room.price} <span className="text-white/70 font-normal">/ night</span>
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
                                    <span>{room.capacity}</span>
                                    {room.size && (
                                        <>
                                            <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                                            <span>{room.size}</span>
                                        </>
                                    )}
                                </div>

                                <p className="text-neutral-600 mb-8 leading-relaxed line-clamp-3">
                                    {room.shortDescription}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href={`/rooms/${room.slug}`}
                                        className="inline-flex items-center justify-center rounded-full bg-white border border-neutral-200 px-8 py-3 text-sm font-medium shadow-sm hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
