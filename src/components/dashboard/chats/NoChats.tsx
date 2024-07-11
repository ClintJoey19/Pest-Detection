import { samplePrompts } from "@/constants";
import React from "react";
import SamplePrompt from "./SamplePrompt";
import { useUser } from "@clerk/nextjs";

const NoChats = () => {
  const { user } = useUser();

  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="">
        <h2 className="text-4xl md:text-6xl font-bold mb-2">
          Hello, <span className="text-primary">{user?.firstName}</span>
        </h2>
        <h3 className="text-4xl md:text-6xl text-slate-500 font-bold">
          How can I help you today?
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {samplePrompts.map((sample, i) => (
          <SamplePrompt key={i} Icon={sample.Icon} prompt={sample.prompt} />
        ))}
      </div>
    </div>
  );
};

export default NoChats;
