"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex h-screen w-screen items-center justify-center">
      <div className="absolute top-2 right-2 z-50">
        <LanguageSwitcher shouldFetchUserSettings />
      </div>
      <Image
        src="/login-background.svg"
        alt="background"
        width={1920}
        height={1080}
        priority
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
      />
      <div className="relative min-w-md rounded-md bg-white p-6 shadow-md">{children}</div>
    </div>
  );
}
