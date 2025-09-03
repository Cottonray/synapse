import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export type MainNavigationItem = {
  route: string;
  component: () => React.JSX.Element;
  options: BottomTabNavigationOptions;
};
