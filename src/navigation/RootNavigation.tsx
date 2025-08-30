import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './MainNavigation';
import Routes from './routes';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Main}
        component={MainNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
