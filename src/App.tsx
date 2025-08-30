import React from 'react';
import AppProvider from './provider/AppProvider';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  return (
    <AppProvider>
      <RootNavigation />
    </AppProvider>
  );
};

export default App;
