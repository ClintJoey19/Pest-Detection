"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import SidebarLinks from "./SidebarLinks";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-5 h-5" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-2">
              <Image src={"/logo.svg"} alt="logo" height={35} width={35} />
              <p className="text-lg font-bold">
                PestScope <span className="text-primary">AI</span>
              </p>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-5">
          <div className="flex flex-col gap-2">
            {sidebarLinks.map((link) => {
              const isActive =
                (pathname.includes(link.href) && link.href.length > 10) ||
                link.href === pathname;

              return (
                <SheetClose asChild>
                  <Link
                    href={link.href}
                    key={link.label}
                    className={`pl-4 py-2 flex items-center gap-2 rounded-md ${
                      isActive
                        ? "bg-primary text-white hover:bg-primary hover:text-white"
                        : "hover:bg-violet-100"
                    }`}
                  >
                    {<link.icon />} <span>{link.label}</span>
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
