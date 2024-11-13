import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isSidebarActive: boolean;
}

const initialState: SidebarState = {
  isSidebarActive: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarActive = !state.isSidebarActive;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
export const SidebarActions = sidebarSlice.actions;
