import { z } from 'zod';

// Schema for creating a new CMSContent
const create = z.object({
  body: z.object({
    contentType: z.enum(['blog_post', 'faq', 'careers']), // ContentType is one of the enum values
    imageUrl: z.string().optional(),
    title: z.string(),
    content: z.string(),
  }),
});

const update = z.object({
  body: z.object({
    contentType: z.enum(['blog_post', 'faq', 'careers']).optional(),
    imageUrl: z.string().optional(),
    title: z.string().optional(),
    content: z.string().optional(),
  }),
});

export const CMSValidation = {
  create,
  update,
};
