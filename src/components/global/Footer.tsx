import React from "react";
import Logo from "./Logo";
import FooterLinks from "./FooterLinks";
import Socials from "./Socials";

const Footer = () => {
  return (
    <section className="w-full">
      <footer className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="lg:max-w-[200px]">
            Detecting, Identifying, and Controlling Pests with AI.
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <FooterLinks />
        </div>
        <div className="flex flex-col items-center gap-2 sm:col-span-2 lg:col-span-1">
          <p className="text-lg font-bold">Share us on Socials</p>
          <Socials />
        </div>
      </footer>
      <div className="bg-primary w-full text-center text-white">
        <div className="container text-center text-sm">
          Copyrights &copy; {new Date().getFullYear()} PestScope AI. All rights
          reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
