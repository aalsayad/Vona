import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { vonaEasing } from "@/Utils/animation";

type AnimatedMobileNavLinkProps = {
  text: string;
  href: string;
  index: number;
  isMenuOpen: boolean;
};

const AnimatedMobileNavLink = ({
  text,
  href,
  index,
  isMenuOpen,
}: AnimatedMobileNavLinkProps) => {
  return (
    <Link href={href} className="mobile-nav-link">
      <div className="h-[1.2em] relative overflow-hidden">
        <motion.div
          className="flex flex-col"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: isMenuOpen ? "0%" : "100%",
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{
            delay: isMenuOpen ? index * 0.15 : index * 0.05,
            duration: isMenuOpen ? 1 : 0.6,
            ease: vonaEasing,
          }}
        >
          {text}
        </motion.div>
      </div>
    </Link>
  );
};

export default AnimatedMobileNavLink;
