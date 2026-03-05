"use client";

import { LoadingSpinner } from "@/components/ui/feedback/loading-spinner";
import { useRouter } from "@/libs/i18n/navigation";
import { ROUTERS } from "@/constants/routers";
import { useAppSelector } from "@/store";
import { useEffect, useMemo, useState } from "react";
import { QRCodeStep } from "../_components/setup-2fa/setup-step";
import { VerifyStep } from "../_components/setup-2fa/verify-step";
import { useSearchParams } from "next/navigation";
import { decodeQueryParam } from "@/utils/query-param";

enum TwoFAStep {
  QRCode = "qrCode",
  Verify = "verify",
}

interface TwoFAQRCodeData {
  qrCodeUrl: string;
  secret: string;
}

export default function Verify2FAPage() {
  const userInfo = useAppSelector((state) => state.user.user);
  const router = useRouter();
  const searchParams = useSearchParams();

  const provisioningQuery = searchParams.get("p");
  const provisioningUri = useMemo(() => decodeQueryParam(provisioningQuery ?? ""), [provisioningQuery]);
  const initialStep = provisioningUri ? TwoFAStep.QRCode : TwoFAStep.Verify;
  const [currentStep, setCurrentStep] = useState<TwoFAStep>(initialStep);
  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const qrCodeData: TwoFAQRCodeData = {
    qrCodeUrl: provisioningUri,
    secret: "",
  };
  const onSuccessVerify = () => {
    router.push(ROUTERS.DASHBOARD.INDEX);
  };

  if (!userInfo?.validate2FaKey && !provisioningUri) {
    return (
      <div className="flex min-h-[60svh] items-center justify-center bg-gray-50">
        <LoadingSpinner text="Đang tải thông tin..." />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-6">
        {currentStep === TwoFAStep.QRCode && (
          <QRCodeStep
            qrData={qrCodeData}
            onNext={() => setCurrentStep(TwoFAStep.Verify)}
          />
        )}
        <VerifyStep
          onSuccess={onSuccessVerify}
          type={currentStep === TwoFAStep.QRCode ? "setup" : "verify"}
          validate2FaKey={userInfo?.validate2FaKey || provisioningUri || undefined}
        />
      </div>
    </div>
  );
}
