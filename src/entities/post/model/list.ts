import { createEffect, createEvent, createStore, sample } from 'effector';
import { getPosts } from '../api';
import { Post } from '../schemas';
import { UPDATE_POSTS_IN_SECONDS } from '~/env';
import { AppState } from 'react-native';

export const $posts = createStore<Post[]>([], { name: 'posts' });
export const $postsTotal = createStore<number>(5, { name: 'posts total' });

export const timerReseted = createEvent<void>('timer reseted');

export const allPostsUpdated = createEvent<void>('all posts updated');

export const updatePostsFx = createEffect({
  name: 'update posts fx',
  handler: async (total: number) => {
    return await getPosts({ limit: total });
  },
});

$posts.on(updatePostsFx.doneData, (_, posts) => posts);

sample({
  clock: allPostsUpdated,
  source: $postsTotal,
  target: updatePostsFx,
});

let resetCounter = 0;

const createUpdater = () => {
  allPostsUpdated();
  return setInterval(() => {
    allPostsUpdated();
    console.log(`posts updated. reset counter = ${resetCounter} posts total = ${$postsTotal.getState()}`);
  }, UPDATE_POSTS_IN_SECONDS * 1000);
};

let updater = createUpdater();

timerReseted.watch(() => {
  console.log('timer reseted!');
  resetCounter += 1;
  clearInterval(updater);
  updater = createUpdater();
});

AppState.addEventListener('change', (state) => {
  if (state === 'background' || state === 'inactive') {
    console.log('shutdown...');
    clearInterval(updater);
  }

  if (state === 'active') {
    console.log('app started');
    clearInterval(updater);
    updater = createUpdater();
  }
});
