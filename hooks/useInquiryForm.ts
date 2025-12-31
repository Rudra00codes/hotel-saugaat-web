import { useState } from 'react';

// Define the shape of the form data
interface InquiryData {
    name: string;
    email: string;
    phone: string;
    message?: string;
    date?: string;
    type?: string;
}

export function useInquiryForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submitInquiry = async (data: InquiryData) => {
        setIsLoading(true);
        setError(null);

        try {
            // Simulate API call / Email.js integration
            await new Promise(resolve => setTimeout(resolve, 1500));

            // In production, integrate Email.js here:
            // await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);

            console.log("Inquiry submitted:", data);
            setIsSuccess(true);
        } catch (err) {
            setError("Something went wrong. Please try again or contact us directly.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setIsSuccess(false);
        setError(null);
    };

    return {
        submitInquiry,
        isLoading,
        isSuccess,
        error,
        resetForm
    };
}
