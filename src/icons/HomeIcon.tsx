import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HomeIconProps {
  color: string;
  size: number;
}

const HomeIcon = ({ color, size }: HomeIconProps) => (
  <Icon name="home" color={color} size={size} />
);

export default HomeIcon;
