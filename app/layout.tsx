import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WishlistProvider } from "@/context/WishlistContext";
import SmartSuggestionPopover from "@/components/organisms/SmartSuggestionPopover";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wishly",
  description: "Smart Wishlist Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-50">
        <WishlistProvider>
          <Header />
          {children}
          <Footer />
          <SmartSuggestionPopover />
        </WishlistProvider>
      </body>
    </html>
  );
}