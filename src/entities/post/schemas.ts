import { z } from 'zod';
import { getPaginatedSchema } from '~/shared/lib';

export const ReactionsSchema = z.object({
  likes: z.number(),
  dislikes: z.number(),
});

export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  tags: z.string().array(),
  reactions: ReactionsSchema,
  views: z.number(),
  userId: z.number(),
});

export const PostPaginatedSchema = getPaginatedSchema('posts', PostSchema);

export type Post = z.infer<typeof PostSchema>;
export type Reactions = z.infer<typeof ReactionsSchema>;

export type PostPaginated = z.infer<typeof PostPaginatedSchema>;
