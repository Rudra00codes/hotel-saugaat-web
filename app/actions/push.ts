'use server'

import webpush from 'web-push'
import { z } from 'zod'

webpush.setVapidDetails(
    'mailto:[EMAIL_ADDRESS]',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
)

// Schema for the subscription object
const subscriptionSchema = z.object({
    endpoint: z.string(),
    keys: z.object({
        p256dh: z.string(),
        auth: z.string(),
    }),
})

export async function subscribeUser(sub: unknown) {
    // In a real app, you would save this subscription to your database associated with the user/session
    // For this demo, we'll just log it or maybe send a welcome notification immediately 

    const result = subscriptionSchema.safeParse(sub)
    if (!result.success) {
        return { success: false, error: 'Invalid subscription object' }
    }

    // TODO: Save result.data to your DB
    // await db.subscriptions.create({ data: result.data })

    console.log("New Subscription received:", result.data);

    return { success: true }
}

export async function unsubscribeUser(sub: unknown) {
    // In a real app, remove from DB
    const result = subscriptionSchema.safeParse(sub)
    if (!result.success) return { success: false, error: 'Invalid subscription object' }

    // TODO: db.subscriptions.delete/deactivate...
    console.log("Unsubscribe received for:", result.data.endpoint);

    return { success: true }
}

export async function sendNotification(message: string, subscription: any) { // subscription passed for demo
    // In reality, you'd fetch all subscriptions from DB and loop through them

    try {
        await webpush.sendNotification(
            subscription,
            JSON.stringify({
                title: 'Saugaat Regency',
                body: message,
                icon: '/hotel-favicon/icon-192x192.png',
            })
        )
        return { success: true }
    } catch (error) {
        console.error('Error sending push notification:', error)
        return { success: false, error: 'Failed to send notification' }
    }
}
