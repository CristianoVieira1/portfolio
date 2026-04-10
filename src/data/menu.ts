export type MenuSubItem = {
  label: string;
  href: string;
};

export type MenuItem = {
  label: string;
  href: string;
  isLink: boolean;
  hasDropdown: boolean;
  submenu: MenuSubItem[];
};

export const menuItems: MenuItem[] = [
  {
    label: "Início",
    href: "#home",
    isLink: false,
    hasDropdown: false,
    submenu: [],
  },
  {
    label: "Sobre",
    href: "#about",
    isLink: false,
    hasDropdown: false,
    submenu: [],
  },
  {
    label: "Experiência",
    href: "#resume-section",
    isLink: false,
    hasDropdown: false,
    submenu: [],
  },
  {
    label: "Portfólio",
    href: "#portfolio",
    isLink: false,
    hasDropdown: false,
    submenu: [],
  },
  {
    label: "Contato",
    href: "#contacts",
    isLink: false,
    hasDropdown: false,
    submenu: [],
  },
];
export const menuItemsLight: MenuItem[] = [
  {
    label: "Início",
    href: "#home",
    isLink: false,
    hasDropdown: false,
    submenu: [],
  },
  {
    label: "Sobre",
    href: "#about",
    isLink: false,
    hasDropdown: false,
    submenu: [],
  },
  {
    label: "Experiência",
    href: "#resume-section",
    isLink: false,
    hasDropdown: false,
    submenu: [],
  },
  {
    label: "Portfólio",
    href: "#portfolio",
    isLink: false,
    hasDropdown: false,
    submenu: [],
  },
  {
    label: "Contato",
    href: "#contacts",
    isLink: false,
    hasDropdown: false,
    submenu: [],
  },
];
export const demoData = [
  { href: "/", img: "/portfolio/assets/images/demo/home-1.png", title: "Main Demo" },
  {
    href: "/index-02",
    img: "/portfolio/assets/images/demo/home-2.png",
    title: "Demo 02",
  },
  {
    href: "/index-03",
    img: "/portfolio/assets/images/demo/home-3.png",
    title: "Demo 03",
  },
  {
    href: "/index-04",
    img: "/portfolio/assets/images/demo/home-4.png",
    title: "Demo 04",
  },
  {
    href: "/index-05",
    img: "/portfolio/assets/images/demo/home-5.png",
    title: "Demo 05",
  },
  {
    href: "/index-06",
    img: "/portfolio/assets/images/demo/home-6.png",
    title: "Demo 06",
  },
  {
    href: "/index-07",
    img: "/portfolio/assets/images/demo/home-7.png",
    title: "Demo 07",
  },
  {
    href: "/index-08",
    img: "/portfolio/assets/images/demo/home-8.png",
    title: "Demo 08",
  },
  {
    href: "/index-09",
    img: "/portfolio/assets/images/demo/home-9.png",
    title: "Demo 09",
  },
  {
    href: "/index-10",
    img: "/portfolio/assets/images/demo/home-10.png",
    title: "Demo 10",
  },
  {
    href: "/index-11",
    img: "/portfolio/assets/images/demo/home-11.png",
    title: "Demo 11",
  },
  {
    href: "/index-12",
    img: "/portfolio/assets/images/demo/home-12.png",
    title: "Demo 12",
  },
  {
    href: "/index-13",
    img: "/portfolio/assets/images/demo/home-13.png",
    title: "Demo 13",
  },
  {
    href: "/index-14",
    img: "/portfolio/assets/images/demo/home-14.png",
    title: "Demo 14",
  },
  {
    href: "/index-15",
    img: "/portfolio/assets/images/demo/home-15.png",
    title: "Demo 15",
  },
  {
    href: "/index-16",
    img: "/portfolio/assets/images/demo/home-16.png",
    title: "Demo 16",
  },
  {
    href: "/index-17",
    img: "/portfolio/assets/images/demo/home-17.png",
    title: "Demo 17",
  },
  {
    href: "/index-18",
    img: "/portfolio/assets/images/demo/home-18.png",
    title: "Demo 18",
  },
  {
    href: "/index-19",
    img: "/portfolio/assets/images/demo/home-19.png",
    title: "Demo 19",
  },
  {
    href: "/index-20",
    img: "/portfolio/assets/images/demo/home-20.png",
    title: "Demo 20",
  },
  {
    href: "/index-21",
    img: "/portfolio/assets/images/demo/home-21.png",
    title: "Demo 21",
  },
  {
    href: "/index-22",
    img: "/portfolio/assets/images/demo/home-22.png",
    title: "Demo 22",
  },
];

export const whiteDemoData = [
  {
    href: "/index-white",
    img: "/portfolio/assets/images/demo/home-1-white.png",
    title: "Main Demo",
  },
  {
    href: "/index-02-white",
    img: "/portfolio/assets/images/demo/home-2-white.png",
    title: "Demo 02",
  },
  {
    href: "/index-03-white",
    img: "/portfolio/assets/images/demo/home-3-white.png",
    title: "Demo 03",
  },
  {
    href: "/index-04-white",
    img: "/portfolio/assets/images/demo/home-4-white.png",
    title: "Demo 04",
  },
  {
    href: "/index-05-white",
    img: "/portfolio/assets/images/demo/home-5-white.png",
    title: "Demo 05",
  },
  {
    href: "/index-06-white",
    img: "/portfolio/assets/images/demo/home-6-white.png",
    title: "Demo 06",
  },
  {
    href: "/index-07-white",
    img: "/portfolio/assets/images/demo/home-7-white.png",
    title: "Demo 07",
  },
  {
    href: "/index-08-white",
    img: "/portfolio/assets/images/demo/home-8-white.png",
    title: "Demo 08",
  },
  {
    href: "/index-09-white",
    img: "/portfolio/assets/images/demo/home-9-white.png",
    title: "Demo 09",
  },
  {
    href: "/index-10-white",
    img: "/portfolio/assets/images/demo/home-10-white.png",
    title: "Demo 10",
  },
  {
    href: "/index-11-white",
    img: "/portfolio/assets/images/demo/home-11-white.png",
    title: "Demo 11",
  },
  {
    href: "/index-12-white",
    img: "/portfolio/assets/images/demo/home-12-white.png",
    title: "Demo 12",
  },
  {
    href: "/index-13-white",
    img: "/portfolio/assets/images/demo/home-13-white.png",
    title: "Demo 13",
  },
  {
    href: "/index-14-white",
    img: "/portfolio/assets/images/demo/home-14-white.png",
    title: "Demo 14",
  },
  {
    href: "/index-15-white",
    img: "/portfolio/assets/images/demo/home-15-white.png",
    title: "Demo 15",
  },
  {
    href: "/index-16-white",
    img: "/portfolio/assets/images/demo/home-16-white.png",
    title: "Demo 16",
  },
  {
    href: "/index-17-white",
    img: "/portfolio/assets/images/demo/home-17-white.png",
    title: "Demo 17",
  },
  {
    href: "/index-18-white",
    img: "/portfolio/assets/images/demo/home-18-white.png",
    title: "Demo 18",
  },
  {
    href: "/index-19-white",
    img: "/portfolio/assets/images/demo/home-19-white.png",
    title: "Demo 19",
  },
  {
    href: "/index-20-white",
    img: "/portfolio/assets/images/demo/home-20-white.png",
    title: "Demo 20",
  },
  {
    href: "/index-21-white",
    img: "/portfolio/assets/images/demo/home-21-white.png",
    title: "Demo 21",
  },
  {
    href: "/index-22-white",
    img: "/portfolio/assets/images/demo/home-22-white.png",
    title: "Demo 22",
  },
];
