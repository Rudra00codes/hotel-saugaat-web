"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/shared/Animations";

export default function Hero() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(2);

    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image (Placeholder) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3540&auto=format&fit=crop')"
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-left text-white">
                <FadeInUp delay={0.1}>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-white/20 mb-6">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span>Premium Comfort in Dera Bassi</span>
                    </div>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        Experience Luxury & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EACFA3] to-[#F0944D]">
                            Local Elegance
                        </span>
                    </h1>
                </FadeInUp>

                <FadeInUp delay={0.3}>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
                        The perfect destination for weddings, corporate events, and leisure stays on the Chandigarh-Ambala highway.
                    </p>
                </FadeInUp>

                <FadeInUp delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
                        <Button size="lg" asChild className="bg-white text-black hover:bg-neutral-200 border-none text-base h-14 px-8 rounded-full">
                            <Link href="/rooms">Book Your Stay</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="bg-transparent text-white border-white hover:bg-white/10 text-base h-14 px-8 rounded-full">
                            <Link href="/events">Explore Events</Link>
                        </Button>
                    </div>
                </FadeInUp>
            </div>

            {/* Booking Bar */}
            <FadeInUp delay={0.6} className="absolute bottom-10 left-0 w-full hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="bg-[#EDE9DF]/90 backdrop-blur-lg border border-white/20 rounded-full p-2 max-w-4xl mx-auto flex items-center justify-between shadow-2xl">
                        {/* Check In */}
                        <div className="flex-1 px-8 py-3 border-r border-neutral-100 relative group cursor-pointer transition-colors hover:bg-neutral-50 rounded-l-full">
                            <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Check In</p>
                            <input
                                type="date"
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                onChange={(e) => setCheckIn(e.target.value)}
                                value={checkIn}
                            />
                            <p className="font-semibold text-neutral-900">
                                {checkIn ? new Date(checkIn).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : "Select Date"}
                            </p>
                        </div>

                        {/* Check Out */}
                        <div className="flex-1 px-8 py-3 border-r border-neutral-100 relative group cursor-pointer transition-colors hover:bg-neutral-50">
                            <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Check Out</p>
                            <input
                                type="date"
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                onChange={(e) => setCheckOut(e.target.value)}
                                value={checkOut}
                            />
                            <p className="font-semibold text-neutral-900">
                                {checkOut ? new Date(checkOut).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : "Select Date"}
                            </p>
                        </div>

                        {/* Guests */}
                        <div className="flex-1 px-8 py-3 relative group transition-colors hover:bg-neutral-50 mr-2 rounded-r-full">
                            <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Guests</p>
                            <div className="flex items-center justify-between w-full">
                                <span className="font-semibold text-neutral-900">{guests} Adults</span>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setGuests(Math.max(1, guests - 1))}
                                        className="p-1 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-black transition-colors"
                                    >
                                        <Minus className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                        onClick={() => setGuests(guests + 1)}
                                        className="p-1 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-black transition-colors"
                                    >
                                        <Plus className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Search Button */}
                        <Link
                            href={`/rooms?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}
                            className="bg-[linear-gradient(to_bottom,#EACFA3,#F0944D)] text-white rounded-full h-12 w-12 flex items-center justify-center hover:contrast-125 transition-all hover:scale-105 active:scale-95 shadow-lg group"
                        >
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </div>
            </FadeInUp>
        </section>
    );
}
