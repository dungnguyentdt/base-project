"use client";

import { useDeviceDetection } from "@/hooks/use-device-detection";
import { QrcodeOutlined } from "@ant-design/icons";
import { QRCode, Typography } from "antd";
import { useTranslations } from "next-intl";
import React from "react";

const { Title, Text } = Typography;
interface QRCodeData {
  qrCodeUrl: string;
  secret: string;
}
export const QRCodeStep: React.FC<{
  qrData: QRCodeData;
  onNext: () => void;
}> = ({ qrData }) => {
  const t = useTranslations("Setup2FA");
  const deviceInfo = useDeviceDetection();

  // Determine the appropriate download link and text based on device
  const getAuthenticatorLink = () => {
    if (deviceInfo.isMac || deviceInfo.isIOS) {
      return {
        url: "https://apps.apple.com/vn/app/google-authenticator/id388497605",
        text: t("downloadForMac"),
      };
    } else {
      return {
        url: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en",
        text: t("downloadForWindows"),
      };
    }
  };

  const authenticatorLink = getAuthenticatorLink();

  return (
    <div className="space-y-2">
      <div className="text-center">
        <Title
          level={3}
          className="!mb-4"
        >
          <QrcodeOutlined />
          <span className="ml-2">{t("scanQRCode")}</span>
        </Title>
        <div>
          <Text className="text-gray-600 dark:text-gray-300">
            {t("scanDescription")}{" "}
            <a
              className="z-50 font-semibold hover:underline"
              href={authenticatorLink.url}
              target="_blank"
              rel="noopener noreferrer"
              z-index="10"
            >
              {t("googleAuthenticator")} {authenticatorLink.text}
            </a>
            .
          </Text>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <QRCode
            value={qrData.qrCodeUrl}
            size={200}
            level="H"
          />
        </div>
      </div>
    </div>
  );
};
