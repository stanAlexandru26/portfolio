export interface NavbarLink {
  title: string;
  name: string;
  href: string;
  icon: string;
  inNavbar: boolean;
}

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    title: 'home',
    name: 'Home',
    href: '/',
    icon: 'mi:home',
    inNavbar: false,
  },
  {
    title: 'about',
    name: 'About',
    href: '/about',
    icon: 'mi:circle-information',
    inNavbar: true,
  },
  {
    title: 'projects',
    name: 'Projects',
    href: '/projects',
    icon: 'mi:clipboard-check',
    inNavbar: true,
  },
  // {
  //   title: 'blog',
  //   name: 'Blog',
  //   href: '/blog',
  //   icon: 'mi:grid',
  //   inNavbar: true,
  // },
];
