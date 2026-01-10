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
        <div className="min-h-screen bg-cream-mist pb-20 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Get in Touch"
                    subtitle="Contact Us"
                    center
                    className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-neutral-100">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">We&apos;d love to hear from you</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="bg-neutral-100 p-4 rounded-full text-neutral-900">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                                    <p className="text-neutral-600 mb-1">Reception: +91 98765 43210</p>
                                    <p className="text-neutral-600">Events: +91 98765 43211</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-neutral-100 p-4 rounded-full text-neutral-900">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                                    <p className="text-neutral-600">info@hotelsaugaat.com</p>
                                    <p className="text-neutral-600">bookings@hotelsaugaat.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-neutral-100 p-4 rounded-full text-neutral-900">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                                    <p className="text-neutral-600">
                                        Ambala-Chandigarh Highway,<br />
                                        Dera Bassi, Punjab 140507
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
