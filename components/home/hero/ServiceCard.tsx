import React from "react";
import { Service } from "@/types";
import SubServiceItem from "./SubServiceItem";
import { motion } from "motion/react";
import { vonaEasing } from "@/Utils/animation";
import AnimatedBlock from "@/components/animated/AnimatedBlock";

type ServiceCardProps = {
  service: Service;
  number: number;
  isActive: boolean;
  isUserInteracting: boolean;
  onHover: () => void;
  onMouseLeave: () => void;
  progress: number;
};

const ServiceCard = ({
  service,
  number,
  isActive,
  isUserInteracting,
  onHover,
  onMouseLeave,
  progress,
}: ServiceCardProps) => {
  // Calculate the width for the orange bar
  const barWidth = isActive ? (isUserInteracting ? 100 : progress * 100) : 0;

  return (
    <div
      className={`transition-opacity duration-300 cursor-pointer ${
        isUserInteracting && !isActive ? "opacity-30" : "opacity-100"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onMouseLeave}
    >
      {/* Orange Divider */}
      <motion.div
        className="h-[1.5px] bg-accent mt-[-2px] mb-[24px]"
        initial={{ width: "0%" }}
        animate={{ width: `${barWidth}%` }}
        transition={{
          duration: 0.35,
          ease: isUserInteracting || !isActive ? vonaEasing : "linear",
        }}
      />
      <AnimatedBlock
        duration={0.8}
        delay={number * 0.08}
        direction="down"
        className="w-full"
      >
        {/* Service Number */}
        <motion.p
          className="text-[8px] md:text-[9px] lg:text-[10px] mb-[6px] md:mb-[7px] lg:mb-[8px]"
          animate={{
            color: isActive ? "var(--accent)" : "var(--foreground)",
            opacity: isActive ? 1 : 0.6,
          }}
        >
          [0{number + 1}]
        </motion.p>

        {/* Service Title */}
        <h2 className="font-medium text-[16px] md:text-[18px] lg:text-[20px] mb-[12px] md:mb-[14px] lg:mb-[16px]">
          {service.title}
        </h2>

        {/* Subservices */}
        <div className="flex flex-col gap-[3px] md:gap-[3.5px] lg:gap-[4px]">
          {service.subServices.map((subService) => (
            <SubServiceItem
              fixedIdWidth
              key={subService.id}
              subService={subService}
              hideId
            />
          ))}
        </div>
      </AnimatedBlock>
    </div>
  );
};

export default ServiceCard;
