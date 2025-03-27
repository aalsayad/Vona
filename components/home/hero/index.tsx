"use client";
import React, { useState, useEffect, useRef } from "react";
import HeroHeading from "./HeroHeading";
import ServicesSection from "./ServicesSection";
import { services } from "@/data/services";
import HeroImages from "./HeroImages";

const HomeHero = () => {
  // State for tracking which service card is active
  const [activeIndex, setActiveIndex] = useState(0);
  // Tracks if user is currently interacting with the component
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  // Progress value from 0 to 1 representing animation completion
  const [progress, setProgress] = useState(0);
  // Ref to track the latest active index for the interval
  const activeIndexRef = useRef(activeIndex);

  // Keep the ref in sync with the state
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // useEffect to manage progress and active index
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let progressValue = 0;

    if (isUserInteracting) {
      // When user interacts, show full progress bar
      setProgress(1);
    } else {
      // When user stops interacting, reset progress and start interval
      setProgress(0);
      progressValue = 0;

      intervalId = setInterval(() => {
        progressValue += 0.01; // increment progress by 1%

        if (progressValue >= 1) {
          // Calculate next index and update state
          const currentIndex = activeIndexRef.current;
          const nextIndex = (currentIndex + 1) % services.length;

          console.log(`Cycling from ${currentIndex} to ${nextIndex}`);
          setActiveIndex(nextIndex);

          // Reset progress
          progressValue = 0;
          setProgress(0);
        } else {
          // Update progress
          setProgress(progressValue);
        }
      }, 100); // run every 100ms
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isUserInteracting]); // Only depend on isUserInteracting

  // Handlers for card interactions
  const handleCardHover = (index: number) => {
    setIsUserInteracting(true);
    setActiveIndex(index);
  };

  const handleCardMouseLeave = () => {
    setIsUserInteracting(false);
  };

  // Debug log to track active index changes
  useEffect(() => {
    console.log("Active Index:", activeIndex);
  }, [activeIndex]);

  return (
    <div className="w-full h-[100dvh] flex flex-col p-[16px] md:p-[32px] lg:p-[40px] lg:pt-[80px]">
      <div className="w-full h-full bg-background">
        <HeroImages activeIndex={activeIndex} />
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
