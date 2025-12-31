"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import RoomCard from "@/components/shared/RoomCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerChildren, staggerItem, FadeInUp } from "@/components/shared/Animations";
import { motion } from "framer-motion";

const FEATURED_ROOMS = [
    {
        title: "Super Deluxe Room",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=3270&auto=format&fit=crop",
        slug: "super-deluxe",
        price: "Starts ₹2,500",
        description: "Spacious room with modern amenities and city view, perfect for families."
    },
    {
        title: "Executive Suite",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=3270&auto=format&fit=crop",
        slug: "executive-suite",
        price: "Starts ₹3,500",
        description: "Luxury suite with separate living area and premium furnishings."
    },
    {
        title: "Standard Room",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop",
        slug: "standard-room",
        price: "Starts ₹1,800",
        description: "Cozy and affordable room for business travelers."
    }
];

export default function FeaturedRooms() {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <FadeInUp>
                        <SectionHeading
                            title="Choose the Best Room for Your Perfect Stay"
                            subtitle="Accommodations"
                            className="mb-0"
                        />
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <Link href="/rooms">
                            <Button variant="outline" className="rounded-full px-6 gap-2">
                                View All Rooms
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </FadeInUp>
                </div>

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURED_ROOMS.map((room) => (
                        <motion.div key={room.slug} variants={staggerItem}>
                            <RoomCard
                                {...room}
                            />
                        </motion.div>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
