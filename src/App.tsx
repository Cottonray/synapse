import React from 'react';
import 'react-native-reanimated';
import AppProvider from './providers/AppProvider';
import RootNavigation from './navigations/RootNavigation';

const App = () => {
  return (
    <AppProvider>
      <RootNavigation />
    </AppProvider>
  );
};

export default App;
