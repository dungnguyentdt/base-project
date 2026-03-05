"use client";

import { CheckBoxField } from "@/components/ui/input/checkbox";
import { InputPasswordField } from "@/components/ui/input/input-password";
import { InputTextField } from "@/components/ui/input/input-text";
import { TurnstileField, TurnstileFieldRef } from "@/components/ui/input/turnstile";
import { SvgIcon } from "@/components/ui/icons/svg-icon";
import { passwordSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { App, Button, Form } from "antd";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { ModalConfirmRegister } from "./modal-confirm-register";
import { useSearchParams } from "next/navigation";
import { ROUTERS } from "@/constants/routers";
import { useRouter } from "@/libs/i18n/navigation";
import { useRegister, useRegisterValidate } from "@/services/auth/hooks";
import { RegisterParams } from "@/services/auth/types";

const createSchema = (t: any) =>
  z
    .object({
      email: z.string().email({ message: t("email.invalid") }),
      password: passwordSchema(t),
      confirmPassword: z.string().nonempty({ message: t("confirmPassword.required") }),
      fullName: z.string().min(1, { message: t("fullName.required") }),
      referralCode: z.string().optional(),
      turnstileToken: z.string().min(1, { message: t("turnstile.required") }),
      agreeFlag: z.boolean().refine((val) => val, {
        message: t("agreeTerms.required"),
      }),
    })
    .refine(
      (data) => {
        return data.password === data.confirmPassword;
      },
      {
        message: t("confirmPassword.match"),
        path: ["confirmPassword"],
      },
    );

export function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("AuthPage");
  const tValidate = useTranslations("Validation");
  const schema = createSchema(tValidate);
  const turnstileRef = useRef<TurnstileFieldRef>(null);
  const referralCodeParam = searchParams.get("referralCode") || "";

  const { modal } = App.useApp();
  const [form] = Form.useForm();
  const [isShowConfirmInfo, setIsShowConfirmInfo] = useState(false);
  const [validateKey, setValidateKey] = useState("");
  const { mutate: registerValidate, isPending } = useRegisterValidate();
  const { mutate: register } = useRegister();

  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      referralCode: referralCodeParam,
      turnstileToken: "",
      agreeFlag: false,
    },
  });

  const {
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = methods;
  const password = watch("password");
  const email = watch("email");
  const fullName = watch("fullName");
  const referralCode = watch("referralCode");
  const confirmPassword = watch("confirmPassword");
  useEffect(() => {
    trigger("confirmPassword");
  }, [trigger, password, confirmPassword]);

  // Password validation checks
  const passwordValidation = {
    minLength: password ? password.length >= 8 : false,
    hasUppercase: password ? /[A-Z]/.test(password) : false,
    hasNumber: password ? /\d/.test(password) : false,
  };

  const onSubmitValidate = async (data: z.infer<typeof schema>) => {
    const registerData: RegisterParams = {
      email: data.email,
      fullName: data.fullName,
      pwd: data.password,
      referralCode: data.referralCode,
      agreeFlag: data.agreeFlag,
      captcha: data.turnstileToken ?? "", // Use Cloudflare Turnstile token instead of hardcoded value
    };
    registerValidate(registerData, {
      onSuccess: (res) => {
        setIsShowConfirmInfo(true);
        const validateKey = res.data.data;
        setValidateKey(validateKey);
      },
      onError: (error: any) => {
        let errorDetails = [];

        if (error?.data.meta?.message) {
          errorDetails = error?.data.data;
        } else if (error?.message) {
          errorDetails = error.message;
        }

        modal.error({
          title: "Registration Failed",
          content: (
            <div className="space-y-3">
              {!!errorDetails?.length && (
                <>
                  {errorDetails.map((err: string, index: number) => (
                    <div key={index}>
                      <p className="text-xs whitespace-pre-line text-red-700">{err}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          ),
          okText: "OK",
          width: 480,
          centered: true,
          closable: true,
          cancelText: null,
          icon: null,
        });
      },
      onSettled: () => {
        turnstileRef.current?.resetTurnstile();
      },
    });
  };

  const handleRegister = () => {
    register(validateKey, {
      onSuccess: () => {
        modal.success({
          title: "",
          content: (
            <div className="space-y-3 px-2 pb-4">
              <p className="mb-8 text-center text-xl font-extrabold">{t("verifyYourEmail")}</p>
              <p className="mb-0">{t("checkInboxMessage")}</p>
              <a
                href={`https://mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="-pt-4 font-bold"
              >
                {email}
              </a>
              <p className="pt-3">{t("didNotReceiveEmail")} </p>
              <p className="mb-0">{t("contactSupportMessage")}</p>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="-pt-4 !underline"
              >
                {t("supportEmail")}
              </a>
            </div>
          ),
          okText: t("backToLogin"),
          onOk: () => {
            router.push(ROUTERS.AUTH.LOGIN);
          },
          width: 360,
          centered: true,
          icon: null,
        });
      },
    });
  };

  return (
    <div className="w-2xl space-y-4">
      <p className="relative z-10 text-2xl font-bold uppercase">{t("register")}</p>
      <FormProvider {...methods}>
        <Form
          form={form}
          onFinish={handleSubmit(onSubmitValidate)}
          className="space-y-2"
          disabled={isPending}
          scrollToFirstError={{
            behavior: "smooth",
            block: "center",
          }}
          layout="vertical"
        >
          <div>
            <InputTextField
              className="!px-5"
              name="email"
              label={t("email")}
              placeholder={t("emailPlaceholder")}
              required
              autoFocus
            />
            <InputTextField
              className="!px-5"
              name="fullName"
              label={t("fullName")}
              placeholder={t("fullNamePlaceholder")}
              required
            />
            <div>
              <InputPasswordField
                className="!px-5"
                name="password"
                label={t("password")}
                placeholder={t("passwordPlaceholder")}
                showError={false}
                required
              />

              {/* Dynamic password validation feedback */}
              {(password || errors.password) && (
                <div className="-mt-6 mb-2">
                  <PasswordFeedback
                    isValid={passwordValidation.minLength}
                    label={tValidate("password.minLength")}
                  />
                  <PasswordFeedback
                    isValid={passwordValidation.hasUppercase}
                    label={tValidate("password.uppercase")}
                  />
                  <PasswordFeedback
                    isValid={passwordValidation.hasNumber}
                    label={tValidate("password.numeric")}
                  />
                </div>
              )}
            </div>
            <InputPasswordField
              className="!px-5"
              name="confirmPassword"
              label={t("confirmPassword")}
              placeholder={t("confirmPasswordPlaceholder")}
              required
            />
            <InputTextField
              className="!px-5"
              name="referralCode"
              label={t("referralCode")}
              placeholder={t("referralCodePlaceholder")}
              disabled={!!referralCodeParam}
            />
            <div className="border-gray200 bg-gray50 max-h-48 overflow-scroll rounded-md border px-4 pt-4">
              <p className="text-gray800 mb-2 text-base font-semibold">{t("termsTitle")}</p>
              <div className="text-gray700 space-y-4 pb-4 text-sm">
                <div>
                  <p className="text-primary font-semibold">{t("termsOfService")}</p>
                  <p className="mt-1">{t("termsOfServiceContent")}</p>
                </div>
                <div>
                  <p className="text-primary font-semibold">{t("privacyPolicy")}</p>
                  <p className="mt-1">{t("privacyPolicyContent")}</p>
                </div>
              </div>
              <CheckBoxField
                name="agreeFlag"
                label=""
              >
                <span className="text-gray700 text-sm font-semibold">{t("agreeTerms")}</span>
              </CheckBoxField>
            </div>
            {/* Cloudflare Turnstile */}
            <div className="my-4">
              <TurnstileField
                name="turnstileToken"
                theme="light"
                className="flex justify-center"
                ref={turnstileRef}
              />
            </div>
            8
            <Button
              type="primary"
              className="mt-8 w-full"
              disabled={isPending}
              loading={isPending}
              onClick={form.submit}
            >
              <span className="font-bold uppercase">{t("register")}</span>
            </Button>
          </div>
        </Form>
      </FormProvider>
      <div className="mt-6 flex flex-col justify-center">
        <div className="text-md z-10 text-center">
          <span className="">{t("alreadyHaveAccount")} </span>
          <Link
            href="/login"
            className="!text-primary font-bold hover:underline"
          >
            {t("login")}
          </Link>
        </div>
        <div className="z-10 text-center">
          <Link
            href="/reset-password"
            className="!text-primary font-bold hover:underline"
          >
            {t("forgotPassword")}
          </Link>
        </div>
      </div>
      {isShowConfirmInfo && (
        <ModalConfirmRegister
          data={{
            email,
            fullName,
            referralCode: referralCode ?? "",
          }}
          isOpen={isShowConfirmInfo}
          setIsOpen={setIsShowConfirmInfo}
          onOk={handleRegister}
          onCancel={() => {
            setIsShowConfirmInfo(false);
            setValidateKey("");
          }}
        />
      )}
    </div>
  );
}

function PasswordFeedback({ isValid, label }: { isValid: boolean; label: string }) {
  return (
    <p className={`flex items-center text-sm ${isValid ? "text-primary" : "text-error"}`}>
      <SvgIcon
        src="/icons/tick.svg"
        size={16}
        className="mr-1"
      />
      {label}
    </p>
  );
}
