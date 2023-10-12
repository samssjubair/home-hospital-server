import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string(),
    department: z.string().optional(),
    subCategory: z.string(),
    description: z.string(),
    organization: z.string().optional(),
    serviceArea: z.string().optional(),
    price: z.number(),
    categoryId: z.string(),
  }),
});

// Schema for updating an existing service
const update = z.object({
  body: z.object({
    title: z.string().optional(),
    department: z.string().optional(),
    subCategory: z.string().optional(),
    description: z.string().optional(),
    organization: z.string().optional(),
    serviceArea: z.string().optional(),
    price: z.number().optional(),
    categoryId: z.string().optional(),
  }),
});

export const ServiceValidation = {
  create,
  update,
};
