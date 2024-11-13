// components/Sidebar/ChatListItem.tsx

import {useRouter} from "next/navigation";
import {useActions} from "../../../hooks/useActions";

export default function ChatListItem({ title }: { title: string }) {
  const router = useRouter();
  const { setInitialMessage } = useActions();


  const handleOnClick = () => {
    router.push(`/chat/${title}`);
    setInitialMessage(null);
  }
  return (
    <div className="cursor-pointer p-2 rounded-md hover:bg-red-600 text-sm" onClick={handleOnClick}>
      {title}
    </div>
  );
}
