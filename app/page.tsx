import Footer from "@/components/home/footer/Footer";
import HomeHero from "@/components/home/hero/index";
import ProjectsSection from "@/components/home/projects/index";

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
      {/* MultiColor Spacer */}
      <div className="w-full h-[120px] md:h-[160px] lg:h-[240px] border-[0px] border-accent/0">
        <div className="w-full h-1/2 bg-background"></div>
        <div id="project" className="w-full h-1/2 bg-foreground"></div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
