import { Project } from "@/types/index";

import carza1 from "@/public/images/projects/carza/carza-id.webp";
import carza2 from "@/public/images/projects/carza/carza-sweater.webp";
import carza3 from "@/public/images/projects/carza/carza-icons.webp";
import carza4 from "@/public/images/projects/carza/carza-cards.webp";

import mualimi1 from "@/public/images/projects/mualimi/mualimi-ios.webp";
import mualimi2 from "@/public/images/projects/mualimi/mualimi-flag.webp";
import mualimi3 from "@/public/images/projects/mualimi/mualimi-mockup.webp";
import mualimi4 from "@/public/images/projects/mualimi/mualimi-bag.webp";

import mushar1 from "@/public/images/projects/mushar/mushar-photo.webp";
import mushar2 from "@/public/images/projects/mushar/mushar-industries.webp";
import mushar3 from "@/public/images/projects/mushar/mushar-numbers.webp";

export const projects: Project[] = [
  {
    id: "01",
    title: "Carza",
    tags: [
      { id: "01", letter: "A", title: "Brand Strategy" },
      { id: "01", letter: "B", title: "Identity Design" },
    ],
    description:
      "Carza is on a mission to revolutionize the automotive marketplace for buying and selling cars in Saudi Arabia.",
    images: [carza1, carza2, carza3, carza4],
  },
  {
    id: "02",
    title: "Mualimi",
    tags: [
      { id: "01", letter: "A", title: "Brand Strategy" },
      { id: "01", letter: "B", title: "Identity Design" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra, turpis vitae.",
    images: [mualimi1, mualimi2, mualimi3, mualimi4],
  },
  {
    id: "03",
    title: "Mushar",
    tags: [
      { id: "02", letter: "B", title: "Multi-Page Website Design" },
      { id: "03", letter: "A", title: "Framer Development" },
    ],
    description:
      "Carza is on a mission to revolutionize the automotive marketplace in Saudi Arabia by providing a user-friendly, secure, and innovative platform for buying and selling cars.",
    images: [mushar1, mushar2, mushar3],
  },
];
