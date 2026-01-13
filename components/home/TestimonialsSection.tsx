"use client";
import { useEffect, useRef } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { FadeInUp } from "@/components/shared/Animations";
import Script from "next/script";

export default function TestimonialsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hideBranding = () => {
            const links = document.querySelectorAll('a[href*="elfsight.com/google-reviews-widget"]');
            links.forEach(link => {
                if (link instanceof HTMLElement) {
                    link.style.setProperty('display', 'none', 'important');
                    link.style.setProperty('visibility', 'hidden', 'important');
                    link.style.setProperty('opacity', '0', 'important');
                    link.style.setProperty('pointer-events', 'none', 'important');
                }
            });
        };

        // Initial check
        hideBranding();

        // Observer to watch for DOM changes (widget loading)
        const observer = new MutationObserver((mutations) => {
            hideBranding();
        });

        if (containerRef.current) {
            observer.observe(containerRef.current, {
                childList: true,
                subtree: true
            });
        }

        // Also observe document body just in case it's appended elsewhere or shadow DOM shifts
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 bg-cream-mist" ref={containerRef}>
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
