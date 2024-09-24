import qs from 'qs';
import { http } from '~/shared/http';
import { Post, PostPaginated, PostPaginatedSchema } from './schemas';


interface IGetPostsPayload {
  limit: number;
  skip: number;
}

export const getPosts = async (payload: Partial<IGetPostsPayload>): Promise<Post[]> => {
  console.log(qs.stringify(payload));
  const { data } = await http.get<PostPaginated>('/posts?' + qs.stringify(payload));

  await PostPaginatedSchema.parseAsync(data);

  return data.posts as Post[];
};
