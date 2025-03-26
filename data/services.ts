import { Service } from "@/types/index";

export const services: Service[] = [
  {
    id: "01",
    title: "Branding",
    subServices: [
      { id: "01", letter: "A", title: "Brand strategy" },
      { id: "02", letter: "B", title: "Identity design" },
      { id: "03", letter: "C", title: "Marketing & content" },
      { id: "04", letter: "D", title: "Corporate design" },
    ],
  },
  {
    id: "02",
    title: "Web design",
    subServices: [
      { id: "01", letter: "A", title: "Landing pages" },
      { id: "02", letter: "B", title: "Multi-page websites" },
    ],
  },
  {
    id: "03",
    title: "Web development",
    subServices: [
      { id: "01", letter: "A", title: "Framer development" },
      { id: "02", letter: "B", title: "Webflow development" },
      { id: "03", letter: "C", title: "NEXT.JS development" },
    ],
  },
];
