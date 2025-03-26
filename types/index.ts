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
