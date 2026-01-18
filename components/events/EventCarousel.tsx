"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCarouselProps {
    images: string[];
    name: string;
    className?: string;
}

export default function EventCarousel({ images, name, className = "" }: EventCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Filter out potential undefined/null images just in case
    const validImages = images.filter(Boolean);

    useEffect(() => {
        if (validImages.length <= 1 || isHovered) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isHovered, validImages.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % validImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
    };

    // Swipe handlers
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    if (validImages.length === 0) return null;

    if (validImages.length === 1) {
        return (
            <div className={`relative w-full overflow-hidden rounded-[2rem] shadow-xl border-4 border-white/30 ${className}`}>
                <Image
                    src={validImages[0]}
                    alt={name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        );
    }

    return (
        <div
            className={`relative w-full overflow-hidden rounded-[2rem] shadow-xl border-4 border-white/30 group ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            nextSlide();
                        } else if (swipe > swipeConfidenceThreshold) {
                            prevSlide();
                        }
                    }}
                >
                    <Image
                        src={validImages[currentIndex]}
                        alt={`${name} - Slide ${currentIndex + 1}`}
                        fill
                        className="object-cover pointer-events-none" // pointer-events-none prevents dragging the image itself
                        priority={currentIndex === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows (Desktop) */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none px-2 sm:px-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSlide}
                    className="bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 transition-all hover:scale-110"
                >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSlide}
                    className="bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 transition-all hover:scale-110"
                >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </Button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                {validImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "bg-white w-6 sm:w-8"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
