import React from 'react';
import { Navigation } from './navigation';
import { PaperProvider } from 'react-native-paper';

export const App: React.FC = () => {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};
