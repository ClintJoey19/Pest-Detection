import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImageLayoutProps {
  id: string;
  image: string;
}

const ImageLayout = ({ id, image }: ImageLayoutProps) => {
  return (
    <Link
      key={id}
      href={`/dashboard/images/${id}`}
      className="h-[250px] rounded-xl overflow-hidden border-4 border-transparent hover:border-primary hover:shadow-lg transition relative"
    >
      <Image
        src={image}
        alt="output-image"
        fill
        className="object-cover object-center hover:scale-105 transition"
      />
    </Link>
  );
};

export default ImageLayout;
