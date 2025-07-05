enum RoutesList {
  HOME = "/",
  NOT_FOUND = "*",
  MEMBERSHIP_REGISTRATION = "/member-registration",
}

interface SubMenuItem {
  id: number | string;
  name: string;
  path?: string;
}

interface MenuItem {
  id: number | string;
  name: string;
  path?: string;
  subCategory?: string;
  items?: SubMenuItem[];
}

interface MenuCategory {
  id: number | string;
  category: string;
  path?: string;
  hasSubCategory: boolean;
  items: MenuItem[];
}

enum MenuCategories {
  Home = "Home",
  CommitteeMembers = "Committee Members",
  MemberRegistration = "Member Registration",
  // AboutUs = "About Us",
  ContactUs = "Contact Us",
  Gallery = "Gallery",
}

enum MenuItems {
  KulalaSudharakaSangha = "Kulala Sudharaka Sangha",
  Sevadala = "Sevadala",
  MahilaMadali = "Mahila Mandali",
}

const Menu = [
  {
    id: 0,
    category: MenuCategories.Home,
    hasSubCategory: false,
    items: [{ id: "home", name: MenuCategories.Home, path: RoutesList.HOME }],
  },
  {
    id: 1,
    category: MenuCategories.CommitteeMembers,
    hasSubCategory: false,
    items: [
      {
        id: 11,
        name: MenuItems.KulalaSudharakaSangha,
      },
      { id: 12, name: MenuItems.Sevadala },
      { id: 13, name: MenuItems.MahilaMadali },
    ],
  },
  {
    id: 2,
    category: MenuCategories.MemberRegistration,
    hasSubCategory: false,
    items: [
      {
        id: "member-registration",
        name: MenuCategories.MemberRegistration,
        path: RoutesList.MEMBERSHIP_REGISTRATION,
      },
    ],
  },
  // {
  //   id: 3,
  //   category: MenuCategories.AboutUs,
  //   hasSubCategory: false,
  //   items: [{ id: "about-us", name: MenuCategories.AboutUs }],
  // },
  {
    id: 4,
    category: MenuCategories.Gallery,
    hasSubCategory: false,
    items: [{ id: "gallery", name: MenuCategories.Gallery }],
  },
  {
    id: 5,
    category: MenuCategories.ContactUs,
    hasSubCategory: false,
    items: [{ id: "contact-us", name: MenuCategories.ContactUs }],
  },
];

export { Menu, RoutesList };
export type { MenuCategories, MenuItems, MenuCategory, MenuItem };
