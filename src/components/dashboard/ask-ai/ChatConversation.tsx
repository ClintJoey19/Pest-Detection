import React from "react";
import { Message } from "ai";
import { Bot } from "lucide-react";
import { Remark } from "react-remark";

type ChatConversationProps = {
  messages: Message[];
  isLoading: boolean;
};

const ChatConversation = ({ messages, isLoading }: ChatConversationProps) => {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((message, i) => {
        const { id, role, content } = message;
        return (
          <div
            key={id}
            className={`w-full flex gap-2 ${role === "user" && "justify-end"}`}
          >
            {role !== "user" && (
              <div
                className={`h-9 w-9 flex items-center bg-white rounded-full ${
                  isLoading && i === messages.length - 1 && "animate-bounce"
                }`}
              >
                <Bot className={`text-primary h-5 w-5 mx-auto`} />
              </div>
            )}
            <p
              className={`${
                role === "user"
                  ? "bg-primary text-white"
                  : "bg-white border border-slate-300"
              } max-w-[70%] md:max-w-[60%] whitespace-pre-wrap rounded-xl py-2 px-3`}
            >
              <Remark>{content}</Remark>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatConversation;
