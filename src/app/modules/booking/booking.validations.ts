import { z } from 'zod';

const create = z.object({
  body: z.object({
    userId: z.string(),
    serviceId: z.string(),
    // appointment: z.date(), // Assuming it's a valid date string or Date object
    status: z.enum(["booked", "completed", "canceled"]).optional(),
  }),
});

const update = z.object({
  body: z.object({
    userId: z.string().optional(),
    serviceId: z.string().optional(),
    // appointment: z.date().optional(), // Assuming it's a valid date string or Date object
    status: z.enum(['booked', 'completed', 'canceled']).optional(),
  }),
});

export const BookingValidation = {
  create,
  update,
};
