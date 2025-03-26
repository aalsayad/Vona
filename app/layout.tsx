import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { SmoothScroll } from "@/Utils/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const merchant = localFont({
  src: [
    {
      path: "../public/fonts/Merchant-ExtraLight.woff2",
      weight: "200", // Extra Light
      style: "normal",
    },
    {
      path: "../public/fonts/Merchant-Light.woff2",
      weight: "300", // Light
      style: "normal",
    },
    {
      path: "../public/fonts/Merchant-Medium.woff2",
      weight: "500", // Medium
      style: "normal",
    },
  ],
  variable: "--font-merchant",
  display: "swap", // Optional: improves loading behavior
});

export const metadata: Metadata = {
  title: "Vona",
  description:
    "Vona is a creative studio that designs for brands that refuse to blend in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <html lang="en">
        <body
          className={`${spaceGrotesk.variable} ${merchant.variable} antialiased`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </SmoothScroll>
  );
}
