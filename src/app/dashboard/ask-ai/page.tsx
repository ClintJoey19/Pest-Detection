import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <section className="h-[87vh] flex flex-col gap-4">
      <h2 className="header flex items-center gap-2">
        Ask AI <Sparkles className="w-6 h-6 text-primary" />
      </h2>
      <div className="h-full w-full flex justify-center">
        <div className="w-[800px] min-w-[350px] h-full flex flex-col gap-4">
          <div className="bg-white h-full w-full">
            <p className="m-auto">No Conversations.</p>
          </div>
          <div className="flex gap-2 items-center">
            <Input placeholder="Enter a prompt" />
            <Button size="sm">
              Send <Send className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
