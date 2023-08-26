"use client";

import { cN } from "@lib/cN";
import { useState } from "react";
import type { CarouselSettings } from "./carousel-types";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselNavigation from "./carousel-navigation";
import CarouselPagination from "./carousel-pagination";

import "swiper/css";

export interface Props extends CarouselSettings {
  slides: React.ReactNode[];
}

const Carousel = (props: Props) => {
  const {
    slides = [],
    navigation = true,
    pagination = true,
    navigationOptions = {},
    paginationOptions = {},
    className,
    containerClassName,
    ...swiperSettings
  } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const needNavigate = slides.length > (swiperSettings.slidesPerView ?? 1);
  const pageCount = Math.ceil(
    slides.length / (swiperSettings.slidesPerGroup ?? 1),
  );
  const activePage = Math.ceil(
    activeIndex / (swiperSettings.slidesPerGroup ?? 1),
  );
  const updateActiveIndex = (slide: any) => {
    setActiveIndex(slide.realIndex);
  };

  return (
    <div className={cN("relative", className)}>
      <Swiper
        onActiveIndexChange={updateActiveIndex}
        className={cN("!static", containerClassName)}
        {...swiperSettings}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>{slide}</SwiperSlide>
        ))}

        <span slot="container-end">
          {!!navigation && (
            <CarouselNavigation
              disabled={!needNavigate}
              {...navigationOptions}
            />
          )}
          {!!pagination && (
            <CarouselPagination
              disabled={!needNavigate}
              pageCount={pageCount}
              activePage={activePage}
              {...paginationOptions}
            />
          )}
        </span>
      </Swiper>
    </div>
  );
};

export default Carousel;
