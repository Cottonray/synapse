import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import HomeScreen from '../screens/home/HomeScreen';
import HomeIcon from '../icons/HomeIcon';
import SettingScreen from '../screens/setting/SettingScreen';
import SettingIcon from '../icons/SettingIcon';
import Routes from './routes';
import AnalyticsIcon from '../icons/AnalyticsIcon';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator initialRouteName={Routes.Home}>
      <Tab.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{
          title: t('navigation.home'),
          tabBarIcon: HomeIcon,
        }}
      />

      <Tab.Screen
        name={Routes.Analytics}
        component={HomeScreen}
        options={{
          title: t('navigation.analytics'),
          tabBarIcon: AnalyticsIcon,
        }}
      />

      <Tab.Screen
        name={Routes.Setting}
        component={SettingScreen}
        options={{
          title: t('navigation.setting'),
          tabBarIcon: SettingIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
