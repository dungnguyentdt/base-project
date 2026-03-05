"use client";
import { CookiesStorageKeys } from "@/constants/keys";
import { ROUTERS } from "@/constants/routers";
import { Link } from "@/libs/i18n/navigation";
import { useMutateVerify2FA } from "@/services/auth/hooks";
import { setCookie } from "@/utils/cookies";
import { Button, Form, Input } from "antd";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

interface VerifyStepProps {
  onSuccess?: () => void;
  type?: "setup" | "verify";
  validate2FaKey?: string;
}
export function VerifyStep({ onSuccess, type, validate2FaKey }: VerifyStepProps) {
  const [form] = Form.useForm();
  const { mutate: verify2FA, isPending } = useMutateVerify2FA();
  const [errorMessage, setErrorMessage] = useState("");
  const otpRef = useRef<any>(null);
  const t = useTranslations("Setup2FA");

  const onVerify2FA = async (values: { code: string }) => {
    if (!validate2FaKey) return;
    setErrorMessage("");
    const verifyData = {
      code: values.code,
      validate2FaKey: validate2FaKey,
    };
    verify2FA(verifyData, {
      onSuccess: async (res) => {
        const accessToken = res.data.accessToken;
        setCookie(CookiesStorageKeys.ACCESS_TOKEN, accessToken, {
          secure: true,
          sameSite: "strict",
          path: "/",
        });
        onSuccess?.();
      },
      onError: () => {
        setErrorMessage(t("verificationFailed"));
        form.setFieldsValue({ code: "" });
        setTimeout(() => {
          otpRef.current?.focus();
        }, 100);
      },
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {type === "verify" && (
        <>
          <p className="relative pt-6 pb-10 text-center text-2xl font-bold uppercase">{t("title")}</p>
          <p className="pb-4 text-sm text-gray-600">{t("description")}</p>
        </>
      )}

      {errorMessage && (
        <div className="rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-600">{errorMessage}</div>
      )}
      <Form
        form={form}
        onFinish={onVerify2FA}
        disabled={isPending}
        className="space-y-4"
        layout="vertical"
      >
        <div className="flex w-full justify-center">
          <Form.Item
            name="code"
            label=""
            rules={[
              { required: true, message: t("codeRequired") },
              { len: 6, message: t("codeLength") },
              { pattern: /^\d{6}$/, message: t("codeNumeric") },
            ]}
          >
            <Input.OTP
              ref={otpRef}
              length={6}
              formatter={(str) => str.replace(/\D/g, "")}
              size="large"
              className="!text-center"
              autoFocus
              onChange={(o) => {
                if (o.length === 6) {
                  Promise.resolve().then(() => form.submit());
                }
              }}
            />
          </Form.Item>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          className="w-full rounded-sm"
          loading={isPending}
        >
          {type === "setup" && <span className="font-bold uppercase">{isPending ? t("settingUp") : t("enable")}</span>}
          {type === "verify" && <span className="font-bold uppercase">{isPending ? t("verifying") : t("verify")}</span>}
        </Button>
      </Form>
      <Link
        href={ROUTERS.AUTH.LOGIN}
        className="text-primary text-purple z-50 pt-2 font-bold hover:underline"
      >
        {t("loginWithAnotherAccount")}
      </Link>
    </div>
  );
}
