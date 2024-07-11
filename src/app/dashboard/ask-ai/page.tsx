import ChatBox from "@/components/dashboard/ask-ai/ChatBox";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <section className="h-[87vh] flex flex-col gap-4">
      <h2 className="header flex items-center gap-2">
        Ask AI <Sparkles className="w-6 h-6 text-primary" />
        <Badge>Beta</Badge>
      </h2>
      <ChatBox />
    </section>
  );
};

export default page;
