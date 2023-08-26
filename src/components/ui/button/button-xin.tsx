"use client";

import { cN } from "@lib/cN";
import type { ButtonProps, Variant, Theme } from "./button-types";
import Button from "./button";
import { getButtonStyles } from "./getTheme";

interface Props extends ButtonProps {
  text?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: Variant;
  theme?: Theme;
}

const ButtonXin = (props: Props) => {
  const {
    variant = "outlined",
    theme = "primary",
    className,
    text,
    leftIcon,
    rightIcon,
    ...buttonProps
  } = props;

  const styles = cN(
    "inline-flex gap-2 items-center px-16 py-2",
    getButtonStyles(variant, theme),
    className,
  );
  return (
    <Button {...buttonProps} className={styles}>
      {leftIcon && leftIcon}
      {text}
      {rightIcon && rightIcon}
    </Button>
  );
};

export default ButtonXin;
