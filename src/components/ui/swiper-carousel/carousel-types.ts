import type { SwiperProps } from "swiper/react";
import { ClassValue } from "@lib/cN";

export interface CarouselSettings extends SwiperSettings {
  navigation?: boolean;
  navigationOptions?: NavigationOptions;
  pagination?: boolean;
  paginationOptions?: PaginationOptions;
}

type SwiperSettings = Pick<
  SwiperProps,
  "className" | "loop" | "autoplay" | "spaceBetween"
> & {
  slidesPerGroup?: number;
  slidesPerView?: number;
  containerClassName?: ClassValue;
};

export interface NavigationOptions {
  className?: ClassValue;
  nextEl?: React.ReactNode;
  prevEl?: React.ReactNode;
}

export interface PaginationOptions {
  className?: ClassValue;
  defaultPageClass?:ClassValue;
  renderPageEls?: (
    activeIndex: number,
    handlePageClick: (idx: number) => void,
  ) => React.ReactNode[];
}
