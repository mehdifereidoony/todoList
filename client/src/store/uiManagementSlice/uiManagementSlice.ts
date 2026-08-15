import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  openSidebar: boolean;
  themeMode: "dark" | "light";
};

const initialState: initialStateType = {
  openSidebar: false,
  themeMode: "light",
};

const uiManagementSlice = createSlice({
  name: "uiManagement",
  initialState,
  reducers: {
    setIsOpenSidebar: (state, action: PayloadAction<boolean>) => {
      state.openSidebar = action.payload;
    },
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
  },
});

export const { setIsOpenSidebar, toggleTheme } = uiManagementSlice.actions;

export default uiManagementSlice.reducer;
