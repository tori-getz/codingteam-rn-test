import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PostsList } from '~/widgets/posts-list';

export const PostsPage: React.FC = () => {
  return (
    <View style={styles.page}>
      <PostsList />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: '100%',
  },
});
