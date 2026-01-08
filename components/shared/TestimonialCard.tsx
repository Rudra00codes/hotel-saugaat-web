import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    name: string;
    role?: string;
    content: string;
    rating?: number;
    location?: string;
    image?: string;
    className?: string;
}

export default function TestimonialCard({
    name,
    role,
    content,
    rating = 5,
    location,
    image,
    className
}: TestimonialCardProps) {
    return (
        <div className={cn("bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between h-full min-h-[320px]", className)}>
            <div>
                {/* Location Tag */}
                {location && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-6">
                        <MapPin className="w-3.5 h-3.5" />
                        {location}
                    </div>
                )}

                <p className="text-neutral-600 leading-relaxed text-lg italic">
                    &quot;{content}&quot;
                </p>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-neutral-50">
                {image ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                        <Image src={image} alt={name} fill className="object-cover" />
                    </div>
                ) : (
                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-xl font-bold text-neutral-400">
                        {name.charAt(0)}
                    </div>
                )}

                <div>
                    <h4 className="font-bold text-neutral-900 leading-tight">{name}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
