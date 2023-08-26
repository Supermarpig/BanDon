"use client";

import Link from "next/link";
import { cN } from "@lib/cN";
import { type ButtonProps } from "./button-types";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const Button = (props: Props) => {
  const {
    type = "button",
    href,
    style,
    className,
    onClick,
    children,
    ...buttonAttrs
  } = props;

  const defaultClass =
    "flex justify-center items-center rounded-full cursor-pointer disabled:cursor-not-allowed";

  if (href)
    return (
      <Link
        className={cN(defaultClass, className)}
        href={href}
        onClick={onClick}
        style={style}
      >
        {children}
      </Link>
    );

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={cN(defaultClass, className)}
      {...buttonAttrs}
    >
      {children}
    </button>
  );
};

export default Button;
