export type IHomeServiceFilterRequest = {
  searchTerm?: string | undefined;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  category?: number | undefined;
  organization: string | undefined;
  subCategory: string | undefined;
  serviceArea: string | undefined;
};
