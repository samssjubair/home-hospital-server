import { z } from 'zod';

const create = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'User id is required',
    }),
    orderedBooks: z.array(
      z.object({
        bookId: z.string({
          required_error: 'Book id is required',
        }),
        quantity: z.number({
          required_error: 'Quantity is required',
        }),
      })
    ),
  }),
});

const update = z.object({
  body: z.object({
    userId: z.string().optional(),
    orderedBooks: z.array(
      z.object({
        bookId: z.string().optional(),
        quantity: z.number().optional(),
      })
    ).optional(),
    
  }),
});

export const OrderValidation = {
  create,
  update,
};
