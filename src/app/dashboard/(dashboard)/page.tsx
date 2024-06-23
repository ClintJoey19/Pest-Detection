import LineChart from "@/components/charts/LineChart";
import ImageLayout from "@/components/dashboard/images/ImageLayout";
import { Button } from "@/components/ui/button";
import { getOutputs, getOutputsCount } from "@/lib/actions/output.action";
import { getPredictionsCount } from "@/lib/actions/prediction.action";
import { Bug, Image } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async () => {
  const outputCounts = await getOutputsCount();
  const predictionCounts = await getPredictionsCount();
  const outputs = await getOutputs(4);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="header">Dashboard</h2>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white flex justify-between gap-4 border border-slate-300 p-4 rounded-xl">
            <div className="w-14 h-14 bg-purple-200 flex justify-center items-center rounded-full">
              <Image className="h-8 w-8 text-primary" />
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="font-semibold">Output Images</p>
              <span className="text-2xl text-primary font-semibold">
                {outputCounts || 0}
              </span>
            </div>
          </div>
          <div className="bg-white flex justify-between border border-slate-300 p-4 rounded-xl">
            <div className="w-14 h-14 bg-purple-200 flex justify-center items-center rounded-full">
              <Bug className="h-8 w-8 text-primary" />
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="font-semibold">Pest Detected</p>
              <span className="text-2xl text-primary font-semibold">
                {predictionCounts || 0}
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recent Images</h3>
              <Link
                href="/dashboard/images"
                className="md:hidden text-primary hover:underline transition-all"
              >
                More
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {outputs?.map((output) => (
                <ImageLayout
                  key={output.id}
                  id={output.id}
                  image={output.image}
                />
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
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Pest Analytics</h3>
          <div className="w-full flex max-md:flex-col gap-4">
            <div className="w-full bg-white border border-slate-300 p-4 rounded-xl">
              <LineChart />
            </div>
            <div className="bg-white border border-slate-300 p-4 rounded-xl">
              <h3 className="mb-4">Controls</h3>
              <div className="flex flex-col gap-4">
                <p>Month</p>
                <p>Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
