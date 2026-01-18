"use client";

import { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotification } from "@/app/actions/push";
import { urlBase64ToUint8Array } from "@/utils/urlBase64ToUint8Array";
import { Button } from "@/components/ui/button";
import { Bell, BellOff } from "lucide-react";
import { toast } from "sonner";

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

    async function sendTestNotification() {
        if (!subscription) return;
        setLoading(true);
        try {
            await sendNotification("This is a test notification from Saugaat Regency!", subscription.toJSON());
            toast.success("Test notification sent!");
        } catch (e) {
            toast.error("Failed to send test notification");
        } finally {
            setLoading(false);
        }
    }

    if (!isSupported) {
        return null; // Don't show anything if push not supported (e.g. older iOS, non-https local without override)
    }

    return (
        <div className="fixed bottom-4 right-4 z-40 hidden md:block">
            {/* Usually hidden or placed in settings, but for PWA demo we can show it here or return null and use it in a settings page. 
           For this specific task, I'll return it as a small UI component the user can interact with to TEST. */}
            <div className="bg-white p-3 rounded-xl shadow-lg border border-neutral-200 flex flex-col gap-2 w-64">
                <h4 className="font-semibold text-sm">Notifications</h4>
                {subscription ? (
                    <>
                        <p className="text-xs text-green-600">Active</p>
                        <Button onClick={unsubscribeFromPush} variant="outline" size="sm" disabled={loading} className="w-full">
                            <BellOff className="w-4 h-4 mr-2" /> Disable
                        </Button>
                        <Button onClick={sendTestNotification} size="sm" disabled={loading} className="w-full">
                            Test Alert
                        </Button>
                    </>
                ) : (
                    <Button onClick={subscribeToPush} size="sm" disabled={loading} className="w-full bg-neutral-900 text-white">
                        <Bell className="w-4 h-4 mr-2" /> Enable Push
                    </Button>
                )}
            </div>
        </div>
    );
}
