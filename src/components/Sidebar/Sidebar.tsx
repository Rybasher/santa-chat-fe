"use client"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ChatList from "./ChatList";
import { useActions } from "../../../hooks/useActions";

export default function Sidebar() {
  const isSidebarActive = useSelector((state: RootState) => state.sidebar.isSidebarActive);
  const {toggleSidebar} = useActions();
  const setSidebarStatus = () => {
    toggleSidebar();
  }

  return (
    <aside className={`${isSidebarActive ? "w-80" : "w-0"} ${isSidebarActive ? "absolute p-4" : "relative p-0"} overflow-x-hidden sm:relative sm:w-64  h-full bg-santaColor text-white z-50 sm:p-4`}>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-lg font-bold mb-4">Explore</h2>
        <button
          className="sm:hidden bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800"
          onClick={setSidebarStatus}
        >
          Close
        </button>
      </div>
      <ChatList />
    </aside>
  );
}
