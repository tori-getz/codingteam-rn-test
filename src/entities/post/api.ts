import qs from 'qs';
import { http } from '~/shared/http';
import { Post, PostPaginated, PostPaginatedSchema, PostSchema } from './schemas';
interface IGetPostsPayload {
  limit: number;
  skip: number;
}

export const getPosts = async (payload: Partial<IGetPostsPayload>): Promise<Post[]> => {
  const { data } = await http.get<PostPaginated>('/posts?' + qs.stringify(payload));

  await PostPaginatedSchema.parseAsync(data);

  return data.posts as Post[];
};

interface IGetPostPayload {
  id: number;
}

export const getPost = async (payload: IGetPostPayload): Promise<Post> => {
  const { data } = await http.get<Post>(`/posts/${payload.id}`);

  return await PostSchema.parseAsync(data);
};
