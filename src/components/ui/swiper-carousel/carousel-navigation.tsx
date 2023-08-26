"use client";

import { useSwiper } from "swiper/react";
import type { NavigationOptions } from "./carousel-types";
import { cN } from "@lib/cN";

interface Props extends NavigationOptions {
  disabled: boolean;
}

const CarouselNavigation = (props: Props) => {
  const { nextEl, prevEl, className, disabled } = props;
  const swiper = useSwiper();

  function slideNext() {
    swiper.slideNext();
  }

  function slidePrev() {
    swiper.slidePrev();
  }

  const btnClass = "cursor-pointer";
  return (
    <div
      className={cN(
        "absolute left-0 top-1/2 z-[1] flex w-full -translate-y-1/2 justify-between gap-3",
        { hidden: disabled },
        className,
      )}
    >
      <div className={btnClass} onClick={slidePrev}>
        {prevEl ?? "<"}
      </div>
      <div className={btnClass} onClick={slideNext}>
        {nextEl ?? ">"}
      </div>
    </div>
  );
};

export default CarouselNavigation;
