import { z } from 'zod';

const create = z.object({
  body: z.object({
    userId: z.string(),
    feedback: z.string(),
  }),
});

const update = z.object({
  body: z.object({
    userId: z.string().optional(),
    feedback: z.string().optional(),
  }),
});

export const FeedbackValidation = {
  create,
  update,
};
