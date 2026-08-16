export {};

declare global {
  interface Window {
    fbAsyncInit?: () => void;

    facebookSDKReady?: Promise<void>;

    FB?: {
      init: (options: {
        appId: string;
        cookie?: boolean;
        xfbml?: boolean;
        version: string;
      }) => void;

      login: (
        callback: (response: {
          authResponse?: {
            accessToken: string;
            userID: string;
          };
          status: string;
        }) => void,
        options?: {
          scope?: string;
        }
      ) => void;

      api: (
        path: string,
        callback: (response: {
          id?: string;
          name?: string;
          email?: string;
          picture?: {
            data?: {
              url?: string;
            };
          };
          error?: unknown;
        }) => void
      ) => void;
    };
  }
}