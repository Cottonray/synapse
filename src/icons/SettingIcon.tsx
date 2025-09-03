import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../hooks/useTheme';

interface SettingIconProps {
  color?: string;
  size?: number;
  focused?: boolean;
}

const SettingIcon = ({ color, size = 24, focused }: SettingIconProps) => {
  const { theme } = useTheme();

  const iconColor =
    color ||
    (focused ? theme.colors.tabBarActive : theme.colors.tabBarInactive);

  return <Icon name="settings" color={iconColor} size={size} />;
};

export default SettingIcon;
