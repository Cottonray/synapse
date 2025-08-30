import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface AnalyticsIconProps {
  color: string;
  size: number;
}

const AnalyticsIcon = ({ color, size }: AnalyticsIconProps) => (
  <Icon name="analytics" color={color} size={size} />
);

export default AnalyticsIcon;
