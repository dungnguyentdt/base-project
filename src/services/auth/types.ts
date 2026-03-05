export interface LoginParams {
  login: string;
  password: string;
}
export interface LoginData {
  provisioningUri: string;
  validate2FaKey: string;
}

export interface UserProfile {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
}
export interface RefreshTokenData {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  name: string;
  email: string;
}

export interface RefreshTokenResponse {
  code: number;
  message: string;
  data: RefreshTokenData;
  timestamp: string;
  path: string;
}

export interface RegisterParams {
  email: string;
  fullName: string;
  pwd: string;
  referralCode?: string;
  agreeFlag: boolean;
  captcha: string;
}

export interface ResetPasswordData {
  resetKey?: string;
  newPassword?: string;
}

export interface UserProfile {
  id: number;
  accountId: string;
  name: string;
  email: string;
  phone: string | null;
  status: string;
  isKycCompleted: boolean;
  lastLoginTime: string;
  timeZone: string;
  avatarUrl: string | null;
  referralCode: string;
  minDeposit: number;
  maxDeposit: number;
  maxWithdraw: number;
  minWithdraw: number;
  levelName: string;
  dailyWithdrawLimit: number;
  withdrawalFee: number;
}
