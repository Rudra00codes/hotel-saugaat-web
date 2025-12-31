import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    className?: string;
    light?: boolean;
}

export default function SectionHeading({ title, subtitle, center, className, light }: SectionHeadingProps) {
    return (
        <div className={cn("mb-12 md:mb-16", center && "text-center", className)}>
            {subtitle && (
                <span className={cn(
                    "text-sm font-medium uppercase tracking-wider mb-3 block",
                    light ? "text-white/80" : "text-neutral-500"
                )}>
                    {subtitle}
                </span>
            )}
            <h2 className={cn(
                "text-3xl md:text-5xl font-bold leading-tight",
                light ? "text-white" : "text-neutral-900"
            )}>
                {title}
            </h2>
        </div>
    );
}
