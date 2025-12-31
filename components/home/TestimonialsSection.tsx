"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/button";
import { StaggerChildren, staggerItem, FadeInUp } from "@/components/shared/Animations";
import { motion } from "framer-motion";

const TESTIMONIALS = [
    {
        name: "Carlos Garcia",
        content: "My stay at Saugaat Hotel was absolutely fantastic! The luxurious ambiance and elegant decor made it feel like a true five-star experience. Highly recommended!",
        location: "Madrid, Spain",
    },
    {
        name: "Emma Wilson",
        content: "The atmosphere was serene and beautifully decorated, making it ideal for couples. The spa services were excellent and left us feeling rejuvenated.",
        location: "Canberra, Australia",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop"
    },
    {
        name: "Yui Suzuki",
        content: "We had a wonderful family vacation. The hotel had something for everyone, including a safe play area for kids. The resort facilities are top-notch.",
        location: "Osaka, Japan",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInUp>
                    <SectionHeading
                        title="The Words of Our Guests!"
                        subtitle="Testimonials"
                        center
                        className="mb-16"
                    />
                </FadeInUp>

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div key={index} variants={staggerItem}>
                            <TestimonialCard
                                {...testimonial}
                            />
                        </motion.div>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
