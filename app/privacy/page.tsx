import React from 'react';
import SectionHeading from "@/components/shared/SectionHeading";
import { FadeInUp } from "@/components/shared/Animations";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Hotel Saugaat Regency",
    description: "Learn how Hotel Saugaat Regency collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-neutral-50 pb-20 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <FadeInUp>
                    <SectionHeading
                        title="Privacy Policy"
                        subtitle="Your Data & Security"
                        center
                        className="mb-12"
                    />
                </FadeInUp>

                <div className="space-y-12 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-neutral-100">

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">1. Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 leading-relaxed text-lg">
                            <li><strong>Personal Information:</strong> Name, contact details, ID proof documents (Aadhar/Passport) collected during booking or check-in.</li>
                            <li><strong>Payment Information:</strong> Credit card details or transaction IDs for processing payments.</li>
                            <li><strong>Usage Data:</strong> Information about how you use our website (cookies, analytics).</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">2. How We Use Your Information</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            We use your data to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 leading-relaxed text-lg">
                            <li>Process reservations and payments.</li>
                            <li>Verify identity as required by local authorities.</li>
                            <li>Communicate about your stay or special offers (if opted in).</li>
                            <li>Improve our services and website experience.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">3. Data Sharing & Security</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            We do not sell your personal information. We may share data with:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 leading-relaxed text-lg">
                            <li><strong>Legal Authorities:</strong> When required by law (e.g., guest reporting to police).</li>
                            <li><strong>Service Providers:</strong> Third-party vendors for payment processing or IT services, under strict confidentiality.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">4. Cookies</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings, though some website features may not function properly.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">5. Contact Us regarding Privacy</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            If you have concerns about your data, please email us at <a href="mailto:saugaatregency@gmail.com" className="text-orange-600 hover:underline">saugaatregency@gmail.com</a>.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
