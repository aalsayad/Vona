"use client";
import React from "react";
import FooterForm from "./FooterForm";
import AnimatedNavLink from "@/components/animated/AnimatedNavLink";
import Link from "next/link";
import Image from "next/image";
import LogoMark from "@/public/images/logos/vona_logo_mark.svg";

const FooterLinks = [
  {
    title: "Riyadh",
    links: [
      {
        title: "PMGP+9F6, Al Wurud, Riyadh 12252, Saudi Arabia",
        url: "https://goo.gl/maps/1234567890",
        animate: false,
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        title: "X.com",
        url: "https://www.x.com/vona_studio",
        animate: true,
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/company/vona-studio",
        animate: true,
      },
    ],
  },
  {
    title: "Business Inquiries",
    links: [
      {
        title: "hello@vona.sa",
        url: "mailto:hello@vona.sa",
        animate: true,
      },
    ],
  },
  {
    title: "Join the Team",
    links: [
      {
        title: "careers@vona.sa",
        url: "mailto:careers@vona.sa",
        animate: true,
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-full min-h-screen bg-foreground p-[16px] md:p-[32px] lg:p-[40px] pt-[80px] lg:pt-[120px] flex flex-col justify-between gap-[40px] text-white">
      {/* Footer Top Container */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-between ">
        {/* Footer Heading and subheading */}
        <div className="w-full lg:w-1/3  lg:mb-0 mb-[40px]">
          <h2 className="font-merchant leading-[1] text-[26px] md:text-[32px] lg:text-[40px] font-extralight  mb-[16px] lg:mb-[24px]">
            Let’s talk about your project
          </h2>
          <p className=" text-[12px] md:text-[13px] lg:text-[14px] font-thin leading-[1.3] opacity-80 w-[90%] lg:w-2/3">
            Whether you’re building something from scratch or looking to elevate
            what already exists—we’re here to help.{" "}
            <span className="block w-full h-[8px] lg:h-[12px]" />
            Tell us briefly what you’re working on, what you need support with,
            and what success looks like for you. We read every message and we’ll
            be in touch.
          </p>
        </div>
        {/* Footer Form */}
        <div className="w-full lg:w-1/2 ]">
          <FooterForm />
        </div>
      </div>
      {/* Contact Links & Logo */}
      <div className="h-fit flex items-end justify-between mt-[120px] lg:mt-0">
        {/* Contact Links */}
        <div
          id="contact"
          className="w-full grid-cols-2 grid-rows-2 grid lg:flex gap-[32px] lg:gap-[120px]"
        >
          {FooterLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col max-w-[180px] md:max-w-[200px]"
            >
              <p className="text-[12px] md:text-[13px] lg:text-[14px] font-thin leading-[1.5] mb-[8px] lg:mb-[18px]">
                {link.title}
              </p>
              {link.links.map((link) => (
                <Link
                  href={link.url}
                  key={link.title}
                  className=" opacity-50 hover:opacity-100 transition-opacity duration-300 text-[14px] lg:text-[16px] leading-[1.5]"
                >
                  {link.animate ? (
                    <AnimatedNavLink
                      className="text-[14px] lg:text-[16px]"
                      text={link.title}
                    />
                  ) : (
                    <p className="leading-[1.5]">{link.title}</p>
                  )}
                </Link>
              ))}
            </div>
          ))}
        </div>
        {/* Logo */}
        <Image
          src={LogoMark}
          alt="Vona Logo Mark"
          width={100}
          height={100}
          className="w-[40px] opacity-20 hidden md:block"
        />
      </div>
    </div>
  );
};

export default Footer;
