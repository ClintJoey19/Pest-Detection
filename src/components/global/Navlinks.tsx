"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-4 max-md:hidden">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li
            key={link.label}
            className={`text-sm font-semibold ${isActive && "text-primary"}`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
