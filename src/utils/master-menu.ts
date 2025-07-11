enum RoutesList {
  HOME = "/",
  NOT_FOUND = "*",
  MEMBERSHIP_REGISTRATION = "/member-registration",
  COMMITTEE_MEMBERS = "/committee-members",
  GALLERY = "/gallery",
  CONTACT_US = "/contact-us",
  MEMBERS_LIST = "/members-list",
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
  MembersList = "Members List",
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
        path: RoutesList.COMMITTEE_MEMBERS,
        name: MenuItems.KulalaSudharakaSangha,
      },
      { id: 12, path: RoutesList.COMMITTEE_MEMBERS, name: MenuItems.Sevadala },
      {
        id: 13,
        path: RoutesList.COMMITTEE_MEMBERS,
        name: MenuItems.MahilaMadali,
      },
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
  {
    id: 3,
    category: MenuCategories.MembersList,
    hasSubCategory: false,
    items: [
      {
        id: "members-list",
        name: MenuCategories.MembersList,
        path: RoutesList.MEMBERS_LIST,
      },
    ],
  },
  {
    id: 4,
    category: MenuCategories.Gallery,
    hasSubCategory: false,
    items: [
      { id: "gallery", name: MenuCategories.Gallery, path: RoutesList.GALLERY },
    ],
  },
  {
    id: 5,
    category: MenuCategories.ContactUs,
    hasSubCategory: false,
    items: [
      {
        id: "contact-us",
        name: MenuCategories.ContactUs,
        path: RoutesList.CONTACT_US,
      },
    ],
  },
];

export { Menu, RoutesList };
export type { MenuCategories, MenuItems, MenuCategory, MenuItem };
