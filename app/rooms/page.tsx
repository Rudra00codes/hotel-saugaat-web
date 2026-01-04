import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function RoomsPage() {
    const rooms = [
        {
            title: "Super Deluxe Room",
            slug: "super-deluxe",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=3270&auto=format&fit=crop",
            price: "₹2,500",
            capacity: "2 Adults, 1 Child",
            size: "350 sq.ft",
            description: "Our Super Deluxe Rooms offer a perfect blend of luxury and comfort, featuring modern amenities and stunning city views."
        },
        {
            title: "Executive Suite",
            slug: "executive-suite",
            image: "https://images.unsplash.com/photo-1590490360182-f33efe29a77d?q=80&w=3274&auto=format&fit=crop",
            price: "₹3,500",
            capacity: "2 Adults, 2 Children",
            size: "500 sq.ft",
            description: "Experience ultimate luxury in our Executive Suites, complete with a separate living area and premium furnishings."
        },
        {
            title: "Standard Room",
            slug: "standard-room",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop",
            price: "₹1,800",
            capacity: "2 Adults",
            size: "250 sq.ft",
            description: "Perfect for business travelers, our Standard Rooms provide a cozy and functional space for your stay."
        },
        {
            title: "Family Suite",
            slug: "family-suite",
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=3474&auto=format&fit=crop",
            price: "₹4,500",
            capacity: "4 Adults",
            size: "600 sq.ft",
            description: "Spacious accommodation designed for families, featuring two connecting bedrooms and ample space."
        }
    ];

    return (
        <div className="bg-cream-mist min-h-screen pb-20 pt-24">
            <div className="container mx-auto pt-16 px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Accommodations</h1>
                    <p className="text-lg text-neutral-600 max-w-2xl">
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
                                    alt={room.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-8 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">{room.title}</h2>
                                    <span className="bg-neutral-900 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                                        {room.price} <span className="text-white/70 font-normal">/ night</span>
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
                                    <span>{room.capacity}</span>
                                    <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                                    <span>{room.size}</span>
                                </div>

                                <p className="text-neutral-600 mb-8 leading-relaxed">
                                    {room.description}
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
