import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../hooks/useTheme';

interface HomeIconProps {
  color?: string;
  size?: number;
  focused?: boolean;
}

const HomeIcon = ({ color, size = 24, focused }: HomeIconProps) => {
  const { theme } = useTheme();

  const iconColor =
    color ||
    (focused ? theme.colors.tabBarActive : theme.colors.tabBarInactive);

  return <Icon name="home" color={iconColor} size={size} />;
};

export default HomeIcon;
