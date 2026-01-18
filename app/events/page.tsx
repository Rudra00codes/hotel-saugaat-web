import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/EventHero/heroImage.jpg";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import { Check, ArrowRight, Users } from "lucide-react"; // Added Users
import { client } from "@/lib/sanity/client";
import { eventsQuery } from "@/lib/sanity/queries";
import { EventSpace } from "@/types/sanity";
import { PortableText } from "next-sanity";
import { FadeInUp } from "@/components/shared/Animations";
import EventCarousel from "@/components/events/EventCarousel";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events & Banquets | Hotel Saugaat Regency",
    description: "Host your dream weddings and corporate events at Hotel Saugaat Regency. Our banquet halls and meeting rooms are equipped with top-notch facilities.",
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function EventsPage() {
    const venues: EventSpace[] = await client.fetch(eventsQuery);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-orange-100 to-cream-mist pb-20 pt-24">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-20">
                <Image
                    src={heroImage}
                    alt="Events at Saugaat"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white container px-4">
                    <FadeInUp>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Celebrate with Us</h1>
                        <p className="text-xl max-w-2xl mx-auto opacity-90 leading-relaxed tracking-wider">
                            From dream weddings to professional corporate events, we make every occasion memorable.
                        </p>
                    </FadeInUp>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInUp>
                    <SectionHeading
                        title="Our Event Spaces"
                        subtitle="Venues"
                        center
                        className="mb-16"
                    />
                </FadeInUp>

                <div className="space-y-24 md:space-y-32">
                    {venues.map((venue, index) => (
                        <FadeInUp key={venue._id} delay={index * 0.1}>
                            <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Image Carousel */}
                                <EventCarousel
                                    images={venue.images || []}
                                    name={venue.name}
                                    className="w-full lg:w-1/2 h-[400px] sm:h-[450px] lg:h-[500px]"
                                />

                                {/* Content */}
                                <div className="w-full lg:w-1/2 text-left">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-800 tracking-tight">{venue.name}</h2>

                                    <div className="inline-flex items-center gap-2 bg-orange-100/80 backdrop-blur-sm border border-orange-200 px-4 py-2 rounded-full text-sm font-semibold text-orange-900 mb-8 shadow-sm">
                                        <Users className="w-4 h-4" />
                                        <span>Capacity: {venue.capacity}</span>
                                    </div>

                                    <div className="text-neutral-600 text-lg leading-relaxed mb-8 prose-neutral max-w-none">
                                        <PortableText value={venue.description} />
                                    </div>

                                    {venue.features && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                                            {venue.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3 group/item">
                                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-green-200 transition-colors">
                                                        <Check className="w-3.5 h-3.5 text-green-700" />
                                                    </div>
                                                    <span className="text-neutral-700 font-medium group-hover/item:text-neutral-900 transition-colors">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-neutral-900 text-white hover:bg-neutral-800 shadow-xl shadow-neutral-900/20 active:scale-95 transition-all tracking-wider w-full sm:w-auto">
                                        INQUIRE FOR BOOKING <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </FadeInUp>
                    ))}
                </div>

                {/* Cta Section */}
                <div className="mt-32 bg-neutral-900 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Planning an Event?</h2>
                        <p className="text-xl text-neutral-300 mb-10 tracking-wider">
                            Get in touch with our event planners to discuss your requirements and get a customized quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-200 border-none rounded-full h-14 px-8 sm:px-10 text-base tracking-wider w-full sm:w-auto">
                                <a href="tel:+918872011301">
                                    REQUEST A QUOTE NOW <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10 rounded-full h-14 px-8 sm:px-10 text-base tracking-wider w-full sm:w-auto">
                                DOWNLOAD BROCHURE <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
