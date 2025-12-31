import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";

const FACILITIES = [
    {
        title: "Grand Banquet Hall",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=3536&auto=format&fit=crop",
        overlayText: "For weddings & large events up to 200 guests"
    },
    {
        title: "Fine Dining Restaurant",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=3540&auto=format&fit=crop",
        overlayText: "Multi-cuisine restaurant serving local & international delicacies"
    },
    {
        title: "Bar & Lounge",
        image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=3474&auto=format&fit=crop",
        overlayText: "Relax with our selection of premium beverages"
    },
    {
        title: "Conference Room",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=3538&auto=format&fit=crop",
        overlayText: "Professional space for your business meetings"
    }
];

export default function FacilitiesGrid() {
    return (
        <section className="py-20 bg-neutral-50 rounded-[40px] my-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Premier Facilities and Guest Services"
                    subtitle="Amenities"
                    center
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FACILITIES.map((facility, index) => (
                        <FeatureCard
                            key={index}
                            {...facility}
                            className={index % 2 === 0 ? "lg:translate-y-8" : ""}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
