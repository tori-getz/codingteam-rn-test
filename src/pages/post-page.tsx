import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PostView } from '~/widgets/post-view';

export const PostPage: React.FC = () => {
  const route = useRoute();
  const { postId } = route.params as { postId: number };

  return (
    <ScrollView style={styles.post}>
      <PostView postId={postId} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
  },
});
