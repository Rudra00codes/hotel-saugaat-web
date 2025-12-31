import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image (Placeholder) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3540&auto=format&fit=crop')"
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-white/20 mb-6 animate-fade-in-up">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span>Premium Comfort in Dera Bassi</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                    Experience Luxury & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                        Local Elegance
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                    The perfect destination for weddings, corporate events, and leisure stays on the Chandigarh-Ambala highway.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-white text-black hover:bg-neutral-200 border-none text-base h-14 px-8 rounded-full">
                        Book Your Stay
                    </Button>
                    <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10 text-base h-14 px-8 rounded-full">
                        Explore Events
                    </Button>
                </div>
            </div>

            {/* Booking Bar (Placeholder for future feature) */}
            <div className="absolute bottom-10 left-0 w-full hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-full p-2 max-w-4xl mx-auto flex items-center justify-between shadow-2xl">
                        <div className="flex-1 px-8 py-3 border-r border-neutral-100">
                            <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Check In</p>
                            <p className="font-semibold text-neutral-900">Select Date</p>
                        </div>
                        <div className="flex-1 px-8 py-3 border-r border-neutral-100">
                            <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Check Out</p>
                            <p className="font-semibold text-neutral-900">Select Date</p>
                        </div>
                        <div className="flex-1 px-8 py-3">
                            <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Guests</p>
                            <p className="font-semibold text-neutral-900">2 Adults, 1 Room</p>
                        </div>
                        <button className="bg-black text-white rounded-full h-12 w-12 flex items-center justify-center hover:bg-neutral-800 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
