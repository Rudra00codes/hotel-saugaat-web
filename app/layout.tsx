import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Using Manrope as per Design System "Modern Geometric"
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          manrope.className
        )}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
