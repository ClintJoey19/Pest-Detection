import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";
import UserAuth from "../auth/UserAuth";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <section className="h-[8vh] w-full px-2 md:px-4 flex items-center justify-between border-b border-slate-300 fixed top-0 right-0 bg-white z-50">
      <Logo />
      <div className="">
        <Navlinks />
      </div>
      <div className="h-full flex items-center">
        <UserAuth />
      </div>
    </section>
  );
};

export default Navbar;
