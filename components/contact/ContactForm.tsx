"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// Schema definition
const formSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);

        try {
            // These should ideally be in environment variables
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_c07fq9m";
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!templateId || !publicKey) {
                toast.error("EmailJS configuration missing (Template ID or Public Key)");
                console.error("Missing EmailJS env vars");
                setIsSubmitting(false);
                return;
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: `${data.firstName} ${data.lastName}`,
                    email: data.email,
                    message: data.message,
                    time: new Date().toLocaleString(),
                },
                publicKey
            );

            toast.success("Message sent successfully!", {
                description: "We'll get back to you as soon as possible.",
            });
            reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-neutral-50 p-6 md:p-8 rounded-3xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <input
                            {...register("firstName")}
                            className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 ${errors.firstName ? "border-red-500" : "border-neutral-200"
                                }`}
                            placeholder="John"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-xs">{errors.firstName.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <input
                            {...register("lastName")}
                            className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 ${errors.lastName ? "border-red-500" : "border-neutral-200"
                                }`}
                            placeholder="Doe"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-xs">{errors.lastName.message}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                        {...register("email")}
                        type="email"
                        className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 ${errors.email ? "border-red-500" : "border-neutral-200"
                            }`}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                        {...register("message")}
                        className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 min-h-[120px] ${errors.message ? "border-red-500" : "border-neutral-200"
                            }`}
                        placeholder="How can we help you?"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs">{errors.message.message}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full h-12 text-base"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </Button>
            </form>
        </div>
    );
}
