import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardProps, Text } from 'react-native-paper';

interface IPostCardProps {
  title: string;
  body: string;
  onPress: CardProps['onPress'];
}

export const PostCard: React.FC<IPostCardProps> = ({ title, body, onPress }: IPostCardProps) => {
  return (
    <Card style={styles.post} onPress={onPress}>
      <Text style={styles.post__title}>{title}</Text>
      <Text>{body}</Text>
    </Card>
  );
};

export const styles = StyleSheet.create({
  post: {
    padding: 8,
  },
  post__title: {
    fontWeight: '800',
  },
});
