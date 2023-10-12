export const homeServiceFilterableFields: string[] = [
  'searchTerm',
  'minPrice',
  'maxPrice',
  'categoryId',
  'organization',
  'subCategory',
  'serviceArea',
];

export const homeServiceSearchableFields: string[] = [
  'title',
  'subCategory',
  'description',
  'organization',
  'serviceArea',
];

export const homeServiceRelationalFields: string[] = ['categoryId'];

export const homeServiceRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
