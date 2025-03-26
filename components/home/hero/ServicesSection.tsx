import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

type ServicesSectionProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const ServicesSection = ({
  activeIndex,
  setActiveIndex,
}: ServicesSectionProps) => {
  return (
    <div className="w-full border-[1px] border-red-300/0 flex items-start justify-between">
      <p className="opacity-90 text-[11px] md:text-[13.5px] lg:text-[14px] font-light hidden md:flex items-center gap-[6px] lg:gap-[8px] mt-[24px]">
        What we do best{" "}
        <span className="inline-block font-bold text-[11px] lg:text-[14px]">
          <HiArrowRight />
        </span>
      </p>
      <div className="flex w-full md:w-auto justify-between gap-[24px] md:gap-[32px] lg:gap-[64px]  ">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            number={index}
            isActive={index === activeIndex}
            isPrevious={
              index === (activeIndex - 1 + services.length) % services.length
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
