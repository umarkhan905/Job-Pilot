import {
  Building,
  CircleDollarSign,
  Headset,
  Home,
  LogIn,
  LogOut,
  User,
} from "lucide-react";

const authDropdown = [
  {
    id: 0,
    name: "Login",
    icon: LogIn,
    link: "/login",
  },
  {
    id: 1,
    name: "Signup",
    icon: User,
    link: "/signup",
  },
];

const desktopNavigationLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Fid Jobs",
    link: "/jobs",
  },
  {
    name: "Companies",
    link: "/companies",
  },
  {
    name: "Candidates",
    link: "/candidates",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const mobileNavigationLinks = [
  {
    name: "Home",
    icon: Home,
    link: "/",
  },
  {
    name: "Fid Jobs",
    icon: CircleDollarSign,
    link: "/jobs",
  },
  {
    name: "Companies",
    icon: Building,
    link: "/companies",
  },
  {
    name: "Candidates",
    icon: User,
    link: "/candidates",
  },
  {
    name: "Pricing",
    icon: CircleDollarSign,
    link: "/pricing",
  },
  {
    name: "Contact",
    icon: Headset,
    link: "/contact",
  },
];

const userDropdown = [
  {
    id: 0,
    name: "Profile",
    icon: User,
    link: "/profile",
  },
  {
    id: 1,
    name: "Logout",
    icon: LogOut,
    link: "/login",
  },
];

export {
  authDropdown,
  desktopNavigationLinks,
  mobileNavigationLinks,
  userDropdown,
};
