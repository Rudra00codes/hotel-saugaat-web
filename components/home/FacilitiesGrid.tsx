"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import { StaggerChildren, staggerItem, FadeInUp } from "@/components/shared/Animations";
import { motion } from "framer-motion";

const FACILITIES = [
    {
        title: "Grand Banquet Hall",
        image: "/facilities/banquet.png",
        overlayText: "For weddings & large events up to 200 guests"
    },
    {
        title: "Fine Dining Restaurant",
        image: "/facilities/restaurant.jpg",
        overlayText: "Multi-cuisine restaurant serving local & international delicacies"
    },
    {
        title: "Bar & Lounge",
        image: "/facilities/bar.png",
        overlayText: "Relax with our selection of premium beverages"
    },
    {
        title: "Conference Room",
        image: "/facilities/conference.jpg",
        overlayText: "Professional space for your business meetings"
    }
];

export default function FacilitiesGrid() {
    return (
        <section className="py-20 bg-cream-mist rounded-[40px] my-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInUp>
                    <SectionHeading
                        title="Premier Facilities and Guest Services"
                        subtitle="Amenities"
                        center
                    />
                </FadeInUp>

                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FACILITIES.map((facility, index) => (
                        <motion.div key={index} variants={staggerItem} className={index % 2 === 0 ? "lg:translate-y-8" : ""}>
                            <FeatureCard
                                {...facility}
                                className="" // className moved to wrapper
                            />
                        </motion.div>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
