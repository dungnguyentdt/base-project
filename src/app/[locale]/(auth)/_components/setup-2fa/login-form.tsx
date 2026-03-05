"use client";

import { InputPasswordField } from "@/components/ui/input/input-password";
import { InputTextField } from "@/components/ui/input/input-text";
import { ROUTERS } from "@/constants/routers";
import { Link, useRouter } from "@/libs/i18n/navigation";
import { useMutationLogin } from "@/services/auth/hooks";
import { useAppDispatch } from "@/store";
import { clearUserInfo, updateUserInfo } from "@/store/slice/user.slice";
import { encodeQueryParam } from "@/utils/query-param";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Form } from "antd";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const createLoginSchema = (t: any) =>
  z.object({
    email: z.string().email({ message: t("email.required") }),
    password: z.string().nonempty({ message: t("password.required") }),
    turnstile: z.string().optional(),
  });

export function LoginForm() {
  const [form] = Form.useForm();
  const t = useTranslations("AuthPage");
  const tValidate = useTranslations("Validation");
  const schema = createLoginSchema(tValidate);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | null>(null);
  const { mutate: login, isPending: isLogin } = useMutationLogin();
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      turnstile: "",
    },
  });

  useEffect(() => {
    dispatch(clearUserInfo());
    queryClient.clear();
  }, [dispatch]);

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setError(null);
    const { email, password } = data;
    login(
      { login: email, password },
      {
        onSuccess: (data) => {
          const provisioningUri = data.data.provisioningUri ?? "";
          const encodedProvisioning = provisioningUri ? encodeQueryParam(provisioningUri) : "";
          const verifyUrl = encodedProvisioning
            ? `${ROUTERS.AUTH.VERIFY_2FA}?p=${encodeURIComponent(encodedProvisioning)}`
            : ROUTERS.AUTH.VERIFY_2FA;
          router.push(verifyUrl);
          dispatch(updateUserInfo({ validate2FaKey: data.data.validate2FaKey }));
        },
        onError: () => {
          setError(t("loginFailed"));
          // Reset defaultValues to the failed data so isDirty becomes false.
          // The user must change at least one field before they can retry.
          methods.reset(data, { keepValues: true });
        },
      },
    );
  };

  return (
    <div className="space-y-4">
      <p className="relative pt-6 pb-10 text-center text-2xl font-bold uppercase">{t("login")}</p>

      <div className="h-10">
        {error && <div className="border-error text-error rounded-md border bg-white p-3 text-sm">{error}</div>}
      </div>

      <FormProvider {...methods}>
        <Form
          form={form}
          onFinish={methods.handleSubmit(onSubmit)}
          disabled={isLogin}
          layout="vertical"
        >
          <div className="!space-y-6">
            <InputTextField
              name="email"
              label={t("email")}
              placeholder={t("emailPlaceholder")}
              required
              autoFocus
            />

            <InputPasswordField
              name="password"
              label={t("password")}
              placeholder={t("passwordPlaceholder")}
              required
            />

            <Button
              type="primary"
              className="!mt-8 w-full rounded-sm"
              disabled={isLogin || !methods.formState.isDirty}
              loading={isLogin}
              htmlType="submit"
            >
              <span className="font-bold uppercase">{t("login")}</span>
            </Button>
          </div>
        </Form>
      </FormProvider>
      <div className="mt-4 flex flex-col items-center justify-center">
        <Link
          href={ROUTERS.AUTH.REGISTER}
          className="font-bold hover:underline"
        >
          {t("register")}
        </Link>
        <Link
          href={ROUTERS.AUTH.FORGOT_PASSWORD}
          className="font-bold hover:underline"
        >
          {t("forgotPassword")}
        </Link>
      </div>
    </div>
  );
}
