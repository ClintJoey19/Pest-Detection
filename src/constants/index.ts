import { Images, LayoutDashboard, ScanLine, Sparkles } from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Documentation",
    href: "/docs",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const sidebarLinks = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Images,
    label: "Images",
    href: "/dashboard/images",
  },
  {
    icon: ScanLine,
    label: "Detection",
    href: "/dashboard/detection",
  },
  {
    icon: Sparkles,
    label: "Ask AI",
    href: "/dashboard/ask-ai",
  },
];
