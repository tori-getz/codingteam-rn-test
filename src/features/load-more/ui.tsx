import { useUnit } from 'effector-react';
import React from 'react';
import { RefreshControl } from 'react-native';
import { getPostsFx } from '~/entities/post';

export const LoadMore: React.FC = () => {
  const loading = useUnit(getPostsFx.pending);

  return (
    <RefreshControl
      refreshing={false}
      onRefresh={getPostsFx}
    />
  );
};
