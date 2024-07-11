"use client";
import { useChat } from "ai/react";
import React from "react";
import NoChats from "../chats/NoChats";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pause, Send } from "lucide-react";
import ChatConversation from "./ChatConversation";

const ChatBox = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat();

  return (
    <div className="h-full w-full flex justify-center">
      <div className="w-[900px] min-w-[350px] h-full flex flex-col gap-4 relative">
        <div className="h-full w-full">
          {messages.length === 0 ? (
            <NoChats />
          ) : (
            <ChatConversation messages={messages} isLoading={isLoading} />
          )}
        </div>
        <div className="w-[900px] min-w-[350px] bg-slate-100 fixed bottom-0 py-4">
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center gap-2"
          >
            <Input
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
    </div>
  );
};

export default ChatBox;
