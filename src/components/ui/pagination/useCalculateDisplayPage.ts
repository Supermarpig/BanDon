import { useState, useEffect } from "react";
import { calcPagination,BoundaryQuantity,VisibleQuantity } from "./pagination-type";

interface PaginationType extends calcPagination{
  boundary: BoundaryQuantity; // ...前後需要幾格
  visibleQuantity: VisibleQuantity; // 顯示幾格
}


const useCalculateDisplayPage = ({
  curPage,
  visibleQuantity,
  totalPages,
  boundary,
}: PaginationType) => {
  const [displayPages, setDisplayPages] = useState<(string | number)[] | never>(
    []
  ); // 顯示所有頁碼
  const halfVisiblePages = Math.ceil(visibleQuantity / 2);

  const calculateDisplayPages = (page: number) => {
    const pages = []; // 畫面顯示的頁碼
    const firstHiddenIndex = boundary; // 第一個 ... 的 index
    const lastHiddenIndex = visibleQuantity - boundary - 1; // 第二個 ... 的 index
    const calcFirstHiddenIndexValue = page - halfVisiblePages + boundary + 1; // 計算第一個 ... 的值
    let startPage = 1;
    let renewPage = 0;

    if (page <= halfVisiblePages) renewPage = 1 + boundary; // 頁碼 1 ~ 中間格相連
    if (page >= totalPages - halfVisiblePages + 1)
      renewPage = totalPages - lastHiddenIndex; // 頁碼 中間格 ~ 頁尾
    if (page > halfVisiblePages && page < totalPages - halfVisiblePages + 1)
      renewPage = calcFirstHiddenIndexValue; // 頁碼... ~ ... 之間

    for (let i = 0; i < visibleQuantity; i++) {
      if (i < boundary) {
        // 最開始的頁碼
        pages.push(startPage);
        startPage++;
      } else if (i === firstHiddenIndex) {
        // 第一個...判斷 超過選擇頁碼超過VisibleQuantity中間變...
        page <= halfVisiblePages ? pages.push(renewPage) : pages.push("......");
        renewPage++;
      } else if (i >= visibleQuantity - boundary) {
        // 最後幾格的page
        pages.push(totalPages - (visibleQuantity - (i + 1)));
      } else if (i === lastHiddenIndex) {
        // 第二個...判斷
        page >= totalPages - halfVisiblePages + 1
          ? pages.push(renewPage)
          : pages.push("...... ");
      } else {
        // ... 之間的頁碼
        pages.push(renewPage);
        renewPage++;
      }
    }
    setDisplayPages(pages);
  };

  useEffect(() => {
    if (totalPages <= visibleQuantity) {
      const totalPagesArray = [];
      for (let i = 0; i < totalPages; i++) {
        totalPagesArray.push(i + 1);
      }
      setDisplayPages(totalPagesArray);
    } else {
      calculateDisplayPages(curPage);
    }
  }, [curPage]);

  return { displayPages };
}

export default useCalculateDisplayPage;
