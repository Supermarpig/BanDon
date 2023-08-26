import { type ClassValue } from "@lib/cN";

export interface TagProps {
  children: React.ReactNode;
  isActive?: boolean;
  className?: ClassValue;
  activeClass?: string;
  value?: any;
  onClick?: (value: any) => void;
}

export type Variant = "outlined" | "contained" | "text";
