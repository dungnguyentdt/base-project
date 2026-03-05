import { z } from "zod";

export const passwordSchema = (t: (key: string) => string) =>
  z
    .string()
    .nonempty({ message: t("password.required") })
    .min(8, { message: t("password.minLength") })
    .refine((password) => /[A-Z]/.test(password), {
      message: t("password.uppercase"),
    })
    .refine((password) => /\d/.test(password), {
      message: t("password.numeric"),
    });
