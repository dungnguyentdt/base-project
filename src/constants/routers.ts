export const ROUTERS = {
  HOME: "/",

  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    VERIFY_EMAIL: "/verify-email",
    VERIFY_2FA: "/verify-2fa",
  },

  DASHBOARD: {
    INDEX: "/dashboard",
    PROFILE: "/dashboard/profile",
    SETTINGS: "/dashboard/settings",
  },
} as const;
