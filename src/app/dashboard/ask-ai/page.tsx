import ChatBox from "@/components/dashboard/ask-ai/ChatBox";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import React from "react";

type searchParams = {
  searchParams: {
    pests?: string;
  };
};

const page = ({ searchParams }: searchParams) => {
  const { pests } = searchParams;
  const prompt = pests
    ? `Give me information about ${pests} and tell me how to prevent them`
    : "";
  return (
    <section className="h-[87vh] flex flex-col gap-4">
      <h2 className="header flex items-center gap-2">
        Ask AI <Sparkles className="w-6 h-6 text-primary" />
        <Badge>Chat</Badge>
      </h2>
      <ChatBox prompt={prompt} />
    </section>
  );
};

export default page;
