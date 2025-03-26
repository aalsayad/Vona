import React from "react";
import { SubService } from "@/types";

type SubServiceItemProps = {
  subService: SubService;
};

const SubServiceItem = ({ subService }: SubServiceItemProps) => {
  return (
    <div className="flex items-center gap-[4px]">
      <div className="lg:w-[32px] hidden items-center gap-[2px] text-[8px] md:text-[9px] lg:text-[10px] lg:flex ">
        <span className="opacity-40">{subService.id}</span>
        <span>/</span>
        <span>{subService.letter}</span>
      </div>
      <p className="opacity-90 text-[11px] md:text-[13.5px] lg:text-[14px] font-light">
        {subService.title}
      </p>
    </div>
  );
};

export default SubServiceItem;
