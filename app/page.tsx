import Hero from "@/components/home/Hero";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import FacilitiesGrid from "@/components/home/FacilitiesGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LocationSection from "@/components/home/LocationSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedRooms />
      <FacilitiesGrid />
      <TestimonialsSection />
      <LocationSection />
    </div>
  );
}
