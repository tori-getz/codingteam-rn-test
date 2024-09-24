import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IPostInfoProps {
  title: string;
  body: string;
  views: number;
  tags: string[],
}

export const PostInfo: React.FC<IPostInfoProps> = ({ title, body, views, tags }) => {
  return (
    <View style={styles.post}>
      <Text style={styles.post__title}>{title}</Text>
      <Text>{body}</Text>
      <Text style={styles.post__tags}>Tags: {tags.join(', ')}</Text>
      <View style={styles.post__views}>
        <Text>{views} views</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  post: {
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  post__title: {
    fontWeight: '700',
    fontSize: 18,
  },
  post__tags: {
    marginTop: 8,
  },
  post__views: {
    marginTop: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
