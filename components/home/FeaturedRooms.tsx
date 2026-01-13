"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import RoomCard from "@/components/shared/RoomCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerChildren, staggerItem, FadeInUp } from "@/components/shared/Animations";
import { motion } from "framer-motion";
import { Room } from "@/types/sanity";

interface FeaturedRoomsProps {
    rooms: Room[];
}

export default function FeaturedRooms({ rooms }: FeaturedRoomsProps) {
    return (
        <section className="py-20 bg-cream-mist">
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
                    {rooms.map((room) => (
                        <motion.div key={room._id} variants={staggerItem}>
                            <RoomCard
                                title={room.name}
                                slug={room.slug}
                                image={room.image}
                                price={`Starts ${room.price}`}
                                description={room.shortDescription}
                            />
                        </motion.div>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
