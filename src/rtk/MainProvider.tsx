"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { initializeAuth } from "./slices/authSlice";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  lang: string;
  token: string | null;
  role: number | null;
}

export default function MainProvider({
  children,
  token,
  role
}: Props) {

  useEffect(() => {
    store.dispatch(
      initializeAuth({
        token,
        role,
      })
    );
  }, [token, role]);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}