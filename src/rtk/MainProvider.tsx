"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { initializeAuth } from "./slices/authSlice";
import { useEffect } from "react";
import { getProfile } from "./slices/profileSlice";

interface Props {
  children: React.ReactNode;
  lang: string;
  token: string | null;
}

export default function MainProvider({
  children,
  token,
}: Props) {

  useEffect(() => {
    const initialize = async () => {
      await store.dispatch(
        initializeAuth({
          token,
        })
      );

      // Get current profile from Redux
      const { profile, loading } = store.getState().profile;

      // Fetch profile only if it doesn't exist
      if (!profile && !loading && token) {
        store.dispatch(getProfile());
      }
    };

    initialize();
  }, [token]);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}