import React from "react";
import { cN } from "@lib/cN";
import { PaginationCommonProps } from "./pagination-type";

interface props extends PaginationCommonProps {
  className?: string;
  disabled?: boolean;
  isBtnWrap: Boolean;
  clickFunction?: () => void;
  children?: React.ReactNode;
}

function PaginationButton({
  disabled,
  clickFunction,
  children,
  isBtnWrap,
  className,
}: props) {
  const stepButtonStyles = `rounded-full border-2 border-dark_gray  grid place-items-center text-dark_gray bg-white font-black  hover:bg-black  hover:text-white shrink-0 rounded-[50px] max-lg:w-[140px] w-[174px] h-[42px]`;
  return (
    <button
      className={cN(
        stepButtonStyles,
        {
          "pointer-events-none cursor-not-allowed": disabled,
          "max-lg:order-2 ": isBtnWrap,
        },
        className
      )}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
