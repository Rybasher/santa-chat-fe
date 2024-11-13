import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {chatService} from "@/services/chatService";
import {IChat} from "@/types/chat.interface";

interface ChatMessage {
  content: string;
  sender: string;
  createdAt?: string;
}
interface ChatState {
  chats: IChat[];
  loading: boolean;
  error: string | null;
  messages: ChatMessage[];
  messageGenerating: boolean;
  santaMessage: string;
  initialMessage: string | null;
}

const initialState: ChatState = {
  chats: [],
  loading: false,
  error: null,
  messages: [],
  messageGenerating: false,
  santaMessage: "",
  initialMessage: null,

};

export const fetchChats =
  createAsyncThunk("chat/fetchChats", async (_, thunkAPI) => {
  try {
    const response = await chatService.getChats();
    return response.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createChat =
  createAsyncThunk("chat/createChat", async (_, thunkAPI) => {
  try {
    const response = await chatService.createChat();
    return response.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getChatMessages =
  createAsyncThunk("chat/getChatMessages", async (id: string, thunkAPI) => {
    try {
      const response = await chatService.getChatMessagesById(id);
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });


const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<IChat[]>) => {
      state.chats = action.payload;
    },
    addChat: (state, action: PayloadAction<IChat>) => {
      state.chats.push(action.payload);
    },
    addMessage: (state, action: PayloadAction<any>) => {
      state.messages.push(action.payload)
    },
    setMessageGenerating: (state, action: PayloadAction<any>) => {
      state.messageGenerating = action.payload;
    },
    setSantaMessage: (state, action: PayloadAction<any>) => {
      state.santaMessage += action.payload;
    },
    clearSantaMessage: (state) => {
      state.santaMessage = "";
    },
    setInitialMessage: (state, action: PayloadAction<any>) => {
      state.initialMessage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state: ChatState) => {
        state.loading= true;
        state.error = null;
      })
      .addCase(fetchChats.rejected, (state: ChatState, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload?.message || "failed to fetch chats"
      })
      .addCase(fetchChats.fulfilled, (state: ChatState, action: PayloadAction<any>) => {
        state.chats = (action.payload);
        state.loading = false;
      })
    builder
      .addCase(createChat.pending, (state: ChatState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createChat.fulfilled, (state: ChatState, action: PayloadAction<any>) => {
        state.chats.push(action.payload);
        state.loading = false;
        localStorage.setItem('sessionId', action.payload.sessionId)
      })
      .addCase(createChat.rejected, (state: ChatState, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to create chat";
      });
    builder
      .addCase(getChatMessages.pending, (state: ChatState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChatMessages.fulfilled, (state: ChatState, action: PayloadAction<any>) => {
        state.messages = action.payload.messages;
        state.loading = false
        state.error = null;
      })
      .addCase(getChatMessages.rejected, (state: ChatState, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to get messages";
      });
  }
});

export const { setChats, addChat } = chatSlice.actions;
export default chatSlice.reducer;
export const ChatActions = chatSlice.actions;
