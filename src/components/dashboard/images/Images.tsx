import { getOutputs } from "@/lib/actions/output.action";
import React from "react";
import ImageLayout from "./ImageLayout";

const Images = async () => {
  const outputs = await getOutputs();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {outputs?.map((output) => (
        <ImageLayout key={output.id} id={output.id} image={output.image} />
      ))}
    </div>
  );
};

export default Images;
