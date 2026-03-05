"use client";

import { InputTextField } from "@/components/ui/input/input-text";
import { Form, Modal } from "antd";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";

interface ModalConfirmRegisterProps {
  data: {
    email: string;
    fullName: string;
    referralCode: string;
  };
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onOk?: (data: { email: string; fullName: string; referralCode: string }) => void;
  onCancel?: () => void;
}

export function ModalConfirmRegister({ data, onCancel, onOk, isOpen, setIsOpen }: ModalConfirmRegisterProps) {
  const t = useTranslations("AuthPage");

  const methods = useForm({
    values: {
      email: data.email,
      fullName: data.fullName,
      referralCode: data.referralCode,
    },
  });

  return (
    <Modal
      centered
      closeIcon
      closable={false}
      okText={t("confirm")}
      cancelText={t("cancel")}
      onOk={() => {
        if (onOk) {
          onOk(methods.getValues());
          setIsOpen(false);
        }
      }}
      onCancel={() => {
        setIsOpen(false);
        if (onCancel) onCancel();
      }}
      open={isOpen}
    >
      <div className="py-4 text-center">
        <h2 className="text-lg font-semibold">{t("confirmRegistration")}</h2>
        <p className="text-gray-500">{t("confirmRegistrationDescription")}</p>
      </div>
      <FormProvider {...methods}>
        <Form
          className="space-y-2"
          layout="vertical"
        >
          <InputTextField
            name="email"
            label={t("email")}
            disabled
          />
          <InputTextField
            name="fullName"
            label={t("fullName")}
            disabled
          />
          <InputTextField
            name="referralCode"
            label={t("referralCode")}
            disabled
          />
        </Form>
      </FormProvider>
    </Modal>
  );
}
