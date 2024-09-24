import { useUnit } from 'effector-react';
import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { navigate } from '~/app/navigation';
import { $posts, PostCard, allPostsUpdated, timerReseted } from '~/entities/post';
import { LoadMorePosts } from '~/features/load-more-posts';

export const PostsList: React.FC = () => {
  const [posts, resetTimer] = useUnit([$posts, timerReseted]);
  const [refreshLoading, setRefreshLoading] = useState<boolean>(false);

  const onRefresh = async () => {
    setRefreshLoading(true);

    await allPostsUpdated();
    await resetTimer();

    setRefreshLoading(false);
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(post) => post.id.toString()}
      refreshControl={<RefreshControl refreshing={refreshLoading} onRefresh={onRefresh} />}
      renderItem={({ item }) => (
        <PostCard
          title={item.title}
          body={item.body}
          onPress={() => navigate('PostPage', { postId: item.id })}
        />
      )}
      contentContainerStyle={styles.posts__content}
      ListFooterComponent={<LoadMorePosts />}
    />
  );
};

const styles = StyleSheet.create({
  posts__content: {
    padding: 8,
  },
});
