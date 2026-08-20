import { configureStore } from "@reduxjs/toolkit";
import uiManagementSlice from "./uiManagementSlice/uiManagementSlice";

export const store = configureStore({
  reducer: {
    uiManagement: uiManagementSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
