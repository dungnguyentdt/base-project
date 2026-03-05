/**
 * Time formatting utilities
 */

/**
 * Format remaining time from seconds to human readable format
 * @param seconds - Remaining time in seconds
 * @returns Formatted remaining time string (e.g., "12:34:45")
 */
export const formatTimeDuration = (seconds: number): string => {
  if (typeof seconds !== "number" || seconds < 0) return "00";

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hrs > 0) {
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  } else if (mins > 0) {
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  } else {
    return secs.toString().padStart(2, "0");
  }
};

/**
 * Format time to HH:MM format
 * @param date - Date object, string, or timestamp
 * @returns Time string in HH:MM format
 */
export const formatTimeHHMM = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

/**
 * Format time to HH:MM:SS format
 * @param date - Date object, string, or timestamp
 * @returns Time string in HH:MM:SS format
 */
export const formatTimeHHMMSS = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const seconds = dateObj.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

/**
 * Format UTC time to local time in DD/MM/YYYY - HH:MM:SS format
 * @param utcDate - UTC date string, Date object, or timestamp
 * @returns Local time string in DD/MM/YYYY - HH:MM:SS format
 */
export const formatUTCToLocalFull = (utcDate: Date | string | number): string => {
  const dateObj =
    typeof utcDate === "string"
      ? new Date(utcDate + "Z") // Append 'Z' to indicate UTC time
      : new Date(utcDate);

  if (isNaN(dateObj.getTime())) return "";

  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const seconds = dateObj.getSeconds().toString().padStart(2, "0");

  return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
};
