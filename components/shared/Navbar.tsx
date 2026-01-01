"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Facilities", href: "/facilities" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                    isScrolled ? "bg-white/50 backdrop-blur-md py-4 shadow-sm border-neutral-200" : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 z-50">
                        <span className={cn("text-2xl font-bold tracking-tight", isScrolled ? "text-neutral-900" : "text-white mix-blend-difference")}>
                            Saugaat
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm p-1 border border-white/20">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                                    "hover:bg-white hover:text-black",
                                    isScrolled ? "text-neutral-700" : "text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link href="/booking" className={cn(
                            "flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 group",
                            isScrolled
                                ? "bg-neutral-900 text-white hover:bg-neutral-800"
                                : "bg-white text-neutral-900 hover:bg-neutral-100"
                        )}>
                            <span>Book Now</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                        {isMobileMenuOpen ? (
                            <X className={cn("w-6 h-6", isScrolled ? "text-black" : "text-white")} />
                        ) : (
                            <Menu className={cn("w-6 h-6", isScrolled ? "text-black" : "text-white")} />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-medium text-white hover:text-white/70 transition-colors"
                                >
                                    {link.name}
                                    {/* Subtitle - simple for now */}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                        >
                            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full text-lg font-medium">
                                Book A Room
                                <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
