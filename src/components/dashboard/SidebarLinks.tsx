"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.href) && link.href.length > 10) ||
          link.href === pathname;

        return (
          <Link
            href={link.href}
            key={link.label}
            className={`lg:pl-4 py-2 flex max-lg:justify-center items-center gap-2 rounded-md ${
              isActive
                ? "bg-primary text-white hover:bg-primary hover:text-white"
                : "hover:bg-violet-100"
            }`}
          >
            {<link.icon />} <span className="max-lg:hidden">{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
