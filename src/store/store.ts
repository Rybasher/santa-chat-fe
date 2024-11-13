import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import chatReducer from "./chatSlice"

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
