import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  openSidebar: boolean;
  themeMode: "dark" | "light";
};

type theme = "light" | "dark";

const getInitialTheme = (): theme => {
  const theme = localStorage.getItem("theme");
  return (theme as theme) || "light";
};

const initialState: initialStateType = {
  openSidebar: false,
  themeMode: getInitialTheme(),
};

const uiManagementSlice = createSlice({
  name: "uiManagement",
  initialState,
  reducers: {
    setIsOpenSidebar: (state, action: PayloadAction<boolean>) => {
      state.openSidebar = action.payload;
    },
    toggleTheme: (state) => {
      const theme = state.themeMode === "dark" ? "light" : "dark";
      state.themeMode = theme;
      localStorage.setItem("theme", theme);
    },
  },
});

export const { setIsOpenSidebar, toggleTheme } = uiManagementSlice.actions;

export default uiManagementSlice.reducer;
