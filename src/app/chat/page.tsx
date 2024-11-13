"use client"
import { EmptyChat } from "@/components/Chat/EmptyChat";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Loader } from "@/components/Loader/Loader";

export default function ChatPage() {
  const { loading } = useSelector((state: RootState) => state.chat);
  return (
    <div className="flex flex-col h-screen items-center justify-between bg-gray-100">
      {loading ? (<Loader/>) : (<EmptyChat/>)}
    </div>
  );
}
