// app/chat/layout.tsx

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-y-hidden relative">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
