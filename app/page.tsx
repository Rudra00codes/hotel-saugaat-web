import Hero from "@/components/home/Hero";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import FacilitiesGrid from "@/components/home/FacilitiesGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LocationSection from "@/components/home/LocationSection";
import { client } from "@/lib/sanity/client";
import { featuredRoomsQuery } from "@/lib/sanity/queries";
import { Room } from "@/types/sanity";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Home() {
  const featuredRooms: Room[] = await client.fetch(featuredRoomsQuery);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedRooms rooms={featuredRooms} />
      <FacilitiesGrid />
      <TestimonialsSection />
      <LocationSection />
    </div>
  );
}
