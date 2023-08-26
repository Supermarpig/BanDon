import React from "react";
import { cN } from "@lib/cN";
import { PaginationCommonProps } from "./pagination-type";

interface props extends PaginationCommonProps {
  id: string | number;
  isChoose?: boolean;
  clickFunction?: () => void;
  children?: React.ReactNode;
  className?: string;
}

function PaginationItem({
  isChoose,
  clickFunction,
  children,
  id,
  className,
}: props) {
  const pagesStyles = `w-[50px] h-[50px] max-lg:w-[30px] max-lg:h-[30px] rounded-full grid place-items-center text-dark_gray font-black shrink-0 hover:text-white hover:bg-black`;

  return (
    <button
      className={cN(
        pagesStyles,
        {
          [`bg-black  text-white`]: isChoose,
          "hover:bg-white hover:text-black pointer-events-none cursor-not-allowed":
            typeof id === "string",
        },
        className
      )}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
}

export default PaginationItem;
