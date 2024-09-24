import { createEffect, createEvent, sample } from 'effector';
import { $posts, getPosts } from '~/entities/post';
import { $postsTotal } from '~/entities/post';

export const getMorePostsFx = createEffect({
  name: 'get posts fx',
  handler: (skip: number) => {
    return getPosts({
      skip,
      limit: 5,
    });
  },
});

export const getMorePosts = createEvent<void>('get more posts');

sample({
  clock: getMorePosts,
  source: $postsTotal,
  target: getMorePostsFx,
});

$posts.on(getMorePostsFx.doneData, (prevPosts, nextPosts) => [...prevPosts, ...nextPosts]);
$postsTotal.on(getMorePostsFx.doneData, (counter) => counter + 5);
