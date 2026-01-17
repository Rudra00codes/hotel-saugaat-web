"use client";

import { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import Link from 'next/link';
import { FadeInUp } from "@/components/shared/Animations";

export default function LocationSection() {
    const [isMapActive, setIsMapActive] = useState(false);

    return (
        <section className="py-20 bg-neutral-900 text-white rounded-[40px] mb-10 overflow-hidden relative">
            {/* Background Map Image (Static Placeholder) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {/* In production, replace with Google Maps Embed or Static Map Image */}
                <div className="w-full h-full bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=30.5964,76.8433&zoom=14&size=600x300&maptype=roadmap')] bg-cover bg-center grayscale" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <FadeInUp>
                        <SectionHeading
                            title="Find Us in the Heart of Dera Bassi"
                            subtitle="Location"
                            light
                        />
                        <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                            Strategically located on the Ambala-Chandigarh Highway, Hotel Saugaat Regency offers easy access to major landmarks including Chandigarh Airport and Railway Station.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-1">Our Address</h4>
                                    <p className="text-neutral-400">Ambala-Chandigarh Highway, Dera Bassi<br />Punjab 140507, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-1">Distances</h4>
                                    <ul className="text-neutral-400 space-y-1">
                                        <li>Chandigarh Airport: 14 km (20 min)</li>
                                        <li>Chandigarh Railway Station: 16 km (25 min)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link href="https://maps.google.com" target="_blank">
                                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 border-none rounded-full px-8">
                                    Get Directions
                                </Button>
                            </Link>
                        </div>
                    </FadeInUp>

                    {/* Interactive Map Section */}
                    <FadeInUp delay={0.2} className="h-[400px] bg-neutral-800 rounded-3xl overflow-hidden border border-white/10 relative group">
                        <div className="w-full h-full relative" onMouseLeave={() => setIsMapActive(false)}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.343419918231!2d76.8415!3d30.5925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecc85579aaaa%3A0x6b4fb693c06d337d!2sHotel%20Saugaat%20Regency!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className={`transition-all duration-700 ${isMapActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-40 hover:grayscale-0 hover:opacity-60'}`}
                            ></iframe>

                            {/* Interaction Overlay */}
                            {!isMapActive && (
                                <div
                                    onClick={() => setIsMapActive(true)}
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/10 transition-colors z-20"
                                >
                                    <span className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white font-semibold shadow-2xl transform transition-transform hover:scale-110 active:scale-95">
                                        Interact with Map
                                    </span>
                                </div>
                            )}

                            {/* Back out button (optional but good for mobile) */}
                            {isMapActive && (
                                <button
                                    onClick={() => setIsMapActive(false)}
                                    className="absolute top-4 right-4 z-30 bg-black/60 backdrop-blur-md p-2 rounded-full text-white/80 hover:text-white border border-white/10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </button>
                            )}
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
}


