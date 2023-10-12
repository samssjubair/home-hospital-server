import { z } from 'zod';

const create = z.object({
  body: z.object({
    userId: z.string(),
    serviceId: z.string(),
    bookingId: z.string().optional(),
    text: z.string(),
    rating: z.number().int(),
  }),
});

const update = z.object({
  body: z.object({
    userId: z.string().optional(),
    serviceId: z.string().optional(),
    bookingId: z.string().optional(),
    text: z.string().optional(),
    rating: z.number().int().optional(),
  }),
});

export const ReviewValidation = {
  create,
  update,
};
