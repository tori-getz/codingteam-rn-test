import { http } from '~/shared/http';
import { Post, PostPaginated, PostPaginatedSchema } from './schemas';

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await http.get<PostPaginated>('/posts');

  await PostPaginatedSchema.parseAsync(data);

  return data.posts as Post[];
};
