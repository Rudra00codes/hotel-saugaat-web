"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteSettings } from "@/types/sanity";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Facilities", href: "/facilities" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

interface NavbarProps {
    settings?: SiteSettings;
}

export default function Navbar({ settings }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const siteName = settings?.siteName || "Saugaat";

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
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b border-transparent hidden md:block",
                    isScrolled ? "bg-cream-mist/80 backdrop-blur-md py-4 shadow-sm border-white/20" : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 z-50">
                        <span className={cn("text-2xl font-bold tracking-tight", isScrolled ? "text-neutral-900" : "text-white mix-blend-difference")}>
                            {siteName}
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

                </div>
            </header>

            {/* Mobile Nav Pill */}
            <div className="md:hidden fixed top-6 left-6 z-50">
                <AnimatePresence mode="wait">
                    {!isMobileMenuOpen ? (
                        <motion.button
                            key="pill"
                            layoutId="mobile-nav-pill"
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="flex items-center gap-3 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full pl-5 pr-2 py-2 shadow-lg"
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="font-bold text-white tracking-tight uppercase text-sm">{siteName}</span>
                            <div className="bg-white/20 rounded-full p-2">
                                <Menu className="w-5 h-5 text-white" />
                            </div>
                        </motion.button>
                    ) : (
                        <motion.div
                            key="overlay"
                            layoutId="mobile-nav-pill"
                            className="fixed inset-4 bg-[#283123]/95 backdrop-blur-2xl rounded-[32px] overflow-hidden flex flex-col z-50 shadow-2xl border border-white/5"
                        >
                            {/* Header inside Overlay */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <span className="text-2xl font-bold text-white tracking-tight">{siteName}</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <div className="flex-1 flex flex-col justify-center px-8 gap-6 overflow-y-auto">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-4xl font-medium text-white/90 hover:text-white hover:pl-4 transition-all duration-300 block"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer inside Overlay */}
                            <div className="p-6 border-t border-white/10 text-white/40 text-sm flex justify-between">
                                <span>© {new Date().getFullYear()} {siteName}</span>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + navLinks.length * 0.1 }}
                                >
                                    <Link
                                        href="/booking"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="inline-flex items-center gap-2 bg-[linear-gradient(to_bottom,#EACFA3,#F0944D)] text-white px-6 py-2 rounded-2xl text-md font-medium shadow-lg"
                                    >
                                        Book Your Stay
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
