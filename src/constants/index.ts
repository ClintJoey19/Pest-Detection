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

export const highlights = [
  {
    icon: "",
    highlight: "",
    description: "",
  },
];

export const features = [];

export const faqs = [
  {
    value: "item-1",
    question: "How does the app identify pests?",
    answer:
      "Our app uses advanced image recognition technology to identify various pests based on their physical characteristics. Simply take a clear photo of the pest, and the app will provide potential matches.",
  },
  {
    value: "item-2",
    question: "What kind of pests can the app identify?",
    answer:
      "The app can identify a wide range of common household and garden pests, including ants, cockroaches, spiders, termites, and more. Our database is constantly updated to include new pest species.",
  },
  {
    value: "item-3",
    question: "How accurate is the pest identification?",
    answer:
      "While the app is highly accurate, it's important to note that it's a tool for identification, not a definitive diagnosis. If you're unsure about the pest identification, it's always recommended to consult with a pest control professional.",
  },
  {
    value: "item-4",
    question: "Can the app help me track pest infestations?",
    answer:
      "Yes, the app allows you to create records of pest sightings, including location, date, and number of pests. This helps you monitor the severity of the infestation and track its progress over time.",
  },
  {
    value: "item-5",
    question: "Does the app provide recommendations for pest control?",
    answer:
      "Yes, the app offers general pest control tips and recommendations based on the identified pest. However, it's essential to follow specific guidelines and safety precautions when dealing with pests.",
  },
];

export const footerLinks = [
  {
    title: "Navigation",
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        href: "/policy",
      },
      {
        label: "Terms of Service",
        href: "/terms",
      },
    ],
  },
];

export const socials = [
  {
    label: "Facebook",
    image: "/facebook.png",
    href: "https://www.facebook.com/",
  },
  {
    label: "Instagram",
    image: "/instagram.png",
    href: "https://www.instagram.com/",
  },
  {
    label: "Twitter",
    image: "/twitter.png",
    href: "https://twitter.com/?lang=en",
  },
  {
    label: "Tiktok",
    image: "/tiktok.png",
    href: "https://www.tiktok.com/en/",
  },
];
