// store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import sidebarReducer from "./slices/sidebarSlice";
import profileReducer from "./slices/profileSlice";
import categoriesReducer from "./slices/categoriesSlice";
import bannersReducer from "./slices/bannersSlice";
import addressReducer from "./slices/addressSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    profile: profileReducer,
    categories: categoriesReducer,
    banners: bannersReducer,
    address: addressReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
