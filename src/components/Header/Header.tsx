"use client"
import {useActions} from "../../../hooks/useActions";
import {NewChatButton} from "@/components/Chat/NewChatButton";

export default function Header() {
  const {toggleSidebar} = useActions();
  const setSidebarStatus = () => {
    toggleSidebar();
  }
  return (
    <header className="flex justify-between sm:justify-end items-center p-4 bg-white border-b">
      <button
        className="sm:hidden bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800"
        onClick={setSidebarStatus}
      >
        Menu
      </button>
      <div className="flex justify-between items-center">
        <NewChatButton/>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center ml-4">
          <span className="text-sm text-gray-700">U</span>
        </div>
      </div>
    </header>
  );
}
