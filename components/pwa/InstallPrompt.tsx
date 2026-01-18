"use client";

import { useState, useEffect } from "react";
import { Share, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InstallPrompt() {
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        setIsIOS(
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
        );
        setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, []);

    if (isStandalone) {
        return null; // Don't show if already installed
    }

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                setDeferredPrompt(null);
            }
        }
    };

    if (!isIOS && !deferredPrompt) return null; // Only show if IOS or if we have an install prompt available

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white p-4 rounded-xl shadow-2xl border border-neutral-200 z-50 animate-in slide-in-from-bottom-5">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-neutral-900">Install App</h3>
                <button onClick={() => setIsStandalone(true)} className="text-neutral-400 hover:text-neutral-600">×</button>
            </div>

            <p className="text-sm text-neutral-600 mb-4">
                Install our app for a better experience, offline access, and easier booking.
            </p>

            {isIOS ? (
                <div className="text-sm text-neutral-700 bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                    <p className="flex flex-wrap items-center gap-1">
                        To install on iOS: tap share
                        <Share className="w-4 h-4 inline" />
                        and then "Add to Home Screen"
                        <Plus className="w-4 h-4 inline border border-neutral-300 rounded-[4px] p-[1px]" />
                    </p>
                </div>
            ) : (
                <Button onClick={handleInstallClick} className="w-full bg-neutral-900 text-white rounded-full">
                    Add to Home Screen
                </Button>
            )}
        </div>
    );
}
