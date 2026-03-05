import { useMutation } from "@tanstack/react-query";

import { API_ENDPOINTS } from "@/libs/axios/endpoints";
import { ApiResponse } from "@/libs/axios/types";
import { LoginData, LoginParams, RefreshTokenData, RegisterParams, ResetPasswordData } from "./types";
import { apiClient } from "../api-client";

const authService = {
  login(data: LoginParams) {
    const url = API_ENDPOINTS.AUTH.LOGIN;
    return apiClient.post<ApiResponse<LoginData>>(url, data);
  },
  logout() {
    const url = API_ENDPOINTS.AUTH.LOGOUT;
    return apiClient.post(url);
  },
  registerValidate(data: RegisterParams) {
    const url = API_ENDPOINTS.AUTH.REGISTER_VALIDATE;
    return apiClient.post<ApiResponse<any>>(url, data);
  },
  register(validateKey: string) {
    const url = API_ENDPOINTS.AUTH.REGISTER;
    const config = {
      headers: {
        validateKey: validateKey,
      },
    };
    return apiClient.post<ApiResponse<any>>(url, undefined, config);
  },
  registerComplete(registerKey: string) {
    const url = API_ENDPOINTS.AUTH.REGISTER_COMPLETE;
    return apiClient.get<ApiResponse<any>>(url, { params: { registerKey } });
  },
  verify2FA(data: { code: string; validate2FaKey: string }) {
    const url = API_ENDPOINTS.AUTH.VERIFY_2FA;
    return apiClient.post<ApiResponse<{ accessToken: string }>>(url, data);
  },
  refreshToken(token: string) {
    const data = {
      refreshToken: token,
    };
    const url = API_ENDPOINTS.AUTH.REFRESH_TOKEN;
    return apiClient.post<ApiResponse<RefreshTokenData>>(url, data);
  },
  forgotPassword(email: string) {
    const url = API_ENDPOINTS.AUTH.FORGOT_PASSWORD;
    return apiClient.post<ApiResponse<any>>(url, { email });
  },
  getUserProfile() {
    const url = API_ENDPOINTS.AUTH.PROFILE;
    return apiClient.get<ApiResponse<any>>(url);
  },
  resetPassword(data: ResetPasswordData) {
    const url = API_ENDPOINTS.AUTH.RESET_PASSWORD;
    return apiClient.post<ApiResponse<any>>(url, data);
  },
};

export function useMutationLogin() {
  return useMutation({
    mutationFn: (data: LoginParams) => authService.login(data).then((res) => res.data),
  });
}

export function useMutationLogout() {
  return useMutation({
    mutationFn: () => authService.logout(),
  });
}
export function useMutateVerify2FA() {
  return useMutation({
    mutationFn: (data: { code: string; validate2FaKey: string }) => authService.verify2FA(data).then((res) => res.data),
  });
}
export function useRegisterValidate() {
  return useMutation({
    mutationFn: (data: RegisterParams) => authService.registerValidate(data),
  });
}
export function useRegister() {
  return useMutation({
    mutationFn: (registerKey: string) => authService.register(registerKey),
  });
}
export function useRegisterComplete() {
  return useMutation({
    mutationFn: (registerKey: string) => authService.registerComplete(registerKey),
  });
}
export function useForgotPassword() {
  return useMutation({
    mutationFn: (email: string) => authService.forgotPassword(email),
  });
}
export function useResetPassword() {
  return useMutation({
    mutationFn: (data: ResetPasswordData) => authService.resetPassword(data),
  });
}
