import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

type ServicesSectionProps = {
  activeIndex: number;
  isUserInteracting: boolean;
  onCardHover: (index: number) => void;
  onCardMouseLeave: () => void;
  progress: number;
};

const ServicesSection = ({
  activeIndex,
  isUserInteracting,
  onCardHover,
  onCardMouseLeave,
  progress,
}: ServicesSectionProps) => (
  <section className="flex items-start justify-between">
    <p className="opacity-90 text-[11px] md:text-[13.5px] lg:text-[14px] font-light hidden md:flex items-center gap-[6px] mt-[24px]">
      What we do best{" "}
      <span className="inline-block font-bold text-[11px] lg:text-[12px] opacity-60">
        <HiArrowRight />
      </span>
    </p>
    <div className="flex w-full md:w-auto justify-between gap-[24px] md:gap-[32px] lg:gap-[64px]">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          number={index}
          isActive={index === activeIndex}
          isUserInteracting={isUserInteracting}
          onHover={() => onCardHover(index)}
          onMouseLeave={onCardMouseLeave}
          progress={index === activeIndex ? progress : 0}
        />
      ))}
    </div>
  </section>
);

export default ServicesSection;
