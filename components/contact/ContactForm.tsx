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
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_1z9cdkb";
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
        <div className="h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-neutral-700 ml-1">First Name</label>
                        <input
                            {...register("firstName")}
                            className={`w-full rounded-xl border bg-neutral-50 px-4 py-3.5 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-[#283123]/10 focus:border-[#283123] ${errors.firstName ? "border-red-500 bg-red-50" : "border-neutral-200"
                                }`}
                            placeholder="John"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-xs ml-1">{errors.firstName.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-neutral-700 ml-1">Last Name</label>
                        <input
                            {...register("lastName")}
                            className={`w-full rounded-xl border bg-neutral-50 px-4 py-3.5 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-[#283123]/10 focus:border-[#283123] ${errors.lastName ? "border-red-500 bg-red-50" : "border-neutral-200"
                                }`}
                            placeholder="Doe"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-xs ml-1">{errors.lastName.message}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700 ml-1">Email</label>
                    <input
                        {...register("email")}
                        type="email"
                        className={`w-full rounded-xl border bg-neutral-50 px-4 py-3.5 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-[#283123]/10 focus:border-[#283123] ${errors.email ? "border-red-500 bg-red-50" : "border-neutral-200"
                            }`}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700 ml-1">Message</label>
                    <textarea
                        {...register("message")}
                        className={`w-full rounded-xl border bg-neutral-50 px-4 py-3.5 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-[#283123]/10 focus:border-[#283123] min-h-[140px] resize-none ${errors.message ? "border-red-500 bg-red-50" : "border-neutral-200"
                            }`}
                        placeholder="How can we help you?"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl h-14 text-base font-semibold bg-[#283123] hover:bg-[#1a2016] text-white shadow-lg shadow-[#283123]/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
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
