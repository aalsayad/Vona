"use client";

import Image from "next/image";
import vonaLogoWhite from "@/public/images/logos/vona_logo_white.svg";
import Link from "next/link";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  butterEasing,
  butterDuration,
  butterDurationLong,
} from "@/Utils/animation";
import AnimatedNavLink from "./animated/AnimatedNavLink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  return (
    <>
      <div className="w-full h-[64px] px-[24px] md:h-[64px] md:px-[32px] lg:h-[80px] lg:px-[40px] flex items-center justify-between mix-blend-difference fixed z-10">
        {/* Vona Logo */}

        <Image
          src={vonaLogoWhite}
          alt="Vona Logo"
          className="w-[96px] lg:w-[100px]"
        />

        {/* Navbar Links - Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <Link className="navbar-link" href="/#hero">
            <AnimatedNavLink text="Services" />
          </Link>
          <Link className="navbar-link" href="/#work">
            <AnimatedNavLink text="Work" />
          </Link>
          <Link className="navbar-link" href="/#contact">
            <AnimatedNavLink text="Contact" />
          </Link>
          <Link className="navbar-link" href="/#contact">
            <AnimatedNavLink text="Start a Project" />
          </Link>
        </div>
        {/* Navbar Burger Menu - Mobile */}
        <motion.div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden size-[24px] flex items-center justify-center gap-1 flex-col"
        >
          <motion.div
            className="w-full h-[2px] bg-white"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 3 : 0,
              width: isMenuOpen ? "85%" : "100%",
            }}
            transition={{ duration: butterDurationLong, ease: butterEasing }}
          ></motion.div>
          <motion.div
            className="w-full h-[2px] bg-white"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -3 : 0,
              width: isMenuOpen ? "85%" : "100%",
            }}
            transition={{ duration: butterDurationLong, ease: butterEasing }}
          ></motion.div>
        </motion.div>
      </div>
      {/* Full screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu-mobile"
            initial={{
              top: "-100%",
            }}
            exit={{
              top: "-100%",
            }}
            animate={{
              top: "0%",
            }}
            transition={{ duration: butterDurationLong, ease: butterEasing }}
            className="bg-foreground text-background w-full h-[100dvh] px-[24px] py-[40px] pt-[calc(64px+40px)] absolute top-[-100%] left-0 flex justify-between flex-col"
          >
            <div className="w-full h-[1px] bg-white/15"></div>
            <div className="flex flex-col gap-8">
              <Link href="/#hero" className="mobile-nav-link">
                Services
              </Link>
              <Link href="/#work" className="mobile-nav-link">
                Work
              </Link>
              <Link href="/#contact" className="mobile-nav-link">
                Contact
              </Link>
              <Link href="/#contact" className="mobile-nav-link">
                Start a Project
              </Link>
            </div>
            <div className="h-[40px] w-full bg-red-300/10"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
