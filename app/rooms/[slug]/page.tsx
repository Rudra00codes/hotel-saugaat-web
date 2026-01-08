import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Wifi, Coffee, Tv, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function RoomDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // Mock data - In real app, fetch based on slug
    const room = {
        title: "Super Deluxe Room",
        slug: slug,
        price: "₹2,500",
        description: "Experience the epitome of comfort in our Super Deluxe Room. Designed with modern aesthetics and equipped with premium amenities, this room offers a sanctuary of relaxation. Enjoy the stunning views of the city skyline while you unwind in luxury.",
        images: [
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=3270&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=3450&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=3540&auto=format&fit=crop"
        ],
        amenities: [
            { name: "Free High-Speed WiFi", icon: Wifi },
            { name: "Complimentary Breakfast", icon: Coffee },
            { name: "Smart LED TV", icon: Tv },
            { name: "Free Parking", icon: Car },
            { name: "24/7 Room Service", icon: Check },
            { name: "Air Conditioning", icon: Check },
        ]
    };

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
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">{room.title}</h1>
                        <p className="text-lg text-neutral-500">Starting from <span className="text-black font-semibold">{room.price}</span> / night</p>
                    </div>
                    <Button size="lg" className="rounded-full px-8">Book This Room</Button>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-3xl overflow-hidden mb-12 h-[500px]">
                    <div className="relative h-full">
                        <Image src={room.images[0]} alt={room.title} fill className="object-cover" priority />
                    </div>
                    <div className="grid grid-rows-2 gap-4 h-full">
                        <div className="relative h-full">
                            <Image src={room.images[1]} alt="Room Detail" fill className="object-cover" />
                        </div>
                        <div className="relative h-full">
                            <Image src={room.images[2]} alt="Room Bathroom" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4">About the Room</h2>
                            <p className="text-neutral-600 leading-relaxed text-lg">
                                {room.description}
                            </p>
                        </section>

                        {/* Amenities */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Room Amenities</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {room.amenities.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                                        <item.icon className="w-5 h-5 text-neutral-700" />
                                        <span className="font-medium text-neutral-700">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
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
