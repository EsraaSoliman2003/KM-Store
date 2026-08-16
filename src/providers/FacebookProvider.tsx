"use client";

import { useEffect } from "react";

export default function FacebookProvider() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const initializeFacebookSDK = () => {
      if (!window.FB) {
        return;
      }

      window.FB.init({
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID ?? "",
        cookie: true,
        xfbml: true,
        version: "v23.0",
      });

      console.log("Facebook SDK initialized");
    };

    if (window.facebookSDKReady) {
      return;
    }

    window.facebookSDKReady = new Promise<void>(
      (resolve, reject) => {
        const handleReady = () => {
          try {
            initializeFacebookSDK();
            resolve();
          } catch (error) {
            console.error(
              "Facebook SDK initialization failed:",
              error
            );
            reject(error);
          }
        };

        if (window.FB) {
          handleReady();
          return;
        }

        window.fbAsyncInit = handleReady;

        if (
          document.getElementById("facebook-jssdk")
        ) {
          return;
        }

        const script =
          document.createElement("script");

        script.id = "facebook-jssdk";
        script.src =
          "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";

        script.onerror = () => {
          reject(
            new Error(
              "Failed to load Facebook SDK"
            )
          );
        };

        document.body.appendChild(script);
      }
    );

    return () => {
      window.fbAsyncInit = undefined;
    };
  }, []);

  return null;
}