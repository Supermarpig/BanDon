"use client";

import { cN } from "@lib/cN";
import type { ButtonProps, Variant, Theme } from "./button-types";
import Button from "./button";
import { getIconButtonStyles } from "./getTheme";

interface Props extends ButtonProps {
  icon: React.ReactNode;
  size?: number;
  variant?: Variant;
  theme?: Theme;
}

const IconButton = (props: Props) => {
  const {
    icon,
    size = 30,
    variant = "outlined",
    theme = "primary",
    className,
    ...buttonAttrs
  } = props;
  const styles = cN(
    `flex items-center justify-center h-[${size}px] aspect-square `,
    getIconButtonStyles(variant, theme),
    className,
  );

  return (
    <Button className={styles} {...buttonAttrs}>
      {icon}
    </Button>
  );
};

export default IconButton;
