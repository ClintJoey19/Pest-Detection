import { socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="flex gap-2">
      {socials.map(({ label, image, href }) => (
        <Link href={href} key={label} target="_blank">
          <Image src={image} alt={label} height={30} width={30} />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
