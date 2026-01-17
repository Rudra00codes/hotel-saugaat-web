"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface BookingFormProps {
    defaultRoomName: string;
    price: string;
    availableRooms: { name: string }[];
}

export default function BookingForm({ defaultRoomName, price, availableRooms }: BookingFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        selectedRoom: defaultRoomName,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "918872011301";

        // Construct the message
        const message = `*New Inquiry via Website*\n\n` +
            `*Room:* ${formData.selectedRoom}\n` +
            `*Name:* ${formData.name}\n` +
            `*Phone:* ${formData.phone}\n` +
            (formData.email ? `*Email:* ${formData.email}\n` : "") +
            `*Check-in:* ${formData.checkIn}\n` +
            `*Check-out:* ${formData.checkOut}\n` +
            `*Ref Price:* ${price}/night\n\n` +
            `Please confirm availability.`;

        // Encode the message
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 sticky top-24">
            <h3 className="text-xl font-bold mb-6">Interested in booking?</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Room Selector */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-neutral-700">
                        Room Type
                    </label>
                    <div className="relative">
                        <select
                            name="selectedRoom"
                            value={formData.selectedRoom}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-neutral-200 px-4 py-3 bg-white focus:ring-black focus:border-black appearance-none"
                        >
                            {availableRooms.map((room) => (
                                <option key={room.name} value={room.name}>{room.name}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-neutral-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border-neutral-200 px-4 py-2.5 focus:ring-black focus:border-black"
                        placeholder="Your Name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-neutral-700">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border-neutral-200 px-4 py-2.5 focus:ring-black focus:border-black"
                        placeholder="+91 98765 XXXXX"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-neutral-700">
                        Email (Optional)
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border-neutral-200 px-4 py-2.5 focus:ring-black focus:border-black"
                        placeholder="you@example.com"
                    />
                </div>

                {/* Date Pickers */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-neutral-700">
                            Check-in
                        </label>
                        <input
                            type="date"
                            name="checkIn"
                            required
                            value={formData.checkIn}
                            onChange={handleChange}
                            className="w-full rounded-xl border-neutral-200 px-3 py-2.5 focus:ring-black focus:border-black text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-neutral-700">
                            Check-out
                        </label>
                        <input
                            type="date"
                            name="checkOut"
                            required
                            value={formData.checkOut}
                            onChange={handleChange}
                            className="w-full rounded-xl border-neutral-200 px-3 py-2.5 focus:ring-black focus:border-black text-sm"
                        />
                    </div>
                </div>

                <Button type="submit" className="w-full rounded-full h-12 text-base mt-2 bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors">
                    Inquire on WhatsApp
                </Button>
                <p className="text-xs text-center text-neutral-500 mt-4">
                    Our team will typically respond within 15 minutes.
                </p>
            </form>
        </div>
    );
}
