import { StaticImageData } from "next/image";
export type NavItem = {
  text: string;
  href: string;
};

export type SubService = {
  id: string;
  letter: string;
  title: string;
};

export type Service = {
  id: string;
  title: string;
  subServices: SubService[];
};

export type ProjectTag = {
  id: string;
  letter: string;
  title: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  visitLink?: string;
  slug: string;
  tags: ProjectTag[];
  description: string;
  media: {
    type: "image" | "video";
    src: StaticImageData | string;
  }[];
  locked?: boolean;
  externalLink?: string;
};
