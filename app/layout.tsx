import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { SmoothScroll } from "@/Utils/SmoothScroll";
import Footer from "@/components/home/footer/Footer";

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
          {/* MultiColor Spacer */}
          <div className="w-full h-[120px] md:h-[160px] lg:h-[240px]">
            <div className="w-full h-1/2 bg-background"></div>
            <div id="project" className="w-full h-1/2 bg-foreground"></div>
          </div>
          {/* Footer */}
          <Footer />
        </body>
      </html>
    </SmoothScroll>
  );
}
