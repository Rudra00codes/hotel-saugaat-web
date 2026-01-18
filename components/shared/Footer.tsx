import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { SiteSettings } from "@/types/sanity";

interface FooterProps {
    settings?: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
    const siteName = settings?.siteName || "Saugaat";
    const contact = settings?.contactInfo;

    return (
        <footer className="bg-[#283123] text-white pt-20 pb-10 rounded-t-[40px] mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Logo */}
                    <div className="flex items-start">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.png"
                                alt={siteName}
                                width={500}
                                height={150}
                                className="h-40 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Brand Description & Socials */}
                    <div className="space-y-6">
                        <p className="text-neutral-400 leading-relaxed tracking-wider">
                            Experience the perfect blend of luxury and comfort. Your home away from home in the heart of Dera Bassi.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors ring-1 ring-white/20">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors ring-1 ring-white/20">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors ring-1 ring-white/20">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:pl-8">
                        <h3 className="text-lg font-semibold mb-6">Explore</h3>
                        <ul className="space-y-4">
                            {[
                                { label: "Rooms & Suites", href: "/rooms" },
                                { label: "Facilities", href: "/facilities" },
                                { label: "Gallery", href: "/gallery" },
                                { label: "Events", href: "/events" },
                                { label: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors tracking-wider">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                                <span>
                                    {contact?.address || (
                                        <>
                                            Ambala-Chandigarh Highway,<br />
                                            Dera Bassi, Punjab 140507
                                        </>
                                    )}
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-400">
                                <Phone className="w-5 h-5 shrink-0" />
                                <a href={`tel:${contact?.phone || "+919876543210"}`} className="hover:text-white transition-colors">
                                    {contact?.phone || "+91 98765 43210"}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-400">
                                <Mail className="w-5 h-5 shrink-0" />
                                <a href={`mailto:${contact?.email || "info@hotelsaugaat.com"}`} className="hover:text-white transition-colors">
                                    {contact?.email || "info@hotelsaugaat.com"}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 tracking-wider">
                    <p>© {new Date().getFullYear()} {siteName}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>

                {/* Large Background Typography */}
                <div className="mt-16 text-center select-none overflow-hidden">
                    <h2 className="text-[8vw] font-black leading-none tracking-tighter bg-[linear-gradient(to_bottom,#883322,#283123)] bg-clip-text text-transparent opacity-60 whitespace-nowrap uppercase tracking-wider">
                        {siteName}
                    </h2>
                </div>
            </div>
        </footer>
    );
}
