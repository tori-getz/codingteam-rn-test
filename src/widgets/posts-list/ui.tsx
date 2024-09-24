import { useUnit } from 'effector-react';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { $posts, PostCard } from '~/entities/post';
import { allPostsUpdated, timerReseted } from '~/entities/post/model';
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
    <ScrollView
      style={styles.posts}
      contentContainerStyle={styles.posts__content}
      refreshControl={<RefreshControl refreshing={refreshLoading} onRefresh={onRefresh} />}
    >
      {posts.map((post) => (
        <PostCard
          title={post.title}
          body={post.body}
          key={post.id}
          onPress={() => console.log(JSON.stringify(post))}
        />
      ))}
      <LoadMorePosts />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  posts: {
    flex: 1,
  },
  posts__content: {
    padding: 8,
  },
});
