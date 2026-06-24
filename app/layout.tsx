import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmartSuggestionPopover from "@/components/organisms/SmartSuggestionPopover";
import "./globals.css";
import { WishlistProvider } from "@/context/WishlistContext";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <WishlistProvider>
          {children}
           <SmartSuggestionPopover />
        </WishlistProvider>
      </body>
    </html>
  );
}