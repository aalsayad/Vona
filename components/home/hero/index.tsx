"use client";
import React, { useState, useEffect, useRef } from "react";
import HeroHeading from "./HeroHeading";
import ServicesSection from "./ServicesSection";
import { services } from "@/data/services";

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1 progress value
  const TIMER_DURATION = 10000; // 10 seconds
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Animation loop for smooth progress updates
  const updateProgress = (time: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = time;

    const deltaTime = time - lastTimeRef.current;

    if (!isUserInteracting) {
      // When not interacting, advance progress
      setProgress((prev) => {
        const newProgress = prev + deltaTime / TIMER_DURATION;
        // If we've reached the end, move to next card
        if (newProgress >= 1) {
          // Fix for reverse cycling - move forward not backward
          const nextIndex = (activeIndex + 1) % services.length;
          setActiveIndex(nextIndex);
          return 0; // Reset progress
        }
        return newProgress;
      });
    }

    lastTimeRef.current = time;
    animationRef.current = requestAnimationFrame(updateProgress);
  };

  // Start/stop animation loop based on interaction state
  useEffect(() => {
    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Reset time tracking when interaction state changes
    lastTimeRef.current = 0;

    // If user starts interacting, set progress to 1 (full bar)
    if (isUserInteracting) {
      setProgress(1);
    }
    // Otherwise start animation loop
    else {
      setProgress(0); // Reset progress when timer restarts
      animationRef.current = requestAnimationFrame(updateProgress);
    }

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isUserInteracting, activeIndex]);

  // Handler for card hover
  const handleCardHover = (index: number) => {
    setIsUserInteracting(true);
    setActiveIndex(index);
  };

  // Handler for mouse leaving any card - reverted to simple version
  const handleCardMouseLeave = () => {
    setIsUserInteracting(false);
  };

  // Debug log to track active index changes
  useEffect(() => {
    console.log("Active Index:", activeIndex);
  }, [activeIndex]);

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
          isUserInteracting={isUserInteracting}
          onCardHover={handleCardHover}
          onCardMouseLeave={handleCardMouseLeave}
          progress={progress}
        />
      </div>
    </div>
  );
};

export default HomeHero;
