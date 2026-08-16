"use client";

import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { useAppDispatch } from "@/rtk/hooks";
import { facebookLogin } from "@/rtk/slices/authSlice";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function FacebookButton() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleFacebookLogin = async () => {
    try {
      const ready =
        window.facebookSDKReady ?? Promise.resolve();

      await ready;

      const fb = window.FB;

      if (!fb) {
        console.error(
          "Facebook SDK is not available."
        );

        return;
      }

      fb.login(
        (response) => {
          if (!response.authResponse) {
            console.error(
              "Facebook login cancelled or failed."
            );

            return;
          }

          fb.api(
            "/me?fields=id,name,email,picture.type(large)",
            async (user) => {
              if (user.error) {
                console.error(
                  "Failed to get Facebook user:",
                  user.error
                );

                return;
              }

              try {
                const result = await dispatch(
                  facebookLogin({
                    facebook_id: user.id ?? "",
                    name: user.name ?? "",
                    email: user.email ?? "",
                    avatar:
                      user.picture?.data?.url ?? "",
                  })
                ).unwrap();

                // Store backend token
                const token = result.data.token;

                setCookie("token", token, {
                  maxAge: 60 * 60 * 24 * 7,
                  path: "/",
                });

                // Redirect after successful login
                router.replace("/");

              } catch (error) {
                console.error(
                  "Facebook backend login failed:",
                  error
                );
              }
            }
          );
        },
        {
          scope: "public_profile,email",
        }
      );
    } catch (error) {
      console.error(
        "Facebook SDK initialization failed:",
        error
      );
    }
  };

  return (
    <button
      type="button"
      aria-label="Facebook"
      onClick={handleFacebookLogin}
      className="flex h-12 w-12 items-center justify-center rounded-lg border border-(--border-dark) transition hover:border-[#259DF3] hover:bg-gray-100"
    >
      <FaFacebookF
        size={20}
        className="text-[#1877F2]"
      />
    </button>
  );
}