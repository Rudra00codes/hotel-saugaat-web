"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { FadeInUp } from "@/components/shared/Animations";
import Script from "next/script";

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-cream-mist">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInUp>
                    <SectionHeading
                        title="The Words of Our Guests!"
                        subtitle="Testimonials"
                        center
                        className="mb-16"
                    />
                </FadeInUp>

                <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
                <div className="elfsight-app-f7bdca31-09c6-4127-8455-78f80e1169c2" data-elfsight-app-lazy></div>
            </div>
        </section>
    );
}
