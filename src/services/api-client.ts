import { CookiesStorageKeys } from "@/constants/keys";
import { createApiInstance } from "@/libs/axios/config";
import { ApiStatusCode } from "@/libs/axios/types";
import { getCookie } from "@/utils/cookies";
import { AxiosError } from "axios";

export const apiClient = createApiInstance({
  url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  getToken: async () => {
    const accessToken = getCookie(CookiesStorageKeys.ACCESS_TOKEN);
    return accessToken || null;
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error?.response?.status === ApiStatusCode.UNAUTHORIZED) {
      const localeMatch = window.location.pathname.match(/^\/(en|vi)/);
      const locale = localeMatch ? localeMatch[1] : "en";
      window.location.href = `/${locale}/login`;
    }
    const apiError = await formatApiError(error);
    // Log error in development
    if (process.env.NEXT_PUBLIC_APP_ENV === "development") {
      console.log(`❌ API Error: ${error.config?.method?.toUpperCase()} ${error.config?.url}`, {
        ...apiError,
      });
    }
    return Promise.reject(apiError);
  },
);

async function formatApiError(error: AxiosError) {
  const status = error.response?.status || 400;
  const data = error.response?.data as any;
  let messages: string[] = [];
  let codes: ApiStatusCode[] = [];

  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const languageMatch = url.match(/\/([a-z]{2})(?:\/|$)/i);
  const language = languageMatch ? languageMatch[1] : "en";
  const messagesTranslate = await import(`../../messages/${language}.json`);

  if (data?.meta?.length) {
    messages = data.meta.map((item: any) => {
      return messagesTranslate?.ApiErrors[item.code as ApiStatusCode] ?? item.code;
    });
    codes = data.meta.map((item: any) => item.code);
  }

  if (data?.meta?.code) {
    messages.push(messagesTranslate?.ApiErrors[data.meta.code as ApiStatusCode] ?? data.meta.code);
    codes.push(data.meta.code);
  }

  return {
    messages: messages,
    codes,
    status,
    data,
  };
}
