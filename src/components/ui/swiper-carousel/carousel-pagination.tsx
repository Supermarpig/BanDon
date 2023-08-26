"use client";

import { useSwiper } from "swiper/react";
import type { PaginationOptions } from "./carousel-types";
import { cN } from "@lib/cN";

interface Props extends PaginationOptions {
  pageCount: number;
  activePage: number;
  disabled: boolean;
}

const CarouselPagination = (props: Props) => {
  const {
    pageCount,
    className,
    activePage,
    renderPageEls,
    disabled,
    defaultPageClass,
  } = props;
  const swiper = useSwiper();

  function handlePageClick(idx: number) {
    swiper.slideToLoop(idx);
  }

  function renderPages(): React.ReactNode[] {
    if (renderPageEls) return renderPageEls(activePage, handlePageClick);

    return [...new Array(pageCount)].map((_, i) => (
      <button
        key={i}
        onClick={() => handlePageClick(i)}
        className={cN(
          "h-2 w-2 cursor-pointer rounded-full bg-black opacity-30",
          { "opacity-100": i === activePage },
          defaultPageClass,
        )}
      ></button>
    ));
  }

  return (
    <div
      className={cN(
        "mt-8 flex items-center justify-center gap-3",
        { hidden: disabled },
        className,
      )}
    >
      {renderPages()}
    </div>
  );
};

export default CarouselPagination;
