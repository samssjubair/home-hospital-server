export const studentFilterableFields: string[] = [
  'searchTerm',
  'minPrice',
  'maxPrice',
  'categoryId'
];

export const studentSearchableFields: string[] = [
  'title',
  'author',
  'genre'
];

export const bookRelationalFields: string[] = [
  'categoryId',
];
export const bookRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
