"use client";

import { InputTextField } from "@/components/ui/input/input-text";
import { Link } from "@/libs/i18n/navigation";
import { ROUTERS } from "@/constants/routers";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form } from "antd";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useForgotPassword } from "@/services/auth/hooks";

const createForgotPasswordSchema = (t: any) =>
  z.object({
    email: z.string().email({ message: t("email.required") }),
  });

export default function ForgotPasswordForm() {
  const t = useTranslations("AuthPage");
  const tValidate = useTranslations("Validation");
  const schema = createForgotPasswordSchema(tValidate);
  const { mutate: forgotPassword } = useForgotPassword();

  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    forgotPassword(data.email, {
      onSuccess: () => {
        setSuccess(t("checkYourEmailForResetLink"));
        setIsLoading(false);
      },
      onError: () => {
        setError(t("emailNotFoundOrError"));
        setIsLoading(false);
      },
    });
  };

  return (
    <div className="space-y-4">
      <p className="relative pt-10 pb-6 text-2xl font-bold uppercase">{t("forgotPassword")}</p>

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
          <InputTextField
            name="email"
            label={t("email")}
            placeholder={t("enterYourEmail")}
            required
            className="!px-5 !py-4"
            autoFocus
          />

          <Button
            type="primary"
            className="!mt-8 w-full"
            loading={isLoading}
            onClick={form.submit}
            htmlType="submit"
          >
            <span className="font-bold uppercase">{t("resetPassword")}</span>
          </Button>
        </Form>
      </FormProvider>

      <div className="mt-8 flex flex-col justify-center">
        <div className="z-10 text-center">
          <Link
            href={ROUTERS.AUTH.LOGIN}
            className="text-purple font-bold hover:underline"
          >
            {t("backToLogin")}
          </Link>
        </div>
      </div>
    </div>
  );
}
