import { createEffect, createStore } from 'effector';
import { Post } from '../schemas';
import { getPost } from '../api';

export const $currentPost = createStore<Post | null>(null, { name: 'current post' });

export const getPostFx = createEffect({
  name: 'get post fx',
  handler: getPost,
});

$currentPost.on(getPostFx.doneData, (_, post) => post);
