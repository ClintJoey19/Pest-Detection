import { LucideIcon } from "lucide-react";
import React from "react";

interface SamplePromptProps {
  Icon: LucideIcon;
  prompt: string;
  handleAppend: (value: string) => void;
}

const SamplePrompt = ({ Icon, prompt, handleAppend }: SamplePromptProps) => {
  return (
    <div
      className="h-[150px] md:h-[200px] flex flex-col justify-between gap-4 rounded-xl bg-white border border-slate-300 p-4 cursor-pointer"
      onClick={() => handleAppend(prompt)}
    >
      <p className="text-justify max-md:text-sm">{prompt}</p>
      <div className="flex justify-end">
        <Icon />
      </div>
    </div>
  );
};

export default SamplePrompt;
