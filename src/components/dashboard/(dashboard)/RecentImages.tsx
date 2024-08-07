import { getOutputs } from "@/lib/actions/output.action";
import React from "react";
import ImageLayout from "../images/ImageLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Outputs } from "../images/Images";

const RecentImages = async () => {
  const outputs: Outputs | undefined = await getOutputs(1, 4);

  if (!outputs?.data || outputs.data.length === 0)
    return <div className="">No recent image saved.</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {outputs?.data?.map((output) => (
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
