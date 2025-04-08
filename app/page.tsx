import { Metadata } from "next";
import Footer from "@/components/home/footer/Footer";
import HomeHero from "@/components/home/hero/index";
import ProjectsSection from "@/components/home/projects/index";

export const metadata: Metadata = {
  title: "Vona | Creative Design & Development Agency in Riyadh",
  description:
    "Vona is a premier creative agency in Riyadh offering branding, web design and development services. We specialize in brand strategy, identity design, landing pages, and development using Framer, Webflow, and Next.js.",
  keywords:
    "creative agency Riyadh, branding agency, web design, web development, Framer, Webflow, Next.js",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <HomeHero />
      {/* Spacer */}
      <div
        id="work"
        className="w-full h-[120px] md:h-[160px] lg:h-[240px] border-[0px] border-accent/0"
      />
      {/* Projects */}
      <ProjectsSection />
    </div>
  );
}
