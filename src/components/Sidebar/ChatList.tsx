"use client"
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/store/store";
import { fetchChats } from "@/store/chatSlice";
import ChatListItem from "@/components/Sidebar/ChatListItem";
import {IChat} from "@/types/chat.interface";
import {ThunkDispatch} from "@reduxjs/toolkit";


export default function ChatList() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { chats, error } = useSelector((state: RootState) => state.chat);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <div className="space-y-4">
      <div>
        <div className="space-y-2 mt-2">
        {chats.map((chat: IChat, index) => (
          <div key={index}>
            <ChatListItem title={chat.id}/>

          </div>
        ))}
          {error && (<p>{error}</p>)}
        </div>
      </div>
    </div>
  );
}
