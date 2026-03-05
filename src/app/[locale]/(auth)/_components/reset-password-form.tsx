"use client";

import { InputPasswordField } from "@/components/ui/input/input-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form } from "antd";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "@/libs/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { passwordSchema } from "@/utils/validations";
import { useResetPassword } from "@/services/auth/hooks";
import { ResetPasswordData } from "@/services/auth/types";

export function ResetPasswordForm() {
  const t = useTranslations("AuthPage");
  const tValidate = useTranslations("Validation");
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetKey = searchParams.get("key");
  const { mutate: resetPassword } = useResetPassword();

  const createResetPasswordSchema = (t: any) =>
    z
      .object({
        password: passwordSchema(t),
        confirmPassword: z.string(),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: tValidate("confirmPassword.match"),
        path: ["confirmPassword"],
      });

  const schema = createResetPasswordSchema(tValidate);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, watch, trigger } = methods;
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  useEffect(() => {
    trigger("confirmPassword");
  }, [trigger, password, confirmPassword]);

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const resetBody: ResetPasswordData = {
      resetKey: resetKey ?? "",
      newPassword: data.password,
    };

    resetPassword(resetBody, {
      onSuccess: () => {
        setSuccess(t("passwordResetSuccess"));
        setTimeout(() => router.push("/login"), 2000);
        setIsLoading(false);
      },
      onError: (error: any) => {
        setError(error.messages.join(", ") || t("somethingWentWrong"));
        setIsLoading(false);
      },
    });
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <p className="relative pt-10 pb-6 text-2xl font-bold uppercase">{t("resetPassword")}</p>

      {error && <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600">{error}</div>}

      {success && (
        <div className="rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-600">{success}</div>
      )}

      <FormProvider {...methods}>
        <Form
          form={form}
          onFinish={handleSubmit(onSubmit)}
          disabled={isLoading}
          className="space-y-4"
          layout="vertical"
        >
          <InputPasswordField
            name="password"
            label={t("passwordPlaceholder")}
            placeholder={t("passwordPlaceholder")}
            required
            className="!px-5 !py-4"
            autoFocus
          />

          <InputPasswordField
            name="confirmPassword"
            label={t("confirmPassword")}
            placeholder={t("confirmPasswordPlaceholder")}
            required
            className="!px-5 !py-4"
          />

          <Button
            type="primary"
            className="mt-8 w-full rounded-sm"
            loading={isLoading}
            onClick={form.submit}
          >
            <span className="font-bold uppercase">{t("changePassword")}</span>
          </Button>
        </Form>
      </FormProvider>
    </div>
  );
}
