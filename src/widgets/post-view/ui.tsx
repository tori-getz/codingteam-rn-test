import { useUnit } from 'effector-react';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { $currentPost, getPostFx, PostInfo, PostReactions } from '~/entities/post';

interface IPostViewProps {
  postId: number;
}

export const PostView: React.FC<IPostViewProps> = ({ postId }) => {
  const currentPost = useUnit($currentPost);
  const loading = useUnit(getPostFx.pending);

  useEffect(() => {
    getPostFx({ id: postId });
  }, [postId]);

  if (loading || currentPost === null) {
    return (
      <Text>
        Loading...
      </Text>
    );
  }

  return (
    <>
      <PostInfo
        title={currentPost.title}
        body={currentPost.body}
        tags={currentPost.tags}
        views={currentPost.views}
      />
      <PostReactions
        reactions={currentPost.reactions}
      />
    </>
  );
};
