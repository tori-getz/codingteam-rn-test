import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Reactions } from '../schemas';

interface IPostReactionsProps {
  reactions: Reactions;
}

export const PostReactions: React.FC<IPostReactionsProps> = ({ reactions }) => {
  return (
    <View style={styles.reactions}>
      <Button mode="contained" buttonColor="green">
        {reactions.likes} Likes
      </Button>
      <Button mode="contained" buttonColor="red">
        {reactions.dislikes} Dislikes
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  reactions: {
    flexDirection: 'row',
    gap: 8,
    padding: 8,
    backgroundColor: 'white',
  },
});
