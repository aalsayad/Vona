import React from "react";
import AnimatedSentence from "@/components/animated/AnimatedSentence";
const HeroHeading = () => {
  return (
    <div className="w-[80vw]">
      <AnimatedSentence
        lineHeight={1}
        duration={0.8}
        stagger={0.05}
        text="We design for brands that refuse to blend in"
        direction="up"
        className="text-[min(8.75vw,86px)] md:text-[min(8.5vw,86px)] lg:text-[min(6vw,86px)] font-merchant tracking-[-0.025em] font-extralight"
      />
    </div>
  );
};

export default HeroHeading;
