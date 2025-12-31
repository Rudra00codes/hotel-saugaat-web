import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import { Check, ArrowRight } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events & Banquets | Hotel Saugaat Regency",
    description: "Host your dream weddings and corporate events at Hotel Saugaat Regency. Our banquet halls and meeting rooms are equipped with top-notch facilities.",
};

export default function EventsPage() {
    const venues = [
        {
            name: "Grand Banquet Hall",
            capacity: "200 Guests",
            image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=3536&auto=format&fit=crop",
            description: "Our spacious banquet hall is perfect for grand weddings, receptions, and social gatherings. Featuring elegant decor and customizable lighting.",
            features: ["Customizable Layout", "Audio/Visual Equipment", "Catering Service", "Dedicated Event Team"]
        },
        {
            name: "Corporate Meeting Room",
            capacity: "50 Guests",
            image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=3538&auto=format&fit=crop",
            description: "Designed for productivity, our meeting room is ideal for conferences, seminars, and corporate workshops.",
            features: ["High-speed WiFi", "Projector & Screen", "Whiteboard", "Tea/Coffee Service"]
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-20 pt-24">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-20">
                <Image
                    src="https://images.unsplash.com/photo-1519225468359-2996bc140aaa?q=80&w=3540&auto=format&fit=crop"
                    alt="Events at Saugaat"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white container px-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Celebrate with Us</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        From dream weddings to professional corporate events, we make every occasion memorable.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Our Event Spaces"
                    subtitle="Venues"
                    center
                    className="mb-16"
                />

                <div className="space-y-24">
                    {venues.map((venue, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image */}
                            <div className="w-full lg:w-1/2 h-[400px] relative rounded-3xl overflow-hidden shadow-lg">
                                <Image
                                    src={venue.image}
                                    alt={venue.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">{venue.name}</h2>
                                <div className="inline-block bg-neutral-100 px-4 py-1.5 rounded-full text-sm font-medium text-neutral-800 mb-6">
                                    Capacity: {venue.capacity}
                                </div>
                                <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                                    {venue.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {venue.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                                <Check className="w-3.5 h-3.5 text-green-600" />
                                            </div>
                                            <span className="text-neutral-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button size="lg" className="rounded-full px-8">
                                    Inquire for Booking <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cta Section */}
                <div className="mt-32 bg-neutral-900 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Planning an Event?</h2>
                        <p className="text-xl text-neutral-300 mb-10">
                            Get in touch with our event planners to discuss your requirements and get a customized quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-black hover:bg-neutral-200 border-none rounded-full h-14 px-8 text-base">
                                Contact Event Team
                            </Button>
                            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10 rounded-full h-14 px-8 text-base">
                                Download Brochure
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
