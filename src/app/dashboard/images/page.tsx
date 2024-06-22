import { getOutputs } from "@/lib/actions/output.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const outputs = await getOutputs();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="header">Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {outputs?.map((output) => (
          <Link
            key={output.id}
            href={`/dashboard/images/${output.id}`}
            className="h-[250px] rounded-xl overflow-hidden border-4 border-transparent hover:border-primary hover:shadow-lg transition relative"
          >
            <Image
              src={output.image}
              alt="output-image"
              fill
              className="object-cover object-center hover:scale-105 transition"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
