"use client"
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {createChat} from "@/store/chatSlice";
import {ThunkDispatch} from "@reduxjs/toolkit";
export const NewChatButton = () => {
  const router = useRouter();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { loading } = useSelector((state: RootState) => state.chat);

  const handleCreateChat = async () => {
    const resultAction = await dispatch(createChat());

    if (createChat.fulfilled.match(resultAction)) {
      const newChatSession: any = resultAction.payload;
      router.push(`/chat/${newChatSession.id}`);
    }
  };

  return (
    <button className="block bg-santaColor text-white px-4 py-2 rounded-lg hover:bg-red-800" onClick={handleCreateChat}
    disabled={loading}
    >
      {loading ? "Loading..." : "New Chat"}

    </button>
  )
}