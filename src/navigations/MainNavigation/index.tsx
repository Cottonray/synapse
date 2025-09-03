import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import HomeScreen from '../../screens/home/HomeScreen';
import HomeIcon from '../../icons/HomeIcon';
import Routes from '../routes';
import SlidingTabBar from '../../components/SlidingTabBar';

import { MainNavigationItem } from '../types';
import SettingIcon from '../../icons/SettingIcon';
import SettingScreen from '../../screens/setting/SettingScreen';
import AnalyticsIcon from '../../icons/AnalyticsIcon';
import NavigationButton from '../../components/NavigationButton';
import { useTheme } from '../../hooks/useTheme';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const bottomNavigationItems: MainNavigationItem[] = [
    {
      route: Routes.Home,
      component: HomeScreen,
      options: {
        title: t('navigation.home'),
        tabBarButton: props => (
          <NavigationButton
            {...props}
            icon={<HomeIcon color={theme.colors.primary} />}
          />
        ),
      },
    },
    {
      route: 'Analytics',
      component: HomeScreen, // 임시로 HomeScreen 사용
      options: {
        title: t('navigation.analytics', 'Analytics'),
        tabBarButton: props => (
          <NavigationButton {...props} icon={<AnalyticsIcon />} />
        ),
      },
    },
    {
      route: 'Settings',
      component: SettingScreen,
      options: {
        title: t('navigation.settings', 'Settings'),
        tabBarButton: props => (
          <NavigationButton {...props} icon={<SettingIcon />} />
        ),
      },
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      tabBar={props => <SlidingTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      {bottomNavigationItems.map(item => (
        <Tab.Screen
          key={item.route}
          name={item.route}
          component={item.component}
          options={item.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainNavigation;
