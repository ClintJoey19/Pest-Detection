import React from "react";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <section className="bg-white fixed top-[8vh] left-0 h-[92vh] w-[250px] p-2 border-r border-slate max-md:hidden">
      <SidebarLinks />
    </section>
  );
};

export default Sidebar;
