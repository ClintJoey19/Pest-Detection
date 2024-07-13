"use client";
import { useChat } from "ai/react";
import NoChats from "../chats/NoChats";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import ChatConversation from "./ChatConversation";
import { useEffect } from "react";

const ChatBox = ({ prompt }: { prompt: string }) => {
  const {
    messages,
    input,
    append,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat();

  const handleAppend = (value: string) => {
    append({
      content: value,
      role: "user",
    });
  };

  useEffect(() => {
    if (prompt) handleAppend(prompt);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="h-[84%] max-w-[900px] w-full min-w-[350px] flex flex-col gap-4 overflow-y-auto">
        <div className="h-full w-full">
          {messages.length === 0 ? (
            <NoChats handleAppend={handleAppend} />
          ) : (
            <ChatConversation messages={messages} isLoading={isLoading} />
          )}
        </div>
      </div>
      <div className="w-full max-w-[900px] min-w-[350px] bg-slate-100 pt-4">
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center gap-2 relative"
        >
          <Input
            value={input}
            placeholder="Enter a prompt"
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <Button size="sm" type="submit" disabled={isLoading}>
            Send <Send className="h-4 w-4 ml-2" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
