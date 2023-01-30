export interface PaginationType {
  onPageChange: (selectedItem: { selected: number }) => void;
  pageCount: number;
  marginPagesDisplayed?: number;
  currentPage: number;
}