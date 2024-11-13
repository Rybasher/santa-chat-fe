"use client";
import { useState, useRef, useEffect } from "react";
import { useSocket } from "../../../hooks/useSocket";
import { useParams } from "next/navigation";
import { useActions } from "../../../hooks/useActions";

export default function ChatInput() {
  const { addMessage } = useActions();
  const [message, setMessage] = useState("");
  const params = useParams();
  const sessionId = params?.sessionId;
  const { sendMessage } = useSocket(sessionId as string);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const MAX_HEIGHT = 150;

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
      addMessage({ sender: "user", content: message });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        e.preventDefault();
        setMessage((prev) => prev + "\n");
      } else {
        e.preventDefault();
        handleSendMessage();
      }
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, MAX_HEIGHT)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  return (
    <div className="sticky bottom-0 border-t p-4 bg-white w-full mt-7">
      <div className="flex items-center">
        <textarea
          ref={textareaRef}
          placeholder="Ask Santa anything..."
          className="flex-grow border border-gray-300 rounded-lg p-2 outline-none text-black resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          style={{
            overflowY: message.length > 0 ? "auto" : "hidden",
            maxHeight: `${MAX_HEIGHT}px`,
          }}
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
