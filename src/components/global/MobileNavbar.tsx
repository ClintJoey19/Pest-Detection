"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-2">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <SheetClose key={label} asChild>
                <Link
                  href={href}
                  className={`text-lg font-semibold hover:text-primary transition ${
                    isActive && "text-primary"
                  }`}
                >
                  {label}
                </Link>
              </SheetClose>
            );
          })}
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
