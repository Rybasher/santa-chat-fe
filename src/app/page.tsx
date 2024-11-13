"use client"
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/chat/`);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>
            Kirill Leontiev's assignment
          </h1>
        <button className="hover:bg-santaColor p-3" onClick={handleOnClick}>Go to Chat</button>
      </main>

    </div>
  );
}
