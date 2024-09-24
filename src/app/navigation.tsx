import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PostsPage } from '~/pages/posts-page';

const Stack = createStackNavigator();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PostsPage"
          component={PostsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
