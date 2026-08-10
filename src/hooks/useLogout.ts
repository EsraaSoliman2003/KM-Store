"use client";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/rtk/hooks";
import { logoutUser } from "@/rtk/slices/authSlice";

export const useLogout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      await dispatch(logoutUser());
    } catch (error) {
      console.error("Logout API failed:", error);
    } finally {
      deleteCookie("token");
      router.replace("/login");
    }
  };

  return logout;
};