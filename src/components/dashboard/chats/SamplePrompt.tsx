import { LucideIcon } from "lucide-react";
import React from "react";

interface SamplePromptProps {
  Icon: LucideIcon;
  prompt: string;
}

const SamplePrompt = ({ Icon, prompt }: SamplePromptProps) => {
  return (
    <div className="h-[150px] md:h-[200px] flex flex-col justify-between gap-4 rounded-xl bg-white border border-slate-300 p-4 cursor-pointer">
      <p className="text-justify max-md:text-sm">{prompt}</p>
      <div className="flex justify-end">
        <Icon />
      </div>
    </div>
  );
};

export default SamplePrompt;
