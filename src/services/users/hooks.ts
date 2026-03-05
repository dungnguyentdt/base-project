import { API_ENDPOINTS } from "@/libs/axios/endpoints";
import { ApiResponse } from "@/libs/axios/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserProfile, UserSettings, ValueChangePassword } from "./types";
import { apiClient } from "../api-client";

const usersService = {
  profile() {
    const url = "/users/user-info";
    return apiClient.get<ApiResponse<UserProfile>>(url);
  },
  uploadAvatar(file: File) {
    const url = API_ENDPOINTS.USER.AVATAR;
    const formData = new FormData();
    formData.append("file", file);
    return apiClient.post<ApiResponse<{ avatarUrl: string }>>(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateSetting(data: Partial<UserSettings>) {
    const url = API_ENDPOINTS.USER.SETTINGS;
    return apiClient.post<ApiResponse<any>>(url, data);
  },
  updatePassword(data: ValueChangePassword) {
    const url = API_ENDPOINTS.USER.CHANGE_PASSWORD;
    return apiClient.post<ApiResponse<any>>(url, data);
  },
};

export const useQueryUserProfile = (disabled = false) => {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: () => usersService.profile().then((res) => res.data),
    enabled: !disabled,
  });
};

export const useMutationUploadAvatar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (file: File) => usersService.uploadAvatar(file).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    },
  });
};

export const useMutationUpdateUserSettings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<UserSettings>) => usersService.updateSetting(data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};

export const useMutationUpdatePassword = () => {
  return useMutation({
    mutationFn: (data: ValueChangePassword) => {
      return usersService.updatePassword(data).then((res) => res.data);
    },
  });
};
