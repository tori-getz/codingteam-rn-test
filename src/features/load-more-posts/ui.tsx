import { useUnit } from 'effector-react';
import React from 'react';
import { Button } from 'react-native-paper';
import { getMorePosts, getMorePostsFx } from './model';

export const LoadMorePosts: React.FC = () => {
  const loading = useUnit(getMorePostsFx.pending);

  return (
    <Button mode="contained" loading={loading} onPress={() => getMorePosts()}>
      Load more
    </Button>
  );
};
