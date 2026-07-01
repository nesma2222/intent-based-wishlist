import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmartSuggestionPopover from "@/components/organisms/SmartSuggestionPopover";
import Providers from "@/components/organisms/Providers";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Providers from "@/components/organisms/Providers";

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
        <Providers>
          <Header />
          {children}
          <Footer />
          <SmartSuggestionPopover />
        </Providers>
      </body>
    </html>
  );
}