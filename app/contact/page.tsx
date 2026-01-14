import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Hotel Saugaat Regency",
    description: "Get in touch with Hotel Saugaat Regency. Call us for bookings, event inquiries, or visit us in Dera Bassi.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-orange-100 to-cream-mist pb-20 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Get in Touch"
                    subtitle="Contact Us"
                    center
                    className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/50">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-800">We&apos;d love to hear from you</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="bg-[#283123] p-4 rounded-2xl text-white shadow-lg shadow-[#283123]/20 transition-transform group-hover:scale-110 duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg text-neutral-900">Phone Number</h3>
                                    <p className="text-neutral-600 font-medium">+91 8872011301</p>
                                    <p className="text-neutral-500 text-sm">+91 8872011302 (Events)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="bg-[#283123] p-4 rounded-2xl text-white shadow-lg shadow-[#283123]/20 transition-transform group-hover:scale-110 duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-neutral-900 mb-1">Email Address</h3>
                                    <p className="text-neutral-600 font-medium">saugaatregency@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="bg-[#283123] p-4 rounded-2xl text-white shadow-lg shadow-[#283123]/20 transition-transform group-hover:scale-110 duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-neutral-900 mb-1">Location</h3>
                                    <p className="text-neutral-600 font-medium leading-relaxed">
                                        Ambala-Chandigarh Highway,<br />
                                        Dera Bassi, Punjab 140507
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-neutral-200/50">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
