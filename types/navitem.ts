import { LucideIcon } from "lucide-react";

export type NavItemType = {
  label: string;
  link: string;
  query: {
    [key: string]: string;
  };
  icon: LucideIcon;
};
