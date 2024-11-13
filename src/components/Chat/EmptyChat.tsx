import Image from "next/image";
import { NewChatButton } from "@/components/Chat/NewChatButton";

export const EmptyChat = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center mb-24 text-black">
      <Image
        src="/santa.png"
        alt="santa"
        width={30}
        height={40}
        priority
      />
      <h3 className="font-bold text-2xl">Chat with Santa Clause!</h3>
      <p className="text-gray-600 max-w-md text-center mt-4 mb-4">Ho-ho-ho! Welcome to Santa's Chat! Ask me anything about Christmas, holiday wishes, or winter magic!</p>
      <NewChatButton/>
    </div>
  )
}