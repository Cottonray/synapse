import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SettingIconProps {
  color: string;
  size: number;
}

const SettingIcon = ({ color, size }: SettingIconProps) => (
  <Icon name="settings" color={color} size={size} />
);

export default SettingIcon;
