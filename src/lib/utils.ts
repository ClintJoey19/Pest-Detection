import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// export const DOMAIN = "http://localhost:3000";
export const DOMAIN = "https://pest-detection.vercel.app";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatInference = (time: number) => {
  return `${(time * 100).toFixed(2)} ms`;
};

export const getDaysOfMonth = () => {};
