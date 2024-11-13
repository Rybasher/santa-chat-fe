import { EmptyChat } from "@/components/Chat/EmptyChat";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-between bg-gray-100">
      <EmptyChat/>
    </div>
  );
}
