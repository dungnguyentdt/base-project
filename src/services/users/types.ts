export type TypeLangApi = "en_US" | "vi_VN";
export type TypeTimezone = "Asia/Ho_Chi_Minh";
export interface UserProfile {
  issuerName: string | null;
  partnerName: string;
  phone: string;
  email: string;
  status: string;
  isActive: boolean;
  transactionStatus: string;
  avatarUrl: string | null;
  walletAddresses: WalletAddressDetail[];
  lang: TypeLangApi;
}

export interface BankInfo {
  id: number;
  bankName: string;
  accNumber: string;
  sanitizedAccNumber: string;
  accHolderName: string;
  currency: string;
  sequence: number | null;
  writeDate: string;
}

export interface WalletAddressDetail {
  address: string;
  network: string;
}

export interface UserSettings {
  lang: TypeLangApi;
  timezone: TypeTimezone;
  currencyId: number;
}

export interface ValueChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword?: string;
  otp: string;
}
