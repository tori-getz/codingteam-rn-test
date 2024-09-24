import { useUnit } from 'effector-react';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { $posts, getPostsFx, PostCard } from '~/entities/post';

export const PostsList: React.FC = () => {
  const posts = useUnit($posts);
  const postsLoading = useUnit(getPostsFx.pending);

  return (
    <ScrollView
      style={styles.posts}
      refreshControl={<RefreshControl refreshing={postsLoading} onRefresh={getPostsFx} />}
    >
      {posts.map((post) => (
        <PostCard
          title={post.title}
          body={post.body}
          key={post.id}
          onPress={() => console.log(JSON.stringify(post))}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  posts: {
    flex: 1,
    padding: 8,
  },
});
