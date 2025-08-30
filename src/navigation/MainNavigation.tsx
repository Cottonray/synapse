import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import HomeIcon from '../icons/HomeIcon';
import SettingScreen from '../screens/setting/SettingScreen';
import SettingIcon from '../icons/SettingIcon';
import Routes from './routes';
import AnalyticsIcon from '../icons/AnalyticsIcon';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.Home}>
      <Tab.Screen
        name={Routes.Analytics}
        component={HomeScreen}
        options={{
          title: '분석',
          tabBarIcon: AnalyticsIcon,
        }}
      />

      <Tab.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: HomeIcon,
        }}
      />

      <Tab.Screen
        name={Routes.Setting}
        component={SettingScreen}
        options={{
          title: '설정',
          tabBarIcon: SettingIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
