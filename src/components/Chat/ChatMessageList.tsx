// components/Chat/ChatMessagesList.tsx
"use client"
import ChatMessage from "./ChatMessage";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

export default function ChatMessagesList() {
  const {messages, santaMessage, messageGenerating} = useSelector((state: RootState) => state.chat);

  return (
    <div className="flex-grow overflow-y-auto h-full mb-24 p-4 bg-gray-100 max-w-screen-lg w-full">
      {messages.map((message, index) => (
        <ChatMessage key={index} content={message.content} sender={message.sender}/>
      ))}
      {messageGenerating && (
        <ChatMessage content={santaMessage} sender={"system"}/>
      )}

    </div>
  );
}
