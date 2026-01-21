"use client";

import { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser } from "@/app/actions/push";
import { urlBase64ToUint8Array } from "@/utils/urlBase64ToUint8Array";
import { Button } from "@/components/ui/button";
import { Bell, BellOff } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function PushNotificationManager() {
    const [isSupported, setIsSupported] = useState(false);
    const [subscription, setSubscription] = useState<PushSubscription | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Check if SW and Push API are supported
        if ("serviceWorker" in navigator && "PushManager" in window) {
            setIsSupported(true);
            registerServiceWorker();
        }
    }, []);

    async function registerServiceWorker() {
        try {
            const registration = await navigator.serviceWorker.register("/sw.js", {
                scope: "/",
                updateViaCache: "none",
            });

            const sub = await registration.pushManager.getSubscription();
            setSubscription(sub);
        } catch (error) {
            console.error("Service Worker registration failed:", error);
        }
    }

    async function subscribeToPush() {
        setLoading(true);
        try {
            const registration = await navigator.serviceWorker.ready;
            const sub = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(
                    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
                ) as any,
            });

            setSubscription(sub);
            await subscribeUser(sub.toJSON()); // Send to server
            toast.success("Subscribed to notifications!");
        } catch (error) {
            console.error("Failed to subscribe:", error);
            toast.error("Failed to subscribe. Please verify permission settings.");
        } finally {
            setLoading(false);
        }
    }

    async function unsubscribeFromPush() {
        setLoading(true);
        try {
            await subscription?.unsubscribe();
            setSubscription(null);
            await unsubscribeUser(subscription?.toJSON()); // Tell server
            toast.info("Unsubscribed from notifications.");
        } catch (error) {
            console.error("Failed to unsubscribe:", error);
            toast.error("Failed to unsubscribe.");
        } finally {
            setLoading(false);
        }
    }



    const [isVisible, setIsVisible] = useState(true);

    if (!isSupported || !isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-24 right-6 z-40 hidden md:flex items-center justify-end">
            <motion.div
                initial="collapsed"
                whileHover="expanded"
                className="relative"
            >
                <motion.div
                    className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.15)] rounded-full overflow-hidden"
                    variants={{
                        collapsed: { width: "3.5rem", height: "3.5rem" },
                        expanded: { width: "auto", height: "auto", borderRadius: "1.5rem" }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    {/* Collapsed State Icon (Right Aligned) */}
                    <div className="absolute right-0 top-0 w-14 h-14 flex items-center justify-center text-neutral-400">
                        {subscription ? <Bell className="w-6 h-6 text-green-600 fill-green-600/20" /> : <Bell className="w-6 h-6" />}
                    </div>

                    {/* Expanded Content (Revealed on Hover) */}
                    <motion.div
                        className="flex flex-col p-5 pr-16 min-w-[280px]" // Right padding to clear the icon
                        variants={{
                            collapsed: { opacity: 0, x: 20, pointerEvents: "none" },
                            expanded: { opacity: 1, x: 0, pointerEvents: "auto" }
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-bold text-neutral-800 text-sm">Notifications</h4>
                                <p className="text-xs text-neutral-500 font-medium">
                                    {subscription ? "You are subscribed" : "Get updates on offers"}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-neutral-400 hover:text-red-500 transition-colors p-1"
                                aria-label="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>

                        {subscription ? (
                            <Button
                                onClick={unsubscribeFromPush}
                                size="sm"
                                disabled={loading}
                                variant="outline"
                                className="w-full border-red-100 text-red-600 hover:bg-red-50 hover:text-red-700 h-9 text-xs uppercase tracking-wider font-semibold"
                            >
                                <BellOff className="w-3 h-3 mr-2" /> Disable
                            </Button>
                        ) : (
                            <Button
                                onClick={subscribeToPush}
                                size="sm"
                                disabled={loading}
                                className="w-full bg-neutral-900 text-white hover:bg-neutral-800 h-9 text-xs uppercase tracking-wider font-semibold shadow-md"
                            >
                                <Bell className="w-3 h-3 mr-2" /> Enable Push
                            </Button>
                        )}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
