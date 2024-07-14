import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src={"/logo.svg"} alt="logo" height={35} width={35} />
      <p className="text-lg font-bold">
        PestScope <span className="text-primary">AI</span>
      </p>
    </Link>
  );
};

export default Logo;
