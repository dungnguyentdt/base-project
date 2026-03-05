import { toast, ToastOptions } from "react-toastify";

export function showToast(message: string, options?: ToastOptions) {
  toast(message, options);
}

export function showSuccessToast(message: string, options?: ToastOptions) {
  toast.success(message, options);
}

export function showErrorToast(message: string, options?: ToastOptions) {
  toast.error(message, options);
}
