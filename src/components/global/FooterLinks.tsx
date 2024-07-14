import { footerLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  return (
    <>
      {footerLinks.map(({ title, links }) => (
        <div key={title}>
          <p className="font-medium mb-4">{title}</p>
          <ul className="flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-primary hover:underline transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterLinks;
