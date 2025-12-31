import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoomCardProps {
    title: string;
    image: string;
    slug: string;
    price?: string;
    description?: string;
    className?: string;
}

export default function RoomCard({ title, image, slug, price, description, className }: RoomCardProps) {
    return (
        <div className={cn("group relative w-full h-[400px] rounded-3xl overflow-hidden shadow-sm cursor-pointer", className)}>
            <Link href={`/rooms/${slug}`}>
                {/* Image Background */}
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="absolute top-0 left-0 p-6 w-full flex justify-between items-start">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm font-medium">
                        Detail
                    </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
                    {description && (
                        <p className="text-white/80 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                            {description}
                        </p>
                    )}
                    <div className="flex items-center justify-between text-white border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <span className="font-semibold text-lg">{price}</span>
                        <span className="bg-white text-black p-2 rounded-full">
                            <ArrowUpRight className="w-4 h-4" />
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
