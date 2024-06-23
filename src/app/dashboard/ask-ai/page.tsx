import NoChats from "@/components/dashboard/chats/NoChats";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles } from "lucide-react";
import React from "react";

const page = () => {
  let chats;

  return (
    <section className="h-[87vh] flex flex-col gap-4">
      <h2 className="header flex items-center gap-2">
        Ask AI <Sparkles className="w-6 h-6 text-primary" />
        <Badge>Unavailable</Badge>
      </h2>
      <div className="h-full w-full flex justify-center">
        <div className="w-[900px] min-w-[350px] h-full flex flex-col gap-4">
          <div className="h-full w-full">
            {!chats ? <NoChats /> : <div>Messages</div>}
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
