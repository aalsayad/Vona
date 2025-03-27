import HomeHero from "@/components/home/hero/index";
import ProjectsSection from "@/components/home/projects/index";

export default function Home() {
  return (
    <>
      <HomeHero />
      {/* Spacer */}
      <div className="w-full h-[120px] md:h-[160px] lg:h-[240px] border-[0px] border-accent/0" />
      {/* Projects */}
      <ProjectsSection />
      {/* MultiColor Spacer */}
      <div className="w-full h-[240px] border-[0px] border-accent/0">
        <div className="w-full h-1/2 bg-background"></div>
        <div className="w-full h-1/2 bg-foreground"></div>
      </div>
      {/* Footer */}
      <div className="w-full h-screen bg-foreground"></div>
    </>
  );
}
