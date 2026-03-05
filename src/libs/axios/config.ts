import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
// Base API configuration
const API_CONFIG = {
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
} as const;

interface ConfigApiClient {
  url: string;
  getToken?: () => Promise<string | null> | string | null;
}

export function createApiInstance({ url, getToken, ...customConfig }: ConfigApiClient): AxiosInstance {
  const instance = axios.create({ ...API_CONFIG, baseURL: url, ...customConfig });
  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      // Only attach Authorization header when an explicit token getter is provided.
      // When the backend sets an httpOnly cookie, getToken is omitted and the
      // browser sends the cookie automatically via withCredentials.
      if (getToken) {
        const accessToken = await getToken();
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      }
      if (process.env.NEXT_PUBLIC_APP_ENV === "development") {
        console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`, {
          data: config.data,
          params: config.params,
        });
      }
      return config;
    },
    (error: any) => {
      console.error("❌ Request Error:", error);
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use((response: AxiosResponse) => {
    if (process.env.NEXT_PUBLIC_APP_ENV === "development") {
      console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, {
        status: response.status,
        data: response.data,
      });
    }
    return response;
  });
  return instance;
}
