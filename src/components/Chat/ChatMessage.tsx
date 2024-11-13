import Image from "next/image";

export default function ChatMessage({ content, sender }: { content: string; sender: string }) {
  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"} items-center space-x-2`}>
      {sender === "system" && (
        <div className="rounded-full border-gray-300 border-2 p-3">
          <Image
            src="/santa.png"
            alt="santa"
            width={30}
            height={40}
            priority
          />
        </div>

      )}
      <div className={`p-3 rounded-lg max-w-xs ${sender === "user" ? "bg-gray-200" : "bg-red-100"} text-gray-800`}>
        {content}
      </div>
    </div>
  );
}
