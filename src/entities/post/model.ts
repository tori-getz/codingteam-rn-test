import { createEffect, createStore } from 'effector';
import { getPosts } from './api';
import { Post } from './schemas';

export const $posts = createStore<Post[]>([]);

export const getPostsFx = createEffect({
  name: 'get posts fx',
  handler: getPosts,
});

$posts.on(getPostsFx.doneData, (_, posts) => posts);
