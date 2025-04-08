import { Project } from "@/types/index";
import { StaticImageData } from "next/image";

// Image imports
const carza1 = "/images/projects/carza/Carza-Logo_animation.mp4";
import carza2 from "@/public/images/projects/carza/carza_socialmedia_cover.webp";
import carza3 from "@/public/images/projects/carza/carza_printables.webp";
import carza4 from "@/public/images/projects/carza/carza_colors.webp";
import carza5 from "@/public/images/projects/carza/carza_webapp.webp";
import carza6 from "@/public/images/projects/carza/carza_ad.webp";
import carza7 from "@/public/images/projects/carza/carza_logomark.webp";
import carza8 from "@/public/images/projects/carza/carza_billboard.webp";

import mualimi1 from "@/public/images/projects/mualimi/mualimi_logo.webp";
import mualimi2 from "@/public/images/projects/mualimi/mualimi_appstore.webp";
import mualimi3 from "@/public/images/projects/mualimi/mualimi_flags.webp";
import mualimi4 from "@/public/images/projects/mualimi/mualimi_idcard.webp";
import mualimi5 from "@/public/images/projects/mualimi/mualimi_businesscards.webp";
import mualimi6 from "@/public/images/projects/mualimi/mualimi_applewatch.webp";
import mualimi7 from "@/public/images/projects/mualimi/mualimi_totebag.webp";
import mualimi8 from "@/public/images/projects/mualimi/mualimi_billboard.webp";

import mushar1 from "@/public/images/projects/mushar/mushar_laptop.webp";
import mushar2 from "@/public/images/projects/mushar/mushar_phone.webp";
const mushar3 = "/images/projects/mushar/mushar-video.mp4";

export const projects: Project[] = [
  {
    id: "01",
    title: "Carza",
    subtitle: "People-first automotive app for Carza",
    slug: "carza",
    tags: [
      { id: "01", letter: "A", title: "Brand Strategy" },
      { id: "01", letter: "B", title: "Identity Design" },
    ],
    description:
      "Carza is on a mission to revolutionize the automotive marketplace for buying and selling cars in Saudi Arabia.",
    media: [
      { type: "video", src: carza1 },
      { type: "image", src: carza2 },
      { type: "image", src: carza3 },
      { type: "image", src: carza4 },
      { type: "image", src: carza6 },
      { type: "image", src: carza5 },
      { type: "image", src: carza7 },
      { type: "image", src: carza8 },
    ],
  },
  {
    id: "02",
    title: "Mualimi",
    subtitle:
      "A holistic visual identity to power the future of tutoring for Mualimi",
    slug: "mualimi",
    tags: [
      { id: "01", letter: "A", title: "Brand Strategy" },
      { id: "01", letter: "B", title: "Identity Design" },
    ],
    description:
      "Reinventing tutoring in Saudi Arabia through an innovative platform that seamlessly connects tutors with students. Mualimi is a holistic solution to educational needs across the Kingdom and soon the region.",
    media: [
      { type: "image", src: mualimi2 },
      { type: "image", src: mualimi1 },
      { type: "image", src: mualimi3 },
      { type: "image", src: mualimi4 },
      { type: "image", src: mualimi5 },
      { type: "image", src: mualimi6 },
      { type: "image", src: mualimi7 },
      { type: "image", src: mualimi8 },
    ],
  },
  {
    id: "03",
    title: "Mushar",
    subtitle: "Strategic consulting website for Mushar",
    slug: "mushar",
    tags: [
      { id: "02", letter: "B", title: "Multi-Page Website Design" },
      { id: "03", letter: "A", title: "Framer Development" },
    ],
    description:
      "Mushar Consulting delivers strategic business solutions across Saudi Arabia, with a focus on transformation, growth, and sustainable operational excellence.",
    media: [
      { type: "image", src: mushar1 },
      { type: "image", src: mushar2 },
      { type: "video", src: mushar3 },
    ],
    locked: true,
    externalLink: "https://mushar.sa/",
  },
];
