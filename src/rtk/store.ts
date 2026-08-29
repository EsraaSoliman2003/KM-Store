// store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import homeReducer from "./slices/homeSlice";
import sidebarReducer from "./slices/sidebarSlice";
import profileReducer from "./slices/profileSlice";
import categoriesReducer from "./slices/categoriesSlice";
import bannersReducer from "./slices/bannersSlice";
import addressReducer from "./slices/addressSlice";
import productsReducer from "./slices/productsSlice";
import brandsReducer from "./slices/brandsSlice";
import wishlistReducer from "./slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    sidebar: sidebarReducer,
    profile: profileReducer,
    categories: categoriesReducer,
    banners: bannersReducer,
    address: addressReducer,
    products: productsReducer,
    brands: brandsReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
