import ImageLayout from "@/components/dashboard/images/ImageLayout";
import { getOutputs } from "@/lib/actions/output.action";
import React from "react";

const page = async () => {
  const outputs = await getOutputs();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="header">Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {outputs?.map((output) => (
          <ImageLayout key={output.id} id={output.id} image={output.image} />
        ))}
      </div>
    </section>
  );
};

export default page;
