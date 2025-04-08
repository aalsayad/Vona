import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { SmoothScroll } from "@/Utils/SmoothScroll";
import Footer from "@/components/home/footer/Footer";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";

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
  title: "Vona | Creative Design Agency in Riyadh",
  description:
    "Vona is a leading creative agency in Riyadh specializing in branding, web design, and web development. We create distinctive brand identities, stunning websites, and custom development solutions using Framer, Webflow, and Next.js.",
  keywords:
    "Vona, creative agency Riyadh, brand strategy, identity design, web design, landing pages, Framer development, Webflow development, Next.js development",
  openGraph: {
    title: "Vona | Creative Design Agency in Riyadh",
    description:
      "Vona is a leading creative agency in Riyadh specializing in branding, web design, and web development.",
    url: "https://www.vona.agency", // Update with your actual domain
    siteName: "Vona Creative Agency",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.vona.agency"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
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
          <OrganizationSchema />
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
