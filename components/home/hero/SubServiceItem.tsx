import React from "react";
import { SubService } from "@/types";
import { cn } from "@/Utils/cn";

type SubServiceItemProps = {
  subService: SubService;
  fixedIdWidth?: boolean;
  size?: "sm" | "md" | "lg";
  hideId?: boolean;
};

const SubServiceItem = ({
  subService,
  fixedIdWidth = false,
  size = "md",
  hideId = false,
}: SubServiceItemProps) => {
  return (
    <div className="flex items-center gap-[4px]">
      <div
        className={cn(
          " items-center gap-[2px]  lg:flex",
          fixedIdWidth ? "w-[32px]" : "w-auto",
          size === "md" && "text-[8px] md:text-[9px] lg:text-[10px]",
          size === "sm" && "text-[6px] md:text-[6px] lg:text-[8px]",
          hideId && "hidden"
        )}
      >
        <span className="opacity-40">{subService.id}</span>
        <span>/</span>
        <span>{subService.letter}</span>
      </div>
      <p className="opacity-90 text-[11px] md:text-[13.5px] lg:text-[14px] font-light text-nowrap">
        {subService.title}
      </p>
    </div>
  );
};

export default SubServiceItem;
