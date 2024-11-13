"use client";
import { useState } from "react";
import { useSocket } from "../../../hooks/useSocket";
import { useParams } from "next/navigation";
import { useActions } from "../../../hooks/useActions";

export default function ChatInput() {
  const { addMessage } = useActions();

  const [message, setMessage] = useState("");
  const params = useParams();
  const sessionId = params?.sessionId;
  const { sendMessage } = useSocket(sessionId as string);

  const handleSendMessage = async () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
      addMessage({sender: "user", content: message})
    }
  }

  return (
    <div className="sticky bottom-0 border-t p-4 bg-white w-full mt-7">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Ask Santa anything..."
          className="flex-grow border border-gray-300 rounded-lg p-2 outline-none text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="ml-4 px-4 py-2 bg-santaColor text-white rounded-lg hover:bg-red-800"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
