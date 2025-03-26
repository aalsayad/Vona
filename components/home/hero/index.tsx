"use client";
import React, { useState, useEffect } from "react";
import HeroHeading from "./HeroHeading";
import ServicesSection from "./ServicesSection";
import { services } from "@/data/services";

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const TIMER_DURATION = 10000; // 10 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, TIMER_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[100dvh] flex flex-col p-[16px] md:p-[32px] lg:p-[40px]">
      <div className="w-full h-full bg-background">
        {/* Here you can add your image animation component */}
        {/* <ServiceImages activeIndex={activeIndex} /> */}
      </div>
      <div>
        {/* Hero heading */}
        <HeroHeading />

        {/* Divider */}
        <div className="w-full h-[1px] bg-foreground/10 mt-[32px] lg:mt-[40px]"></div>

        {/* Services Section */}
        <ServicesSection
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
};

export default HomeHero;
