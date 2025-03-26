import React from "react";
import { Service } from "@/types";
import SubServiceItem from "./SubServiceItem";
import { motion } from "motion/react";
import { vonaEasing } from "@/Utils/animation";

type ServiceCardProps = {
  service: Service;
  number: number;
  isActive: boolean;
  isPrevious: boolean;
};

const ServiceCard = ({
  service,
  number,
  isActive,
  isPrevious,
}: ServiceCardProps) => {
  return (
    <div className="w-fit md:w-auto pr-[8px] md:pr-[14px] lg:pr-[16px]">
      {/* Orange Divider */}
      <motion.div
        className="h-[1px] md:h-[1.25px] lg:h-[1.5px] bg-accent mt-[-2px] mb-[16px] md:mb-[20px] lg:mb-[24px]"
        initial={{ width: "0%" }}
        animate={{
          width: isActive ? "100%" : "0%",
          transition: {
            duration: isActive ? 10 : 0.5,
            ease: isActive ? "linear" : vonaEasing,
          },
        }}
      />

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
          <SubServiceItem key={subService.id} subService={subService} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
