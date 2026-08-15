import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  openSidebar: boolean;
};

const initialState: initialStateType = {
  openSidebar: false,
};

const uiManagementSlice = createSlice({
  name: "uiManagement",
  initialState,
  reducers: {
    setIsOpenSidebar: (state, action: PayloadAction<boolean>) => {
      state.openSidebar = action.payload;
    },
  },
});

export const { setIsOpenSidebar } = uiManagementSlice.actions;

export default uiManagementSlice.reducer;
