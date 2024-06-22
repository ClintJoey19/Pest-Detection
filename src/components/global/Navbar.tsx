import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";
import UserAuth from "../auth/UserAuth";

const Navbar = () => {
  return (
    <section className="h-[8vh] w-full px-4 flex items-center justify-between border-b border-slate-300 fixed top-0 right-0 bg-white z-50">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="logo" height={35} width={35} />
        <p className="text-lg font-bold">
          PestScope <span className="text-primary">AI</span>
        </p>
      </div>
      <div className="">
        <Navlinks />
      </div>
      <div className="h-full flex items-center gap-4">
        <UserAuth />
      </div>
    </section>
  );
};

export default Navbar;
