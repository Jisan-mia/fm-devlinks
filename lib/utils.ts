/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortByKeyAsc<T>(array: T[], key: keyof T): T[] {
  return array.sort((a, b) => {
    if (a[key] < b[key]) return -1; // a comes before b
    if (a[key] > b[key]) return 1; // a comes after b
    return 0; // a and b are equal
  });
}
