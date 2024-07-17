import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// export const DOMAIN = "http://localhost:3000";
export const DOMAIN = "https://pest-detection.vercel.app";

export const months = [
  {
    value: "01",
    label: "January",
  },
  {
    value: "02",
    label: "February",
  },
  {
    value: "03",
    label: "March",
  },
  {
    value: "04",
    label: "April",
  },
  {
    value: "05",
    label: "May",
  },
  {
    value: "06",
    label: "June",
  },
  {
    value: "07",
    label: "July",
  },
  {
    value: "08",
    label: "August",
  },
  {
    value: "09",
    label: "September",
  },
  {
    value: "10",
    label: "October",
  },
  {
    value: "11",
    label: "November",
  },
  {
    value: "12",
    label: "December",
  },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatInference = (time: number) => {
  return `${(time * 100).toFixed(2)} ms`;
};

export const formatDate = (date: Date, hasDay?: boolean) => {
  const month = months[date.getMonth()].label;
  const day = date.getDate();
  const year = date.getFullYear();

  return !hasDay ? `${month} ${year}` : `${month} ${day}, ${year}`;
};
