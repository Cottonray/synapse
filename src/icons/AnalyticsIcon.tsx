import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../hooks/useTheme';

interface AnalyticsIconProps {
  color?: string;
  size?: number;
  focused?: boolean;
}

const AnalyticsIcon = ({ color, size = 24, focused }: AnalyticsIconProps) => {
  const { theme } = useTheme();

  const iconColor =
    color ||
    (focused ? theme.colors.tabBarActive : theme.colors.tabBarInactive);

  return <Icon name="analytics" color={iconColor} size={size} />;
};

export default AnalyticsIcon;
