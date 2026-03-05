import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isLeapYear from "dayjs/plugin/isLeapYear";

// Extend dayjs with plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(isTomorrow);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(quarterOfYear);
dayjs.extend(localizedFormat);
dayjs.extend(isLeapYear);

// Set default timezone (you can change this based on your needs)
// dayjs.tz.setDefault('UTC');

export default dayjs;

// Common date formats for consistency across the app
export const DATE_FORMATS = {
  // Display formats
  DISPLAY_DATE: "DD/MM/YYYY",
  DISPLAY_DATE_TIME: "DD/MM/YYYY HH:mm",
  DISPLAY_DATE_TIME_SECONDS: "DD/MM/YYYY HH:mm:ss",
  DISPLAY_TIME: "HH:mm",
  DISPLAY_TIME_SECONDS: "HH:mm:ss",

  DISPLAY_SECONDS_TIME_DATE: "HH:mm:ss DD/MM/YYYY",

  // API formats (ISO)
  API_DATE: "YYYY-MM-DD",
  API_DATE_TIME: "YYYY-MM-DDTHH:mm:ss",
  API_DATE_TIME_UTC: "YYYY-MM-DDTHH:mm:ss[Z]",

  // Localized formats
  LOCALIZED_DATE: "LL",
  LOCALIZED_DATE_TIME: "LLL",
  LOCALIZED_FULL: "LLLL",

  // Common formats
  MONTH_YEAR: "MM/YYYY",
  YEAR: "YYYY",
  MONTH_DAY: "MM/DD",
  DAY_MONTH: "DD/MM",
} as const;

// Common timezones
export const TIMEZONES = {
  UTC: "UTC",
  VIETNAM: "Asia/Ho_Chi_Minh",
  JAPAN: "Asia/Tokyo",
  SINGAPORE: "Asia/Singapore",
} as const;

// Helper functions for common date operations
export const dateHelpers = {
  /**
   * Format date for display
   */
  formatDisplay: (date: dayjs.ConfigType, format: string = DATE_FORMATS.DISPLAY_DATE) => {
    return dayjs(date).format(format);
  },

  /**
   * Format date for API
   */
  formatApi: (date: dayjs.ConfigType, includeTime: boolean = false) => {
    const format = includeTime ? DATE_FORMATS.API_DATE_TIME : DATE_FORMATS.API_DATE;
    return dayjs(date).format(format);
  },

  /**
   * Format date relative to now (e.g., "2 hours ago")
   */
  formatRelative: (date: dayjs.ConfigType) => {
    return dayjs(date).fromNow();
  },

  /**
   * Check if date is today
   */
  isToday: (date: dayjs.ConfigType) => {
    return dayjs(date).isToday();
  },

  /**
   * Check if date is yesterday
   */
  isYesterday: (date: dayjs.ConfigType) => {
    return dayjs(date).isYesterday();
  },

  /**
   * Check if date is tomorrow
   */
  isTomorrow: (date: dayjs.ConfigType) => {
    return dayjs(date).isTomorrow();
  },

  /**
   * Get duration between two dates
   */
  getDuration: (from: dayjs.ConfigType, to: dayjs.ConfigType, unit?: dayjs.OpUnitType) => {
    return dayjs(to).diff(dayjs(from), unit);
  },

  /**
   * Convert to specific timezone
   */
  toTimezone: (date: dayjs.ConfigType, timezone: string) => {
    return dayjs(date).tz(timezone);
  },

  /**
   * Convert to UTC
   */
  toUtc: (date: dayjs.ConfigType) => {
    return dayjs(date).utc();
  },

  /**
   * Convert UTC date to specific timezone
   */
  fromUtcToTimezone: (
    utcDate: dayjs.ConfigType,
    timezone: string,
    format: DateFormat = DATE_FORMATS.DISPLAY_DATE_TIME_SECONDS,
  ) => {
    return dayjs.utc(utcDate).tz(timezone).format(format);
  },

  /**
   * Get current time in specific timezone
   */
  nowInTimezone: (timezone: string) => {
    return dayjs().tz(timezone);
  },

  /**
   * Parse date with custom format
   */
  parseCustom: (dateString: string, format: string) => {
    return dayjs(dateString, format);
  },

  /**
   * Check if date is valid
   */
  isValid: (date: dayjs.ConfigType) => {
    return dayjs(date).isValid();
  },

  /**
   * Get current timestamp
   */
  now: () => {
    return dayjs();
  },

  /**
   * Get current timestamp in UTC
   */
  nowUtc: () => {
    return dayjs().utc();
  },

  /**
   * Get timezone offset in minutes for a specific timezone
   */
  getTimezoneOffset: (timezone: string, date?: dayjs.ConfigType) => {
    const targetDate = date ? dayjs(date) : dayjs();
    return targetDate.tz(timezone).utcOffset();
  },
};

// Type definitions for better TypeScript support
export type DateInput = dayjs.ConfigType;
export type DateFormat = (typeof DATE_FORMATS)[keyof typeof DATE_FORMATS];
export type Timezone = (typeof TIMEZONES)[keyof typeof TIMEZONES];
