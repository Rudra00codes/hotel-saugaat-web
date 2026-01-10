import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Toaster } from "sonner";

const cabinet = localFont({
  src: "../public/font/CabinetGrotesk/CabinetGrotesk_Complete/Fonts/WEB/fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet",
  display: "swap",
});

const clash = localFont({
  src: "../public/font/ClashDisplay/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Saugaat Regency | Affordable Luxury in Dera Bassi",
  description: "Experience comfort and elegance at Hotel Saugaat Regency. Perfect for weddings, corporate events, and leisure stays near Chandigarh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#EDE9DF] antialiased",
          cabinet.variable,
          clash.variable
        )}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
