import {
  Images,
  LayoutDashboard,
  List,
  MessageCircleQuestion,
  ScanLine,
  Sparkles,
  Sprout,
  TriangleAlert,
} from "lucide-react";

export const colors = [
  "blue",
  "green",
  "indigo",
  "red",
  "darkorange",
  "magenta",
  "brown",
];

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

export const samplePrompts = [
  {
    Icon: MessageCircleQuestion,
    prompt: "Can you give me a brief definition on what are aphids?",
  },
  {
    Icon: List,
    prompt:
      "Generate preventive measures and actions to keep fruit flies from my plants.",
  },
  {
    Icon: TriangleAlert,
    prompt:
      "What are the possible effects of infestation of white flies to my plants?",
  },
  {
    Icon: Sprout,
    prompt:
      "Is there an organic way to protect my plants to any kinds of pest?",
  },
];
