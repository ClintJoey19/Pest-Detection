import OutputDetails from "@/components/dashboard/images/[id]/OutputDetails";
import { getOutput } from "@/lib/actions/output.action";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  const output = await getOutput(params.id);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-2">
        <h2 className="header truncate">
          <Link href={"/dashboard/images"}>Images</Link>{" "}
          <ChevronRight className="h-6 w-6 text-primary inline-block" />{" "}
          <span className="font-normal text-slate-500">{params.id}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        <div className="w-full">
          <div className="relative w-full h-[350px]">
            {output && (
              <Image
                src={output.image}
                alt="output-image"
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div>
          <div className="bg-white flex flex-col gap-2 p-4 border border-slate-300 rounded-xl">
            <h3 className="font-semibold">Details</h3>
            {output && (
              <OutputDetails
                id={params.id}
                time={output.time}
                predictions={output.predictions}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
