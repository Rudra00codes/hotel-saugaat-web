import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    title: string;
    image: string;
    className?: string;
    overlayText?: string;
}

export default function FeatureCard({ title, image, className, overlayText }: FeatureCardProps) {
    return (
        <div className={cn("relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer", className)}>
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center px-4">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">{title}</h3>
                {overlayText && (
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        {overlayText}
                    </p>
                )}
            </div>
        </div>
    );
}
