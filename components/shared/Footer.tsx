import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10 rounded-t-[40px] mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand/About */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-bold tracking-tight">Saugaat</span>
                        </Link>
                        <p className="text-neutral-400 leading-relaxed max-w-sm">
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
                    <div>
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
                                    <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors">
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
                                    Ambala-Chandigarh Highway,<br />
                                    Dera Bassi, Punjab 140507
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-400">
                                <Phone className="w-5 h-5 shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-400">
                                <Mail className="w-5 h-5 shrink-0" />
                                <a href="mailto:info@hotelsaugaat.com" className="hover:text-white transition-colors">info@hotelsaugaat.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter (Optional Placeholder) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
                        <p className="text-neutral-400 mb-4">Subscribe for latest updates and offers.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder:text-neutral-600"
                            />
                            <button className="bg-white text-black font-medium px-4 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                    <p>© {new Date().getFullYear()} Hotel Saugaat Regency. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>

                {/* Large Background Typography */}
                <div className="mt-16 text-center select-none overflow-hidden">
                    <h2 className="text-[10vw] font-black leading-none tracking-tighter bg-gradient-to-b from-gray-50 to-black bg-clip-text text-transparent opacity-60 whitespace-nowrap">
                        SAUGAAT REGENCY
                    </h2>
                </div>
            </div>
        </footer>
    );
}
