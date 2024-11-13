import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import {useActions} from "./useActions";

const SOCKET_URL = process.env.NEXT_PUBLIC_API_URL;

export const useSocket = (sessionId: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const {addMessage, clearSantaMessage, setMessageGenerating, setSantaMessage } = useActions();

  useEffect(() => {
    let accumulatedMessage = "";
    if (!sessionId) return;

    const socketInstance = io(SOCKET_URL);
    setSocket(socketInstance);
    socketInstance.on('connect', () => {
    })

    socketInstance.on("santa-response-start", () => {
      accumulatedMessage = "";
      setMessageGenerating(true);
      clearSantaMessage();
    });

    socketInstance.on("chatResponse", (data) => {
      if (data) {
        accumulatedMessage += data;
        setSantaMessage(data);
      }
    });

    socketInstance.on("santa-response-end", () => {
      setMessageGenerating(false);
      addMessage({ sender: "system", content: accumulatedMessage });
      accumulatedMessage = "";
      clearSantaMessage();
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [sessionId]);

  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit("sendMessage", { sessionId, message });
    }
  };

  return { sendMessage };
};
