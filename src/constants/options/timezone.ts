import { Timezone, TIMEZONES } from "@/utils/dayjs";

export const TimezoneOptions: { label: string; value: Timezone }[] = [
  {
    label: "Asia/Ho_Chi_Minh",
    value: TIMEZONES.VIETNAM,
  },
  {
    label: "Asia/Singapore",
    value: TIMEZONES.SINGAPORE,
  },
  {
    label: "Asia/Tokyo",
    value: TIMEZONES.JAPAN,
  },
] as const;

export function getTimezoneLabel(value: Timezone | undefined): string | undefined {
  if (!value) return "";
  const option = TimezoneOptions.find((opt) => opt.value === value);
  return option ? option.label : "";
}

export function getTimezoneValue(label: string | undefined): Timezone | undefined {
  if (!label) return undefined;
  const option = TimezoneOptions.find((opt) => opt.label === label);
  return option ? option.value : undefined;
}
