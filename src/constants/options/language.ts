import { Language } from "@/libs/i18n/type";

export const LanguageOptions: { label: string; value: Language }[] = [
  {
    label: "Tiếng Việt",
    value: Language.VI,
  },
  {
    label: "English",
    value: Language.EN,
  },
] as const;

export function getLanguageLabel(value: Language): string | undefined {
  const option = LanguageOptions.find((opt) => opt.value === value);
  return option ? option.label : undefined;
}
