"use client";

import { cN } from "@lib/cN";
import PaginationButton from "./pagination-button";
import PaginationItem from "./pagination-item";
import useCalculateDisplayPage from "./useCalculateDisplayPage";
import {
  PaginationCommonProps,
  calcPagination,
  BoundaryQuantity,
  VisibleQuantity,
  BtnChildren,
  ClassName,
} from "./pagination-type";

interface Props extends PaginationCommonProps, calcPagination {
  boundary?: BoundaryQuantity; // ...前後的頁碼
  visibleQuantity?: VisibleQuantity; // 需要幾格
  onChange: (page: number) => void; //點擊功能
  hasBtnBorder?: boolean; // 按鈕線條
  isBtnWrap?: boolean; // 按鈕斷行
  displayButton?: boolean; // 顯示隱藏按鈕
  btnChildren?: BtnChildren;
  ClassName?: ClassName;
}

function Pagination(prop: Props) {
  const {
    ClassName,
    curPage,
    totalPages,
    onChange,
    boundary = 2,
    visibleQuantity = 11,
    displayButton = true,
    isBtnWrap = true,
    btnChildren,
  } = prop;

  const { displayPages } = useCalculateDisplayPage({
    curPage,
    totalPages,
    boundary,
    visibleQuantity,
  });
  const paginationDefaultStyle = `justify-center flex items-center gap-[30px]`;
  const pageItemsContainer = `flex items-center max-lg:text-xs justify-center`;

  const handleSelectPage = (page: number | string) => {
    if (typeof page !== "string") onChange(page);
  };

  return (
    <div className="max-lg:w-[330px] m-auto ">
      <div
        className={cN(paginationDefaultStyle, ClassName, {
          "max-lg:w-full max-lg:flex-wrap max-lg:gap-y-5 max-lg:gap-x-[10px]":
            isBtnWrap,
        })}
      >
        {displayButton && displayPages.length > 1 && (
          <PaginationButton
            isBtnWrap={isBtnWrap}
            disabled={1 === curPage}
            clickFunction={() => handleSelectPage(curPage - 1)}
            className={ClassName?.paginationButtonClassName}
          >
            {btnChildren?.prevBtn ?? "上一頁"}
          </PaginationButton>
        )}
        <div className={cN(pageItemsContainer, { "max-lg:w-full": isBtnWrap })}>
          {displayPages.map((page) => (
            <PaginationItem
              key={page}
              id={page}
              isChoose={page === curPage}
              clickFunction={() => handleSelectPage(page)}
              className={ClassName?.paginationItemClassName}
            >
              {page}
            </PaginationItem>
          ))}
        </div>
        {displayButton && displayPages.length > 1 && (
          <PaginationButton
            isBtnWrap={isBtnWrap}
            disabled={totalPages === curPage}
            clickFunction={() => handleSelectPage(curPage + 1)}
            className={ClassName?.paginationButtonClassName}
          >
            {btnChildren?.nextBtn ?? "下一頁"}
          </PaginationButton>
        )}
      </div>
    </div>
  );
}

export default Pagination;
