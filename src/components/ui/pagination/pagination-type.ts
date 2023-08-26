export interface PaginationCommonProps {
  // 共用
}

export interface calcPagination {
  curPage: number; // 目前選擇的頁數
  totalPages: number; // 總頁數
}

export type BoundaryQuantity = 1 | 2;
export type VisibleQuantity = 5 | 7 | 9 | 11;

export type ClassName = {
  paginationButtonClassName?: string; // 自訂button樣式
  paginationItemClassName: string; // 自訂頁碼樣式
};

export type BtnChildren = {
  prevBtn?: React.ReactNode;
  nextBtn?: React.ReactNode;
};
