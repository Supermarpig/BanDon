"use client";

import type { TagProps } from "./tag-types";
import { cN } from "@lib/cN";
import Link from "next/link";

const Tag = (props: TagProps) => {
  const { isActive, onClick, className, activeClass = "", children } = props;

  const defaultClass =
    "rounded-4xl inline-flex justify-center items-center px-5 py-1";
  const classes = cN(defaultClass, className, {
    [activeClass]: isActive,
    "cursor-pointer": !!onClick,
  });

  return (
    <span className={classes} onClick={onClick}>
      {children}
    </span>
  );
};

export default Tag;
