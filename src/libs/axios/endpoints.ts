export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    VERIFY_2FA: "/auth/verify-2fa",
    REGISTER_VALIDATE: "/reg/validate",
    REGISTER: "/reg/register",
    REGISTER_COMPLETE: "/reg/complete",
    REFRESH_TOKEN: "/auth/refresh-token",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    PROFILE: "/auth/profile",
  },
  USER: {
    PROFILE: "users/profile",
    BANK_ACCOUNTS: "users/bank-accounts",
    SETTINGS: "/users/settings",
    CHANGE_PASSWORD: "/users/change-password",
    AVATAR: "/files/avatar",
  },
  PORTFOLIO: {
    OVERVIEW: "portfolio/overview",
  },
  WALLET: {
    HOLDINGS: "wallet/holdings",
    BALANCE: "wallet/balance",
    FIAT_DEPOSIT_INIT: "/fiat/deposit/init",
    FIAT_DEPOSIT_CONFIRM: "/fiat/deposit/confirm",
    FIAT_TRANSACTION_HISTORY: "/fiat/transaction/history",
    FIAT_CURRENCY: "/fiat/currency",
    WITHDRAW_INIT: "fiat/withdraw/init",
    WITHDRAW_CONFIRM: "/fiat/withdraw/confirm",
  },
  FIAT: {
    FIAT_BALANCE: "fiat/balance",
  },
  NOTIFICATIONS: {
    ALL_NOTIFICATIONS: "notifications",
    READ_NOTIFICATION: "notifications/read",
  },
} as const;
