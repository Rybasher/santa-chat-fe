"use client"
import ChatMessagesList from "../../../components/Chat/ChatMessageList";
import ChatInput from "../../../components/Chat/ChatInput";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getChatMessages } from "@/store/chatSlice";
import { useParams } from "next/navigation";

export default function ChatDetailsPage() {
  const params = useParams();
  const sessionId = params?.sessionId;
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  useEffect(() => {
    if (sessionId) {
      dispatch(getChatMessages(String(sessionId)))
    }
  }, [dispatch, sessionId]);
  return (
    <div className="flex flex-col h-screen items-center justify-between bg-gray-100">
      <ChatMessagesList />
      <ChatInput />
    </div>
  );
}
