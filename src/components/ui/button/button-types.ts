import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  onClick?: () => void;
}

export type Variant = "outlined" | "text" | "contained";
export type Theme = "primary" | "secondary" | "tertiary";
