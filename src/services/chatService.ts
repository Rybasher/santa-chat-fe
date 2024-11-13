import {axiosService} from "./axios.service";
import { chatUrls } from "@/constants/urls/chatUrls";


export const chatService = {
  getChats: async () => {
    const sessionId = localStorage.getItem("sessionId");
    return await axiosService.get(chatUrls.getChats, {
      params: { sessionId },
    });

  },
  createChat: async () => {
    const sessionId = localStorage.getItem("sessionId");
    return await axiosService.post(chatUrls.createChat, null, {
      params: { sessionId },
    });
  },

  getChatMessagesById: async (id: string) => {
    return await axiosService.get(`${chatUrls.getChatMessagesById}${id}`);
  }
};
