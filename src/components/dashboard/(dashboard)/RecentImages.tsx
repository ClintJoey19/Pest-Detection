import { getOutputs } from "@/lib/actions/output.action";
import React from "react";
import ImageLayout from "../images/ImageLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RecentImages = async () => {
  const outputs = await getOutputs(4);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {outputs?.map((output) => (
        <ImageLayout key={output.id} id={output.id} image={output.image} />
      ))}
      <div className="max-md:hidden h-[250px] bg-white flex justify-center items-center border border-slate-300 rounded-xl hover:shadow-lg">
        <div>
          <p className="font-semibold mb-2">View all</p>
          <Button size="sm" asChild>
            <Link href="/dashboard/images">More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecentImages;
