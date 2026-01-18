import React from 'react';
import SectionHeading from "@/components/shared/SectionHeading";
import { FadeInUp } from "@/components/shared/Animations";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Hotel Saugaat Regency",
    description: "Read our extensive Terms of Service, including guest conduct, cancellation policies, and bookings rules at Hotel Saugaat Regency.",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-neutral-50 pb-20 pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <FadeInUp>
                    <SectionHeading
                        title="Terms of Service"
                        subtitle="Guest Policies & Rules"
                        center
                        className="mb-12"
                    />
                </FadeInUp>

                <div className="space-y-12 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-neutral-100">

                    {/* 1. Introduction & Acceptance */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">1. Introduction & Acceptance</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            Welcome to Hotel Saugaat Regency. By booking a stay or entering our premises, you agree to be bound by these Terms of Service. These terms constitute a binding agreement between you ("Guest") and Hotel Saugaat Regency ("Hotel"). We reserve the right to amend these terms at any time without prior notice.
                        </p>
                    </section>

                    {/* 2. Guest Information & ID */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">2. Guest Information & Identification</h2>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 leading-relaxed text-lg">
                            <li><strong>Valid ID Requirement:</strong> All guests must present a valid government-issued photo ID (Aadhar Card, Passport, Driver's License, or Voter ID) upon check-in. PAN cards are not accepted as valid address proof.</li>
                            <li><strong>International Guests:</strong> Foreign nationals must present a valid passport and visa.</li>
                            <li><strong>Accuracy:</strong> You agree to provide accurate, current, and complete information during the booking process.</li>
                        </ul>
                    </section>

                    {/* 3. Reservations & Payments */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">3. Reservations & Payments</h2>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 leading-relaxed text-lg">
                            <li><strong>Rates & Taxes:</strong> Quoted rates may fluctuate based on season and availability. GST and other applicable taxes are extra. Rates are subject to change without prior notice.</li>
                            <li><strong>Extra Person & Children:</strong> Children above 12 years are considered adults and are fully chargeable. Extra person charge is Rs. 400/- per night (rates subject to change).</li>
                            <li><strong>Payment Methods:</strong> We accept major credit/debit cards, UPI, and cash.</li>
                            <li><strong>Advance Payment:</strong> The Hotel reserves the right to request a deposit or full payment in advance.</li>
                        </ul>
                    </section>

                    {/* 4. Cancellation & Modification Policies */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">4. Cancellation & Modification</h2>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 leading-relaxed text-lg">
                            <li><strong>Standard Policy:</strong> Cancellations made 48 hours prior to the check-in date may be eligible for a full refund.</li>
                            <li><strong>Late Cancellation/No-Show:</strong> Cancellations within 48 hours of check-in or failure to arrive will incur a charge equivalent to one night's room rate plus taxes.</li>
                            <li><strong>Non-Refundable Rates:</strong> Certain promotional rates are non-refundable and non-amendable.</li>
                        </ul>
                    </section>

                    {/* 5. Check-in & Check-out */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">5. Check-in & Check-out</h2>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 leading-relaxed text-lg">
                            <li><strong>Check-in Time:</strong> 12:00 PM (Noon). Early check-in is subject to availability and may incur charges.</li>
                            <li><strong>Check-out Time:</strong> 12:00 PM (Noon). Late check-out requests must be made in advance and are subject to availability and additional fees.</li>
                            <li><strong>Luggage Storage:</strong> Complimentary luggage storage is available for guests.</li>
                        </ul>
                    </section>

                    {/* 6. Guest Conduct & Rules */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">6. Guest Conduct & Rules</h2>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 leading-relaxed text-lg">
                            <li><strong>Prohibited Items:</strong> Bringing outside food, flammable items, explosives, or illegal drugs onto the premises is strictly prohibited.</li>
                            <li><strong>Noise Policy:</strong> Guests must respect the privacy and comfort of others. Excessive noise or disturbance may result in eviction without refund.</li>
                            <li><strong>Smoking (No-Smoking Policy):</strong> Smoking is strictly prohibited in non-smoking rooms and public areas. Designated smoking areas are available. A cleaning fee will be charged for violations.</li>
                            <li><strong>Pet Policy:</strong> Pets are generally not allowed unless specifically confirmed in a "Pet-Friendly" package.</li>
                        </ul>
                    </section>

                    {/* 7. Hotel's Liability & Disclaimers */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">7. Liability & Disclaimers</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            <strong>Valuables:</strong> The Hotel is not responsible for the loss, theft, or damage of cash, jewelry, or other valuables left in guest rooms or vehicles. Please use the in-room safes provided.
                        </p>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            <strong>Safety:</strong> While we take every precaution, the Hotel is not liable for personal injury or accidents on the premises unless caused by our proven negligence.
                        </p>
                    </section>

                    {/* 8. Guest Responsibilities */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">8. Guest Responsibilities</h2>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 leading-relaxed text-lg">
                            <li><strong>Property Damage:</strong> Guests are responsible for any damage to hotel property caused by themselves or their visitors. The Hotel reserves the right to charge the guest's credit card for repairs or replacement.</li>
                            <li><strong>Key Cards:</strong> Lost room key cards may incur a replacement fee.</li>
                            <li><strong>Compliance:</strong> Guests must comply with all local laws and hotel safety regulations.</li>
                        </ul>
                    </section>

                    {/* 9. Additional Charges */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">9. Additional Charges</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            Unless expressly included in your booking, charges for extras such as laundry, mini-bar consumption, telephone calls, extra beds, and dining will be added to your final bill.
                        </p>
                    </section>

                    {/* 10. Data Privacy */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">10. Data Privacy</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            We value your privacy. Your personal information is collected solely for booking and legal purposes. We do not sell your data to third parties. For more details, please request our Privacy Policy.
                        </p>
                    </section>

                    {/* 11. Dispute Resolution */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">11. Dispute Resolution</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            Any disputes arising out of or in connection with your stay shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts in Dera Bassi/Mohali.
                        </p>
                    </section>

                    {/* 12. Contact Information */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-2 border-neutral-200">12. Contact Us</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            If you have questions regarding these terms, please contact us:
                        </p>
                        <div className="text-neutral-700 font-medium mt-2">
                            <p>Phone: +91 8872011301</p>
                            <p>Email: saugaatregency@gmail.com</p>
                            <p>Address: Ambala-Chandigarh Highway, Dera Bassi, Punjab 140507</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
