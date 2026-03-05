"use client";

import { Button } from "antd";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ROUTERS } from "@/constants/routers";
import { LoadingSpinner } from "@/components/ui/feedback/loading-spinner";
import { useRegisterComplete } from "@/services/auth/hooks";

function VerifyEmail() {
  const { mutate: registerComplete, isSuccess, isError, isPending } = useRegisterComplete();
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations("Setup2FA");
  const authT = useTranslations("AuthPage");
  const verifyKey = searchParams.get("key");
  const [hasAttempted, setHasAttempted] = useState(false);

  useEffect(() => {
    if (!verifyKey) return;
    if (hasAttempted) return;

    setHasAttempted(true);
    registerComplete(verifyKey);
  }, [verifyKey, hasAttempted, registerComplete]);

  const handleRetry = () => {
    if (verifyKey) {
      setHasAttempted(false);
      registerComplete(verifyKey);
    }
  };

  return (
    <div className="mx-auto mt-16 max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
      {isPending && (
        <div className="text-center">
          <LoadingSpinner text={t("verifying")} />
        </div>
      )}

      {isSuccess && (
        <div className="text-center">
          <div className="mb-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">{authT("verificationSuccessful")}</h3>
          <p className="mb-6 text-gray-600">{authT("accountNowActive")}</p>
          <Button
            className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            onClick={() => router.push("/login")}
            type="primary"
          >
            {authT("backToLogin")}
          </Button>
        </div>
      )}

      {isError && (
        <div className="text-center">
          <div className="mb-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-red-900">{t("emailVerificationFailed")}</h3>
          <p className="mb-6 text-sm text-gray-600">{t("verificationRetry")}</p>
          <div className="space-y-3">
            {verifyKey && (
              <Button
                className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                onClick={handleRetry}
                type="primary"
                loading={isPending}
              >
                {authT("tryAgain")}
              </Button>
            )}

            <Button
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50"
              onClick={() => router.push(ROUTERS.AUTH.LOGIN)}
              type="default"
            >
              {authT("backToLogin")}
            </Button>
          </div>
        </div>
      )}

      {!verifyKey && !isPending && (
        <div className="text-center">
          <div className="mb-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
              <svg
                className="h-6 w-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-yellow-900">{authT("invalidVerificationLink")}</h3>
          <p className="mb-4 text-yellow-700">{authT("verificationLinkMissing")}</p>
          <p className="mb-6 text-sm text-gray-600">{authT("checkEmailAndRetry")}</p>
          <Button
            className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            onClick={() => router.push("/register")}
            type="primary"
          >
            {authT("backToRegistration")}
          </Button>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;
