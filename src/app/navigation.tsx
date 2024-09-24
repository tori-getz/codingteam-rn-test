import React from 'react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PostsPage } from '~/pages/posts-page';
import { PostPage } from '~/pages/post-page';

type RootStackParamList = {
  PostsPage: undefined;
  PostPage: { postId: number };
};

const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = <RouteName extends keyof RootStackParamList>(
  routeName: RouteName,
  params?: RootStackParamList[RouteName]
) => {
  // @ts-expect-error пока без понятия как починить, но оно работает
  navigationRef.navigate(routeName, params);
};

const Stack = createStackNavigator();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: 'Posts' }}
          name="PostsPage"
          component={PostsPage}
        />
        <Stack.Screen
          options={{ title: 'Post' }}
          name="PostPage"
          component={PostPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
